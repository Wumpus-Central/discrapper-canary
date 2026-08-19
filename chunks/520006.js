"use strict";
n.d(t, { A: () => S, X: () => g });
var i = n(477900);
n(582128);
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
                    n.e("827574"),
                    n.e("121149"),
                    n.e("612822"),
                    n.e("159957"),
                    n.e("119454"),
                    n.e("728136"),
                    n.e("216084"),
                    n.e("36624"),
                    n.e("22547"),
                ]).then(n.bind(n, 1310));
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
            isRichPresenceInvite: O = !1,
            iconClassName: R,
            look: L,
            size: y,
            buttonText: D,
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
    null != G && O)
        ? (0, i.jsx)(p.A, {
              onClick: function () {
                  null != G && (null != P && (0, E.X)(P, E.O.INVITE), u.qf(G, !1, M));
              },
              iconComponent: x,
              label: k,
              iconClassName: R,
              look: L,
              size: y,
              buttonText: D,
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
                iconClassName: R,
                look: L,
                size: y,
                color: v,
                buttonText: D,
                ...b,
            })
          : null;
}
