var a = i(477900),
    e = i(582128),
    l = i(855986),
    o = i(772707),
    r = i(116833),
    c = i(687966),
    s = i(660298),
    u = i(587895),
    p = i(591022),
    d = i(377840),
    f = i(674725),
    m = i(122393),
    g = i(222951),
    k = i(673383),
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
                y = (0, l.bG)([u.A], () => u.A.getApplication(b)),
                D = (0, p.O)(b),
                { startAuthorization: v, canStartAuthorization: x } = (0, s.RD)(y);
            if (
                (e.useEffect(() => {
                    (0, d.A)(t);
                }, [t]),
                e.useEffect(() => {
                    "linked" === D && (S(), (0, g.A)(t));
                }, [D, t, S]),
                null == _)
            )
                return null;
            if ("error" === D || (("needs_link" === D || "link_unavailable" === D) && !x))
                return (0, a.jsx)(m.default, { code: t, reason: k.ru.ERROR, transitionState: h, onClose: S });
            let G = "loading" === D || "linked" === D,
                N = _.displayNoun ?? "other";
            return (0, a.jsx)(o.k, {
                transitionState: h,
                onClose: S,
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: r.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                    props: { application: y, isLoading: G || null == y },
                },
                title: A.intl.formatToPlainString(C.default.a1DdcF, { gameName: _.application.name, displayNoun: N }),
                subtitle: A.intl.formatToPlainString(C.default["xd+PSv"], { displayNoun: N }),
                actions: [
                    {
                        text: A.intl.string(C.default.qD9GKX),
                        variant: "primary",
                        icon: c.GameControllerIcon,
                        loading: G,
                        onClick: function () {
                            (S(), v({ analyticsLocations: i, onSuccess: () => (0, g.A)(t) }));
                        },
                    },
                ],
            });
        },
    },
);
