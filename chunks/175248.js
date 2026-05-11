"use strict";
n.d(t, { E: () => g, QuestRewardModalUnverified: () => m });
var i = n(627968),
    r = n(64700),
    s = n(772707),
    a = n(17928),
    o = n(289873),
    l = n(885574),
    u = n(834730),
    c = n(192308),
    d = n(830215),
    _ = n(287809),
    f = n(710969),
    h = n(375708),
    p = n(105247),
    E = n(661965);
function m(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.email),
        [m, g] = r.useState({ status: "unknown" });
    r.useEffect(() => {
        g({ status: "loading" }),
            d.A.verifyResend().then(
                () => g({ status: "success" }),
                (e) => {
                    g({ status: "error" }), (0, f.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let A =
        "error" === m.status
            ? h.intl.string(h.t.vjying)
            : "success" === m.status
              ? h.intl.format(h.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, i.jsxs)(s.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === m.status ? void 0 : { type: "image", src: E },
        title: "loading" === m.status ? void 0 : h.intl.string(h.t.c8eASM),
        subtitle: A,
        actions:
            "loading" === m.status ? void 0 : [{ variant: "secondary", text: h.intl.string(h.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === m.status && (0, i.jsx)(o.y, {}),
            "success" === m.status &&
                (0, i.jsxs)("div", {
                    className: p.d,
                    children: [
                        (0, i.jsx)(l.m, { size: "xs", color: "currentColor", className: p.q }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: h.intl.string(h.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function g() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
