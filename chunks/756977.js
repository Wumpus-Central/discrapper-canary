var l = i(855986),
    n = i(309010),
    u = i(628279),
    d = i(861089),
    a = i(792996);
i.d(
    t,
    {},
    {
        A: function (e, t) {
            let i = (0, l.bG)([u.A], () => u.A.isRequestOnCooldown(e)),
                r = (0, l.bG)([n.Ay], () => n.Ay.getVoiceChannelId() === t, [t]);
            return i
                ? [!0, a.intl.string(d.default.mVFTUg)]
                : r
                  ? [!1, a.intl.string(d.default.qRXats)]
                  : [!0, a.intl.string(d.default.qRXats)];
        },
    },
);
