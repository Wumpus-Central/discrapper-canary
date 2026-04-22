"use strict";
n.d(t, { Mt: () => d, Tg: () => c, c$: () => u, c6: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(284016),
    a = n(594061),
    o = n(617617),
    l = n(355097);
function u(e, t, n, i) {
    let { delay: s = l.Sb.INFREQUENT_USER_ACTION, comparator: u = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        d = () => n(o.A.settings[e]?.[t]);
    return {
        getSetting: d,
        updateSetting: f(d, (n) =>
            a.wc.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                s,
            ),
        ),
        useSetting: () => (0, r.bG)([o.A], d, void 0, u),
    };
}
function d(e, t, n) {
    let a = () => {
        let r = s.A.getState()[t];
        return r?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: a,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, r.bG)([s.A], () => {
                    let e = s.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: f(a, (r) =>
            s.A.shouldSync(t)
                ? e.updateSetting(r)
                : (i.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: r } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function c(e, t, n, r) {
    let s = () => n() ?? e.getSetting();
    return {
        getSetting: s,
        useSetting: () => {
            let t = e.useSetting();
            return r() ?? t;
        },
        updateSetting: f(
            s,
            (n) => (i.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function _(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: r,
        eligibleDefault: i,
        ineligibleDefault: s,
        onUseDefault: a,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (a?.(), n() ? i() : s);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = r();
            return null != e ? e : (a?.(), n ? i() : s);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function f(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
