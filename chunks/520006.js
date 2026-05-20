"use strict";
n.d(t, { A: () => S, X: () => T });
var i = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(192308),
    l = n(231723),
    u = n(768451),
    c = n(241541),
    d = n(298990),
    _ = n(688810),
    f = n(384059),
    h = n(267102),
    p = n(71393),
    E = n(480595),
    m = n(576705),
    g = n(204651),
    A = n(652215),
    I = n(375708);
function T(e) {
    let {
        guild: t,
        channel: r,
        streamUserId: s,
        applicationId: a,
        appContext: u,
        exitFullScreen: c,
        analyticsLocation: d,
        guildScheduledEvent: _,
        source: f,
    } = e;
    c?.(),
        (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("44710"),
                    n.e("67485"),
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
                        channel: r,
                        streamUserId: s,
                        applicationId: a,
                        analyticsLocation: d,
                        source: f,
                        guildScheduledEvent: _,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: u === A.BRT.POPOUT ? l.KX : l.SY },
        );
}
function S(e) {
    let {
            applicationId: t,
            stream: n,
            channel: r,
            exitFullScreen: o,
            appContext: l,
            analyticsLocation: S,
            guildScheduledEvent: N,
            shouldPrioritizeGroupPlusIcon: y = !1,
            isRichPresenceInvite: C = !1,
            iconClassName: v,
            look: O,
            size: R,
            buttonText: b,
            color: D,
            ...L
        } = e,
        w = (0, h.Us)(),
        { parentAnalyticsLocation: M } = (0, _.Ay)(),
        P = r?.getGuildId(),
        x = (0, a.bG)([p.A], () => (null != P ? p.A.getGuild(P) : null), [P]),
        U = (0, a.bG)([E.A], () => (null != t ? E.A.getApplicationActivity(t) : void 0)),
        k = null == t || y ? c.D : u.d,
        G = I.intl.string(I.t["6F9ivu"]);
    return (null != t && (G = I.intl.string(I.t["OzOM/q"])),
    null != n && (G = I.intl.string(I.t["6VQaqd"])),
    null != U && C)
        ? (0, i.jsx)(g.A, {
              onClick: () => {
                  null != M && (0, f.X)(M, f.O.INVITE), d.qf(U, !1, w);
              },
              iconComponent: k,
              label: G,
              iconClassName: v,
              look: O,
              size: R,
              buttonText: b,
              color: D ?? void 0,
          })
        : null != x && null != r && m.A.can(A.xBc.CREATE_INSTANT_INVITE, r)
          ? (0, i.jsx)(g.A, {
                onClick: () => {
                    s()(null != x, "guild cannot be null"),
                        s()(null != r, "channel cannot be null"),
                        null != M && (0, f.X)(M, f.O.INVITE),
                        T({
                            guild: x,
                            channel: r,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: l ?? w,
                            exitFullScreen: o,
                            analyticsLocation: S,
                            guildScheduledEvent: N,
                            source: r.isGuildStageVoice() ? A.PE1.STAGE_CHANNEL : A.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: k,
                label: G,
                iconClassName: v,
                look: O,
                size: R,
                color: D,
                buttonText: b,
                ...L,
            })
          : null;
}
