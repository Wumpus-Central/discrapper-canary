n.d(t, {
    KM: () => f,
    R2: () => _,
    TG: () => p,
    Zc: () => d
});
var r = n(442837),
    i = n(570140),
    a = n(238514),
    o = n(675478),
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
    let a = () => {
            var r;
            return n(null == (r = s.Z.settings[e]) ? void 0 : r[t]);
        },
        c = () => (0, r.e7)([s.Z], a);
    return {
        getSetting: a,
        updateSetting: h(a, (n) =>
            o.hW.updateAsync(
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
    let o = () => {
        var r;
        let i = a.Z.getState()[t];
        return null != (r = null == i ? void 0 : i.settings[n]) ? r : e.getSetting();
    };
    return {
        getSetting: o,
        useSetting: () => {
            let i = e.useSetting(),
                o = (0, r.e7)([a.Z], () => {
                    let e = a.Z.getState()[t];
                    return null == e ? void 0 : e.settings[n];
                });
            return null != o ? o : i;
        },
        updateSetting: h(o, (r) =>
            a.Z.shouldSync(t)
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
    let a = () => {
        var t;
        return null != (t = n()) ? t : e.getSetting();
    };
    return {
        getSetting: a,
        useSetting: () => {
            let t = e.useSetting(),
                n = r();
            return null != n ? n : t;
        },
        updateSetting: h(
            a,
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
    let { baseSetting: t, isEligible: n, useIsEligible: r, eligibleDefault: i, ineligibleDefault: a, onUseDefault: o } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (null == o || o(), n() ? i() : a);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = r();
            return null != e ? e : (null == o || o(), n ? i() : a);
        },
        updateSetting: (e) => t.updateSetting(e)
    };
}
function h(e, t) {
    return function (n) {
        return 'function' == typeof n ? t(n(e())) : t(n);
    };
}
