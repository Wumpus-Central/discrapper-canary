n.d(t, { a: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(311907),
    o = n(397927),
    l = n(139286),
    c = n(713654),
    u = n(252263),
    d = n(8455),
    f = n(67259),
    p = n(734057),
    _ = n(954571),
    h = n(355622),
    m = n(652215),
    g = n(985018),
    E = n(149650);
function b(e) {
    let { channel: t, type: n } = e,
        r = (0, s.bG)([p.A], () => {
            var e;
            let n = p.A.getChannel(t.parent_id);
            return null != (e = null == n ? void 0 : n.isForumLikeChannel()) && e;
        }),
        i = [h.oU.NORMAL, h.oU.SIDEBAR].includes(n);
    return { shouldShow: t.isThread() && !r && i };
}
function y(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        h = (0, d.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [b, y] = (0, s.yK)([p.A, f.A], () => [
            t.isThread() ? p.A.getChannel(t.parent_id) : null,
            f.A.getAlsoSendToChannel(t.id),
        ]),
        O = i.useCallback(
            (e) => {
                _.default.track(m.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, u.B)({
                        channelId: t.id,
                        enabled: e,
                    });
            },
            [t],
        );
    (0, l.A)(
        {
            name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL,
            type: a.ImpressionTypes.VIEW,
        },
        { disableTrack: null == b || !h.enabled },
        [b, h.enabled],
    );
    let A = null != n;
    if (!h.enabled || null == b) return null;
    let v = (0, c.gU)(b),
        S = g.intl.format(g.t.UqL10G, {
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
            channelName: b.name,
            channelNameHook: (e, t) =>
                (0, r.jsxs)(
                    o.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: E.Pf,
                        children: [
                            null == v
                                ? null
                                : (0, r.jsx)(
                                      v,
                                      {
                                          color: "currentColor",
                                          className: E.Kk,
                                      },
                                      t,
                                  ),
                            e,
                        ],
                    },
                    t,
                ),
        });
    return (0, r.jsx)("div", {
        className: E.kL,
        children: (0, r.jsx)(o.Checkbox, {
            checked: y,
            disabled: A,
            onChange: O,
            label: S,
            labelType: "secondary",
        }),
    });
}
function O(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: a } = b({
            channel: t,
            type: n,
        });
    return a
        ? (0, r.jsx)(y, {
              thread: t,
              pendingScheduledMessage: i,
          })
        : null;
}
