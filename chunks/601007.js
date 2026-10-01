(n.d(e, { A: () => I }), n(321073));
var l,
    i = n(477900),
    a = n(582128),
    r = n(821609),
    s = n(477782),
    o = n(922016),
    c = n(980707),
    u = n(900797),
    d = n(847374),
    A = n(964486),
    f = n(37948),
    p = n(174459),
    g = n(652215),
    m = (((l = {}).PRIMARY = "primary"), (l.SECONDARY = "secondary"), l);
function x(t) {
    let { analyticsLocations: e, distributor: n, gameId: l, level: i } = t;
    p.default.track(g.HAw.PLAY_CTA_IMPRESSION, { location_stack: e, distributor: n, game_id: l, level: i });
}
var _ = n(375708);
function I(t) {
    let {
            distributorCTAConfigs: e,
            applicationId: n,
            analyticsLocations: l,
            buttonVariant: I = "secondary",
            fullWidth: N = !0,
            stopPropagation: E = !1,
            onAction: T,
            onClose: C,
        } = t,
        S = (0, f.A)(),
        h = a.useRef(null),
        [y, O] = a.useState(!1);
    if (
        ((0, A.Ay)(() => {
            0 !== e.length &&
                (!(function (t) {
                    let { analyticsLocations: e, gameId: n, distributors: l } = t;
                    p.default.track(g.HAw.PLAY_CTA_DISPLAYED, { location_stack: e, game_id: n, distributors: l });
                })({
                    analyticsLocations: l,
                    gameId: n,
                    distributors: e.map((t) => {
                        let { ctaConfig: e } = t;
                        return e.distributor;
                    }),
                }),
                1 === e.length &&
                    x({ analyticsLocations: l, distributor: e[0].ctaConfig.distributor, gameId: n, level: m.PRIMARY }));
        }),
        0 === e.length)
    )
        return null;
    function v(t, e, i, a) {
        (!(function (t) {
            let { analyticsLocations: e, distributor: n, gameId: l, level: i } = t;
            p.default.track(g.HAw.PLAY_CTA_CLICKED, { location_stack: e, distributor: n, game_id: l, level: i });
        })({ analyticsLocations: l, distributor: e, gameId: n, level: a }),
            T?.({ action: i }),
            C?.(),
            S(t));
    }
    if (1 === e.length) {
        let { ctaConfig: t, skuId: n } = e[0];
        return (0, i.jsx)(r.$, {
            variant: I,
            size: "sm",
            icon: t.icon,
            text: t.getLabel(),
            fullWidth: N,
            onClick: (e) => {
                (E && e.stopPropagation(), v(t.getStoreUrl(n), t.distributor, t.analyticsAction, m.PRIMARY));
            },
        });
    }
    let j = e.flatMap((t, e) => {
        let { ctaConfig: n, skuId: l } = t,
            a = [];
        return (
            e > 0 && a.push((0, i.jsx)(s.bX, {}, `sep-${n.distributor}`)),
            a.push(
                (0, i.jsx)(
                    s.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => v(n.getStoreUrl(l), n.distributor, n.analyticsAction, m.SECONDARY),
                    },
                    n.distributor,
                ),
            ),
            a
        );
    });
    return (0, i.jsx)(o.Y, {
        targetElementRef: h,
        position: "bottom",
        onRequestOpen: function () {
            for (let { ctaConfig: t } of (O(!0), e))
                x({ analyticsLocations: l, distributor: t.distributor, gameId: n, level: m.SECONDARY });
        },
        onRequestClose: () => O(!1),
        renderPopout: (t) => {
            let { closePopout: e } = t;
            return (0, i.jsx)("div", {
                onClick: (t) => t.stopPropagation(),
                style: { width: "fit-content", minWidth: h.current?.offsetWidth },
                children: (0, i.jsx)(c.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: e,
                    onSelect: void 0,
                    "aria-label": _.intl.string(_.t["3XhYOS"]),
                    children: (0, i.jsx)(s.rX, { children: j }),
                }),
            });
        },
        children: (t) =>
            (0, i.jsx)(r.$, {
                buttonRef: h,
                variant: I,
                size: "sm",
                icon: y ? u.t : d.a,
                iconPosition: "end",
                text: _.intl.string(_.t.nSHoxC),
                fullWidth: N,
                ...t,
                onClick: (e) => {
                    (E && e.stopPropagation(), t.onClick?.(e));
                },
            }),
    });
}
