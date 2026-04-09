"use strict";
n.d(t, { a: () => S });
var r = n(627968),
    i = n(64700),
    s = n(110259),
    a = n(311907),
    o = n(397927),
    l = n(139286),
    u = n(47167),
    c = n(713654),
    d = n(252263),
    _ = n(8455),
    f = n(67259),
    p = n(734057),
    h = n(954571),
    m = n(355622),
    E = n(652215),
    g = n(985018),
    A = n(299428);
function I(e) {
    let { channel: t, type: n } = e,
        r = (0, a.bG)([p.A], () => {
            let e = p.A.getChannel(t.parent_id);
            return e?.isForumLikeChannel() ?? !1;
        }),
        i = [m.oU.NORMAL, m.oU.SIDEBAR].includes(n);
    return { shouldShow: t.isThread() && !r && i };
}
function T(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        m = (0, _.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [I, T] = (0, a.yK)([p.A, f.A], () => [
            t.isThread() ? p.A.getChannel(t.parent_id) : null,
            f.A.getAlsoSendToChannel(t.id),
        ]),
        S = (0, u.Ay)(I),
        y = i.useCallback(
            (e) => {
                h.default.track(E.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, d.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    (0, l.A)(
        { name: s.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: s.ImpressionTypes.VIEW },
        { disableTrack: null == I || !m.enabled },
        [I, m.enabled],
    );
    let v = null != n;
    if (!m.enabled || null == I) return null;
    let N = (0, c.gU)(I),
        C = g.intl.format(g.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, r.jsx)(
                    o.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: A.Pf,
                        children: g.intl.string(g.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: S,
            channelNameHook: (e, t) =>
                (0, r.jsxs)(
                    o.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: A.Pf,
                        children: [null == N ? null : (0, r.jsx)(N, { color: "currentColor", className: A.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, r.jsx)("div", {
        className: A.kL,
        children: (0, r.jsx)(o.Checkbox, { checked: T, disabled: v, onChange: y, label: C, labelType: "secondary" }),
    });
}
function S(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: s } = I({ channel: t, type: n });
    return s ? (0, r.jsx)(T, { thread: t, pendingScheduledMessage: i }) : null;
}
