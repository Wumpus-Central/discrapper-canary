n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(471445),
    d = n(131704),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    f = n(303737),
    h = n(981631),
    x = n(388032),
    b = n(621885);
function j(e) {
    return String(e);
}
function _(e) {
    let { icon: t, title: n, subtitle: i, className: l } = e;
    return (0, r.jsxs)('div', {
        className: s()(b.label, l),
        children: [
            t,
            (0, r.jsxs)('div', {
                className: b.labelText,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'none',
                        className: b.labelTitle,
                        children: n
                    }),
                    null != i && '' !== i
                        ? (0, r.jsx)(o.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              className: b.labelSubtitle,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function v() {
    return (0, r.jsx)(_, {
        icon: (0, r.jsx)(o.qJs, {
            size: 'md',
            color: 'currentColor',
            className: b.labelIcon
        }),
        title: x.intl.string(x.t.d7YJMD),
        className: b.createLabel
    });
}
function O(e) {
    var t;
    let { channelId: n } = e,
        i = (0, f.m7)(n),
        l = (0, f.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : h.lds);
    if (null == i) return null;
    let s = (0, u.KS)(i),
        a = (0, c.F6)(i, p.default, g.Z),
        o = null != l ? (0, c.F6)(l, p.default, g.Z) : void 0;
    return (0, r.jsx)(_, {
        icon: null != s && (0, r.jsx)(s, { className: b.labelIcon }),
        title: a,
        subtitle: o
    });
}
function C(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(O, { channelId: t }) : (0, r.jsx)(v, {});
}
function y(e) {
    let { guildId: t, value: l, initialChannelId: s, omitChannelIds: u, 'aria-labelledby': b, onChange: _ } = e,
        v = x.intl.string(x.t.d7YJMD),
        O = (0, a.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        y = (0, f.m7)(null != l ? l : h.lds),
        N = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: v
                    }
                ],
                t = !1;
            for (let n of O._categories)
                for (let { channel: r } of O[n.channel.id])
                    ((0, d.r8)(r.type) || (0, d.bw)(r.type)) &&
                        ((r.id !== l && (null == u ? void 0 : u.has(r.id)) && (r.id !== s || l === s)) ||
                            (l === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, c.F6)(r, p.default, g.Z)
                            })));
            return (
                null == l ||
                    t ||
                    null == y ||
                    e.push({
                        value: l,
                        label: y.name
                    }),
                e
            );
        }, [v, l, y, O, u, s]);
    return (0, r.jsx)(o.PhF, {
        placeholder: x.intl.string(x.t.r2pts7),
        options: N,
        select: function (e) {
            null == e
                ? (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7590'), n.e('45094'), n.e('99927')]).then(n.bind(n, 797671));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (l = l =
                                  {
                                      guildId: t,
                                      onSubmit: _
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      };
                  })
                : _(e);
        },
        isSelected: (e) => null != l && j(e) === j(l),
        serialize: j,
        renderOptionLabel: C,
        renderOptionValue: (e) => {
            let [t] = e;
            return C(t);
        },
        'aria-labelledby': b
    });
}
