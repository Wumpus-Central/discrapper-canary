n.d(t, { Z: () => S });
var i = n(54381),
    r = n(473749),
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
    C = n(967128),
    y = n(981631),
    v = n(388032),
    _ = n(149623);
function O(e) {
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
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
    let { userId: C, channel: y } = e,
        v = r.useRef(null),
        { analyticsLocations: E } = (0, d.ZP)(u.Z.USERNAME),
        j = (0, o.e7)([g.default], () => g.default.getUser(C)),
        S = (0, o.e7)([m.ZP], () => (null != C ? m.ZP.getMember(y.guild_id, C) : null)),
        P = (0, h.X7)(y.guild_id, null != C ? C : void 0, null != (t = null == S ? void 0 : S.colorStrings) ? t : null);
    function I(e) {
        if (null == j) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e("79695"), n.e("70675"), n.e("85994")]).then(n.bind(n, 654663));
            return (t) =>
                (0, i.jsx)(
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
        ? (0, i.jsx)("span", {
              className: a()(_.threadCreatorName, _.unknownCreatorName),
              children: Z,
          })
        : (0, i.jsx)(d.Gt, {
              value: E,
              children: (0, i.jsx)(f.Z, {
                  targetElementRef: v,
                  user: j,
                  guildId: y.guild_id,
                  channelId: y.id,
                  roleId: null == S ? void 0 : S.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, i.jsx)(
                          s.P3F,
                          x(O({}, e), {
                              innerRef: v,
                              tag: "span",
                              className: _.threadCreatorName,
                              onContextMenu: I,
                              children: (0, i.jsx)(s.PUh, {
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
        ? (0, i.jsx)("div", { style: { marginTop: -8 } })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, i.jsx)("div", {
                          className: _.subtitle,
                          children: v.intl.format(v.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, i.jsx)(
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
                      ? (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: v.intl.string(v.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function S(e) {
    var t;
    let { channel: n } = e,
        r = null != (t = (0, p.KS)(n)) ? t : s.or_;
    return (0, i.jsxs)(C.ZP, {
        channelId: n.id,
        children: [
            (0, i.jsx)("div", {
                className: _.iconWrapper,
                children: (0, i.jsx)(r, { className: _.icon }),
            }),
            (0, i.jsx)(C.Ot, { children: n.name }),
            (0, i.jsx)(j, { channel: n }),
        ],
    });
}
