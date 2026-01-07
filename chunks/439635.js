n.d(t, { default: () => Z });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    c = n(108843),
    o = n(100527),
    a = n(299206),
    s = n(423589),
    u = n(398048),
    d = n(109764),
    b = n(315732),
    p = n(3689),
    f = n(323597),
    O = n(852245),
    y = n(367722),
    g = n(776568),
    j = n(218035),
    h = n(775666),
    P = n(442754),
    E = n(981631),
    v = n(388032);
let Z = (0, c.Z)(
    function (e) {
        let { channel: t, guild: n, includeTopic: c = !1, onSelect: o } = e,
            Z = (0, P.Z)(t),
            _ = (0, g.ZP)(t),
            N = (0, j.Z)(t),
            w = (0, d.Z)(t),
            S = (0, b.Z)(t),
            x = (0, O.Z)(t),
            C = (0, y.Z)(t, n),
            D = (0, u.Z)(t, n),
            m = (0, p.Z)(t, n, E.d4z.GUILD_TEXT),
            A = (0, p.Z)(t, n, E.d4z.GUILD_VOICE),
            I = (0, f.Z)(t),
            T = (0, a.Z)({
                id: t.id,
                label: v.intl.string(v.t.gFHI3k),
            }),
            M = (0, s.Mn)("ChannelTitleContextMenu"),
            k = (0, h.ZP)(t);
        return (0, r.jsxs)(i.v2r, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": v.intl.string(v.t.Xm41aV),
            onSelect: o,
            children: [
                (0, r.jsx)(i.kSQ, { children: Z }),
                (0, r.jsx)(i.kSQ, { children: _ }),
                (0, r.jsxs)(i.kSQ, {
                    children: [c ? S : M ? k : N, x],
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [C, w, D, m, A],
                }),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsx)(i.kSQ, { children: T }),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_TITLE_MENU],
);
