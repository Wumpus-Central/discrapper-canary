t.d(e, { Z: () => E });
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(481060),
    c = t(340541),
    o = t(159300),
    a = t(984933),
    u = t(496675),
    s = t(981631),
    d = t(388032);
function b(n) {
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
function E(n) {
    let { source: e, guild: t, channel: r, stageInstance: l } = n,
        d = (0, i.e7)([a.ZP], () => (null != t ? a.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        b = (0, i.e7)([u.Z], () => (0, o.b)(u.Z, t, r, l)),
        E = (0, c._k)({ location: "invite_people_menu_item" }),
        f = E.isInCallEntrypointEnabled || E.isVoiceChannelEntrypointEnabled || (b && null != r) ? r : d,
        O = p(e, t, f),
        j = y(e, f);
    return b ? O : j;
}
function f(n, e) {
    let t = (0, c.jW)({ location: "invite_menu_item" });
    if (
        t.isGuildEntrypointEnabled &&
        null != e &&
        [s.InstantInviteSources.GUILD_HEADER, s.InstantInviteSources.GUILD_CONTEXT_MENU].includes(e)
    )
        return d.intl.string(d.t.Sd8Ix8);
    if (null == n) return t.isGuildEntrypointEnabled ? d.intl.string(d.t.Sd8Ix8) : d.intl.string(d.t.BN75l5);
    let r = n.type === s.d4z.GUILD_VOICE;
    return t.isVoiceChannelEntrypointEnabled && r
        ? d.intl.string(d.t["EE+P0N"])
        : t.isTextChannelEntrypointEnabled
          ? d.intl.string(d.t["0jeAXl"])
          : d.intl.string(d.t.BN75l5);
}
let p = (n, e, i) => {
        if (null == e) return null;
        let c = f(i, n);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: c,
            color: "brand",
            icon: n === s.InstantInviteSources.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([t.e("74318"), t.e("7654"), t.e("81404")]).then(
                        t.bind(t, 560114),
                    );
                    return (t) => {
                        var c, o;
                        return (0, r.jsx)(
                            l,
                            ((c = b({}, t)),
                            (o = o =
                                {
                                    guild: e,
                                    channel: i,
                                    source: n,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                                : (function (n, e) {
                                      var t = Object.keys(n);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(n);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (n) {
                                      Object.defineProperty(c, n, Object.getOwnPropertyDescriptor(o, n));
                                  }),
                            c),
                        );
                    };
                }),
        });
    },
    y = (n, e) => {
        let i = f(e, n);
        return (0, r.jsx)(l.sNh, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: n === s.InstantInviteSources.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: n } = await t.e("88358").then(t.bind(t, 598402));
                    return (e) => (0, r.jsx)(n, b({}, e));
                }),
        });
    };
