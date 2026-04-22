"use strict";
n.d(t, {
    A: () =>
        function e(t, n) {
            void 0 === n && (n = []);
            var o,
                l = (0, r.A)(t),
                u = l === (null == (o = t.ownerDocument) ? void 0 : o.body),
                d = (0, s.A)(l),
                c = u ? [d].concat(d.visualViewport || [], (0, a.A)(l) ? l : []) : l,
                _ = n.concat(c);
            return u ? _ : _.concat(e((0, i.A)(c)));
        },
});
var r = n(847267),
    i = n(543894),
    s = n(559374),
    a = n(324049);
