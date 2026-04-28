n.d(t, { A: () => S, X: () => C });
var l = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    r = n(17928),
    a = n(192308),
    o = n(231723),
    u = n(768451),
    d = n(241541),
    c = n(298990),
    h = n(688810),
    A = n(384059),
    m = n(267102),
    g = n(71393),
    p = n(375492),
    f = n(576705),
    E = n(709562),
    I = n(652215),
    _ = n(985018);
function C(e) {
    let {
        guild: t,
        channel: i,
        streamUserId: s,
        applicationId: r,
        appContext: u,
        exitFullScreen: d,
        analyticsLocation: c,
        guildScheduledEvent: h,
        source: A,
    } = e;
    d?.(),
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("80813"),
                    n.e("83818"),
                    n.e("93816"),
                    n.e("58216"),
                    n.e("59957"),
                    n.e("19454"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("87317"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: i,
                        streamUserId: s,
                        applicationId: r,
                        analyticsLocation: c,
                        source: A,
                        guildScheduledEvent: h,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: u === I.BRT.POPOUT ? o.KX : o.SY },
        );
}
function S(e) {
    let {
            applicationId: t,
            stream: n,
            channel: i,
            exitFullScreen: a,
            appContext: o,
            analyticsLocation: S,
            guildScheduledEvent: x,
            shouldPrioritizeGroupPlusIcon: N = !1,
            isRichPresenceInvite: T = !1,
            iconClassName: R,
            look: y,
            size: b,
            buttonText: v,
            color: j,
            ...O
        } = e,
        M = (0, m.Us)(),
        { parentAnalyticsLocation: L } = (0, h.Ay)(),
        D = i?.getGuildId(),
        G = (0, r.bG)([g.A], () => (null != D ? g.A.getGuild(D) : null), [D]),
        P = (0, r.bG)([p.A], () => (null != t ? p.A.getApplicationActivity(t) : void 0)),
        w = null == t || N ? d.D : u.d,
        U = _.intl.string(_.t["6F9ivu"]);
    return (null != t && (U = _.intl.string(_.t["OzOM/q"])),
    null != n && (U = _.intl.string(_.t["6VQaqd"])),
    null != P && T)
        ? (0, l.jsx)(E.A, {
              onClick: () => {
                  null != L && (0, A.X)(L, A.O.INVITE), c.qf(P, !1, M);
              },
              iconComponent: w,
              label: U,
              iconClassName: R,
              look: y,
              size: b,
              buttonText: v,
              color: j ?? void 0,
          })
        : null != G && null != i && f.A.can(I.xBc.CREATE_INSTANT_INVITE, i)
          ? (0, l.jsx)(E.A, {
                onClick: () => {
                    s()(null != G, "guild cannot be null"),
                        s()(null != i, "channel cannot be null"),
                        null != L && (0, A.X)(L, A.O.INVITE),
                        C({
                            guild: G,
                            channel: i,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: o ?? M,
                            exitFullScreen: a,
                            analyticsLocation: S,
                            guildScheduledEvent: x,
                            source: i.isGuildStageVoice() ? I.PE1.STAGE_CHANNEL : I.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: w,
                label: U,
                iconClassName: R,
                look: y,
                size: b,
                color: j,
                buttonText: v,
                ...O,
            })
          : null;
}
