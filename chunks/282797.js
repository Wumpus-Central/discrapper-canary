n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(990078),
    d = n(885574),
    c = n(140735),
    u = n(707554),
    h = n(793574),
    m = n(688810),
    p = n(47167),
    g = n(71393),
    f = n(575731),
    A = n(92240),
    x = n(257367),
    v = n(939496),
    E = n(584904),
    C = n(351638),
    I = n(316770),
    _ = n(42002),
    T = n(560859),
    j = n(70963),
    S = n(269587),
    N = n(996988),
    y = n(375708),
    b = n(514566);
function M(e) {
    let { user: t, currentUser: n, voiceChannel: s, className: M, onClose: R } = e,
        { themeType: k } = (0, v.E)(),
        { analyticsLocations: w } = (0, m.Ay)(h.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        O = (0, A.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: w,
        }),
        L = (0, x.A)({ userId: t.id, onAction: O }),
        P = (0, r.bG)([g.A], () => g.A.getGuild(s.guild_id)),
        U = (0, f.A)(s),
        D = (0, p.Ay)(s),
        G = l.useId();
    function F() {
        return (0, i.jsx)("div", {
            className: b.o1,
            children: (0, i.jsx)(j.Ay, { channel: s, onAction: O, onClose: R }),
        });
    }
    let H =
        s.isDM() || s.isGroupDM()
            ? y.intl.string(y.t["9FaEzi"])
            : s.isGuildStageVoice()
              ? y.intl.string(y.t.QygGCN)
              : y.intl.string(y.t.msxteM);
    return (0, i.jsx)(m.f5, {
        value: w,
        children: (0, i.jsxs)(E.A, {
            ref: L,
            className: a()(b.Nr, M),
            onAction: O,
            onClose: R,
            "aria-labelledby": G,
            children: [
                (0, i.jsx)(C.A, {
                    text: H,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? y.intl.string(y.t["+DsWbX"]) : y.intl.string(y.t.xOVEjc);
                        return (0, i.jsx)(o.m, { text: e, children: (0, i.jsx)(d.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)(S.A, { display: "voice", user: t, onClose: R }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { id: G, children: `${H}, ${D}` }) }),
                (0, i.jsx)("div", {
                    className: b.rf,
                    children: (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, i.jsx)(_.A, { users: U, channel: s }),
                            (0, i.jsxs)("div", {
                                className: b.zH,
                                children: [
                                    (0, i.jsx)(I.A, { channel: s, guild: P, onAction: O, onClose: R }),
                                    s.isGuildVoice() && (0, i.jsx)(T.A, { voiceChannel: s, onAction: O, onClose: R }),
                                    k === N.d.MODAL_V2 && F(),
                                ],
                            }),
                            k === N.d.MODAL && F(),
                        ],
                    }),
                }),
                k !== N.d.MODAL && k !== N.d.MODAL_V2 && F(),
            ],
        }),
    });
}
