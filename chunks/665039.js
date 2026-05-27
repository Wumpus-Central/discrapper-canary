"use strict";
n.d(t, { j: () => s });
var i = n(64700),
    r = n(77729);
function s(e) {
    return (0, i.useMemo)(
        () =>
            null == e || null == r.A.clips.getClipProtocolURLFromPath
                ? null
                : r.A.clips.getClipProtocolURLFromPath(e.filepath),
        [e],
    );
}
