"use strict";
n.d(t, { E: () => g, QuestRewardModalUnverified: () => m });
var r = n(627968),
    i = n(64700),
    s = n(772707),
    a = n(311907),
    o = n(289873),
    l = n(885574),
    u = n(834730),
    c = n(192308),
    d = n(830215),
    _ = n(287809),
    f = n(710969),
    p = n(985018),
    h = n(105247),
    E = n(37229);
function m(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, a.bG)([_.default], () => _.default.getCurrentUser()?.email),
        [m, g] = i.useState({ status: "unknown" });
    i.useEffect(() => {
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
            ? p.intl.string(p.t.vjying)
            : "success" === m.status
              ? p.intl.format(p.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(s.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === m.status ? void 0 : { type: "image", src: E },
        title: "loading" === m.status ? void 0 : p.intl.string(p.t.c8eASM),
        subtitle: A,
        actions:
            "loading" === m.status ? void 0 : [{ variant: "secondary", text: p.intl.string(p.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === m.status && (0, r.jsx)(o.y, {}),
            "success" === m.status &&
                (0, r.jsxs)("div", {
                    className: h.d,
                    children: [
                        (0, r.jsx)(l.m, { size: "xs", color: "currentColor", className: h.q }),
                        (0, r.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: p.intl.string(p.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function g() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
