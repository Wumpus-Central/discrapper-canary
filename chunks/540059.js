n.d(t, {
    Q3: () => f,
    R6: () => u,
    TH: () => _,
    i9: () => l,
    nm: () => p,
    o9: () => d,
    yl: () => c
});
var i = n(442837),
    r = n(818083),
    a = n(740492),
    s = n(594174);
let o = (0, r.B)({
    id: '2024-05_desktop_visual_refresh',
    label: 'Desktop Visual Refresh',
    kind: 'user',
    defaultConfig: {
        enabled: !1,
        enableCollapsibleSidebar: !1,
        newChatInput: !1,
        disabledByDefault: !0,
        canOptOut: !1
    },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: {
                enabled: !1,
                enableCollapsibleSidebar: !1,
                newChatInput: !1,
                disabledByDefault: !0,
                canOptOut: !1
            }
        },
        {
            id: 1,
            label: 'Refresh with New Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !0,
                disabledByDefault: !1,
                canOptOut: !1
            }
        },
        {
            id: 2,
            label: 'Refresh with New Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !0,
                disabledByDefault: !1,
                canOptOut: !1
            }
        },
        {
            id: 3,
            label: 'Refresh with Legacy Chat Input',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !1,
                disabledByDefault: !1,
                canOptOut: !1
            }
        },
        {
            id: 4,
            label: 'Refresh with Legacy Chat Input, Collapsible Sidebar',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !0,
                newChatInput: !1,
                disabledByDefault: !1,
                canOptOut: !1
            }
        },
        {
            id: 5,
            label: 'External Testers',
            config: {
                enabled: !0,
                enableCollapsibleSidebar: !1,
                newChatInput: !0,
                disabledByDefault: !0,
                canOptOut: !0
            }
        }
    ]
});
function l(e) {
    let { enabled: t, disabledByDefault: n } = o.getCurrentConfig({ location: e }),
        i = a.ZP.isVisualRefreshDisabled(n);
    return !!t && !i;
}
function u(e) {
    let t = f(e),
        { newChatInput: n } = o.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t && n;
}
function c(e, t) {
    return o.subscribe({ location: e }, t);
}
function d(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function f(e) {
    let { enabled: t, disabledByDefault: n } = o.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        r = (0, i.e7)([a.ZP], () => a.ZP.isVisualRefreshDisabled(n));
    return !!t && !r;
}
function _(e) {
    let t = f(e),
        n = o.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!t && n;
}
function p(e) {
    let { canOptOut: t } = o.getCurrentConfig({ location: e }),
        n = (0, i.e7)([s.default], () => {
            var e, t;
            return null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : null === (e = t.isStaff) || void 0 === e ? void 0 : e.call(t);
        });
    return !!(t || n);
}
