n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(131704),
    m = n(324067),
    h = n(699516),
    g = n(594174),
    x = n(303737),
    p = n(981631),
    f = n(388032),
    C = n(904685);
function v(e) {
    return String(e);
}
function _(e) {
    let { icon: t, title: n, subtitle: r, className: l } = e;
    return (0, i.jsxs)('div', {
        className: a()(C.label, l),
        children: [
            t,
            (0, i.jsxs)('div', {
                className: C.labelText,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'none',
                        className: C.labelTitle,
                        children: n
                    }),
                    null != r && '' !== r
                        ? (0, i.jsx)(o.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              className: C.labelSubtitle,
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function I() {
    return (0, i.jsx)(_, {
        icon: (0, i.jsx)(o.PlusSmallIcon, {
            size: 'md',
            color: 'currentColor',
            className: C.labelIcon
        }),
        title: f.intl.string(f.t.d7YJMD),
        className: C.createLabel
    });
}
function N(e) {
    var t;
    let { channelId: n } = e,
        r = (0, x.m7)(n),
        l = (0, x.m7)(null !== (t = null == r ? void 0 : r.parent_id) && void 0 !== t ? t : p.lds);
    if (null == r) return null;
    let a = (0, d.KS)(r),
        s = (0, c.F6)(r, g.default, h.Z),
        o = null != l ? (0, c.F6)(l, g.default, h.Z) : void 0;
    return (0, i.jsx)(_, {
        icon: null != a && (0, i.jsx)(a, { className: C.labelIcon }),
        title: s,
        subtitle: o
    });
}
function T(e) {
    let { value: t } = e;
    return null != t ? (0, i.jsx)(N, { channelId: t }) : (0, i.jsx)(I, {});
}
function j(e) {
    let { guildId: t, value: l, initialChannelId: a, omitChannelIds: d, 'aria-labelledby': C, onChange: _ } = e,
        I = f.intl.string(f.t.d7YJMD),
        N = (0, s.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        j = (0, x.m7)(null != l ? l : p.lds),
        b = r.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: I
                    }
                ],
                t = !1;
            for (let n of N._categories)
                for (let { channel: i } of N[n.channel.id]) {
                    if (!!(0, u.r8)(i.type) || !!(0, u.bw)(i.type))
                        (!(i.id !== l && (null == d ? void 0 : d.has(i.id))) || (i.id === a && l !== a)) &&
                            (l === i.id && (t = !0),
                            e.push({
                                value: i.id,
                                label: (0, c.F6)(i, g.default, h.Z)
                            }));
                }
            return (
                null != l &&
                    !t &&
                    null != j &&
                    e.push({
                        value: l,
                        label: j.name
                    }),
                e
            );
        }, [I, l, j, N, d, a]);
    return (0, i.jsx)(o.Select, {
        placeholder: f.intl.string(f.t.r2pts7),
        options: b,
        select: function (e) {
            null == e
                ? (0, o.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('7590'), n.e('45094'), n.e('77389')]).then(n.bind(n, 797671));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              guildId: t,
                              onSubmit: _
                          });
                  })
                : _(e);
        },
        isSelected: (e) => null != l && v(e) === v(l),
        serialize: v,
        renderOptionLabel: T,
        renderOptionValue: (e) => {
            let [t] = e;
            return T(t);
        },
        'aria-labelledby': C
    });
}
