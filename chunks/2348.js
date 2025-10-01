n.d(t, { Z: () => S }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(692547),
    o = n(755721),
    c = n(481060),
    d = n(239091),
    u = n(111028),
    m = n(977258),
    g = n(637853),
    p = n(473403),
    f = n(216306),
    h = n(743475),
    x = n(827907),
    b = n(868814),
    j = n(981631),
    v = n(388032),
    _ = n(333999);
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
function C(e) {
    let { guild: t, channel: i } = e,
        l = (0, x.Mf)(i.id);
    return "null" === i.id
        ? (0, r.jsx)("div", {
              className: s()(_.categoryRow, _.uncategorized),
              children: (0, r.jsx)(c.Text, {
                  className: _.categoryText,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: i.name,
              }),
          })
        : (0, r.jsxs)(c.P3F, {
              className: s()(_.categoryRow, { [_.uncategorized]: "null" === i.id }),
              onContextMenu: (e) => {
                  (0, d.jW)(e, async () => {
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
                  (0, m.s)(t.id, i.id)
                      ? (0, h.pt)(i.id)
                      : (0, c.ZDy)(async () => {
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
                  (0, r.jsx)(c.Text, {
                      className: _.categoryText,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: i.name,
                  }),
                  (0, r.jsx)(o.$q, {
                      "aria-checked": l,
                      value: l,
                      type: o.M0.INVERTED,
                      className: _.checkbox,
                      displayOnly: !0,
                  }),
              ],
          });
}
let N = i.memo(function () {
        return (0, r.jsx)("div", { className: _.separator });
    }),
    E = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            c.Text,
            {
                variant: "text-xs/normal",
                className: _.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    I = i.memo(function (e) {
        let {
                channel: t,
                category: i,
                guild: l,
                isFirstChannel: f,
                isLastChannel: C,
                tooltipDirection: I = "right",
            } = e,
            S = (0, x.Mf)(t.id, i.id),
            T = (0, x.t4)(t.id, i.id),
            P = (0, x.EH)(t.id, i.id),
            w = (0, x.lL)(l.id, i.id),
            R = null != (0, b.Z)(l).find((e) => e.id === t.id),
            D = (0, g.mn)(t.id),
            Z = (e) => {
                if (!T)
                    return (
                        e.stopPropagation(),
                        (0, m.s)(l.id, t.id)
                            ? (0, h.pt)(t.id)
                            : (0, c.ZDy)(async () => {
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
            A = (e) => {
                t.isGuildVocal()
                    ? (0, d.jW)(e, async () => {
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
                    : (0, d.jW)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("75387"),
                              n.e("79695"),
                              n.e("90508"),
                              n.e("33285"),
                              n.e("46154"),
                              n.e("64838"),
                              n.e("43342"),
                              n.e("91315"),
                              n.e("30474"),
                              n.e("24358"),
                              n.e("36084"),
                              n.e("38342"),
                              n.e("63962"),
                              n.e("35755"),
                              n.e("56785"),
                              n.e("37220"),
                              n.e("18320"),
                              n.e("95546"),
                              n.e("49613"),
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
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.ua7, {
                    text: null != P ? P : w,
                    delay: 500,
                    position: I,
                    children: (e) =>
                        (0, r.jsxs)(
                            c.P3F,
                            y(
                                O(
                                    {
                                        className: s()(_.channelRow, {
                                            [_.firstChannel]: f,
                                            [_.lastChannel]: C,
                                            [_.disabled]: T,
                                        }),
                                    },
                                    e,
                                ),
                                {
                                    onClick: Z,
                                    onContextMenu: A,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: _.channelInfo,
                                            children: (0, r.jsxs)("div", {
                                                className: _.channelName,
                                                children: [
                                                    (0, r.jsx)(p._W, {
                                                        channel: t,
                                                        guild: l,
                                                    }),
                                                    (0, r.jsx)(u.Z, {
                                                        className: _.__invalid_name,
                                                        children: (0, r.jsx)(c.Text, {
                                                            className: _.channelText,
                                                            variant: "text-md/medium",
                                                            lineClamp: 1,
                                                            color: T ? "text-muted" : "text-default",
                                                            children: t.name,
                                                        }),
                                                    }),
                                                    R
                                                        ? (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  (0, r.jsx)(E, { index: 0 }),
                                                                  (0, r.jsx)(c.Text, {
                                                                      variant: "text-xs/medium",
                                                                      className: _.channelSubtitle,
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
                                            className: _.channelActions,
                                            children: (0, m.s)(t.guild_id, t.id)
                                                ? (0, r.jsx)(o.$q, {
                                                      "aria-checked": S,
                                                      value: S,
                                                      type: o.M0.INVERTED,
                                                      disabled: T,
                                                      color: D
                                                          ? a.Z.colors.BG_BRAND.css
                                                          : a.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                                      innerClassName: _.checkboxInner,
                                                      displayOnly: !0,
                                                  })
                                                : (0, r.jsx)(c.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: v.intl.string(v.t.zA9d1N),
                                                      icon: c.mBM,
                                                      onClick: j.dG4,
                                                  }),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
                !C && (0, r.jsx)(N, {}),
            ],
        });
    });
function S(e) {
    let { categories: t, guild: n, className: l, hasSidebar: s } = e,
        a = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    C,
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
                          I,
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
        c = (0, f.tn)(n.id, t, 64);
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
