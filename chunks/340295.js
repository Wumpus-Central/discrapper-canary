n.d(t, { Z: () => m });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(287734),
    s = n(305325),
    o = n(281956),
    c = n(584729),
    d = n(27457),
    u = n(354459),
    h = n(388032),
    p = n(723902);
let m = function (e) {
    let { participants: t, channel: n, hasConnectPermission: m } = e,
        f = t.filter(u.Io),
        g = (0, o.J)(n.guild_id),
        _ = l.useCallback(() => {
            g ? (0, s.hk)(n.guild_id, () => r.default.selectVoiceChannel(n.id)) : r.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, g]),
        C = 4 === f.length ? 2 : 3;
    return (0, i.jsxs)('div', {
        className: p.container,
        children: [
            (0, i.jsx)('div', {
                className: p.tiles,
                style: { maxWidth: 168 * C },
                children: f.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: n,
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
            (0, i.jsx)(a.X6q, {
                className: p.channelName,
                variant: 'heading-xxl/semibold',
                children: n.name
            }),
            (0, i.jsx)('div', {
                className: p.participantsRow,
                children: (0, i.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        0 === f.length
                            ? h.intl.string(h.t.zSqdra)
                            : 1 === f.length
                              ? h.intl.formatToPlainString(h.t.BUyJIC, { a: (0, c.Z)(n, f[0]) })
                              : 2 === f.length
                                ? h.intl.formatToPlainString(h.t.dcyZf3, {
                                      a: (0, c.Z)(n, f[0]),
                                      b: (0, c.Z)(n, f[1])
                                  })
                                : f.length > 2
                                  ? h.intl.formatToPlainString(h.t['44/Obm'], {
                                        a: (0, c.Z)(n, f[0]),
                                        b: (0, c.Z)(n, f[1]),
                                        n: f.length - 2
                                    })
                                  : void 0
                })
            }),
            (0, i.jsx)(a.zxk, {
                disabled: !m,
                className: p.joinButton,
                color: m ? a.zxk.Colors.GREEN : a.zxk.Colors.PRIMARY,
                onClick: _,
                size: a.zxk.Sizes.MEDIUM,
                children: m ? h.intl.string(h.t['96ANUF']) : h.intl.string(h.t.TVBCKS)
            })
        ]
    });
};
