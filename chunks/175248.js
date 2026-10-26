n.d(t, { E: () => g, QuestRewardModalUnverified: () => E });
var r = n(477900),
    i = n(582128),
    s = n(17928),
    l = n(772707),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    A = n(287809),
    f = n(710969),
    C = n(105292),
    T = n(674456),
    p = n(661965);
function E(e) {
    let { transitionState: t, onClose: n } = e,
        c = (0, s.bG)([A.default], () => A.default.getCurrentUser()?.email),
        [E, g] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        (g({ status: "loading" }),
            d.A.verifyResend().then(
                () => g({ status: "success" }),
                (e) => {
                    (g({ status: "error" }), (0, f.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } }));
                },
            ));
    }, []);
    let _ =
        "error" === E.status
            ? C.intl.string(C.t.vjying)
            : "success" === E.status
              ? C.intl.format(C.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, r.jsxs)(l.k, {
        transitionState: t,
        onClose: n,
        graphic: "loading" === E.status ? void 0 : { type: "image", src: p },
        title: "loading" === E.status ? void 0 : C.intl.string(C.t.c8eASM),
        subtitle: _,
        actions:
            "loading" === E.status ? void 0 : [{ variant: "secondary", text: C.intl.string(C.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === E.status && (0, r.jsx)(u.y, {}),
            "success" === E.status &&
                (0, r.jsxs)("div", {
                    className: T.d,
                    children: [
                        (0, r.jsx)(a.CircleInformationIcon, { size: "xs", color: "currentColor", className: T.q }),
                        (0, r.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: C.intl.string(C.t.yb7itQ),
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
