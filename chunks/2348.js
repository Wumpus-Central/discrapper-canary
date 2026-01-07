n.d(t, { Z: () => I }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(194983),
    o = n(28664),
    c = n(481060),
    d = n(239091),
    u = n(977258),
    g = n(473403),
    f = n(216306),
    m = n(743475),
    b = n(827907),
    p = n(868814),
    h = n(981631),
    x = n(388032),
    j = n(670950);
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
function O(e, t) {
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
                          n.e("68294"),
                          n.e("8965"),
                          n.e("76150"),
                      ]).then(n.bind(n, 139035));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              O(v({}, n), {
                                  channel: i,
                                  guild: t,
                              }),
                          );
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.s)(t.id, i.id)
                      ? (0, m.pt)(i.id)
                      : (0, c.ZDy)(async () => {
                            let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    O(v({}, n), {
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
let y = i.memo(function () {
        return (0, r.jsx)("div", { className: j.separator });
    }),
    N = i.memo(function (e) {
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
    E = i.memo(function (e) {
        let {
                channel: t,
                category: i,
                guild: l,
                isFirstChannel: f,
                isLastChannel: C,
                tooltipDirection: E = "right",
            } = e,
            I = (0, b.Mf)(t.id, i.id),
            S = (0, b.t4)(t.id, i.id),
            _ = (0, b.EH)(t.id, i.id),
            T = (0, b.lL)(l.id, i.id),
            P = null != (0, p.Z)(l).find((e) => e.id === t.id);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.u, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: null != _ ? _ : T,
                    delay: 500,
                    position: E,
                    children: (0, r.jsxs)(c.P3F, {
                        className: a()(j.channelRow, {
                            [j.firstChannel]: f,
                            [j.lastChannel]: C,
                            [j.disabled]: S,
                        }),
                        onClick: (e) => {
                            if (!S)
                                return (
                                    e.stopPropagation(),
                                    (0, u.s)(l.id, t.id)
                                        ? (0, m.pt)(t.id)
                                        : (0, c.ZDy)(async () => {
                                              let { default: e } = await n.e("35641").then(n.bind(n, 89216));
                                              return (n) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      O(v({}, n), {
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
                                          n.e("68294"),
                                          n.e("18320"),
                                          n.e("83331"),
                                          n.e("49738"),
                                      ]).then(n.bind(n, 213202));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              O(v({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  })
                                : (0, d.jW)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("79695"),
                                          n.e("90508"),
                                          n.e("68294"),
                                          n.e("18320"),
                                          n.e("23877"),
                                      ]).then(n.bind(n, 373651));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              O(v({}, n), {
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
                                                color: S ? "text-muted" : "text-default",
                                                children: t.name,
                                            }),
                                        }),
                                        P
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(N, { index: 0 }),
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
                                          checked: I,
                                          disabled: S,
                                      })
                                    : (0, r.jsx)(c.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: x.intl.string(x.t.zA9d1J),
                                          icon: c.mBM,
                                          onClick: h.dG4,
                                      }),
                            }),
                        ],
                    }),
                }),
                !C && (0, r.jsx)(y, {}),
            ],
        });
    });
function I(e) {
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
                          E,
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
