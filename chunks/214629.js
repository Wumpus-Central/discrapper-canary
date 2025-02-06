n.d(t, {
    PR: () => u,
    Z0: () => c,
    ZP: () => o,
    e1: () => l
});
var i = n(818083),
    r = n(32300),
    a = n(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2024-11_activity_popout_window',
        label: 'Activity Popout Window Experiment',
        defaultConfig: {
            enabled: !1,
            enableOverlayInActivityPopoutWindow: !1,
            enableGoLiveFromActivityCard: !1
        },
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
    o = s;
function l() {
    let e = (0, r.Rb)('ActivityPopout').overlayV3UI;
    return s.getCurrentConfig({ location: 'getIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function u() {
    let e = (0, r.o4)('ActivityPopout').overlayV3UI;
    return s.useExperiment({ location: 'useIsActivityPopoutOverlayEnabled' }).enableOverlayInActivityPopoutWindow && e;
}
function c() {
    return s.useExperiment({ location: 'useCanGoLiveActivityFromActivityCard' }).enableGoLiveFromActivityCard;
}
