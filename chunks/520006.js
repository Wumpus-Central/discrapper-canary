n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(298990),
    d = n(688810),
    c = n(384059),
    u = n(267102),
    h = n(71393),
    A = n(375492),
    g = n(576705),
    m = n(709562),
    p = n(652215),
    _ = n(985018);
function x(e) {
    let {
            applicationId: t,
            stream: l,
            channel: x,
            exitFullScreen: f,
            appContext: E,
            analyticsLocation: C,
            guildScheduledEvent: I,
            shouldPrioritizeGroupPlusIcon: S = !1,
            isRichPresenceInvite: b = !1,
            iconClassName: N,
            look: T,
            size: j,
            buttonText: v,
            color: y,
            ...R
        } = e,
        O = (0, u.Us)(),
        { parentAnalyticsLocation: L } = (0, d.Ay)(),
        D = x?.getGuildId(),
        M = (0, a.bG)([h.A], () => (null != D ? h.A.getGuild(D) : null), [D]),
        G = (0, a.bG)([A.A], () => (null != t ? A.A.getApplicationActivity(t) : void 0)),
        U = null == t || S ? r.DpX : r.dCJ,
        P = null != t ? _.intl.string(_.t["OzOM/q"]) : _.intl.string(_.t["6F9ivu"]);
    return null != G && b
        ? (0, i.jsx)(m.A, {
              onClick: () => {
                  null != L && (0, c.X)(L, c.O.INVITE), o.qf(G, !1, O);
              },
              iconComponent: U,
              label: P,
              iconClassName: N,
              look: T,
              size: j,
              buttonText: v,
              color: y ?? void 0,
          })
        : null != M && null != x && g.A.can(p.xBc.CREATE_INSTANT_INVITE, x)
          ? (0, i.jsx)(m.A, {
                onClick: () => {
                    s()(null != M, "guild cannot be null"),
                        s()(null != x, "channel cannot be null"),
                        null != L && (0, c.X)(L, c.O.INVITE),
                        (function (e) {
                            let {
                                guild: t,
                                channel: l,
                                streamUserId: s,
                                applicationId: a,
                                appContext: o,
                                exitFullScreen: d,
                                analyticsLocation: c,
                                guildScheduledEvent: u,
                            } = e;
                            d?.(),
                                (0, r.mMO)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("43600"),
                                            n.e("28136"),
                                            n.e("74918"),
                                        ]).then(n.bind(n, 234355));
                                        return (n) =>
                                            (0, i.jsx)(e, {
                                                ...n,
                                                guild: t,
                                                channel: l,
                                                streamUserId: s,
                                                applicationId: a,
                                                analyticsLocation: c,
                                                source: l.isGuildStageVoice()
                                                    ? p.PE1.STAGE_CHANNEL
                                                    : p.PE1.STREAM_INVITE,
                                                guildScheduledEvent: u,
                                            });
                                    },
                                    { modalKey: "stream-invite-modal", contextKey: o === p.BRT.POPOUT ? r.KX8 : r.SYi },
                                );
                        })({
                            guild: M,
                            channel: x,
                            streamUserId: l?.ownerId,
                            applicationId: t,
                            appContext: E ?? O,
                            exitFullScreen: f,
                            analyticsLocation: C,
                            guildScheduledEvent: I,
                        });
                },
                iconComponent: U,
                label: P,
                iconClassName: N,
                look: T,
                size: j,
                color: y,
                buttonText: v,
                ...R,
            })
          : null;
}
