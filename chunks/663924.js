n.d(t, { Z: () => E });
var i = n(951288),
    r = n(647438),
    l = n(374470),
    a = n(952265),
    o = n(481060),
    s = n(896449),
    c = n(314910),
    u = n(728285),
    d = n(574254),
    p = n(585483),
    h = n(499254),
    f = n(827498),
    m = n(421591),
    g = n(496977),
    b = n(314734),
    C = n(981631),
    y = n(149203),
    _ = n(388032),
    v = n(681524);
let x = { height: b.lv };
function O() {
    h.yT(f.ti.DISMISSED);
}
function j(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: c } = e,
        h = r.useRef(null),
        { renderWindow: _, windowDispatch: v } = r.useContext(u.ZP),
        x = null != c,
        j = (0, a.Jw)(null != c ? c : ""),
        E = r.useCallback(
            (e) => {
                var t;
                if ((!x && (0, a.$s)()) || (x && !(j && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: i } = e;
                if ((0, l.kK)(i) && null != i.closest("." + b.Jh)) return;
                for (; (0, l.kK)(i); ) {
                    if (i === h.current) return;
                    if (i.classList.contains(b.t4) || i.classList.contains(b.Id)) return void e.preventDefault();
                    if (i.classList.contains(b.NN)) return;
                    let t = [y.cZ, s.N];
                    if (i.classList.contains(b.I4) || t.includes(i.id)) return;
                    i = i.parentNode;
                }
                O();
                let r = null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && p.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS);
            },
            [n, j, x],
        );
    r.useLayoutEffect(
        () => (
            _.addEventListener("mousedown", E),
            _.addEventListener("contextmenu", E),
            v.subscribe(C.CkL.POPOUT_CLOSE, O),
            () => {
                _.removeEventListener("mousedown", E),
                    _.removeEventListener("contextmenu", E),
                    v.unsubscribe(C.CkL.POPOUT_CLOSE, O);
            }
        ),
        [E, _, v],
    ),
        (0, o.Tbt)(h),
        r.useEffect(() => {
            ((!x && (0, a.$s)()) || (x && !j)) && O();
        }, [j, x]);
    let S = (0, g.Z)();
    return (0, i.jsx)(m.Z, {
        ref: h,
        context: {
            channel: t,
            type: "channel",
        },
        entrypoint: f._b.TEXT,
        initHistory: S,
    });
}
let E = r.memo(function (e) {
    var { positionTargetRef: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["positionTargetRef"]);
    return (0, i.jsx)("span", {
        style: b.u$,
        children: (0, i.jsx)(c.W5, {
            className: v.positionLayer,
            targetRef: t,
            position: "top",
            align: "right",
            spacing: 24,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)("section", {
                    className: v.positionContainer,
                    role: "dialog",
                    style: x,
                    "aria-label": _.intl.string(_.t["3CNGLK"]),
                    children:
                        t &&
                        (0, i.jsx)(
                            j,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
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
