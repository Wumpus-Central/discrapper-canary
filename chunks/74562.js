t.d(n, { Z: () => h });
var i = t(255367);
t(73800);
var r = t(442837),
    l = t(481060),
    o = t(434404),
    c = t(147754),
    a = t(939863),
    s = t(430824),
    u = t(496675),
    d = t(981631),
    g = t(388032),
    p = t(588477);
function h(e) {
    let { guildId: n, onClose: t } = e,
        { showHubEventsList: h } = c.Z.useExperiment(
            {
                guildId: n,
                location: '6597ca_1'
            },
            { autoTrackExposure: !1 }
        ),
        f = (0, r.e7)(
            [s.Z, u.Z],
            () => {
                let e = s.Z.getGuild(n);
                return u.Z.can(d.Plq.MANAGE_ROLES, e);
            },
            [n]
        ),
        v = (0, r.e7)(
            [s.Z],
            () => {
                let e = s.Z.getGuild(n);
                return h && (null == e ? void 0 : e.hasFeature(d.oNc.HUB));
            },
            [n, h]
        );
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)(a.Z, {
                children: (0, i.jsx)('div', {
                    className: p.circle,
                    children: (0, i.jsx)(l.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: p.icon
                    })
                })
            }),
            (0, i.jsx)(l.X6q, {
                color: 'header-primary',
                variant: 'heading-xl/semibold',
                className: p.title,
                children: v ? g.intl.string(g.t.RhXVpa) : g.intl.string(g.t['WgZ+3N'])
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                className: p.subtitle,
                children: v ? g.intl.string(g.t['6hktHB']) : g.intl.string(g.t['v/S/PD'])
            }),
            f &&
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: p.roleTip,
                    children: g.intl.format(g.t['K+DH2t'], {
                        onClick: () => {
                            o.Z.open(n, d.pNK.ROLES), t();
                        }
                    })
                })
        ]
    });
}
