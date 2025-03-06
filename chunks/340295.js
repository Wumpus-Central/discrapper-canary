n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(287734),
    c = n(540059),
    u = n(305325),
    d = n(281956),
    p = n(594174),
    h = n(584729),
    f = n(27457),
    m = n(546247),
    g = n(354459),
    b = n(388032),
    _ = n(603779);
let C = function (e) {
    var t, n;
    let { participants: l, channel: C, hasConnectPermission: v } = e,
        y = l.filter(g.Io),
        x = (0, d.J)(C.guild_id),
        j = i.useCallback(() => {
            x ? (0, u.hk)(C.guild_id, () => s.default.selectVoiceChannel(C.id)) : s.default.selectVoiceChannel(C.id);
        }, [C.id, C.guild_id, x]),
        O = (0, c.Q3)('ChannelCallEmpty'),
        E = null !== (n = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        N = (0, a._q$)('ChannelCallEmpty'),
        I = 4 === y.length ? 2 : 3;
    return (0, r.jsxs)('div', {
        className: o()(_.container, { [_.withRive]: N }),
        children: [
            O && E && (0, r.jsx)(m.Z, {}),
            (0, r.jsx)('div', {
                className: _.tiles,
                style: { maxWidth: 168 * I },
                children: y.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        f.ZP,
                        {
                            participant: e,
                            channel: C,
                            className: _.tile,
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
            (0, r.jsx)(a.X6q, {
                className: _.channelName,
                variant: 'heading-xxl/semibold',
                children: C.name
            }),
            (0, r.jsx)('div', {
                className: _.participantsRow,
                children: (0, r.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        0 === y.length
                            ? b.NW.string(b.t.zSqdra)
                            : 1 === y.length
                              ? b.NW.formatToPlainString(b.t.BUyJIC, { a: (0, h.Z)(C, y[0]) })
                              : 2 === y.length
                                ? b.NW.formatToPlainString(b.t.dcyZf3, {
                                      a: (0, h.Z)(C, y[0]),
                                      b: (0, h.Z)(C, y[1])
                                  })
                                : y.length > 2
                                  ? b.NW.formatToPlainString(b.t['44/Obm'], {
                                        a: (0, h.Z)(C, y[0]),
                                        b: (0, h.Z)(C, y[1]),
                                        n: y.length - 2
                                    })
                                  : void 0
                })
            }),
            (0, r.jsx)(a.zxk, {
                disabled: !v,
                className: o()(_.joinButton, { [_.roundButton]: !O }),
                color: v ? (O && E ? a.zxk.Colors.WHITE : a.zxk.Colors.GREEN) : a.zxk.Colors.PRIMARY,
                onClick: j,
                size: a.zxk.Sizes.MEDIUM,
                children: v ? b.NW.string(b.t['96ANUF']) : b.NW.string(b.t.TVBCKS)
            })
        ]
    });
};
