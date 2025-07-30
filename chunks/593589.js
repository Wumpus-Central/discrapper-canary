n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(372900),
    c = n(238246),
    s = n(788983),
    d = n(207035),
    l = n(823748),
    _ = n(981631),
    p = n(683146);
function u(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: p.popoutContent,
        children: (0, r.jsx)(a.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(l.Z, { providedChannel: n })
        })
    });
}
function b(e, t) {
    let n = (0, d.P)(t),
        a = i.useCallback(() => {
            s.bA(
                ''.concat(_.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (t) =>
                    (0, r.jsx)(u, {
                        windowKey: t,
                        channel: e
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480
                }
            );
        }, [e]);
    return n
        ? (0, r.jsx)(o.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => a()
          })
        : null;
}
