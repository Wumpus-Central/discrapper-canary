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
    g = n(318203);
function _(e) {
    let { guild: t, channel: l, streamUserId: a, applicationId: r, appContext: s, exitFullScreen: o, analyticsLocation: d, guildScheduledEvent: u } = e;
    null == o || o(),
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
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
    let { stream: t, applicationId: n, channel: l, exitFullScreen: r, appContext: C, analyticsLocation: x, className: v, ...E } = e,
        I = null == l ? void 0 : l.getGuildId(),
        b = null == l ? void 0 : l.id,
        Z = (0, o.e7)([h.Z], () => (null != I ? h.Z.getGuild(I) : null), [I]),
        N = (0, o.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(b), [b]);
    if (!(null != Z && null != l && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, l))) return null;
    let T = f.intl.string(f.t.VINpSE);
    return (
        null != t ? (T = f.intl.string(f.t['6VQaqa'])) : null != n && (T = f.intl.string(f.t['OzOM/v'])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.zxk, {
                    size: c.zxk.Sizes.SMALL,
                    color: g.buttonColor,
                    onClick: () => {
                        s()(null != Z, 'guild cannot be null'),
                            s()(null != l, 'channel cannot be null'),
                            _({
                                guild: Z,
                                channel: l,
                                streamUserId: null == t ? void 0 : t.ownerId,
                                applicationId: n,
                                appContext: C,
                                exitFullScreen: r,
                                analyticsLocation: x,
                                guildScheduledEvent: N
                            });
                    },
                    className: a()(v, g.textButton),
                    ...E,
                    children: T
                }),
                (0, i.jsx)(u.Z, {
                    channel: l,
                    stream: t,
                    appContext: C,
                    className: a()(v, g.iconButton),
                    exitFullScreen: r,
                    analyticsLocation: x,
                    guildScheduledEvent: N
                })
            ]
        })
    );
}
