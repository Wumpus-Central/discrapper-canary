n.d(t, { Z: () => f }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(570140),
    s = n(607070),
    a = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(981341),
    g = n(994648);
let f = r.memo(function (e) {
    let { channelId: t, messageId: n, emoji: f, useChatFontScaling: b, color: j, count: v, emojiSize: O } = e,
        y = (0, l.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, f)),
        x = r.useMemo(
            () =>
                (0, p.Zn)(f, j, t, {
                    key: y,
                    messageId: n
                }),
            [j, y, f, t, n]
        ),
        [S, T] = r.useState(!1),
        P = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        C = c.Yk.useSetting(),
        E = r.useCallback(() => {
            o.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: f
            });
        }, [f, t, n]);
    return (r.useEffect(() => {
        let e = () => {
            if (S) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(f.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (T(!0),
                (0, a.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: f,
                    key: u.I.RANDOM
                }));
        };
        if (S || (P && !C) || !C) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [C, t, v, f, f.name, S, n, P]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? g : m).effect,
              effect: x,
              onComplete: E,
              emojiSize: O
          });
});
