r.d(t, { default: () => y }), r(539854);
var n = r(200651),
    s = r(192379),
    i = r(149765),
    l = r(481060),
    a = r(422559),
    o = r(430824),
    c = r(768581),
    d = r(700785),
    m = r(764260),
    x = r(981631),
    u = r(135899),
    p = r(388032),
    b = r(193198);
function h(e) {
    let { guild: t } = e,
        r = c.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 120
        });
    return (0, n.jsxs)(l.xBx, {
        className: b.header,
        children: [
            (0, n.jsx)('div', {
                className: b.headerIconContainer,
                children:
                    null != r
                        ? (0, n.jsx)(l.qEK, {
                              src: r,
                              'aria-label': t.name,
                              size: l.EFr.SIZE_120,
                              className: b.__invalid_guildIcon
                          })
                        : (0, n.jsx)('div', {
                              className: b.acronym,
                              children: t.acronym
                          })
            }),
            (0, n.jsxs)('div', {
                className: b.headerText,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: p.intl.string(p.t.MatO7O)
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: p.intl.string(p.t.VyPIen)
                    })
                ]
            })
        ]
    });
}
let j = (e) => (e.toString() === x.Plq.MENTION_EVERYONE.toString() ? p.intl.string(p.t.yCpsQ0) : (0, a.wt)(e));
function _(e) {
    let { permissions: t } = e;
    return (0, n.jsxs)('div', {
        className: b.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: b.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: p.intl.string(p.t['0WZKIy'])
            }),
            (0, n.jsx)('div', {
                className: b.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: b.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: b.bulletWarning }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: j(e)
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
function f(e) {
    let { permissions: t } = e;
    return (0, n.jsxs)('div', {
        className: b.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: b.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: p.intl.string(p.t.Yo5qlp)
            }),
            (0, n.jsx)('div', {
                className: b.permissionsTable,
                children: t.map((e, t) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: b.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: b.bullet }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: j(e)
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
    let { permissions: t } = e,
        { enabledPermissions: r, disabledPermissions: s } = t;
    return (0, n.jsx)(l.hzk, {
        children: (0, n.jsxs)('div', {
            className: b.table,
            children: [(0, n.jsx)(_, { permissions: r }), (0, n.jsx)(f, { permissions: s })]
        })
    });
}
function v(e) {
    let { onConfirm: t, onDismiss: r } = e;
    return (0, n.jsxs)(l.mzw, {
        className: b.footer,
        children: [
            (0, n.jsx)(l.zxk, {
                onClick: t,
                children: p.intl.string(p.t.iOSdAQ)
            }),
            (0, n.jsx)(l.zxk, {
                look: l.zxk.Looks.LINK,
                onClick: r,
                color: l.zxk.Colors.PRIMARY,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: p.intl.string(p.t.gWQZvr)
                })
            })
        ]
    });
}
function y(e) {
    let { guild: t, transitionState: r, onClose: a } = e,
        c = s.useMemo(() => {
            let e = [],
                r = [];
            return (
                u.$X.map((n) => {
                    d.oz(n, t) ? e.push(n) : r.push(n);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: r
                }
            );
        }, [t]);
    if (null == t) return null;
    let x = async () => {
        var e, r;
        let n = null != t ? o.Z.getRole(t.id, t.getEveryoneRoleId()) : void 0;
        if (null == n) return;
        let s = i.Od(n.permissions, u.mu);
        await (0, m.Gf)(t.id, [
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
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
            a();
    };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: r,
        size: l.CgR.SMALL,
        className: b.modal,
        children: [
            (0, n.jsx)(h, { guild: t }),
            (0, n.jsx)(g, { permissions: c }),
            (0, n.jsx)(v, {
                onConfirm: x,
                onDismiss: () => {
                    a();
                }
            })
        ]
    });
}
