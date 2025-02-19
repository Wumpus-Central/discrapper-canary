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
function p(e, t) {
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
let _ = {};
function h(e) {
    let { changes: t } = e;
    for (let e in t) {
        var n;
        let r = e,
            { shouldSync: i, settings: o } = t[r];
        if (!0 === i) {
            delete _[r];
            continue;
        }
        if (
            (!1 === i &&
                (_[r] = {
                    shouldSync: i,
                    settings: {}
                }),
            (null === (n = _[r]) || void 0 === n ? void 0 : n.shouldSync) === !1)
        )
            for (let e in o) _[r].settings[e] = o[e];
    }
}
function m() {
    _ = {};
}
class g extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        _ = null != e ? e : {};
    }
    getState() {
        return _;
    }
    shouldSync(e) {
        var t;
        return (null === (t = _[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1;
    }
    getTextSettings() {
        var e;
        return null === (e = _.text) || void 0 === e ? void 0 : e.settings;
    }
    getAppearanceSettings() {
        var e;
        return null === (e = _.appearance) || void 0 === e ? void 0 : e.settings;
    }
}
u(g, 'displayName', 'SelectivelySyncedUserSettingsStore'),
    u(g, 'persistKey', 'SelectivelySyncedUserSettingsStore'),
    u(g, 'migrations', [
        () => {
            var e, t;
            let n = null !== (e = s.K.get('UserSettingsSync')) && void 0 !== e ? e : {},
                r = null !== (t = s.K.get('UserSettingsStore')) && void 0 !== t ? t : {};
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
            if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === 'amoled') return p(d({}, e), { appearance: p(d({}, e.appearance), { settings: p(d({}, e.appearance.settings), { theme: 'midnight' }) }) });
        }
    ]);
let E = new g(l.Z, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: h,
    LOGOUT: m
});
