n.d(t, { Z: () => j });
var a = n(54381),
    i = n(473749),
    r = n(120356),
    l = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(592125),
    d = n(944486),
    u = n(594174),
    m = n(5192),
    f = n(178762),
    g = n(91140),
    p = n(297781),
    x = n(388032),
    v = n(320677),
    h = n(452379);
let j = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: r,
            onRequestOpen: j,
            disableActivityProfileLinks: b,
            customCTA: I,
            popoutClassname: O,
            popoutPosition: y = "right",
        } = e,
        P = i.useRef(null),
        w = (0, o.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())),
        E = (0, o.e7)([u.default], () => u.default.getUser(t.author_id)),
        { nick: C, avatar: N } = i.useMemo(() => {
            let e = null == E ? void 0 : E.getAvatarURL(null == w ? void 0 : w.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == w ? void 0 : w.guild_id, null == w ? void 0 : w.id, E),
                avatar: e,
            };
        }, [E, w]);
    return null == E
        ? null
        : (0, a.jsx)(s.yRy, {
              targetElementRef: P,
              position: y,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: l } = e;
                  return (0, a.jsx)("div", {
                      className: O,
                      children: (0, a.jsx)(f.J, {
                          entry: t,
                          closePopout: i,
                          updatePopoutPosition: l,
                          onReaction: () => {
                              null == r || r(), n(), i();
                          },
                          onUserPopoutClosed: () => i(),
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
                  var n, i;
                  return (0, a.jsx)(
                      s.P3F,
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  a = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (a = a.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  a.forEach(function (t) {
                                      var a;
                                      (a = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = a);
                                  });
                          }
                          return e;
                      })({ innerRef: P }, e)),
                      (i = i =
                          {
                              className: v.profileEntryCard,
                              children: (0, a.jsx)(s.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("img", {
                                              className: v.avatar,
                                              src: N,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxY, { userName: C }),
                                          }),
                                          (0, a.jsx)("div", {
                                              className: v.playerInfo,
                                              children: (0, a.jsxs)("div", {
                                                  className: l()(h.column, h.gapXs),
                                                  children: [
                                                      (0, a.jsx)(s.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          lineClamp: 1,
                                                          children: C,
                                                      }),
                                                      (0, a.jsx)(p.Gk, {
                                                          location: p.Gt.APP_LAUNCHER,
                                                          children: g.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != I
                                              ? I
                                              : (0, a.jsx)("div", {
                                                    className: v.reactions,
                                                    children: (0, a.jsx)(s.n$P, { size: "sm" }),
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
                                    var a = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, a);
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
