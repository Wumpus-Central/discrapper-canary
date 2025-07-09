n.d(t, { Z: () => C });
var i = n(255367),
    s = n(73800),
    l = n(755721),
    a = n(481060),
    r = n(600164),
    o = n(109983),
    c = n(120298),
    d = n(75666),
    u = n(388032),
    m = n(286784);
function x(e) {
    let { guildTemplate: t, onClick: n, autoFocus: l } = e,
        a = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, i.jsx)(o.Z, {
        icon: c.M[t.id],
        message: t.label,
        onClick: a,
        autoFocus: l
    });
}
function C(e) {
    var t, n;
    let { onClose: s, onBack: o, onChooseTemplate: c, directoryGuildName: C } = e,
        h = (0, d.Pp)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, i.jsx)(a.X6q, {
                        className: m.title,
                        variant: 'heading-xl/semibold',
                        children: u.intl.format(u.t.T7aLYW, { guildName: C })
                    }),
                    (0, i.jsx)(a.Text, {
                        className: m.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.intl.string(u.t['RA+St7'])
                    }),
                    null != s &&
                        (0, i.jsx)(a.olH, {
                            className: m.closeButton,
                            onClick: s
                        })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: m.templatesList,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(x, {
                        guildTemplate:
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
                                }
                                return e;
                            })({}, h[d.sE.CREATE])),
                            (n = n = { label: u.intl.string(u.t.WqJbLi) }),
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
                        onClick: c
                    }),
                    (0, i.jsx)(a.Text, {
                        className: m.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: u.intl.string(u.t.JGDkfn)
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_STUDY],
                        onClick: c
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_SCHOOL_CLUB],
                        onClick: c
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_CLASS],
                        onClick: c
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_SOCIAL],
                        onClick: c
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_MAJOR],
                        onClick: c
                    }),
                    (0, i.jsx)(x, {
                        guildTemplate: h[d.sE.HUB_DORM],
                        onClick: c
                    })
                ]
            }),
            (0, i.jsx)(a.mzw, {
                className: m.footer,
                children: (0, i.jsx)(l.zx, {
                    className: m.backButton,
                    look: l.zx.Looks.BLANK,
                    size: l.zx.Sizes.MIN,
                    onClick: o,
                    children: u.intl.string(u.t['13/7kZ'])
                })
            })
        ]
    });
}
