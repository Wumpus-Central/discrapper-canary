n.d(t, {
    O_: () => d,
    Q3: () => g,
    R6: () => p,
    TH: () => E,
    i9: () => _,
    k9: () => u,
    nm: () => v,
    o9: () => m,
    yl: () => h
});
var i = n(442837),
    r = n(433517),
    a = n(818083),
    s = n(353926),
    o = n(740492),
    l = n(594174);
let u = 'desktop_refresh_enabled',
    c = 'true' === r.K.get(u);
function d(e) {
    return s.Z.hasLoadedExperiments ? _(e) : c;
}
let f = (0, a.B)({
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
function _(e) {
    let { enabled: t, disabledByDefault: n } = f.getCurrentConfig({ location: e }),
        i = o.ZP.isVisualRefreshDisabled(n);
    return !!t && !i;
}
function p(e) {
    let t = g(e),
        { newChatInput: n } = f.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t && n;
}
function h(e, t) {
    return f.subscribe({ location: e }, t);
}
function m(e) {
    return f.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function g(e) {
    let { enabled: t, disabledByDefault: n } = f.useExperiment({ location: e }, { autoTrackExposure: !0 }),
        r = (0, i.e7)([o.ZP], () => o.ZP.isVisualRefreshDisabled(n));
    return !!t && !r;
}
function E(e) {
    let t = g(e),
        n = f.useExperiment({ location: e }, { autoTrackExposure: !0 }).enableCollapsibleSidebar;
    return !!t && n;
}
function v(e) {
    let { canOptOut: t } = f.getCurrentConfig({ location: e }),
        n = (0, i.e7)([l.default], () => {
            var e, t;
            return null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : null === (e = t.isStaff) || void 0 === e ? void 0 : e.call(t);
        });
    return !!(t || n);
}
