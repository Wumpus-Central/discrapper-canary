n.d(t, { P: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(442837),
    s = n(481060),
    l = n(213609),
    c = n(471445),
    u = n(920256),
    d = n(284928),
    f = n(315355),
    p = n(592125),
    _ = n(626135),
    m = n(541716),
    h = n(981631),
    g = n(388032),
    E = n(224438);
function b(e) {
    let { channel: t, type: n } = e,
        r = (0, o.e7)([p.Z], () => {
            var e;
            let n = p.Z.getChannel(t.parent_id);
            return null != (e = null == n ? void 0 : n.isForumLikeChannel()) && e;
        }),
        i = [m.Ie.NORMAL, m.Ie.SIDEBAR].includes(n);
    return { shouldShow: t.isThread() && !r && i };
}
function y(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        m = (0, d.KN)({ location: "ThreadsAlsoSendToChannelArea" }),
        [b, y] = (0, o.Wu)([p.Z, f.Z], () => [
            t.isThread() ? p.Z.getChannel(t.parent_id) : null,
            f.Z.getAlsoSendToChannel(t.id),
        ]),
        O = i.useCallback(
            (e) => {
                _.default.track(h.rMx.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, u.E)({
                        channelId: t.id,
                        enabled: e,
                    });
            },
            [t],
        );
    (0, l.Z)(
        {
            name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL,
            type: a.ImpressionTypes.VIEW,
        },
        { disableTrack: null == b || !m.enabled },
        [b, m.enabled],
    );
    let v = null != n;
    if (!m.enabled || null == b) return null;
    let S = (0, c.KS)(b),
        I = g.intl.format(g.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, r.jsx)(
                    s.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: E.label,
                        children: g.intl.string(g.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: b.name,
            channelNameHook: (e, t) =>
                (0, r.jsxs)(
                    s.Text,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: E.label,
                        children: [
                            null == S
                                ? null
                                : (0, r.jsx)(
                                      S,
                                      {
                                          color: "currentColor",
                                          className: E.icon,
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
        className: E.container,
        children: (0, r.jsx)(s.Checkbox, {
            checked: y,
            disabled: v,
            onChange: O,
            label: I,
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
