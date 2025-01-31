n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(139387),
    s = n(726542),
    o = n(434404),
    d = n(486199),
    c = n(13051),
    u = n(36635);
function m(e) {
    let { integrations: t, editedIntegration: n, guild: m, platformType: h, labelText: x, descriptionText: p, helpText: g, canNavigate: f } = e,
        b = s.Z.get(h),
        v = l.useCallback(
            async (e) => {
                f() && (await o.Z.enableIntegration(m.id, e.type, e.id), r.Z.startEditingIntegration(e.id));
            },
            [f, m.id]
        ),
        _ = l.useCallback(
            (e) => {
                f() && (e.id === (null == n ? void 0 : n.id) && r.Z.stopEditingIntegration(), o.Z.disableIntegration(m.id, e.id));
            },
            [f, n, m.id]
        ),
        j = l.useCallback(
            (e) => {
                f() && (e === (null == n ? void 0 : n.id) ? r.Z.stopEditingIntegration() : r.Z.startEditingIntegration(e));
            },
            [f, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                name: x,
                icon: null == b ? void 0 : b.icon.whiteSVG,
                iconBackgroundColor: null == b ? void 0 : b.color,
                iconClassName: u.platformIcon,
                description: p,
                isHeader: !0
            }),
            (0, i.jsx)(a.$i$, { className: u.headerDivider }),
            t.map((e) =>
                (0, i.jsx)(
                    c.Z,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: m,
                        isExpanded: (null == n ? void 0 : n.id) === e.id,
                        onEnable: v,
                        onDisable: _,
                        onToggleExpand: () => j(e.id)
                    },
                    e.id
                )
            ),
            (0, i.jsx)(a.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: g
            })
        ]
    });
}
