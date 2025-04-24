n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    m = n(345861),
    p = n(150039),
    g = n(993413),
    h = n(388032),
    f = n(142436);
function b(e) {
    let { user: t, guild: n, className: s, sectionTitle: m, forcedDivider: b = !1, withTutorial: x = !1, isTryItOutFlow: E = !1 } = e,
        { analyticsLocations: C } = (0, o.ZP)(),
        j = null != n,
        { userAvatarDecoration: O, guildAvatarDecoration: S, pendingAvatarDecoration: v, pendingErrors: T } = (0, p.$U)(t, n),
        I = (0, u.Z)('enable_avatar_decoration_uploads'),
        N = r.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: C,
                    isTryItOutFlow: E,
                    guild: n
                }),
            [C, E, n]
        ),
        y = E || void 0 !== v ? null != v : (j ? S : O) != null,
        A = x ? a.gtL : a.zxk;
    return (0, i.jsxs)(g.Z, {
        className: s,
        forcedDivider: b,
        hasBackground: !0,
        title: m,
        errors: T,
        children: [
            (0, i.jsxs)('div', {
                className: f.buttonsContainer,
                children: [
                    (0, i.jsx)(A, {
                        size: a.zxk.Sizes.SMALL,
                        onClick: N,
                        className: l()({ [f.buttonHighlighted]: x }),
                        children: h.intl.string(h.t['Tna/TU'])
                    }),
                    y &&
                        (0, i.jsx)(a.zxk, {
                            className: f.removeButton,
                            color: a.zxk.Colors.PRIMARY,
                            look: a.zxk.Looks.LINK,
                            size: a.zxk.Sizes.SMALL,
                            onClick: function () {
                                (0, p.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? h.intl.string(h.t['GsW4/v']) : h.intl.string(h.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && I && (0, i.jsx)(_, { user: t })
        ]
    });
}
let _ = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: f.overrideButtonsContainer,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, i.jsx)(m.Z, {
                onChange: (e) => {
                    null != e &&
                        (t.avatarDecoration = {
                            asset: e,
                            skuID: 'PALUE000000001'
                        });
                },
                buttonCTA: 'Upload Override'
            })
        ]
    });
};
