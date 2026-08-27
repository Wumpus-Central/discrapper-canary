t.d(n, { A: () => T });
var l = t(477900),
    i = t(582128),
    a = t(554146),
    s = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(802426),
    A = t(812771),
    m = t(355622),
    h = t(826673),
    C = t(58736),
    E = t(31717),
    f = t(625494),
    p = t(43189),
    g = t(652215),
    x = t(49999),
    I = t(375708),
    v = t(62502);
let T = function (e) {
    let { channel: n, guild: t, maxWidth: T } = e,
        _ = (0, u.Ay)(n);
    i.useEffect(() => {
        (0, h.Dr)(a.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.i.AUTO });
    }, []);
    let j = i.useCallback(() => {
            o.A.updateChatOpen(n.id, !1), f._.safeDispatch(g.jej.FOCUS_CHAT_BUTTON);
        }, [n.id]),
        N = (0, l.jsx)(C.Ay.Icon, { icon: s.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: j });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: T,
        floatingLayer: p.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: n, draftType: E.C.ChannelMessage }),
            (0, l.jsxs)(C.Ay, {
                toolbar: N,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: [
                    (0, l.jsx)(C.Ay.ChannelIcon, { icon: r.ChatIcon, "aria-label": I.intl.string(I.t.Kx5kCN) }),
                    (0, l.jsx)(C.Ay.Title, { children: _ }),
                ],
            }),
            (0, l.jsx)("div", {
                className: v.T,
                children: (0, l.jsx)(d.A, { channel: n, guild: t, chatInputType: m.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
