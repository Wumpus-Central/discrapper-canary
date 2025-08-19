n.d(t, { Z: () => g }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(442837),
    o = n(570140),
    a = n(607070),
    s = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(537509),
    f = n(491726);
let g = l.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: j, count: v, emojiSize: O } = e,
        y = (0, r.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        T = l.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: y,
                    messageId: n,
                }),
            [j, y, g, t, n],
        ),
        [x, S] = l.useState(!1),
        E = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        R = c.Yk.useSetting(),
        I = l.useCallback(() => {
            o.Z.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: n,
                emoji: g,
            });
        }, [g, t, n]);
    return (l.useEffect(() => {
        let e = () => {
            if (x) return;
            let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (S(!0),
                (0, s.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM,
                }));
        };
        if (x || (E && !R) || !R) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [R, t, v, g, g.name, x, n, E]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: T,
              onComplete: I,
              emojiSize: O,
          });
});
