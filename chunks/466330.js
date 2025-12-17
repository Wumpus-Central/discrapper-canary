t.d(e, { Z: () => b });
var r = t(54381);
t(473749);
var c = t(442837),
    l = t(481060),
    i = t(159300),
    o = t(496675),
    a = t(981631),
    u = t(388032);
function s(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = t[e]),
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = r);
            });
    }
    return n;
}
function b(n) {
    let { source: e, guild: t, channel: r, stageInstance: l } = n,
        a = (0, c.e7)([o.Z], () => (0, i.b)(o.Z, t, r, l)),
        u = f(e, t, r),
        s = O(e, r);
    return a ? u : s;
}
function d(n, e) {
    return (null != e && [a.t4x.GUILD_HEADER, a.t4x.GUILD_CONTEXT_MENU].includes(e)) || null == n
        ? u.intl.string(u.t.Sd8Ixw)
        : n.type === a.d4z.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}
let f = (n, e, c) => {
        if (null == e) return null;
        let i = d(c, n);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: n === a.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([t.e("7654"), t.e("45965")]).then(t.bind(t, 560114));
                    return (t) => {
                        var i, o;
                        return (0, r.jsx)(
                            l,
                            ((i = s({}, t)),
                            (o = o =
                                {
                                    guild: e,
                                    channel: c,
                                    source: n,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (n, e) {
                                      var t = Object.keys(n);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(n);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (n) {
                                      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(o, n));
                                  }),
                            i),
                        );
                    };
                }),
        });
    },
    O = (n, e) => {
        let c = d(e, n);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: c,
            color: "brand",
            icon: n === a.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: n } = await t.e("18332").then(t.bind(t, 633057));
                    return (e) => (0, r.jsx)(n, s({}, e));
                }),
        });
    };
