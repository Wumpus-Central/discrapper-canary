n.d(t, { Z: () => E });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {};
function h(e) {
    let { changes: t } = e;
    for (let e in t) {
        var n;
        let r = e,
            { shouldSync: i, settings: o } = t[r];
        if (!0 === i) {
            delete p[r];
            continue;
        }
        if (
            (!1 === i &&
                (p[r] = {
                    shouldSync: i,
                    settings: {}
                }),
            (null == (n = p[r]) ? void 0 : n.shouldSync) === !1)
        )
            for (let e in o) p[r].settings[e] = o[e];
    }
}
function m() {
    p = {};
}
class g extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        p = null != e ? e : {};
    }
    getState() {
        return p;
    }
    shouldSync(e) {
        var t;
        return (null == (t = p[e]) ? void 0 : t.shouldSync) !== !1;
    }
    getTextSettings() {
        var e;
        return null == (e = p.text) ? void 0 : e.settings;
    }
    getAppearanceSettings() {
        var e;
        return null == (e = p.appearance) ? void 0 : e.settings;
    }
}
u(g, 'displayName', 'SelectivelySyncedUserSettingsStore'),
    u(g, 'persistKey', 'SelectivelySyncedUserSettingsStore'),
    u(g, 'migrations', [
        () => {
            var e, t;
            let n = null != (e = s.K.get('UserSettingsSync')) ? e : {},
                r = null != (t = s.K.get('UserSettingsStore')) ? t : {};
            s.K.remove('UserSettingsSync');
            let i = {};
            return (
                !1 === n[c.oAB.TEXT] &&
                    (i.text = {
                        shouldSync: !1,
                        settings: o().pick(r, ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay'])
                    }),
                !1 === n[c.oAB.APPEARANCE] &&
                    (i.appearance = {
                        shouldSync: !1,
                        settings: o().pick(r, ['theme', 'clientThemeSettings', 'developerMode'])
                    }),
                i
            );
        },
        (e) => {
            var t, n;
            if ((null == e || null == (n = e.appearance) || null == (t = n.settings) ? void 0 : t.theme) === 'amoled') return _(d({}, e), { appearance: _(d({}, e.appearance), { settings: _(d({}, e.appearance.settings), { theme: 'midnight' }) }) });
        }
    ]);
let E = new g(l.Z, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: h,
    LOGOUT: m
});
