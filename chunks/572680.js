i.d(t, { A: () => T });
var n = i(627968),
    l = i(64700),
    a = i(106778),
    s = i(382222),
    r = i(615300),
    o = i(397927),
    u = i(565645),
    d = i(21161),
    c = i(750506),
    h = i(147421),
    m = i(486020),
    p = i(690521),
    g = i(851110),
    A = i(396560);
let f = [];
function T(e) {
    let { messageId: t, emoji: i, startPosition: T, targetPosition: E } = e,
        [x, N] = l.useState(0),
        [I, v] = l.useState(0),
        [j, R] = l.useState(null),
        { confettiCanvas: C } = l.useContext(d.x),
        S = (0, a.f9)(C, j),
        b = l.useMemo(
            () => [
                {
                    src: null == i.id ? p.Ay.getURL(i.name) : m.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        y = E.x - (E.width / 2) * 0.5,
        _ = E.y - (E.height / 2) * 0.5,
        O = (0, o.zhh)({
            from: { y: T.y },
            to: { y: _ },
            config: { duration: 450, easing: r.A.Easing.in(r.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                v(t);
            },
        }),
        L = (0, o.zhh)({
            from: { x: T.x, scale: 1, opacity: 1 },
            to: { x: y, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: r.A.Easing.in(r.A.Easing.ease) },
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
            x > 0 && I > 0 && S.createConfetti({ ...g.Mw, position: { type: "static", value: { x: x, y: I } } });
        }, [S, x, I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(a.K_, { ref: R, sprites: b, colors: f, spriteWidth: g.wn, spriteHeight: g.wn }),
                (0, n.jsx)(c.Ay, {
                    children: (0, n.jsx)(s.animated.div, {
                        style: { ...O },
                        className: A.qq,
                        children: (0, n.jsx)(s.animated.div, {
                            style: { ...L, opacity: L.opacity },
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
