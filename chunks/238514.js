n.d(t, { Z: () => h });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(981631);
function c(e, t, n) {
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
let d = {};
function f(e) {
    let { changes: t } = e;
    for (let e in t) {
        var n;
        let i = e,
            { shouldSync: r, settings: a } = t[i];
        if (!0 === r) {
            delete d[i];
            continue;
        }
        if (
            (!1 === r &&
                (d[i] = {
                    shouldSync: r,
                    settings: {}
                }),
            (null === (n = d[i]) || void 0 === n ? void 0 : n.shouldSync) === !1)
        )
            for (let e in a) d[i].settings[e] = a[e];
    }
}
function _() {
    d = {};
}
class p extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        d = null != e ? e : {};
    }
    getState() {
        return d;
    }
    shouldSync(e) {
        var t;
        return (null === (t = d[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1;
    }
    getTextSettings() {
        var e;
        return null === (e = d.text) || void 0 === e ? void 0 : e.settings;
    }
    getAppearanceSettings() {
        var e;
        return null === (e = d.appearance) || void 0 === e ? void 0 : e.settings;
    }
}
c(p, 'displayName', 'SelectivelySyncedUserSettingsStore'),
    c(p, 'persistKey', 'SelectivelySyncedUserSettingsStore'),
    c(p, 'migrations', [
        () => {
            var e, t;
            let n = null !== (e = o.K.get('UserSettingsSync')) && void 0 !== e ? e : {},
                i = null !== (t = o.K.get('UserSettingsStore')) && void 0 !== t ? t : {};
            o.K.remove('UserSettingsSync');
            let r = {};
            return (
                !1 === n[u.oAB.TEXT] &&
                    (r.text = {
                        shouldSync: !1,
                        settings: a().pick(i, ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay'])
                    }),
                !1 === n[u.oAB.APPEARANCE] &&
                    (r.appearance = {
                        shouldSync: !1,
                        settings: a().pick(i, ['theme', 'clientThemeSettings', 'developerMode'])
                    }),
                r
            );
        },
        (e) => {
            var t, n;
            if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === 'amoled')
                return {
                    ...e,
                    appearance: {
                        ...e.appearance,
                        settings: {
                            ...e.appearance.settings,
                            theme: 'midnight'
                        }
                    }
                };
        }
    ]);
let h = new p(l.Z, {
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: f,
    LOGOUT: _
});
