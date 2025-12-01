n.d(t, {
    KM: () => u,
    R2: () => d,
    TG: () => f,
    Zc: () => c,
});
var r = n(442837),
    i = n(570140),
    a = n(238514),
    o = n(675478),
    s = n(581883),
    l = n(526761);
function c(e, t, n, i) {
    let { delay: a = l.fy.INFREQUENT_USER_ACTION, comparator: c = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        u = () => {
            var r;
            return n(null == (r = s.Z.settings[e]) ? void 0 : r[t]);
        },
        d = () => (0, r.e7)([s.Z], u, void 0, c);
    return {
        getSetting: u,
        updateSetting: p(u, (n) =>
            o.hW.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                a,
            ),
        ),
        useSetting: d,
    };
}
function u(e, t, n) {
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
        updateSetting: p(o, (r) =>
            a.Z.shouldSync(t)
                ? e.updateSetting(r)
                : (i.Z.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: r } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function d(e, t, n, r) {
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
        updateSetting: p(
            a,
            (n) => (
                i.Z.dispatch({
                    type: "USER_SETTINGS_OVERRIDE_CLEAR",
                    settings: [t],
                }),
                e.updateSetting(n)
            ),
        ),
    };
}
function f(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: r,
        eligibleDefault: i,
        ineligibleDefault: a,
        onUseDefault: o,
    } = e;
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
        updateSetting: (e) => t.updateSetting(e),
    };
}
function p(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
