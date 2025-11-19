n.d(t, { Z: () => x });
var i = n(54381),
    l = n(473749),
    s = n(793030),
    r = n(481060),
    a = n(109983),
    o = n(120298),
    c = n(75666),
    d = n(388032),
    u = n(205655);
function m(e) {
    let { guildTemplate: t, onClick: n, autoFocus: s } = e,
        r = l.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(a.Z, {
        icon: o.M[t.id],
        message: t.label,
        onClick: r,
        autoFocus: s,
    });
}
function x(e) {
    var t, n;
    let { onBack: l, onChooseTemplate: a, directoryGuildName: o } = e,
        x = (0, c.Pp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.xBx, {
                title: d.intl.formatToPlainString(d.t.T7aLYT, { guildName: o }),
                subtitle: d.intl.string(d.t["RA+St6"]),
            }),
            (0, i.jsx)(s.fef, {
                children: (0, i.jsx)(r.w0Z, {
                    className: u.scroller,
                    children: (0, i.jsxs)("div", {
                        className: u.templatesList,
                        children: [
                            (0, i.jsx)(m, {
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
                                    })({}, x[c.sE.CREATE])),
                                    (n = n = { label: d.intl.string(d.t.WqJbLi) }),
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
                                onClick: a,
                            }),
                            (0, i.jsx)(r.Text, {
                                className: u.optionHeader,
                                color: "header-secondary",
                                variant: "text-xs/bold",
                                children: d.intl.string(d.t.JGDkfg),
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_STUDY],
                                onClick: a,
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_SCHOOL_CLUB],
                                onClick: a,
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_CLASS],
                                onClick: a,
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_SOCIAL],
                                onClick: a,
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_MAJOR],
                                onClick: a,
                            }),
                            (0, i.jsx)(m, {
                                guildTemplate: x[c.sE.HUB_DORM],
                                onClick: a,
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(s.Go$, {
                leading: (0, i.jsx)(r.Avr, {
                    textVariant: "text-sm/medium",
                    variant: "secondary",
                    text: d.intl.string(d.t["13/7kX"]),
                    onClick: l,
                }),
            }),
        ],
    });
}
