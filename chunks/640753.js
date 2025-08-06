n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(570140),
    s = n(607070),
    l = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    f = n(620652),
    _ = n(815605),
    p = n(981341),
    h = n(994648);
function m(e) {
    let { channelId: t, messageId: n, emoji: m, useChatFontScaling: g, color: E, count: b, emojiSize: y } = e,
        O = (0, o.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, m)),
        v = g ? h : p,
        I = i.useMemo(
            () =>
                (0, _.Zn)(m, E, t, {
                    key: O,
                    messageId: n,
                }),
            [E, O, m, t, n],
        ),
        [T, S] = i.useState(!1),
        A = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        N = c.Yk.useSetting(),
        C = i.useCallback(() => {
            a.Z.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: n,
                emoji: m,
            });
        }, [m, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (T) return;
            let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(m.name)) % 10;
            (e += b > 4 ? 4 : b - 1) > 7 &&
                (S(!0),
                (0, l.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: m,
                    key: u.I.RANDOM,
                }));
        };
        if (T || (A && !N) || !N) return;
        e();
        let r = setInterval(e, 5000);
        return () => {
            clearInterval(r);
        };
    }, [N, t, b, m, m.name, T, n, A]),
    null == O)
        ? null
        : (0, r.jsx)(f.Z, {
              className: v.effect,
              effect: I,
              onComplete: C,
              emojiSize: y,
          });
}
let g = i.memo(m);
