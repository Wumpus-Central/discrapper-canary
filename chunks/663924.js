n.d(t, { Z: () => R });
var r = n(54381),
    i = n(473749),
    a = n(374470),
    o = n(952265),
    s = n(481060),
    l = n(896449),
    c = n(314910),
    u = n(728285),
    d = n(574254),
    f = n(585483),
    p = n(499254),
    _ = n(827498),
    m = n(421591),
    h = n(496977),
    g = n(314734),
    E = n(981631),
    b = n(149203),
    y = n(388032),
    O = n(381818);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = { height: g.lv };
function A(e) {
    var { positionTargetRef: t, align: n } = e,
        i = I(e, ["positionTargetRef", "align"]);
    return (0, r.jsx)("span", {
        style: g.u$,
        children: (0, r.jsx)(c.W5, {
            className: O.positionLayer,
            targetRef: t,
            position: "top",
            align: null != n ? n : "right",
            spacing: 24,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: O.positionContainer,
                    role: "dialog",
                    style: C,
                    "aria-label": y.intl.string(y.t["3CNGLK"]),
                    children: t && (0, r.jsx)(P, S({}, i)),
                });
            },
        }),
    });
}
function N() {
    p.y(_.ti.DISMISSED);
}
function P(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: c } = e,
        p = i.useRef(null),
        { renderWindow: y, windowDispatch: O } = i.useContext(u.ZP),
        v = null != c,
        S = (0, o.useIsModalAtTop)(null != c ? c : ""),
        I = i.useCallback(
            (e) => {
                var t;
                if ((!v && (0, o.hasAnyModalOpen)()) || (v && !(S && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, a.kK)(r) && null != r.closest("." + g.Jh)) return;
                for (; (0, a.kK)(r); ) {
                    if (r === p.current) return;
                    if (r.classList.contains(g.t4) || r.classList.contains(g.Id)) return void e.preventDefault();
                    if (r.classList.contains(g.NN)) return;
                    let t = [b.cZ, l.N];
                    if (r.classList.contains(g.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                N();
                let i = null == (t = (0, a.uB)(e)) ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && f.S.dispatchToLastSubscribed(E.CkL.TEXTAREA_FOCUS);
            },
            [n, S, v],
        );
    i.useLayoutEffect(
        () => (
            y.addEventListener("mousedown", I),
            y.addEventListener("contextmenu", I),
            O.subscribe(E.CkL.POPOUT_CLOSE, N),
            () => {
                y.removeEventListener("mousedown", I),
                    y.removeEventListener("contextmenu", I),
                    O.unsubscribe(E.CkL.POPOUT_CLOSE, N);
            }
        ),
        [I, y, O],
    ),
        (0, s.Tbt)(p),
        i.useEffect(() => {
            ((!v && (0, o.hasAnyModalOpen)()) || (v && !S)) && N();
        }, [S, v]);
    let T = (0, h.Z)();
    return (0, r.jsx)(m.Z, {
        ref: p,
        context: {
            channel: t,
            type: "channel",
        },
        entrypoint: _._b.TEXT,
        initHistory: T,
    });
}
let R = i.memo(A);
