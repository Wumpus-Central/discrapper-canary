var e = i(477900),
    a = i(582128),
    l = i(855986),
    o = i(772707),
    r = i(116833),
    c = i(141628),
    p = i(660298),
    s = i(587895),
    u = i(591022),
    d = i(377840),
    f = i(674725),
    m = i(122393),
    k = i(222951),
    g = i(673383),
    C = i(752222),
    A = i(792996);
i.d(
    t,
    {},
    {
        default: function (n) {
            let { code: t, analyticsLocations: i, transitionState: h, onClose: S } = n,
                _ = (0, f.A)(t),
                b = _?.application.id,
                x = (0, l.bG)([s.A], () => s.A.getApplication(b)),
                y = (0, u.O)(b),
                { startAuthorization: D, canStartAuthorization: v } = (0, p.RD)(x);
            if (
                (a.useEffect(() => {
                    (0, d.A)(t);
                }, [t]),
                a.useEffect(() => {
                    "linked" === y && (S(), (0, k.A)(t));
                }, [y, t, S]),
                null == _)
            )
                return null;
            if ("error" === y || (("needs_link" === y || "link_unavailable" === y) && !v))
                return (0, e.jsx)(m.default, { code: t, reason: g.ru.ERROR, transitionState: h, onClose: S });
            let E = "loading" === y || "linked" === y,
                G = _.displayNoun ?? "other";
            return (0, e.jsx)(o.k, {
                transitionState: h,
                onClose: S,
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: r.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                    props: { application: x, isLoading: E || null == x },
                },
                title: A.intl.formatToPlainString(C.default.a1DdcF, { gameName: _.application.name, displayNoun: G }),
                subtitle: A.intl.formatToPlainString(C.default["xd+PSv"], { displayNoun: G }),
                actions: [
                    {
                        text: A.intl.string(C.default.qD9GKX),
                        variant: "primary",
                        icon: c.ExperimentalGameControllerLinkIcon,
                        loading: E,
                        onClick: function () {
                            (S(), D({ analyticsLocations: i, onSuccess: () => (0, k.A)(t) }));
                        },
                    },
                ],
            });
        },
    },
);
