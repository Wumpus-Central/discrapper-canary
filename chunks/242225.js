d.d(
    i,
    {},
    {
        A: function (s, i, d) {
            return null != s && s.id !== i && !s.bot && !s.isSystemUser() && !d.isBlockedOrIgnored(s.id);
        },
    },
);
