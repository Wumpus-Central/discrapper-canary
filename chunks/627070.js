n.d(t, { A: () => j });
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
    h = n(429582),
    f = n(484697),
    I = n(532624),
    p = n(723702),
    T = n(350535),
    m = n(652215);
let g = new Set([
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
    S = null;
function N(e) {
    if (e.includes(" ")) return [];
    let { key: t, modifiers: n } = A.A.combokeys.getKeyInfo(e, "keydown");
    return (function (e) {
        if (null == S) {
            S = new Map();
            for (let e = 1; e < 256; e++) {
                let t = String(u()({ type: "keydown", which: e }));
                S.set(t, [...(S.get(t) ?? []), e]);
            }
        }
        return S.get(e) ?? [];
    })(t).map((e) => ({
        keyCode: e,
        ctrlKey: n.includes("ctrl"),
        altKey: n.includes("alt"),
        shiftKey: n.includes("shift"),
        metaKey: n.includes("meta"),
    }));
}
function C(e) {
    let { keyCode: t, ctrlKey: n, altKey: i, shiftKey: r, metaKey: a } = e;
    return `${t} ${n} ${i} ${r} ${a}`;
}
let O = null;
function R() {
    return (
        null == O &&
            (O = new Map(
                (function () {
                    let e = [];
                    for (let t of Object.values(E.zR))
                        if (t?.comboKeysBindGlobal === !0)
                            for (let n of A.A.getRegistrableBinds(t)) g.has(n) || e.push(n);
                    if (!p.isPlatformEmbedded)
                        for (let t of Object.values(I.Ay.getUserAgnosticState()))
                            t.enabled &&
                                t.shortcut.length > 0 &&
                                t.action !== m.hCu.UNASSIGNED &&
                                e.push((0, T.dI)(t.shortcut));
                    return e;
                })()
                    .flatMap(N)
                    .map((e) => [C(e), e]),
            )),
        O
    );
}
let L = new Map();
function y(e, t) {
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
let D = function (e) {
        function t() {
            ((O = null), e());
        }
        return (I.Ay.addChangeListener(t), () => I.Ay.removeChangeListener(t));
    },
    v = function (e, t) {
        let n = (0, f.fl)(e),
            i = L.get(e),
            r = !1;
        if ("keydown" === t.type) {
            if (
                null == n ||
                ((0, h.t8)(n) ? !(0, h.r8)(n) : !n.ownerDocument.hasFocus() || n.ownerDocument.activeElement !== n) ||
                !R().has(C(t))
            )
                return;
            (null == i && ((i = new Map()), L.set(e, i)), (r = i.has(t.keyCode)), i.set(t.keyCode, t));
        } else if (
            i?.delete(t.keyCode) !== !0 ||
            ("release" === t.type &&
                (function (e) {
                    if (null == e) return !1;
                    let { ownerDocument: t } = e;
                    return t.hasFocus() && t.activeElement?.tagName !== "IFRAME";
                })(n))
        )
            return;
        y(n, { ...t, type: "keydown" === t.type ? "keydown" : "keyup" }, r);
    },
    b = function (e) {
        let t = L.get(e);
        if ((L.delete(e), null == t)) return;
        let n = (0, f.fl)(e);
        for (let e of t.values()) y(n, { ...e, type: "keyup" });
    },
    M = { muted: !1 },
    P = new Map(),
    U = new Map();
function w(e) {
    let t = a.A.getFrameByIframeId(e);
    return null == t ? (U.get(e) ?? M) : { muted: t.data.muted };
}
function G(e) {
    let t = w(e);
    return (U.set(e, t), { type: i.Ii.STATE_UPDATED, state: t });
}
function x() {
    return { type: i.Ii.KEYBINDS_UPDATED, keybinds: [...R().values()] };
}
function k(e) {
    let { iframeId: t, pipe: n } = e,
        r = P.get(t);
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
                (e.dispatch(G(t)), e.dispatch(x()));
            },
            onMessage: (e) => {
                e.type === i._i.STATE_UPDATED
                    ? (0, l.WR)(t, e.state)
                    : e.type === i._i.DISCONNECTED
                      ? (b(t), (0, l.QQ)(t))
                      : e.type === i._i.KEYBIND_CAPTURED && v(t, e.keybind);
            },
        })),
        P.set(t, r),
        U.set(t, w(t))),
        r.offer(n));
}
function F(e) {
    let { id: t } = e,
        n = P.get(t);
    null != n && (P.delete(t), U.delete(t), n.close());
}
function B() {
    let e = x();
    for (let t of P.values()) t.dispatch(e);
}
function V() {
    for (let [e, t] of P) t.dispatch(G(e));
}
class H extends r.A {
    actions = { EMBEDDED_APP_SHIM_PIPE_OPEN: k };
    stores = new Map().set(a.A, V);
    _unsubscribeKeybinds = null;
    _initialize() {
        (s._.subscribe(m.jej.IFRAME_UNMOUNT, F), (this._unsubscribeKeybinds = D(B)));
    }
    _terminate() {
        for (let e of (s._.unsubscribe(m.jej.IFRAME_UNMOUNT, F),
        this._unsubscribeKeybinds?.(),
        (this._unsubscribeKeybinds = null),
        P.values()))
            e.close();
        P.clear();
    }
}
let j = new H();
