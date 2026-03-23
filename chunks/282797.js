"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(793574),
    d = n(688810),
    _ = n(47167),
    f = n(71393),
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
    let { user: t, currentUser: n, voiceChannel: s, className: O, onClose: b } = e,
        { themeType: D } = (0, E.E)(),
        { analyticsLocations: L } = (0, d.Ay)(c.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        w = (0, h.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: L,
        }),
        M = (0, m.A)({ userId: t.id, onAction: w }),
        x = (0, o.bG)([f.A], () => f.A.getGuild(s.guild_id)),
        P = (0, p.A)(s),
        k = (0, _.Ay)(s),
        U = i.useId(),
        G = () => {
            if (t.id !== n.id) return null;
            let e = s.isDM() || s.isGroupDM() ? C.intl.string(C.t["+DsWbX"]) : C.intl.string(C.t.xOVEjc);
            return (0, r.jsx)(l.m, { text: e, children: (0, r.jsx)(u.mir, { size: "xxs" }) });
        },
        F = () =>
            (0, r.jsx)("div", { className: R.o1, children: (0, r.jsx)(y.Ay, { channel: s, onAction: w, onClose: b }) }),
        V =
            s.isDM() || s.isGroupDM()
                ? C.intl.string(C.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? C.intl.string(C.t.QygGCN)
                  : C.intl.string(C.t.msxteM);
    return (0, r.jsx)(d.f5, {
        value: L,
        children: (0, r.jsxs)(g.A, {
            ref: M,
            className: a()(R.Nr, O),
            onAction: w,
            onClose: b,
            "aria-labelledby": U,
            children: [
                (0, r.jsx)(A.A, {
                    text: V,
                    tags: G(),
                    contextMenu: (0, r.jsx)(v.A, { display: "voice", user: t, onClose: b }),
                }),
                (0, r.jsx)(u.AC4, { children: (0, r.jsx)(u.H, { id: U, children: `${V}, ${k}` }) }),
                (0, r.jsx)("div", {
                    className: R.rf,
                    children: (0, r.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, r.jsx)(T.A, { users: P, channel: s }),
                            (0, r.jsxs)("div", {
                                className: R.zH,
                                children: [
                                    (0, r.jsx)(I.A, { channel: s, guild: x, onAction: w, onClose: b }),
                                    s.isGuildVoice() && (0, r.jsx)(S.A, { voiceChannel: s, onAction: w, onClose: b }),
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
