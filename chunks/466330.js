n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    o = n(340541),
    c = n(159300),
    a = n(984933),
    u = n(496675),
    s = n(981631),
    b = n(388032);
function p(e) {
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
        b = (0, i.e7)([a.ZP], () => (null != n ? a.ZP.getDefaultChannel(n.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, i.e7)([u.Z], () => (0, c.b)(u.Z, n, r, l)),
        d = (0, o._k)({ location: "invite_people_menu_item" }),
        O = d.isInCallEntrypointEnabled || d.isVoiceChannelEntrypointEnabled || (p && null != r) ? r : b,
        g = f(t, n, O),
        j = y(t, O);
    return p ? g : j;
}
function O(e, t) {
    let n = (0, o.jW)({ location: "invite_menu_item" });
    if (n.isGuildEntrypointEnabled && null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t))
        return b.intl.string(b.t.Sd8Ix8);
    if (null == e) return n.isGuildEntrypointEnabled ? b.intl.string(b.t.Sd8Ix8) : b.intl.string(b.t.BN75l5);
    let r = e.type === s.d4z.GUILD_VOICE;
    return n.isVoiceChannelEntrypointEnabled && r
        ? b.intl.string(b.t["EE+P0N"])
        : n.isTextChannelEntrypointEnabled
          ? b.intl.string(b.t["0jeAXl"])
          : b.intl.string(b.t.BN75l5);
}
let f = (e, t, i) => {
        if (null == t) return null;
        let o = O(i, e);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: o,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e("7654"), n.e("81404")]).then(n.bind(n, 560114));
                    return (n) => {
                        var o, c;
                        return (0, r.jsx)(
                            l,
                            ((o = p({}, n)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            o),
                        );
                    };
                }),
        });
    },
    y = (e, t) => {
        let i = O(t, e);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("88358").then(n.bind(n, 598402));
                    return (t) => (0, r.jsx)(e, p({}, t));
                }),
        });
    };
