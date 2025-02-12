t.d(n, { Z: () => b });
var i = t(200651),
    o = t(192379),
    a = t(481060),
    l = t(372900),
    r = t(238246),
    c = t(788983),
    d = t(207035),
    _ = t(823748),
    u = t(981631),
    s = t(469487);
function p(e) {
    let { windowKey: n, channel: t } = e;
    return (0, i.jsx)(r.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: s.popoutContent,
        children: (0, i.jsx)(l.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(_.Z, { providedChannel: t })
        })
    });
}
function b(e, n) {
    let t = (0, d.P)(n),
        l = o.useCallback(() => {
            c.bA(
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
        ? (0, i.jsx)(a.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => l()
          })
        : null;
}
