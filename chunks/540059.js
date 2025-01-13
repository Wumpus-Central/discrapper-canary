r.d(n, {
    Q3: function () {
        return d;
    },
    R6: function () {
        return u;
    },
    TH: function () {
        return f;
    },
    i9: function () {
        return l;
    },
    o9: function () {
        return c;
    }
});
var i = r(442837),
    a = r(818083),
    s = r(740492);
let o = (0, a.B)({
    id: '2024-05_desktop_visual_refresh',
    label: 'Desktop Visual Refresh',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        enableCollapsibleSidebar: !1,
        newChatInput: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                enabled: !1,
                enableCollapsibleSidebar: !1,
                newChatInput: !1
            }
        },
        {
            id: 1,
            label: 'Refresh with New Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !0
            }
        },
        {
            id: 2,
            label: 'Refresh with New Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !0
            }
        },
        {
            id: 3,
            label: 'Refresh with Legacy Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !1
            }
        },
        {
            id: 4,
            label: 'Refresh with Legacy Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !1
            }
        }
    ]
});
function l(e) {
    let n = o.getCurrentConfig({ location: e }).enabled,
        r = s.ZP.disableVisualRefresh;
    return !!n && !r;
}
function u(e) {
    return o.getCurrentConfig({ location: e }).newChatInput;
}
function c(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function d(e) {
    let n = c(e),
        r = (0, i.e7)([s.ZP], () => s.ZP.disableVisualRefresh);
    return !!n && !r;
}
function f(e) {
    let n = d(e),
        r = o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!n && r;
}
