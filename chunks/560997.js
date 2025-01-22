r.d(n, {
    KM: function () {
        return d;
    },
    R2: function () {
        return f;
    },
    TG: function () {
        return p;
    },
    Zc: function () {
        return c;
    }
});
var i = r(442837),
    a = r(570140),
    o = r(238514),
    s = r(675478),
    l = r(581883),
    u = r(526761);
function c(e, n, r, a) {
    let o = () => {
            var i;
            return r(null === (i = l.Z.settings[e]) || void 0 === i ? void 0 : i[n]);
        },
        c = () => (0, i.e7)([l.Z], o);
    return {
        getSetting: o,
        updateSetting: h(o, (r) =>
            s.hW.updateAsync(
                e,
                (e) => {
                    e[n] = a(r, e[n]);
                },
                u.fy.INFREQUENT_USER_ACTION
            )
        ),
        useSetting: c
    };
}
function d(e, n, r) {
    let s = () => {
        var i;
        let a = o.Z.getState()[n];
        return null !== (i = null == a ? void 0 : a.settings[r]) && void 0 !== i ? i : e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let a = e.useSetting(),
                s = (0, i.e7)([o.Z], () => {
                    let e = o.Z.getState()[n];
                    return null == e ? void 0 : e.settings[r];
                });
            return null != s ? s : a;
        },
        updateSetting: h(s, (i) =>
            o.Z.shouldSync(n)
                ? e.updateSetting(i)
                : (a.Z.dispatch({
                      type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
                      changes: { [n]: { settings: { [r]: i } } }
                  }),
                  Promise.resolve())
        )
    };
}
function f(e, n, r, i) {
    let o = () => {
        var n;
        return null !== (n = r()) && void 0 !== n ? n : e.getSetting();
    };
    return {
        getSetting: o,
        useSetting: () => {
            let n = e.useSetting(),
                r = i();
            return null != r ? r : n;
        },
        updateSetting: h(
            o,
            (r) => (
                a.Z.dispatch({
                    type: 'USER_SETTINGS_OVERRIDE_CLEAR',
                    settings: [n]
                }),
                e.updateSetting(r)
            )
        )
    };
}
function p(e) {
    let { baseSetting: n, isEligible: r, useIsEligible: i, eligibleDefault: a, ineligibleDefault: o } = e;
    return {
        getSetting: () => {
            let e = n.getSetting();
            return null != e ? e : r() ? a() : o;
        },
        useSetting: () => {
            let e = n.useSetting(),
                r = i();
            return null != e ? e : r ? a() : o;
        },
        updateSetting: (e) => n.updateSetting(e)
    };
}
function h(e, n) {
    return function (r) {
        return 'function' == typeof r ? n(r(e())) : n(r);
    };
}
