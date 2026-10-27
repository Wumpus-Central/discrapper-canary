n.d(t, { A: () => H });
var i = n(535558),
    r = n(439372),
    a = n(91242),
    s = n(625494),
    l = n(633802),
    o = n(435558),
    d = n(332874);
n(321073);
var c = n(780594),
    u = n.n(c),
    _ = n(64460),
    E = n(938812),
    A = n(775121),
    h = n(484697),
    f = n(532624),
    I = n(723702),
    p = n(350535),
    T = n(652215);
let m = new Set([
        "esc",
        "shift+esc",
        "pageup",
        "pagedown",
        "shift+pageup",
        "shift+pagedown",
        "f1",
        "shift+f10",
        "mod+s",
        "mod+p",
        "mod+e",
        "mod+i",
        "mod+u",
        "mod+g",
        "mod+return",
        "alt+left",
        "alt+right",
        ..._.J.binds,
    ]),
    g = null;
function S(e) {
    if (e.includes(" ")) return [];
    let { key: t, modifiers: n } = A.A.combokeys.getKeyInfo(e, "keydown");
    return (function (e) {
        if (null == g) {
            g = new Map();
            for (let e = 1; e < 256; e++) {
                let t = String(u()({ type: "keydown", which: e }));
                g.set(t, [...(g.get(t) ?? []), e]);
            }
        }
        return g.get(e) ?? [];
    })(t).map((e) => ({
        keyCode: e,
        ctrlKey: n.includes("ctrl"),
        altKey: n.includes("alt"),
        shiftKey: n.includes("shift"),
        metaKey: n.includes("meta"),
    }));
}
function N(e) {
    let { keyCode: t, ctrlKey: n, altKey: i, shiftKey: r, metaKey: a } = e;
    return `${t} ${n} ${i} ${r} ${a}`;
}
let C = null;
function O() {
    return (
        null == C &&
            (C = new Map(
                (function () {
                    let e = [];
                    for (let t of Object.values(E.zR))
                        if (t?.comboKeysBindGlobal === !0)
                            for (let n of A.A.getRegistrableBinds(t)) m.has(n) || e.push(n);
                    if (!I.isPlatformEmbedded)
                        for (let t of Object.values(f.Ay.getUserAgnosticState()))
                            t.enabled &&
                                t.shortcut.length > 0 &&
                                t.action !== T.hCu.UNASSIGNED &&
                                e.push((0, p.dI)(t.shortcut));
                    return e;
                })()
                    .flatMap(S)
                    .map((e) => [N(e), e]),
            )),
        C
    );
}
let R = new Map();
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e?.isConnected === !0 ? e : document,
        r = new (i.ownerDocument?.defaultView ?? window).KeyboardEvent(t.type, {
            bubbles: !0,
            cancelable: !0,
            ctrlKey: t.ctrlKey,
            altKey: t.altKey,
            shiftKey: t.shiftKey,
            metaKey: t.metaKey,
            repeat: n,
        });
    (Object.defineProperty(r, "which", { value: t.keyCode }),
        Object.defineProperty(r, "keyCode", { value: t.keyCode }),
        i.dispatchEvent(r));
}
let y = function (e) {
        function t() {
            ((C = null), e());
        }
        return (f.Ay.addChangeListener(t), () => f.Ay.removeChangeListener(t));
    },
    D = function (e, t) {
        let n = (0, h.fl)(e),
            i = R.get(e),
            r = !1;
        if ("keydown" === t.type) {
            if (null == n || !O().has(N(t))) return;
            (null == i && ((i = new Map()), R.set(e, i)), (r = i.has(t.keyCode)), i.set(t.keyCode, t));
        } else if (i?.delete(t.keyCode) !== !0) return;
        L(n, t, r);
    },
    v = function (e) {
        let t = R.get(e);
        if ((R.delete(e), null == t)) return;
        let n = (0, h.fl)(e);
        for (let e of t.values()) L(n, { ...e, type: "keyup" });
    },
    b = { muted: !1 },
    M = new Map(),
    P = new Map();
function U(e) {
    let t = a.A.getFrameByIframeId(e);
    return null == t ? (P.get(e) ?? b) : { muted: t.data.muted };
}
function w(e) {
    let t = U(e);
    return (P.set(e, t), { type: i.Ii.STATE_UPDATED, state: t });
}
function G() {
    return { type: i.Ii.KEYBINDS_UPDATED, keybinds: [...O().values()] };
}
function x(e) {
    let { iframeId: t, pipe: n } = e,
        r = M.get(t);
    (null == r &&
        ((r = (function (e) {
            let { onConnect: t, onMessage: n } = e,
                r = new Map(),
                a = (0, d.g)(n, () => {
                    (r.clear(), t(s));
                }),
                s = {
                    offer: (e) => a.offer(e),
                    dispatch(e) {
                        (0, o.isEqual)(r.get(e.type), e) || (r.set(e.type, e), a.dispatch(e));
                    },
                    close() {
                        (a.close(), n({ type: i._i.DISCONNECTED }));
                    },
                };
            return s;
        })({
            onConnect: (e) => {
                (e.dispatch(w(t)), e.dispatch(G()));
            },
            onMessage: (e) => {
                e.type === i._i.STATE_UPDATED
                    ? (0, l.WR)(t, e.state)
                    : e.type === i._i.DISCONNECTED
                      ? (v(t), (0, l.QQ)(t))
                      : e.type === i._i.KEYBIND_CAPTURED && D(t, e.keybind);
            },
        })),
        M.set(t, r),
        P.set(t, U(t))),
        r.offer(n));
}
function k(e) {
    let { id: t } = e,
        n = M.get(t);
    null != n && (M.delete(t), P.delete(t), n.close());
}
function F() {
    let e = G();
    for (let t of M.values()) t.dispatch(e);
}
function B() {
    for (let [e, t] of M) t.dispatch(w(e));
}
class V extends r.A {
    actions = { EMBEDDED_APP_SHIM_PIPE_OPEN: x };
    stores = new Map().set(a.A, B);
    _unsubscribeKeybinds = null;
    _initialize() {
        (s._.subscribe(T.jej.IFRAME_UNMOUNT, k), (this._unsubscribeKeybinds = y(F)));
    }
    _terminate() {
        for (let e of (s._.unsubscribe(T.jej.IFRAME_UNMOUNT, k),
        this._unsubscribeKeybinds?.(),
        (this._unsubscribeKeybinds = null),
        M.values()))
            e.close();
        M.clear();
    }
}
let H = new V();
