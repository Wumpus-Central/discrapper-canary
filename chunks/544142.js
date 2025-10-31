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
    f = n(884902),
    h = n(670188),
    m = n(271383),
    g = n(594174),
    b = n(51144),
    _ = n(967128),
    y = n(981631),
    C = n(388032),
    v = n(149623);
function O(e) {
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
function x(e, t) {
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
function E(e) {
    var t, l, p;
    let { userId: _, channel: y } = e,
        C = i.useRef(null),
        { analyticsLocations: E } = (0, d.ZP)(u.Z.USERNAME),
        j = (0, o.e7)([g.default], () => g.default.getUser(_)),
        S = (0, o.e7)([m.ZP], () => (null != _ ? m.ZP.getMember(y.guild_id, _) : null)),
        P = (0, f.X7)(y.guild_id, null != _ ? _ : void 0, null != (t = null == S ? void 0 : S.colorStrings) ? t : null);
    function I(e) {
        if (null == j) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e("79695"), n.e("70675"), n.e("85994")]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    x(O({}, t), {
                        user: j,
                        guildId: y.guild_id,
                        channel: y,
                    }),
                );
        });
    }
    let Z = null != (p = null != (l = null == S ? void 0 : S.nick) ? l : b.ZP.getName(j)) ? p : "???",
        T = null == S ? void 0 : S.colorString;
    return null == j
        ? (0, r.jsx)("span", {
              className: a()(v.threadCreatorName, v.unknownCreatorName),
              children: Z,
          })
        : (0, r.jsx)(d.Gt, {
              value: E,
              children: (0, r.jsx)(h.Z, {
                  targetElementRef: C,
                  user: j,
                  guildId: y.guild_id,
                  channelId: y.id,
                  roleId: null == S ? void 0 : S.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          s.P3F,
                          x(O({}, e), {
                              innerRef: C,
                              tag: "span",
                              className: v.threadCreatorName,
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
function j(e) {
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
                          className: v.subtitle,
                          children: C.intl.format(C.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      E,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === y.d4z.PRIVATE_THREAD
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
    return (0, r.jsxs)(_.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)("div", {
                className: v.iconWrapper,
                children: (0, r.jsx)(i, { className: v.icon }),
            }),
            (0, r.jsx)(_.Ot, { children: n.name }),
            (0, r.jsx)(j, { channel: n }),
        ],
    });
}
