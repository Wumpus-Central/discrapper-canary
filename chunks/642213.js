var u = i(138399),
    c = i(964486),
    t = i(775602),
    _ = i(149468),
    s = i(362280),
    o = i(81437),
    r = i(378570),
    a = i(114129),
    A = i(734057),
    d = i(129230),
    b = i(188567),
    l = i(652215);
i.d(
    e,
    {},
    {
        KW: function (n, e, i) {
            function c() {
                let { id: c, channel_id: t } = n;
                (null != A.A.getChannel(t) && (u.A.trackJump(t, c, e), (0, a.KV)(t, "inbox"), (0, r.ci)(t, c)), i());
            }
            (0, o.A)(n, c) && c();
        },
        n4: function (n, e, i, u) {
            ((0, _.zV)(l.HAw.INBOX_CHANNEL_CLICKED, { channel_id: n, guild_id: e, type: i }),
                (0, a.KV)(n, "inbox") || (0, s.A)(l.BVt.CHANNEL(e, n)),
                u());
        },
        xN: function (n) {
            (0, c.Ay)(() => {
                function e() {
                    n.current?.scrollPageUp({ animate: !t.Ay.useReducedMotion });
                }
                function i() {
                    n.current?.scrollPageDown({ animate: !t.Ay.useReducedMotion });
                }
                return (
                    b._.subscribe(l.jej.SCROLL_PAGE_DOWN, i),
                    b._.subscribe(l.jej.SCROLL_PAGE_UP, e),
                    () => {
                        (b._.unsubscribe(l.jej.SCROLL_PAGE_DOWN, i), b._.unsubscribe(l.jej.SCROLL_PAGE_UP, e));
                    }
                );
            });
        },
        yW: function (n) {
            (0, c.Ay)(() => {
                d.default.track(l.HAw.OPEN_POPOUT, { type: n });
            });
        },
    },
);
