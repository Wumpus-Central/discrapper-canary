i.d(t, { A: () => b });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(311907),
    r = i(990078),
    o = i(885574),
    c = i(140735),
    u = i(707554),
    A = i(793574),
    h = i(688810),
    g = i(47167),
    x = i(71393),
    m = i(575731),
    C = i(92240),
    _ = i(257367),
    p = i(939496),
    N = i(584904),
    f = i(351638),
    v = i(316770),
    j = i(42002),
    E = i(560859),
    S = i(70963),
    O = i(8738),
    I = i(996988),
    y = i(985018),
    T = i(514566);
function b(e) {
    let { user: t, currentUser: i, voiceChannel: s, className: b, onClose: L } = e,
        { themeType: M } = (0, p.E)(),
        { analyticsLocations: V } = (0, h.Ay)(A.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        D = (0, C.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: V,
        }),
        w = (0, _.A)({ userId: t.id, onAction: D }),
        G = (0, d.bG)([x.A], () => x.A.getGuild(s.guild_id)),
        U = (0, m.A)(s),
        P = (0, g.Ay)(s),
        F = n.useId(),
        k = () =>
            (0, l.jsx)("div", { className: T.o1, children: (0, l.jsx)(S.Ay, { channel: s, onAction: D, onClose: L }) }),
        R =
            s.isDM() || s.isGroupDM()
                ? y.intl.string(y.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? y.intl.string(y.t.QygGCN)
                  : y.intl.string(y.t.msxteM);
    return (0, l.jsx)(h.f5, {
        value: V,
        children: (0, l.jsxs)(N.A, {
            ref: w,
            className: a()(T.Nr, b),
            onAction: D,
            onClose: L,
            "aria-labelledby": F,
            children: [
                (0, l.jsx)(f.A, {
                    text: R,
                    tags: (() => {
                        if (t.id !== i.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? y.intl.string(y.t["+DsWbX"]) : y.intl.string(y.t.xOVEjc);
                        return (0, l.jsx)(r.m, { text: e, children: (0, l.jsx)(o.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, l.jsx)(O.A, { display: "voice", user: t, onClose: L }),
                }),
                (0, l.jsx)(c.A, { children: (0, l.jsx)(u.H, { id: F, children: `${R}, ${P}` }) }),
                (0, l.jsx)("div", {
                    className: T.rf,
                    children: (0, l.jsxs)("div", {
                        className: T.Qs,
                        children: [
                            (0, l.jsx)(j.A, { users: U, channel: s }),
                            (0, l.jsxs)("div", {
                                className: T.zH,
                                children: [
                                    (0, l.jsx)(v.A, { channel: s, guild: G, onAction: D, onClose: L }),
                                    s.isGuildVoice() && (0, l.jsx)(E.A, { voiceChannel: s, onAction: D, onClose: L }),
                                    M === I.d.MODAL_V2 && k(),
                                ],
                            }),
                            M === I.d.MODAL && k(),
                        ],
                    }),
                }),
                M !== I.d.MODAL && M !== I.d.MODAL_V2 && k(),
            ],
        }),
    });
}
