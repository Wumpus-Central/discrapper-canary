var i = u(138399),
    t = u(964486),
    c = u(775602),
    l = u(149468),
    a = u(362280),
    s = u(81437),
    r = u(378570),
    A = u(114129),
    _ = u(442325),
    d = u(734057),
    o = u(129230),
    b = u(188567),
    C = u(652215);
u.d(
    e,
    {},
    {
        KW: function (n, e, u) {
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
        },
        n4: function (n, e, u, i) {
            (0, l.zV)(C.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: u });
            let t = _.A.isEnabled() ? _.A.getTabForChannel(n) : null;
            (null != t ? (0, A.ZD)(t.id) : (0, a.A)(C.BVt.CHANNEL(e, n)), i());
        },
        xN: function (n) {
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
        },
        yW: function (n) {
            (0, t.Ay)(() => {
                o.default.track(C.HAw.OPEN_POPOUT, { type: n });
            });
        },
    },
);
