(n.d(t, { A: () => I }), n(321073));
var l,
    i = n(477900),
    a = n(582128),
    r = n(821609),
    s = n(477782),
    o = n(265872),
    u = n(165862),
    c = n(900797),
    d = n(847374),
    m = n(964486),
    A = n(37948),
    p = n(129230),
    h = n(652215),
    f = (((l = {}).PRIMARY = "primary"), (l.SECONDARY = "secondary"), l);
function g(e) {
    let { analyticsLocations: t, distributor: n, gameId: l, level: i } = e;
    p.default.track(h.HAw.PLAY_CTA_IMPRESSION, { location_stack: t, distributor: n, game_id: l, level: i });
}
var x = n(792996);
function I(e) {
    let {
            distributorCTAConfigs: t,
            applicationId: n,
            analyticsLocations: l,
            buttonVariant: I = "secondary",
            fullWidth: v = !0,
            stopPropagation: T = !1,
            onAction: S,
            onClose: y,
        } = e,
        N = (0, A.A)(),
        E = a.useRef(null),
        [C, j] = a.useState(!1);
    if (
        ((0, m.Ay)(() => {
            0 !== t.length &&
                (!(function (e) {
                    let { analyticsLocations: t, gameId: n, distributors: l } = e;
                    p.default.track(h.HAw.PLAY_CTA_DISPLAYED, { location_stack: t, game_id: n, distributors: l });
                })({
                    analyticsLocations: l,
                    gameId: n,
                    distributors: t.map((e) => {
                        let { ctaConfig: t } = e;
                        return t.distributor;
                    }),
                }),
                1 === t.length &&
                    g({ analyticsLocations: l, distributor: t[0].ctaConfig.distributor, gameId: n, level: f.PRIMARY }));
        }),
        0 === t.length)
    )
        return null;
    function _(e, t, i, a) {
        (!(function (e) {
            let { analyticsLocations: t, distributor: n, gameId: l, level: i } = e;
            p.default.track(h.HAw.PLAY_CTA_CLICKED, { location_stack: t, distributor: n, game_id: l, level: i });
        })({ analyticsLocations: l, distributor: t, gameId: n, level: a }),
            S?.({ action: i }),
            y?.(),
            N(e));
    }
    if (1 === t.length) {
        let { ctaConfig: e, skuId: n } = t[0];
        return (0, i.jsx)(r.$, {
            variant: I,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: v,
            onClick: (t) => {
                (T && t.stopPropagation(), _(e.getStoreUrl(n), e.distributor, e.analyticsAction, f.PRIMARY));
            },
        });
    }
    let b = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: l } = e,
            a = [];
        return (
            t > 0 && a.push((0, i.jsx)(s.bX, {}, `sep-${n.distributor}`)),
            a.push(
                (0, i.jsx)(
                    s.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => _(n.getStoreUrl(l), n.distributor, n.analyticsAction, f.SECONDARY),
                    },
                    n.distributor,
                ),
            ),
            a
        );
    });
    return (0, i.jsx)(o.Y, {
        targetElementRef: E,
        position: "bottom",
        onRequestOpen: function () {
            for (let { ctaConfig: e } of (j(!0), t))
                g({ analyticsLocations: l, distributor: e.distributor, gameId: n, level: f.SECONDARY });
        },
        onRequestClose: () => j(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: E.current?.offsetWidth },
                children: (0, i.jsx)(u.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": x.intl.string(x.t["3XhYOS"]),
                    children: (0, i.jsx)(s.rX, { children: b }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(r.$, {
                buttonRef: E,
                variant: I,
                size: "sm",
                icon: C ? c.ChevronSmallUpIcon : d.ChevronSmallDownIcon,
                iconPosition: "end",
                text: x.intl.string(x.t.nSHoxC),
                fullWidth: v,
                ...e,
                onClick: (t) => {
                    (T && t.stopPropagation(), e.onClick?.(t));
                },
            }),
    });
}
