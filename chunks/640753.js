n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(570140),
    s = n(607070),
    l = n(222677),
    c = n(695346),
    u = n(960020),
    d = n(347904),
    f = n(620652),
    p = n(815605),
    _ = n(537509),
    m = n(491726);
function h(e) {
    let { channelId: t, messageId: n, emoji: h, useChatFontScaling: g, color: E, count: b, emojiSize: y } = e,
        O = (0, a.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, h)),
        v = g ? m : _,
        S = i.useMemo(
            () =>
                (0, p.Zn)(h, E, t, {
                    key: O,
                    messageId: n,
                }),
            [E, O, h, t, n],
        ),
        [I, T] = i.useState(!1),
        A = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        C = c.Yk.useSetting(),
        N = i.useCallback(() => {
            o.Z.dispatch({
                type: "BURST_REACTION_EFFECT_CLEAR",
                channelId: t,
                messageId: n,
                emoji: h,
            });
        }, [h, t, n]);
    return (i.useEffect(() => {
        let e = () => {
            if (I) return;
            let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(h.name)) % 10;
            (e += b > 4 ? 4 : b - 1) > 7 &&
                (T(!0),
                (0, l.T6)({
                    channelId: t,
                    messageId: n,
                    emoji: h,
                    key: u.I.RANDOM,
                }));
        };
        if (I || (A && !C) || !C) return;
        e();
        let r = setInterval(e, 5000);
        return () => {
            clearInterval(r);
        };
    }, [C, t, b, h, h.name, I, n, A]),
    null == O)
        ? null
        : (0, r.jsx)(f.Z, {
              className: v.effect,
              effect: S,
              onComplete: N,
              emojiSize: y,
          });
}
let g = i.memo(h);
