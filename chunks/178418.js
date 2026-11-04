var n = t(734057);
t.d(
    i,
    {},
    {
        c: function (e, i) {
            let t = n.A.getChannel(i);
            return null != t && e.bot && t.isPrivate() && null == t.rawRecipients.find((i) => i.id === e.id);
        },
    },
);
