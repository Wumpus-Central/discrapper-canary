var i = n(477900),
    r = n(582128),
    s = n(855986),
    l = n(772707),
    u = n(289873),
    a = n(885574),
    o = n(834730),
    c = n(192308),
    d = n(830215),
    f = n(287809),
    A = n(710969),
    C = n(792996),
    g = n(674456),
    E = n(661965);
n.d(
    t,
    {},
    {
        E: function () {
            (0, c.mM)(async () => {
                let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        QuestRewardModalUnverified: function (e) {
            let { transitionState: t, onClose: n } = e,
                c = (0, s.bG)([f.default], () => f.default.getCurrentUser()?.email),
                [T, _] = r.useState({ status: "unknown" });
            r.useEffect(() => {
                (_({ status: "loading" }),
                    d.A.verifyResend().then(
                        () => _({ status: "success" }),
                        (e) => {
                            (_({ status: "error" }),
                                (0, A.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } }));
                        },
                    ));
            }, []);
            let p =
                "error" === T.status
                    ? C.intl.string(C.t.vjying)
                    : "success" === T.status
                      ? C.intl.format(C.t.qP5xYc, { emailAddress: c, emailAddressLink: `mailto:${c}` })
                      : void 0;
            return (0, i.jsxs)(l.k, {
                transitionState: t,
                onClose: n,
                graphic: "loading" === T.status ? void 0 : { type: "image", src: E },
                title: "loading" === T.status ? void 0 : C.intl.string(C.t.c8eASM),
                subtitle: p,
                actions:
                    "loading" === T.status
                        ? void 0
                        : [{ variant: "secondary", text: C.intl.string(C.t.cpT0Cq), onClick: n }],
                children: [
                    "loading" === T.status && (0, i.jsx)(u.y, {}),
                    "success" === T.status &&
                        (0, i.jsxs)("div", {
                            className: g.d,
                            children: [
                                (0, i.jsx)(a.CircleInformationIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: g.q,
                                }),
                                (0, i.jsx)(o.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: C.intl.string(C.t.yb7itQ),
                                }),
                            ],
                        }),
                ],
            });
        },
    },
);
