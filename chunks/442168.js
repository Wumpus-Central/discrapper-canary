n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(666912),
    r = n(442837),
    s = n(780384),
    o = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    m = n(569545),
    f = n(314910),
    p = n(340534);
let g = { visibility: 'hidden' },
    h = {
        precision: 0.0001,
        duration: 300
    },
    v = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    S = { duration: 1000 };
function I(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: I } = l.useContext(s.Sf),
        _ = (0, l.useRef)(null),
        x = d.n.getState().clipsButtonRef,
        E = (0, m.V9)(t),
        C = (0, r.e7)([c.Z], () => c.Z.getActiveAnimation()),
        Z = (0, r.Wu)([c.Z], () => c.Z.getStreamClipAnimations(E)),
        y = (0, l.useRef)();
    l.useEffect(
        () => () => {
            (0, u.Gh)(E);
        },
        [E]
    );
    let b = () => {
            var e;
            let t = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? g
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        T = (e) => {
            let t = null == x ? void 0 : x.getBoundingClientRect();
            if (((y.current = t), e.timestamp !== C || null == t || n)) return g;
            let { top: i, left: l } = t;
            return {
                top: i + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        A = (0, l.useRef)(null),
        N = (0, o.useTransition)(
            Z,
            {
                keys: (e) => e.timestamp,
                ref: A,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: h
            },
            'animate-always'
        ),
        w = (0, l.useRef)(null),
        j = (0, o.useTransition)(
            Z,
            {
                ref: w,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(I.enabled ? T(e) : b())
                }),
                enter: (e) => [
                    {
                        opacity: 1,
                        visibility: 'visible',
                        ...T(e)
                    }
                ],
                leave: {
                    opacity: 0,
                    ...(!I.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != y.current)
                                return {
                                    top: y.current.top + 12,
                                    left: y.current.left + 12
                                };
                        })()
                    })
                },
                config: I.enabled ? S : v,
                onRest: (e, t) => {
                    null != t.item && null != Z.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(E, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, a.useChain)([A, w], [0, 0.1], 3000),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: p.hidden,
                    ref: _
                }),
                N(
                    (e, t) =>
                        null != t &&
                        (0, i.jsx)(a.animated.div, {
                            className: p.whiteFlash,
                            style: e
                        })
                ),
                (0, i.jsx)(f.ZP, {
                    children: (0, i.jsx)('div', {
                        className: p.hidden,
                        children: j(
                            (e, t, n, l) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, i.jsx)(a.animated.img, {
                                    src: t.thumbnail,
                                    className: p.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
