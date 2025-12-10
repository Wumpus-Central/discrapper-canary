n.d(t, { Z: () => b }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(95015),
    o = n(442837),
    s = n(159691),
    l = n(481060),
    c = n(435064),
    u = n(10464),
    d = n(680056),
    f = n(375954),
    p = n(591759),
    _ = n(834129),
    m = n(981631),
    h = n(388032),
    g = n(582602);
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
        y = (0, o.e7)(
            [f.Z],
            () =>
                null != t.messageReference
                    ? f.Z.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: O, remoteTriggerClipId: v } = i.useMemo(() => (null != y ? E(y.content) : {}), [y]),
        S = (0, o.e7)([c.Z], () => c.Z.getMatchingGroupClip(O, v)),
        I = (0, o.e7)([c.Z], () => null != S && null != b && c.Z.wasClipSharedInChannel(S.id, b)),
        { onShareClick: T } = (0, d.Z)(b),
        C = i.useCallback(() => {
            var e;
            null != S &&
                null != b &&
                (null == (e = t.messageReference) ? void 0 : e.message_id) != null &&
                T({
                    clips: [S],
                    messageReference: {
                        channel_id: b,
                        message_id: t.messageReference.message_id,
                    },
                });
        }, [S, b, t.messageReference, T]);
    if (null == y || (null == O && null == v) || null == S || I) return null;
    let A = y.attachments.find((e) => {
            var t;
            return (0, a.yE)(null != (t = e.flags) ? t : 0, m.J0y.IS_CLIP);
        }),
        N = null;
    if ((null == A ? void 0 : A.proxy_url) != null) {
        let e = p.Z.toURLSafe(A.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (N = e.toString()));
    }
    let P = null != N ? [N, S.thumbnail] : [S.thumbnail];
    return (0, r.jsx)(_.Z, {
        iconNode: (0, r.jsx)(l.AlX, {
            size: "md",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, r.jsxs)("div", {
            className: g.previewContainer,
            children: [
                (0, r.jsx)(u.Z, {
                    thumbnails: P,
                    variant: "stacked",
                }),
                (0, r.jsx)(s.zxk, {
                    size: "sm",
                    onClick: C,
                    text: h.intl.string(h.t["5qb8EX"]),
                    icon: l.n$P,
                }),
            ],
        }),
        children: h.intl.string(h.t.ThhsNG),
    });
}
