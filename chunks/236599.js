n.d(t, { A: () => x });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(192308),
    c = n(834730),
    d = n(821609),
    u = n(307301),
    _ = n(773669),
    g = n(183555),
    f = n(985018),
    m = n(79284);
function x(e) {
    let { className: t } = e,
        l = ["en-US", "en-GB"].includes((0, r.bG)([_.default], () => _.default.locale))
            ? f.intl.string(f.t.OYlggR)
            : f.intl.string(f.t.Y55Tua),
        { trackUserProfileEditAction: x } = (0, g.NJ)(),
        p = a.useCallback(() => {
            x({ action: "PRESS_ADD_WIDGET" }),
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: x });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [x]);
    return (0, i.jsxs)("div", {
        className: s()(m.w, t),
        children: [
            (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }),
            (0, i.jsx)(d.$, {
                icon: u.j,
                text: f.intl.string(f.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: p,
            }),
        ],
    });
}
