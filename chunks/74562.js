t.d(e, {
    Z: function () {
        return v;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(434404),
    o = t(147754),
    c = t(939863),
    s = t(430824),
    u = t(496675),
    d = t(981631),
    g = t(388032),
    h = t(198394);
function v(n) {
    let { guildId: e, onClose: t } = n,
        { showHubEventsList: v } = o.Z.useExperiment(
            {
                guildId: e,
                location: '6597ca_1'
            },
            { autoTrackExposure: !1 }
        ),
        m = (0, l.e7)(
            [s.Z, u.Z],
            () => {
                let n = s.Z.getGuild(e);
                return u.Z.can(d.Plq.MANAGE_ROLES, n);
            },
            [e]
        ),
        x = (0, l.e7)(
            [s.Z],
            () => {
                let n = s.Z.getGuild(e);
                return v && (null == n ? void 0 : n.hasFeature(d.oNc.HUB));
            },
            [e, v]
        );
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(c.Z, {
                children: (0, i.jsx)('div', {
                    className: h.circle,
                    children: (0, i.jsx)(r.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: h.icon
                    })
                })
            }),
            (0, i.jsx)(r.Heading, {
                color: 'header-primary',
                variant: 'heading-xl/semibold',
                className: h.title,
                children: x ? g.intl.string(g.t.RhXVpa) : g.intl.string(g.t['WgZ+3N'])
            }),
            (0, i.jsx)(r.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: h.subtitle,
                children: x ? g.intl.string(g.t['6hktHB']) : g.intl.string(g.t['v/S/PD'])
            }),
            m &&
                (0, i.jsx)(r.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: h.roleTip,
                    children: g.intl.format(g.t['K+DH2t'], {
                        onClick: () => {
                            a.Z.open(e, d.pNK.ROLES), t();
                        }
                    })
                })
        ]
    });
}
