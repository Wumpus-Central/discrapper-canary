i.d(s, { default: () => f }), i(653041);
var n = i(200651),
    r = i(192379),
    t = i(149765),
    l = i(481060),
    a = i(422559),
    o = i(430824),
    d = i(768581),
    c = i(700785),
    m = i(764260),
    x = i(981631),
    h = i(135899),
    u = i(388032),
    _ = i(838798);
function p(e) {
    let { guild: s } = e,
        i = d.ZP.getGuildIconURL({
            id: s.id,
            icon: s.icon,
            size: 120
        });
    return (0, n.jsxs)(l.xBx, {
        className: _.header,
        children: [
            (0, n.jsx)('div', {
                className: _.headerIconContainer,
                children:
                    null != i
                        ? (0, n.jsx)(l.qEK, {
                              src: i,
                              'aria-label': s.name,
                              size: l.EFr.SIZE_120,
                              className: _.__invalid_guildIcon
                          })
                        : (0, n.jsx)('div', {
                              className: _.acronym,
                              children: s.acronym
                          })
            }),
            (0, n.jsxs)('div', {
                className: _.headerText,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        children: u.intl.string(u.t.MatO7O)
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: u.intl.string(u.t.VyPIen)
                    })
                ]
            })
        ]
    });
}
let j = (e) => (e.toString() === x.Plq.MENTION_EVERYONE.toString() ? u.intl.string(u.t.yCpsQ0) : (0, a.wt)(e));
function b(e) {
    let { permissions: s } = e;
    return (0, n.jsxs)('div', {
        className: _.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: _.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: u.intl.string(u.t['0WZKIy'])
            }),
            (0, n.jsx)('div', {
                className: _.permissionsTable,
                children: s.map((e, s) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: _.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: _.bulletWarning }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: j(e)
                                })
                            ]
                        },
                        s
                    )
                )
            })
        ]
    });
}
function v(e) {
    let { permissions: s } = e;
    return (0, n.jsxs)('div', {
        className: _.tableContainer,
        children: [
            (0, n.jsx)(l.Text, {
                className: _.tableHeader,
                variant: 'text-xs/semibold',
                color: 'text-muted',
                children: u.intl.string(u.t.Yo5qlp)
            }),
            (0, n.jsx)('div', {
                className: _.permissionsTable,
                children: s.map((e, s) =>
                    (0, n.jsxs)(
                        'div',
                        {
                            className: _.permissionRow,
                            children: [
                                (0, n.jsx)('div', { className: _.bullet }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: j(e)
                                })
                            ]
                        },
                        s
                    )
                )
            })
        ]
    });
}
function N(e) {
    let { permissions: s } = e,
        { enabledPermissions: i, disabledPermissions: r } = s;
    return (0, n.jsx)(l.hzk, {
        children: (0, n.jsxs)('div', {
            className: _.table,
            children: [(0, n.jsx)(b, { permissions: i }), (0, n.jsx)(v, { permissions: r })]
        })
    });
}
function g(e) {
    let { onConfirm: s, onDismiss: i } = e;
    return (0, n.jsxs)(l.mzw, {
        className: _.footer,
        children: [
            (0, n.jsx)(l.zxk, {
                onClick: s,
                children: u.intl.string(u.t.iOSdAQ)
            }),
            (0, n.jsx)(l.zxk, {
                look: l.zxk.Looks.LINK,
                onClick: i,
                color: l.zxk.Colors.PRIMARY,
                children: (0, n.jsx)(l.Text, {
                    variant: 'text-sm/semibold',
                    color: 'header-primary',
                    children: u.intl.string(u.t.gWQZvr)
                })
            })
        ]
    });
}
function f(e) {
    let { guild: s, transitionState: i, onClose: a } = e,
        d = r.useMemo(() => {
            let e = [],
                i = [];
            return (
                h.$X.map((n) => {
                    c.oz(n, s) ? e.push(n) : i.push(n);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i
                }
            );
        }, [s]);
    if (null == s) return null;
    let x = async () => {
        let e = null != s ? o.Z.getRole(s.id, s.getEveryoneRoleId()) : void 0;
        if (null == e) return;
        let i = t.Od(e.permissions, h.mu);
        await (0, m.Gf)(s.id, [
            {
                ...e,
                permissions: i
            }
        ]),
            a();
    };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: i,
        size: l.CgR.SMALL,
        className: _.modal,
        children: [
            (0, n.jsx)(p, { guild: s }),
            (0, n.jsx)(N, { permissions: d }),
            (0, n.jsx)(g, {
                onConfirm: x,
                onDismiss: () => {
                    a();
                }
            })
        ]
    });
}
