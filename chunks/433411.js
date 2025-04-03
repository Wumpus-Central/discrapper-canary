n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    m = n(345861),
    g = n(150039),
    p = n(993413),
    h = n(388032),
    f = n(142436);
function b(e) {
    let { user: t, guild: n, className: s, sectionTitle: m, forcedDivider: b = !1, withTutorial: x = !1, isTryItOutFlow: _ = !1 } = e,
        { analyticsLocations: E } = (0, o.ZP)(),
        j = null != n,
        { userAvatarDecoration: O, guildAvatarDecoration: C, pendingAvatarDecoration: S, pendingErrors: v } = (0, g.$U)(t, n),
        T = (0, u.Z)('enable_avatar_decoration_uploads'),
        I = i.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: E,
                    isTryItOutFlow: _,
                    guild: n
                }),
            [E, _, n]
        ),
        y = _ || void 0 !== S ? null != S : (j ? C : O) != null,
        A = x ? l.gtL : l.zxk;
    return (0, r.jsxs)(p.Z, {
        className: s,
        forcedDivider: b,
        hasBackground: !0,
        title: m,
        errors: v,
        children: [
            (0, r.jsxs)('div', {
                className: f.buttonsContainer,
                children: [
                    (0, r.jsx)(A, {
                        size: l.zxk.Sizes.SMALL,
                        onClick: I,
                        className: a()({ [f.buttonHighlighted]: x }),
                        children: h.NW.string(h.t['Tna/TU'])
                    }),
                    y &&
                        (0, r.jsx)(l.zxk, {
                            className: f.removeButton,
                            color: l.zxk.Colors.PRIMARY,
                            look: l.zxk.Looks.LINK,
                            size: l.zxk.Sizes.SMALL,
                            onClick: function () {
                                (0, g.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? h.NW.string(h.t['GsW4/v']) : h.NW.string(h.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && T && (0, r.jsx)(N, { user: t })
        ]
    });
}
let N = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)('div', {
        className: f.overrideButtonsContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, r.jsx)(m.Z, {
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
