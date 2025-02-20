t.d(e, { Z: () => p });
var l = t(200651),
    i = t(192379),
    r = t(481060),
    o = t(372900),
    c = t(238246),
    a = t(788983),
    s = t(207035),
    d = t(823748),
    u = t(981631),
    h = t(343949);
function Z(n) {
    let { windowKey: e, channel: t } = n;
    return (0, l.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: t.name,
        channelId: t.id,
        contentClassName: h.popoutContent,
        children: (0, l.jsx)(o.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(d.Z, { providedChannel: t })
        })
    });
}
function p(n, e) {
    let t = (0, s.P)(e),
        o = i.useCallback(() => {
            a.bA(
                ''.concat(u.KJ3.CHANNEL_POPOUT, '-').concat(n.id),
                (e) =>
                    (0, l.jsx)(Z, {
                        windowKey: e,
                        channel: n
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480
                }
            );
        }, [n]);
    return t
        ? (0, l.jsx)(r.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => o()
          })
        : null;
}
