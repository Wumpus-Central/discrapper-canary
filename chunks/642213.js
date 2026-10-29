u.d(e, { KW: () => L, n4: () => P, xN: () => p, yW: () => C });
var c = u(148494),
    i = u(964486),
    t = u(775602),
    _ = u(666860),
    s = u(741231),
    r = u(81437),
    a = u(378570),
    o = u(734057),
    A = u(174459),
    d = u(625494),
    l = u(652215);
function p(n) {
    (0, i.Ay)(() => {
        function e() {
            n.current?.scrollPageUp({ animate: !t.Ay.useReducedMotion });
        }
        function u() {
            n.current?.scrollPageDown({ animate: !t.Ay.useReducedMotion });
        }
        return (
            d._.subscribe(l.jej.SCROLL_PAGE_DOWN, u),
            d._.subscribe(l.jej.SCROLL_PAGE_UP, e),
            () => {
                (d._.unsubscribe(l.jej.SCROLL_PAGE_DOWN, u), d._.unsubscribe(l.jej.SCROLL_PAGE_UP, e));
            }
        );
    });
}
function C(n) {
    (0, i.Ay)(() => {
        A.default.track(l.HAw.OPEN_POPOUT, { type: n });
    });
}
function L(n, e, u) {
    function i() {
        let { id: i, channel_id: t } = n;
        (null != o.A.getChannel(t) && (c.A.trackJump(t, i, e), (0, a.ci)(t, i)), u());
    }
    (0, r.A)(n, i) && i();
}
function P(n, e, u, c) {
    ((0, _.zV)(l.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: u }),
        (0, s.A)(l.BVt.CHANNEL(e, n)),
        c());
}
