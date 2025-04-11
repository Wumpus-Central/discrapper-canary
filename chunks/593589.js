n.d(t, { Z: () => b });
var r = n(200651),
    o = n(192379),
    i = n(481060),
    c = n(372900),
    a = n(238246),
    l = n(788983),
    u = n(207035),
    d = n(823748),
    _ = n(981631),
    s = n(683146);
function p(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(a.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: s.popoutContent,
        children: (0, r.jsx)(c.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(d.Z, { providedChannel: n })
        })
    });
}
function b(e, t) {
    let n = (0, u.P)(t),
        c = o.useCallback(() => {
            l.bA(
                ''.concat(_.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (t) =>
                    (0, r.jsx)(p, {
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
        ? (0, r.jsx)(i.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => c()
          })
        : null;
}
