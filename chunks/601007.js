"use strict";
n.d(t, { A: () => I }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(989441),
    o = n(821609),
    l = n(477782),
    u = n(922016),
    c = n(980707),
    d = n(900797),
    _ = n(847374),
    f = n(964486),
    h = n(37948),
    p = n(174459),
    E = n(652215),
    m = (((i = {}).PRIMARY = "primary"), (i.SECONDARY = "secondary"), i);
function g(e) {
    let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
    p.default.track(E.HAw.PLAY_CTA_IMPRESSION, { location_stack: t, distributor: n, game_id: i, level: r });
}
var A = n(375708);
function I(e) {
    let {
            distributorCTAConfigs: t,
            applicationId: n,
            analyticsLocations: i,
            buttonVariant: I = "secondary",
            fullWidth: T = !0,
            stopPropagation: S = !1,
            onAction: N,
            onClose: y,
        } = e,
        C = (0, h.A)(),
        v = s.useRef(null),
        [O, R] = s.useState(!1);
    if (
        ((0, f.Ay)(() => {
            0 !== t.length &&
                (!(function (e) {
                    let { analyticsLocations: t, gameId: n, distributors: i } = e;
                    p.default.track(E.HAw.PLAY_CTA_DISPLAYED, { location_stack: t, game_id: n, distributors: i });
                })({
                    analyticsLocations: i,
                    gameId: n,
                    distributors: t.map((e) => {
                        let { ctaConfig: t } = e;
                        return t.distributor;
                    }),
                }),
                1 === t.length &&
                    g({ analyticsLocations: i, distributor: t[0].ctaConfig.distributor, gameId: n, level: m.PRIMARY }));
        }),
        0 === t.length)
    )
        return null;
    let b = (e, t, r, s) => {
        !(function (e) {
            let { analyticsLocations: t, distributor: n, gameId: i, level: r } = e;
            p.default.track(E.HAw.PLAY_CTA_CLICKED, { location_stack: t, distributor: n, game_id: i, level: r });
        })({ analyticsLocations: i, distributor: t, gameId: n, level: s }),
            N?.({ action: r }),
            y?.(),
            t === a.D.STEAM ? C(e) : window.open(e, "_blank", "noreferrer noopener");
    };
    if (1 === t.length) {
        let { ctaConfig: e, skuId: n } = t[0];
        return (0, r.jsx)(o.$, {
            variant: I,
            size: "sm",
            icon: e.icon,
            text: e.getLabel(),
            fullWidth: T,
            onClick: (t) => {
                S && t.stopPropagation(), b(e.getStoreUrl(n), e.distributor, e.analyticsAction, m.PRIMARY);
            },
        });
    }
    let D = t.flatMap((e, t) => {
        let { ctaConfig: n, skuId: i } = e,
            s = [];
        return (
            t > 0 && s.push((0, r.jsx)(l.bX, {}, `sep-${n.distributor}`)),
            s.push(
                (0, r.jsx)(
                    l.Dr,
                    {
                        id: `distributor-${n.distributor}`,
                        label: n.getStoreName(),
                        iconLeft: n.icon,
                        leadingAccessory: { type: "icon", icon: n.icon },
                        action: () => b(n.getStoreUrl(i), n.distributor, n.analyticsAction, m.SECONDARY),
                    },
                    n.distributor,
                ),
            ),
            s
        );
    });
    return (0, r.jsx)(u.Y, {
        targetElementRef: v,
        position: "bottom",
        onRequestOpen: () => {
            for (let { ctaConfig: e } of (R(!0), t))
                g({ analyticsLocations: i, distributor: e.distributor, gameId: n, level: m.SECONDARY });
        },
        onRequestClose: () => R(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", {
                onClick: (e) => e.stopPropagation(),
                style: { width: "fit-content", minWidth: v.current?.offsetWidth },
                children: (0, r.jsx)(c.W, {
                    "data-menu-migrated": !0,
                    navId: "play-on-distributor-menu",
                    onClose: t,
                    onSelect: void 0,
                    "aria-label": A.intl.string(A.t["3XhYOS"]),
                    children: (0, r.jsx)(l.rX, { children: D }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(o.$, {
                buttonRef: v,
                variant: I,
                size: "sm",
                icon: O ? d.t : _.a,
                iconPosition: "end",
                text: A.intl.string(A.t.nSHoxC),
                fullWidth: T,
                ...e,
                onClick: (t) => {
                    S && t.stopPropagation(), e.onClick?.(t);
                },
            }),
    });
}
