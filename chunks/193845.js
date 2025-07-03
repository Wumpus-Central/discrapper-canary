(r.d(t, { default: () => O }), r(539854));
var n = r(255367),
    s = r(73800),
    i = r(149765),
    l = r(481060),
    a = r(422559),
    o = r(601964),
    c = r(485386),
    d = r(768581),
    m = r(700785),
    u = r(764260),
    x = r(981631),
    p = r(135899),
    b = r(388032),
    h = r(193198);
function j(e) {
    let { guild: t } = e,
        r = d.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, n.jsxs)(l.xBx, {
        className: h.header,
        children: [
            (0, n.jsx)('div', {
                className: h.headerIconContainer,
                children:
                    null != r
                        ? (0, n.jsx)(l.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: l.EFr.SIZE_120,
                              className: h.__invalid_guildIcon
                          })
                        : (0, n.jsx)('div', {
                              className: h.acronym,
                              children: (0, o.gM)(t)
                          })
            }),
            (0, n.jsxs)('div', {
                className: h.headerText,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: b.intl.string(b.t.MatO7O)
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: b.intl.string(b.t.VyPIen)
                    })
                ]
            })
        ]
    });
}
let _ = (e) => (e.toString() === x.Plq.MENTION_EVERYONE.toString() ? b.intl.string(b.t.yCpsQ0) : (0, a.wt)(e));
function f(e) {
    let { permissions: t } = e;
    return (0, n.jsxs)('div', {
        className: h.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: h.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: b.intl.string(b.t['0WZKIy'])
            }),
            (0, n.jsx)('div', {
                className: h.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: h.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: h.bulletWarning }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-default',
                                    children: _(e)
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
        className: h.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: h.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: b.intl.string(b.t.Yo5qlp)
            }),
            (0, n.jsx)('div', {
                className: h.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: h.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: h.bullet }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: _(e)
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
function v(e) {
    let { permissions: t } = e,
        { enabledPermissions: r, disabledPermissions: s } = t;
    return (0, n.jsx)(l.hzk, {
        children: (0, n.jsxs)('div', {
            className: h.table,
            children: [(0, n.jsx)(f, { permissions: r }), (0, n.jsx)(g, { permissions: s })]
        })
    });
}
function y(e) {
    let { onConfirm: t, onDismiss: r } = e;
    return (0, n.jsxs)(l.mzw, {
        className: h.footer,
        children: [
            (0, n.jsx)(l.zxk, {
                onClick: t,
                children: b.intl.string(b.t.iOSdAQ)
            }),
            (0, n.jsx)(l.zxk, {
                look: l.zxk.Looks.LINK,
                onClick: r,
                color: l.zxk.Colors.PRIMARY,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: b.intl.string(b.t.gWQZvr)
                })
            })
        ]
    });
}
function O(e) {
    let { guild: t, transitionState: r, onClose: a } = e,
        o = s.useMemo(() => {
            let e = [],
                r = [];
            return (
                p.$X.map((n) => {
                    m.oz(n, t) ? e.push(n) : r.push(n);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: r
                }
            );
        }, [t]);
    if (null == t) return null;
    let d = async () => {
        var e, r;
        let n = null != t ? c.Z.getEveryoneRole(t) : void 0;
        if (null == n) return;
        let s = i.Od(n.permissions, p.mu);
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
        className: h.modal,
        parentComponent: 'DisableRiskyPermsModal',
        children: [
            (0, n.jsx)(j, { guild: t }),
            (0, n.jsx)(v, { permissions: o }),
            (0, n.jsx)(y, {
                onConfirm: d,
                onDismiss: () => {
                    a();
                }
            })
        ]
    });
}
