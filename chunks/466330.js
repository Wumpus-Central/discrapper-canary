n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(340541),
    c = n(159300),
    o = n(984933),
    u = n(496675),
    s = n(981631),
    d = n(388032);
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
function b(e) {
    let { source: t, guild: n, channel: r, stageInstance: l } = e,
        d = (0, i.e7)([o.ZP], () => (null != n ? o.ZP.getDefaultChannel(n.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, i.e7)([u.Z], () => (0, c.b)(u.Z, n, r, l)),
        b = (0, a._k)({ location: "invite_people_menu_item" }),
        y = b.isInCallEntrypointEnabled || b.isVoiceChannelEntrypointEnabled || (p && null != r) ? r : d,
        j = f(t, n, y),
        g = O(t, y);
    return p ? j : g;
}
function y(e, t) {
    let n = (0, a.LK)({ location: "invite_menu_item" });
    if (n.isGuildEntrypointEnabled && null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t))
        return d.intl.string(d.t.Sd8Ixw);
    if (null == e) return n.isGuildEntrypointEnabled ? d.intl.string(d.t.Sd8Ixw) : d.intl.string(d.t.BN75l9);
    let r = e.type === s.d4z.GUILD_VOICE;
    return n.isVoiceChannelEntrypointEnabled && r
        ? d.intl.string(d.t["EE+P0H"])
        : n.isTextChannelEntrypointEnabled
          ? d.intl.string(d.t["0jeAXt"])
          : d.intl.string(d.t.BN75l9);
}
let f = (e, t, i) => {
        if (null == t) return null;
        let a = y(i, e);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: a,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
                    return (n) => {
                        var a, c;
                        return (0, r.jsx)(
                            l,
                            ((a = p({}, n)),
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
        let i = y(t, e);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("18332").then(n.bind(n, 633057));
                    return (t) => (0, r.jsx)(e, p({}, t));
                }),
        });
    };
