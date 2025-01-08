t.d(e, {
    Z: function () {
        return Z;
    }
});
var l = t(200651),
    i = t(192379),
    a = t(481060),
    u = t(372900),
    r = t(238246),
    o = t(788983),
    d = t(207035),
    c = t(823748),
    s = t(981631),
    h = t(157523);
function p(n) {
    let { windowKey: e, channel: t } = n;
    return (0, l.jsx)(r.Z, {
        withTitleBar: !0,
        windowKey: e,
        title: t.name,
        channelId: t.id,
        contentClassName: h.popoutContent,
        children: (0, l.jsx)(u.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t })
        })
    });
}
function Z(n, e) {
    let t = (0, d.P)(e),
        u = i.useCallback(() => {
            o.bA(
                ''.concat(s.KJ3.CHANNEL_POPOUT, '-').concat(n.id),
                (e) =>
                    (0, l.jsx)(p, {
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
        ? (0, l.jsx)(a.MenuItem, {
              id: 'channel-pop-out',
              label: 'Open in Popout',
              action: () => u()
          })
        : null;
}
