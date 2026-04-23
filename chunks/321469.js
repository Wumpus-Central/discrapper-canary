"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(540239);
function s(e) {
    let { disabled: t, deviceId: n, width: s, height: a } = e;
    return t
        ? (0, r.jsx)("div", { className: "media-engine-video", style: { width: s, height: a } })
        : (0, r.jsx)(i.A, { streamId: n, style: { width: s, height: a } });
}
s.defaultProps = { disabled: !1, width: 320, height: 180 };
