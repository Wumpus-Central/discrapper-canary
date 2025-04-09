n.d(t, { default: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(239091),
    c = n(108843),
    o = n(100527),
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
    N = n(442754),
    P = n(981631),
    E = n(388032);
let _ = (0, c.Z)(
    function (e) {
        let { channel: t, guild: n, includeTopic: c = !1, onSelect: o } = e,
            _ = (0, N.Z)(t),
            Z = (0, y.ZP)(t),
            v = (0, g.Z)(t),
            C = (0, d.Z)(t),
            w = (0, f.Z)(t),
            x = (0, O.Z)(t, n),
            S = (0, s.Z)(t, n),
            m = (0, p.Z)(t, n, P.d4z.GUILD_TEXT),
            T = (0, p.Z)(t, n, P.d4z.GUILD_VOICE),
            D = (0, b.Z)(t),
            A = (0, a.Z)({
                id: t.id,
                label: E.NW.string(E.t.gFHI3t)
            }),
            I = (0, h.Z)(t, 'title_context_menu'),
            W = (0, u.Mn)('ChannelTitleContextMenu'),
            k = (0, j.ZP)(t);
        return (0, r.jsxs)(i.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': E.NW.string(E.t.Xm41aW),
            onSelect: o,
            children: [
                (0, r.jsx)(i.kSQ, { children: _ }),
                (0, r.jsx)(i.kSQ, { children: Z }),
                (0, r.jsxs)(i.kSQ, {
                    children: [c ? C : W ? k : v, w]
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [x, S, m, T]
                }),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsx)(i.kSQ, { children: D }),
                (0, r.jsx)(i.kSQ, { children: A })
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_TITLE_MENU]
);
