t.d(n, { Z: () => h });
var r = t(951288),
    i = t(647438),
    o = t(481060),
    a = t(372900),
    l = t(238246),
    c = t(788983),
    s = t(207035),
    d = t(823748),
    u = t(981631),
    p = t(815523);
function b(e) {
    let { windowKey: n, channel: t } = e;
    return (0, r.jsx)(l.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, r.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, r.jsx)(d.Z, { providedChannel: t }),
        }),
    });
}
function h(e, n) {
    let t = (0, s.P)(n),
        a = i.useCallback(() => {
            c.bA(
                "".concat(u.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
                (n) =>
                    (0, r.jsx)(b, {
                        windowKey: n,
                        channel: e,
                    }),
                {
                    defaultWidth: 854,
                    defaultHeight: 480,
                },
            );
        }, [e]);
    return t
        ? (0, r.jsx)(o.sNh, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => a(),
          })
        : null;
}
