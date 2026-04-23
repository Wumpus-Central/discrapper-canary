n.d(t, { A: () => C, X: () => I });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(192308),
    o = n(231723),
    d = n(768451),
    c = n(241541),
    u = n(298990),
    h = n(688810),
    A = n(384059),
    _ = n(267102),
    m = n(71393),
    g = n(375492),
    p = n(576705),
    f = n(709562),
    E = n(652215),
    x = n(985018);
function I(e) {
    let {
        guild: t,
        channel: l,
        streamUserId: s,
        applicationId: a,
        appContext: d,
        exitFullScreen: c,
        analyticsLocation: u,
        guildScheduledEvent: h,
        source: A,
    } = e;
    c?.(),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                    n.bind(n, 234355),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: l,
                        streamUserId: s,
                        applicationId: a,
                        analyticsLocation: u,
                        source: A,
                        guildScheduledEvent: h,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: d === E.BRT.POPOUT ? o.KX : o.SY },
        );
}
function C(e) {
    let {
            applicationId: t,
            stream: n,
            channel: l,
            exitFullScreen: r,
            appContext: o,
            analyticsLocation: C,
            guildScheduledEvent: b,
            shouldPrioritizeGroupPlusIcon: N = !1,
            isRichPresenceInvite: S = !1,
            iconClassName: v,
            look: T,
            size: y,
            buttonText: j,
            color: R,
            ...L
        } = e,
        O = (0, _.Us)(),
        { parentAnalyticsLocation: G } = (0, h.Ay)(),
        M = l?.getGuildId(),
        D = (0, a.bG)([m.A], () => (null != M ? m.A.getGuild(M) : null), [M]),
        U = (0, a.bG)([g.A], () => (null != t ? g.A.getApplicationActivity(t) : void 0)),
        P = null == t || N ? c.D : d.d,
        w = x.intl.string(x.t["6F9ivu"]);
    return (null != t && (w = x.intl.string(x.t["OzOM/q"])),
    null != n && (w = x.intl.string(x.t["6VQaqd"])),
    null != U && S)
        ? (0, i.jsx)(f.A, {
              onClick: () => {
                  null != G && (0, A.X)(G, A.O.INVITE), u.qf(U, !1, O);
              },
              iconComponent: P,
              label: w,
              iconClassName: v,
              look: T,
              size: y,
              buttonText: j,
              color: R ?? void 0,
          })
        : null != D && null != l && p.A.can(E.xBc.CREATE_INSTANT_INVITE, l)
          ? (0, i.jsx)(f.A, {
                onClick: () => {
                    s()(null != D, "guild cannot be null"),
                        s()(null != l, "channel cannot be null"),
                        null != G && (0, A.X)(G, A.O.INVITE),
                        I({
                            guild: D,
                            channel: l,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: o ?? O,
                            exitFullScreen: r,
                            analyticsLocation: C,
                            guildScheduledEvent: b,
                            source: l.isGuildStageVoice() ? E.PE1.STAGE_CHANNEL : E.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: P,
                label: w,
                iconClassName: v,
                look: T,
                size: y,
                color: R,
                buttonText: j,
                ...L,
            })
          : null;
}
