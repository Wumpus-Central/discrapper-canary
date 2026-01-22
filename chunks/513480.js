n.d(t, {
    M6: () => T,
    QK: () => O,
    lP: () => I,
    pE: () => S,
}),
    n(896048),
    n(114821),
    n(339614);
var r = n(64700),
    i = n(478437),
    a = n(311907),
    s = n(155718),
    o = n(323073),
    l = n(47167),
    c = n(223863),
    u = n(679382),
    d = n(378058),
    f = n(95701),
    p = n(734057),
    _ = n(576705),
    h = n(994500),
    m = n(287809),
    g = n(659674),
    E = n(403362),
    b = n(652215),
    y = n(985018);
function O(e) {
    let t = e.map(c._g).find(E.Vq),
        n = (0, a.bG)([p.A], () => p.A.getChannel(t), [t]);
    return r.useMemo(
        () =>
            null != n
                ? n
                : (0, f.createChannelRecord)({
                      id: "1",
                      type: i.r.DM,
                  }),
        [n],
    );
}
function A(e, t) {
    let n = u.A.getStickerById(e.id);
    return null != n && !!(0, d.Xw)(n) && (n.guild_id !== t.guild_id || void 0);
}
function v(e) {
    return e.components.length > 0 && e.components[0].type === s.I5.CHECKPOINT_CARD;
}
function S(e, t, n, r) {
    let i = n instanceof f.YB;
    if (null != r) {
        let e = r(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let a = v(e),
        s = e.messageSnapshots.length > 0 && v(e.messageSnapshots[0].message);
    if (null != t || a) {
        if ((0, o.Gc)(t) && !(i && (0, o.Gc)(n))) return { label: y.intl.string(y.t.KgPx1D) };
        if (i && (0, f.zy)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !_.A.can(b.xBc.ATTACH_FILES, n)
            )
                return { label: y.intl.string(y.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, g.fS)(n, _.A) &&
                    !(0, g.ax)(e)) ||
                ((a || s) && !(0, g.fS)(n, _.A))
            )
                return { label: y.intl.string(y.t.Wr4RIX) };
            let t = [
                ...(0, d.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, d.o6)(t);
                }),
            ];
            if (t.length > 0 && !_.A.can(b.xBc.USE_EXTERNAL_STICKERS, n) && t.some((e) => A(e, n)))
                return { label: y.intl.string(y.t["0Yyrua"]) };
            if (
                (e.hasFlag(b.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(b.pr7.IS_VOICE_MESSAGE))) &&
                !_.A.can(b.xBc.SEND_VOICE_MESSAGES, n)
            )
                return { label: y.intl.string(y.t.quj4DY) };
        }
    }
}
function I(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(b.xBc.MANAGE_CHANNELS, e) || t.can(b.xBc.MANAGE_MESSAGES, e))
    );
}
function T(e) {
    let t = (0, a.yK)(
        [p.A, _.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? p.A.getChannel(n) : null;
                })
                .filter(E.Vq)
                .filter((e) => I(e, _.A)),
        [e],
    );
    return (0, a.yK)([m.default, h.A], () => t.map((e) => (0, l.m1)(e, m.default, h.A, !0)), [t]);
}
