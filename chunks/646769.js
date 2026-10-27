n.d(t, { Mt: () => c, Tg: () => u, c$: () => d, c6: () => _ });
var i = n(17928),
    r = n(73153),
    a = n(284016),
    s = n(594061),
    l = n(617617),
    o = n(355097);
function d(e, t, n, r) {
    let { delay: a = o.Sb.INFREQUENT_USER_ACTION, comparator: d = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        c = () => n(l.A.settings[e]?.[t]);
    return {
        getSetting: c,
        updateSetting: E(c, (n) =>
            s.wc.updateAsync(
                e,
                (e) => {
                    e[t] = r(n, e[t]);
                },
                a,
            ),
        ),
        useSetting: () => (0, i.bG)([l.A], c, void 0, d),
    };
}
function c(e, t, n) {
    let s = () => {
        let i = a.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let r = e.useSetting();
            return (
                (0, i.bG)([a.A], () => {
                    let e = a.A.getState()[t];
                    return e?.settings[n];
                }) ?? r
            );
        },
        updateSetting: E(s, function (i) {
            return a.A.shouldSync(t)
                ? e.updateSetting(i)
                : (r.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: i } } },
                  }),
                  Promise.resolve());
        }),
    };
}
function u(e, t, n, i) {
    function a() {
        return n() ?? e.getSetting();
    }
    return {
        getSetting: a,
        useSetting: () => {
            let t = e.useSetting();
            return i() ?? t;
        },
        updateSetting: E(
            a,
            (n) => (r.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function _(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: i,
        eligibleDefault: r,
        ineligibleDefault: a,
        onUseDefault: s,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (s?.(), n() ? r() : a);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = i();
            return null != e ? e : (s?.(), n ? r() : a);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function E(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
