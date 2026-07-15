"use strict";
n.d(t, { A: () => S, X: () => g });
var i = n(627968);
n(64700);
var r = n(284009),
    a = n.n(r),
    s = n(17928),
    l = n(192308),
    o = n(231723),
    d = n(768451),
    c = n(241541),
    u = n(298990),
    _ = n(688810),
    E = n(384059),
    A = n(267102),
    h = n(71393),
    I = n(480595),
    f = n(576705),
    p = n(204651),
    T = n(652215),
    m = n(375708);
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
    c?.(),
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("92430"),
                    n.e("54453"),
                    n.e("59957"),
                    n.e("28136"),
                    n.e("16084"),
                    n.e("36624"),
                    n.e("22547"),
                ]).then(n.bind(n, 778929));
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
            { modalKey: "stream-invite-modal", contextKey: d === T.BRT.POPOUT ? o.KX : o.SY },
        );
}
function S(e) {
    let {
            applicationId: t,
            stream: n,
            channel: r,
            exitFullScreen: l,
            appContext: o,
            analyticsLocation: S,
            guildScheduledEvent: N,
            shouldPrioritizeGroupPlusIcon: C = !1,
            isRichPresenceInvite: R = !1,
            iconClassName: O,
            look: L,
            size: D,
            buttonText: y,
            color: v,
            ...b
        } = e,
        M = (0, A.Us)(),
        { parentAnalyticsLocation: P } = (0, _.Ay)(),
        U = r?.getGuildId(),
        w = (0, s.bG)([h.A], () => (null != U ? h.A.getGuild(U) : null), [U]),
        G = (0, s.bG)([I.A], () => (null != t ? I.A.getApplicationActivity(t) : void 0)),
        x = null == t || C ? c.D : d.d,
        k = m.intl.string(m.t["6F9ivu"]);
    return (null != t && (k = m.intl.string(m.t["OzOM/q"])),
    null != n && (k = m.intl.string(m.t["6VQaqd"])),
    null != G && R)
        ? (0, i.jsx)(p.A, {
              onClick: () => {
                  null != P && (0, E.X)(P, E.O.INVITE), u.qf(G, !1, M);
              },
              iconComponent: x,
              label: k,
              iconClassName: O,
              look: L,
              size: D,
              buttonText: y,
              color: v ?? void 0,
          })
        : null != w && null != r && f.A.can(T.xBc.CREATE_INSTANT_INVITE, r)
          ? (0, i.jsx)(p.A, {
                onClick: () => {
                    a()(null != w, "guild cannot be null"),
                        a()(null != r, "channel cannot be null"),
                        null != P && (0, E.X)(P, E.O.INVITE),
                        g({
                            guild: w,
                            channel: r,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: o ?? M,
                            exitFullScreen: l,
                            analyticsLocation: S,
                            guildScheduledEvent: N,
                            source: r.isGuildStageVoice() ? T.PE1.STAGE_CHANNEL : T.PE1.STREAM_INVITE,
                        });
                },
                iconComponent: x,
                label: k,
                iconClassName: O,
                look: L,
                size: D,
                color: v,
                buttonText: y,
                ...b,
            })
          : null;
}
