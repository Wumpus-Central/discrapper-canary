n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(282956),
    r = n(573648),
    o = n(997509),
    d = n(447066),
    c = n(780765),
    u = n(835084);
function m(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: m,
            platformType: g,
            labelText: x,
            descriptionText: h,
            helpText: p,
            errors: A,
            canNavigate: b,
        } = e,
        _ = r.A.get(g),
        f = l.useCallback(
            async (e) => {
                b() && (await o.A.enableIntegration(m.id, e.type, e.id), a.A.startEditingIntegration(e.id));
            },
            [b, m.id],
        ),
        N = l.useCallback(
            (e) => {
                b() && (e.id === n?.id && a.A.stopEditingIntegration(), o.A.disableIntegration(m.id, e.id));
            },
            [b, n, m.id],
        ),
        j = l.useCallback(
            (e) => {
                b() && (e === n?.id ? a.A.stopEditingIntegration() : a.A.startEditingIntegration(e));
            },
            [b, n],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.A, {
                name: x,
                icon: _?.icon.whiteSVG,
                iconBackgroundColor: _?.color,
                iconClassName: u.tV,
                description: h,
                isHeader: !0,
            }),
            (0, i.jsx)(s.cGx, { className: u.zN }),
            "message" in A &&
                (0, i.jsx)(s.Text, {
                    className: u.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: A.message,
                }),
            t.map((e) =>
                (0, i.jsx)(
                    c.A,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: m,
                        isExpanded: n?.id === e.id,
                        onEnable: f,
                        onDisable: N,
                        onToggleExpand: () => j(e.id),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(s.Text, { className: u.BK, color: "text-muted", variant: "text-sm/normal", children: p }),
        ],
    });
}
