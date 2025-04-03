n.d(t, { Z: () => x });
var s = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(600164),
    a = n(109983),
    o = n(120298),
    c = n(75666),
    d = n(388032),
    u = n(286784);
function m(e) {
    let { guildTemplate: t, onClick: n, autoFocus: r } = e,
        l = i.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, s.jsx)(a.Z, {
        icon: o.M[t.id],
        message: t.label,
        onClick: l,
        autoFocus: r
    });
}
function x(e) {
    var t, n;
    let { onClose: i, onBack: a, onChooseTemplate: o, directoryGuildName: x } = e,
        C = (0, c.Pp)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(r.xBx, {
                direction: l.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, s.jsx)(r.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.NW.format(d.t.T7aLYW, { guildName: x })
                    }),
                    (0, s.jsx)(r.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.NW.string(d.t['RA+St7'])
                    }),
                    null != i &&
                        (0, s.jsx)(r.olH, {
                            className: u.closeButton,
                            onClick: i
                        })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: u.templatesList,
                paddingFix: !1,
                children: [
                    (0, s.jsx)(m, {
                        guildTemplate:
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        s = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (s = s.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        s.forEach(function (t) {
                                            var s;
                                            (s = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: s,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = s);
                                        });
                                }
                                return e;
                            })({}, C[c.sE.CREATE])),
                            (n = n = { label: d.NW.string(d.t.WqJbLi) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var s = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, s);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        onClick: o
                    }),
                    (0, s.jsx)(r.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: d.NW.string(d.t.JGDkfn)
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_STUDY],
                        onClick: o
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_SCHOOL_CLUB],
                        onClick: o
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_CLASS],
                        onClick: o
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_SOCIAL],
                        onClick: o
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_MAJOR],
                        onClick: o
                    }),
                    (0, s.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_DORM],
                        onClick: o
                    })
                ]
            }),
            (0, s.jsx)(r.mzw, {
                className: u.footer,
                children: (0, s.jsx)(r.zxk, {
                    className: u.backButton,
                    look: r.zxk.Looks.BLANK,
                    size: r.zxk.Sizes.MIN,
                    onClick: a,
                    children: d.NW.string(d.t['13/7kZ'])
                })
            })
        ]
    });
}
