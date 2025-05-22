n.d(t, { Z: () => m });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(707558),
    a = n(577720),
    o = n(388032),
    c = n(835071);
let d = () => [
    {
        icon: c.perkNewsletter,
        title: o.intl.string(o.t.vURCf3),
        description: o.intl.string(o.t.qqp5ZW)
    },
    {
        icon: c.perkBadge,
        title: o.intl.string(o.t.j4RYIy),
        description: o.intl.string(o.t['3N3YOD'])
    },
    {
        icon: c.perkChallenges,
        title: o.intl.string(o.t.Yu1bAg),
        description: o.intl.string(o.t.noChoK)
    }
];
class u extends r.Component {
    render() {
        return (0, i.jsxs)('div', {
            className: c.features,
            children: [
                (0, i.jsx)(a.Z, {
                    className: c.video,
                    videoID: 'SWzB1mx2o5k'
                }),
                (0, i.jsx)(s.X6q, {
                    className: c.perksHeading,
                    variant: 'heading-sm/semibold',
                    children: o.intl.string(o.t['ITh5+/'])
                }),
                (0, i.jsx)(l.Z, { features: d() })
            ]
        });
    }
}
let m = u;
