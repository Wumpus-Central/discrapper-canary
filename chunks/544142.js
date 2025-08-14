n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(100527),
    d = n(906732),
    f = n(471445),
    _ = n(884902),
    p = n(670188),
    h = n(271383),
    m = n(594174),
    g = n(51144),
    E = n(967128),
    b = n(981631),
    y = n(388032),
    O = n(149623);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    var t, o, f;
    let { userId: E, channel: b } = e,
        y = i.useRef(null),
        { analyticsLocations: v } = (0, d.ZP)(u.Z.USERNAME),
        T = (0, s.e7)([m.default], () => m.default.getUser(E)),
        A = (0, s.e7)([h.ZP], () => (null != E ? h.ZP.getMember(b.guild_id, E) : null)),
        N = (0, _.X7)(b.guild_id, null != E ? E : void 0, null != (t = null == A ? void 0 : A.colorStrings) ? t : null);
    function C(e) {
        if (null == T) return null;
        (0, c.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e("79695"), n.e("70675"), n.e("85994")]).then(n.bind(n, 654663));
            return (t) =>
                (0, r.jsx)(
                    e,
                    S(I({}, t), {
                        user: T,
                        guildId: b.guild_id,
                        channel: b,
                    }),
                );
        });
    }
    let R = null != (f = null != (o = null == A ? void 0 : A.nick) ? o : g.ZP.getName(T)) ? f : "???",
        P = null == A ? void 0 : A.colorString;
    return null == T
        ? (0, r.jsx)("span", {
              className: a()(O.threadCreatorName, O.unknownCreatorName),
              children: R,
          })
        : (0, r.jsx)(d.Gt, {
              value: v,
              children: (0, r.jsx)(p.Z, {
                  targetElementRef: y,
                  user: T,
                  guildId: b.guild_id,
                  channelId: b.id,
                  roleId: null == A ? void 0 : A.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          l.P3F,
                          S(I({}, e), {
                              innerRef: y,
                              tag: "span",
                              className: O.threadCreatorName,
                              onContextMenu: C,
                              children: (0, r.jsx)(l.PUh, {
                                  name: R,
                                  colorString: null != P ? P : null,
                                  colorStrings: N,
                              }),
                          }),
                      ),
              }),
          });
}
function N(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: (0, r.jsx)("div", {
                          className: O.subtitle,
                          children: y.intl.format(y.t.imPXd3, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      A,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === b.d4z.PRIVATE_THREAD
                      ? (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: y.intl.string(y.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function C(e) {
    var t;
    let { channel: n } = e,
        i = null != (t = (0, f.KS)(n)) ? t : l.or_;
    return (0, r.jsxs)(E.ZP, {
        channelId: n.id,
        children: [
            (0, r.jsx)("div", {
                className: O.iconWrapper,
                children: (0, r.jsx)(i, { className: O.icon }),
            }),
            (0, r.jsx)(E.Ot, { children: n.name }),
            (0, r.jsx)(N, { channel: n }),
        ],
    });
}
