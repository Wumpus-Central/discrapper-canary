t.d(n, { Z: () => f });
var i = t(951288),
    r = t(647438),
    o = t(481060),
    a = t(372900),
    c = t(238246),
    l = t(788983),
    d = t(207035),
    _ = t(823748),
    s = t(981631),
    p = t(815523);
function u(e) {
    let { windowKey: n, channel: t } = e;
    return (0, i.jsx)(c.Z, {
        withTitleBar: !0,
        windowKey: n,
        title: t.name,
        channelId: t.id,
        contentClassName: p.popoutContent,
        children: (0, i.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(_.Z, { providedChannel: t }),
        }),
    });
}
function f(e, n) {
    let t = (0, d.P)(n),
        a = r.useCallback(() => {
            l.bA(
                "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
                (n) =>
                    (0, i.jsx)(u, {
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
        ? (0, i.jsx)(o.sNh, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => a(),
          })
        : null;
}
