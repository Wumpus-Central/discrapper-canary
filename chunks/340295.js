n.d(t, { Z: () => m });
var i = n(951288),
    r = n(647438),
    l = n(481060),
    a = n(287734),
    o = n(305325),
    s = n(281956),
    c = n(584729),
    u = n(27457),
    d = n(546247),
    p = n(354459),
    h = n(388032),
    f = n(427538);
let m = function (e) {
    let { participants: t, channel: n, hasConnectPermission: m } = e,
        g = t.filter(p.Io),
        b = (0, s.J)(n.guild_id),
        C = r.useCallback(() => {
            b ? (0, o.hk)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, b]),
        y = 4 === g.length ? 2 : 3;
    return (0, i.jsxs)("div", {
        className: f.container,
        children: [
            (0, i.jsx)(d.Z, {}),
            (0, i.jsx)("div", {
                className: f.tiles,
                style: { maxWidth: 168 * y },
                children: g.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        u.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: f.tile,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(l.Heading, {
                className: f.channelName,
                variant: "heading-xxl/semibold",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: f.participantsRow,
                children: (0, i.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children:
                        0 === g.length
                            ? h.intl.string(h.t.zSqdra)
                            : 1 === g.length
                              ? h.intl.formatToPlainString(h.t.BUyJIC, { a: (0, c.Z)(n, g[0]) })
                              : 2 === g.length
                                ? h.intl.formatToPlainString(h.t.dcyZf3, {
                                      a: (0, c.Z)(n, g[0]),
                                      b: (0, c.Z)(n, g[1]),
                                  })
                                : g.length > 2
                                  ? h.intl.formatToPlainString(h.t["44/Obm"], {
                                        a: (0, c.Z)(n, g[0]),
                                        b: (0, c.Z)(n, g[1]),
                                        n: g.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: f.joinButton,
                children: (0, i.jsx)(l.Button, {
                    variant: "overlay-primary",
                    text: m ? h.intl.string(h.t["96ANUF"]) : h.intl.string(h.t.TVBCKS),
                    onClick: C,
                    disabled: !m,
                }),
            }),
        ],
    });
};
