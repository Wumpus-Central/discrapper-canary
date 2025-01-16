n(47120);
var i = n(200651),
    o = n(192379),
    a = n(442837),
    s = n(570140),
    l = n(607070),
    r = n(222677),
    c = n(695346),
    d = n(960020),
    u = n(347904),
    h = n(620652),
    m = n(815605),
    p = n(523160),
    f = n(122423);
t.Z = o.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: v, color: b, count: T, emojiSize: x } = e,
        _ = (0, a.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, g)),
        j = v ? f : p,
        C = o.useMemo(
            () =>
                (0, m.Zn)(g, b, t, {
                    key: _,
                    messageId: n
                }),
            [b, _, g, t, n]
        ),
        [S, E] = o.useState(!1),
        I = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        R = c.Yk.useSetting(),
        N = o.useCallback(() => {
            s.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (o.useEffect(() => {
        let e = () => {
            if (S) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += T > 4 ? 4 : T - 1) > 7 &&
                (E(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: d.I.RANDOM
                }));
        };
        if (S || (I && !R) || !R) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [R, t, T, g, g.name, S, n, I]),
    null == _)
        ? null
        : (0, i.jsx)(h.Z, {
              className: j.effect,
              effect: C,
              onComplete: N,
              emojiSize: x
          });
});
