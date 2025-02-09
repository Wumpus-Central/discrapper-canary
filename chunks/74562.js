i.d(n, { Z: () => v });
var t = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(434404),
    o = i(147754),
    s = i(939863),
    c = i(430824),
    d = i(496675),
    u = i(981631),
    g = i(388032),
    h = i(926125);
function v(e) {
    let { guildId: n, onClose: i } = e,
        { showHubEventsList: v } = o.Z.useExperiment(
            {
                guildId: n,
                location: '6597ca_1'
            },
            { autoTrackExposure: !1 }
        ),
        x = (0, l.e7)(
            [c.Z, d.Z],
            () => {
                let e = c.Z.getGuild(n);
                return d.Z.can(u.Plq.MANAGE_ROLES, e);
            },
            [n]
        ),
        Z = (0, l.e7)(
            [c.Z],
            () => {
                let e = c.Z.getGuild(n);
                return v && (null == e ? void 0 : e.hasFeature(u.oNc.HUB));
            },
            [n, v]
        );
    return (0, t.jsxs)('div', {
        className: h.container,
        children: [
            (0, t.jsx)(s.Z, {
                children: (0, t.jsx)('div', {
                    className: h.circle,
                    children: (0, t.jsx)(a.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: h.icon
                    })
                })
            }),
            (0, t.jsx)(a.X6q, {
                color: 'header-primary',
                variant: 'heading-xl/semibold',
                className: h.title,
                children: Z ? g.intl.string(g.t.RhXVpa) : g.intl.string(g.t['WgZ+3N'])
            }),
            (0, t.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: h.subtitle,
                children: Z ? g.intl.string(g.t['6hktHB']) : g.intl.string(g.t['v/S/PD'])
            }),
            x &&
                (0, t.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: h.roleTip,
                    children: g.intl.format(g.t['K+DH2t'], {
                        onClick: () => {
                            r.Z.open(n, u.pNK.ROLES), i();
                        }
                    })
                })
        ]
    });
}
