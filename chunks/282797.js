"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(47167),
    _ = n(71393),
    f = n(575731),
    p = n(92240),
    h = n(257367),
    m = n(939496),
    E = n(584904),
    g = n(351638),
    A = n(316770),
    I = n(42002),
    T = n(560859),
    S = n(70963),
    y = n(8738),
    v = n(996988),
    N = n(985018),
    C = n(380297);
function R(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: R, onClose: O } = e,
        { themeType: b } = (0, m.E)(),
        { analyticsLocations: D } = (0, c.Ay)(u.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        L = (0, p.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: D,
        }),
        w = (0, h.A)({ userId: t.id, onAction: L }),
        M = (0, a.bG)([_.A], () => _.A.getGuild(i.guild_id)),
        x = (0, f.A)(i),
        P = (0, d.Ay)(i),
        k = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? N.intl.string(N.t["+DsWbX"]) : N.intl.string(N.t.xOVEjc);
            return (0, r.jsx)(o.m, { text: e, children: (0, r.jsx)(l.mir, { size: "xxs" }) });
        },
        U = () =>
            (0, r.jsx)("div", { className: C.o1, children: (0, r.jsx)(S.Ay, { channel: i, onAction: L, onClose: O }) }),
        G =
            i.isDM() || i.isGroupDM()
                ? N.intl.string(N.t["9FaEzi"])
                : i.isGuildStageVoice()
                  ? N.intl.string(N.t.QygGCN)
                  : N.intl.string(N.t.msxteM);
    return (0, r.jsx)(c.f5, {
        value: D,
        children: (0, r.jsxs)(E.A, {
            ref: w,
            className: s()(C.Nr, R),
            onAction: L,
            onClose: O,
            "aria-label": `${G}, ${P}`,
            children: [
                (0, r.jsx)(g.A, {
                    text: G,
                    tags: k(),
                    contextMenu: (0, r.jsx)(y.A, { display: "voice", user: t, onClose: O }),
                }),
                (0, r.jsx)("div", {
                    className: C.rf,
                    children: (0, r.jsxs)("div", {
                        className: C.Qs,
                        children: [
                            (0, r.jsx)(I.A, { users: x, channel: i }),
                            (0, r.jsxs)("div", {
                                className: C.zH,
                                children: [
                                    (0, r.jsx)(A.A, { channel: i, guild: M, onAction: L, onClose: O }),
                                    i.isGuildVoice() && (0, r.jsx)(T.A, { voiceChannel: i, onAction: L, onClose: O }),
                                    b === v.d.MODAL_V2 && U(),
                                ],
                            }),
                            b === v.d.MODAL && U(),
                        ],
                    }),
                }),
                b !== v.d.MODAL && b !== v.d.MODAL_V2 && U(),
            ],
        }),
    });
}
