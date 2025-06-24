t.d(n, { Z: () => m });
var i = t(255367),
    o = t(73800),
    r = t(481060),
    a = t(372900),
    c = t(238246),
    _ = t(788983),
    d = t(207035),
    l = t(823748),
    u = t(981631),
    s = t(683146);
function p(e) {
    let { windowKey: n, channel: t } = e;
    return (0, i.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: s.popoutContent,
        children: (0, i.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(l.Z, { providedChannel: t })
        })
    });
}
function m(e, n) {
    let t = (0, d.P)(n),
        a = o.useCallback(() => {
            _.bA(
                ''.concat(u.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (n) =>
                    (0, i.jsx)(p, {
                        windowKey: n,
                        channel: e
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480
                }
            );
        }, [e]);
    return t
        ? (0, i.jsx)(r.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => a()
          })
        : null;
}
