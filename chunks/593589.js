t.d(n, { Z: () => b });
var r = t(200651),
    i = t(192379),
    o = t(481060),
    a = t(372900),
    c = t(238246),
    l = t(788983),
    u = t(207035),
    d = t(823748),
    _ = t(981631),
    p = t(683146);
function s(e) {
    let { windowKey: n, channel: t } = e;
    return (0, r.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, r.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, r.jsx)(d.Z, { providedChannel: t })
        })
    });
}
function b(e, n) {
    let t = (0, u.P)(n),
        a = i.useCallback(() => {
            l.bA(
                ''.concat(_.KJ3.CHANNEL_POPOUT, '-').concat(e.id),
                (n) =>
                    (0, r.jsx)(s, {
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
        ? (0, r.jsx)(o.sNh, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => a()
          })
        : null;
}
