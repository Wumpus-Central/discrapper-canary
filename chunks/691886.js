n.d(t, { Z: () => E }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(131704),
    m = n(324067),
    h = n(699516),
    g = n(594174),
    x = n(303737),
    p = n(981631),
    _ = n(388032),
    C = n(904685);
function f(e) {
    return String(e);
}
function v(e) {
    let { icon: t, title: n, subtitle: r, className: l } = e;
    return (0, i.jsxs)('div', {
        className: s()(C.label, l),
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
function N() {
    return (0, i.jsx)(v, {
        icon: (0, i.jsx)(o.qJs, {
            size: 'md',
            color: 'currentColor',
            className: C.labelIcon
        }),
        title: _.intl.string(_.t.d7YJMD),
        className: C.createLabel
    });
}
function j(e) {
    var t;
    let { channelId: n } = e,
        r = (0, x.m7)(n),
        l = (0, x.m7)(null !== (t = null == r ? void 0 : r.parent_id) && void 0 !== t ? t : p.lds);
    if (null == r) return null;
    let s = (0, d.KS)(r),
        a = (0, c.F6)(r, g.default, h.Z),
        o = null != l ? (0, c.F6)(l, g.default, h.Z) : void 0;
    return (0, i.jsx)(v, {
        icon: null != s && (0, i.jsx)(s, { className: C.labelIcon }),
        title: a,
        subtitle: o
    });
}
function I(e) {
    let { value: t } = e;
    return null != t ? (0, i.jsx)(j, { channelId: t }) : (0, i.jsx)(N, {});
}
function E(e) {
    let { guildId: t, value: l, initialChannelId: s, omitChannelIds: d, 'aria-labelledby': C, onChange: v } = e,
        N = _.intl.string(_.t.d7YJMD),
        j = (0, a.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        E = (0, x.m7)(null != l ? l : p.lds),
        b = r.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: N
                    }
                ],
                t = !1;
            for (let n of j._categories)
                for (let { channel: i } of j[n.channel.id])
                    ((0, u.r8)(i.type) || (0, u.bw)(i.type)) &&
                        ((i.id !== l && (null == d ? void 0 : d.has(i.id)) && (i.id !== s || l === s)) ||
                            (l === i.id && (t = !0),
                            e.push({
                                value: i.id,
                                label: (0, c.F6)(i, g.default, h.Z)
                            })));
            return (
                null == l ||
                    t ||
                    null == E ||
                    e.push({
                        value: l,
                        label: E.name
                    }),
                e
            );
        }, [N, l, E, j, d, s]);
    return (0, i.jsx)(o.PhF, {
        placeholder: _.intl.string(_.t.r2pts7),
        options: b,
        select: function (e) {
            null == e
                ? (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7590'), n.e('45094'), n.e('77389')]).then(n.bind(n, 797671));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              guildId: t,
                              onSubmit: v
                          });
                  })
                : v(e);
        },
        isSelected: (e) => null != l && f(e) === f(l),
        serialize: f,
        renderOptionLabel: I,
        renderOptionValue: (e) => {
            let [t] = e;
            return I(t);
        },
        'aria-labelledby': C
    });
}
