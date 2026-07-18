c.d(e, { KW: () => C, n4: () => L, xN: () => d, yW: () => p });
var i = c(493336),
    t = c(964486),
    u = c(95561),
    _ = c(741231),
    r = c(81437),
    a = c(378570),
    s = c(734057),
    A = c(174459),
    l = c(625494),
    o = c(652215);
function d(n) {
    (0, t.Ay)(() => {
        function e() {
            n.current?.scrollPageUp({ animate: !0 });
        }
        function c() {
            n.current?.scrollPageDown({ animate: !0 });
        }
        return (
            l._.subscribe(o.jej.SCROLL_PAGE_DOWN, c),
            l._.subscribe(o.jej.SCROLL_PAGE_UP, e),
            () => {
                l._.unsubscribe(o.jej.SCROLL_PAGE_DOWN, c), l._.unsubscribe(o.jej.SCROLL_PAGE_UP, e);
            }
        );
    });
}
function p(n) {
    (0, t.Ay)(() => {
        A.default.track(o.HAw.OPEN_POPOUT, { type: n });
    });
}
function C(n, e, c) {
    function t() {
        let { id: t, channel_id: u } = n;
        null != s.A.getChannel(u) && (i.A.trackJump(u, t, e), (0, a.ci)(u, t)), c();
    }
    (0, r.A)(n, t) && t();
}
function L(n, e, c, i) {
    (0, u.zV)(o.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: c }), (0, _.A)(o.BVt.CHANNEL(e, n)), i();
}
