"use strict";
n.d(t, { M6: () => b, QK: () => T, lP: () => C, pE: () => v });
var r = n(64700),
    i = n(478437),
    a = n(311907),
    s = n(155718),
    o = n(323073),
    l = n(47167),
    u = n(223863),
    c = n(679382),
    d = n(378058),
    _ = n(95701),
    f = n(734057),
    p = n(576705),
    h = n(994500),
    m = n(287809),
    g = n(659674),
    E = n(403362),
    A = n(652215),
    I = n(985018);
function T(e) {
    let t = e.map(u._g).find(E.Vq),
        n = (0, a.bG)([f.A], () => f.A.getChannel(t), [t]);
    return r.useMemo(() => n ?? (0, _.createChannelRecord)({ id: "1", type: i.r.DM }), [n]);
}
function y(e, t) {
    let n = c.A.getStickerById(e.id);
    return null != n && !!(0, d.Xw)(n) && (n.guild_id !== t.guild_id || void 0);
}
function S(e) {
    return e.components.length > 0 && e.components[0].type === s.I5.CHECKPOINT_CARD;
}
function v(e, t, n, r) {
    let i = n instanceof _.YB;
    if (null != r) {
        let e = r(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let a = S(e),
        s = e.messageSnapshots.length > 0 && S(e.messageSnapshots[0].message);
    if (null != t || a) {
        if ((0, o.Gc)(t) && !(i && (0, o.Gc)(n))) return { label: I.intl.string(I.t.KgPx1D) };
        if (i && (0, _.zy)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !p.A.can(A.xBc.ATTACH_FILES, n)
            )
                return { label: I.intl.string(I.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, g.fS)(n, p.A) &&
                    !(0, g.ax)(e)) ||
                ((a || s) && !(0, g.fS)(n, p.A))
            )
                return { label: I.intl.string(I.t.Wr4RIX) };
            let t = [
                ...(0, d.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, d.o6)(t);
                }),
            ];
            if (t.length > 0 && !p.A.can(A.xBc.USE_EXTERNAL_STICKERS, n) && t.some((e) => y(e, n)))
                return { label: I.intl.string(I.t["0Yyrua"]) };
            if (
                (e.hasFlag(A.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(A.pr7.IS_VOICE_MESSAGE))) &&
                !p.A.can(A.xBc.SEND_VOICE_MESSAGES, n)
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
function b(e) {
    let t = (0, a.yK)(
        [f.A, p.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? f.A.getChannel(n) : null;
                })
                .filter(E.Vq)
                .filter((e) => C(e, p.A)),
        [e],
    );
    return (0, a.yK)([m.default, h.A], () => t.map((e) => (0, l.m1)(e, m.default, h.A, !0)), [t]);
}
