n.d(t, {
    W: () => b,
    Z: () => _,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(924301),
    d = n(786915),
    p = n(430824),
    f = n(496675),
    h = n(981631),
    m = n(388032),
    g = n(811130);
function b(e) {
    let {
        guild: t,
        channel: i,
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
                    return (0, r.jsx)(
                        e,
                        ((o = (function (e) {
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
                        })({}, n)),
                        (s = s =
                            {
                                guild: t,
                                channel: i,
                                streamUserId: l,
                                applicationId: a,
                                analyticsLocation: u,
                                source: i.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                                guildScheduledEvent: d,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
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
                contextKey: o === h.IlC.POPOUT ? c.u1M : c.z1l,
            },
        );
}
function _(e) {
    let {
            stream: t,
            applicationId: n,
            channel: i,
            exitFullScreen: a,
            appContext: _,
            analyticsLocation: y,
            className: C,
            size: v = "sm",
        } = e,
        O = null == i ? void 0 : i.getGuildId(),
        x = null == i ? void 0 : i.id,
        E = (0, s.e7)([p.Z], () => (null != O ? p.Z.getGuild(O) : null), [O]),
        j = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(x), [x]);
    if (!(null != E && null != i && f.Z.can(h.Plq.CREATE_INSTANT_INVITE, i))) return null;
    let S = m.intl.string(m.t.VINpSK);
    return (
        null != t ? (S = m.intl.string(m.t["6VQaqd"])) : null != n && (S = m.intl.string(m.t["OzOM/q"])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: l()(C, g.textButton),
                    children: (0, r.jsx)(c.Button, {
                        size: v,
                        variant: "secondary",
                        text: S,
                        onClick: () => {
                            o()(null != E, "guild cannot be null"),
                                o()(null != i, "channel cannot be null"),
                                b({
                                    guild: E,
                                    channel: i,
                                    streamUserId: null == t ? void 0 : t.ownerId,
                                    applicationId: n,
                                    appContext: _,
                                    exitFullScreen: a,
                                    analyticsLocation: y,
                                    guildScheduledEvent: j,
                                });
                        },
                    }),
                }),
                (0, r.jsx)(d.Z, {
                    channel: i,
                    stream: t,
                    appContext: _,
                    className: l()(C, g.iconButton),
                    exitFullScreen: a,
                    analyticsLocation: y,
                    guildScheduledEvent: j,
                }),
            ],
        })
    );
}
