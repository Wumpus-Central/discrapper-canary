t.d(r, { default: () => y }), t(653041);
var s = t(200651),
    n = t(192379),
    i = t(149765),
    a = t(481060),
    l = t(422559),
    o = t(430824),
    c = t(768581),
    d = t(700785),
    m = t(764260),
    x = t(981631),
    u = t(135899),
    p = t(388032),
    b = t(193198);
function h(e) {
    let { guild: r } = e,
        t = c.ZP.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 120
        });
    return (0, s.jsxs)(a.xBx, {
        className: b.header,
        children: [
            (0, s.jsx)('div', {
                className: b.headerIconContainer,
                children:
                    null != t
                        ? (0, s.jsx)(a.qEK, {
                              src: t,
                              'aria-label': r.name,
                              size: a.EFr.SIZE_120,
                              className: b.__invalid_guildIcon
                          })
                        : (0, s.jsx)('div', {
                              className: b.acronym,
                              children: r.acronym
                          })
            }),
            (0, s.jsxs)('div', {
                className: b.headerText,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: p.NW.string(p.t.MatO7O)
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: p.NW.string(p.t.VyPIen)
                    })
                ]
            })
        ]
    });
}
let j = (e) => (e.toString() === x.Plq.MENTION_EVERYONE.toString() ? p.NW.string(p.t.yCpsQ0) : (0, l.wt)(e));
function _(e) {
    let { permissions: r } = e;
    return (0, s.jsxs)('div', {
        className: b.tableContainer,
        children: [
            (0, s.jsx)(a.Text, {
                className: b.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: p.NW.string(p.t['0WZKIy'])
            }),
            (0, s.jsx)('div', {
                className: b.permissionsTable,
                children: r.map((e, r) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: b.permissionRow,
                            children: [
                                (0, s.jsx)('div', { className: b.bulletWarning }),
                                (0, s.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: j(e)
                                })
                            ]
                        },
                        r
                    )
                )
            })
        ]
    });
}
function f(e) {
    let { permissions: r } = e;
    return (0, s.jsxs)('div', {
        className: b.tableContainer,
        children: [
            (0, s.jsx)(a.Text, {
                className: b.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: p.NW.string(p.t.Yo5qlp)
            }),
            (0, s.jsx)('div', {
                className: b.permissionsTable,
                children: r.map((e, r) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            className: b.permissionRow,
                            children: [
                                (0, s.jsx)('div', { className: b.bullet }),
                                (0, s.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: j(e)
                                })
                            ]
                        },
                        r
                    )
                )
            })
        ]
    });
}
function g(e) {
    let { permissions: r } = e,
        { enabledPermissions: t, disabledPermissions: n } = r;
    return (0, s.jsx)(a.hzk, {
        children: (0, s.jsxs)('div', {
            className: b.table,
            children: [(0, s.jsx)(_, { permissions: t }), (0, s.jsx)(f, { permissions: n })]
        })
    });
}
function v(e) {
    let { onConfirm: r, onDismiss: t } = e;
    return (0, s.jsxs)(a.mzw, {
        className: b.footer,
        children: [
            (0, s.jsx)(a.zxk, {
                onClick: r,
                children: p.NW.string(p.t.iOSdAQ)
            }),
            (0, s.jsx)(a.zxk, {
                look: a.zxk.Looks.LINK,
                onClick: t,
                color: a.zxk.Colors.PRIMARY,
                children: (0, s.jsx)(a.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: p.NW.string(p.t.gWQZvr)
                })
            })
        ]
    });
}
function y(e) {
    let { guild: r, transitionState: t, onClose: l } = e,
        c = n.useMemo(() => {
            let e = [],
                t = [];
            return (
                u.$X.map((s) => {
                    d.oz(s, r) ? e.push(s) : t.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: t
                }
            );
        }, [r]);
    if (null == r) return null;
    let x = async () => {
        var e, t;
        let s = null != r ? o.Z.getRole(r.id, r.getEveryoneRoleId()) : void 0;
        if (null == s) return;
        let n = i.Od(s.permissions, u.mu);
        await (0, m.Gf)(r.id, [
            ((e = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        s = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (s = s.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        s.forEach(function (r) {
                            var s;
                            (s = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: s,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = s);
                        });
                }
                return e;
            })({}, s)),
            (t = t = { permissions: n }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, r) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var s = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, s);
                      }
                      return t;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e)
        ]),
            l();
    };
    return (0, s.jsxs)(a.Y0X, {
        transitionState: t,
        size: a.CgR.SMALL,
        className: b.modal,
        children: [
            (0, s.jsx)(h, { guild: r }),
            (0, s.jsx)(g, { permissions: c }),
            (0, s.jsx)(v, {
                onConfirm: x,
                onDismiss: () => {
                    l();
                }
            })
        ]
    });
}
