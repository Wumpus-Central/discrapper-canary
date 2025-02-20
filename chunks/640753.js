n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(570140),
    s = n(607070),
    l = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(830600),
    f = n(653636);
let g = o.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: v, count: j, emojiSize: O } = e,
        y = (0, r.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        x = o.useMemo(
            () =>
                (0, p.Zn)(g, v, t, {
                    key: y,
                    messageId: n
                }),
            [v, y, g, t, n]
        ),
        [T, S] = o.useState(!1),
        _ = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        N = c.Yk.useSetting(),
        C = o.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (o.useEffect(() => {
        let e = () => {
            if (T) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += j > 4 ? 4 : j - 1) > 7 &&
                (S(!0),
                (0, l.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (T || (_ && !N) || !N) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [N, t, j, g, g.name, T, n, _]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: x,
              onComplete: C,
              emojiSize: O
          });
});
