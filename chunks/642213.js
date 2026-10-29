u.d(e, { KW: () => P, n4: () => h, xN: () => p, yW: () => L });
var i = u(148494),
    t = u(964486),
    c = u(775602),
    l = u(666860),
    a = u(741231),
    s = u(81437),
    r = u(378570),
    A = u(114129),
    _ = u(442325),
    d = u(734057),
    o = u(174459),
    b = u(625494),
    C = u(652215);
function p(n) {
    (0, t.Ay)(() => {
        function e() {
            n.current?.scrollPageUp({ animate: !c.Ay.useReducedMotion });
        }
        function u() {
            n.current?.scrollPageDown({ animate: !c.Ay.useReducedMotion });
        }
        return (
            b._.subscribe(C.jej.SCROLL_PAGE_DOWN, u),
            b._.subscribe(C.jej.SCROLL_PAGE_UP, e),
            () => {
                (b._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, u), b._.unsubscribe(C.jej.SCROLL_PAGE_UP, e));
            }
        );
    });
}
function L(n) {
    (0, t.Ay)(() => {
        o.default.track(C.HAw.OPEN_POPOUT, { type: n });
    });
}
function P(n, e, u) {
    function t() {
        let { id: t, channel_id: c } = n;
        if (null != d.A.getChannel(c)) {
            i.A.trackJump(c, t, e);
            let n = _.A.isEnabled() ? _.A.getTabForChannel(c) : null;
            (null != n && (0, A.ZD)(n.id), (0, r.ci)(c, t));
        }
        u();
    }
    (0, s.A)(n, t) && t();
}
function h(n, e, u, i) {
    (0, l.zV)(C.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: u });
    let t = _.A.isEnabled() ? _.A.getTabForChannel(n) : null;
    (null != t ? (0, A.ZD)(t.id) : (0, a.A)(C.BVt.CHANNEL(e, n)), i());
}
