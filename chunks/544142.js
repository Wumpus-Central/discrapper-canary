n.d(t, { Z: () => S });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(100527),
    d = n(906732),
    p = n(471445),
    h = n(884902),
    f = n(670188),
    m = n(271383),
    g = n(594174),
    b = n(51144),
    y = n(967128),
    _ = n(981631),
    C = n(388032),
    x = n(149623);
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
function j(e) {
    var t, l, p;
    let { userId: y, channel: _ } = e,
        C = i.useRef(null),
        { analyticsLocations: j } = (0, d.ZP)(u.Z.USERNAME),
        E = (0, o.e7)([g.default], () => g.default.getUser(y)),
        S = (0, o.e7)([m.ZP], () => (null != y ? m.ZP.getMember(_.guild_id, y) : null)),
        P = (0, h.X7)(_.guild_id, null != y ? y : void 0, null != (t = null == S ? void 0 : S.colorStrings) ? t : null);
    function I(e) {
        if (null == E) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e("79695"), n.e("70675")]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    O(v({}, t), {
                        user: E,
                        guildId: _.guild_id,
                        channel: _,
                    }),
                );
        });
    }
    let Z = null != (p = null != (l = null == S ? void 0 : S.nick) ? l : b.ZP.getName(E)) ? p : "???",
        T = null == S ? void 0 : S.colorString;
    return null == E
        ? (0, r.jsx)("span", {
              className: a()(x.threadCreatorName, x.unknownCreatorName),
              children: Z,
          })
        : (0, r.jsx)(d.Gt, {
              value: j,
              children: (0, r.jsx)(f.Z, {
                  targetElementRef: C,
                  user: E,
                  guildId: _.guild_id,
                  channelId: _.id,
                  roleId: null == S ? void 0 : S.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          s.P3F,
                          O(v({}, e), {
                              innerRef: C,
                              tag: "span",
                              className: x.threadCreatorName,
                              onContextMenu: I,
                              children: (0, r.jsx)(s.PUh, {
                                  name: Z,
                                  colorString: null != T ? T : null,
                                  colorStrings: P,
                              }),
                          }),
                      ),
              }),
          });
}
function E(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: (0, r.jsx)("div", {
                          className: x.subtitle,
                          children: C.intl.format(C.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      j,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === _.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: C.intl.string(C.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function S(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, p.KS)(n)) ? t : s.or_;
    return (0, r.jsxs)(y.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)("div", {
                className: x.iconWrapper,
                children: (0, r.jsx)(i, { className: x.icon }),
            }),
            (0, r.jsx)(y.Ot, { children: n.name }),
            (0, r.jsx)(E, { channel: n }),
        ],
    });
}
