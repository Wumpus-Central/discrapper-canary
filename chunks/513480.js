"use strict";
n.d(t, { M6: () => R, QK: () => T, lP: () => C, pE: () => N });
var i = n(64700),
    r = n(478437),
    s = n(17928),
    a = n(155718),
    o = n(323073),
    l = n(47167),
    d = n(223863),
    _ = n(750385),
    u = n(68935),
    c = n(95701),
    E = n(734057),
    h = n(576705),
    m = n(994500),
    f = n(287809),
    g = n(659674),
    p = n(403362),
    A = n(652215),
    I = n(985018);
function T(e) {
    let t = e.map(d._g).find(p.Vq),
        n = (0, s.bG)([E.A], () => E.A.getChannel(t), [t]);
    return i.useMemo(() => n ?? (0, c.createChannelRecord)({ id: "1", type: r.r.DM }), [n]);
}
function S(e) {
    return e.components.length > 0 && e.components[0].type === a.I5.CHECKPOINT_CARD;
}
function N(e, t, n, i) {
    let r = n instanceof c.YB;
    if (null != i) {
        let e = i(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let s = S(e),
        a = e.messageSnapshots.length > 0 && S(e.messageSnapshots[0].message);
    if (null != t || s) {
        if ((0, o.Gc)(t) && !(r && (0, o.Gc)(n))) return { label: I.intl.string(I.t.KgPx1D) };
        if (r && (0, c.zy)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !h.A.can(A.xBc.ATTACH_FILES, n)
            )
                return { label: I.intl.string(I.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, g.fS)(n, h.A) &&
                    !(0, g.ax)(e)) ||
                ((s || a) && !(0, g.fS)(n, h.A))
            )
                return { label: I.intl.string(I.t.Wr4RIX) };
            let t = [
                ...(0, u.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, u.o6)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !h.A.can(A.xBc.USE_EXTERNAL_STICKERS, n) &&
                t.some((e) => {
                    let t;
                    return (
                        null != (t = _.A.getStickerById(e.id)) &&
                        !!(0, u.Xw)(t) &&
                        (t.guild_id !== n.guild_id || void 0)
                    );
                })
            )
                return { label: I.intl.string(I.t["0Yyrua"]) };
            if (
                (e.hasFlag(A.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(A.pr7.IS_VOICE_MESSAGE))) &&
                !h.A.can(A.xBc.SEND_VOICE_MESSAGES, n)
            )
                return { label: I.intl.string(I.t.quj4DY) };
        }
    }
}
function C(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(A.xBc.MANAGE_CHANNELS, e) || t.can(A.xBc.MANAGE_MESSAGES, e))
    );
}
function R(e) {
    let t = (0, s.yK)(
        [E.A, h.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? E.A.getChannel(n) : null;
                })
                .filter(p.Vq)
                .filter((e) => C(e, h.A)),
        [e],
    );
    return (0, s.yK)([f.default, m.A], () => t.map((e) => (0, l.m1)(e, f.default, m.A, !0)), [t]);
}
