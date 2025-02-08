n.d(t, { Z: () => p });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    m = n(345861),
    g = n(150039),
    h = n(993413),
    x = n(388032),
    _ = n(887669);
function p(e) {
    let { user: t, guild: n, className: r, sectionTitle: m, forcedDivider: p = !1, withTutorial: C = !1, isTryItOutFlow: f = !1 } = e,
        { analyticsLocations: T } = (0, o.ZP)(),
        N = null != n,
        { userAvatarDecoration: I, guildAvatarDecoration: S, pendingAvatarDecoration: b, pendingErrors: v } = (0, g.$U)(t, n),
        j = (0, u.Z)('enable_avatar_decoration_uploads'),
        A = s.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: T,
                    isTryItOutFlow: f,
                    guild: n
                }),
            [T, f, n]
        ),
        O = f || void 0 !== b ? null != b : (N ? S : I) != null,
        R = C ? a.gtL : a.zxk;
    return (0, i.jsxs)(h.Z, {
        className: r,
        forcedDivider: p,
        hasBackground: !0,
        title: m,
        errors: v,
        children: [
            (0, i.jsxs)('div', {
                className: _.buttonsContainer,
                children: [
                    (0, i.jsx)(R, {
                        size: a.zxk.Sizes.SMALL,
                        onClick: A,
                        className: l()({ [_.buttonHighlighted]: C }),
                        children: x.intl.string(x.t['Tna/TU'])
                    }),
                    O &&
                        (0, i.jsx)(a.zxk, {
                            className: _.removeButton,
                            color: a.zxk.Colors.PRIMARY,
                            look: a.zxk.Looks.LINK,
                            size: a.zxk.Sizes.SMALL,
                            onClick: function () {
                                (0, g.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? x.intl.string(x.t['GsW4/v']) : x.intl.string(x.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && j && (0, i.jsx)(E, { user: t })
        ]
    });
}
let E = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: _.overrideButtonsContainer,
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
