"use strict";
n.d(t, { E: () => p, QuestRewardModalUnverified: () => g });
var i = n(627968),
    r = n(64700),
    s = n(772707),
    a = n(17928),
    o = n(289873),
    l = n(885574),
    d = n(834730),
    _ = n(192308),
    u = n(830215),
    c = n(287809),
    E = n(710969),
    h = n(985018),
    m = n(105247),
    f = n(37229);
function g(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.email),
        [g, p] = r.useState({ status: "unknown" });
    r.useEffect(() => {
        p({ status: "loading" }),
            u.A.verifyResend().then(
                () => p({ status: "success" }),
                (e) => {
                    p({ status: "error" }), (0, E.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let A =
        "error" === g.status
            ? h.intl.string(h.t.vjying)
            : "success" === g.status
              ? h.intl.format(h.t.qP5xYc, { emailAddress: _, emailAddressLink: `mailto:${_}` })
              : void 0;
    return (0, i.jsxs)(s.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === g.status ? void 0 : { type: "image", src: f },
        title: "loading" === g.status ? void 0 : h.intl.string(h.t.c8eASM),
        subtitle: A,
        actions:
            "loading" === g.status ? void 0 : [{ variant: "secondary", text: h.intl.string(h.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === g.status && (0, i.jsx)(o.y, {}),
            "success" === g.status &&
                (0, i.jsxs)("div", {
                    className: m.d,
                    children: [
                        (0, i.jsx)(l.m, { size: "xs", color: "currentColor", className: m.q }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: h.intl.string(h.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function p() {
    (0, _.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
