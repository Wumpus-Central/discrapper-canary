n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(372900),
    l = n(238246),
    s = n(788983),
    c = n(207035),
    u = n(823748),
    d = n(981631),
    b = n(63606);
function f(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: b.popoutContent,
        children: (0, r.jsx)(o.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(u.Z, { providedChannel: n }),
        }),
    });
}
function h(e, t) {
    let n = (0, c.P)(t),
        o = i.useCallback(() => {
            s.open(
                "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
                (t) =>
                    (0, r.jsx)(f, {
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
