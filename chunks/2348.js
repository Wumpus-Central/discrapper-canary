n.d(t, { Z: () => T }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(692547),
    o = n(28664),
    c = n(755721),
    d = n(481060),
    u = n(239091),
    m = n(111028),
    g = n(977258),
    p = n(637853),
    f = n(473403),
    h = n(216306),
    x = n(743475),
    b = n(827907),
    j = n(868814),
    _ = n(981631),
    v = n(388032),
    C = n(333999);
function O(e) {
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
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { guild: t, channel: i } = e,
        l = (0, b.Mf)(i.id);
    return "null" === i.id
        ? (0, r.jsx)("div", {
              className: s()(C.categoryRow, C.uncategorized),
              children: (0, r.jsx)(d.Text, {
                  className: C.categoryText,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: i.name,
              }),
          })
        : (0, r.jsxs)(d.P3F, {
              className: s()(C.categoryRow, { [C.uncategorized]: "null" === i.id }),
              onContextMenu: (e) => {
                  (0, u.jW)(e, async () => {
                      let { default: e } = await Promise.all([
                          n.e("90508"),
                          n.e("24358"),
                          n.e("8965"),
                          n.e("98350"),
                      ]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              y(O({}, n), {
                                  channel: i,
                                  guild: t,
                              }),
                          );
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, g.s)(t.id, i.id)
                      ? (0, x.pt)(i.id)
                      : (0, d.ZDy)(async () => {
                            let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    y(O({}, n), {
                                        guildId: t.id,
                                        startingChannelId: i.id,
                                    }),
                                );
                        }),
                  !0
              ),
              children: [
                  (0, r.jsx)(d.Text, {
                      className: C.categoryText,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: i.name,
                  }),
                  (0, r.jsx)(c.$q, {
                      "aria-checked": l,
                      value: l,
                      type: c.M0.INVERTED,
                      className: C.checkbox,
                      displayOnly: !0,
                  }),
              ],
          });
}
let E = i.memo(function () {
        return (0, r.jsx)("div", { className: C.separator });
    }),
    I = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            d.Text,
            {
                variant: "text-xs/normal",
                className: C.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    S = i.memo(function (e) {
        let {
                channel: t,
                category: i,
                guild: l,
                isFirstChannel: h,
                isLastChannel: N,
                tooltipDirection: S = "right",
            } = e,
            T = (0, b.Mf)(t.id, i.id),
            P = (0, b.t4)(t.id, i.id),
            w = (0, b.EH)(t.id, i.id),
            R = (0, b.lL)(l.id, i.id),
            Z = null != (0, j.Z)(l).find((e) => e.id === t.id),
            D = (0, p.mn)(t.id);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.u, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: null != w ? w : R,
                    delay: 500,
                    position: S,
                    children: (0, r.jsxs)(d.P3F, {
                        className: s()(C.channelRow, {
                            [C.firstChannel]: h,
                            [C.lastChannel]: N,
                            [C.disabled]: P,
                        }),
                        onClick: (e) => {
                            if (!P)
                                return (
                                    e.stopPropagation(),
                                    (0, g.s)(l.id, t.id)
                                        ? (0, x.pt)(t.id)
                                        : (0, d.ZDy)(async () => {
                                              let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                                              return (n) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      y(O({}, n), {
                                                          guildId: l.id,
                                                          startingChannelId: t.id,
                                                      }),
                                                  );
                                          }),
                                    !0
                                );
                        },
                        onContextMenu: (e) => {
                            t.isGuildVocal()
                                ? (0, u.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("79695"),
                                          n.e("90508"),
                                          n.e("24358"),
                                          n.e("18320"),
                                          n.e("83331"),
                                          n.e("19899"),
                                      ]).then(n.bind(n, 213202));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(O({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  })
                                : (0, u.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("75387"),
                                          n.e("79695"),
                                          n.e("90508"),
                                          n.e("6915"),
                                          n.e("33285"),
                                          n.e("46154"),
                                          n.e("64838"),
                                          n.e("43342"),
                                          n.e("91315"),
                                          n.e("30474"),
                                          n.e("24358"),
                                          n.e("38342"),
                                          n.e("63962"),
                                          n.e("35755"),
                                          n.e("56785"),
                                          n.e("37220"),
                                          n.e("18320"),
                                          n.e("95546"),
                                          n.e("42300"),
                                          n.e("93077"),
                                          n.e("63373"),
                                          n.e("57955"),
                                      ]).then(n.bind(n, 373651));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(O({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, r.jsx)("div", {
                                className: C.channelInfo,
                                children: (0, r.jsxs)("div", {
                                    className: C.channelName,
                                    children: [
                                        (0, r.jsx)(f._W, {
                                            channel: t,
                                            guild: l,
                                        }),
                                        (0, r.jsx)(m.Z, {
                                            className: C.__invalid_name,
                                            children: (0, r.jsx)(d.Text, {
                                                className: C.channelText,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: P ? "text-muted" : "text-default",
                                                children: t.name,
                                            }),
                                        }),
                                        Z
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(I, { index: 0 }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: "text-xs/medium",
                                                          className: C.channelSubtitle,
                                                          color: "text-brand",
                                                          children: v.intl.string(v.t.mPxmeH),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: C.channelActions,
                                children: (0, g.s)(t.guild_id, t.id)
                                    ? (0, r.jsx)(c.$q, {
                                          "aria-checked": T,
                                          value: T,
                                          type: c.M0.INVERTED,
                                          disabled: P,
                                          color: D
                                              ? a.Z.colors.BG_BRAND.css
                                              : a.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                          innerClassName: C.checkboxInner,
                                          displayOnly: !0,
                                      })
                                    : (0, r.jsx)(d.zxk, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: v.intl.string(v.t.zA9d1N),
                                          icon: d.mBM,
                                          onClick: _.dG4,
                                      }),
                            }),
                        ],
                    }),
                }),
                !N && (0, r.jsx)(E, {}),
            ],
        });
    });
function T(e) {
    let { categories: t, guild: n, className: l, hasSidebar: s } = e,
        a = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    N,
                    {
                        channel: i.channel,
                        guild: n,
                    },
                    i.channel.id,
                );
            },
            [t, n],
        ),
        o = i.useCallback(
            (e, i) => {
                let l = t._categories[e],
                    a = t[l.channel.id][i];
                return null == a
                    ? null
                    : (0, r.jsx)(
                          S,
                          {
                              category: l.channel,
                              channel: a.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[l.channel.id].length - 1 === i,
                              tooltipDirection: s ? "right" : "top",
                          },
                          a.channel.id,
                      );
            },
            [t, n, s],
        ),
        c = (0, h.tn)(n.id, t, 64);
    return (0, r.jsx)("div", {
        className: l,
        children: c.map((e, t) => {
            let n = a(t),
                i = [],
                l = e.rowCount;
            if (0 === l) return null;
            for (let e = 0; e < l; e++) i.push(o(t, e));
            return (0, r.jsxs)(r.Fragment, {
                children: [n, i],
            });
        }),
    });
}
