n.d(t, {
    Q3: () => f,
    R6: () => l,
    TH: () => _,
    i9: () => o,
    iT: () => u,
    o9: () => d,
    yl: () => c
});
var i = n(442837),
    r = n(818083),
    a = n(740492);
let s = (0, r.B)({
    id: '2024-05_desktop_visual_refresh',
    label: 'Desktop Visual Refresh',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        enableCollapsibleSidebar: !1,
        newChatInput: !1,
        disabledByDefault: !0
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                enabled: !1,
                enableCollapsibleSidebar: !1,
                newChatInput: !1,
                disabledByDefault: !0
            }
        },
        {
            id: 1,
            label: 'Refresh with New Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !0,
                disabledByDefault: !1
            }
        },
        {
            id: 2,
            label: 'Refresh with New Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !0,
                disabledByDefault: !1
            }
        },
        {
            id: 3,
            label: 'Refresh with Legacy Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !1,
                disabledByDefault: !1
            }
        },
        {
            id: 4,
            label: 'Refresh with Legacy Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !1,
                disabledByDefault: !1
            }
        },
        {
            id: 5,
            label: 'External Testers',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !0,
                disabledByDefault: !0
            }
        }
    ]
});
function o(e) {
    let t = s.getCurrentConfig({ location: e }).enabled,
        n = a.ZP.disableVisualRefresh;
    return !!t && !n;
}
function l(e) {
    return f(e) && s.getCurrentConfig({ location: e }).newChatInput;
}
function u(e) {
    return s.getCurrentConfig({ location: e }).disabledByDefault;
}
function c(e, t) {
    return s.subscribe({ location: e }, t);
}
function d(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function f(e) {
    let t = d(e),
        n = (0, i.e7)([a.ZP], () => a.ZP.disableVisualRefresh);
    return !!t && !n;
}
function _(e) {
    let t = f(e),
        n = s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!t && n;
}
