n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(442837),
    s = n(570140),
    l = n(607070),
    r = n(222677),
    c = n(695346),
    d = n(960020),
    u = n(347904),
    h = n(620652),
    m = n(815605),
    p = n(523160),
    g = n(122423);
let f = a.memo(function (e) {
    let { channelId: t, messageId: n, emoji: f, useChatFontScaling: v, color: T, count: x, emojiSize: _ } = e,
        b = (0, o.e7)([d.Z], () => d.Z.getEffectForEmojiId(t, n, f)),
        j = a.useMemo(
            () =>
                (0, m.Zn)(f, T, t, {
                    key: b,
                    messageId: n
                }),
            [T, b, f, t, n]
        ),
        [C, R] = a.useState(!1),
        S = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        E = c.Yk.useSetting(),
        I = a.useCallback(() => {
            s.Z.dispatch({
                type: 'BURST_REACTION_EFFECT_CLEAR',
                channelId: t,
                messageId: n,
                emoji: f
            });
        }, [f, t, n]);
    return (a.useEffect(() => {
        let e = () => {
            if (C) return;
            let e = (0, u.vJ)(''.concat(Date.now()).concat(t).concat(n).concat(f.name)) % 10;
            (e += x > 4 ? 4 : x - 1) > 7 &&
                (R(!0),
                (0, r.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: f,
                    key: d.I.RANDOM
                }));
        };
        if (C || (S && !E) || !E) return;
        e();
        let i = setInterval(e, 5000);
        return () => {
            clearInterval(i);
        };
    }, [E, t, x, f, f.name, C, n, S]),
    null == b)
        ? null
        : (0, i.jsx)(h.Z, {
              className: (v ? g : p).effect,
              effect: j,
              onComplete: I,
              emojiSize: _
          });
});
