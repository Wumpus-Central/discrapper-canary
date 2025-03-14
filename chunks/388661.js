n.d(t, { Z: () => g });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(550271),
    o = n(434404),
    c = n(254925),
    d = n(502936),
    u = n(388032),
    m = n(935921);
let g = function (e) {
    var t, n, i, g;
    let { className: p, guildId: h, guildProfile: f, isDisabled: b = !1 } = e,
        x = null !== (t = f.badge) && void 0 !== t ? t : c.QV['0'],
        j = null !== (n = f.badgeColorPrimary) && void 0 !== n ? n : c.go['0'].primary,
        N = null !== (i = f.badgeColorSecondary) && void 0 !== i ? i : c.go['0'].secondary;
    return (0, r.jsxs)('div', {
        className: p,
        children: [
            (0, r.jsx)(a.vwX, {
                className: m.sectionTitle,
                children: u.NW.string(d.Z['tN+8pK'])
            }),
            (0, r.jsxs)('div', {
                className: m.tagContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: m.tagInputContainer,
                        children: (0, r.jsx)(a.oil, {
                            className: m.tagInputWrapper,
                            inputClassName: s()(m.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, r.jsx)(l.A, {
                                badge: x,
                                width: 40,
                                height: 40,
                                primaryTintColor: j,
                                secondaryTintColor: N
                            }),
                            disabled: b,
                            value: null !== (g = null == f ? void 0 : f.tag) && void 0 !== g ? g : '',
                            onChange: function (e) {
                                o.Z.updateGuildProfile(h, { tag: e });
                            }
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: m.tagTooltip,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: u.NW.string(d.Z.UbC8y8)
                        })
                    })
                ]
            })
        ]
    });
};
