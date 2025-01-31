n.d(t, { I: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(481060),
    o = n(345332),
    l = n(417153),
    u = n(561466),
    c = n(224228);
let d = {
        duration: 300,
        friction: 24,
        tension: 280
    },
    f = {
        [u.az.TOP]: {
            styles: c.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: d
                },
                enter: {
                    transform: 'translate3d(0, -0px, 0)',
                    opacity: 1,
                    config: d
                },
                leave: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: {
                        ...d,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        },
        [u.az.BOTTOM]: {
            styles: c.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: d
                },
                enter: {
                    transform: 'translate3d(0, 0px, 0)',
                    opacity: 1,
                    config: d
                },
                leave: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: {
                        ...d,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        }
    };
function _() {
    var e, t, n, c;
    let d = (0, l.Es)((e) => e.currentToast),
        _ = r.useRef(null !== (n = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : u.si.position),
        p = r.useRef(null !== (c = null == d ? void 0 : null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== c ? c : u.si.duration);
    r.useEffect(() => {
        if (null != d) {
            var e, t, n, i;
            (_.current = null !== (n = null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : u.si.position), (p.current = null !== (i = null === (t = d.options) || void 0 === t ? void 0 : t.duration) && void 0 !== i ? i : u.si.duration);
        }
    }, [d]);
    let h = r.useMemo(() => {
            var e, t;
            return f[null !== (t = null == d ? void 0 : null === (e = d.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : _.current];
        }, [d]),
        m = (0, s.Yzy)(d, {
            keys: (e) => {
                var t;
                return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : '';
            },
            ...h.transition
        });
    return (
        r.useEffect(() => {
            null != d &&
                setTimeout(() => {
                    (0, l.z5)();
                }, p.current);
        }, [d]),
        (0, i.jsx)('div', {
            className: h.styles,
            children: m((e, t) =>
                null === t
                    ? null
                    : (0, i.jsx)(
                          a.animated.div,
                          {
                              style: e,
                              children: (0, i.jsx)(o.F, { ...t })
                          },
                          t.id
                      )
            )
        })
    );
}
