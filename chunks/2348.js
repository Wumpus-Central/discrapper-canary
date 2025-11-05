n.d(t, { Z: () => E }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(194983),
    o = n(28664),
    c = n(481060),
    d = n(239091),
    u = n(977258),
    g = n(473403),
    m = n(216306),
    p = n(743475),
    f = n(827907),
    h = n(868814),
    b = n(981631),
    x = n(388032),
    j = n(813878);
function v(e) {
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
function _(e, t) {
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
function O(e) {
    let { guild: t, channel: i } = e,
        l = (0, f.Mf)(i.id);
    return "null" === i.id
        ? (0, r.jsx)("div", {
              className: a()(j.categoryRow, j.uncategorized),
              children: (0, r.jsx)(c.Text, {
                  className: j.categoryText,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: i.name,
              }),
          })
        : (0, r.jsxs)(c.P3F, {
              className: a()(j.categoryRow, { [j.uncategorized]: "null" === i.id }),
              onContextMenu: (e) => {
                  (0, d.jW)(e, async () => {
                      let { default: e } = await Promise.all([
                          n.e("90508"),
                          n.e("24358"),
                          n.e("8965"),
                          n.e("23899"),
                      ]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              _(v({}, n), {
                                  channel: i,
                                  guild: t,
                              }),
                          );
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.s)(t.id, i.id)
                      ? (0, p.pt)(i.id)
                      : (0, c.ZDy)(async () => {
                            let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    _(v({}, n), {
                                        guildId: t.id,
                                        startingChannelId: i.id,
                                    }),
                                );
                        }),
                  !0
              ),
              children: [
                  (0, r.jsx)(c.Text, {
                      className: j.categoryText,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: i.name,
                  }),
                  (0, r.jsx)(c.FZ5, { checked: l }),
              ],
          });
}
let C = i.memo(function () {
        return (0, r.jsx)("div", { className: j.separator });
    }),
    y = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            c.Text,
            {
                variant: "text-xs/normal",
                className: j.subtitleSeparator,
                children: "\xB7",
            },
            "separator-".concat(t),
        );
    }),
    N = i.memo(function (e) {
        let {
                channel: t,
                category: i,
                guild: l,
                isFirstChannel: m,
                isLastChannel: O,
                tooltipDirection: N = "right",
            } = e,
            E = (0, f.Mf)(t.id, i.id),
            I = (0, f.t4)(t.id, i.id),
            S = (0, f.EH)(t.id, i.id),
            T = (0, f.lL)(l.id, i.id),
            P = null != (0, h.Z)(l).find((e) => e.id === t.id);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.u, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: null != S ? S : T,
                    delay: 500,
                    position: N,
                    children: (0, r.jsxs)(c.P3F, {
                        className: a()(j.channelRow, {
                            [j.firstChannel]: m,
                            [j.lastChannel]: O,
                            [j.disabled]: I,
                        }),
                        onClick: (e) => {
                            if (!I)
                                return (
                                    e.stopPropagation(),
                                    (0, u.s)(l.id, t.id)
                                        ? (0, p.pt)(t.id)
                                        : (0, c.ZDy)(async () => {
                                              let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                                              return (n) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      _(v({}, n), {
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
                                ? (0, d.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("79695"),
                                          n.e("90508"),
                                          n.e("24358"),
                                          n.e("18320"),
                                          n.e("83331"),
                                          n.e("56648"),
                                      ]).then(n.bind(n, 213202));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              _(v({}, n), {
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
                                          n.e("6915"),
                                          n.e("33285"),
                                          n.e("64838"),
                                          n.e("89250"),
                                          n.e("24358"),
                                          n.e("38342"),
                                          n.e("35755"),
                                          n.e("86863"),
                                          n.e("37220"),
                                          n.e("91315"),
                                          n.e("30474"),
                                          n.e("95546"),
                                          n.e("88647"),
                                          n.e("14953"),
                                          n.e("18320"),
                                          n.e("96413"),
                                          n.e("65100"),
                                          n.e("32908"),
                                      ]).then(n.bind(n, 373651));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              _(v({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, r.jsx)("div", {
                                className: j.channelInfo,
                                children: (0, r.jsxs)("div", {
                                    className: j.channelName,
                                    children: [
                                        (0, r.jsx)(g._W, {
                                            channel: t,
                                            guild: l,
                                        }),
                                        (0, r.jsx)(s.Z, {
                                            className: j.__invalid_name,
                                            children: (0, r.jsx)(c.Text, {
                                                className: j.channelText,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: I ? "text-muted" : "text-default",
                                                children: t.name,
                                            }),
                                        }),
                                        P
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(y, { index: 0 }),
                                                      (0, r.jsx)(c.Text, {
                                                          variant: "text-xs/medium",
                                                          className: j.channelSubtitle,
                                                          color: "text-brand",
                                                          children: x.intl.string(x.t.mPxmeE),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: j.channelActions,
                                children: (0, u.s)(t.guild_id, t.id)
                                    ? (0, r.jsx)(c.FZ5, {
                                          checked: E,
                                          disabled: I,
                                      })
                                    : (0, r.jsx)(c.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: x.intl.string(x.t.zA9d1J),
                                          icon: c.mBM,
                                          onClick: b.dG4,
                                      }),
                            }),
                        ],
                    }),
                }),
                !O && (0, r.jsx)(C, {}),
            ],
        });
    });
function E(e) {
    let { categories: t, guild: n, className: l, hasSidebar: a } = e,
        s = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    O,
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
                          N,
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
        c = (0, m.tn)(n.id, t, 64);
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
