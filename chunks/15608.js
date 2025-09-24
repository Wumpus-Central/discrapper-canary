n.d(t, { Z: () => g });
var i = n(951288),
    l = n(647438),
    s = n(369585),
    r = n(103866),
    a = n(37148),
    o = n(481060),
    c = n(109983),
    d = n(120298),
    u = n(75666),
    m = n(388032),
    x = n(496563);
function C(e) {
    let { guildTemplate: t, onClick: n, autoFocus: s } = e,
        r = l.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(c.Z, {
        icon: d.M[t.id],
        message: t.label,
        onClick: r,
        autoFocus: s,
    });
}
function g(e) {
    var t, n;
    let { onBack: l, onChooseTemplate: c, directoryGuildName: d } = e,
        g = (0, u.Pp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.x, {
                title: m.intl.formatToPlainString(m.t.T7aLYW, { guildName: d }),
                subtitle: m.intl.string(m.t["RA+St7"]),
            }),
            (0, i.jsx)(r.f, {
                children: (0, i.jsx)(o.w0Z, {
                    className: x.scroller,
                    children: (0, i.jsxs)("div", {
                        className: x.templatesList,
                        children: [
                            (0, i.jsx)(C, {
                                guildTemplate:
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, g[u.sE.CREATE])),
                                    (n = n = { label: m.intl.string(m.t.WqJbLi) }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t),
                                onClick: c,
                            }),
                            (0, i.jsx)(o.Text, {
                                className: x.optionHeader,
                                color: "header-secondary",
                                variant: "text-xs/bold",
                                children: m.intl.string(m.t.JGDkfn),
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_STUDY],
                                onClick: c,
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_SCHOOL_CLUB],
                                onClick: c,
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_CLASS],
                                onClick: c,
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_SOCIAL],
                                onClick: c,
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_MAJOR],
                                onClick: c,
                            }),
                            (0, i.jsx)(C, {
                                guildTemplate: g[u.sE.HUB_DORM],
                                onClick: c,
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(s.G, {
                leading: (0, i.jsx)(o.Avr, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: m.intl.string(m.t["13/7kZ"]),
                    onClick: l,
                }),
            }),
        ],
    });
}
