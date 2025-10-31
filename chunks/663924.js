n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(374470),
    a = n(952265),
    o = n(481060),
    s = n(896449),
    c = n(314910),
    u = n(728285),
    d = n(574254),
    p = n(585483),
    f = n(499254),
    h = n(827498),
    m = n(421591),
    g = n(496977),
    b = n(314734),
    _ = n(981631),
    y = n(149203),
    C = n(388032),
    v = n(681524);
let O = { height: b.lv };
function x() {
    f.yT(h.ti.DISMISSED);
}
function E(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: c } = e,
        f = i.useRef(null),
        { renderWindow: C, windowDispatch: v } = i.useContext(u.ZP),
        O = null != c,
        E = (0, a.Jw)(null != c ? c : ""),
        j = i.useCallback(
            (e) => {
                var t;
                if ((!O && (0, a.$s)()) || (O && !(E && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, l.kK)(r) && null != r.closest("." + b.Jh)) return;
                for (; (0, l.kK)(r); ) {
                    if (r === f.current) return;
                    if (r.classList.contains(b.t4) || r.classList.contains(b.Id)) return void e.preventDefault();
                    if (r.classList.contains(b.NN)) return;
                    let t = [y.cZ, s.N];
                    if (r.classList.contains(b.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                x();
                let i = null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && p.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS);
            },
            [n, E, O],
        );
    i.useLayoutEffect(
        () => (
            C.addEventListener("mousedown", j),
            C.addEventListener("contextmenu", j),
            v.subscribe(_.CkL.POPOUT_CLOSE, x),
            () => {
                C.removeEventListener("mousedown", j),
                    C.removeEventListener("contextmenu", j),
                    v.unsubscribe(_.CkL.POPOUT_CLOSE, x);
            }
        ),
        [j, C, v],
    ),
        (0, o.Tbt)(f),
        i.useEffect(() => {
            ((!O && (0, a.$s)()) || (O && !E)) && x();
        }, [E, O]);
    let S = (0, g.Z)();
    return (0, r.jsx)(m.Z, {
        ref: f,
        context: {
            channel: t,
            type: "channel",
        },
        entrypoint: h._b.TEXT,
        initHistory: S,
    });
}
let j = i.memo(function (e) {
    var { positionTargetRef: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["positionTargetRef"]);
    return (0, r.jsx)("span", {
        style: b.u$,
        children: (0, r.jsx)(c.W5, {
            className: v.positionLayer,
            targetRef: t,
            position: "top",
            align: "right",
            spacing: 24,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: v.positionContainer,
                    role: "dialog",
                    style: O,
                    "aria-label": C.intl.string(C.t["3CNGLK"]),
                    children:
                        t &&
                        (0, r.jsx)(
                            E,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n),
                        ),
                });
            },
        }),
    });
});
