n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(311907),
    c = n(397927),
    l = n(855687),
    o = n(576705),
    a = n(652215),
    s = n(985018);

function u(e) {
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

function b(e) {
    let { source: t, guild: n, channel: r, stageInstance: c } = e,
        a = (0, i.bG)([o.A], () => (0, l.K)(o.A, n, r, c)),
        s = p(t, n, r),
        u = y(t, r);
    return a ? s : u;
}

function d(e, t) {
    return (null != t && [a.PE1.GUILD_HEADER, a.PE1.GUILD_CONTEXT_MENU].includes(t)) || null == e
        ? s.intl.string(s.t.Sd8Ixw)
        : e.type === a.rbe.GUILD_VOICE
          ? s.intl.string(s.t["EE+P0H"])
          : s.intl.string(s.t["0jeAXt"]);
}
let p = (e, t, i) => {
        if (null == t) return null;
        let l = d(i, e);
        return (0, r.jsx)(c.Drp, {
            id: "invite-people",
            label: l,
            color: "brand",
            icon: e === a.PE1.GUILD_HEADER ? c.DpX : void 0,
            leadingAccessory:
                e === a.PE1.GUILD_HEADER
                    ? {
                          type: "icon",
                          icon: c.DpX,
                      }
                    : void 0,
            action: () =>
                (0, c.mMO)(async () => {
                    let { default: c } = await Promise.all([n.e("43600"), n.e("28136"), n.e("92779")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => {
                        var l, o;
                        return (0, r.jsx)(
                            c,
                            ((l = u({}, n)),
                            (o = o =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            l),
                        );
                    };
                }),
        });
    },
    y = (e, t) => {
        let i = d(t, e);
        return (0, r.jsx)(c.Drp, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: e === a.PE1.GUILD_HEADER ? c.DpX : void 0,
            leadingAccessory:
                e === a.PE1.GUILD_HEADER
                    ? {
                          type: "icon",
                          icon: c.DpX,
                      }
                    : void 0,
            action: () =>
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("62751").then(n.bind(n, 132610));
                    return (t) => (0, r.jsx)(e, u({}, t));
                }),
        });
    };
