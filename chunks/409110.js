n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(430824),
    l = n(259580),
    c = n(598952),
    d = n(392739),
    u = n(916001),
    m = n(981631),
    x = n(388032),
    h = n(954265);
let f = 'expanded-area';
function j(e) {
    let { attachments: t, role: n, roleLocked: i } = e,
        [o, m] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(s.Clickable, {
                className: h.viewContents,
                onClick: () => {
                    m((e) => !e);
                },
                'aria-expanded': o,
                'aria-controls': f,
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: o ? x.intl.string(x.t.DKNxgI) : x.intl.string(x.t.ESEKub)
                    }),
                    (0, a.jsx)(l.Z, {
                        className: h.caretIcon,
                        direction: o ? l.Z.Directions.UP : l.Z.Directions.DOWN
                    })
                ]
            }),
            (0, a.jsx)(s.Spacer, { size: 12 }),
            o &&
                (0, a.jsxs)('ul', {
                    className: h.contentsContainer,
                    id: f,
                    children: [
                        (0, a.jsx)(d.Z, {
                            label: x.intl.string(x.t.DWYJub),
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
                                        label: x.intl.string(x.t.o9xphY),
                                        children: (0, a.jsx)(u.Z, {
                                            role: n,
                                            textVariant: 'text-md/medium',
                                            locked: i
                                        })
                                    })
                                ]
                            })
                    ]
                })
        ]
    });
}
function p(e) {
    var t;
    let { listing: n } = e,
        r = null !== (t = n.attachments) && void 0 !== t ? t : [],
        s = (0, i.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(n.guild_id, null !== (e = n.role_id) && void 0 !== e ? e : m.lds);
        }),
        l = !n.has_entitlement;
    return 0 === r.length && null == s
        ? null
        : 0 === r.length && null != s
          ? (0, a.jsx)(u.Z, {
                role: s,
                textVariant: 'text-md/medium',
                locked: l
            })
          : (0, a.jsx)(j, {
                attachments: r,
                role: s,
                roleLocked: l
            });
}
