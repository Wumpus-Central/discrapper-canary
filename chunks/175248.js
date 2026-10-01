n.d(t, { E: () => g, QuestRewardModalUnverified: () => T });
var r = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(772707),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    C = n(287809),
    f = n(710969),
    A = n(375708),
    E = n(674456),
    _ = n(661965);
function T(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, s.bG)([C.default], () => C.default.getCurrentUser()?.email),
        [T, g] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        (g({ status: "loading" }),
            d.A.verifyResend().then(
                () => g({ status: "success" }),
                (e) => {
                    (g({ status: "error" }), (0, f.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } }));
                },
            ));
    }, []);
    let p =
        "error" === T.status
            ? A.intl.string(A.t.vjying)
            : "success" === T.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(l.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === T.status ? void 0 : { type: "image", src: _ },
        title: "loading" === T.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: p,
        actions:
            "loading" === T.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === T.status && (0, r.jsx)(u.y, {}),
            "success" === T.status &&
                (0, r.jsxs)("div", {
                    className: E.d,
                    children: [
                        (0, r.jsx)(a.CircleInformationIcon, { size: "xs", color: "currentColor", className: E.q }),
                        (0, r.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: A.intl.string(A.t.yb7itQ),
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
