t.d(n, { default: () => Z });
var r = t(951288);
t(647438);
var i = t(481060),
    l = t(239091),
    o = t(108843),
    c = t(100527),
    a = t(299206),
    u = t(423589),
    s = t(398048),
    d = t(109764),
    p = t(315732),
    b = t(3689),
    f = t(323597),
    O = t(852245),
    y = t(367722),
    g = t(776568),
    j = t(218035),
    h = t(775666),
    E = t(593589),
    P = t(442754),
    _ = t(981631),
    v = t(388032);
let Z = (0, o.Z)(
    function (e) {
        let { channel: n, guild: t, includeTopic: o = !1, onSelect: c } = e,
            Z = (0, P.Z)(n),
            N = (0, g.ZP)(n),
            C = (0, j.Z)(n),
            w = (0, d.Z)(n),
            x = (0, p.Z)(n),
            m = (0, O.Z)(n),
            S = (0, y.Z)(n, t),
            T = (0, s.Z)(n, t),
            I = (0, b.Z)(n, t, _.d4z.GUILD_TEXT),
            A = (0, b.Z)(n, t, _.d4z.GUILD_VOICE),
            D = (0, f.Z)(n),
            k = (0, a.Z)({
                id: n.id,
                label: v.intl.string(v.t.gFHI3t),
            }),
            G = (0, E.Z)(n, "title_context_menu"),
            L = (0, u.Mn)("ChannelTitleContextMenu"),
            M = (0, h.ZP)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": v.intl.string(v.t.Xm41aW),
            onSelect: c,
            children: [
                (0, r.jsx)(i.kSQ, { children: Z }),
                (0, r.jsx)(i.kSQ, { children: N }),
                (0, r.jsxs)(i.kSQ, {
                    children: [o ? x : L ? M : C, m],
                }),
                (0, r.jsxs)(i.kSQ, {
                    children: [S, w, T, I, A],
                }),
                (0, r.jsx)(i.kSQ, { children: G }),
                (0, r.jsx)(i.kSQ, { children: D }),
                (0, r.jsx)(i.kSQ, { children: k }),
            ],
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_TITLE_MENU],
);
