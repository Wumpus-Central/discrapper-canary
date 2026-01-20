n.d(t, { Z: () => E }), n(539854), n(388685);
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
    f = n(324067),
    m = n(699516),
    b = n(594174),
    p = n(303737),
    h = n(981631),
    x = n(388032),
    j = n(817667);
function v(e) {
    return String(e);
}
function O(e) {
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
function y() {
    return (0, r.jsx)(O, {
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
        i = (0, p.m7)(n),
        l = (0, p.m7)(null != (t = null == i ? void 0 : i.parent_id) ? t : h.lds);
    if (null == i) return null;
    let a = (0, u.KS)(i),
        s = (0, d.F6)(i, b.default, m.Z),
        o = null != l ? (0, d.F6)(l, b.default, m.Z) : void 0;
    return (0, r.jsx)(O, {
        icon: null != a && (0, r.jsx)(a, { className: j.labelIcon }),
        title: s,
        subtitle: o,
    });
}
function N(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(C, { channelId: t }) : (0, r.jsx)(y, {});
}
function E(e) {
    let {
            label: t,
            guildId: l,
            value: a,
            initialChannelId: u,
            omitChannelIds: j,
            "aria-labelledby": O,
            onChange: y,
        } = e,
        C = x.intl.string(x.t.d7YJMK),
        E = (0, s.e7)([f.Z], () => f.Z.getCategories(l), [l]),
        I = (0, p.m7)(null != a ? a : h.lds),
        S = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: C,
                    },
                ],
                t = !1;
            for (let n of E._categories)
                for (let { channel: r } of E[n.channel.id])
                    ((0, g.r8)(r.type) || (0, g.bw)(r.type)) &&
                        ((r.id !== a && (null == j ? void 0 : j.has(r.id)) && (r.id !== u || a === u)) ||
                            (a === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, d.F6)(r, b.default, m.Z),
                            })));
            return (
                null == a ||
                    t ||
                    null == I ||
                    e.push({
                        value: a,
                        label: I.name,
                    }),
                e
            );
        }, [C, a, I, E, j, u]);
    return (0, r.jsx)(o.B6, {
        label: t,
        placeholder: x.intl.string(x.t.r2ptsz),
        options: S,
        select: function (e) {
            null == e
                ? (0, c.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e("33285"), n.e("29497"), n.e("81690")]).then(
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
                                      onSubmit: y,
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
                : y(e);
        },
        isSelected: (e) => null != a && v(e) === v(a),
        serialize: v,
        renderOptionLabel: N,
        renderOptionValue: (e) => {
            let [t] = e;
            return N(t);
        },
        "aria-labelledby": O,
        "data-migration-pending": !0,
    });
}
