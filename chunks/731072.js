n.d(t, { Z: () => b });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(139387),
    o = n(726542),
    s = n(434404),
    c = n(486199),
    d = n(13051),
    u = n(456928);
function b(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: b,
            platformType: p,
            labelText: m,
            descriptionText: f,
            helpText: g,
            errors: h,
            canNavigate: x,
        } = e,
        j = o.Z.get(p),
        v = r.useCallback(
            async (e) => {
                x() && (await s.Z.enableIntegration(b.id, e.type, e.id), a.Z.startEditingIntegration(e.id));
            },
            [x, b.id],
        ),
        O = r.useCallback(
            (e) => {
                x() &&
                    (e.id === (null == n ? void 0 : n.id) && a.Z.stopEditingIntegration(),
                    s.Z.disableIntegration(b.id, e.id));
            },
            [x, n, b.id],
        ),
        y = r.useCallback(
            (e) => {
                x() &&
                    (e === (null == n ? void 0 : n.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e));
            },
            [x, n],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                name: m,
                icon: null == j ? void 0 : j.icon.whiteSVG,
                iconBackgroundColor: null == j ? void 0 : j.color,
                iconClassName: u.platformIcon,
                description: f,
                isHeader: !0,
            }),
            (0, i.jsx)(l.izJ, { className: u.headerDivider }),
            "message" in h &&
                (0, i.jsx)(l.Text, {
                    className: u.errorText,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: h.message,
                }),
            t.map((e) =>
                (0, i.jsx)(
                    d.Z,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: b,
                        isExpanded: (null == n ? void 0 : n.id) === e.id,
                        onEnable: v,
                        onDisable: O,
                        onToggleExpand: () => y(e.id),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(l.Text, {
                className: u.helpText,
                color: "text-muted",
                variant: "text-sm/normal",
                children: g,
            }),
        ],
    });
}
