(n.d(t, { Z: () => C }), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(131704),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    h = n(303737),
    f = n(981631),
    x = n(388032),
    b = n(621885);
function j(e) {
    return String(e);
}
function v(e) {
    let { icon: t, title: n, subtitle: i, className: l } = e;
    return (0, r.jsxs)('div', {
        className: a()(b.label, l),
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
function _() {
    return (0, r.jsx)(v, {
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
        i = (0, h.m7)(n),
        l = (0, h.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : f.lds);
    if (null == i) return null;
    let a = (0, d.KS)(i),
        s = (0, c.F6)(i, p.default, g.Z),
        o = null != l ? (0, c.F6)(l, p.default, g.Z) : void 0;
    return (0, r.jsx)(v, {
        icon: null != a && (0, r.jsx)(a, { className: b.labelIcon }),
        title: s,
        subtitle: o
    });
}
function y(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(O, { channelId: t }) : (0, r.jsx)(_, {});
}
function C(e) {
    let { guildId: t, value: l, initialChannelId: a, omitChannelIds: d, 'aria-labelledby': b, onChange: v } = e,
        _ = x.intl.string(x.t.d7YJMD),
        O = (0, s.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        C = (0, h.m7)(null != l ? l : f.lds),
        N = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: _
                    }
                ],
                t = !1;
            for (let n of O._categories)
                for (let { channel: r } of O[n.channel.id])
                    ((0, u.r8)(r.type) || (0, u.bw)(r.type)) &&
                        ((r.id !== l && (null == d ? void 0 : d.has(r.id)) && (r.id !== a || l === a)) ||
                            (l === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, c.F6)(r, p.default, g.Z)
                            })));
            return (
                null == l ||
                    t ||
                    null == C ||
                    e.push({
                        value: l,
                        label: C.name
                    }),
                e
            );
        }, [_, l, C, O, d, a]);
    return (0, r.jsx)(o.PhF, {
        placeholder: x.intl.string(x.t.r2pts7),
        options: N,
        select: function (e) {
            null == e
                ? (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7590'), n.e('45094'), n.e('55151')]).then(n.bind(n, 797671));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, n)),
                              (l = l =
                                  {
                                      guildId: t,
                                      onSubmit: v
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
                : v(e);
        },
        isSelected: (e) => null != l && j(e) === j(l),
        serialize: j,
        renderOptionLabel: y,
        renderOptionValue: (e) => {
            let [t] = e;
            return y(t);
        },
        'aria-labelledby': b
    });
}
