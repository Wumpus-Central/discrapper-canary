"use strict";
n.d(t, { a: () => I });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(311907),
    a = n(834730),
    o = n(150934),
    c = n(139286),
    u = n(47167),
    d = n(713654),
    h = n(252263),
    m = n(8455),
    p = n(67259),
    f = n(734057),
    g = n(954571),
    _ = n(355622),
    x = n(652215),
    A = n(985018),
    C = n(132645);
function E(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        _ = (0, m.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [E, I] = (0, r.yK)([f.A, p.A], () => [
            t.isThread() ? f.A.getChannel(t.parent_id) : null,
            p.A.getAlsoSendToChannel(t.id),
        ]),
        v = (0, u.Ay)(E),
        y = l.useCallback(
            (e) => {
                g.default.track(x.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, h.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, c.A)(
            { name: s.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: s.ImpressionTypes.VIEW },
            { disableTrack: null == E || !_.enabled },
            [E, _.enabled],
        ),
        !_.enabled || null == E)
    )
        return null;
    let S = (0, d.gU)(E),
        b = A.intl.format(A.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    a.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: C.Pf,
                        children: A.intl.string(A.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: v,
            channelNameHook: (e, t) =>
                (0, i.jsxs)(
                    a.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: C.Pf,
                        children: [null == S ? null : (0, i.jsx)(S, { color: "currentColor", className: C.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: C.kL,
        children: (0, i.jsx)(o.S, { checked: I, disabled: null != n, onChange: y, label: b, labelType: "secondary" }),
    });
}
function I(e) {
    let { channel: t, type: n, pendingScheduledMessage: l } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, r.bG)([f.A], () => {
                    let e = f.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                l = [_.oU.NORMAL, _.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && l };
        })({ channel: t, type: n });
    return s ? (0, i.jsx)(E, { thread: t, pendingScheduledMessage: l }) : null;
}
