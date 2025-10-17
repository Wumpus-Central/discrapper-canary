n.d(t, { Z: () => v });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(592125),
    d = n(944486),
    u = n(594174),
    m = n(5192),
    f = n(178762),
    p = n(91140),
    g = n(297781),
    x = n(388032),
    h = n(192025),
    j = n(226788);
let v = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: l,
            onRequestOpen: v,
            disableActivityProfileLinks: O,
            customCTA: y,
            popoutClassname: I,
            popoutPosition: b = "right",
        } = e,
        E = r.useRef(null),
        N = (0, s.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())),
        P = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)),
        { nick: w, avatar: S } = r.useMemo(() => {
            let e = null == P ? void 0 : P.getAvatarURL(null == N ? void 0 : N.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == N ? void 0 : N.guild_id, null == N ? void 0 : N.id, P),
                avatar: e,
            };
        }, [P, N]);
    return null == P
        ? null
        : (0, i.jsx)(o.yRy, {
              targetElementRef: E,
              position: b,
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: I,
                      children: (0, i.jsx)(f.J, {
                          entry: t,
                          closePopout: r,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              null == l || l(), n(), r();
                          },
                          onUserPopoutClosed: () => r(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: O,
                      }),
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == v || v();
              },
              children: (e) => {
                  var n, r;
                  return (0, i.jsx)(
                      o.P3F,
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({ innerRef: E }, e)),
                      (r = r =
                          {
                              className: h.profileEntryCard,
                              children: (0, i.jsx)(o.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)("img", {
                                              className: h.avatar,
                                              src: S,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxc, { userName: w }),
                                          }),
                                          (0, i.jsx)("div", {
                                              className: h.playerInfo,
                                              children: (0, i.jsxs)("div", {
                                                  className: a()(j.column, j.gapXs),
                                                  children: [
                                                      (0, i.jsx)(o.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-primary",
                                                          lineClamp: 1,
                                                          children: w,
                                                      }),
                                                      (0, i.jsx)(g.Gk, {
                                                          location: g.Gt.APP_LAUNCHER,
                                                          children: p.W.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != y
                                              ? y
                                              : (0, i.jsx)("div", {
                                                    className: h.reactions,
                                                    children: (0, i.jsx)(o.n$P, { size: "sm" }),
                                                }),
                                      ],
                                  }),
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n),
                  );
              },
          });
};
