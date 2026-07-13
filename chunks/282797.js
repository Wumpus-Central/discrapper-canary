"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(990078),
    d = n(885574),
    c = n(140735),
    u = n(707554),
    _ = n(793574),
    E = n(688810),
    A = n(47167),
    h = n(71393),
    I = n(575731),
    f = n(92240),
    p = n(257367),
    T = n(939496),
    m = n(584904),
    g = n(351638),
    S = n(316770),
    N = n(42002),
    C = n(560859),
    O = n(70963),
    R = n(269587),
    L = n(996988),
    D = n(375708),
    y = n(514566);
function v(e) {
    let { user: t, currentUser: n, voiceChannel: a, className: v, onClose: b } = e,
        { themeType: M } = (0, T.E)(),
        { analyticsLocations: P } = (0, E.Ay)(_.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        U = (0, f.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: a.id,
            user: t,
            analyticsLocations: P,
        }),
        w = (0, p.A)({ userId: t.id, onAction: U }),
        G = (0, l.bG)([h.A], () => h.A.getGuild(a.guild_id)),
        x = (0, I.A)(a),
        k = (0, A.Ay)(a),
        F = r.useId();
    function V() {
        return (0, i.jsx)("div", {
            className: y.o1,
            children: (0, i.jsx)(O.Ay, { channel: a, onAction: U, onClose: b }),
        });
    }
    let B =
        a.isDM() || a.isGroupDM()
            ? D.intl.string(D.t["9FaEzi"])
            : a.isGuildStageVoice()
              ? D.intl.string(D.t.QygGCN)
              : D.intl.string(D.t.msxteM);
    return (0, i.jsx)(E.f5, {
        value: P,
        children: (0, i.jsxs)(m.A, {
            ref: w,
            className: s()(y.Nr, v),
            onAction: U,
            onClose: b,
            "aria-labelledby": F,
            children: [
                (0, i.jsx)(g.A, {
                    text: B,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = a.isDM() || a.isGroupDM() ? D.intl.string(D.t["+DsWbX"]) : D.intl.string(D.t.xOVEjc);
                        return (0, i.jsx)(o.m, { text: e, children: (0, i.jsx)(d.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)(R.A, { display: "voice", user: t, onClose: b }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { id: F, children: `${B}, ${k}` }) }),
                (0, i.jsx)("div", {
                    className: y.rf,
                    children: (0, i.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, i.jsx)(N.A, { users: x, channel: a }),
                            (0, i.jsxs)("div", {
                                className: y.zH,
                                children: [
                                    (0, i.jsx)(S.A, { channel: a, guild: G, onAction: U, onClose: b }),
                                    a.isGuildVoice() && (0, i.jsx)(C.A, { voiceChannel: a, onAction: U, onClose: b }),
                                    M === L.d.MODAL_V2 && V(),
                                ],
                            }),
                            M === L.d.MODAL && V(),
                        ],
                    }),
                }),
                M !== L.d.MODAL && M !== L.d.MODAL_V2 && V(),
            ],
        }),
    });
}
