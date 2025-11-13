n.d(t, { Z: () => j });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(592125),
    d = n(944486),
    u = n(594174),
    m = n(5192),
    f = n(178762),
    g = n(91140),
    p = n(297781),
    x = n(388032),
    h = n(192025),
    v = n(226788);
let j = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: r,
            onRequestOpen: j,
            disableActivityProfileLinks: O,
            customCTA: y,
            popoutClassname: I,
            popoutPosition: b = "right",
        } = e,
        E = l.useRef(null),
        N = (0, s.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())),
        w = (0, s.e7)([u.default], () => u.default.getUser(t.author_id)),
        { nick: P, avatar: S } = l.useMemo(() => {
            let e = null == w ? void 0 : w.getAvatarURL(null == N ? void 0 : N.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == N ? void 0 : N.guild_id, null == N ? void 0 : N.id, w),
                avatar: e,
            };
        }, [w, N]);
    return null == w
        ? null
        : (0, i.jsx)(o.yRy, {
              targetElementRef: E,
              position: b,
              renderPopout: (e) => {
                  let { closePopout: l, updatePosition: a } = e;
                  return (0, i.jsx)("div", {
                      className: I,
                      children: (0, i.jsx)(f.J, {
                          entry: t,
                          closePopout: l,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              null == r || r(), n(), l();
                          },
                          onUserPopoutClosed: () => l(),
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
                  var n, l;
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
                      (l = l =
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
                                              alt: x.intl.formatToPlainString(x.t.IzVXxY, { userName: P }),
                                          }),
                                          (0, i.jsx)("div", {
                                              className: h.playerInfo,
                                              children: (0, i.jsxs)("div", {
                                                  className: a()(v.column, v.gapXs),
                                                  children: [
                                                      (0, i.jsx)(o.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-primary",
                                                          lineClamp: 1,
                                                          children: P,
                                                      }),
                                                      (0, i.jsx)(p.Gk, {
                                                          location: p.Gt.APP_LAUNCHER,
                                                          children: g.W.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
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
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      n),
                  );
              },
          });
};
