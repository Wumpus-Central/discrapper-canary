n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(707558),
    l = n(577720),
    o = n(388032),
    c = n(835071);
let d = () => [
    {
        icon: c.perkNewsletter,
        title: o.NW.string(o.t.vURCf3),
        description: o.NW.string(o.t.qqp5ZW)
    },
    {
        icon: c.perkBadge,
        title: o.NW.string(o.t.j4RYIy),
        description: o.NW.string(o.t['3N3YOD'])
    },
    {
        icon: c.perkChallenges,
        title: o.NW.string(o.t.Yu1bAg),
        description: o.NW.string(o.t.noChoK)
    }
];
class u extends i.Component {
    render() {
        return (0, r.jsxs)('div', {
            className: c.features,
            children: [
                (0, r.jsx)(l.Z, {
                    className: c.video,
                    videoID: 'SWzB1mx2o5k'
                }),
                (0, r.jsx)(s.X6q, {
                    className: c.perksHeading,
                    variant: 'heading-sm/semibold',
                    children: o.NW.string(o.t['ITh5+/'])
                }),
                (0, r.jsx)(a.Z, { features: d() })
            ]
        });
    }
}
let m = u;
