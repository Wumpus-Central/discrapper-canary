var r = t(192379),
    i = t(570140),
    a = t(4646),
    c = t(258340),
    o = t(768581),
    u = t(176354);
n.Z = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: t, draw: s, emit: l } = (0, c.Z)(e),
        d = r.useMemo(() => new a.ZP(), []),
        f = r.useCallback(
            (e) => {
                (e.assetMap = d), s(e);
            },
            [d, s]
        );
    return (
        r.useEffect(() => {
            async function e(e) {
                var t;
                let { emoji: r } = e,
                    i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                    a =
                        null == r.id
                            ? u.ZP.getURL(r.name)
                            : o.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 32,
                                  forcePNG: !0
                              });
                await d.loadRemoteImage(i, a), l(i, n);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        {
            update: t,
            draw: f
        }
    );
};
