"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    u = n(793574),
    c = n(688810),
    d = n(47167),
    _ = n(71393),
    f = n(798031),
    p = n(575731),
    h = n(92240),
    m = n(257367),
    g = n(939496),
    E = n(584904),
    A = n(351638),
    I = n(316770),
    T = n(42002),
    y = n(560859),
    S = n(70963),
    v = n(8738),
    C = n(996988),
    b = n(985018),
    N = n(380297);
function R(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: R, onClose: O } = e,
        { themeType: D } = (0, g.E)(),
        { analyticsLocations: L } = (0, c.Ay)(u.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        w = (0, h.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: L,
        }),
        x = (0, m.A)({ userId: t.id, onAction: w }),
        P = (0, s.bG)([_.A], () => _.A.getGuild(i.guild_id)),
        M = (0, p.A)(i),
        k = (0, d.Ay)(i),
        { channelStatusEnabled: U } = (0, f.e)({ location: "UserProfileVoiceActivityCard" }),
        G = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? b.intl.string(b.t["+DsWbX"]) : b.intl.string(b.t.xOVEjc);
            return (0, r.jsx)(o.m, { text: e, children: (0, r.jsx)(l.mir, { size: "xxs" }) });
        },
        V = () =>
            (0, r.jsx)("div", { className: N.o1, children: (0, r.jsx)(S.A, { channel: i, onAction: w, onClose: O }) }),
        F =
            i.isDM() || i.isGroupDM()
                ? b.intl.string(b.t["9FaEzi"])
                : i.isGuildStageVoice()
                  ? b.intl.string(b.t.QygGCN)
                  : b.intl.string(b.t.msxteM);
    return (0, r.jsx)(c.f5, {
        value: L,
        children: (0, r.jsxs)(E.A, {
            ref: x,
            className: a()(N.Nr, R),
            onAction: w,
            onClose: O,
            "aria-label": `${F}, ${k}`,
            children: [
                (0, r.jsx)(A.A, {
                    text: F,
                    tags: G(),
                    contextMenu: (0, r.jsx)(v.A, { display: "voice", user: t, onClose: O }),
                }),
                (0, r.jsx)("div", {
                    className: N.rf,
                    children: (0, r.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, r.jsx)(T.A, { users: M, channel: i }),
                            (0, r.jsxs)("div", {
                                className: N.zH,
                                children: [
                                    (0, r.jsx)(I.A, { channel: i, guild: P, onAction: w, onClose: O }),
                                    U &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(y.A, { voiceChannel: i, onAction: w, onClose: O }),
                                    D === C.d.MODAL_V2 && V(),
                                ],
                            }),
                            D === C.d.MODAL && V(),
                        ],
                    }),
                }),
                D !== C.d.MODAL && D !== C.d.MODAL_V2 && V(),
            ],
        }),
    });
}
