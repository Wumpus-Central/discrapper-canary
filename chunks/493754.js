n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(924301),
    u = n(786915),
    h = n(430824),
    p = n(496675),
    m = n(981631),
    f = n(388032),
    g = n(318203);
function C(e) {
    var t, l;
    let { stream: a, applicationId: C, channel: x, exitFullScreen: v, appContext: _, analyticsLocation: I, className: E, ...b } = e,
        Z = null == x ? void 0 : x.getGuildId(),
        N = null == x ? void 0 : x.id,
        S = (0, o.e7)([h.Z], () => (null != Z ? h.Z.getGuild(Z) : null), [Z]),
        T = (0, o.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(N), [N]);
    if (((t = S), (l = x), !(null != t && null != l && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, l)))) return null;
    let j = f.intl.string(f.t.VINpSE);
    return (
        null != a ? (j = f.intl.string(f.t['6VQaqa'])) : null != C && (j = f.intl.string(f.t['OzOM/v'])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    color: g.buttonColor,
                    onClick: () => {
                        s()(null != S, 'guild cannot be null'),
                            s()(null != x, 'channel cannot be null'),
                            !(function (e) {
                                let { guild: t, channel: l, streamUserId: r, applicationId: a, appContext: s, exitFullScreen: o, analyticsLocation: d, guildScheduledEvent: u } = e;
                                null == o || o(),
                                    (0, c.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    guild: t,
                                                    channel: l,
                                                    streamUserId: r,
                                                    applicationId: a,
                                                    analyticsLocation: d,
                                                    source: l.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                                                    guildScheduledEvent: u
                                                });
                                        },
                                        {
                                            modalKey: 'stream-invite-modal',
                                            contextKey: s === m.IlC.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
                                        }
                                    );
                            })({
                                guild: S,
                                channel: x,
                                streamUserId: null == a ? void 0 : a.ownerId,
                                applicationId: C,
                                appContext: _,
                                exitFullScreen: v,
                                analyticsLocation: I,
                                guildScheduledEvent: T
                            });
                    },
                    className: r()(E, g.textButton),
                    ...b,
                    children: j
                }),
                (0, i.jsx)(u.Z, {
                    channel: x,
                    stream: a,
                    appContext: _,
                    className: r()(E, g.iconButton),
                    exitFullScreen: v,
                    analyticsLocation: I,
                    guildScheduledEvent: T
                })
            ]
        })
    );
}
