n.d(t, { Z: () => g }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(570140),
    a = n(607070),
    s = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    h = n(620652),
    p = n(815605),
    m = n(981341),
    f = n(994648);
let g = r.memo(function (e) {
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: j, count: O, emojiSize: v } = e,
        y = (0, o.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        T = r.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: y,
                    messageId: n
                }),
            [j, y, g, t, n]
        ),
        [x, S] = r.useState(!1),
        _ = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        P = c.Yk.useSetting(),
        E = r.useCallback(() => {
            l.Z.dispatch({
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
            (e += O > 4 ? 4 : O - 1) > 7 &&
                (S(!0),
                (0, s.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (x || (_ && !P) || !P) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [P, t, O, g, g.name, x, n, _]),
    null == y)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: T,
              onComplete: E,
              emojiSize: v
          });
});
