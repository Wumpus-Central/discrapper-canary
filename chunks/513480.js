"use strict";
n.d(t, { M6: () => y, QK: () => N, l2: () => L, lP: () => R, pE: () => O });
var i = n(64700),
    r = n(478437),
    a = n(17928),
    s = n(155718),
    l = n(323073),
    o = n(47167),
    d = n(960850),
    c = n(223863),
    u = n(750385),
    _ = n(68935),
    E = n(95701),
    A = n(734057),
    h = n(576705),
    I = n(994500),
    f = n(287809),
    p = n(659674),
    T = n(403362),
    m = n(427262),
    g = n(652215),
    S = n(375708);
function N(e) {
    let t = e.map(c._g).find(T.Vq),
        n = (0, a.bG)([A.A], () => A.A.getChannel(t), [t]);
    return i.useMemo(() => n ?? (0, E.createChannelRecord)({ id: "1", type: r.r.DM }), [n]);
}
function C(e) {
    return e.components.length > 0 && e.components[0].type === s.I5.CHECKPOINT_CARD;
}
function O(e, t, n, i) {
    let r = n instanceof E.YB;
    if (null != i) {
        let e = i(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let a = C(e),
        s = e.messageSnapshots.length > 0 && C(e.messageSnapshots[0].message);
    if (null != t || a) {
        if ((0, l.Gc)(t) && !(r && (0, l.Gc)(n))) return { label: S.intl.string(S.t.KgPx1D), lineClamp: 2 };
        if (r && (0, E.zy)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !h.A.can(g.xBc.ATTACH_FILES, n)
            )
                return { label: S.intl.string(S.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, p.fS)(n, h.A) &&
                    !(0, p.ax)(e)) ||
                ((a || s) && !(0, p.fS)(n, h.A))
            )
                return { label: S.intl.string(S.t.Wr4RIX) };
            let t = [
                ...(0, _.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, _.o6)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !h.A.can(g.xBc.USE_EXTERNAL_STICKERS, n) &&
                t.some((e) => {
                    let t;
                    return (
                        null != (t = u.A.getStickerById(e.id)) &&
                        !!(0, _.Xw)(t) &&
                        (t.guild_id !== n.guild_id || void 0)
                    );
                })
            )
                return { label: S.intl.string(S.t["0Yyrua"]) };
            if (
                (e.hasFlag(g.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(g.pr7.IS_VOICE_MESSAGE))) &&
                !h.A.can(g.xBc.SEND_VOICE_MESSAGES, n)
            )
                return { label: S.intl.string(S.t.quj4DY) };
        }
    }
}
function R(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(0, d.js)(e, t);
}
function L(e) {
    return (0, a.yK)(
        [f.default, A.A, I.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    if ("user" === t) {
                        let e = f.default.getUser(n);
                        return null != e ? (I.A.getNickname(e.id) ?? m.Ay.getName(e)) : null;
                    }
                    let i = A.A.getChannel(n);
                    return null != i ? (0, o.m1)(i, f.default, I.A, !0) : null;
                })
                .filter(T.Vq),
        [e],
    );
}
function y(e) {
    let t = (0, a.yK)(
        [A.A, h.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? A.A.getChannel(n) : null;
                })
                .filter(T.Vq)
                .filter((e) => R(e, h.A)),
        [e],
    );
    return (0, a.yK)([f.default, I.A], () => t.map((e) => (0, o.m1)(e, f.default, I.A, !0)), [t]);
}
