n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
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
    g = n(271383),
    m = n(594174),
    b = n(51144),
    y = n(967128),
    v = n(981631),
    O = n(388032),
    j = n(616508);
function x(e) {
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
function C(e, t) {
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
    let { userId: y, channel: v } = e,
        O = i.useRef(null),
        { analyticsLocations: E } = (0, d.ZP)(u.Z.USERNAME),
        S = (0, o.e7)([m.default], () => m.default.getUser(y)),
        _ = (0, o.e7)([g.ZP], () => (null != y ? g.ZP.getMember(v.guild_id, y) : null)),
        I = (0, f.X7)(v.guild_id, null != y ? y : void 0, null != (t = null == _ ? void 0 : _.colorStrings) ? t : null);
    function P(e) {
        if (null == S) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e("79695"), n.e("4040"), n.e("70675"), n.e("66256")]).then(
                n.bind(n, 654663),
            );
            return (t) =>
                (0, r.jsx)(
                    e,
                    C(x({}, t), {
                        user: S,
                        guildId: v.guild_id,
                        channel: v,
                    }),
                );
        });
    }
    let Z = null != (p = null != (l = null == _ ? void 0 : _.nick) ? l : b.ZP.getName(S)) ? p : "???",
        N = null == _ ? void 0 : _.colorString;
    return null == S
        ? (0, r.jsx)("span", {
              className: a()(j.threadCreatorName, j.unknownCreatorName),
              children: Z,
          })
        : (0, r.jsx)(d.Gt, {
              value: E,
              children: (0, r.jsx)(h.Z, {
                  targetElementRef: O,
                  user: S,
                  guildId: v.guild_id,
                  channelId: v.id,
                  roleId: null == _ ? void 0 : _.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          s.P3F,
                          C(x({}, e), {
                              innerRef: O,
                              tag: "span",
                              className: j.threadCreatorName,
                              onContextMenu: P,
                              children: (0, r.jsx)(s.PUh, {
                                  name: Z,
                                  colorString: null != N ? N : null,
                                  colorStrings: I,
                              }),
                          }),
                      ),
              }),
          });
}
function S(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: j.subtitle,
                          children: O.intl.format(O.t.imPXd5, {
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
                  t.type === v.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: O.intl.string(O.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function _(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, p.KS)(n)) ? t : s.or_;
    return (0, r.jsxs)(y.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)("div", {
                className: j.iconWrapper,
                children: (0, r.jsx)(i, { className: j.icon }),
            }),
            (0, r.jsx)(y.Ot, { children: n.name }),
            (0, r.jsx)(S, { channel: n }),
        ],
    });
}
