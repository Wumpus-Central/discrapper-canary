(n.d(t, { Z: () => g }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(570140),
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
    let { channelId: t, messageId: n, emoji: g, useChatFontScaling: b, color: j, count: O, emojiSize: y } = e,
        v = (0, l.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)),
        T = r.useMemo(
            () =>
                (0, p.Zn)(g, j, t, {
                    key: v,
                    messageId: n
                }),
            [j, v, g, t, n]
        ),
        [S, x] = r.useState(!1),
        E = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        R = c.Yk.useSetting(),
        I = r.useCallback(() => {
            o.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: g
            });
        }, [g, t, n]);
    return (r.useEffect(() => {
        let e = () => {
            if (S) return;
            let e = (0, d.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
            (e += O > 4 ? 4 : O - 1) > 7 &&
                (x(!0),
                (0, s.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: g,
                    key: u.I.RANDOM
                }));
        };
        if (S || (E && !R) || !R) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [R, t, O, g, g.name, S, n, E]),
    null == v)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (b ? f : m).effect,
              effect: T,
              onComplete: I,
              emojiSize: y
          });
});
