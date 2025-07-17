n.d(t, {
    W: () => C,
    Z: () => x
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
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
    b = n(729910);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let { guild: t, channel: i, streamUserId: l, applicationId: a, appContext: o, exitFullScreen: s, analyticsLocation: c, guildScheduledEvent: d } = e;
    (null == s || s(),
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        y(_({}, n), {
                            guild: t,
                            channel: i,
                            streamUserId: l,
                            applicationId: a,
                            analyticsLocation: c,
                            source: i.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                            guildScheduledEvent: d
                        })
                    );
            },
            {
                modalKey: 'stream-invite-modal',
                contextKey: o === m.IlC.POPOUT ? u.u1M : u.z1l
            }
        ));
}
function x(e) {
    var t,
        { stream: n, applicationId: i, channel: a, exitFullScreen: u, appContext: x, analyticsLocation: v, className: O } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['stream', 'applicationId', 'channel', 'exitFullScreen', 'appContext', 'analyticsLocation', 'className']);
    let E = null == a ? void 0 : a.getGuildId(),
        S = null == a ? void 0 : a.id,
        P = (0, s.e7)([h.Z], () => (null != E ? h.Z.getGuild(E) : null), [E]),
        I = (0, s.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(S), [S]);
    if (!(null != P && null != a && f.Z.can(m.Plq.CREATE_INSTANT_INVITE, a))) return null;
    let Z = g.intl.string(g.t.VINpSE);
    return (
        null != n ? (Z = g.intl.string(g.t['6VQaqa'])) : null != i && (Z = g.intl.string(g.t['OzOM/v'])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    c.zx,
                    y(
                        _(
                            {
                                size: null != (t = j.size) ? t : c.zx.Sizes.SMALL,
                                color: b.buttonColor,
                                onClick: () => {
                                    (o()(null != P, 'guild cannot be null'),
                                        o()(null != a, 'channel cannot be null'),
                                        C({
                                            guild: P,
                                            channel: a,
                                            streamUserId: null == n ? void 0 : n.ownerId,
                                            applicationId: i,
                                            appContext: x,
                                            exitFullScreen: u,
                                            analyticsLocation: v,
                                            guildScheduledEvent: I
                                        }));
                                },
                                className: l()(O, b.textButton)
                            },
                            j
                        ),
                        { children: Z }
                    )
                ),
                (0, r.jsx)(p.Z, {
                    channel: a,
                    stream: n,
                    appContext: x,
                    className: l()(O, b.iconButton),
                    exitFullScreen: u,
                    analyticsLocation: v,
                    guildScheduledEvent: I
                })
            ]
        })
    );
}
