(t.d(n, { A: () => l }), t(938796));
var a = t(613373),
    i = t(652215);
function l(e, n) {
    if (null == e) return null;
    let t = n?.find((n) => n.id === e.attachment_id);
    return {
        timestamp: (0, a.rB)(e.timestamp / 1e3),
        title: t?.title ?? null,
        isClip: ((t?.flags ?? 0) & i.sbO.IS_CLIP) != 0,
        attachment: t,
    };
}
