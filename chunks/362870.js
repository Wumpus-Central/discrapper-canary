n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(91192),
    o = n(481060),
    s = n(515753),
    c = n(150560),
    u = n(981631),
    d = n(388032);
let p = function () {
    var e;
    let t = (0, a.JA)("quests"),
        n = (0, l.TH)(),
        p = i.useCallback(() => {
            c.Z.getState().setUtmCurrentContext({ utmContentCurrent: "PRIMARY_QUEST_HOME" });
        }, []);
    return (0, r.jsx)(
        s.Qj,
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
                onClick: p,
                route: u.Z5c.QUEST_HOME_V2,
                selected: (null == (e = (0, l.LX)(n.pathname, u.Z5c.QUEST_HOME_V2)) ? void 0 : e.isExact) === !0,
                icon: o.qDn,
                text: d.intl.string(d.t.JALI2N),
            },
            t,
        ),
    );
};
