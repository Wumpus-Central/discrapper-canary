n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(287734),
    c = n(540059),
    d = n(305325),
    u = n(281956),
    h = n(594174),
    p = n(584729),
    m = n(27457),
    f = n(546247),
    g = n(354459),
    _ = n(388032),
    C = n(931481);
let x = function (e) {
    var t, n;
    let { participants: a, channel: x, hasConnectPermission: v } = e,
        E = a.filter(g.Io),
        I = (0, u.J)(x.guild_id),
        b = l.useCallback(() => {
            I ? (0, d.hk)(x.guild_id, () => o.default.selectVoiceChannel(x.id)) : o.default.selectVoiceChannel(x.id);
        }, [x.id, x.guild_id, I]),
        Z = (0, c.Q3)('ChannelCallEmpty'),
        N = null !== (n = null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        T = 4 === E.length ? 2 : 3;
    return (0, i.jsxs)('div', {
        className: C.container,
        children: [
            Z && N && (0, i.jsx)(f.Z, {}),
            (0, i.jsx)('div', {
                className: C.tiles,
                style: { maxWidth: 168 * T },
                children: E.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        m.ZP,
                        {
                            participant: e,
                            channel: x,
                            className: C.tile,
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
            (0, i.jsx)(s.X6q, {
                className: C.channelName,
                variant: 'heading-xxl/semibold',
                children: x.name
            }),
            (0, i.jsx)('div', {
                className: C.participantsRow,
                children: (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        0 === E.length
                            ? _.intl.string(_.t.zSqdra)
                            : 1 === E.length
                              ? _.intl.formatToPlainString(_.t.BUyJIC, { a: (0, p.Z)(x, E[0]) })
                              : 2 === E.length
                                ? _.intl.formatToPlainString(_.t.dcyZf3, {
                                      a: (0, p.Z)(x, E[0]),
                                      b: (0, p.Z)(x, E[1])
                                  })
                                : E.length > 2
                                  ? _.intl.formatToPlainString(_.t['44/Obm'], {
                                        a: (0, p.Z)(x, E[0]),
                                        b: (0, p.Z)(x, E[1]),
                                        n: E.length - 2
                                    })
                                  : void 0
                })
            }),
            (0, i.jsx)(s.zxk, {
                disabled: !v,
                className: r()(C.joinButton, { [C.roundButton]: !Z }),
                color: v ? (Z && N ? s.zxk.Colors.WHITE : s.zxk.Colors.GREEN) : s.zxk.Colors.PRIMARY,
                onClick: b,
                size: s.zxk.Sizes.MEDIUM,
                children: v ? _.intl.string(_.t['96ANUF']) : _.intl.string(_.t.TVBCKS)
            })
        ]
    });
};
