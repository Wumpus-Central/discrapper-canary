n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(481060),
    o = n(515753),
    s = n(150560),
    c = n(981631),
    u = n(388032);
let d = function (e) {
    let { selected: t } = e,
        n = (0, l.JA)("quests"),
        d = i.useCallback(() => {
            s.Z.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
        }, []);
    return (0, r.jsx)(
        o.Qj,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                onClick: d,
                route: c.Z5c.QUEST_HOME_V2,
                selected: t,
                icon: a.qDn,
                text: u.intl.string(u.t.JALI2N),
            },
            n,
        ),
    );
};
