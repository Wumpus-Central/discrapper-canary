n.d(t, { Z: () => g }), n(388685);
var i = n(255367),
    o = n(73800),
    l = n(442837),
    r = n(570140),
    a = n(607070),
    s = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(981341),
    f = n(994648);
let g = o.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: j, count: v, emojiSize: O } = e,
        y = (0, l.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        T = o.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: y,
                    messageId: n
                }),
            [j, y, g, t, n]
        ),
        [E, R] = o.useState(!1),
        S = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        x = c.Yk.useSetting(),
        N = o.useCallback(() => {
            r.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (o.useEffect(() => {
        let e = () => {
            if (E) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (R(!0),
                (0, s.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (E || (S && !x) || !x) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [x, t, v, g, g.name, E, n, S]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: T,
              onComplete: N,
              emojiSize: O
          });
});
