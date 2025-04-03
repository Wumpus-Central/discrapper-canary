n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(139387),
    a = n(726542),
    s = n(434404),
    c = n(486199),
    d = n(13051),
    u = n(621057);
function p(e) {
    let { integrations: t, editedIntegration: n, guild: p, platformType: m, labelText: b, descriptionText: g, helpText: f, canNavigate: h } = e,
        x = a.Z.get(m),
        j = i.useCallback(
            async (e) => {
                h() && (await s.Z.enableIntegration(p.id, e.type, e.id), o.Z.startEditingIntegration(e.id));
            },
            [h, p.id]
        ),
        N = i.useCallback(
            (e) => {
                h() && (e.id === (null == n ? void 0 : n.id) && o.Z.stopEditingIntegration(), s.Z.disableIntegration(p.id, e.id));
            },
            [h, n, p.id]
        ),
        O = i.useCallback(
            (e) => {
                h() && (e === (null == n ? void 0 : n.id) ? o.Z.stopEditingIntegration() : o.Z.startEditingIntegration(e));
            },
            [h, n]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                name: b,
                icon: null == x ? void 0 : x.icon.whiteSVG,
                iconBackgroundColor: null == x ? void 0 : x.color,
                iconClassName: u.platformIcon,
                description: g,
                isHeader: !0
            }),
            (0, r.jsx)(l.$i$, { className: u.headerDivider }),
            t.map((e) =>
                (0, r.jsx)(
                    d.Z,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: p,
                        isExpanded: (null == n ? void 0 : n.id) === e.id,
                        onEnable: j,
                        onDisable: N,
                        onToggleExpand: () => O(e.id)
                    },
                    e.id
                )
            ),
            (0, r.jsx)(l.Text, {
                className: u.helpText,
                color: 'text-muted',
                variant: 'text-sm/normal',
                children: f
            })
        ]
    });
}
