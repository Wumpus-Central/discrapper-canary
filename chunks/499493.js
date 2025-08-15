r.d(t, { Z: () => j });
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(442837),
    s = r(481060),
    c = r(592125),
    u = r(944486),
    d = r(594174),
    m = r(5192),
    f = r(178762),
    g = r(91140),
    p = r(297781),
    x = r(388032),
    v = r(192025),
    h = r(226788);
let j = (e) => {
    let {
            entry: t,
            onClose: r,
            onReaction: i,
            onRequestOpen: j,
            disableActivityProfileLinks: b,
            customCTA: O,
            popoutClassname: y,
            popoutPosition: _ = "right",
        } = e,
        I = a.useRef(null),
        w = (0, o.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        P = (0, o.e7)([d.default], () => d.default.getUser(t.author_id)),
        { nick: E, avatar: S } = a.useMemo(() => {
            let e = null == P ? void 0 : P.getAvatarURL(null == w ? void 0 : w.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == w ? void 0 : w.guild_id, null == w ? void 0 : w.id, P),
                avatar: e,
            };
        }, [P, w]);
    return null == P
        ? null
        : (0, n.jsx)(s.yRy, {
              targetElementRef: I,
              position: _,
              renderPopout: (e) => {
                  let { closePopout: a, updatePosition: l } = e;
                  return (0, n.jsx)("div", {
                      className: y,
                      children: (0, n.jsx)(f.J, {
                          entry: t,
                          closePopout: a,
                          updatePopoutPosition: l,
                          onReaction: () => {
                              null == i || i(), r(), a();
                          },
                          onUserPopoutClosed: () => a(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: b,
                      }),
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == j || j();
              },
              children: (e) => {
                  var r, a;
                  return (0, n.jsx)(
                      s.P3F,
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({ innerRef: I }, e)),
                      (a = a =
                          {
                              className: v.profileEntryCard,
                              children: (0, n.jsx)(s.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              className: v.avatar,
                                              src: S,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxc, { userName: E }),
                                          }),
                                          (0, n.jsx)("div", {
                                              className: v.playerInfo,
                                              children: (0, n.jsxs)("div", {
                                                  className: l()(h.column, h.gapXs),
                                                  children: [
                                                      (0, n.jsx)(s.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-primary",
                                                          lineClamp: 1,
                                                          children: E,
                                                      }),
                                                      (0, n.jsx)(p.Gk, {
                                                          location: p.Gt.APP_LAUNCHER,
                                                          children: g.W.map((e, r) => (0, n.jsx)(e, { entry: t }, r)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != O
                                              ? O
                                              : (0, n.jsx)("div", {
                                                    className: v.reactions,
                                                    children: (0, n.jsx)(s.n$P, { size: "sm" }),
                                                }),
                                      ],
                                  }),
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      r),
                  );
              },
          });
};
