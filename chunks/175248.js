n.d(e, { E: () => _, QuestRewardModalUnverified: () => E });
var s = n(627968),
    i = n(64700),
    r = n(772707),
    l = n(17928),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    C = n(287809),
    f = n(710969),
    A = n(375708),
    g = n(105247),
    T = n(661965);
function E(t) {
    let { transitionState: e, onClose: n } = t,
        c = (0, l.bG)([C.default], () => C.default.getCurrentUser()?.email),
        [E, _] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        _({ status: "loading" }),
            d.A.verifyResend().then(
                () => _({ status: "success" }),
                (t) => {
                    _({ status: "error" }), (0, f.RF)(t, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let v =
        "error" === E.status
            ? A.intl.string(A.t.vjying)
            : "success" === E.status
              ? A.intl.format(A.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
              : void 0;
    return (0, s.jsxs)(r.k, {
        transitionState: e,
        onClose: n,
        graphic: "loading" === E.status ? void 0 : { type: "image", src: T },
        title: "loading" === E.status ? void 0 : A.intl.string(A.t.c8eASM),
        subtitle: v,
        actions:
            "loading" === E.status ? void 0 : [{ variant: "secondary", text: A.intl.string(A.t.cpT0Cq), onClick: n }],
        children: [
            "loading" === E.status && (0, s.jsx)(u.y, {}),
            "success" === E.status &&
                (0, s.jsxs)("div", {
                    className: g.d,
                    children: [
                        (0, s.jsx)(a.m, { size: "xs", color: "currentColor", className: g.q }),
                        (0, s.jsx)(o.E, {
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
        return (e) => (0, s.jsx)(t, { ...e });
    });
}
