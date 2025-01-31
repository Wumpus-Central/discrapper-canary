n.d(t, {
    ZP: () => f,
    zU: () => o
}),
    n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
var o = (function (e) {
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
    u = {};
function c(e) {
    u[e.toggle] = e.value;
}
class d extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: u };
    }
    initialize(e) {
        for (var t in l) {
            var n, i;
            let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
            u[t] = r;
        }
    }
    get(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (u[e] = t), t;
    }
    all() {
        return u;
    }
    allByCategory(e) {
        return Object.entries(l)
            .filter((t) => {
                let [n, i] = t;
                return i.category === e;
            })
            .map((e) => {
                let [t, n] = e;
                return [t, u[t], n];
            });
    }
}
s(d, 'displayName', 'DevToolsDevSettingsStore'), s(d, 'persistKey', 'DevToolsDevSettingsStore');
let f = new d(a.Z, { DEV_TOOLS_DEV_SETTING_SET: c });
