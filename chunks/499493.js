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
    g = n(178762),
    f = n(91140),
    p = n(297781),
    x = n(388032),
    v = n(192025),
    h = n(226788);
let j = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: r,
            onRequestOpen: j,
            disableActivityProfileLinks: b,
            customCTA: _,
            popoutClassname: y,
            popoutPosition: I = "right",
        } = e,
        O = i.useRef(null),
        P = (0, o.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())),
        w = (0, o.e7)([u.default], () => u.default.getUser(t.author_id)),
        { nick: E, avatar: C } = i.useMemo(() => {
            let e = null == w ? void 0 : w.getAvatarURL(null == P ? void 0 : P.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == P ? void 0 : P.guild_id, null == P ? void 0 : P.id, w),
                avatar: e,
            };
        }, [w, P]);
    return null == w
        ? null
        : (0, a.jsx)(s.yRy, {
              targetElementRef: O,
              position: I,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: l } = e;
                  return (0, a.jsx)("div", {
                      className: y,
                      children: (0, a.jsx)(g.J, {
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
                      })({ innerRef: O }, e)),
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
                                              src: C,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxY, { userName: E }),
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
                                                          children: E,
                                                      }),
                                                      (0, a.jsx)(p.Gk, {
                                                          location: p.Gt.APP_LAUNCHER,
                                                          children: f.W.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != _
                                              ? _
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
