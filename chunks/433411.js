n.d(t, { Z: () => p });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(906732),
    c = n(864106),
    d = n(1585),
    u = n(580747),
    h = n(345861),
    m = n(150039),
    g = n(993413),
    x = n(388032),
    _ = n(625285);
function p(e) {
    let { user: t, guild: n, className: l, sectionTitle: h, forcedDivider: p = !1, withTutorial: C = !1, isTryItOutFlow: f = !1 } = e,
        { analyticsLocations: N } = (0, o.ZP)(),
        I = null != n,
        { userAvatarDecoration: T, guildAvatarDecoration: S, pendingAvatarDecoration: j, pendingErrors: v } = (0, m.$U)(t, n),
        b = (0, u.Z)('enable_avatar_decoration_uploads'),
        A = s.useCallback(
            () =>
                (0, d.ps)({
                    analyticsLocations: N,
                    isTryItOutFlow: f,
                    guild: n
                }),
            [N, f, n]
        ),
        O = f || void 0 !== j ? null != j : (I ? S : T) != null,
        R = C ? a.gtL : a.zxk;
    return (0, i.jsxs)(g.Z, {
        className: l,
        forcedDivider: p,
        hasBackground: !0,
        title: h,
        errors: v,
        children: [
            (0, i.jsxs)('div', {
                className: _.buttonsContainer,
                children: [
                    (0, i.jsx)(R, {
                        size: a.zxk.Sizes.SMALL,
                        onClick: A,
                        className: r()({ [_.buttonHighlighted]: C }),
                        children: x.intl.string(x.t['Tna/TU'])
                    }),
                    O &&
                        (0, i.jsx)(a.zxk, {
                            className: _.removeButton,
                            color: a.zxk.Colors.PRIMARY,
                            look: a.zxk.Looks.LINK,
                            size: a.zxk.Sizes.SMALL,
                            onClick: function () {
                                (0, m.PO)(null == n ? void 0 : n.id, null);
                            },
                            children: (0, c.ad)(t, n) ? x.intl.string(x.t['GsW4/v']) : x.intl.string(x.t.GReZ6O)
                        })
                ]
            }),
            t.isStaff() && b && (0, i.jsx)(E, { user: t })
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
            (0, i.jsx)(h.Z, {
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
