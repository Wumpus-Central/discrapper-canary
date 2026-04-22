"use strict";
n.d(t, { M6: () => O, QK: () => T, lP: () => N, pE: () => y });
var r = n(64700),
    i = n(478437),
    s = n(311907),
    a = n(155718),
    o = n(323073),
    l = n(47167),
    u = n(223863),
    d = n(679382),
    c = n(378058),
    _ = n(95701),
    f = n(734057),
    E = n(576705),
    h = n(994500),
    p = n(287809),
    m = n(659674),
    g = n(403362),
    A = n(652215),
    I = n(985018);
function T(e) {
    let t = e.map(u._g).find(g.Vq),
        n = (0, s.bG)([f.A], () => f.A.getChannel(t), [t]);
    return r.useMemo(() => n ?? (0, _.createChannelRecord)({ id: "1", type: i.r.DM }), [n]);
}
function S(e) {
    return e.components.length > 0 && e.components[0].type === a.I5.CHECKPOINT_CARD;
}
function y(e, t, n, r) {
    let i = n instanceof _.YB;
    if (null != r) {
        let e = r(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let s = S(e),
        a = e.messageSnapshots.length > 0 && S(e.messageSnapshots[0].message);
    if (null != t || s) {
        if ((0, o.Gc)(t) && !(i && (0, o.Gc)(n))) return { label: I.intl.string(I.t.KgPx1D) };
        if (i && (0, _.zy)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !E.A.can(A.xBc.ATTACH_FILES, n)
            )
                return { label: I.intl.string(I.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, m.fS)(n, E.A) &&
                    !(0, m.ax)(e)) ||
                ((s || a) && !(0, m.fS)(n, E.A))
            )
                return { label: I.intl.string(I.t.Wr4RIX) };
            let t = [
                ...(0, c.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, c.o6)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !E.A.can(A.xBc.USE_EXTERNAL_STICKERS, n) &&
                t.some((e) => {
                    let t;
                    return (
                        null != (t = d.A.getStickerById(e.id)) &&
                        !!(0, c.Xw)(t) &&
                        (t.guild_id !== n.guild_id || void 0)
                    );
                })
            )
                return { label: I.intl.string(I.t["0Yyrua"]) };
            if (
                (e.hasFlag(A.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(A.pr7.IS_VOICE_MESSAGE))) &&
                !E.A.can(A.xBc.SEND_VOICE_MESSAGES, n)
            )
                return { label: I.intl.string(I.t.quj4DY) };
        }
    }
}
function N(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(A.xBc.MANAGE_CHANNELS, e) || t.can(A.xBc.MANAGE_MESSAGES, e))
    );
}
function O(e) {
    let t = (0, s.yK)(
        [f.A, E.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? f.A.getChannel(n) : null;
                })
                .filter(g.Vq)
                .filter((e) => N(e, E.A)),
        [e],
    );
    return (0, s.yK)([p.default, h.A], () => t.map((e) => (0, l.m1)(e, p.default, h.A, !0)), [t]);
}
