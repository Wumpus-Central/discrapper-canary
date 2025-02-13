i.d(t, { Z: () => f }), i(47120);
var n = i(200651),
    a = i(192379),
    o = i(442837),
    s = i(570140),
    l = i(607070),
    r = i(222677),
    c = i(695346),
    d = i(960020),
    u = i(347904),
    h = i(620652),
    m = i(815605),
    p = i(943225),
    g = i(492740);
let f = a.memo(function (e) {
    let { channelId: t, messageId: i, emoji: f, useChatFontScaling: v, color: x, count: b, emojiSize: T } = e,
        j = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, i, f)),
        _ = a.useMemo(
            () =>
                (0, m.Zn)(f, x, t, {
                    key: j,
                    messageId: i
                }),
            [x, j, f, t, i]
        ),
        [C, R] = a.useState(!1),
        S = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        N = c.Yk.useSetting(),
        I = a.useCallback(() => {
            s.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: i,
                emoji: f
            });
        }, [f, t, i]);
    return (a.useEffect(() => {
        let e = () => {
            if (C) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(i).concat(f.name)) % 10;
            (e += b > 4 ? 4 : b - 1) > 7 &&
                (R(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: i,
                    emoji: f,
                    key: d.I.RANDOM
                }));
        };
        if (C || (S && !N) || !N) return;
        e();
        let n = setInterval(e, 5000);
        return () => {
            clearInterval(n);
        };
    }, [N, t, b, f, f.name, C, i, S]),
    null == j)
        ? null
        : (0, n.jsx)(h.Z, {
              className: (v ? g : p).effect,
              effect: _,
              onComplete: I,
              emojiSize: T
          });
});
