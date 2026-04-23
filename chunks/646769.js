"use strict";
n.d(t, { Mt: () => _, Tg: () => u, c$: () => d, c6: () => c });
var i = n(17928),
    r = n(228366),
    s = n(284016),
    a = n(594061),
    o = n(617617),
    l = n(355097);
function d(e, t, n, r) {
    let { delay: s = l.Sb.INFREQUENT_USER_ACTION, comparator: d = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        _ = () => n(o.A.settings[e]?.[t]);
    return {
        getSetting: _,
        updateSetting: E(_, (n) =>
            a.wc.updateAsync(
                e,
                (e) => {
                    e[t] = r(n, e[t]);
                },
                s,
            ),
        ),
        useSetting: () => (0, i.bG)([o.A], _, void 0, d),
    };
}
function _(e, t, n) {
    let a = () => {
        let i = s.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: a,
        useSetting: () => {
            let r = e.useSetting();
            return (
                (0, i.bG)([s.A], () => {
                    let e = s.A.getState()[t];
                    return e?.settings[n];
                }) ?? r
            );
        },
        updateSetting: E(a, (i) =>
            s.A.shouldSync(t)
                ? e.updateSetting(i)
                : (r.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: i } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function u(e, t, n, i) {
    let s = () => n() ?? e.getSetting();
    return {
        getSetting: s,
        useSetting: () => {
            let t = e.useSetting();
            return i() ?? t;
        },
        updateSetting: E(
            s,
            (n) => (r.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function c(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: i,
        eligibleDefault: r,
        ineligibleDefault: s,
        onUseDefault: a,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (a?.(), n() ? r() : s);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = i();
            return null != e ? e : (a?.(), n ? r() : s);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function E(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
