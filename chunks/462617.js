var t = n(582128),
    c = n(855986),
    u = n(662090),
    l = n(734057),
    a = n(576705),
    d = n(403362),
    s = n(181079),
    i = n(5180),
    o = n(652215);
n.d(
    e,
    {},
    {
        A: function () {
            let r = (0, c.bG)([s.A], () => s.A.getFavoriteChannels());
            return t.useCallback(
                (e, n) => {
                    switch (e.type) {
                        case u.rD.USER: {
                            let t = l.A.getDMChannelFromUserId(e.record.id);
                            if (!n && null == t) return !1;
                            return null == t || null == r[t.id];
                        }
                        case u.rD.GROUP_DM:
                            return null == r[e.record.id];
                        case u.rD.TEXT_CHANNEL:
                        case u.rD.VOICE_CHANNEL:
                            return (
                                a.A.can(o.xBc.VIEW_CHANNEL, e.record) && (0, i.jt)(e.record) && null == r[e.record.id]
                            );
                        default:
                            return (0, d.xb)(e);
                    }
                },
                [r],
            );
        },
    },
);
