n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(287734),
    c = n(540059),
    u = n(305325),
    d = n(281956),
    p = n(584729),
    h = n(27457),
    f = n(546247),
    m = n(354459),
    g = n(388032),
    b = n(55706);
let _ = function (e) {
    let { participants: t, channel: n, hasConnectPermission: l } = e,
        _ = t.filter(m.Io),
        C = (0, d.J)(n.guild_id),
        x = i.useCallback(() => {
            C ? (0, u.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, C]),
        y = (0, c.Q3)('ChannelCallEmpty'),
        v = (0, o._q$)('ChannelCallEmpty'),
        j = 4 === _.length ? 2 : 3;
    return (0, r.jsxs)('div', {
        className: a()(b.container, { [b.withRive]: v }),
        children: [
            y && (0, r.jsx)(f.Z, {}),
            (0, r.jsx)('div', {
                className: b.tiles,
                style: { maxWidth: 168 * j },
                children: _.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: b.tile,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48
                        },
                        e.id
                    )
                )
            }),
            (0, r.jsx)(o.X6q, {
                className: b.channelName,
                variant: 'heading-xxl/semibold',
                children: n.name
            }),
            (0, r.jsx)('div', {
                className: b.participantsRow,
                children: (0, r.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        0 === _.length
                            ? g.intl.string(g.t.zSqdra)
                            : 1 === _.length
                              ? g.intl.formatToPlainString(g.t.BUyJIC, { a: (0, p.Z)(n, _[0]) })
                              : 2 === _.length
                                ? g.intl.formatToPlainString(g.t.dcyZf3, {
                                      a: (0, p.Z)(n, _[0]),
                                      b: (0, p.Z)(n, _[1])
                                  })
                                : _.length > 2
                                  ? g.intl.formatToPlainString(g.t['44/Obm'], {
                                        a: (0, p.Z)(n, _[0]),
                                        b: (0, p.Z)(n, _[1]),
                                        n: _.length - 2
                                    })
                                  : void 0
                })
            }),
            (0, r.jsx)(o.zxk, {
                disabled: !l,
                className: a()(b.joinButton, { [b.roundButton]: !y }),
                color: l ? (y ? o.zxk.Colors.WHITE : o.zxk.Colors.GREEN) : o.zxk.Colors.PRIMARY,
                onClick: x,
                size: o.zxk.Sizes.MEDIUM,
                children: l ? g.intl.string(g.t['96ANUF']) : g.intl.string(g.t.TVBCKS)
            })
        ]
    });
};
