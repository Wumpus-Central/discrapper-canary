a.d(t, { default: () => u });
var n = a(627968),
    r = a(64700),
    s = a(285899),
    i = a(665171),
    l = a(225180),
    o = a(576709),
    c = a(985018),
    d = a(388474);
function u(e) {
    let { guildId: t, gameInstance: a, ...u } = e,
        [m, f] = r.useState(!1),
        [b, k] = r.useState(void 0),
        p = (0, l.A)(a.gameId, "cover");
    return (0, n.jsx)(s.O, {
        size: "sm",
        title: a.name,
        body: (0, n.jsx)("div", {
            className: d.Z,
            children: (0, n.jsx)("img", { alt: "", src: p ?? "", className: d.S }),
        }),
        warningText: c.intl.string(o.default.ukbS3E),
        acknowledgementText: c.intl.string(o.default.xjRtF9),
        isLoading: m,
        error: b,
        onDeactivate: () => {
            k(void 0),
                f(!0),
                (0, i.e_)(t, a.planId, a.entitlementId)
                    .then(() => {
                        u.onClose();
                    })
                    .catch((e) => {
                        k(e.body.message ?? e.message);
                    })
                    .finally(() => {
                        f(!1);
                    });
        },
        ...u,
    });
}
