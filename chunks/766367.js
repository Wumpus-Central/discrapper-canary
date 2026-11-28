var t = i(477900);
i(582128);
var a = i(358618),
    l = i(983851),
    o = i(625180),
    r = i(58736),
    u = i(620999),
    d = i(165610),
    c = i(258576),
    p = i(792996);
i.d(
    e,
    {},
    {
        A: function (n) {
            let { frame: e } = n;
            if (!(0, d.x1)(e) || !(0, u.v)(e)) return null;
            let { userMuted: i } = e.data,
                s = p.intl.string(i ? c.default.bd0Ufh : c.default.dxBzpe);
            return (0, t.jsx)(r.Ay.Icon, {
                icon: i ? a.VoiceXIcon : l.VoiceNormalIcon,
                tooltip: s,
                "aria-label": s,
                onClick: () => o.A.setFrameUserMuted(e.id, !i),
            });
        },
    },
);
