r.d(t, { Z: () => b });
var n = r(54381);
r(473749);
var i = r(442837),
    l = r(481060),
    o = r(159300),
    c = r(496675),
    a = r(981631),
    u = r(388032);
function s(e) {
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
}
function b(e) {
    let { source: t, guild: r, channel: n, stageInstance: l } = e,
        a = (0, i.e7)([c.Z], () => (0, o.b)(c.Z, r, n, l)),
        u = p(t, r, n),
        s = f(t, n);
    return a ? u : s;
}
function O(e, t) {
    return (null != t && [a.t4x.GUILD_HEADER, a.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e
        ? u.intl.string(u.t.Sd8Ixw)
        : e.type === a.d4z.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}
let p = (e, t, i) => {
        if (null == t) return null;
        let o = O(i, e);
        return (0, n.jsx)(l.sNh, {
            id: "invite-people",
            label: o,
            color: "brand",
            icon: e === a.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([r.e("7654"), r.e("45965")]).then(r.bind(r, 560114));
                    return (r) => {
                        var o, c;
                        return (0, n.jsx)(
                            l,
                            ((o = s({}, r)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            o),
                        );
                    };
                }),
        });
    },
    f = (e, t) => {
        let i = O(t, e);
        return (0, n.jsx)(l.sNh, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: e === a.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await r.e("18332").then(r.bind(r, 633057));
                    return (t) => (0, n.jsx)(e, s({}, t));
                }),
        });
    };
