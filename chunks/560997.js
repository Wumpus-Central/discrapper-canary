n.d(t, {
    KM: () => f,
    R2: () => _,
    TG: () => p,
    Zc: () => d
});
var r = n(442837),
    i = n(570140),
    o = n(238514),
    a = n(675478),
    s = n(581883),
    l = n(526761);
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
function u(e, t) {
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
function d(e, t, n, i) {
    let o = () => {
            var r;
            return n(null == (r = s.Z.settings[e]) ? void 0 : r[t]);
        },
        c = () => (0, r.e7)([s.Z], o);
    return {
        getSetting: o,
        updateSetting: h(o, (n) =>
            a.hW.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                l.fy.INFREQUENT_USER_ACTION
            )
        ),
        useSetting: c
    };
}
function f(e, t, n) {
    let a = () => {
        var r;
        let i = o.Z.getState()[t];
        return null != (r = null == i ? void 0 : i.settings[n]) ? r : e.getSetting();
    };
    return {
        getSetting: a,
        useSetting: () => {
            let i = e.useSetting(),
                a = (0, r.e7)([o.Z], () => {
                    let e = o.Z.getState()[t];
                    return null == e ? void 0 : e.settings[n];
                });
            return null != a ? a : i;
        },
        updateSetting: h(a, (r) =>
            o.Z.shouldSync(t)
                ? e.updateSetting(r)
                : (i.Z.dispatch({
                      type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
                      changes: { [t]: { settings: { [n]: r } } }
                  }),
                  Promise.resolve())
        )
    };
}
function _(e, t, n, r) {
    let o = () => {
        var t;
        return null != (t = n()) ? t : e.getSetting();
    };
    return {
        getSetting: o,
        useSetting: () => {
            let t = e.useSetting(),
                n = r();
            return null != n ? n : t;
        },
        updateSetting: h(
            o,
            (n) => (
                i.Z.dispatch({
                    type: 'USER_SETTINGS_OVERRIDE_CLEAR',
                    settings: [t]
                }),
                e.updateSetting(n)
            )
        )
    };
}
function p(e) {
    let { baseSetting: t, isEligible: n, useIsEligible: r, eligibleDefault: i, ineligibleDefault: o, onUseDefault: a } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (null == a || a(), n() ? i() : o);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = r();
            return null != e ? e : (null == a || a(), n ? i() : o);
        },
        updateSetting: (e) => t.updateSetting(e)
    };
}
function h(e, t) {
    return function (n) {
        return 'function' == typeof n ? t(n(e())) : t(n);
    };
}
