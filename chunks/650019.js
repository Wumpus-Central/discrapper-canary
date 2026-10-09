(e.d(i, { A: () => n }), e(938796));
var s = e(613373),
    l = e(652215);
function n(t, i) {
    if (null == t) return null;
    let e = i?.find((i) => i.id === t.attachment_id);
    return {
        timestamp: (0, s.rB)(t.timestamp / 1e3),
        title: e?.title ?? null,
        isClip: ((e?.flags ?? 0) & l.sbO.IS_CLIP) != 0,
        attachment: e,
    };
}
