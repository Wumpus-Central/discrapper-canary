n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(139387),
    s = n(726542),
    o = n(434404),
    d = n(486199),
    c = n(13051),
    u = n(606631);
function m(e) {
    let { integrations: t, editedIntegration: n, guild: m, platformType: h, labelText: x, descriptionText: g, helpText: p, canNavigate: b } = e,
        _ = s.Z.get(h),
        f = l.useCallback(
            async (e) => {
                b() && (await o.Z.enableIntegration(m.id, e.type, e.id), r.Z.startEditingIntegration(e.id));
            },
            [b, m.id]
        ),
        v = l.useCallback(
            (e) => {
                b() && (e.id === (null == n ? void 0 : n.id) && r.Z.stopEditingIntegration(), o.Z.disableIntegration(m.id, e.id));
            },
            [b, n, m.id]
        ),
        C = l.useCallback(
            (e) => {
                b() && (e === (null == n ? void 0 : n.id) ? r.Z.stopEditingIntegration() : r.Z.startEditingIntegration(e));
            },
            [b, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                name: x,
                icon: null == _ ? void 0 : _.icon.whiteSVG,
                iconBackgroundColor: null == _ ? void 0 : _.color,
                iconClassName: u.platformIcon,
                description: g,
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
                        onEnable: f,
                        onDisable: v,
                        onToggleExpand: () => C(e.id)
                    },
                    e.id
                )
            ),
            (0, i.jsx)(a.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: p
            })
        ]
    });
}
