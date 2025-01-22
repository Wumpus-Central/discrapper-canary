r.d(n, {
    Q3: function () {
        return f;
    },
    R6: function () {
        return u;
    },
    TH: function () {
        return p;
    },
    i9: function () {
        return l;
    },
    iT: function () {
        return c;
    },
    o9: function () {
        return d;
    }
});
var i = r(442837),
    a = r(818083),
    o = r(740492);
let s = (0, a.B)({
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
function l(e) {
    let n = s.getCurrentConfig({ location: e }).enabled,
        r = o.ZP.disableVisualRefresh;
    return !!n && !r;
}
function u(e) {
    return f(e) && s.getCurrentConfig({ location: e }).newChatInput;
}
function c(e) {
    return s.getCurrentConfig({ location: e }).disabledByDefault;
}
function d(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function f(e) {
    let n = d(e),
        r = (0, i.e7)([o.ZP], () => o.ZP.disableVisualRefresh);
    return !!n && !r;
}
function p(e) {
    let n = f(e),
        r = s.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!n && r;
}
