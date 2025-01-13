var r = n(192379),
    i = n(570140),
    a = n(4646),
    u = n(258340),
    s = n(768581),
    c = n(176354);
t.Z = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
        { update: n, draw: l, emit: o } = (0, u.Z)(e),
        d = r.useMemo(() => new a.ZP(), []),
        f = r.useCallback(
            (e) => {
                (e.assetMap = d), l(e);
            },
            [d, l]
        );
    return (
        r.useEffect(() => {
            async function e(e) {
                var n;
                let { emoji: r } = e,
                    i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                    a =
                        null == r.id
                            ? c.ZP.getURL(r.name)
                            : s.ZP.getEmojiURL({
                                  id: r.id,
                                  animated: !1,
                                  size: 64,
                                  forcePNG: !0
                              });
                await d.loadRemoteImage(i, a), o(i, t);
            }
            return i.Z.subscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e), () => i.Z.unsubscribe('POTIONS_TRIGGER_MESSAGE_CONFETTI', e);
        }),
        {
            update: n,
            draw: f
        }
    );
};
