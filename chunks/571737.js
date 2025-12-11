n.d(t, { Z: () => m }), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(768581),
    c = n(956965),
    d = n(548514),
    u = n(388032),
    p = n(360259);
let m = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        m = r.useRef(null),
        h = r.useMemo(
            () =>
                o.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 96,
                }),
            [t],
        ),
        f = r.useMemo(() => {
            let e = [];
            return (
                (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0P)),
                (0, s.Cb)(t) && (0 !== e.length && e.push("\u2022"), e.push(u.intl.string(u.t["8z5B2U"]))),
                (0, s.Hu)(t) && (0 !== e.length && e.push("\u2022"), e.push(u.intl.string(u.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Z, {
                application: t,
                bannerType: "detail",
                iconURL: h,
            }),
            (0, a.jsx)("div", {
                className: p.avatarContainer,
                style: { height: 52 },
                children: (0, a.jsx)("img", {
                    src: h,
                    alt: "",
                    className: p.avatar,
                    height: 96,
                    width: 96,
                    style: {
                        borderWidth: 4,
                        marginLeft: 28,
                    },
                }),
            }),
            (0, a.jsxs)("div", {
                className: p.infoContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: p.metadataContainer,
                        children: [
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, a.jsx)("div", {
                                className: p.disclosuresContainer,
                                children: f.map((e, t) =>
                                    (0, a.jsx)(
                                        l.Text,
                                        {
                                            className: p.disclosuresText,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, a.jsx)(i.$, {
                        innerRef: m,
                        onChange: n,
                        active: !0,
                        children: (0, a.jsx)(d.Z, {
                            ref: m,
                            application: t,
                            size: "md",
                        }),
                    }),
                ],
            }),
        ],
    });
};
