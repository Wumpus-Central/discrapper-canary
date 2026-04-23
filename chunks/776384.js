"use strict";
n.d(t, { a: () => S });
var r = n(627968),
    i = n(64700),
    s = n(110259),
    a = n(311907),
    o = n(834730),
    l = n(150934),
    u = n(139286),
    c = n(47167),
    d = n(713654),
    _ = n(252263),
    f = n(8455),
    p = n(67259),
    h = n(734057),
    E = n(954571),
    m = n(355622),
    g = n(652215),
    A = n(985018),
    I = n(132645);
function T(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        m = (0, f.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [T, S] = (0, a.yK)([h.A, p.A], () => [
            t.isThread() ? h.A.getChannel(t.parent_id) : null,
            p.A.getAlsoSendToChannel(t.id),
        ]),
        y = (0, c.Ay)(T),
        N = i.useCallback(
            (e) => {
                E.default.track(g.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, _.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, u.A)(
            { name: s.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: s.ImpressionTypes.VIEW },
            { disableTrack: null == T || !m.enabled },
            [T, m.enabled],
        ),
        !m.enabled || null == T)
    )
        return null;
    let v = (0, d.gU)(T),
        C = A.intl.format(A.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, r.jsx)(
                    o.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: I.Pf,
                        children: A.intl.string(A.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: y,
            channelNameHook: (e, t) =>
                (0, r.jsxs)(
                    o.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: I.Pf,
                        children: [null == v ? null : (0, r.jsx)(v, { color: "currentColor", className: I.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, r.jsx)("div", {
        className: I.kL,
        children: (0, r.jsx)(l.S, { checked: S, disabled: null != n, onChange: N, label: C, labelType: "secondary" }),
    });
}
function S(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                r = (0, a.bG)([h.A], () => {
                    let e = h.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                i = [m.oU.NORMAL, m.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !r && i };
        })({ channel: t, type: n });
    return s ? (0, r.jsx)(T, { thread: t, pendingScheduledMessage: i }) : null;
}
