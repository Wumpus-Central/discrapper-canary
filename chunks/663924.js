n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(374470),
    a = n(952265),
    o = n(481060),
    s = n(40851),
    c = n(896449),
    u = n(314910),
    d = n(574254),
    p = n(585483),
    h = n(5967),
    f = n(499254),
    m = n(827498),
    g = n(421591),
    b = n(496977),
    _ = n(314734),
    y = n(981631),
    C = n(149203),
    x = n(388032),
    v = n(760420);
let O = { height: _.lv };
function j() {
    f.yT(m.ti.DISMISSED);
}
function E(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        f = i.useRef(null),
        { renderWindow: x, windowDispatch: v } = i.useContext(s.ZP),
        O = null != u,
        E = (0, a.Jw)(null != u ? u : ''),
        S = i.useCallback(
            (e) => {
                var t;
                if ((!O && (0, a.$s)()) || (O && !(E && n)) || d.Z.isOpen() || e.defaultPrevented) return;
                let { target: r } = e;
                if ((0, l.k)(r) && null != r.closest('.' + _.Jh)) return;
                for (; (0, l.k)(r); ) {
                    if (r === f.current) return;
                    if (r.classList.contains(_.t4) || r.classList.contains(_.Id)) return void e.preventDefault();
                    if (r.classList.contains(_.NN)) return;
                    let t = [C.cZ, c.N];
                    if (r.classList.contains(_.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                j();
                let i = null == (t = (0, h.uB)(e)) ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && p.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS);
            },
            [n, E, O]
        );
    (i.useLayoutEffect(
        () => (
            x.addEventListener('mousedown', S),
            x.addEventListener('contextmenu', S),
            v.subscribe(y.CkL.POPOUT_CLOSE, j),
            () => {
                (x.removeEventListener('mousedown', S), x.removeEventListener('contextmenu', S), v.unsubscribe(y.CkL.POPOUT_CLOSE, j));
            }
        ),
        [S, x, v]
    ),
        (0, o.Tbt)(f),
        i.useEffect(() => {
            ((!O && (0, a.$s)()) || (O && !E)) && j();
        }, [E, O]));
    let I = (0, b.Z)();
    return (0, r.jsx)(g.Z, {
        ref: f,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: m._b.TEXT,
        initHistory: I
    });
}
let S = i.memo(function (e) {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['positionTargetRef']);
    return (0, r.jsx)('span', {
        style: _.u$,
        children: (0, r.jsx)(u.W5, {
            className: v.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: 24,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: v.positionContainer,
                    role: 'dialog',
                    style: O,
                    'aria-label': x.intl.string(x.t['3CNGLC']),
                    children:
                        t &&
                        (0, r.jsx)(
                            E,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({}, n)
                        )
                });
            }
        })
    });
});
