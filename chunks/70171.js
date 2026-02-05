n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(563495),
    s = n(311907),
    r = n(582754),
    o = n(397927),
    c = n(164617),
    d = n(274372),
    u = n(399925),
    h = n(361157),
    m = n(652896),
    A = n(750506),
    p = n(353839);
let g = { visibility: "hidden" },
    f = { precision: 1e-4, duration: 300 },
    _ = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
    E = { duration: 1e3 };
function C(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: C } = l.useContext(r.CZ),
        x = (0, l.useRef)(null),
        S = h.K.getState().clipsButtonRef,
        T = (0, m._z)(t),
        I = (0, s.bG)([d.A], () => d.A.getActiveAnimation()),
        N = (0, s.yK)([d.A], () => d.A.getStreamClipAnimations(T)),
        v = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, u.MI)(T);
        },
        [T],
    );
    let y = (e) => {
            if (n !== c.N.NO_POPOUT) return g;
            let t = S?.getBoundingClientRect();
            if (((v.current = t), e.timestamp !== I || null == t)) return g;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
        },
        b = (0, l.useRef)(null),
        R = (0, o.pnh)(
            N,
            { keys: (e) => e.timestamp, ref: b, from: { opacity: 0.2 }, enter: { opacity: 0 }, config: f },
            "animate-always",
        ),
        j = (0, l.useRef)(null),
        M = (0, o.pnh)(
            N,
            {
                ref: j,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: "fixed",
                    visibility: "hidden",
                    opacity: 1,
                    ...(C.enabled
                        ? y(e)
                        : (() => {
                              if (n !== c.N.NO_POPOUT) return g;
                              let e = x.current?.getBoundingClientRect();
                              return null == e ? g : { width: e.width, height: e.height, top: e.top, left: e.left };
                          })()),
                }),
                enter: (e) => [{ opacity: 1, visibility: "visible", ...y(e) }],
                leave: {
                    opacity: 0,
                    ...(!C.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != v.current) return { top: v.current.top + 12, left: v.current.left + 12 };
                        })(),
                    }),
                },
                config: C.enabled ? E : _,
                onRest: (e, t) => {
                    null != t.item &&
                        null != N.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, u.MI)(T, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, a.useChain)([b, j], [0, 0.1], 3e3),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: p.R, ref: x }),
                R((e, t) => null != t && (0, i.jsx)(a.animated.div, { className: p.w5, style: e })),
                (0, i.jsx)(A.Ay, {
                    children: (0, i.jsx)("div", {
                        className: p.R,
                        children: M(
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
