n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(592125),
    u = n(944486),
    d = n(594174),
    m = n(5192),
    f = n(178762),
    p = n(91140),
    g = n(297781),
    x = n(388032),
    h = n(192025),
    v = n(226788);
let j = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: l,
            onRequestOpen: j,
            disableActivityProfileLinks: O,
            customCTA: y,
            popoutClassname: b,
            popoutPosition: I = "right",
        } = e,
        E = i.useRef(null),
        w = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        P = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)),
        { nick: N, avatar: S } = i.useMemo(() => {
            let e = null == P ? void 0 : P.getAvatarURL(null == w ? void 0 : w.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == w ? void 0 : w.guild_id, null == w ? void 0 : w.id, P),
                avatar: e,
            };
        }, [P, w]);
    return null == P
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: E,
              position: I,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: a } = e;
                  return (0, r.jsx)("div", {
                      className: b,
                      children: (0, r.jsx)(f.J, {
                          entry: t,
                          closePopout: i,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              null == l || l(), n(), i();
                          },
                          onUserPopoutClosed: () => i(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: O,
                      }),
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == j || j();
              },
              children: (e) => {
                  var n, i;
                  return (0, r.jsx)(
                      o.P3F,
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
                      })({ innerRef: E }, e)),
                      (i = i =
                          {
                              className: h.profileEntryCard,
                              children: (0, r.jsx)(o.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("img", {
                                              className: h.avatar,
                                              src: S,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxc, { userName: N }),
                                          }),
                                          (0, r.jsx)("div", {
                                              className: h.playerInfo,
                                              children: (0, r.jsxs)("div", {
                                                  className: a()(v.column, v.gapXs),
                                                  children: [
                                                      (0, r.jsx)(o.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-primary",
                                                          lineClamp: 1,
                                                          children: N,
                                                      }),
                                                      (0, r.jsx)(g.Gk, {
                                                          location: g.Gt.APP_LAUNCHER,
                                                          children: p.W.map((e, n) => (0, r.jsx)(e, { entry: t }, n)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != y
                                              ? y
                                              : (0, r.jsx)("div", {
                                                    className: h.reactions,
                                                    children: (0, r.jsx)(o.n$P, { size: "sm" }),
                                                }),
                                      ],
                                  }),
                              }),
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
              },
          });
};
