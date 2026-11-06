var a = t(477900),
    e = t(582128),
    l = t(855986),
    o = t(772707),
    r = t(116833),
    s = t(687966),
    c = t(724302),
    u = t(587895),
    p = t(591022),
    d = t(124077),
    f = t(377840),
    m = t(674725),
    g = t(344774),
    k = t(222951),
    A = t(673383),
    C = t(752222),
    h = t(792996);
t.d(
    i,
    {},
    {
        default: function (n) {
            let { code: i, analyticsLocations: t, transitionState: S, onClose: y } = n,
                _ = (0, m.A)(i),
                b = _?.application.id,
                D = (0, l.bG)([u.A], () => u.A.getApplication(b)),
                N = (0, p.O)(b),
                { startAuthorization: v, canStartAuthorization: x } = (0, c.RD)(D);
            if (
                (e.useEffect(() => {
                    (0, f.A)(i);
                }, [i]),
                e.useEffect(() => {
                    "linked" === N && (y(), (0, k.A)(i));
                }, [N, i, y]),
                null == _)
            )
                return null;
            if ("error" === N || (("needs_link" === N || "link_unavailable" === N) && !x))
                return (0, a.jsx)(g.default, { code: i, reason: A.ru.ERROR, transitionState: S, onClose: y });
            let G = "loading" === N || "linked" === N,
                P = (0, d.A)({ displayNoun: _.displayNoun, lowercase: !0 });
            return (0, a.jsx)(o.k, {
                transitionState: S,
                onClose: y,
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: r.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                    props: { application: D, isLoading: G || null == D },
                },
                title: h.intl.formatToPlainString(C.default.a1DdcF, { gameName: _.application.name, noun: P }),
                subtitle: h.intl.formatToPlainString(C.default["xd+PSv"], { noun: P }),
                actions: [
                    {
                        text: h.intl.string(C.default.qD9GKX),
                        variant: "primary",
                        icon: s.GameControllerIcon,
                        loading: G,
                        onClick: function () {
                            (y(), v({ analyticsLocations: t, onSuccess: () => (0, k.A)(i) }));
                        },
                    },
                ],
            });
        },
    },
);
