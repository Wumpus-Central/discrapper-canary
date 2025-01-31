n.d(t, {
    KM: () => c,
    R2: () => d,
    TG: () => f,
    Zc: () => u
});
var i = n(442837),
    r = n(570140),
    a = n(238514),
    s = n(675478),
    o = n(581883),
    l = n(526761);
function u(e, t, n, r) {
    let a = () => {
            var i;
            return n(null === (i = o.Z.settings[e]) || void 0 === i ? void 0 : i[t]);
        },
        u = () => (0, i.e7)([o.Z], a);
    return {
        getSetting: a,
        updateSetting: _(a, (n) =>
            s.hW.updateAsync(
                e,
                (e) => {
                    e[t] = r(n, e[t]);
                },
                l.fy.INFREQUENT_USER_ACTION
            )
        ),
        useSetting: u
    };
}
function c(e, t, n) {
    let s = () => {
        var i;
        let r = a.Z.getState()[t];
        return null !== (i = null == r ? void 0 : r.settings[n]) && void 0 !== i ? i : e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let r = e.useSetting(),
                s = (0, i.e7)([a.Z], () => {
                    let e = a.Z.getState()[t];
                    return null == e ? void 0 : e.settings[n];
                });
            return null != s ? s : r;
        },
        updateSetting: _(s, (i) =>
            a.Z.shouldSync(t)
                ? e.updateSetting(i)
                : (r.Z.dispatch({
                      type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
                      changes: { [t]: { settings: { [n]: i } } }
                  }),
                  Promise.resolve())
        )
    };
}
function d(e, t, n, i) {
    let a = () => {
        var t;
        return null !== (t = n()) && void 0 !== t ? t : e.getSetting();
    };
    return {
        getSetting: a,
        useSetting: () => {
            let t = e.useSetting(),
                n = i();
            return null != n ? n : t;
        },
        updateSetting: _(
            a,
            (n) => (
                r.Z.dispatch({
                    type: 'USER_SETTINGS_OVERRIDE_CLEAR',
                    settings: [t]
                }),
                e.updateSetting(n)
            )
        )
    };
}
function f(e) {
    let { baseSetting: t, isEligible: n, useIsEligible: i, eligibleDefault: r, ineligibleDefault: a } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : n() ? r() : a;
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = i();
            return null != e ? e : n ? r() : a;
        },
        updateSetting: (e) => t.updateSetting(e)
    };
}
function _(e, t) {
    return function (n) {
        return 'function' == typeof n ? t(n(e())) : t(n);
    };
}
