n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(139387),
    o = n(726542),
    s = n(434404),
    d = n(486199),
    c = n(13051),
    u = n(36635);
function m(e) {
    let { integrations: t, editedIntegration: n, guild: m, platformType: h, labelText: p, descriptionText: g, helpText: x, canNavigate: f } = e,
        b = o.Z.get(h),
        v = l.useCallback(
            async (e) => {
                f() && (await s.Z.enableIntegration(m.id, e.type, e.id), a.Z.startEditingIntegration(e.id));
            },
            [f, m.id]
        ),
        C = l.useCallback(
            (e) => {
                f() && (e.id === (null == n ? void 0 : n.id) && a.Z.stopEditingIntegration(), s.Z.disableIntegration(m.id, e.id));
            },
            [f, n, m.id]
        ),
        N = l.useCallback(
            (e) => {
                f() && (e === (null == n ? void 0 : n.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e));
            },
            [f, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                name: p,
                icon: null == b ? void 0 : b.icon.whiteSVG,
                iconBackgroundColor: null == b ? void 0 : b.color,
                iconClassName: u.platformIcon,
                description: g,
                isHeader: !0
            }),
            (0, i.jsx)(r.FormDivider, { className: u.headerDivider }),
            t.map((e) =>
                (0, i.jsx)(
                    c.Z,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: m,
                        isExpanded: (null == n ? void 0 : n.id) === e.id,
                        onEnable: v,
                        onDisable: C,
                        onToggleExpand: () => N(e.id)
                    },
                    e.id
                )
            ),
            (0, i.jsx)(r.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: x
            })
        ]
    });
}
