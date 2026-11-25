var l = n(350835),
    i = n(121681),
    r = n(95701),
    a = n(690521),
    s = n(488926),
    o = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { activity: t, user: n, channel: u } = e;
            if (null == n || t?.type !== l.$.CUSTOM_STATUS || null == t.emoji) return !1;
            let d = t.emoji;
            if (null == d.id || null == u || !(0, r.ke)(u.type)) return !0;
            let c = i.Ay.getUsableCustomEmojiById(d.id),
                m = a.Ay.isInternalEmojiForGuildId(c, u.getGuildId()),
                h = s.$3({ permission: o.xBc.USE_EXTERNAL_EMOJIS, user: n, context: u });
            return !m || h;
        },
    },
);
