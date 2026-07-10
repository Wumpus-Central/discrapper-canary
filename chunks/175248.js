"use strict";
n.d(t, { E: () => p, QuestRewardModalUnverified: () => f });
var i = n(627968),
    r = n(64700),
    a = n(772707),
    s = n(17928),
    l = n(289873),
    o = n(885574),
    d = n(834730),
    c = n(192308),
    u = n(830215),
    _ = n(287809),
    E = n(710969),
    A = n(375708),
    h = n(710303),
    I = n(661965);
function f(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.email),
        [f, p] = r.useState({ status: "unknown" });
    r.useEffect(() => {
        p({ status: "loading" }),
            u.A.verifyResend().then(
                () => p({ status: "success" }),
                (e) => {
                    p({ status: "error" }), (0, E.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let T =
        "error" === f.status
            ? A.intl.string(A.t.vjying)
            : "success" === f.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, i.jsxs)(a.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === f.status ? void 0 : { type: "image", src: I },
        title: "loading" === f.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: T,
        actions:
            "loading" === f.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === f.status && (0, i.jsx)(l.y, {}),
            "success" === f.status &&
                (0, i.jsxs)("div", {
                    className: h.d,
                    children: [
                        (0, i.jsx)(o.m, { size: "xs", color: "currentColor", className: h.q }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: A.intl.string(A.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function p() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
