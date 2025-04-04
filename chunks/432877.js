n.d(t, {
    ZP: () => f,
    zU: () => s
}),
    n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var s = (function (e) {
    return (e[(e.MESSAGING = 0)] = 'MESSAGING'), (e[(e.OVERLAYS = 1)] = 'OVERLAYS'), (e[(e.PREMIUM = 2)] = 'PREMIUM'), (e[(e.REPORTING = 3)] = 'REPORTING'), (e[(e.APP_COLLECTIONS = 4)] = 'APP_COLLECTIONS'), e;
})({});
let l = {
        visual_effect_view_overrides: {
            label: 'Blur view overrides for designers to test with',
            category: 1
        },
        obscure_blur_effect_enabled: {
            label: 'Force obscure blur effect on for message media and embeds',
            category: 1
        },
        explicit_media_redaction_ignore_pending_scan: {
            label: 'Ignore pending scan on explicit media',
            category: 1
        },
        upload_fail_50: {
            label: 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay',
            category: 0
        },
        send_fail_100: {
            label: 'Send: Fail with 500 status',
            category: 0
        },
        premium_roadblocks: {
            label: 'Enable all new premium roadblocks',
            category: 2
        },
        iar_testing: {
            label: 'Enable staff only test iar menu options',
            category: 3
        },
        iar_skip_api_report_submit: {
            label: 'Enable to skip calling the API to skip submitting actual IAR reports',
            category: 3
        },
        only_show_preview_app_collections: {
            label: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
            category: 4
        },
        disable_app_collections_cache: {
            label: 'Disable application collections cache so that you can see updates to collections immediately.',
            category: 4
        }
    },
    c = {};
function u(e) {
    c[e.toggle] = e.value;
}
class d extends (r = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: c };
    }
    initialize(e) {
        for (var t in l) {
            var n, r;
            let i = null != (r = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && r;
            c[t] = i;
        }
    }
    get(e) {
        var t;
        return null != (t = c[e]) && t;
    }
    set(e, t) {
        return (c[e] = t), t;
    }
    all() {
        return c;
    }
    allByCategory(e) {
        return Object.entries(l)
            .filter((t) => {
                let [n, r] = t;
                return r.category === e;
            })
            .map((e) => {
                let [t, n] = e;
                return [t, c[t], n];
            });
    }
}
a(d, 'displayName', 'DevToolsDevSettingsStore'), a(d, 'persistKey', 'DevToolsDevSettingsStore');
let f = new d(o.Z, { DEV_TOOLS_DEV_SETTING_SET: u });
