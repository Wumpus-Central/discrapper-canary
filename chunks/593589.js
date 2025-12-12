n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    o = n(481060),
    a = n(372900),
    l = n(238246),
    s = n(788983),
    c = n(207035),
    u = n(823748),
    d = n(981631),
    f = n(815523);
function b(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: f.popoutContent,
        children: (0, r.jsx)(a.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(u.Z, { providedChannel: n }),
        }),
    });
}
function p(e, t) {
    let n = (0, c.P)(t),
        a = i.useCallback(() => {
            s.open(
                "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
                (t) =>
                    (0, r.jsx)(b, {
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
        ? (0, r.jsx)(o.sNh, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => a(),
          })
        : null;
}
