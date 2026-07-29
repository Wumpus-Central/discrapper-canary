a.d(e, { default: () => c });
var s = a(477900),
    i = a(582128),
    r = a(285899),
    l = a(498480),
    n = a(349085),
    o = a(275695),
    d = a(375708),
    u = a(12928);
function c(t) {
    let { guildId: e, gameInstance: a, ...c } = t,
        [f, m] = i.useState(!1),
        [k, v] = i.useState(void 0),
        g = (0, n.A)(a.gameId, "cover");
    return (0, s.jsx)(r.O, {
        size: "sm",
        title: a.name,
        body: (0, s.jsx)("div", {
            className: u.Z,
            children: (0, s.jsx)("img", { alt: "", src: g ?? "", className: u.S }),
        }),
        warningText: d.intl.string(o.default.ukbS3E),
        acknowledgementText: d.intl.string(o.default.xjRtF9),
        isLoading: f,
        error: k,
        onDeactivate: () => {
            v(void 0),
                m(!0),
                (0, l.e_)(e, a.planId, a.entitlementId)
                    .then(() => {
                        c.onClose();
                    })
                    .catch((t) => {
                        v(t.body.message ?? t.message);
                    })
                    .finally(() => {
                        m(!1);
                    });
        },
        ...c,
    });
}
