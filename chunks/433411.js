n.d(t, { Z: () => x });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(755721),
    o = n(481060),
    c = n(906732),
    d = n(864106),
    u = n(1585),
    m = n(580747),
    p = n(345861),
    g = n(150039),
    h = n(993413),
    f = n(388032),
    b = n(142436);
function x(e) {
    let { user: t, guild: n, className: s, sectionTitle: p, forcedDivider: x = !1, withTutorial: j = !1, isTryItOutFlow: O = !1 } = e,
        { analyticsLocations: C } = (0, c.ZP)(),
        E = null != n,
        { userAvatarDecoration: v, guildAvatarDecoration: S, pendingAvatarDecoration: T, pendingErrors: N } = (0, g.$U)(t, n),
        I = (0, m.Z)('enable_avatar_decoration_uploads'),
        y = r.useCallback(
            () =>
                (0, u.ps)({
                    analyticsLocations: C,
                    isTryItOutFlow: O,
                    guild: n
                }),
            [C, O, n]
        ),
        A = O || void 0 !== T ? null != T : (E ? S : v) != null,
        P = j ? o.gtL : l.zx;
    return (0, i.jsxs)(h.Z, {
        className: s,
        forcedDivider: x,
        hasBackground: !0,
        title: p,
        errors: N,
        children: [
            (0, i.jsxs)('div', {
                className: b.buttonsContainer,
                children: [
                    (0, i.jsx)(P, {
                        size: l.zx.Sizes.SMALL,
                        onClick: y,
                        className: a()({ [b.buttonHighlighted]: j }),
                        children: f.intl.string(f.t.BVcYCw)
                    }),
                    A &&
                        (0, i.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: b.removeButton,
                            children: (0, i.jsx)(o.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: (0, d.ad)(t, n) ? f.intl.string(f.t.CHf9iI) : f.intl.string(f.t.OrokWl),
                                onClick: function () {
                                    (0, g.PO)(null == n ? void 0 : n.id, null);
                                }
                            })
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
        className: b.overrideButtonsContainer,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/bold',
                children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
            }),
            (0, i.jsx)(p.Z, {
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
