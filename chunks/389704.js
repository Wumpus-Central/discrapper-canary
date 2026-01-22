n.d(t, {
    A: () => o,
});
var r = n(847267),
    i = n(543894),
    a = n(559374),
    s = n(324049);

function o(e, t) {
    void 0 === t && (t = []);
    var n,
        l = (0, r.A)(e),
        c = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        u = (0, a.A)(l),
        d = c ? [u].concat(u.visualViewport || [], (0, s.A)(l) ? l : []) : l,
        f = t.concat(d);
    return c ? f : f.concat(o((0, i.A)(d)));
}
