n.d(t, { Z: () => P }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(374470),
    o = n(442837),
    a = n(952265),
    s = n(481060),
    c = n(40851),
    u = n(835473),
    d = n(540059),
    p = n(314910),
    h = n(585483),
    f = n(5967),
    m = n(499254),
    g = n(541099),
    b = n(827498),
    _ = n(695676),
    C = n(421591),
    v = n(314734),
    y = n(981631),
    x = n(388032),
    j = n(252995);
let O = { height: v.lv };
function N() {
    m.yT(b.ti.DISMISSED);
}
function E(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: d } = e,
        p = i.useRef(null),
        { renderWindow: m, windowDispatch: x } = i.useContext(c.ZP),
        j = null != d,
        O = (0, a.Jw)(null != d ? d : ''),
        E = i.useCallback(
            (e) => {
                var t;
                if ((!j && (0, a.$s)()) || (j && !(O && n))) return;
                let { target: r } = e;
                if ((0, l.k)(r) && null != r.closest('.' + v.Jh)) return;
                for (; (0, l.k)(r); ) {
                    if (r === p.current) return;
                    if (r.classList.contains(v.t4) || r.classList.contains(v.Id)) {
                        e.preventDefault();
                        return;
                    }
                    if (r.classList.contains(v.NN)) return;
                    r = r.parentNode;
                }
                N();
                let i = null === (t = (0, f.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && h.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS);
            },
            [n, O, j]
        );
    i.useLayoutEffect(
        () => (
            m.addEventListener('mousedown', E),
            m.addEventListener('contextmenu', E),
            x.subscribe(y.CkL.POPOUT_CLOSE, N),
            () => {
                m.removeEventListener('mousedown', E), m.removeEventListener('contextmenu', E), x.unsubscribe(y.CkL.POPOUT_CLOSE, N);
            }
        ),
        [E, m, x]
    ),
        (0, s.Tbt)(p),
        i.useEffect(() => {
            ((!j && (0, a.$s)()) || (j && !O)) && N();
        }, [O, j]);
    let P = (0, o.e7)([g.Z], () => g.Z.initialState(), []),
        I = (0, u.q)(null == P ? void 0 : P.applicationId),
        S = i.useMemo(() => {
            if (null == P) return;
            let e = [{ type: _.gc.HOME }];
            return (
                null != P.applicationId &&
                    null != I &&
                    e.push({
                        type: _.gc.APPLICATION,
                        application: I
                    }),
                e
            );
        }, [P, I]);
    return (0, r.jsx)(C.Z, {
        ref: p,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: b._b.TEXT,
        initHistory: S
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
    let i = (0, d.Q3)('AppLauncherPopup');
    return (0, r.jsx)('span', {
        style: v.u$,
        children: (0, r.jsx)(p.W5, {
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
                    'aria-label': x.NW.string(x.t['3CNGLC']),
                    children:
                        t &&
                        (0, r.jsx)(
                            E,
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
