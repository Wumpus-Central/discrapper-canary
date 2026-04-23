"use strict";
n.d(t, {
    A: () =>
        function e(t, n) {
            void 0 === n && (n = []);
            var o,
                l = (0, r.A)(t),
                u = l === (null == (o = t.ownerDocument) ? void 0 : o.body),
                c = (0, s.A)(l),
                d = u ? [c].concat(c.visualViewport || [], (0, a.A)(l) ? l : []) : l,
                _ = n.concat(d);
            return u ? _ : _.concat(e((0, i.A)(d)));
        },
});
var r = n(847267),
    i = n(543894),
    s = n(559374),
    a = n(324049);
