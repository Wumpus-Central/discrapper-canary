n.d(t, { A: () => m, X: () => p });
var i = n(627968);
n(64700);
var a = n(284009),
    r = n.n(a),
    s = n(17928),
    l = n(192308),
    o = n(231723),
    d = n(768451),
    c = n(241541),
    _ = n(298990),
    E = n(688810),
    u = n(384059),
    A = n(267102),
    I = n(71393),
    T = n(375492),
    h = n(576705),
    S = n(709562),
    N = n(652215),
    f = n(985018);
function p(e) {
    let {
        guild: t,
        channel: a,
        streamUserId: r,
        applicationId: s,
        appContext: d,
        exitFullScreen: c,
        analyticsLocation: _,
        guildScheduledEvent: E,
        source: u,
    } = e;
    c?.(),
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("99332"),
                    n.e("76664"),
                    n.e("6305"),
                    n.e("59957"),
                    n.e("19454"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("87317"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: a,
                        streamUserId: r,
                        applicationId: s,
                        analyticsLocation: _,
                        source: u,
                        guildScheduledEvent: E,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: d === N.BRT.POPOUT ? o.KX : o.SY },
        );
}
function m(e) {
    let {
            applicationId: t,
            stream: n,
            channel: a,
            exitFullScreen: l,
            appContext: o,
            analyticsLocation: m,
            guildScheduledEvent: O,
            shouldPrioritizeGroupPlusIcon: C = !1,
            isRichPresenceInvite: R = !1,
            iconClassName: g,
            look: L,
            size: D,
            buttonText: b,
            color: M,
            ...P
        } = e,
        U = (0, A.Us)(),
        { parentAnalyticsLocation: v } = (0, E.Ay)(),
        y = a?.getGuildId(),
        G = (0, s.bG)([I.A], () => (null != y ? I.A.getGuild(y) : null), [y]),
        w = (0, s.bG)([T.A], () => (null != t ? T.A.getApplicationActivity(t) : void 0)),
        x = null == t || C ? c.D : d.d,
        V = f.intl.string(f.t["6F9ivu"]);
    return (null != t && (V = f.intl.string(f.t["OzOM/q"])),
    null != n && (V = f.intl.string(f.t["6VQaqd"])),
    null != w && R)
        ? (0, i.jsx)(S.A, {
              onClick: () => {
                  null != v && (0, u.X)(v, u.O.INVITE), _.qf(w, !1, U);
              },
              iconComponent: x,
              label: V,
              iconClassName: g,
              look: L,
              size: D,
              buttonText: b,
              color: M ?? void 0,
          })
        : null != G && null != a && h.A.can(N.xBc.CREATE_INSTANT_INVITE, a)
          ? (0, i.jsx)(S.A, {
                onClick: () => {
                    r()(null != G, "guild cannot be null"),
                        r()(null != a, "channel cannot be null"),
                        null != v && (0, u.X)(v, u.O.INVITE),
                        p({
                            guild: G,
                            channel: a,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: o ?? U,
                            exitFullScreen: l,
                            analyticsLocation: m,
                            guildScheduledEvent: O,
                            source: a.isGuildStageVoice() ? N.PE1.STAGE_CHANNEL : N.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: x,
                label: V,
                iconClassName: g,
                look: L,
                size: D,
                color: M,
                buttonText: b,
                ...P,
            })
          : null;
}
