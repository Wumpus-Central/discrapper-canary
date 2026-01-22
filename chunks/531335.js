n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(855687),
    c = n(576705),
    o = n(652215),
    u = n(985018);

function s(e) {
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

function d(e) {
    let { source: t, guild: n, channel: r, stageInstance: l } = e,
        o = (0, i.bG)([c.A], () => (0, a.K)(c.A, n, r, l)),
        u = p(t, n, r),
        s = O(t, r);
    return o ? u : s;
}

function b(e, t) {
    return (null != t && [o.PE1.GUILD_HEADER, o.PE1.GUILD_CONTEXT_MENU].includes(t)) || null == e
        ? u.intl.string(u.t.Sd8Ixw)
        : e.type === o.rbe.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}
let p = (e, t, i) => {
        if (null == t) return null;
        let a = b(i, e);
        return (0, r.jsx)(l.Drp, {
            id: "invite-people",
            label: a,
            color: "brand",
            icon: e === o.PE1.GUILD_HEADER ? l.DpX : void 0,
            action: () =>
                (0, l.mMO)(async () => {
                    let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => {
                        var a, c;
                        return (0, r.jsx)(
                            l,
                            ((a = s({}, n)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            a),
                        );
                    };
                }),
        });
    },
    O = (e, t) => {
        let i = b(t, e);
        return (0, r.jsx)(l.Drp, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: e === o.PE1.GUILD_HEADER ? l.DpX : void 0,
            action: () =>
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                    return (t) => (0, r.jsx)(e, s({}, t));
                }),
        });
    };
