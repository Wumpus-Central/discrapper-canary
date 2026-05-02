n.d(e, { E: () => E, QuestRewardModalUnverified: () => v });
var s = n(627968),
    i = n(64700),
    r = n(772707),
    l = n(17928),
    u = n(289873),
    o = n(885574),
    a = n(834730),
    c = n(192308),
    d = n(830215),
    C = n(287809),
    f = n(710969),
    A = n(375708),
    g = n(105247),
    T = n(37229);
function v(t) {
    let { transitionState: e, onClose: n } = t,
        c = (0, l.bG)([C.default], () => C.default.getCurrentUser()?.email),
        [v, E] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        E({ status: "loading" }),
            d.A.verifyResend().then(
                () => E({ status: "success" }),
                (t) => {
                    E({ status: "error" }), (0, f.RF)(t, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let _ =
        "error" === v.status
            ? A.intl.string(A.t.vjying)
            : "success" === v.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, s.jsxs)(r.k, {
        transitionState: e,
        onClose: n,
        graphic: "loading" === v.status ? void 0 : { type: "image", src: T },
        title: "loading" === v.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: _,
        actions:
            "loading" === v.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === v.status && (0, s.jsx)(u.y, {}),
            "success" === v.status &&
                (0, s.jsxs)("div", {
                    className: g.d,
                    children: [
                        (0, s.jsx)(o.m, { size: "xs", color: "currentColor", className: g.q }),
                        (0, s.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: A.intl.string(A.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function E() {
    (0, c.openModalLazy)(async () => {
        let { QuestRewardModalUnverified: t } = await Promise.resolve().then(n.bind(n, 175248));
        return (e) => (0, s.jsx)(t, { ...e });
    });
}
