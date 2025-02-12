n.d(t, { Z: () => x });
var l = n(200651),
    i = n(192379),
    r = n(642128),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    u = n(435064),
    c = n(39604),
    d = n(175470),
    m = n(569545),
    f = n(314910),
    h = n(127015);
let p = { visibility: 'hidden' },
    v = {
        precision: 0.0001,
        duration: 300
    },
    g = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    E = { duration: 1000 };
function x(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: x } = i.useContext(s.Sf),
        Z = (0, i.useRef)(null),
        S = d.n.getState().clipsButtonRef,
        C = (0, m.V9)(t),
        b = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()),
        I = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(C)),
        _ = (0, i.useRef)();
    i.useEffect(
        () => () => {
            (0, c.Gh)(C);
        },
        [C]
    );
    let R = () => {
            var e;
            let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? p
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        y = (e) => {
            let t = null == S ? void 0 : S.getBoundingClientRect();
            if (((_.current = t), e.timestamp !== b || null == t || n)) return p;
            let { top: l, left: i } = t;
            return {
                top: l + 36,
                left: i - 216,
                height: 151,
                width: 268
            };
        },
        j = (0, i.useRef)(null),
        N = (0, o.Yzy)(
            I,
            {
                keys: (e) => e.timestamp,
                ref: j,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: v
            },
            'animate-always'
        ),
        w = (0, i.useRef)(null),
        A = (0, o.Yzy)(
            I,
            {
                ref: w,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: 'fixed',
                    visibility: 'hidden',
                    opacity: 1,
                    ...(x.enabled ? y(e) : R())
                }),
                enter: (e) => [
                    {
                        opacity: 1,
                        visibility: 'visible',
                        ...y(e)
                    }
                ],
                leave: {
                    opacity: 0,
                    ...(!x.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != _.current)
                                return {
                                    top: _.current.top + 12,
                                    left: _.current.left + 12
                                };
                        })()
                    })
                },
                config: x.enabled ? E : g,
                onRest: (e, t) => {
                    null != t.item && null != I.find((e) => e.timestamp === t.item.timestamp) && (0, c.Gh)(C, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, r.useChain)([j, w], [0, 0.1], 3000),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('div', {
                    className: h.hidden,
                    ref: Z
                }),
                N(
                    (e, t) =>
                        null != t &&
                        (0, l.jsx)(r.animated.div, {
                            className: h.whiteFlash,
                            style: e
                        })
                ),
                (0, l.jsx)(f.ZP, {
                    children: (0, l.jsx)('div', {
                        className: h.hidden,
                        children: A(
                            (e, t, n, i) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, l.jsx)(r.animated.img, {
                                    src: t.thumbnail,
                                    className: h.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
