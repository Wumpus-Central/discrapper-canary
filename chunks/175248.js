n.d(e, { E: () => _, QuestRewardModalUnverified: () => g });
var r = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(772707),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    f = n(287809),
    C = n(710969),
    A = n(105292),
    T = n(674456),
    E = n(661965);
function g(t) {
    let { transitionState: e, onClose: n } = t,
        c = (0, s.bG)([f.default], () => f.default.getCurrentUser()?.email),
        [g, _] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        (_({ status: "loading" }),
            d.A.verifyResend().then(
                () => _({ status: "success" }),
                (t) => {
                    (_({ status: "error" }), (0, C.RF)(t, { tags: { location: "QuestsRewardModalUnverified" } }));
                },
            ));
    }, []);
    let p =
        "error" === g.status
            ? A.intl.string(A.t.vjying)
            : "success" === g.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(l.k, {
        transitionState: e,
        onClose: n,
        graphic: "loading" === g.status ? void 0 : { type: "image", src: E },
        title: "loading" === g.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: p,
        actions:
            "loading" === g.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === g.status && (0, r.jsx)(u.y, {}),
            "success" === g.status &&
                (0, r.jsxs)("div", {
                    className: T.d,
                    children: [
                        (0, r.jsx)(a.CircleInformationIcon, { size: "xs", color: "currentColor", className: T.q }),
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
function _() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: t } = await Promise.resolve().then(n.bind(n, 175248));
        return (e) => (0, r.jsx)(t, { ...e });
    });
}
