n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var l = n(284009),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(298990),
    c = n(688810),
    u = n(384059),
    d = n(267102),
    f = n(71393),
    p = n(375492),
    h = n(576705),
    b = n(709562),
    g = n(652215),
    m = n(985018);

function A(e) {
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

function y(e) {
    let {
            applicationId: t,
            stream: l,
            channel: y,
            exitFullScreen: O,
            appContext: j,
            analyticsLocation: v,
            guildScheduledEvent: x,
            shouldPrioritizeGroupPlusIcon: E = !1,
            isRichPresenceInvite: _ = !1,
            iconClassName: C,
            look: S,
            size: I,
            buttonText: N,
            color: T,
        } = e,
        P = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "applicationId",
            "stream",
            "channel",
            "exitFullScreen",
            "appContext",
            "analyticsLocation",
            "guildScheduledEvent",
            "shouldPrioritizeGroupPlusIcon",
            "isRichPresenceInvite",
            "iconClassName",
            "look",
            "size",
            "buttonText",
            "color",
        ]),
        w = (0, d.Us)(),
        { parentAnalyticsLocation: R } = (0, c.Ay)(),
        D = null == y ? void 0 : y.getGuildId(),
        M = (0, a.bG)([f.A], () => (null != D ? f.A.getGuild(D) : null), [D]),
        L = (0, a.bG)([p.A], () => (null != t ? p.A.getApplicationActivity(t) : void 0)),
        G = null == t || E ? s.DpX : s.dCJ,
        k = null != t ? m.intl.string(m.t["OzOM/q"]) : m.intl.string(m.t["6F9ivu"]);
    return null != L && _
        ? (0, r.jsx)(b.A, {
              onClick: () => {
                  null != R && (0, u.X)(R, u.O.INVITE), o.qf(L, !1, w);
              },
              iconComponent: G,
              label: k,
              iconClassName: C,
              look: S,
              size: I,
              buttonText: N,
              color: null != T ? T : void 0,
          })
        : null != M && null != y && h.A.can(g.xBc.CREATE_INSTANT_INVITE, y)
          ? (0, r.jsx)(
                b.A,
                A(
                    {
                        onClick: () => {
                            i()(null != M, "guild cannot be null"),
                                i()(null != y, "channel cannot be null"),
                                null != R && (0, u.X)(R, u.O.INVITE),
                                (function (e) {
                                    let {
                                        guild: t,
                                        channel: l,
                                        streamUserId: i,
                                        applicationId: a,
                                        appContext: o,
                                        exitFullScreen: c,
                                        analyticsLocation: u,
                                        guildScheduledEvent: d,
                                    } = e;
                                    null == c || c(),
                                        (0, s.mMO)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("43600"),
                                                    n.e("28136"),
                                                    n.e("42821"),
                                                ]).then(n.bind(n, 234355));
                                                return (n) => {
                                                    var s, o;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((s = A({}, n)),
                                                        (o = o =
                                                            {
                                                                guild: t,
                                                                channel: l,
                                                                streamUserId: i,
                                                                applicationId: a,
                                                                analyticsLocation: u,
                                                                source: l.isGuildStageVoice()
                                                                    ? g.PE1.STAGE_CHANNEL
                                                                    : g.PE1.STREAM_INVITE,
                                                                guildScheduledEvent: d,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  s,
                                                                  Object.getOwnPropertyDescriptors(o),
                                                              )
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      s,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(o, e),
                                                                  );
                                                              }),
                                                        s),
                                                    );
                                                };
                                            },
                                            {
                                                modalKey: "stream-invite-modal",
                                                contextKey: o === g.BRT.POPOUT ? s.KX8 : s.SYi,
                                            },
                                        );
                                })({
                                    guild: M,
                                    channel: y,
                                    streamUserId: null == l ? void 0 : l.ownerId,
                                    applicationId: t,
                                    appContext: null != j ? j : w,
                                    exitFullScreen: O,
                                    analyticsLocation: v,
                                    guildScheduledEvent: x,
                                });
                        },
                        iconComponent: G,
                        label: k,
                        iconClassName: C,
                        look: S,
                        size: I,
                        color: T,
                        buttonText: N,
                    },
                    P,
                ),
            )
          : null;
}
