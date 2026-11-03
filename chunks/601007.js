(e.d(n, { A: () => I }), e(321073));
var l,
    i = e(477900),
    a = e(582128),
    r = e(821609),
    s = e(477782),
    o = e(265872),
    c = e(980707),
    u = e(900797),
    d = e(847374),
    A = e(964486),
    f = e(37948),
    g = e(174459),
    m = e(652215),
    p = (((l = {}).PRIMARY = "primary"), (l.SECONDARY = "secondary"), l);
function x(t) {
    let { analyticsLocations: n, distributor: e, gameId: l, level: i } = t;
    g.default.track(m.HAw.PLAY_CTA_IMPRESSION, { location_stack: n, distributor: e, game_id: l, level: i });
}
var _ = e(105292);
function I(t) {
    let {
            distributorCTAConfigs: n,
            applicationId: e,
            analyticsLocations: l,
            buttonVariant: I = "secondary",
            fullWidth: N = !0,
            stopPropagation: E = !1,
            onAction: T,
            onClose: h,
        } = t,
        C = (0, f.A)(),
        S = a.useRef(null),
        [y, v] = a.useState(!1);
    if (
        ((0, A.Ay)(() => {
            0 !== n.length &&
                (!(function (t) {
                    let { analyticsLocations: n, gameId: e, distributors: l } = t;
                    g.default.track(m.HAw.PLAY_CTA_DISPLAYED, { location_stack: n, game_id: e, distributors: l });
                })({
                    analyticsLocations: l,
                    gameId: e,
                    distributors: n.map((t) => {
                        let { ctaConfig: n } = t;
                        return n.distributor;
                    }),
                }),
                1 === n.length &&
                    x({ analyticsLocations: l, distributor: n[0].ctaConfig.distributor, gameId: e, level: p.PRIMARY }));
        }),
        0 === n.length)
    )
        return null;
    function O(t, n, i, a) {
        (!(function (t) {
            let { analyticsLocations: n, distributor: e, gameId: l, level: i } = t;
            g.default.track(m.HAw.PLAY_CTA_CLICKED, { location_stack: n, distributor: e, game_id: l, level: i });
        })({ analyticsLocations: l, distributor: n, gameId: e, level: a }),
            T?.({ action: i }),
            h?.(),
            C(t));
    }
    if (1 === n.length) {
        let { ctaConfig: t, skuId: e } = n[0];
        return (0, i.jsx)(r.$, {
            variant: I,
            size: "sm",
            icon: t.icon,
            text: t.getLabel(),
            fullWidth: N,
            onClick: (n) => {
                (E && n.stopPropagation(), O(t.getStoreUrl(e), t.distributor, t.analyticsAction, p.PRIMARY));
            },
        });
    }
    let j = n.flatMap((t, n) => {
        let { ctaConfig: e, skuId: l } = t,
            a = [];
        return (
            n > 0 && a.push((0, i.jsx)(s.bX, {}, `sep-${e.distributor}`)),
            a.push(
                (0, i.jsx)(
                    s.Dr,
                    {
                        id: `distributor-${e.distributor}`,
                        label: e.getStoreName(),
                        iconLeft: e.icon,
                        leadingAccessory: { type: "icon", icon: e.icon },
                        action: () => O(e.getStoreUrl(l), e.distributor, e.analyticsAction, p.SECONDARY),
                    },
                    e.distributor,
                ),
            ),
            a
        );
    });
    return (0, i.jsx)(o.Y, {
        targetElementRef: S,
        position: "bottom",
        onRequestOpen: function () {
            for (let { ctaConfig: t } of (v(!0), n))
                x({ analyticsLocations: l, distributor: t.distributor, gameId: e, level: p.SECONDARY });
        },
        onRequestClose: () => v(!1),
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)("div", {
                onClick: (t) => t.stopPropagation(),
                style: { width: "fit-content", minWidth: S.current?.offsetWidth },
                children: (0, i.jsx)(c.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: n,
                    onSelect: void 0,
                    "aria-label": _.intl.string(_.t["3XhYOS"]),
                    children: (0, i.jsx)(s.rX, { children: j }),
                }),
            });
        },
        children: (t) =>
            (0, i.jsx)(r.$, {
                buttonRef: S,
                variant: I,
                size: "sm",
                icon: y ? u.t : d.a,
                iconPosition: "end",
                text: _.intl.string(_.t.nSHoxC),
                fullWidth: N,
                ...t,
                onClick: (n) => {
                    (E && n.stopPropagation(), t.onClick?.(n));
                },
            }),
    });
}
