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
    g = n(773669),
    m = n(183555),
    _ = n(985018),
    f = n(392756);
function x(e) {
    let { className: t } = e,
        l = ["en-US", "en-GB"].includes((0, r.bG)([g.default], () => g.default.locale))
            ? _.intl.string(_.t.OYlggR)
            : _.intl.string(_.t.Y55Tua),
        { trackUserProfileEditAction: x } = (0, m.NJ)(),
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
        className: s()(f.w, t),
        children: [
            (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }),
            (0, i.jsx)(d.$, {
                icon: u.j,
                text: _.intl.string(_.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: p,
            }),
        ],
    });
}
