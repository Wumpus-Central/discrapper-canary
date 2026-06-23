"use strict";
n.d(t, { A: () => A }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(821609),
    o = n(477782),
    l = n(922016),
    u = n(980707),
    c = n(900797),
    d = n(847374),
    _ = n(964486),
    h = n(37948),
    f = n(174459),
    p = n(652215),
    E = (((i = {}).PRIMARY = "primary"), (i.SECONDARY = "secondary"), i);
function m(e) {
    let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
    f.default.track(p.HAw.PLAY_CTA_IMPRESSION, { location_stack: t, distributor: n, game_id: i, level: r });
}
var g = n(375708);
function A(e) {
    let {
            distributorCTAConfigs: t,
            applicationId: n,
            analyticsLocations: i,
            buttonVariant: A = "secondary",
            fullWidth: I = !0,
            stopPropagation: T = !1,
            onAction: S,
            onClose: y,
        } = e,
        C = (0, h.A)(),
        N = s.useRef(null),
        [v, R] = s.useState(!1);
    if (
        ((0, _.Ay)(() => {
            0 !== t.length &&
                (!(function (e) {
                    let { analyticsLocations: t, gameId: n, distributors: i } = e;
                    f.default.track(p.HAw.PLAY_CTA_DISPLAYED, { location_stack: t, game_id: n, distributors: i });
                })({
                    analyticsLocations: i,
                    gameId: n,
                    distributors: t.map((e) => {
                        let { ctaConfig: t } = e;
                        return t.distributor;
                    }),
                }),
                1 === t.length &&
                    m({ analyticsLocations: i, distributor: t[0].ctaConfig.distributor, gameId: n, level: E.PRIMARY }));
        }),
        0 === t.length)
    )
        return null;
    function O(e, t, r, s) {
        !(function (e) {
            let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
            f.default.track(p.HAw.PLAY_CTA_CLICKED, { location_stack: t, distributor: n, game_id: i, level: r });
        })({ analyticsLocations: i, distributor: t, gameId: n, level: s }),
            S?.({ action: r }),
            y?.(),
            C(e);
    }
    if (1 === t.length) {
        let { ctaConfig: e, skuId: n } = t[0];
        return (0, r.jsx)(a.$, {
            variant: A,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: I,
            onClick: (t) => {
                T && t.stopPropagation(), O(e.getStoreUrl(n), e.distributor, e.analyticsAction, E.PRIMARY);
            },
        });
    }
    let b = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: i } = e,
            s = [];
        return (
            t > 0 && s.push((0, r.jsx)(o.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, r.jsx)(
                    o.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => O(n.getStoreUrl(i), n.distributor, n.analyticsAction, E.SECONDARY),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, r.jsx)(l.Y, {
        targetElementRef: N,
        position: "bottom",
        onRequestOpen: function () {
            for (let { ctaConfig: e } of (R(!0), t))
                m({ analyticsLocations: i, distributor: e.distributor, gameId: n, level: E.SECONDARY });
        },
        onRequestClose: () => R(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: N.current?.offsetWidth },
                children: (0, r.jsx)(u.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": g.intl.string(g.t["3XhYOS"]),
                    children: (0, r.jsx)(o.rX, { children: b }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(a.$, {
                buttonRef: N,
                variant: A,
                size: "sm",
                icon: v ? c.t : d.a,
                iconPosition: "end",
                text: g.intl.string(g.t.nSHoxC),
                fullWidth: I,
                ...e,
                onClick: (t) => {
                    T && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
