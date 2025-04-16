n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    l = n(374470),
    o = n(952265),
    a = n(481060),
    s = n(40851),
    c = n(896449),
    u = n(540059),
    d = n(314910),
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
let j = { height: _.lv };
function O() {
    f.yT(m.ti.DISMISSED);
}
function E(e) {
    let { channel: t, closeOnModalOuterClick: n = !1, parentModalKey: u } = e,
        d = i.useRef(null),
        { renderWindow: f, windowDispatch: x } = i.useContext(s.ZP),
        v = null != u,
        j = (0, o.Jw)(null != u ? u : ''),
        E = i.useCallback(
            (e) => {
                var t;
                if ((!v && (0, o.$s)()) || (v && !(j && n))) return;
                let { target: r } = e;
                if ((0, l.k)(r) && null != r.closest('.' + _.Jh)) return;
                for (; (0, l.k)(r); ) {
                    if (r === d.current) return;
                    if (r.classList.contains(_.t4) || r.classList.contains(_.Id)) return void e.preventDefault();
                    if (r.classList.contains(_.NN)) return;
                    let t = [C.cZ, c.N];
                    if (r.classList.contains(_.I4) || t.includes(r.id)) return;
                    r = r.parentNode;
                }
                O();
                let i = null == (t = (0, h.uB)(e)) ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && p.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS);
            },
            [n, j, v]
        );
    i.useLayoutEffect(
        () => (
            f.addEventListener('mousedown', E),
            f.addEventListener('contextmenu', E),
            x.subscribe(y.CkL.POPOUT_CLOSE, O),
            () => {
                f.removeEventListener('mousedown', E), f.removeEventListener('contextmenu', E), x.unsubscribe(y.CkL.POPOUT_CLOSE, O);
            }
        ),
        [E, f, x]
    ),
        (0, a.Tbt)(d),
        i.useEffect(() => {
            ((!v && (0, o.$s)()) || (v && !j)) && O();
        }, [j, v]);
    let N = (0, b.Z)();
    return (0, r.jsx)(g.Z, {
        ref: d,
        context: {
            channel: t,
            type: 'channel'
        },
        entrypoint: m._b.TEXT,
        initHistory: N
    });
}
let N = i.memo(function (e) {
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
        style: _.u$,
        children: (0, r.jsx)(d.W5, {
            className: v.positionLayer,
            targetRef: t,
            position: 'top',
            align: 'right',
            spacing: i ? 24 : 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: v.positionContainer,
                    role: 'dialog',
                    style: j,
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
