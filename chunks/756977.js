var l = n(855986),
    i = n(309010),
    a = n(628279),
    r = n(861089),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, l.bG)([a.A], () => a.A.isRequestOnCooldown(e)),
                o = (0, l.bG)([i.Ay], () => i.Ay.getVoiceChannelId() === t, [t]);
            return n
                ? [!0, s.intl.string(r.default.mVFTUg)]
                : o
                  ? [!1, s.intl.string(r.default.qRXats)]
                  : [!0, s.intl.string(r.default.qRXats)];
        },
    },
);
