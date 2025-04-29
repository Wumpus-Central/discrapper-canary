n.d(t, { default: () => v });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(239091),
    o = n(108843),
    c = n(100527),
    a = n(299206),
    u = n(423589),
    s = n(398048),
    d = n(315732),
    p = n(3689),
    b = n(323597),
    f = n(852245),
    O = n(367722),
    y = n(776568),
    g = n(218035),
    j = n(775666),
    h = n(593589),
    P = n(442754),
    E = n(981631),
    _ = n(388032);
let v = (0, o.Z)(
    function (e) {
        let { channel: t, guild: n, includeTopic: o = !1, onSelect: c } = e,
            v = (0, P.Z)(t),
            Z = (0, y.ZP)(t),
            N = (0, g.Z)(t),
            w = (0, d.Z)(t),
            C = (0, f.Z)(t),
            x = (0, O.Z)(t, n),
            m = (0, s.Z)(t, n),
            S = (0, p.Z)(t, n, E.d4z.GUILD_TEXT),
            T = (0, p.Z)(t, n, E.d4z.GUILD_VOICE),
            A = (0, b.Z)(t),
            D = (0, a.Z)({
                id: t.id,
                label: _.intl.string(_.t.gFHI3t)
            }),
            I = (0, h.Z)(t, 'title_context_menu'),
            k = (0, u.Mn)('ChannelTitleContextMenu'),
            L = (0, j.ZP)(t);
        return (0, r.jsxs)(i.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': _.intl.string(_.t.Xm41aW),
            onSelect: c,
            children: [
                (0, r.jsx)(i.kSQ, { children: v }),
                (0, r.jsx)(i.kSQ, { children: Z }),
                (0, r.jsxs)(i.kSQ, {
                    children: [o ? w : k ? L : N, C]
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [x, m, S, T]
                }),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsx)(i.kSQ, { children: A }),
                (0, r.jsx)(i.kSQ, { children: D })
            ]
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_TITLE_MENU]
);
