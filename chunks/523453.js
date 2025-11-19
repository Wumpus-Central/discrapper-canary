n.d(t, { Z: () => b }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(159691),
    s = n(481060),
    l = n(435064),
    c = n(10464),
    u = n(680056),
    d = n(375954),
    f = n(630388),
    _ = n(591759),
    p = n(834129),
    h = n(981631),
    m = n(388032),
    g = n(539461);
function E(e) {
    let t = "__CLIP_METADATA__",
        n = e.indexOf(t);
    if (-1 === n) return {};
    let r = n + t.length,
        i = e.substring(r);
    try {
        let e = JSON.parse(i);
        return {
            clipId: e.id,
            remoteTriggerClipId: e.remoteTriggerClipId,
        };
    } catch (e) {
        return {};
    }
}
function b(e) {
    let { message: t, compact: n } = e,
        b = t.channel_id,
        y = (0, a.e7)(
            [d.Z],
            () =>
                null != t.messageReference
                    ? d.Z.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: O, remoteTriggerClipId: v } = i.useMemo(() => (null != y ? E(y.content) : {}), [y]),
        I = (0, a.e7)([l.Z], () => l.Z.getMatchingGroupClip(O, v)),
        T = (0, a.e7)([l.Z], () => null != I && null != b && l.Z.wasClipSharedInChannel(I.id, b)),
        { onShareClick: S } = (0, u.Z)(b),
        A = i.useCallback(() => {
            var e;
            null != I &&
                null != b &&
                (null == (e = t.messageReference) ? void 0 : e.message_id) != null &&
                S({
                    clips: [I],
                    messageReference: {
                        channel_id: b,
                        message_id: t.messageReference.message_id,
                    },
                });
        }, [I, b, t.messageReference, S]);
    if (null == y || (null == O && null == v) || null == I || T) return null;
    let C = y.attachments.find((e) => {
            var t;
            return (0, f.yE)(null != (t = e.flags) ? t : 0, h.J0y.IS_CLIP);
        }),
        N = null;
    if ((null == C ? void 0 : C.proxy_url) != null) {
        let e = _.Z.toURLSafe(C.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (N = e.toString()));
    }
    let R = null != N ? [N, I.thumbnail] : [I.thumbnail];
    return (0, r.jsx)(p.Z, {
        iconNode: (0, r.jsx)(s.AlX, {
            size: "md",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, r.jsxs)("div", {
            className: g.previewContainer,
            children: [
                (0, r.jsx)(c.Z, {
                    thumbnails: R,
                    variant: "stacked",
                }),
                (0, r.jsx)(o.zxk, {
                    size: "sm",
                    onClick: A,
                    text: m.intl.string(m.t["5qb8EX"]),
                    icon: s.n$P,
                }),
            ],
        }),
        children: m.intl.string(m.t.ThhsNG),
    });
}
