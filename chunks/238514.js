var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(981631);
function d(e, n, r) {
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
let f = {};
function p(e) {
    let { changes: n } = e;
    for (let e in n) {
        var r;
        let i = e,
            { shouldSync: a, settings: o } = n[i];
        if (!0 === a) {
            delete f[i];
            continue;
        }
        !1 === a &&
            (f[i] = {
                shouldSync: a,
                settings: {}
            });
        if ((null === (r = f[i]) || void 0 === r ? void 0 : r.shouldSync) === !1) for (let e in o) f[i].settings[e] = o[e];
    }
}
function h() {
    f = {};
}
class _ extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        f = null != e ? e : {};
    }
    getState() {
        return f;
    }
    shouldSync(e) {
        var n;
        return (null === (n = f[e]) || void 0 === n ? void 0 : n.shouldSync) !== !1;
    }
    getTextSettings() {
        var e;
        return null === (e = f.text) || void 0 === e ? void 0 : e.settings;
    }
    getAppearanceSettings() {
        var e;
        return null === (e = f.appearance) || void 0 === e ? void 0 : e.settings;
    }
}
d(_, 'displayName', 'SelectivelySyncedUserSettingsStore'),
    d(_, 'persistKey', 'SelectivelySyncedUserSettingsStore'),
    d(_, 'migrations', [
        () => {
            var e, n;
            let r = null !== (e = l.K.get('UserSettingsSync')) && void 0 !== e ? e : {},
                i = null !== (n = l.K.get('UserSettingsStore')) && void 0 !== n ? n : {};
            l.K.remove('UserSettingsSync');
            let a = {};
            return (
                !1 === r[c.oAB.TEXT] &&
                    (a.text = {
                        shouldSync: !1,
                        settings: o().pick(i, ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay'])
                    }),
                !1 === r[c.oAB.APPEARANCE] &&
                    (a.appearance = {
                        shouldSync: !1,
                        settings: o().pick(i, ['theme', 'clientThemeSettings', 'developerMode'])
                    }),
                a
            );
        },
        (e) => {
            var n, r;
            if ((null == e ? void 0 : null === (r = e.appearance) || void 0 === r ? void 0 : null === (n = r.settings) || void 0 === n ? void 0 : n.theme) === 'amoled')
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
    ]),
    (n.Z = new _(u.Z, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: p,
        LOGOUT: h
    }));
