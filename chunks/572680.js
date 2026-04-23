i.d(t, { A: () => E });
var n = i(627968),
    l = i(64700),
    a = i(106778),
    s = i(419354),
    o = i(615300),
    r = i(717421),
    u = i(565645),
    d = i(21161),
    c = i(750506),
    h = i(147421),
    m = i(486020),
    p = i(690521),
    g = i(851110),
    A = i(740032);
let f = [];
function E(e) {
    let { messageId: t, emoji: i, startPosition: E, targetPosition: T } = e,
        [N, x] = l.useState(0),
        [I, j] = l.useState(0),
        [v, R] = l.useState(null),
        { confettiCanvas: C } = l.useContext(d.x),
        b = (0, a.f9)(C, v),
        S = l.useMemo(
            () => [
                {
                    src: null == i.id ? p.Ay.getURL(i.name) : m.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        y = T.x - (T.width / 2) * 0.5,
        O = T.y - (T.height / 2) * 0.5,
        M = (0, r.z)({
            from: { y: E.y },
            to: { y: O },
            config: { duration: 450, easing: o.A.Easing.in(o.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                j(t);
            },
        }),
        _ = (0, r.z)({
            from: { x: E.x, scale: 1, opacity: 1 },
            to: { x: y, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: o.A.Easing.in(o.A.Easing.ease) },
            onRest: () => {
                (0, h.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                x(t);
            },
        });
    return (
        l.useEffect(() => {
            N > 0 && I > 0 && b.createConfetti({ ...g.Mw, position: { type: "static", value: { x: N, y: I } } });
        }, [b, N, I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(a.K_, { ref: R, sprites: S, colors: f, spriteWidth: g.wn, spriteHeight: g.wn }),
                (0, n.jsx)(c.Ay, {
                    children: (0, n.jsx)(s.animated.div, {
                        style: { ...M },
                        className: A.qq,
                        children: (0, n.jsx)(s.animated.div, {
                            style: { ..._, opacity: _.opacity },
                            children: (0, n.jsx)(u.A, {
                                className: A.Zg,
                                emojiId: i.id,
                                emojiName: i.name,
                                animated: i.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}
