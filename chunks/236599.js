n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(773669),
    c = n(183555),
    u = n(985018),
    A = n(79284);
function h(e) {
    let { className: t } = e,
        a = ["en-US", "en-GB"].includes((0, s.bG)([d.default], () => d.default.locale))
            ? u.intl.string(u.t.OYlggR)
            : u.intl.string(u.t.Y55Tua),
        { trackUserProfileEditAction: h } = (0, c.NJ)(),
        _ = l.useCallback(() => {
            h({ action: "PRESS_ADD_WIDGET" }),
                (0, o.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: h });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [h]);
    return (0, i.jsxs)("div", {
        className: r()(A.w, t),
        children: [
            (0, i.jsx)(o.Text, { variant: "text-xs/semibold", color: "text-subtle", children: a }),
            (0, i.jsx)(o.Button, {
                icon: o.j96,
                text: u.intl.string(u.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: _,
            }),
        ],
    });
}
