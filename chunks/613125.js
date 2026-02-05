"use strict";
n.d(t, { Z: () => f });
var r = n(64700),
    i = n(311907),
    a = n(287809),
    s = n(430363),
    o = n(659416),
    l = n(4149),
    u = n(823854),
    c = n(926966),
    d = n(985018);
let _ = "⁣";
function f(e) {
    let { customStatusActivity: t, statusOwnerId: n } = e,
        c = (0, s.Uk)("useVoiceDareFromCustomStatus"),
        d = r.useMemo(() => (null != t && c ? (0, l.aF)(t) : null), [t, c]),
        _ = null == d || null == n ? null : n === d.senderId ? d.targetId : d.senderId,
        f = (0, i.bG)([a.default], () => (null != _ ? a.default.getUser(_) : null), [_]),
        p = (0, i.bG)([u.A], () =>
            null == d || null == n || d.messageKind !== o.cn.STATE || d.targetId !== n
                ? null
                : u.A.getProgressForUserId(n),
        );
    if (!c) return { presence: null, progress: null, statusTextOverride: null };
    let m = h({
        activity: t,
        presence: d,
        statusOwnerId: n,
        otherUserName: f?.globalName ?? f?.username ?? null,
        progress: p,
    });
    return { presence: d, progress: p, statusTextOverride: m };
}
function p(e) {
    let t = e.indexOf(_);
    return -1 === t ? e : e.slice(0, t);
}
function h(e) {
    let { activity: t, presence: n, statusOwnerId: r, otherUserName: i, progress: a } = e;
    if (null != n && null != r) {
        let e = i ?? d.intl.string(c.default["7B17YX"]),
            t = n.prompt ?? "";
        if (n.messageKind === o.cn.OFFER && n.senderId === r)
            return d.intl.formatToPlainString(c.default.QhaVRf, { otherName: e, prompt: t });
        if (n.messageKind === o.cn.STATE && n.targetId === r)
            switch (n.phase) {
                case o.Ob.RUNNING:
                    return d.intl.formatToPlainString(c.default["4HOG3Z"], { otherName: e, progressPercent: m(a) });
                case o.Ob.COMPLETED:
                    return d.intl.formatToPlainString(c.default["PjED+h"], { otherName: e });
                case o.Ob.FAILED:
                    return d.intl.formatToPlainString(c.default.ECJpgE, { otherName: e });
                case o.Ob.CANCELLED:
                    return d.intl.string(c.default.QDVSE9);
                case o.Ob.OFFERED:
                case o.Ob.ACCEPTED:
                    return d.intl.formatToPlainString(c.default.A4okI0, { otherName: e });
            }
    }
    let s = t?.state;
    if (null == s) return null;
    let l = p(s);
    return "" === l ? null : l;
}
function m(e) {
    return null == e ? 0 : Math.round(100 * e);
}
