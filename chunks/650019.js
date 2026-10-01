(e.d(i, { A: () => s }), e(938796));
var n = e(613373),
    l = e(652215);
function s(t, i) {
    if (null == t) return null;
    let e = i?.find((i) => i.id === t.attachment_id);
    return {
        timestamp: (0, n.rB)(t.timestamp / 1e3),
        title: e?.title ?? null,
        isClip: ((e?.flags ?? 0) & l.sbO.IS_CLIP) != 0,
        attachment: e,
    };
}
