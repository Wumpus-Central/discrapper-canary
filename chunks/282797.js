"use strict";
n.d(t, { A: () => O });
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
    f = n(798031),
    p = n(575731),
    h = n(92240),
    m = n(257367),
    E = n(939496),
    g = n(584904),
    A = n(351638),
    I = n(316770),
    T = n(42002),
    S = n(560859),
    y = n(70963),
    v = n(8738),
    N = n(996988),
    C = n(985018),
    R = n(380297);
function O(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: O, onClose: b } = e,
        { themeType: D } = (0, E.E)(),
        { analyticsLocations: L } = (0, c.Ay)(u.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        w = (0, h.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: L,
        }),
        M = (0, m.A)({ userId: t.id, onAction: w }),
        x = (0, a.bG)([_.A], () => _.A.getGuild(i.guild_id)),
        P = (0, p.A)(i),
        k = (0, d.Ay)(i),
        { channelStatusEnabled: U } = (0, f.e)({ location: "UserProfileVoiceActivityCard" }),
        G = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? C.intl.string(C.t["+DsWbX"]) : C.intl.string(C.t.xOVEjc);
            return (0, r.jsx)(o.m, { text: e, children: (0, r.jsx)(l.mir, { size: "xxs" }) });
        },
        F = () =>
            (0, r.jsx)("div", { className: R.o1, children: (0, r.jsx)(y.Ay, { channel: i, onAction: w, onClose: b }) }),
        V =
            i.isDM() || i.isGroupDM()
                ? C.intl.string(C.t["9FaEzi"])
                : i.isGuildStageVoice()
                  ? C.intl.string(C.t.QygGCN)
                  : C.intl.string(C.t.msxteM);
    return (0, r.jsx)(c.f5, {
        value: L,
        children: (0, r.jsxs)(g.A, {
            ref: M,
            className: s()(R.Nr, O),
            onAction: w,
            onClose: b,
            "aria-label": `${V}, ${k}`,
            children: [
                (0, r.jsx)(A.A, {
                    text: V,
                    tags: G(),
                    contextMenu: (0, r.jsx)(v.A, { display: "voice", user: t, onClose: b }),
                }),
                (0, r.jsx)("div", {
                    className: R.rf,
                    children: (0, r.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, r.jsx)(T.A, { users: P, channel: i }),
                            (0, r.jsxs)("div", {
                                className: R.zH,
                                children: [
                                    (0, r.jsx)(I.A, { channel: i, guild: x, onAction: w, onClose: b }),
                                    U &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(S.A, { voiceChannel: i, onAction: w, onClose: b }),
                                    D === N.d.MODAL_V2 && F(),
                                ],
                            }),
                            D === N.d.MODAL && F(),
                        ],
                    }),
                }),
                D !== N.d.MODAL && D !== N.d.MODAL_V2 && F(),
            ],
        }),
    });
}
