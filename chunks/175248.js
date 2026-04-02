"use strict";
n.d(t, { E: () => h, QuestRewardModalUnverified: () => p });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(311907),
    o = n(397927),
    l = n(830215),
    u = n(287809),
    c = n(710969),
    d = n(985018),
    _ = n(366927),
    f = n(37229);
function p(e) {
    let { transitionState: t, onClose: n } = e,
        p = (0, a.bG)([u.default], () => u.default.getCurrentUser()?.email),
        [h, m] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        m({ status: "loading" }),
            l.A.verifyResend().then(
                () => m({ status: "success" }),
                (e) => {
                    m({ status: "error" }), (0, c.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let E =
        "error" === h.status
            ? d.intl.string(d.t.vjying)
            : "success" === h.status
              ? d.intl.format(d.t.qP5xYc, { emailAddress: p, emailAddressLink: `mailto:${p}` })
              : void 0;
    return (0, r.jsxs)(s.ExpressiveModal, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === h.status ? void 0 : { type: "image", src: f },
        title: "loading" === h.status ? void 0 : d.intl.string(d.t.c8eASM),
        subtitle: E,
        actions:
            "loading" === h.status ? void 0 : [{ variant: "secondary", text: d.intl.string(d.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === h.status && (0, r.jsx)(o.y$y, {}),
            "success" === h.status &&
                (0, r.jsxs)("div", {
                    className: _.d,
                    children: [
                        (0, r.jsx)(o.mir, { size: "xs", color: "currentColor", className: _.q }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function h() {
    (0, o.mMO)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
