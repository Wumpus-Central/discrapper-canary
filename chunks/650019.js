"use strict";
n.d(t, { A: () => s }), n(938796);
var l = n(613373),
    i = n(652215);
function s(e, t) {
    if (null == e) return null;
    let n = t?.find((t) => t.id === e.attachment_id);
    return {
        timestamp: (0, l.rB)(e.timestamp / 1e3),
        title: n?.title ?? null,
        isClip: ((n?.flags ?? 0) & i.sbO.IS_CLIP) != 0,
        attachment: n,
    };
}
