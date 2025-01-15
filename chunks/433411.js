n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    m = n(345861),
    g = n(150039),
    h = n(993413),
    p = n(388032),
    x = n(887669);
function f(e) {
    let { user: t, guild: n, className: r, sectionTitle: m, forcedDivider: f = !1, withTutorial: E = !1, isTryItOutFlow: C = !1 } = e,
        { analyticsLocations: T } = (0, o.ZP)(),
        S = null != n,
        { userAvatarDecoration: b, guildAvatarDecoration: I, pendingAvatarDecoration: N, pendingErrors: v } = (0, g.$U)(t, n),
        A = (0, u.Z)('enable_avatar_decoration_uploads'),
        j = s.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: T,
                    isTryItOutFlow: C,
                    guild: n
                }),
            [T, C, n]
        ),
        R = C || void 0 !== N ? null != N : (S ? I : b) != null,
        O = E ? l.ShinyButton : l.Button;
    return (0, i.jsxs)(h.Z, {
        className: r,
        forcedDivider: f,
        hasBackground: !0,
        title: m,
        errors: v,
        children: [
            (0, i.jsxs)('div', {
                className: x.buttonsContainer,
                children: [
                    (0, i.jsx)(O, {
                        size: l.Button.Sizes.SMALL,
                        onClick: j,
                        className: a()({ [x.buttonHighlighted]: E }),
                        children: p.intl.string(p.t['Tna/TU'])
                    }),
                    R &&
                        (0, i.jsx)(l.Button, {
                            className: x.removeButton,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            size: l.Button.Sizes.SMALL,
                            onClick: function () {
                                (0, g.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? p.intl.string(p.t['GsW4/v']) : p.intl.string(p.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && A && (0, i.jsx)(_, { user: t })
        ]
    });
}
let _ = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: x.overrideButtonsContainer,
        children: [
            (0, i.jsx)(l.Text, {
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
