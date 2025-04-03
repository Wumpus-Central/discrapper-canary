n.d(t, { Z: () => b });
var i = n(200651),
    o = n(192379),
    r = n(481060),
    a = n(372900),
    c = n(238246),
    l = n(788983),
    d = n(207035),
    u = n(823748),
    _ = n(981631),
    s = n(683146);
function p(e) {
    let { windowKey: t, channel: n } = e;
    return (0, i.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: s.popoutContent,
        children: (0, i.jsx)(a.Z.Provider, {
            value: n.guild_id,
            children: (0, i.jsx)(u.Z, { providedChannel: n })
        })
    });
}
function b(e, t) {
    let n = (0, d.P)(t),
        a = o.useCallback(() => {
            l.bA(
                ''.concat(_.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (t) =>
                    (0, i.jsx)(p, {
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
        ? (0, i.jsx)(r.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => a()
          })
        : null;
}
