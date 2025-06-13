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
    d = n(109764),
    p = n(315732),
    b = n(3689),
    f = n(323597),
    O = n(852245),
    y = n(367722),
    g = n(776568),
    j = n(218035),
    h = n(775666),
    P = n(593589),
    E = n(442754),
    _ = n(981631),
    Z = n(388032);
let v = (0, o.Z)(
    function (e) {
        let { channel: t, guild: n, includeTopic: o = !1, onSelect: c } = e,
            v = (0, E.Z)(t),
            N = (0, g.ZP)(t),
            w = (0, j.Z)(t),
            C = (0, d.Z)(t),
            x = (0, p.Z)(t),
            m = (0, O.Z)(t),
            S = (0, y.Z)(t, n),
            T = (0, s.Z)(t, n),
            A = (0, b.Z)(t, n, _.d4z.GUILD_TEXT),
            D = (0, b.Z)(t, n, _.d4z.GUILD_VOICE),
            I = (0, f.Z)(t),
            k = (0, a.Z)({
                id: t.id,
                label: Z.intl.string(Z.t.gFHI3t)
            }),
            L = (0, P.Z)(t, 'title_context_menu'),
            M = (0, u.Mn)('ChannelTitleContextMenu'),
            U = (0, h.ZP)(t);
        return (0, r.jsxs)(i.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': Z.intl.string(Z.t.Xm41aW),
            onSelect: c,
            children: [
                (0, r.jsx)(i.kSQ, { children: v }),
                (0, r.jsx)(i.kSQ, { children: N }),
                (0, r.jsxs)(i.kSQ, {
                    children: [o ? x : M ? U : w, m]
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [S, C, T, A, D]
                }),
                (0, r.jsx)(i.kSQ, { children: L }),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsx)(i.kSQ, { children: k })
            ]
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_TITLE_MENU]
);
