"use strict";
n.d(t, { Mt: () => c, Tg: () => d, c$: () => u, c6: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(284016),
    s = n(594061),
    o = n(617617),
    l = n(355097);
function u(e, t, n, i) {
    let { delay: a = l.Sb.INFREQUENT_USER_ACTION, comparator: u = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = () => n(o.A.settings[e]?.[t]),
        d = () => (0, r.bG)([o.A], c, void 0, u);
    return {
        getSetting: c,
        updateSetting: f(c, (n) =>
            s.wc.updateAsync(
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
function c(e, t, n) {
    let s = () => {
        let r = a.A.getState()[t];
        return r?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, r.bG)([a.A], () => {
                    let e = a.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: f(s, (r) =>
            a.A.shouldSync(t)
                ? e.updateSetting(r)
                : (i.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: r } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function d(e, t, n, r) {
    let a = () => n() ?? e.getSetting();
    return {
        getSetting: a,
        useSetting: () => {
            let t = e.useSetting();
            return r() ?? t;
        },
        updateSetting: f(
            a,
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
        ineligibleDefault: a,
        onUseDefault: s,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (s?.(), n() ? i() : a);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = r();
            return null != e ? e : (s?.(), n ? i() : a);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function f(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
