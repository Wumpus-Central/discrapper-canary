(r.d(t, { default: () => N }), r(539854));
var n = r(255367),
    s = r(73800),
    i = r(149765),
    a = r(755721),
    l = r(481060),
    o = r(422559),
    c = r(601964),
    d = r(485386),
    m = r(768581),
    x = r(700785),
    u = r(764260),
    p = r(981631),
    b = r(135899),
    h = r(388032),
    j = r(193198);
function _(e) {
    let { guild: t } = e,
        r = m.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, n.jsxs)(l.xBx, {
        className: j.header,
        children: [
            (0, n.jsx)('div', {
                className: j.headerIconContainer,
                children:
                    null != r
                        ? (0, n.jsx)(l.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: l.EFr.SIZE_120,
                              className: j.__invalid_guildIcon
                          })
                        : (0, n.jsx)('div', {
                              className: j.acronym,
                              children: (0, c.gM)(t)
                          })
            }),
            (0, n.jsxs)('div', {
                className: j.headerText,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: h.intl.string(h.t.MatO7O)
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: h.intl.string(h.t.VyPIen)
                    })
                ]
            })
        ]
    });
}
let f = (e) => (e.toString() === p.Plq.MENTION_EVERYONE.toString() ? h.intl.string(h.t.yCpsQ0) : (0, o.wt)(e));
function v(e) {
    let { permissions: t } = e;
    return (0, n.jsxs)('div', {
        className: j.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: j.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: h.intl.string(h.t['0WZKIy'])
            }),
            (0, n.jsx)('div', {
                className: j.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: j.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: j.bulletWarning }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-default',
                                    children: f(e)
                                })
                            ]
                        },
                        t
                    )
                )
            })
        ]
    });
}
function g(e) {
    let { permissions: t } = e;
    return (0, n.jsxs)('div', {
        className: j.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: j.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: h.intl.string(h.t.Yo5qlp)
            }),
            (0, n.jsx)('div', {
                className: j.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: j.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: j.bullet }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: f(e)
                                })
                            ]
                        },
                        t
                    )
                )
            })
        ]
    });
}
function y(e) {
    let { permissions: t } = e,
        { enabledPermissions: r, disabledPermissions: s } = t;
    return (0, n.jsx)(l.hzk, {
        children: (0, n.jsxs)('div', {
            className: j.table,
            children: [(0, n.jsx)(v, { permissions: r }), (0, n.jsx)(g, { permissions: s })]
        })
    });
}
function O(e) {
    let { onConfirm: t, onDismiss: r } = e;
    return (0, n.jsxs)(l.mzw, {
        className: j.footer,
        children: [
            (0, n.jsx)(l.zxk, {
                variant: 'primary',
                text: h.intl.string(h.t.iOSdAQ),
                onClick: t
            }),
            (0, n.jsx)(a.zx, {
                look: a.zx.Looks.LINK,
                onClick: r,
                color: a.zx.Colors.PRIMARY,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: h.intl.string(h.t.gWQZvr)
                })
            })
        ]
    });
}
function N(e) {
    let { guild: t, transitionState: r, onClose: a } = e,
        o = s.useMemo(() => {
            let e = [],
                r = [];
            return (
                b.$X.map((n) => {
                    x.oz(n, t) ? e.push(n) : r.push(n);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: r
                }
            );
        }, [t]);
    if (null == t) return null;
    let c = async () => {
        var e, r;
        let n = null != t ? d.Z.getEveryoneRole(t) : void 0;
        if (null == n) return;
        let s = i.Od(n.permissions, b.mu);
        (await (0, u.Gf)(t.id, [
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            ((n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n));
                        }));
                }
                return e;
            })({}, n)),
            (r = r = { permissions: s }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  }),
            e)
        ]),
            a());
    };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: r,
        size: l.CgR.SMALL,
        className: j.modal,
        parentComponent: 'DisableRiskyPermsModal',
        children: [
            (0, n.jsx)(_, { guild: t }),
            (0, n.jsx)(y, { permissions: o }),
            (0, n.jsx)(O, {
                onConfirm: c,
                onDismiss: () => {
                    a();
                }
            })
        ]
    });
}
