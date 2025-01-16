var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(287734),
    s = n(305325),
    o = n(281956),
    c = n(584729),
    d = n(27457),
    u = n(354459),
    h = n(388032),
    p = n(723902);
t.Z = function (e) {
    var t, n;
    let { participants: m, channel: f, hasConnectPermission: g } = e,
        C = m.filter(u.Io),
        x = (0, o.J)(f.guild_id),
        v = l.useCallback(() => {
            x ? (0, s.hk)(f.guild_id, () => a.default.selectVoiceChannel(f.id)) : a.default.selectVoiceChannel(f.id);
        }, [f.id, f.guild_id, x]),
        _ = 4 === C.length ? 2 : 3;
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.tiles,
                style: { maxWidth: 168 * _ },
                children: C.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: f,
                            className: p.tile,
                            paused: !0,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48
                        },
                        e.id
                    )
                )
            }),
            (0, i.jsx)(r.Heading, {
                className: p.channelName,
                variant: 'heading-xxl/semibold',
                children: f.name
            }),
            (0, i.jsx)('div', {
                className: p.participantsRow,
                children: (0, i.jsx)(r.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        ((t = f),
                        0 === (n = C).length
                            ? h.intl.string(h.t.zSqdra)
                            : 1 === n.length
                              ? h.intl.formatToPlainString(h.t.BUyJIC, { a: (0, c.Z)(t, n[0]) })
                              : 2 === n.length
                                ? h.intl.formatToPlainString(h.t.dcyZf3, {
                                      a: (0, c.Z)(t, n[0]),
                                      b: (0, c.Z)(t, n[1])
                                  })
                                : n.length > 2
                                  ? h.intl.formatToPlainString(h.t['44/Obm'], {
                                        a: (0, c.Z)(t, n[0]),
                                        b: (0, c.Z)(t, n[1]),
                                        n: n.length - 2
                                    })
                                  : void 0)
                })
            }),
            (0, i.jsx)(r.Button, {
                disabled: !g,
                className: p.joinButton,
                color: g ? r.Button.Colors.GREEN : r.Button.Colors.PRIMARY,
                onClick: v,
                size: r.Button.Sizes.MEDIUM,
                children: g ? h.intl.string(h.t['96ANUF']) : h.intl.string(h.t.TVBCKS)
            })
        ]
    });
};
