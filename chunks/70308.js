r.d(n, {
    I: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(666912),
    o = r(481060),
    l = r(345332),
    u = r(417153),
    c = r(561466),
    d = r(224228);
let f = {
        duration: 300,
        friction: 24,
        tension: 280
    },
    _ = {
        [c.az.TOP]: {
            styles: d.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: f
                },
                enter: {
                    transform: 'translate3d(0, -0px, 0)',
                    opacity: 1,
                    config: f
                },
                leave: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: {
                        ...f,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        },
        [c.az.BOTTOM]: {
            styles: d.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: f
                },
                enter: {
                    transform: 'translate3d(0, 0px, 0)',
                    opacity: 1,
                    config: f
                },
                leave: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: {
                        ...f,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        }
    };
function h() {
    var e, n, r, d;
    let f = (0, u.Es)((e) => e.currentToast),
        h = a.useRef(null !== (r = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== r ? r : c.si.position),
        p = a.useRef(null !== (d = null == f ? void 0 : null === (n = f.options) || void 0 === n ? void 0 : n.duration) && void 0 !== d ? d : c.si.duration);
    a.useEffect(() => {
        if (null != f) {
            var e, n, r, i;
            (h.current = null !== (r = null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== r ? r : c.si.position), (p.current = null !== (i = null === (n = f.options) || void 0 === n ? void 0 : n.duration) && void 0 !== i ? i : c.si.duration);
        }
    }, [f]);
    let m = a.useMemo(() => {
            var e, n;
            return _[null !== (n = null == f ? void 0 : null === (e = f.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : h.current];
        }, [f]),
        g = (0, o.useTransition)(f, {
            keys: (e) => {
                var n;
                return null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : '';
            },
            ...m.transition
        });
    return (
        a.useEffect(() => {
            null != f &&
                setTimeout(() => {
                    (0, u.z5)();
                }, p.current);
        }, [f]),
        (0, i.jsx)('div', {
            className: m.styles,
            children: g((e, n) =>
                null === n
                    ? null
                    : (0, i.jsx)(
                          s.animated.div,
                          {
                              style: e,
                              children: (0, i.jsx)(l.F, { ...n })
                          },
                          n.id
                      )
            )
        })
    );
}
