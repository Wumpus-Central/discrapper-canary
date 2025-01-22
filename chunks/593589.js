t.d(e, {
    Z: function () {
        return Z;
    }
});
var i = t(200651),
    u = t(192379),
    l = t(481060),
    o = t(372900),
    r = t(238246),
    c = t(788983),
    a = t(207035),
    d = t(823748),
    s = t(981631),
    p = t(157523);
function h(n) {
    let { windowKey: e, channel: t } = n;
    return (0, i.jsx)(r.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, i.jsx)(o.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(d.Z, { providedChannel: t })
        })
    });
}
function Z(n, e) {
    let t = (0, a.P)(e),
        o = u.useCallback(() => {
            c.bA(
                ''.concat(s.KJ3.CHANNEL_POPOUT, '-').concat(n.id),
                (e) =>
                    (0, i.jsx)(h, {
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
        ? (0, i.jsx)(l.MenuItem, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => o()
          })
        : null;
}
