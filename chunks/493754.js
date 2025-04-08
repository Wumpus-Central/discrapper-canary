n.d(t, {
    W: () => C,
    Z: () => y
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(924301),
    d = n(786915),
    p = n(430824),
    h = n(496675),
    f = n(981631),
    m = n(388032),
    g = n(729910);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { guild: t, channel: i, streamUserId: l, applicationId: o, appContext: a, exitFullScreen: s, analyticsLocation: u, guildScheduledEvent: d } = e;
    null == s || s(),
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        _(b({}, n), {
                            guild: t,
                            channel: i,
                            streamUserId: l,
                            applicationId: o,
                            analyticsLocation: u,
                            source: i.isGuildStageVoice() ? f.t4x.STAGE_CHANNEL : f.t4x.STREAM_INVITE,
                            guildScheduledEvent: d
                        })
                    );
            },
            {
                modalKey: 'stream-invite-modal',
                contextKey: a === f.IlC.POPOUT ? c.u1M : c.z1l
            }
        );
}
function y(e) {
    var t,
        { stream: n, applicationId: i, channel: o, exitFullScreen: y, appContext: x, analyticsLocation: v, className: j } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['stream', 'applicationId', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'className']);
    let E = null == o ? void 0 : o.getGuildId(),
        N = null == o ? void 0 : o.id,
        I = (0, s.e7)([p.Z], () => (null != E ? p.Z.getGuild(E) : null), [E]),
        P = (0, s.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(N), [N]);
    if (!(null != I && null != o && h.Z.can(f.Plq.CREATE_INSTANT_INVITE, o))) return null;
    let S = m.NW.string(m.t.VINpSE);
    return (
        null != n ? (S = m.NW.string(m.t['6VQaqa'])) : null != i && (S = m.NW.string(m.t['OzOM/v'])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    c.zxk,
                    _(
                        b(
                            {
                                size: null != (t = O.size) ? t : c.zxk.Sizes.SMALL,
                                color: g.buttonColor,
                                onClick: () => {
                                    a()(null != I, 'guild cannot be null'),
                                        a()(null != o, 'channel cannot be null'),
                                        C({
                                            guild: I,
                                            channel: o,
                                            streamUserId: null == n ? void 0 : n.ownerId,
                                            applicationId: i,
                                            appContext: x,
                                            exitFullScreen: y,
                                            analyticsLocation: v,
                                            guildScheduledEvent: P
                                        });
                                },
                                className: l()(j, g.textButton)
                            },
                            O
                        ),
                        { children: S }
                    )
                ),
                (0, r.jsx)(d.Z, {
                    channel: o,
                    stream: n,
                    appContext: x,
                    className: l()(j, g.iconButton),
                    exitFullScreen: y,
                    analyticsLocation: v,
                    guildScheduledEvent: P
                })
            ]
        })
    );
}
