t.d(n, { A: () => j });
var l = t(477900),
    i = t(582128),
    a = t(554146),
    s = t(789645),
    o = t(534890),
    r = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(688438),
    A = t(812771),
    h = t(355622),
    m = t(826673),
    C = t(58736),
    p = t(31717),
    x = t(625494),
    g = t(43189),
    f = t(652215),
    E = t(49999),
    I = t(660183),
    v = t(62502);
let j = function (e) {
    let { channel: n, guild: t, maxWidth: j } = e,
        T = (0, u.Ay)(n);
    i.useEffect(() => {
        (0, m.Dr)(a.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: E.i.AUTO });
    }, []);
    let N = i.useCallback(() => {
            (r.A.updateChatOpen(n.id, !1), x._.safeDispatch(f.jej.FOCUS_CHAT_BUTTON));
        }, [n.id]),
        _ = (0, l.jsx)(C.Ay.Icon, { icon: s.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: N });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: j,
        floatingLayer: g.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: n, draftType: p.C.ChannelMessage }),
            (0, l.jsxs)(C.Ay, {
                toolbar: _,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: [
                    (0, l.jsx)(C.Ay.ChannelIcon, { icon: o.ChatIcon, "aria-label": I.intl.string(I.t.Kx5kCN) }),
                    (0, l.jsx)(C.Ay.Title, { children: T }),
                ],
            }),
            (0, l.jsx)("div", {
                className: v.T,
                children: (0, l.jsx)(d.A, { channel: n, guild: t, chatInputType: h.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
