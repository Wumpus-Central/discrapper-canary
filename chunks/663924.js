n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    l = n(374470),
    a = n(952265),
    o = n(481060),
    s = n(40851),
    c = n(896449),
    u = n(314910),
    d = n(574254),
    p = n(585483),
    h = n(499254),
    f = n(827498),
    m = n(421591),
    g = n(496977),
    b = n(314734),
    y = n(981631),
    _ = n(149203),
    C = n(388032),
    v = n(681524);
let x = { height: b.lv };
function O() {
    h.yT(f.ti.DISMISSED);
}
function j(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        h = i.useRef(null),
        { renderWindow: C, windowDispatch: v } = i.useContext(s.ZP),
        x = null != u,
        j = (0, a.Jw)(null != u ? u : ""),
        E = i.useCallback(
            (e) => {
                var t;
                if ((!x && (0, a.$s)()) || (x && !(j && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, l.kK)(r) && null != r.closest("." + b.Jh)) return;
                for (; (0, l.kK)(r); ) {
                    if (r === h.current) return;
                    if (r.classList.contains(b.t4) || r.classList.contains(b.Id)) return void e.preventDefault();
                    if (r.classList.contains(b.NN)) return;
                    let t = [_.cZ, c.N];
                    if (r.classList.contains(b.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                O();
                let i = null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && p.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS);
            },
            [n, j, x],
        );
    i.useLayoutEffect(
        () => (
            C.addEventListener("mousedown", E),
            C.addEventListener("contextmenu", E),
            v.subscribe(y.CkL.POPOUT_CLOSE, O),
            () => {
                C.removeEventListener("mousedown", E),
                    C.removeEventListener("contextmenu", E),
                    v.unsubscribe(y.CkL.POPOUT_CLOSE, O);
            }
        ),
        [E, C, v],
    ),
        (0, o.Tbt)(h),
        i.useEffect(() => {
            ((!x && (0, a.$s)()) || (x && !j)) && O();
        }, [j, x]);
    let S = (0, g.Z)();
    return (0, r.jsx)(m.Z, {
        ref: h,
        context: {
            channel: t,
            type: "channel",
        },
        entrypoint: f._b.TEXT,
        initHistory: S,
    });
}
let E = i.memo(function (e) {
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
        children: (0, r.jsx)(u.W5, {
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
                    style: x,
                    "aria-label": C.intl.string(C.t["3CNGLC"]),
                    children:
                        t &&
                        (0, r.jsx)(
                            j,
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
