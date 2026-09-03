n.d(t, { E: () => T, QuestRewardModalUnverified: () => g });
var i = n(477900),
    l = n(582128),
    r = n(772707),
    s = n(17928),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    f = n(287809),
    A = n(710969),
    C = n(375708),
    E = n(674456),
    _ = n(661965);
function g(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, s.bG)([f.default], () => f.default.getCurrentUser()?.email),
        [g, T] = l.useState({ status: "unknown" });
    l.useEffect(() => {
        T({ status: "loading" }),
            d.A.verifyResend().then(
                () => T({ status: "success" }),
                (e) => {
                    T({ status: "error" }), (0, A.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let m =
        "error" === g.status
            ? C.intl.string(C.t.vjying)
            : "success" === g.status
              ? C.intl.format(C.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, i.jsxs)(r.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === g.status ? void 0 : { type: "image", src: _ },
        title: "loading" === g.status ? void 0 : C.intl.string(C.t.c8eASM),
        subtitle: m,
        actions:
            "loading" === g.status ? void 0 : [{ variant: "secondary", text: C.intl.string(C.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === g.status && (0, i.jsx)(u.y, {}),
            "success" === g.status &&
                (0, i.jsxs)("div", {
                    className: E.d,
                    children: [
                        (0, i.jsx)(a.CircleInformationIcon, { size: "xs", color: "currentColor", className: E.q }),
                        (0, i.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: C.intl.string(C.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function T() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
