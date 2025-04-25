n.d(t, { Z: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(570140),
    s = n(607070),
    l = n(222677),
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
        x = r.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: y,
                    messageId: n
                }),
            [j, y, g, t, n]
        ),
        [T, S] = r.useState(!1),
        _ = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        C = c.Yk.useSetting(),
        P = r.useCallback(() => {
            a.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (r.useEffect(() => {
        let e = () => {
            if (T) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += v > 4 ? 4 : v - 1) > 7 &&
                (S(!0),
                (0, l.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (T || (_ && !C) || !C) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [C, t, v, g, g.name, T, n, _]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: x,
              onComplete: P,
              emojiSize: O
          });
});
