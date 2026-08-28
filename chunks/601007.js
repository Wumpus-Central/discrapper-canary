"use strict";
n.d(t, { A: () => E }), n(321073);
var l,
    i = n(477900),
    s = n(582128),
    r = n(821609),
    a = n(477782),
    o = n(922016),
    u = n(980707),
    c = n(900797),
    d = n(847374),
    h = n(964486),
    m = n(37948),
    f = n(174459),
    p = n(652215),
    g = (((l = {}).PRIMARY = "primary"), (l.SECONDARY = "secondary"), l);
function x(e) {
    let { analyticsLocations: t, distributor: n, gameId: l, level: i } = e;
    f.default.track(p.HAw.PLAY_CTA_IMPRESSION, { location_stack: t, distributor: n, game_id: l, level: i });
}
var A = n(375708);
function E(e) {
    let {
            distributorCTAConfigs: t,
            applicationId: n,
            analyticsLocations: l,
            buttonVariant: E = "secondary",
            fullWidth: C = !0,
            stopPropagation: I = !1,
            onAction: y,
            onClose: S,
        } = e,
        N = (0, m.A)(),
        v = s.useRef(null),
        [_, j] = s.useState(!1);
    if (
        ((0, h.Ay)(() => {
            0 !== t.length &&
                (!(function (e) {
                    let { analyticsLocations: t, gameId: n, distributors: l } = e;
                    f.default.track(p.HAw.PLAY_CTA_DISPLAYED, { location_stack: t, game_id: n, distributors: l });
                })({
                    analyticsLocations: l,
                    gameId: n,
                    distributors: t.map((e) => {
                        let { ctaConfig: t } = e;
                        return t.distributor;
                    }),
                }),
                1 === t.length &&
                    x({ analyticsLocations: l, distributor: t[0].ctaConfig.distributor, gameId: n, level: g.PRIMARY }));
        }),
        0 === t.length)
    )
        return null;
    function T(e, t, i, s) {
        !(function (e) {
            let { analyticsLocations: t, distributor: n, gameId: l, level: i } = e;
            f.default.track(p.HAw.PLAY_CTA_CLICKED, { location_stack: t, distributor: n, game_id: l, level: i });
        })({ analyticsLocations: l, distributor: t, gameId: n, level: s }),
            y?.({ action: i }),
            S?.(),
            N(e);
    }
    if (1 === t.length) {
        let { ctaConfig: e, skuId: n } = t[0];
        return (0, i.jsx)(r.$, {
            variant: E,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: C,
            onClick: (t) => {
                I && t.stopPropagation(), T(e.getStoreUrl(n), e.distributor, e.analyticsAction, g.PRIMARY);
            },
        });
    }
    let b = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: l } = e,
            s = [];
        return (
            t > 0 && s.push((0, i.jsx)(a.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, i.jsx)(
                    a.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => T(n.getStoreUrl(l), n.distributor, n.analyticsAction, g.SECONDARY),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, i.jsx)(o.Y, {
        targetElementRef: v,
        position: "bottom",
        onRequestOpen: function () {
            for (let { ctaConfig: e } of (j(!0), t))
                x({ analyticsLocations: l, distributor: e.distributor, gameId: n, level: g.SECONDARY });
        },
        onRequestClose: () => j(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: v.current?.offsetWidth },
                children: (0, i.jsx)(u.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": A.intl.string(A.t["3XhYOS"]),
                    children: (0, i.jsx)(a.rX, { children: b }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(r.$, {
                buttonRef: v,
                variant: E,
                size: "sm",
                icon: _ ? c.t : d.a,
                iconPosition: "end",
                text: A.intl.string(A.t.nSHoxC),
                fullWidth: C,
                ...e,
                onClick: (t) => {
                    I && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
