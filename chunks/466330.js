n.d(e, { Z: () => d });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    o = n(159300),
    u = n(496675),
    c = n(981631),
    a = n(388032);
function s(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function d(t) {
    let { source: e, guild: n, channel: r, stageInstance: i } = t,
        c = (0, l.e7)([u.Z], () => (0, o.b)(u.Z, n, r, i)),
        a = b(e, n, r),
        s = f(e, r);
    return c ? a : s;
}
function p(t, e) {
    return (null != e && [c.t4x.GUILD_HEADER, c.t4x.GUILD_CONTEXT_MENU].includes(e)) || null == t
        ? a.intl.string(a.t.Sd8Ixw)
        : t.type === c.d4z.GUILD_VOICE
          ? a.intl.string(a.t["EE+P0H"])
          : a.intl.string(a.t["0jeAXt"]);
}
let b = (t, e, l) => {
        if (null == e) return null;
        let o = p(l, t);
        return (0, r.jsx)(i.sNh, {
            id: "invite-people",
            label: o,
            color: "brand",
            icon: t === c.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) => {
                        var o, u;
                        return (0, r.jsx)(
                            i,
                            ((o = s({}, n)),
                            (u = u =
                                {
                                    guild: e,
                                    channel: l,
                                    source: t,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
                                : (function (t, e) {
                                      var n = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(t);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(u)).forEach(function (t) {
                                      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(u, t));
                                  }),
                            o),
                        );
                    };
                }),
        });
    },
    f = (t, e) => {
        let l = p(e, t);
        return (0, r.jsx)(i.sNh, {
            id: "invite-people",
            label: l,
            color: "brand",
            icon: t === c.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: t } = await n.e("18332").then(n.bind(n, 633057));
                    return (e) => (0, r.jsx)(t, s({}, e));
                }),
        });
    };
