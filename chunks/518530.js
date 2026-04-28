n.d(t, { A: () => v });
var l = n(627968),
    i = n(64700),
    s = n(554146),
    a = n(789645),
    r = n(534890),
    o = n(367513),
    c = n(738876),
    u = n(47167),
    d = n(806202),
    A = n(140130),
    E = n(355622),
    m = n(826673),
    h = n(58736),
    C = n(31717),
    g = n(625494),
    I = n(43189),
    p = n(652215),
    x = n(49999),
    T = n(985018),
    _ = n(248537);
let v = function (e) {
    let { channel: t, guild: n, maxWidth: v } = e,
        N = (0, u.Ay)(t);
    i.useEffect(() => {
        (0, m.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.i.AUTO });
    }, []);
    let f = i.useCallback(() => {
            o.A.updateChatOpen(t.id, !1, "close button"), g._.safeDispatch(p.jej.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        j = (0, l.jsx)(h.Ay.Icon, { icon: a.P, tooltip: T.intl.string(T.t.cpT0Cq), onClick: f });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: v,
        floatingLayer: I.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: t, draftType: C.C.ChannelMessage }),
            (0, l.jsxs)(h.Ay, {
                toolbar: j,
                "aria-label": T.intl.string(T.t.BIYAqa),
                children: [
                    (0, l.jsx)(h.Ay.ChannelIcon, { icon: r.o, "aria-label": T.intl.string(T.t.Kx5kCN) }),
                    (0, l.jsx)(h.Ay.Title, { children: N }),
                ],
            }),
            (0, l.jsx)("div", {
                className: _.T,
                children: (0, l.jsx)(d.A, { channel: t, guild: n, chatInputType: E.oU.SIDEBAR }, t.id),
            }),
        ],
    });
};
