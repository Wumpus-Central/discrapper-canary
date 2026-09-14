s.d(t, { M6: () => P, QK: () => S, l2: () => D, lP: () => I, pE: () => N });
var n = s(582128),
    a = s(478437),
    l = s(17928),
    i = s(155718),
    r = s(323073),
    u = s(47167),
    o = s(960850),
    d = s(446244),
    c = s(750385),
    m = s(68935),
    b = s(95701),
    g = s(734057),
    A = s(576705),
    h = s(994500),
    p = s(287809),
    f = s(659674),
    E = s(403362),
    x = s(427262),
    L = s(652215),
    C = s(375708);
function S(e) {
    let t = e.map(d._g).find(E.Vq),
        s = (0, l.bG)([g.A], () => g.A.getChannel(t), [t]);
    return n.useMemo(() => s ?? (0, b.createChannelRecord)({ id: "1", type: a.r.DM }), [s]);
}
function _(e) {
    return e.components.length > 0 && e.components[0].type === i.I5.CHECKPOINT_CARD;
}
function N(e, t, s, n) {
    let a = s instanceof b.YB;
    if (null != n) {
        let e = n(s);
        if (null != e) return e;
    }
    if (null == e) return;
    let l = _(e),
        i = e.messageSnapshots.length > 0 && _(e.messageSnapshots[0].message);
    if (null != t || l) {
        if ((0, r.Gc)(t) && !(a && (0, r.Gc)(s))) return { label: C.intl.string(C.t.KgPx1D), lineClamp: 2 };
        if (a && (0, b.zy)(s.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !A.A.can(L.xBc.ATTACH_FILES, s)
            )
                return { label: C.intl.string(C.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, f.fS)(s, A.A) &&
                    !(0, f.ax)(e)) ||
                ((l || i) && !(0, f.fS)(s, A.A))
            )
                return { label: C.intl.string(C.t.Wr4RIX) };
            let t = [
                ...(0, m.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, m.o6)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !A.A.can(L.xBc.USE_EXTERNAL_STICKERS, s) &&
                t.some((e) => {
                    let t;
                    return (
                        null != (t = c.A.getStickerById(e.id)) &&
                        !!(0, m.Xw)(t) &&
                        (t.guild_id !== s.guild_id || void 0)
                    );
                })
            )
                return { label: C.intl.string(C.t["0Yyrua"]) };
            if (
                (e.hasFlag(L.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(L.pr7.IS_VOICE_MESSAGE))) &&
                !A.A.can(L.xBc.SEND_VOICE_MESSAGES, s)
            )
                return { label: C.intl.string(C.t.quj4DY) };
        }
    }
}
function I(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(0, o.js)(e, t);
}
function D(e) {
    return (0, l.yK)(
        [p.default, g.A, h.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: s } = e;
                    if ("user" === t) {
                        let e = p.default.getUser(s);
                        return null != e ? (h.A.getNickname(e.id) ?? x.Ay.getName(e)) : null;
                    }
                    let n = g.A.getChannel(s);
                    return null != n ? (0, u.m1)(n, p.default, h.A, !0) : null;
                })
                .filter(E.Vq),
        [e],
    );
}
function P(e) {
    let t = (0, l.yK)(
        [g.A, A.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: s } = e;
                    return "channel" === t ? g.A.getChannel(s) : null;
                })
                .filter(E.Vq)
                .filter((e) => I(e, A.A)),
        [e],
    );
    return (0, l.yK)([p.default, h.A], () => t.map((e) => (0, u.m1)(e, p.default, h.A, !0)), [t]);
}
