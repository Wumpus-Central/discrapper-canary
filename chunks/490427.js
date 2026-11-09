var l = n(350835),
    i = n(121681),
    r = n(95701),
    s = n(690521),
    a = n(488926),
    u = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { activity: t, user: n, channel: o } = e;
            if (null == n || t?.type !== l.$.CUSTOM_STATUS || null == t.emoji) return !1;
            let d = t.emoji;
            if (null == d.id || null == o || !(0, r.ke)(o.type)) return !0;
            let c = i.Ay.getUsableCustomEmojiById(d.id),
                h = s.Ay.isInternalEmojiForGuildId(c, o.getGuildId()),
                m = a.$3({ permission: u.xBc.USE_EXTERNAL_EMOJIS, user: n, context: o });
            return !h || m;
        },
    },
);
