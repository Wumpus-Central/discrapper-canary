n.d(t, { Z: () => g });
var i = n(951288),
    r = n(647438),
    l = n(481060),
    a = n(287734),
    o = n(598006),
    s = n(305325),
    c = n(281956),
    u = n(584729),
    d = n(27457),
    p = n(546247),
    h = n(354459),
    f = n(388032),
    m = n(427538);
let g = function (e) {
    let { participants: t, channel: n, hasConnectPermission: g } = e,
        b = t.filter(h.Io),
        y = (0, c.J)(n.guild_id),
        C = r.useCallback(() => {
            y ? (0, s.hk)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, y]),
        v = 4 === b.length ? 2 : 3;
    return (0, i.jsxs)("div", {
        className: m.container,
        children: [
            (0, i.jsx)(p.Z, {}),
            (0, i.jsx)("div", {
                className: m.tiles,
                style: { maxWidth: 168 * v },
                children: b.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: m.tile,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: o.P.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(l.Heading, {
                className: m.channelName,
                variant: "heading-xxl/semibold",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: m.participantsRow,
                children: (0, i.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                        0 === b.length
                            ? f.intl.string(f.t.zSqdrS)
                            : 1 === b.length
                              ? f.intl.formatToPlainString(f.t.BUyJIG, { a: (0, u.Z)(n, b[0]) })
                              : 2 === b.length
                                ? f.intl.formatToPlainString(f.t["dcyZf/"], {
                                      a: (0, u.Z)(n, b[0]),
                                      b: (0, u.Z)(n, b[1]),
                                  })
                                : b.length > 2
                                  ? f.intl.formatToPlainString(f.t["44/Obu"], {
                                        a: (0, u.Z)(n, b[0]),
                                        b: (0, u.Z)(n, b[1]),
                                        n: b.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: m.joinButton,
                children: (0, i.jsx)(l.Button, {
                    variant: "overlay-primary",
                    text: g ? f.intl.string(f.t["96ANUN"]) : f.intl.string(f.t.TVBCKZ),
                    onClick: C,
                    disabled: !g,
                }),
            }),
        ],
    });
};
