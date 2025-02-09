n.d(t, { Z: () => j }), n(47120);
var a = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(430824),
    o = n(259580),
    c = n(598952),
    d = n(392739),
    x = n(916001),
    m = n(981631),
    u = n(388032),
    h = n(239524);
let _ = 'expanded-area';
function f(e) {
    let { attachments: t, role: n, roleLocked: s } = e,
        [l, m] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.P3F, {
                className: h.viewContents,
                onClick: () => {
                    m((e) => !e);
                },
                'aria-expanded': l,
                'aria-controls': _,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: l ? u.intl.string(u.t.DKNxgI) : u.intl.string(u.t.ESEKub)
                    }),
                    (0, a.jsx)(o.Z, {
                        className: h.caretIcon,
                        direction: l ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                ]
            }),
            (0, a.jsx)(r.LZC, { size: 12 }),
            l &&
                (0, a.jsxs)('ul', {
                    className: h.contentsContainer,
                    id: _,
                    children: [
                        (0, a.jsx)(d.Z, {
                            label: u.intl.string(u.t.DWYJub),
                            children: (0, a.jsx)('ul', {
                                className: h.attachmentGrid,
                                children: t.map((e) => (0, a.jsx)(c.Z, { attachment: e }, e.id))
                            })
                        }),
                        null != n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', { className: h.separator }),
                                    (0, a.jsx)(d.Z, {
                                        label: u.intl.string(u.t.o9xphY),
                                        children: (0, a.jsx)(x.Z, {
                                            role: n,
                                            textVariant: 'text-md/medium',
                                            locked: s
                                        })
                                    })
                                ]
                            })
                    ]
                })
        ]
    });
}
function j(e) {
    var t;
    let { listing: n } = e,
        i = null !== (t = n.attachments) && void 0 !== t ? t : [],
        r = (0, s.e7)([l.Z], () => {
            var e;
            return l.Z.getRole(n.guild_id, null !== (e = n.role_id) && void 0 !== e ? e : m.lds);
        }),
        o = !n.has_entitlement;
    return 0 === i.length && null == r
        ? null
        : 0 === i.length && null != r
          ? (0, a.jsx)(x.Z, {
                role: r,
                textVariant: 'text-md/medium',
                locked: o
            })
          : (0, a.jsx)(f, {
                attachments: i,
                role: r,
                roleLocked: o
            });
}
