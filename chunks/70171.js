n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(517738),
    r = n(311907),
    s = n(844222),
    o = n(866323),
    d = n(164617),
    c = n(274372),
    u = n(399925),
    _ = n(361157),
    f = n(652896),
    m = n(750506),
    p = n(912802);
let g = { visibility: "hidden" },
    h = { precision: 1e-4, duration: 300 },
    A = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
    x = { duration: 1e3 };
function v(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: v } = l.useContext(s.C),
        I = (0, l.useRef)(null),
        E = _.K.getState().clipsButtonRef,
        C = (0, f._z)(t),
        j = (0, r.bG)([c.A], () => c.A.getActiveAnimation()),
        N = (0, r.yK)([c.A], () => c.A.getStreamClipAnimations(C)),
        y = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, u.MI)(C);
        },
        [C],
    );
    let b = (e) => {
            if (n !== d.N.NO_POPOUT) return g;
            let t = E?.getBoundingClientRect();
            if (((y.current = t), e.timestamp !== j || null == t)) return g;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
        },
        S = (0, l.useRef)(null),
        w = (0, o.p)(
            N,
            { keys: (e) => e.timestamp, ref: S, from: { opacity: 0.2 }, enter: { opacity: 0 }, config: h },
            "animate-always",
        ),
        T = (0, l.useRef)(null),
        k = (0, o.p)(
            N,
            {
                ref: T,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: "fixed",
                    visibility: "hidden",
                    opacity: 1,
                    ...(v.enabled
                        ? b(e)
                        : (() => {
                              if (n !== d.N.NO_POPOUT) return g;
                              let e = I.current?.getBoundingClientRect();
                              return null == e ? g : { width: e.width, height: e.height, top: e.top, left: e.left };
                          })()),
                }),
                enter: (e) => [{ opacity: 1, visibility: "visible", ...b(e) }],
                leave: {
                    opacity: 0,
                    ...(!v.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != y.current) return { top: y.current.top + 12, left: y.current.left + 12 };
                        })(),
                    }),
                },
                config: v.enabled ? x : A,
                onRest: (e, t) => {
                    null != t.item &&
                        null != N.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, u.MI)(C, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, a.useChain)([S, T], [0, 0.1], 3e3),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: p.R, ref: I }),
                w((e, t) => null != t && (0, i.jsx)(a.animated.div, { className: p.w5, style: e })),
                (0, i.jsx)(m.Ay, {
                    children: (0, i.jsx)("div", {
                        className: p.R,
                        children: k(
                            (e, t, n, l) =>
                                t?.thumbnail != null &&
                                (0, i.jsx)(a.animated.img, { src: t.thumbnail, className: p.yI, style: e }),
                        ),
                    }),
                }),
            ],
        })
    );
}
