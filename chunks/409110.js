n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    s = n(481060),
    l = n(430824),
    o = n(259580),
    c = n(598952),
    d = n(392739),
    u = n(916001),
    m = n(981631),
    x = n(388032),
    f = n(721692);
let h = 'expanded-area';
function j(e) {
    let { attachments: t, role: n, roleLocked: i } = e,
        [l, m] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                className: f.viewContents,
                onClick: () => {
                    m((e) => !e);
                },
                'aria-expanded': l,
                'aria-controls': h,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: l ? x.NW.string(x.t.DKNxgI) : x.NW.string(x.t.ESEKub)
                    }),
                    (0, r.jsx)(o.Z, {
                        className: f.caretIcon,
                        direction: l ? o.Z.Directions.UP : o.Z.Directions.DOWN
                    })
                ]
            }),
            (0, r.jsx)(s.LZC, { size: 12 }),
            l &&
                (0, r.jsxs)('ul', {
                    className: f.contentsContainer,
                    id: h,
                    children: [
                        (0, r.jsx)(d.Z, {
                            label: x.NW.string(x.t.DWYJub),
                            children: (0, r.jsx)('ul', {
                                className: f.attachmentGrid,
                                children: t.map((e) => (0, r.jsx)(c.Z, { attachment: e }, e.id))
                            })
                        }),
                        null != n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: f.separator }),
                                    (0, r.jsx)(d.Z, {
                                        label: x.NW.string(x.t.o9xphY),
                                        children: (0, r.jsx)(u.Z, {
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
function _(e) {
    var t;
    let { listing: n } = e,
        a = null != (t = n.attachments) ? t : [],
        s = (0, i.e7)([l.Z], () => {
            var e;
            return l.Z.getRole(n.guild_id, null != (e = n.role_id) ? e : m.lds);
        }),
        o = !n.has_entitlement;
    return 0 === a.length && null == s
        ? null
        : 0 === a.length && null != s
          ? (0, r.jsx)(u.Z, {
                role: s,
                textVariant: 'text-md/medium',
                locked: o
            })
          : (0, r.jsx)(j, {
                attachments: a,
                role: s,
                roleLocked: o
            });
}
