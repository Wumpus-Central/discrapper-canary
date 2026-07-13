n.d(e, { E: () => T, QuestRewardModalUnverified: () => g });
var r = n(627968),
    s = n(64700),
    i = n(772707),
    l = n(17928),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    C = n(287809),
    f = n(710969),
    A = n(375708),
    E = n(105247),
    _ = n(661965);
function g(t) {
    let { transitionState: e, onClose: n } = t,
        c = (0, l.bG)([C.default], () => C.default.getCurrentUser()?.email),
        [g, T] = s.useState({ status: "unknown" });
    s.useEffect(() => {
        T({ status: "loading" }),
            d.A.verifyResend().then(
                () => T({ status: "success" }),
                (t) => {
                    T({ status: "error" }), (0, f.RF)(t, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let m =
        "error" === g.status
            ? A.intl.string(A.t.vjying)
            : "success" === g.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(i.k, {
        transitionState: e,
        onClose: n,
        graphic: "loading" === g.status ? void 0 : { type: "image", src: _ },
        title: "loading" === g.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: m,
        actions:
            "loading" === g.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === g.status && (0, r.jsx)(u.y, {}),
            "success" === g.status &&
                (0, r.jsxs)("div", {
                    className: E.d,
                    children: [
                        (0, r.jsx)(a.m, { size: "xs", color: "currentColor", className: E.q }),
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
function T() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: t } = await Promise.resolve().then(n.bind(n, 175248));
        return (e) => (0, r.jsx)(t, { ...e });
    });
}
