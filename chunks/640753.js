n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(570140),
    l = n(607070),
    s = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(981341),
    f = n(994648);
let g = r.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: j, count: v, emojiSize: O } = e,
        y = (0, o.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        T = r.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: y,
                    messageId: n
                }),
            [j, y, g, t, n]
        ),
        [x, _] = r.useState(!1),
        S = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        C = c.Yk.useSetting(),
        E = r.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (r.useEffect(() => {
        let e = () => {
            if (x) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (_(!0),
                (0, s.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (x || (S && !C) || !C) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [C, t, v, g, g.name, x, n, S]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: T,
              onComplete: E,
              emojiSize: O
          });
});
