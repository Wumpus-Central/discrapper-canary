e.d(t, { default: () => b });
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(239091),
    r = e(108843),
    c = e(100527),
    d = e(299206),
    o = e(423589),
    s = e(398048),
    u = e(315732),
    h = e(3689),
    Z = e(323597),
    _ = e(852245),
    E = e(367722),
    p = e(776568),
    N = e(218035),
    g = e(775666),
    f = e(593589),
    C = e(442754),
    x = e(981631),
    j = e(388032);
let b = (0, r.Z)(
    function (n) {
        let { channel: t, guild: e, includeTopic: r = !1, onSelect: c } = n,
            b = (0, C.Z)(t),
            P = (0, p.ZP)(t),
            v = (0, N.Z)(t),
            T = (0, u.Z)(t),
            A = (0, _.Z)(t),
            I = (0, E.Z)(t, e),
            y = (0, s.Z)(t, e),
            S = (0, h.Z)(t, e, x.d4z.GUILD_TEXT),
            M = (0, h.Z)(t, e, x.d4z.GUILD_VOICE),
            O = (0, Z.Z)(t),
            L = (0, d.Z)({
                id: t.id,
                label: j.intl.string(j.t.gFHI3t)
            }),
            U = (0, f.Z)(t, 'title_context_menu'),
            G = (0, o.Mn)('ChannelTitleContextMenu'),
            k = (0, g.ZP)(t);
        return (0, i.jsxs)(l.v2r, {
            navId: 'channel-context',
            onClose: a.Zy,
            'aria-label': j.intl.string(j.t.Xm41aW),
            onSelect: c,
            children: [
                (0, i.jsx)(l.kSQ, { children: b }),
                (0, i.jsx)(l.kSQ, { children: P }),
                (0, i.jsxs)(l.kSQ, {
                    children: [r ? T : G ? k : v, A]
                }),
                (0, i.jsxs)(l.kSQ, {
                    children: [I, y, S, M]
                }),
                (0, i.jsx)(l.kSQ, { children: U }),
                (0, i.jsx)(l.kSQ, { children: O }),
                (0, i.jsx)(l.kSQ, { children: L })
            ]
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_TITLE_MENU]
);
