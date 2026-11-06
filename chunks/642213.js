var u = i(138399),
    t = i(964486),
    c = i(775602),
    l = i(149468),
    a = i(362280),
    s = i(81437),
    o = i(378570),
    r = i(114129),
    A = i(442325),
    _ = i(734057),
    d = i(129230),
    b = i(188567),
    C = i(652215);
i.d(
    e,
    {},
    {
        KW: function (n, e, i) {
            function t() {
                let { id: t, channel_id: c } = n;
                if (null != _.A.getChannel(c)) {
                    u.A.trackJump(c, t, e);
                    let n = A.A.isEnabled() ? A.A.getTabForChannel(c) : null;
                    (null != n && (0, r.ZD)(n.id, "inbox"), (0, o.ci)(c, t));
                }
                i();
            }
            (0, s.A)(n, t) && t();
        },
        n4: function (n, e, i, u) {
            (0, l.zV)(C.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: i });
            let t = A.A.isEnabled() ? A.A.getTabForChannel(n) : null;
            (null != t ? (0, r.ZD)(t.id, "inbox") : (0, a.A)(C.BVt.CHANNEL(e, n)), u());
        },
        xN: function (n) {
            (0, t.Ay)(() => {
                function e() {
                    n.current?.scrollPageUp({ animate: !c.Ay.useReducedMotion });
                }
                function i() {
                    n.current?.scrollPageDown({ animate: !c.Ay.useReducedMotion });
                }
                return (
                    b._.subscribe(C.jej.SCROLL_PAGE_DOWN, i),
                    b._.subscribe(C.jej.SCROLL_PAGE_UP, e),
                    () => {
                        (b._.unsubscribe(C.jej.SCROLL_PAGE_DOWN, i), b._.unsubscribe(C.jej.SCROLL_PAGE_UP, e));
                    }
                );
            });
        },
        yW: function (n) {
            (0, t.Ay)(() => {
                d.default.track(C.HAw.OPEN_POPOUT, { type: n });
            });
        },
    },
);
