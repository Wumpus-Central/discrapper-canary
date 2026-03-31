n.d(t, { A: () => x, X: () => f });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(298990),
    c = n(688810),
    d = n(384059),
    u = n(267102),
    h = n(71393),
    A = n(375492),
    _ = n(576705),
    m = n(709562),
    g = n(652215),
    p = n(985018);
function f(e) {
    let {
        guild: t,
        channel: l,
        streamUserId: s,
        applicationId: a,
        appContext: o,
        exitFullScreen: c,
        analyticsLocation: d,
        guildScheduledEvent: u,
        source: h,
    } = e;
    c?.(),
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("89886")]).then(
                    n.bind(n, 234355),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: l,
                        streamUserId: s,
                        applicationId: a,
                        analyticsLocation: d,
                        source: h,
                        guildScheduledEvent: u,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: o === g.BRT.POPOUT ? r.KX8 : r.SYi },
        );
}
function x(e) {
    let {
            applicationId: t,
            stream: n,
            channel: l,
            exitFullScreen: x,
            appContext: E,
            analyticsLocation: I,
            guildScheduledEvent: C,
            shouldPrioritizeGroupPlusIcon: N = !1,
            isRichPresenceInvite: T = !1,
            iconClassName: S,
            look: b,
            size: y,
            buttonText: v,
            color: j,
            ...R
        } = e,
        O = (0, u.Us)(),
        { parentAnalyticsLocation: L } = (0, c.Ay)(),
        M = l?.getGuildId(),
        D = (0, a.bG)([h.A], () => (null != M ? h.A.getGuild(M) : null), [M]),
        U = (0, a.bG)([A.A], () => (null != t ? A.A.getApplicationActivity(t) : void 0)),
        G = null == t || N ? r.DpX : r.dCJ,
        P = p.intl.string(p.t["6F9ivu"]);
    return (null != t && (P = p.intl.string(p.t["OzOM/q"])),
    null != n && (P = p.intl.string(p.t["6VQaqd"])),
    null != U && T)
        ? (0, i.jsx)(m.A, {
              onClick: () => {
                  null != L && (0, d.X)(L, d.O.INVITE), o.qf(U, !1, O);
              },
              iconComponent: G,
              label: P,
              iconClassName: S,
              look: b,
              size: y,
              buttonText: v,
              color: j ?? void 0,
          })
        : null != D && null != l && _.A.can(g.xBc.CREATE_INSTANT_INVITE, l)
          ? (0, i.jsx)(m.A, {
                onClick: () => {
                    s()(null != D, "guild cannot be null"),
                        s()(null != l, "channel cannot be null"),
                        null != L && (0, d.X)(L, d.O.INVITE),
                        f({
                            guild: D,
                            channel: l,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: E ?? O,
                            exitFullScreen: x,
                            analyticsLocation: I,
                            guildScheduledEvent: C,
                            source: l.isGuildStageVoice() ? g.PE1.STAGE_CHANNEL : g.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: G,
                label: P,
                iconClassName: S,
                look: b,
                size: y,
                color: j,
                buttonText: v,
                ...R,
            })
          : null;
}
