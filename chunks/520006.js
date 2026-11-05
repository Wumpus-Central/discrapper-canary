var i = n(477900);
n(582128);
var r = n(284009),
    a = n.n(r),
    s = n(855986),
    l = n(192308),
    o = n(231723),
    d = n(768451),
    c = n(241541),
    u = n(298990),
    _ = n(688810),
    E = n(384059),
    A = n(267102),
    f = n(71393),
    h = n(491009),
    I = n(576705),
    p = n(693409),
    m = n(652215),
    T = n(792996);
function g(e) {
    let {
        guild: t,
        channel: r,
        streamUserId: a,
        applicationId: s,
        appContext: d,
        exitFullScreen: c,
        analyticsLocation: u,
        guildScheduledEvent: _,
        source: E,
    } = e;
    (c?.(),
        (0, l.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e(683621),
                    n.e(711162),
                    n.e(401425),
                    n.e(919170),
                    n.e(258398),
                    n.e(70833),
                    n.e(897073),
                    n.e(658216),
                    n.e(159957),
                    n.e(728136),
                    n.e(680029),
                    n.e(966623),
                ]).then(n.bind(n, 660194));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: r,
                        streamUserId: a,
                        applicationId: s,
                        analyticsLocation: u,
                        source: E,
                        guildScheduledEvent: _,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: d === m.BRT.POPOUT ? "popout" : o.SY },
        ));
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    applicationId: t,
                    stream: n,
                    channel: r,
                    exitFullScreen: l,
                    appContext: o,
                    analyticsLocation: S,
                    guildScheduledEvent: N,
                    shouldPrioritizeGroupPlusIcon: C = !1,
                    isRichPresenceInvite: O = !1,
                    iconClassName: R,
                    look: L,
                    size: y,
                    buttonText: D,
                    color: b,
                    ...v
                } = e,
                P = (0, A.Us)(),
                { parentAnalyticsLocation: M } = (0, _.Ay)(),
                U = r?.getGuildId(),
                w = (0, s.bG)([f.A], () => (null != U ? f.A.getGuild(U) : null), [U]),
                G = (0, s.bG)([h.A], () => (null != t ? h.A.getApplicationActivity(t) : void 0)),
                x = null == t || C ? c.GroupPlusIcon : d.ActivitiesPlusIcon,
                k = T.intl.string(T.t["6F9ivu"]);
            return (null != t && (k = T.intl.string(T.t["OzOM/q"])),
            null != n && (k = T.intl.string(T.t["6VQaqd"])),
            null != G && O)
                ? (0, i.jsx)(p.A, {
                      onClick: function () {
                          null != G && (null != M && (0, E.XJ)(M, E.OP.INVITE), u.qf(G, !1, P));
                      },
                      iconComponent: x,
                      label: k,
                      iconClassName: R,
                      look: L,
                      size: y,
                      buttonText: D,
                      color: b ?? void 0,
                  })
                : null != w && null != r && I.A.can(m.xBc.CREATE_INSTANT_INVITE, r)
                  ? (0, i.jsx)(p.A, {
                        onClick: () => {
                            (a()(null != w, "guild cannot be null"),
                                a()(null != r, "channel cannot be null"),
                                null != M && (0, E.XJ)(M, E.OP.INVITE),
                                g({
                                    guild: w,
                                    channel: r,
                                    streamUserId: n?.ownerId,
                                    applicationId: t,
                                    appContext: o ?? P,
                                    exitFullScreen: l,
                                    analyticsLocation: S,
                                    guildScheduledEvent: N,
                                    source: r.isGuildStageVoice() ? m.PE1.STAGE_CHANNEL : m.PE1.STREAM_INVITE,
                                }));
                        },
                        iconComponent: x,
                        label: k,
                        iconClassName: R,
                        look: L,
                        size: y,
                        color: b,
                        buttonText: D,
                        ...v,
                    })
                  : null;
        },
        X: g,
    },
);
