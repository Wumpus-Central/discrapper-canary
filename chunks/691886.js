n.d(t, { Z: () => C }), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
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
function N(e) {
    let { icon: t, title: n, subtitle: i, className: s } = e;
    return (0, r.jsxs)('div', {
        className: l()(b.label, s),
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
    return (0, r.jsx)(N, {
        icon: (0, r.jsx)(o.qJs, {
            size: 'md',
            color: 'currentColor',
            className: b.labelIcon
        }),
        title: x.NW.string(x.t.d7YJMD),
        className: b.createLabel
    });
}
function v(e) {
    var t;
    let { channelId: n } = e,
        i = (0, h.m7)(n),
        s = (0, h.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : f.lds);
    if (null == i) return null;
    let l = (0, d.KS)(i),
        a = (0, c.F6)(i, p.default, g.Z),
        o = null != s ? (0, c.F6)(s, p.default, g.Z) : void 0;
    return (0, r.jsx)(N, {
        icon: null != l && (0, r.jsx)(l, { className: b.labelIcon }),
        title: a,
        subtitle: o
    });
}
function O(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(v, { channelId: t }) : (0, r.jsx)(_, {});
}
function C(e) {
    let { guildId: t, value: s, initialChannelId: l, omitChannelIds: d, 'aria-labelledby': b, onChange: N } = e,
        _ = x.NW.string(x.t.d7YJMD),
        v = (0, a.e7)([m.Z], () => m.Z.getCategories(t), [t]),
        C = (0, h.m7)(null != s ? s : f.lds),
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
                        ((r.id !== s && (null == d ? void 0 : d.has(r.id)) && (r.id !== l || s === l)) ||
                            (s === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, c.F6)(r, p.default, g.Z)
                            })));
            return (
                null == s ||
                    t ||
                    null == C ||
                    e.push({
                        value: s,
                        label: C.name
                    }),
                e
            );
        }, [_, s, C, v, d, l]);
    return (0, r.jsx)(o.PhF, {
        placeholder: x.NW.string(x.t.r2pts7),
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
        renderOptionLabel: O,
        renderOptionValue: (e) => {
            let [t] = e;
            return O(t);
        },
        'aria-labelledby': b
    });
}
