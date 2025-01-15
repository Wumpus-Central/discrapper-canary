r.d(n, {
    zU: function () {
        return i;
    }
});
var i,
    a,
    s = r(47120);
var o = r(442837),
    l = r(570140);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.MESSAGING = 0)] = 'MESSAGING'), (e[(e.OVERLAYS = 1)] = 'OVERLAYS'), (e[(e.PREMIUM = 2)] = 'PREMIUM'), (e[(e.REPORTING = 3)] = 'REPORTING'), (e[(e.APP_COLLECTIONS = 4)] = 'APP_COLLECTIONS');
})(i || (i = {}));
let c = {
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
    d = {};
function f(e) {
    d[e.toggle] = e.value;
}
class _ extends (a = o.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: d };
    }
    initialize(e) {
        for (var n in c) {
            var r, i;
            let a = null !== (i = null == e ? void 0 : null === (r = e.toggleStates) || void 0 === r ? void 0 : r[n]) && void 0 !== i && i;
            d[n] = a;
        }
    }
    get(e) {
        var n;
        return null !== (n = d[e]) && void 0 !== n && n;
    }
    set(e, n) {
        return (d[e] = n), n;
    }
    all() {
        return d;
    }
    allByCategory(e) {
        return Object.entries(c)
            .filter((n) => {
                let [r, i] = n;
                return i.category === e;
            })
            .map((e) => {
                let [n, r] = e;
                return [n, d[n], r];
            });
    }
}
u(_, 'displayName', 'DevToolsDevSettingsStore'), u(_, 'persistKey', 'DevToolsDevSettingsStore'), (n.ZP = new _(l.Z, { DEV_TOOLS_DEV_SETTING_SET: f }));
