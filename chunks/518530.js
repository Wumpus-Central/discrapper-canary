var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(699344),
    A = t(812771),
    h = t(355622),
    m = t(826673),
    g = t(58736),
    x = t(31717),
    C = t(188567),
    f = t(43189),
    p = t(652215),
    E = t(49999),
    I = t(792996),
    j = t(62502);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { channel: n, guild: t, maxWidth: v } = e,
                N = (0, u.Ay)(n);
            l.useEffect(() => {
                (0, m.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: E.i.AUTO });
            }, []);
            let _ = l.useCallback(() => {
                    (o.A.updateChatOpen(n.id, !1), C._.safeDispatch(p.jej.FOCUS_CHAT_BUTTON));
                }, [n.id]),
                T = (0, i.jsx)(g.Ay.Icon, { icon: a.XSmallIcon, tooltip: I.intl.string(I.t.cpT0Cq), onClick: _ });
            return (0, i.jsxs)(A.A, {
                sidebarType: A.X.CallChatSidebar,
                maxWidth: v,
                floatingLayer: f.Ay,
                children: [
                    (0, i.jsx)(c.A, { channel: n, draftType: x.C.ChannelMessage }),
                    (0, i.jsxs)(g.Ay, {
                        toolbar: T,
                        "aria-label": I.intl.string(I.t.BIYAqa),
                        children: [
                            (0, i.jsx)(g.Ay.ChannelIcon, { icon: r.ChatIcon, "aria-label": I.intl.string(I.t.Kx5kCN) }),
                            (0, i.jsx)(g.Ay.Title, { children: N }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: j.T,
                        children: (0, i.jsx)(d.A, { channel: n, guild: t, chatInputType: h.oU.SIDEBAR }, n.id),
                    }),
                ],
            });
        },
    },
);
