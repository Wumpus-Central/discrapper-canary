var r = t(477900);
t(582128);
var i = t(358618),
    a = t(983851),
    l = t(625180),
    u = t(58736),
    o = t(620999),
    c = t(165610),
    d = t(191850),
    A = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { frame: e } = n;
            if (!(0, c.x1)(e) || !(0, o.v)(e)) return null;
            let { userMuted: t } = e.data,
                p = A.intl.string(t ? d.default.bd0Ufh : d.default.dxBzpe);
            return (0, r.jsx)(u.Ay.Icon, {
                icon: t ? i.VoiceXIcon : a.VoiceNormalIcon,
                tooltip: p,
                "aria-label": p,
                onClick: () => l.A.setFrameUserMuted(e.id, !t),
            });
        },
    },
);
