n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    l = n(374470),
    a = n(952265),
    o = n(481060),
    s = n(40851),
    c = n(896449),
    u = n(540059),
    d = n(314910),
    p = n(574254),
    h = n(585483),
    f = n(5967),
    m = n(499254),
    g = n(827498),
    b = n(421591),
    _ = n(496977),
    y = n(314734),
    C = n(981631),
    x = n(149203),
    v = n(388032),
    j = n(760420);
let O = { height: y.lv };
function E() {
    m.yT(g.ti.DISMISSED);
}
function I(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        d = i.useRef(null),
        { renderWindow: m, windowDispatch: v } = i.useContext(s.ZP),
        j = null != u,
        O = (0, a.Jw)(null != u ? u : ''),
        I = i.useCallback(
            (e) => {
                var t;
                if ((!j && (0, a.$s)()) || (j && !(O && n)) || p.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, l.k)(r) && null != r.closest('.' + y.Jh)) return;
                for (; (0, l.k)(r); ) {
                    if (r === d.current) return;
                    if (r.classList.contains(y.t4) || r.classList.contains(y.Id)) return void e.preventDefault();
                    if (r.classList.contains(y.NN)) return;
                    let t = [x.cZ, c.N];
                    if (r.classList.contains(y.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                E();
                let i = null == (t = (0, f.uB)(e)) ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && h.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS);
            },
            [n, O, j]
        );
    i.useLayoutEffect(
        () => (
            m.addEventListener('mousedown', I),
            m.addEventListener('contextmenu', I),
            v.subscribe(C.CkL.POPOUT_CLOSE, E),
            () => {
                m.removeEventListener('mousedown', I), m.removeEventListener('contextmenu', I), v.unsubscribe(C.CkL.POPOUT_CLOSE, E);
            }
        ),
        [I, m, v]
    ),
        (0, o.Tbt)(d),
        i.useEffect(() => {
            ((!j && (0, a.$s)()) || (j && !O)) && E();
        }, [O, j]);
    let P = (0, _.Z)();
    return (0, r.jsx)(b.Z, {
        ref: d,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: g._b.TEXT,
        initHistory: P
    });
}
let P = i.memo(function (e) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['positionTargetRef']);
    let i = (0, u.Q3)('AppLauncherPopup');
    return (0, r.jsx)('span', {
        style: y.u$,
        children: (0, r.jsx)(d.W5, {
            className: j.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: i ? 24 : 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: j.positionContainer,
                    role: 'dialog',
                    style: O,
                    'aria-label': v.intl.string(v.t['3CNGLC']),
                    children:
                        t &&
                        (0, r.jsx)(
                            I,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, n)
                        )
                });
            }
        })
    });
});
