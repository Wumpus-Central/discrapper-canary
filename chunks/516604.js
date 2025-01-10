var r = n(192379),
    i = n(570140),
    u = n(4646),
    a = n(258340),
    c = n(768581),
    l = n(176354);
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: n, draw: o, emit: s } = (0, a.Z)(e),
        d = r.useMemo(() => new u.ZP(), []),
        f = r.useCallback(
            (e) => {
                (e.assetMap = d), o(e);
            },
            [d, o]
        );
    return (
        r.useEffect(() => {
            async function e(e) {
                var n;
                let { emoji: r } = e,
                    i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                    u =
                        null == r.id
                            ? l.ZP.getURL(r.name)
                            : c.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await d.loadRemoteImage(i, u), s(i, t);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        {
            update: n,
            draw: f
        }
    );
};
