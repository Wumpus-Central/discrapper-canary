n.d(t, { Z: () => O }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(131704),
    m = n(324067),
    g = n(699516),
    p = n(594174),
    h = n(303737),
    f = n(981631),
    b = n(388032),
    x = n(621885);
function j(e) {
    return String(e);
}
function N(e) {
    let { icon: t, title: n, subtitle: i, className: s } = e;
    return (0, r.jsxs)('div', {
        className: a()(x.label, s),
        children: [
            t,
            (0, r.jsxs)('div', {
                className: x.labelText,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'none',
                        className: x.labelTitle,
                        children: n
                    }),
                    null != i && '' !== i
                        ? (0, r.jsx)(o.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              className: x.labelSubtitle,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function _() {
    return (0, r.jsx)(N, {
        icon: (0, r.jsx)(o.qJs, {
            size: 'md',
            color: 'currentColor',
            className: x.labelIcon
        }),
        title: b.NW.string(b.t.d7YJMD),
        className: x.createLabel
    });
}
function v(e) {
    var t;
    let { channelId: n } = e,
        i = (0, h.m7)(n),
        s = (0, h.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : f.lds);
    if (null == i) return null;
    let a = (0, d.KS)(i),
        l = (0, c.F6)(i, p.default, g.Z),
        o = null != s ? (0, c.F6)(s, p.default, g.Z) : void 0;
    return (0, r.jsx)(N, {
        icon: null != a && (0, r.jsx)(a, { className: x.labelIcon }),
        title: l,
        subtitle: o
    });
}
function C(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(v, { channelId: t }) : (0, r.jsx)(_, {});
}
function O(e) {
    let { guildId: t, value: s, initialChannelId: a, omitChannelIds: d, 'aria-labelledby': x, onChange: N } = e,
        _ = b.NW.string(b.t.d7YJMD),
        v = (0, l.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        O = (0, h.m7)(null != s ? s : f.lds),
        y = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: _
                    }
                ],
                t = !1;
            for (let n of v._categories)
                for (let { channel: r } of v[n.channel.id])
                    ((0, u.r8)(r.type) || (0, u.bw)(r.type)) &&
                        ((r.id !== s && (null == d ? void 0 : d.has(r.id)) && (r.id !== a || s === a)) ||
                            (s === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, c.F6)(r, p.default, g.Z)
                            })));
            return (
                null == s ||
                    t ||
                    null == O ||
                    e.push({
                        value: s,
                        label: O.name
                    }),
                e
            );
        }, [_, s, O, v, d, a]);
    return (0, r.jsx)(o.PhF, {
        placeholder: b.NW.string(b.t.r2pts7),
        options: y,
        select: function (e) {
            null == e
                ? (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7590'), n.e('45094'), n.e('99927')]).then(n.bind(n, 797671));
                      return (n) => {
                          var i, s;
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
                              (s = s =
                                  {
                                      guildId: t,
                                      onSubmit: N
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(s)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                    }),
                              i)
                          );
                      };
                  })
                : N(e);
        },
        isSelected: (e) => null != s && j(e) === j(s),
        serialize: j,
        renderOptionLabel: C,
        renderOptionValue: (e) => {
            let [t] = e;
            return C(t);
        },
        'aria-labelledby': x
    });
}
