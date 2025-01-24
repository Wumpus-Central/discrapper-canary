n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(642128),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    m = n(569545),
    f = n(314910),
    p = n(340534);
let h = { visibility: 'hidden' },
    g = {
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
        x = (0, l.useRef)(null),
        _ = d.n.getState().clipsButtonRef,
        C = (0, m.V9)(t),
        b = (0, a.e7)([c.Z], () => c.Z.getActiveAnimation()),
        E = (0, a.Wu)([c.Z], () => c.Z.getStreamClipAnimations(C)),
        y = (0, l.useRef)();
    l.useEffect(
        () => () => {
            (0, u.Gh)(C);
        },
        [C]
    );
    let Z = () => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? h
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        T = (e) => {
            let t = null == _ ? void 0 : _.getBoundingClientRect();
            if (((y.current = t), e.timestamp !== b || null == t || n)) return h;
            let { top: i, left: l } = t;
            return {
                top: i + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        N = (0, l.useRef)(null),
        A = (0, o.useTransition)(
            E,
            {
                keys: (e) => e.timestamp,
                ref: N,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: g
            },
            'animate-always'
        ),
        j = (0, l.useRef)(null),
        w = (0, o.useTransition)(
            E,
            {
                ref: j,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(I.enabled ? T(e) : Z())
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
                    null != t.item && null != E.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(C, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, r.useChain)([N, j], [0, 0.1], 3000),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: p.hidden,
                    ref: x
                }),
                A(
                    (e, t) =>
                        null != t &&
                        (0, i.jsx)(r.animated.div, {
                            className: p.whiteFlash,
                            style: e
                        })
                ),
                (0, i.jsx)(f.ZP, {
                    children: (0, i.jsx)('div', {
                        className: p.hidden,
                        children: w(
                            (e, t, n, l) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, i.jsx)(r.animated.img, {
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
