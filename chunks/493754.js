n.d(t, {
    W: () => _,
    Z: () => C
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(512722),
    s = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(924301),
    u = n(786915),
    h = n(430824),
    p = n(496675),
    m = n(981631),
    f = n(388032),
    g = n(716854);
function _(e) {
    let { guild: t, channel: l, streamUserId: a, applicationId: r, appContext: s, exitFullScreen: o, analyticsLocation: d, guildScheduledEvent: u } = e;
    null == o || o(),
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('76236')]).then(n.bind(n, 560114));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: l,
                        streamUserId: a,
                        applicationId: r,
                        analyticsLocation: d,
                        source: l.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                        guildScheduledEvent: u
                    });
            },
            {
                modalKey: 'stream-invite-modal',
                contextKey: s === m.IlC.POPOUT ? c.u1M : c.z1l
            }
        );
}
function C(e) {
    var t;
    let { stream: n, applicationId: l, channel: r, exitFullScreen: C, appContext: x, analyticsLocation: v, className: E, ...I } = e,
        b = null == r ? void 0 : r.getGuildId(),
        Z = null == r ? void 0 : r.id,
        N = (0, o.e7)([h.Z], () => (null != b ? h.Z.getGuild(b) : null), [b]),
        T = (0, o.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(Z), [Z]);
    if (!(null != N && null != r && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, r))) return null;
    let S = f.intl.string(f.t.VINpSE);
    return (
        null != n ? (S = f.intl.string(f.t['6VQaqa'])) : null != l && (S = f.intl.string(f.t['OzOM/v'])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.zxk, {
                    size: null !== (t = I.size) && void 0 !== t ? t : c.zxk.Sizes.SMALL,
                    color: g.buttonColor,
                    onClick: () => {
                        s()(null != N, 'guild cannot be null'),
                            s()(null != r, 'channel cannot be null'),
                            _({
                                guild: N,
                                channel: r,
                                streamUserId: null == n ? void 0 : n.ownerId,
                                applicationId: l,
                                appContext: x,
                                exitFullScreen: C,
                                analyticsLocation: v,
                                guildScheduledEvent: T
                            });
                    },
                    className: a()(E, g.textButton),
                    ...I,
                    children: S
                }),
                (0, i.jsx)(u.Z, {
                    channel: r,
                    stream: n,
                    appContext: x,
                    className: a()(E, g.iconButton),
                    exitFullScreen: C,
                    analyticsLocation: v,
                    guildScheduledEvent: T
                })
            ]
        })
    );
}
