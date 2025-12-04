n.d(t, { Z: () => N }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(199849),
    c = n(481060),
    d = n(933557),
    u = n(471445),
    g = n(131704),
    m = n(324067),
    p = n(699516),
    f = n(594174),
    h = n(303737),
    b = n(981631),
    x = n(388032),
    j = n(858783);
function _(e) {
    return String(e);
}
function v(e) {
    let { icon: t, title: n, subtitle: i, className: l } = e;
    return (0, r.jsxs)("div", {
        className: a()(j.label, l),
        children: [
            t,
            (0, r.jsxs)("div", {
                className: j.labelText,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "none",
                        className: j.labelTitle,
                        children: n,
                    }),
                    null != i && "" !== i
                        ? (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: j.labelSubtitle,
                              children: i,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function O() {
    return (0, r.jsx)(v, {
        icon: (0, r.jsx)(c.qJs, {
            size: "md",
            color: "currentColor",
            className: j.labelIcon,
        }),
        title: x.intl.string(x.t.d7YJMK),
        className: j.createLabel,
    });
}
function C(e) {
    var t;
    let { channelId: n } = e,
        i = (0, h.m7)(n),
        l = (0, h.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : b.lds);
    if (null == i) return null;
    let a = (0, u.KS)(i),
        s = (0, d.F6)(i, f.default, p.Z),
        o = null != l ? (0, d.F6)(l, f.default, p.Z) : void 0;
    return (0, r.jsx)(v, {
        icon: null != a && (0, r.jsx)(a, { className: j.labelIcon }),
        title: s,
        subtitle: o,
    });
}
function y(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(C, { channelId: t }) : (0, r.jsx)(O, {});
}
function N(e) {
    let {
            label: t,
            guildId: l,
            value: a,
            initialChannelId: u,
            omitChannelIds: j,
            "aria-labelledby": v,
            onChange: O,
        } = e,
        C = x.intl.string(x.t.d7YJMK),
        N = (0, s.e7)([m.Z], () => m.Z.getCategories(l), [l]),
        E = (0, h.m7)(null != a ? a : b.lds),
        I = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: C,
                    },
                ],
                t = !1;
            for (let n of N._categories)
                for (let { channel: r } of N[n.channel.id])
                    ((0, g.r8)(r.type) || (0, g.bw)(r.type)) &&
                        ((r.id !== a && (null == j ? void 0 : j.has(r.id)) && (r.id !== u || a === u)) ||
                            (a === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, d.F6)(r, f.default, p.Z),
                            })));
            return (
                null == a ||
                    t ||
                    null == E ||
                    e.push({
                        value: a,
                        label: E.name,
                    }),
                e
            );
        }, [C, a, E, N, j, u]);
    return (0, r.jsx)(o.B6, {
        label: t,
        placeholder: x.intl.string(x.t.r2ptsz),
        options: I,
        select: function (e) {
            null == e
                ? (0, c.ZDy)(async () => {
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
                                      onSubmit: O,
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
                : O(e);
        },
        isSelected: (e) => null != a && _(e) === _(a),
        serialize: _,
        renderOptionLabel: y,
        renderOptionValue: (e) => {
            let [t] = e;
            return y(t);
        },
        "aria-labelledby": v,
    });
}
