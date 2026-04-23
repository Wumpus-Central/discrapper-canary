n.d(t, { A: () => I, X: () => x });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    r = n(17928),
    a = n(192308),
    o = n(231723),
    d = n(768451),
    c = n(241541),
    u = n(298990),
    h = n(688810),
    A = n(384059),
    _ = n(267102),
    g = n(71393),
    m = n(375492),
    p = n(576705),
    f = n(709562),
    E = n(652215),
    C = n(985018);
function x(e) {
    let {
        guild: t,
        channel: l,
        streamUserId: s,
        applicationId: r,
        appContext: d,
        exitFullScreen: c,
        analyticsLocation: u,
        guildScheduledEvent: h,
        source: A,
    } = e;
    c?.(),
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                    n.bind(n, 1310),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: l,
                        streamUserId: s,
                        applicationId: r,
                        analyticsLocation: u,
                        source: A,
                        guildScheduledEvent: h,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: d === E.BRT.POPOUT ? o.KX : o.SY },
        );
}
function I(e) {
    let {
            applicationId: t,
            stream: n,
            channel: l,
            exitFullScreen: a,
            appContext: o,
            analyticsLocation: I,
            guildScheduledEvent: b,
            shouldPrioritizeGroupPlusIcon: S = !1,
            isRichPresenceInvite: N = !1,
            iconClassName: T,
            look: v,
            size: y,
            buttonText: R,
            color: j,
            ...L
        } = e,
        O = (0, _.Us)(),
        { parentAnalyticsLocation: G } = (0, h.Ay)(),
        M = l?.getGuildId(),
        D = (0, r.bG)([g.A], () => (null != M ? g.A.getGuild(M) : null), [M]),
        U = (0, r.bG)([m.A], () => (null != t ? m.A.getApplicationActivity(t) : void 0)),
        P = null == t || S ? c.D : d.d,
        w = C.intl.string(C.t["6F9ivu"]);
    return (null != t && (w = C.intl.string(C.t["OzOM/q"])),
    null != n && (w = C.intl.string(C.t["6VQaqd"])),
    null != U && N)
        ? (0, i.jsx)(f.A, {
              onClick: () => {
                  null != G && (0, A.X)(G, A.O.INVITE), u.qf(U, !1, O);
              },
              iconComponent: P,
              label: w,
              iconClassName: T,
              look: v,
              size: y,
              buttonText: R,
              color: j ?? void 0,
          })
        : null != D && null != l && p.A.can(E.xBc.CREATE_INSTANT_INVITE, l)
          ? (0, i.jsx)(f.A, {
                onClick: () => {
                    s()(null != D, "guild cannot be null"),
                        s()(null != l, "channel cannot be null"),
                        null != G && (0, A.X)(G, A.O.INVITE),
                        x({
                            guild: D,
                            channel: l,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: o ?? O,
                            exitFullScreen: a,
                            analyticsLocation: I,
                            guildScheduledEvent: b,
                            source: l.isGuildStageVoice() ? E.PE1.STAGE_CHANNEL : E.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: P,
                label: w,
                iconClassName: T,
                look: v,
                size: y,
                color: j,
                buttonText: R,
                ...L,
            })
          : null;
}
