n.d(t, { Z: () => x });
var i = n(255367),
    s = n(73800),
    l = n(481060),
    r = n(600164),
    a = n(109983),
    o = n(120298),
    c = n(75666),
    d = n(388032),
    u = n(286784);
function m(e) {
    let { guildTemplate: t, onClick: n, autoFocus: l } = e,
        r = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(a.Z, {
        icon: o.M[t.id],
        message: t.label,
        onClick: r,
        autoFocus: l
    });
}
function x(e) {
    var t, n;
    let { onClose: s, onBack: a, onChooseTemplate: o, directoryGuildName: x } = e,
        C = (0, c.Pp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.format(d.t.T7aLYW, { guildName: x })
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['RA+St7'])
                    }),
                    null != s &&
                        (0, i.jsx)(l.olH, {
                            className: u.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: u.templatesList,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(m, {
                        guildTemplate:
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, C[c.sE.CREATE])),
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
                        onClick: o
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: d.intl.string(d.t.JGDkfn)
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_STUDY],
                        onClick: o
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_SCHOOL_CLUB],
                        onClick: o
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_CLASS],
                        onClick: o
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_SOCIAL],
                        onClick: o
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_MAJOR],
                        onClick: o
                    }),
                    (0, i.jsx)(m, {
                        guildTemplate: C[c.sE.HUB_DORM],
                        onClick: o
                    })
                ]
            }),
            (0, i.jsx)(l.mzw, {
                className: u.footer,
                children: (0, i.jsx)(l.zxk, {
                    className: u.backButton,
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    onClick: a,
                    children: d.intl.string(d.t['13/7kZ'])
                })
            })
        ]
    });
}
