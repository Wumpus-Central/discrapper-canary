t.d(n, { A: () => v });
var l = t(627968),
    i = t(64700),
    s = t(554146),
    a = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(806202),
    A = t(812771),
    h = t(355622),
    m = t(826673),
    C = t(58736),
    E = t(31717),
    p = t(625494),
    g = t(43189),
    x = t(652215),
    I = t(49999),
    f = t(375708),
    T = t(248537);
let v = function (e) {
    let { channel: n, guild: t, maxWidth: v } = e,
        _ = (0, u.Ay)(n);
    i.useEffect(() => {
        (0, m.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: I.i.AUTO });
    }, []);
    let j = i.useCallback(() => {
            o.A.updateChatOpen(n.id, !1), p._.safeDispatch(x.jej.FOCUS_CHAT_BUTTON);
        }, [n.id]),
        N = (0, l.jsx)(C.Ay.Icon, { icon: a.P, tooltip: f.intl.string(f.t.cpT0Cq), onClick: j });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: v,
        floatingLayer: g.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: n, draftType: E.C.ChannelMessage }),
            (0, l.jsxs)(C.Ay, {
                toolbar: N,
                "aria-label": f.intl.string(f.t.BIYAqa),
                children: [
                    (0, l.jsx)(C.Ay.ChannelIcon, { icon: r.o, "aria-label": f.intl.string(f.t.Kx5kCN) }),
                    (0, l.jsx)(C.Ay.Title, { children: _ }),
                ],
            }),
            (0, l.jsx)("div", {
                className: T.T,
                children: (0, l.jsx)(d.A, { channel: n, guild: t, chatInputType: h.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
