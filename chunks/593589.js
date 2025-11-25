n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(372900),
    l = n(238246),
    s = n(788983),
    c = n(207035),
    d = n(823748),
    u = n(981631),
    p = n(815523);
function h(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: p.popoutContent,
        children: (0, r.jsx)(o.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(d.Z, { providedChannel: n }),
        }),
    });
}
function b(e, t) {
    let n = (0, c.P)(t),
        o = i.useCallback(() => {
            s.open(
                "".concat(u.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
                (t) =>
                    (0, r.jsx)(h, {
                        windowKey: t,
                        channel: e,
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480,
                },
            );
        }, [e]);
    return n
        ? (0, r.jsx)(a.sNh, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => o(),
          })
        : null;
}
