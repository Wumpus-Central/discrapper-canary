n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(755721),
    a = n(481060),
    o = n(287734),
    s = n(305325),
    c = n(281956),
    u = n(584729),
    d = n(27457),
    p = n(546247),
    h = n(354459),
    f = n(388032),
    m = n(761325);
let g = function (e) {
    let { participants: t, channel: n, hasConnectPermission: g } = e,
        b = t.filter(h.Io),
        _ = (0, c.J)(n.guild_id),
        y = i.useCallback(() => {
            _ ? (0, s.hk)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, _]),
        C = 4 === b.length ? 2 : 3;
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)(p.Z, {}),
            (0, r.jsx)('div', {
                className: m.tiles,
                style: { maxWidth: 168 * C },
                children: b.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: m.tile,
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
                className: m.channelName,
                variant: 'heading-xxl/semibold',
                children: n.name
            }),
            (0, r.jsx)('div', {
                className: m.participantsRow,
                children: (0, r.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        0 === b.length
                            ? f.intl.string(f.t.zSqdra)
                            : 1 === b.length
                              ? f.intl.formatToPlainString(f.t.BUyJIC, { a: (0, u.Z)(n, b[0]) })
                              : 2 === b.length
                                ? f.intl.formatToPlainString(f.t.dcyZf3, {
                                      a: (0, u.Z)(n, b[0]),
                                      b: (0, u.Z)(n, b[1])
                                  })
                                : b.length > 2
                                  ? f.intl.formatToPlainString(f.t['44/Obm'], {
                                        a: (0, u.Z)(n, b[0]),
                                        b: (0, u.Z)(n, b[1]),
                                        n: b.length - 2
                                    })
                                  : void 0
                })
            }),
            (0, r.jsx)(l.zx, {
                disabled: !g,
                className: m.joinButton,
                color: g ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
                onClick: y,
                size: l.zx.Sizes.MEDIUM,
                children: g ? f.intl.string(f.t['96ANUF']) : f.intl.string(f.t.TVBCKS)
            })
        ]
    });
};
