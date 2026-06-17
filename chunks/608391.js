a.d(t, { default: () => u });
var s = a(627968),
    i = a(64700),
    n = a(922545),
    d = a(396748),
    l = a(225180),
    c = a(76660),
    r = a(375708),
    o = a(242298);
function u(e) {
    let { guildId: t, gameInstance: a, ...u } = e,
        [m, g] = i.useState(!1),
        [h, p] = i.useState(void 0),
        k = (0, l.A)(a.gameId, "cover");
    return (0, s.jsx)(n.O, {
        size: "sm",
        title: a.name,
        body: (0, s.jsx)("div", {
            className: o.Z,
            children: (0, s.jsx)("img", { alt: "", src: k ?? "", className: o.S }),
        }),
        warningText: r.intl.string(c.default.ukbS3E),
        acknowledgementText: r.intl.string(c.default.xjRtF9),
        isLoading: m,
        error: h,
        onDeactivate: () => {
            p(void 0),
                g(!0),
                (0, d.e_)(t, a.planId, a.entitlementId)
                    .then(() => {
                        u.onClose();
                    })
                    .catch((e) => {
                        p(e.body.message ?? e.message);
                    })
                    .finally(() => {
                        g(!1);
                    });
        },
        ...u,
    });
}
