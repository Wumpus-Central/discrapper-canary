i.d(t, { A: () => E });
var n = i(627968),
    l = i(64700),
    a = i(106778),
    r = i(517738),
    s = i(615300),
    o = i(717421),
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
        [I, N] = l.useState(0),
        [x, v] = l.useState(0),
        [j, R] = l.useState(null),
        { confettiCanvas: S } = l.useContext(d.x),
        C = (0, a.f9)(S, j),
        b = l.useMemo(
            () => [
                {
                    src: null == i.id ? p.Ay.getURL(i.name) : m.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        y = T.x - (T.width / 2) * 0.5,
        _ = T.y - (T.height / 2) * 0.5,
        O = (0, o.z)({
            from: { y: E.y },
            to: { y: _ },
            config: { duration: 450, easing: s.A.Easing.in(s.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                v(t);
            },
        }),
        M = (0, o.z)({
            from: { x: E.x, scale: 1, opacity: 1 },
            to: { x: y, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: s.A.Easing.in(s.A.Easing.ease) },
            onRest: () => {
                (0, h.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                N(t);
            },
        });
    return (
        l.useEffect(() => {
            I > 0 && x > 0 && C.createConfetti({ ...g.Mw, position: { type: "static", value: { x: I, y: x } } });
        }, [C, I, x]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(a.K_, { ref: R, sprites: b, colors: f, spriteWidth: g.wn, spriteHeight: g.wn }),
                (0, n.jsx)(c.Ay, {
                    children: (0, n.jsx)(r.animated.div, {
                        style: { ...O },
                        className: A.qq,
                        children: (0, n.jsx)(r.animated.div, {
                            style: { ...M, opacity: M.opacity },
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
