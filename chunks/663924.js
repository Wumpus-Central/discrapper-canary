n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    l = n(374470),
    o = n(952265),
    a = n(481060),
    s = n(40851),
    c = n(540059),
    u = n(314910),
    d = n(585483),
    p = n(5967),
    h = n(499254),
    f = n(827498),
    m = n(421591),
    g = n(496977),
    b = n(314734),
    _ = n(981631),
    C = n(388032),
    y = n(760420);
let x = { height: b.lv };
function v() {
    h.yT(f.ti.DISMISSED);
}
function j(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: c } = e,
        u = i.useRef(null),
        { renderWindow: h, windowDispatch: C } = i.useContext(s.ZP),
        y = null != c,
        x = (0, o.Jw)(null != c ? c : ''),
        j = i.useCallback(
            (e) => {
                var t;
                if ((!y && (0, o.$s)()) || (y && !(x && n))) return;
                let { target: r } = e;
                if ((0, l.k)(r) && null != r.closest('.' + b.Jh)) return;
                for (; (0, l.k)(r); ) {
                    if (r === u.current) return;
                    if (r.classList.contains(b.t4) || r.classList.contains(b.Id)) return void e.preventDefault();
                    if (r.classList.contains(b.NN)) return;
                    r = r.parentNode;
                }
                v();
                let i = null == (t = (0, p.uB)(e)) ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && d.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS);
            },
            [n, x, y]
        );
    i.useLayoutEffect(
        () => (
            h.addEventListener('mousedown', j),
            h.addEventListener('contextmenu', j),
            C.subscribe(_.CkL.POPOUT_CLOSE, v),
            () => {
                h.removeEventListener('mousedown', j), h.removeEventListener('contextmenu', j), C.unsubscribe(_.CkL.POPOUT_CLOSE, v);
            }
        ),
        [j, h, C]
    ),
        (0, a.Tbt)(u),
        i.useEffect(() => {
            ((!y && (0, o.$s)()) || (y && !x)) && v();
        }, [x, y]);
    let O = (0, g.Z)();
    return (0, r.jsx)(m.Z, {
        ref: u,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: f._b.TEXT,
        initHistory: O
    });
}
let O = i.memo(function (e) {
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
    let i = (0, c.Q3)('AppLauncherPopup');
    return (0, r.jsx)('span', {
        style: b.u$,
        children: (0, r.jsx)(u.W5, {
            className: y.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: i ? 24 : 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: y.positionContainer,
                    role: 'dialog',
                    style: x,
                    'aria-label': C.NW.string(C.t['3CNGLC']),
                    children:
                        t &&
                        (0, r.jsx)(
                            j,
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
