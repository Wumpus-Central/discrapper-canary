n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(372900),
    c = n(238246),
    a = n(788983),
    u = n(207035),
    s = n(823748),
    d = n(981631),
    p = n(683146);
function b(e) {
    let { windowKey: t, channel: n } = e;
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: t,
        title: n.name,
        channelId: n.id,
        contentClassName: p.popoutContent,
        children: (0, r.jsx)(o.Z.Provider, {
            value: n.guild_id,
            children: (0, r.jsx)(s.Z, { providedChannel: n })
        })
    });
}
function f(e, t) {
    let n = (0, u.P)(t),
        o = i.useCallback(() => {
            a.bA(
                ''.concat(d.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (t) =>
                    (0, r.jsx)(b, {
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
        ? (0, r.jsx)(l.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => o()
          })
        : null;
}
