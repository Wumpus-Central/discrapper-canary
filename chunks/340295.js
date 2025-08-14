n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(755721),
    a = n(481060),
    s = n(287734),
    l = n(305325),
    c = n(281956),
    u = n(584729),
    d = n(27457),
    f = n(546247),
    _ = n(354459),
    p = n(388032),
    h = n(427538);
function m(e, t) {
    return 0 === t.length
        ? p.intl.string(p.t.zSqdra)
        : 1 === t.length
          ? p.intl.formatToPlainString(p.t.BUyJIC, { a: (0, u.Z)(e, t[0]) })
          : 2 === t.length
            ? p.intl.formatToPlainString(p.t.dcyZf3, {
                  a: (0, u.Z)(e, t[0]),
                  b: (0, u.Z)(e, t[1]),
              })
            : t.length > 2
              ? p.intl.formatToPlainString(p.t["44/Obm"], {
                    a: (0, u.Z)(e, t[0]),
                    b: (0, u.Z)(e, t[1]),
                    n: t.length - 2,
                })
              : void 0;
}
let g = function (e) {
    let { participants: t, channel: n, hasConnectPermission: u } = e,
        g = t.filter(_.Io),
        E = (0, c.J)(n.guild_id),
        b = i.useCallback(() => {
            E ? (0, l.hk)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, E]),
        y = 4 === g.length ? 2 : 3;
    return (0, r.jsxs)("div", {
        className: h.container,
        children: [
            (0, r.jsx)(f.Z, {}),
            (0, r.jsx)("div", {
                className: h.tiles,
                style: { maxWidth: 168 * y },
                children: g.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: n,
                            className: h.tile,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsx)(a.X6q, {
                className: h.channelName,
                variant: "heading-xxl/semibold",
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: h.participantsRow,
                children: (0, r.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: m(n, g),
                }),
            }),
            (0, r.jsx)(o.zx, {
                disabled: !u,
                className: h.joinButton,
                color: u ? o.zx.Colors.WHITE : o.zx.Colors.PRIMARY,
                onClick: b,
                size: o.zx.Sizes.MEDIUM,
                children: u ? p.intl.string(p.t["96ANUF"]) : p.intl.string(p.t.TVBCKS),
            }),
        ],
    });
};
