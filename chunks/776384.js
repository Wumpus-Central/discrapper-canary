"use strict";
n.d(t, { a: () => T });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(311907),
    o = n(397927),
    l = n(139286),
    u = n(713654),
    c = n(252263),
    d = n(8455),
    _ = n(67259),
    f = n(734057),
    p = n(954571),
    h = n(355622),
    m = n(652215),
    g = n(985018),
    E = n(149650);
function A(e) {
    let { channel: t, type: n } = e,
        r = (0, s.bG)([f.A], () => {
            let e = f.A.getChannel(t.parent_id);
            return e?.isForumLikeChannel() ?? !1;
        }),
        i = [h.oU.NORMAL, h.oU.SIDEBAR].includes(n);
    return { shouldShow: t.isThread() && !r && i };
}
function I(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        h = (0, d.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [A, I] = (0, s.yK)([f.A, _.A], () => [
            t.isThread() ? f.A.getChannel(t.parent_id) : null,
            _.A.getAlsoSendToChannel(t.id),
        ]),
        T = i.useCallback(
            (e) => {
                p.default.track(m.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, c.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    (0, l.A)(
        { name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: a.ImpressionTypes.VIEW },
        { disableTrack: null == A || !h.enabled },
        [A, h.enabled],
    );
    let y = null != n;
    if (!h.enabled || null == A) return null;
    let S = (0, u.gU)(A),
        v = g.intl.format(g.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, r.jsx)(
                    o.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: E.Pf,
                        children: g.intl.string(g.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: A.name,
            channelNameHook: (e, t) =>
                (0, r.jsxs)(
                    o.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: E.Pf,
                        children: [null == S ? null : (0, r.jsx)(S, { color: "currentColor", className: E.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, r.jsx)("div", {
        className: E.kL,
        children: (0, r.jsx)(o.Checkbox, { checked: I, disabled: y, onChange: T, label: v, labelType: "secondary" }),
    });
}
function T(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: a } = A({ channel: t, type: n });
    return a ? (0, r.jsx)(I, { thread: t, pendingScheduledMessage: i }) : null;
}
