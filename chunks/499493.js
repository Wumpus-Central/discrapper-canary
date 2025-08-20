r.d(t, { Z: () => h });
var n = r(951288),
    i = r(647438),
    l = r(120356),
    a = r.n(l),
    s = r(442837),
    o = r(481060),
    c = r(592125),
    u = r(944486),
    d = r(594174),
    m = r(5192),
    p = r(178762),
    f = r(91140),
    g = r(297781),
    j = r(388032),
    x = r(192025),
    v = r(226788);
let h = (e) => {
    let {
            entry: t,
            onClose: r,
            onReaction: l,
            onRequestOpen: h,
            disableActivityProfileLinks: O,
            customCTA: b,
            popoutClassname: y,
            popoutPosition: P = "right",
        } = e,
        w = i.useRef(null),
        I = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        E = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)),
        { nick: N, avatar: S } = i.useMemo(() => {
            let e = null == E ? void 0 : E.getAvatarURL(null == I ? void 0 : I.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, E),
                avatar: e,
            };
        }, [E, I]);
    return null == E
        ? null
        : (0, n.jsx)(o.yRy, {
              targetElementRef: w,
              position: P,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: a } = e;
                  return (0, n.jsx)("div", {
                      className: y,
                      children: (0, n.jsx)(p.J, {
                          entry: t,
                          closePopout: i,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              null == l || l(), r(), i();
                          },
                          onUserPopoutClosed: () => i(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: O,
                      }),
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == h || h();
              },
              children: (e) => {
                  var r, i;
                  return (0, n.jsx)(
                      o.P3F,
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
                      })({ innerRef: w }, e)),
                      (i = i =
                          {
                              className: x.profileEntryCard,
                              children: (0, n.jsx)(o.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              className: x.avatar,
                                              src: S,
                                              alt: j.intl.formatToPlainString(j.t.IzVXxc, { userName: N }),
                                          }),
                                          (0, n.jsx)("div", {
                                              className: x.playerInfo,
                                              children: (0, n.jsxs)("div", {
                                                  className: a()(v.column, v.gapXs),
                                                  children: [
                                                      (0, n.jsx)(o.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-primary",
                                                          lineClamp: 1,
                                                          children: N,
                                                      }),
                                                      (0, n.jsx)(g.Gk, {
                                                          location: g.Gt.APP_LAUNCHER,
                                                          children: f.W.map((e, r) => (0, n.jsx)(e, { entry: t }, r)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != b
                                              ? b
                                              : (0, n.jsx)("div", {
                                                    className: x.reactions,
                                                    children: (0, n.jsx)(o.n$P, { size: "sm" }),
                                                }),
                                      ],
                                  }),
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r),
                  );
              },
          });
};
