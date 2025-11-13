n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(471445),
    u = n(131704),
    g = n(324067),
    m = n(699516),
    p = n(594174),
    f = n(303737),
    h = n(981631),
    b = n(388032),
    x = n(858783);
function j(e) {
    return String(e);
}
function _(e) {
    let { icon: t, title: n, subtitle: i, className: l } = e;
    return (0, r.jsxs)("div", {
        className: a()(x.label, l),
        children: [
            t,
            (0, r.jsxs)("div", {
                className: x.labelText,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "none",
                        className: x.labelTitle,
                        children: n,
                    }),
                    null != i && "" !== i
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: x.labelSubtitle,
                              children: i,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function v() {
    return (0, r.jsx)(_, {
        icon: (0, r.jsx)(o.qJs, {
            size: "md",
            color: "currentColor",
            className: x.labelIcon,
        }),
        title: b.intl.string(b.t.d7YJMK),
        className: x.createLabel,
    });
}
function O(e) {
    var t;
    let { channelId: n } = e,
        i = (0, f.m7)(n),
        l = (0, f.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : h.lds);
    if (null == i) return null;
    let a = (0, d.KS)(i),
        s = (0, c.F6)(i, p.default, m.Z),
        o = null != l ? (0, c.F6)(l, p.default, m.Z) : void 0;
    return (0, r.jsx)(_, {
        icon: null != a && (0, r.jsx)(a, { className: x.labelIcon }),
        title: s,
        subtitle: o,
    });
}
function C(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(O, { channelId: t }) : (0, r.jsx)(v, {});
}
function y(e) {
    let {
            label: t,
            guildId: l,
            value: a,
            initialChannelId: d,
            omitChannelIds: x,
            "aria-labelledby": _,
            onChange: v,
        } = e,
        O = b.intl.string(b.t.d7YJMK),
        y = (0, s.e7)([g.Z], () => g.Z.getCategories(l), [l]),
        N = (0, f.m7)(null != a ? a : h.lds),
        E = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: O,
                    },
                ],
                t = !1;
            for (let n of y._categories)
                for (let { channel: r } of y[n.channel.id])
                    ((0, u.r8)(r.type) || (0, u.bw)(r.type)) &&
                        ((r.id !== a && (null == x ? void 0 : x.has(r.id)) && (r.id !== d || a === d)) ||
                            (a === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, c.F6)(r, p.default, m.Z),
                            })));
            return (
                null == a ||
                    t ||
                    null == N ||
                    e.push({
                        value: a,
                        label: N.name,
                    }),
                e
            );
        }, [O, a, N, y, x, d]);
    return (0, r.jsx)(o.PhF, {
        label: t,
        placeholder: b.intl.string(b.t.r2ptsz),
        options: E,
        select: function (e) {
            null == e
                ? (0, o.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("33285"), n.e("29497"), n.e("17474")]).then(
                          n.bind(n, 797671),
                      );
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (i = i =
                                  {
                                      guildId: l,
                                      onSubmit: v,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n),
                          );
                      };
                  })
                : v(e);
        },
        isSelected: (e) => null != a && j(e) === j(a),
        serialize: j,
        renderOptionLabel: C,
        renderOptionValue: (e) => {
            let [t] = e;
            return C(t);
        },
        "aria-labelledby": _,
    });
}
