n.d(t, {
    W: () => b,
    Z: () => y,
});
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(924301),
    d = n(786915),
    p = n(430824),
    h = n(496675),
    f = n(981631),
    m = n(388032),
    g = n(811130);
function b(e) {
    let {
        guild: t,
        channel: r,
        streamUserId: l,
        applicationId: a,
        appContext: o,
        exitFullScreen: s,
        analyticsLocation: u,
        guildScheduledEvent: d,
    } = e;
    null == s || s(),
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                    n.bind(n, 560114),
                );
                return (n) => {
                    var o, s;
                    return (0, i.jsx)(
                        e,
                        ((o = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (s = s =
                            {
                                guild: t,
                                channel: r,
                                streamUserId: l,
                                applicationId: a,
                                analyticsLocation: u,
                                source: r.isGuildStageVoice() ? f.t4x.STAGE_CHANNEL : f.t4x.STREAM_INVITE,
                                guildScheduledEvent: d,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        o),
                    );
                };
            },
            {
                modalKey: "stream-invite-modal",
                contextKey: o === f.IlC.POPOUT ? c.u1M : c.z1l,
            },
        );
}
function y(e) {
    let {
            stream: t,
            applicationId: n,
            channel: r,
            exitFullScreen: a,
            appContext: y,
            analyticsLocation: C,
            className: v,
            size: _ = "sm",
        } = e,
        x = null == r ? void 0 : r.getGuildId(),
        j = null == r ? void 0 : r.id,
        O = (0, s.e7)([p.Z], () => (null != x ? p.Z.getGuild(x) : null), [x]),
        E = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(j), [j]);
    if (!(null != O && null != r && h.Z.can(f.Plq.CREATE_INSTANT_INVITE, r))) return null;
    let S = m.intl.string(m.t.VINpSK);
    return (
        null != t ? (S = m.intl.string(m.t["6VQaqd"])) : null != n && (S = m.intl.string(m.t["OzOM/q"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(v, g.textButton),
                    children: (0, i.jsx)(c.Button, {
                        size: _,
                        variant: "secondary",
                        text: S,
                        onClick: () => {
                            o()(null != O, "guild cannot be null"),
                                o()(null != r, "channel cannot be null"),
                                b({
                                    guild: O,
                                    channel: r,
                                    streamUserId: null == t ? void 0 : t.ownerId,
                                    applicationId: n,
                                    appContext: y,
                                    exitFullScreen: a,
                                    analyticsLocation: C,
                                    guildScheduledEvent: E,
                                });
                        },
                    }),
                }),
                (0, i.jsx)(d.Z, {
                    channel: r,
                    stream: t,
                    appContext: y,
                    className: l()(v, g.iconButton),
                    exitFullScreen: a,
                    analyticsLocation: C,
                    guildScheduledEvent: E,
                }),
            ],
        })
    );
}
