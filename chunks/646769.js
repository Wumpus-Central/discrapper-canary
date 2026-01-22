n.d(t, {
    Mt: () => u,
    Tg: () => d,
    c$: () => c,
    c6: () => f,
});
var r = n(311907),
    i = n(73153),
    a = n(284016),
    s = n(594061),
    o = n(617617),
    l = n(355097);

function c(e, t, n, i) {
    let { delay: a = l.Sb.INFREQUENT_USER_ACTION, comparator: c = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        u = () => {
            var r;
            return n(null == (r = o.A.settings[e]) ? void 0 : r[t]);
        },
        d = () => (0, r.bG)([o.A], u, void 0, c);
    return {
        getSetting: u,
        updateSetting: p(u, (n) =>
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

function u(e, t, n) {
    let s = () => {
        var r;
        let i = a.A.getState()[t];
        return null != (r = null == i ? void 0 : i.settings[n]) ? r : e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let i = e.useSetting(),
                s = (0, r.bG)([a.A], () => {
                    let e = a.A.getState()[t];
                    return null == e ? void 0 : e.settings[n];
                });
            return null != s ? s : i;
        },
        updateSetting: p(s, (r) =>
            a.A.shouldSync(t)
                ? e.updateSetting(r)
                : (i.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: {
                          [t]: {
                              settings: {
                                  [n]: r,
                              },
                          },
                      },
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
                i.h.dispatch({
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
        onUseDefault: s,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (null == s || s(), n() ? i() : a);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = r();
            return null != e ? e : (null == s || s(), n ? i() : a);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}

function p(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
