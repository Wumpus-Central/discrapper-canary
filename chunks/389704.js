"use strict";
n.d(t, { A: () => o });
var r = n(847267),
    i = n(543894),
    a = n(559374),
    s = n(324049);
function o(e, t) {
    void 0 === t && (t = []);
    var n,
        l = (0, r.A)(e),
        u = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        c = (0, a.A)(l),
        d = u ? [c].concat(c.visualViewport || [], (0, s.A)(l) ? l : []) : l,
        _ = t.concat(d);
    return u ? _ : _.concat(o((0, i.A)(d)));
}
