n.d(t, { default: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    c = n(108843),
    o = n(100527),
    a = n(299206),
    u = n(423589),
    s = n(398048),
    d = n(109764),
    p = n(315732),
    b = n(3689),
    f = n(323597),
    O = n(852245),
    y = n(367722),
    j = n(776568),
    g = n(218035),
    h = n(775666),
    P = n(593589),
    E = n(442754),
    v = n(981631),
    Z = n(388032);
let _ = (0, c.Z)(
    function (e) {
        let { channel: t, guild: n, includeTopic: c = !1, onSelect: o } = e,
            _ = (0, E.Z)(t),
            N = (0, j.ZP)(t),
            w = (0, g.Z)(t),
            x = (0, d.Z)(t),
            C = (0, p.Z)(t),
            S = (0, O.Z)(t),
            m = (0, y.Z)(t, n),
            A = (0, s.Z)(t, n),
            D = (0, b.Z)(t, n, v.d4z.GUILD_TEXT),
            T = (0, b.Z)(t, n, v.d4z.GUILD_VOICE),
            I = (0, f.Z)(t),
            k = (0, a.Z)({
                id: t.id,
                label: Z.intl.string(Z.t.gFHI3k),
            }),
            L = (0, P.Z)(t, "title_context_menu"),
            M = (0, u.Mn)("ChannelTitleContextMenu"),
            U = (0, h.ZP)(t);
        return (0, r.jsxs)(i.v2r, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": Z.intl.string(Z.t.Xm41aV),
            onSelect: o,
            children: [
                (0, r.jsx)(i.kSQ, { children: _ }),
                (0, r.jsx)(i.kSQ, { children: N }),
                (0, r.jsxs)(i.kSQ, {
                    children: [c ? C : M ? U : w, S],
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [m, x, A, D, T],
                }),
                (0, r.jsx)(i.kSQ, { children: L }),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsx)(i.kSQ, { children: k }),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_TITLE_MENU],
);
