n.d(t, {
    PR: () => c,
    Z0: () => u,
    ZP: () => s,
    e1: () => l
});
var r = n(818083),
    i = n(32300),
    o = n(987338);
let a = (0, r.B)({
        kind: 'user',
        id: '2024-11_activity_popout_window',
        label: 'Activity Popout Window Experiment',
        defaultConfig: {
            enabled: !1,
            enableOverlayInActivityPopoutWindow: !1,
            enableGoLiveFromActivityCard: !1
        },
        commonTriggerPoint: o.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enable activity popout window',
                config: {
                    enabled: !0,
                    enableOverlayInActivityPopoutWindow: !1,
                    enableGoLiveFromActivityCard: !1
                }
            },
            {
                id: 2,
                label: 'Enable activity popout window with overlay',
                config: {
                    enabled: !0,
                    enableOverlayInActivityPopoutWindow: !0,
                    enableGoLiveFromActivityCard: !1
                }
            },
            {
                id: 3,
                label: 'Enable activity popout window with overlay and GoLive from activity card',
                config: {
                    enabled: !0,
                    enableOverlayInActivityPopoutWindow: !0,
                    enableGoLiveFromActivityCard: !0
                }
            }
        ]
    }),
    s = a;
function l() {
    let e = (0, i.Rb)('ActivityPopout').overlayV3UI;
    return a.getCurrentConfig({ location: 'getIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function c() {
    let e = (0, i.o4)('ActivityPopout').overlayV3UI;
    return a.useExperiment({ location: 'useIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function u() {
    return a.useExperiment({ location: 'useCanGoLiveActivityFromActivityCard' }).enableGoLiveFromActivityCard;
}
