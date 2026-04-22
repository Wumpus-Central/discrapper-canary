n.d(t, { E: () => T, QuestRewardModalUnverified: () => A });
var r = n(627968),
    s = n(64700),
    l = n(772707),
    i = n(311907),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    f = n(287809),
    C = n(710969),
    E = n(985018),
    v = n(105247),
    g = n(37229);
function A(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, i.bG)([f.default], () => f.default.getCurrentUser()?.email),
        [A, T] = s.useState({ status: "unknown" });
    s.useEffect(() => {
        T({ status: "loading" }),
            d.A.verifyResend().then(
                () => T({ status: "success" }),
                (e) => {
                    T({ status: "error" }), (0, C.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let m =
        "error" === A.status
            ? E.intl.string(E.t.vjying)
            : "success" === A.status
              ? E.intl.format(E.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(l.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === A.status ? void 0 : { type: "image", src: g },
        title: "loading" === A.status ? void 0 : E.intl.string(E.t.c8eASM),
        subtitle: m,
        actions:
            "loading" === A.status ? void 0 : [{ variant: "secondary", text: E.intl.string(E.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === A.status && (0, r.jsx)(u.y, {}),
            "success" === A.status &&
                (0, r.jsxs)("div", {
                    className: v.d,
                    children: [
                        (0, r.jsx)(a.m, { size: "xs", color: "currentColor", className: v.q }),
                        (0, r.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: E.intl.string(E.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function T() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
