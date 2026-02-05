"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(540239);
function a(e) {
    let { disabled: t, deviceId: n, width: a, height: s } = e;
    return t
        ? (0, r.jsx)("div", { className: "media-engine-video", style: { width: a, height: s } })
        : (0, r.jsx)(i.A, { streamId: n, style: { width: a, height: s } });
}
a.defaultProps = { disabled: !1, width: 320, height: 180 };
