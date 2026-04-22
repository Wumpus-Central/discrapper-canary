t.d(n, { A: () => T });
var l = t(627968),
    i = t(64700),
    a = t(554146),
    s = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(698718),
    A = t(812771),
    h = t(355622),
    p = t(826673),
    m = t(58736),
    g = t(31717),
    f = t(203982),
    C = t(43189),
    E = t(652215),
    v = t(49999),
    I = t(985018),
    x = t(248537);
let T = function (e) {
    let { channel: n, guild: t, maxWidth: T } = e,
        _ = (0, u.Ay)(n);
    i.useEffect(() => {
        (0, p.Dr)(a.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: v.i.AUTO });
    }, []);
    let j = i.useCallback(() => {
            o.A.updateChatOpen(n.id, !1, "close button"), f._.safeDispatch(E.jej.FOCUS_CHAT_BUTTON);
        }, [n.id]),
        N = (0, l.jsx)(m.Ay.Icon, { icon: s.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: j });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: T,
        floatingLayer: C.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: n, draftType: g.C.ChannelMessage }),
            (0, l.jsxs)(m.Ay, {
                toolbar: N,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: [
                    (0, l.jsx)(m.Ay.ChannelIcon, { icon: r.o, "aria-label": I.intl.string(I.t.Kx5kCN) }),
                    (0, l.jsx)(m.Ay.Title, { children: _ }),
                ],
            }),
            (0, l.jsx)("div", {
                className: x.T,
                children: (0, l.jsx)(d.A, { channel: n, guild: t, chatInputType: h.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
