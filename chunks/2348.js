n.d(t, { Z: () => S }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(692547),
    o = n(755721),
    c = n(481060),
    d = n(239091),
    u = n(111028),
    m = n(977258),
    g = n(637853),
    p = n(473403),
    f = n(216306),
    h = n(743475),
    b = n(827907),
    x = n(868814),
    j = n(981631),
    _ = n(388032),
    v = n(813878);
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
        l = (0, b.Mf)(i.id);
    return "null" === i.id
        ? (0, r.jsx)("div", {
              className: a()(v.categoryRow, v.uncategorized),
              children: (0, r.jsx)(c.Text, {
                  className: v.categoryText,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: i.name,
              }),
          })
        : (0, r.jsxs)(c.P3F, {
              className: a()(v.categoryRow, { [v.uncategorized]: "null" === i.id }),
              onContextMenu: (e) => {
                  (0, d.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e("90508"), n.e("68294"), n.e("8965")]).then(
                          n.bind(n, 139035),
                      );
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
                      className: v.categoryText,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: i.name,
                  }),
                  (0, r.jsx)(o.$q, {
                      "aria-checked": l,
                      value: l,
                      type: o.M0.INVERTED,
                      className: v.checkbox,
                      displayOnly: !0,
                  }),
              ],
          });
}
let N = i.memo(function () {
        return (0, r.jsx)("div", { className: v.separator });
    }),
    E = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            c.Text,
            {
                variant: "text-xs/normal",
                className: v.subtitleSeparator,
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
            S = (0, b.Mf)(t.id, i.id),
            T = (0, b.t4)(t.id, i.id),
            P = (0, b.EH)(t.id, i.id),
            w = (0, b.lL)(l.id, i.id),
            R = null != (0, x.Z)(l).find((e) => e.id === t.id),
            Z = (0, g.mn)(t.id),
            D = (e) => {
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
                              n.e("68294"),
                              n.e("18320"),
                              n.e("97755"),
                              n.e("83331"),
                              n.e("76168"),
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
                              n.e("5410"),
                              n.e("79695"),
                              n.e("90508"),
                              n.e("33285"),
                              n.e("68294"),
                              n.e("99534"),
                              n.e("76676"),
                              n.e("35755"),
                              n.e("69634"),
                              n.e("37220"),
                              n.e("46653"),
                              n.e("91315"),
                              n.e("18320"),
                              n.e("97755"),
                              n.e("36745"),
                              n.e("62987"),
                              n.e("93077"),
                              n.e("55196"),
                              n.e("46763"),
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
                                        className: a()(v.channelRow, {
                                            [v.firstChannel]: f,
                                            [v.lastChannel]: C,
                                            [v.disabled]: T,
                                        }),
                                    },
                                    e,
                                ),
                                {
                                    onClick: D,
                                    onContextMenu: A,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: v.channelInfo,
                                            children: (0, r.jsxs)("div", {
                                                className: v.channelName,
                                                children: [
                                                    (0, r.jsx)(p._W, {
                                                        channel: t,
                                                        guild: l,
                                                    }),
                                                    (0, r.jsx)(u.Z, {
                                                        className: v.__invalid_name,
                                                        children: (0, r.jsx)(c.Text, {
                                                            className: v.channelText,
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
                                                                      className: v.channelSubtitle,
                                                                      color: "text-brand",
                                                                      children: _.intl.string(_.t.mPxmeH),
                                                                  }),
                                                              ],
                                                          })
                                                        : null,
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: v.channelActions,
                                            children: (0, m.s)(t.guild_id, t.id)
                                                ? (0, r.jsx)(o.$q, {
                                                      "aria-checked": S,
                                                      value: S,
                                                      type: o.M0.INVERTED,
                                                      disabled: T,
                                                      color: Z
                                                          ? s.Z.colors.BG_BRAND.css
                                                          : s.Z.colors.BUTTON_SECONDARY_BACKGROUND.css,
                                                      innerClassName: v.checkboxInner,
                                                      displayOnly: !0,
                                                  })
                                                : (0, r.jsx)(c.zxk, {
                                                      size: "sm",
                                                      variant: "secondary",
                                                      text: _.intl.string(_.t.zA9d1N),
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
    let { categories: t, guild: n, className: l, hasSidebar: a } = e,
        s = i.useCallback(
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
                    s = t[l.channel.id][i];
                return null == s
                    ? null
                    : (0, r.jsx)(
                          I,
                          {
                              category: l.channel,
                              channel: s.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[l.channel.id].length - 1 === i,
                              tooltipDirection: a ? "right" : "top",
                          },
                          s.channel.id,
                      );
            },
            [t, n, a],
        ),
        c = (0, f.tn)(n.id, t, 64);
    return (0, r.jsx)("div", {
        className: l,
        children: c.map((e, t) => {
            let n = s(t),
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
