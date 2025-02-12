n.d(t, { Z: () => m }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(496675),
    a = n(434404),
    o = n(845377),
    c = n(981631),
    d = n(388032),
    u = n(414659);
let m = (e) => {
    let { guild: t } = e,
        n = (0, r.e7)([s.Z], () => s.Z.can(c.Plq.ADMINISTRATOR, t), [t]),
        m = t.hasFeature(c.oNc.DISCOVERABLE),
        h = () => {
            let e = new Set(t.features);
            t.hasFeature(c.oNc.DISCOVERABLE) && e.delete(c.oNc.DISCOVERABLE), a.Z.updateGuild({ features: e });
        };
    return (0, i.jsxs)(l.hjN, {
        title: d.intl.string(d.t.oGaVGx),
        tag: 'h2',
        children: [
            (0, i.jsx)('div', { className: u.background }),
            (0, i.jsxs)('div', {
                className: u.discoverySettings,
                children: [
                    (0, i.jsx)('div', { className: u.image }),
                    (0, i.jsx)(l.X6q, {
                        className: u.header,
                        variant: 'heading-xl/semibold',
                        children: d.intl.string(d.t.rSBQU1)
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.description,
                        variant: 'text-md/normal',
                        children: d.intl.format(d.t['6+lwSU'], {})
                    }),
                    (0, i.jsx)(o.Z, {
                        className: u.checklist,
                        guild: t,
                        guildId: t.id,
                        failedItemsOnly: !0
                    }),
                    m &&
                        (0, i.jsx)(l.ua7, {
                            text: n ? null : d.intl.string(d.t['5VbUBw']),
                            children: (e) =>
                                (0, i.jsx)(l.zxk, {
                                    size: l.zxk.Sizes.SMALL,
                                    onClick: h,
                                    color: l.zxk.Colors.PRIMARY,
                                    className: u.disableDiscoveryButton,
                                    disabled: !n,
                                    ...e,
                                    children: d.intl.string(d.t.RPfFQk)
                                })
                        })
                ]
            })
        ]
    });
};
