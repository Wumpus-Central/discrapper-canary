r.d(n, {
    KM: function () {
        return d;
    },
    R2: function () {
        return f;
    },
    TG: function () {
        return _;
    },
    Zc: function () {
        return c;
    }
});
var i = r(442837),
    a = r(570140),
    s = r(238514),
    o = r(675478),
    l = r(581883),
    u = r(526761);
function c(e, n, r, a) {
    let s = () => {
            var i;
            return r(null === (i = l.Z.settings[e]) || void 0 === i ? void 0 : i[n]);
        },
        c = () => (0, i.e7)([l.Z], s);
    return {
        getSetting: s,
        updateSetting: h(s, (r) =>
            o.hW.updateAsync(
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
    let o = () => {
        var i;
        let a = s.Z.getState()[n];
        return null !== (i = null == a ? void 0 : a.settings[r]) && void 0 !== i ? i : e.getSetting();
    };
    return {
        getSetting: o,
        useSetting: () => {
            let a = e.useSetting(),
                o = (0, i.e7)([s.Z], () => {
                    let e = s.Z.getState()[n];
                    return null == e ? void 0 : e.settings[r];
                });
            return null != o ? o : a;
        },
        updateSetting: h(o, (i) =>
            s.Z.shouldSync(n)
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
    let s = () => {
        var n;
        return null !== (n = r()) && void 0 !== n ? n : e.getSetting();
    };
    return {
        getSetting: s,
        useSetting: () => {
            let n = e.useSetting(),
                r = i();
            return null != r ? r : n;
        },
        updateSetting: h(
            s,
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
function _(e) {
    let { baseSetting: n, getExperimentConfig: r, useExperimentConfig: i, eligibleDefault: a, ineligibleDefault: s } = e;
    return {
        getSetting: () => {
            let e = n.getSetting();
            if (null != e) return e;
            let i = r();
            return i.enabled ? a(i) : s();
        },
        useSetting: () => {
            let e = n.useSetting(),
                r = i();
            return null != e ? e : r.enabled ? a(r) : s();
        },
        updateSetting: n.updateSetting
    };
}
function h(e, n) {
    return function (r) {
        return 'function' == typeof r ? n(r(e())) : n(r);
    };
}
