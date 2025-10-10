n.d(t, {
    W: () => _,
    Z: () => v,
});
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(924301),
    p = n(786915),
    h = n(430824),
    f = n(496675),
    m = n(981631),
    g = n(388032),
    b = n(811130);
function C(e) {
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
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let {
        guild: t,
        channel: r,
        streamUserId: l,
        applicationId: a,
        appContext: o,
        exitFullScreen: s,
        analyticsLocation: c,
        guildScheduledEvent: d,
    } = e;
    null == s || s(),
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("98953")]).then(
                    n.bind(n, 560114),
                );
                return (n) =>
                    (0, i.jsx)(
                        e,
                        y(C({}, n), {
                            guild: t,
                            channel: r,
                            streamUserId: l,
                            applicationId: a,
                            analyticsLocation: c,
                            source: r.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                            guildScheduledEvent: d,
                        }),
                    );
            },
            {
                modalKey: "stream-invite-modal",
                contextKey: o === m.IlC.POPOUT ? u.u1M : u.z1l,
            },
        );
}
function v(e) {
    var t,
        {
            stream: n,
            applicationId: r,
            channel: a,
            exitFullScreen: u,
            appContext: v,
            analyticsLocation: x,
            className: O,
        } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["stream", "applicationId", "channel", "exitFullScreen", "appContext", "analyticsLocation", "className"]);
    let E = null == a ? void 0 : a.getGuildId(),
        S = null == a ? void 0 : a.id,
        P = (0, s.e7)([h.Z], () => (null != E ? h.Z.getGuild(E) : null), [E]),
        I = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(S), [S]);
    if (!(null != P && null != a && f.Z.can(m.Plq.CREATE_INSTANT_INVITE, a))) return null;
    let Z = g.intl.string(g.t.VINpSE);
    return (
        null != n ? (Z = g.intl.string(g.t["6VQaqa"])) : null != r && (Z = g.intl.string(g.t["OzOM/v"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    c.zx,
                    y(
                        C(
                            {
                                size: null != (t = j.size) ? t : c.zx.Sizes.SMALL,
                                color: b.buttonColor,
                                onClick: () => {
                                    o()(null != P, "guild cannot be null"),
                                        o()(null != a, "channel cannot be null"),
                                        _({
                                            guild: P,
                                            channel: a,
                                            streamUserId: null == n ? void 0 : n.ownerId,
                                            applicationId: r,
                                            appContext: v,
                                            exitFullScreen: u,
                                            analyticsLocation: x,
                                            guildScheduledEvent: I,
                                        });
                                },
                                className: l()(O, b.textButton),
                            },
                            j,
                        ),
                        { children: Z },
                    ),
                ),
                (0, i.jsx)(p.Z, {
                    channel: a,
                    stream: n,
                    appContext: v,
                    className: l()(O, b.iconButton),
                    exitFullScreen: u,
                    analyticsLocation: x,
                    guildScheduledEvent: I,
                }),
            ],
        })
    );
}
