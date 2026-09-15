t.d(n, { A: () => T });
var l = t(477900),
    i = t(582128),
    s = t(554146),
    a = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(688438),
    A = t(812771),
    m = t(355622),
    h = t(826673),
    C = t(58736),
    p = t(31717),
    g = t(625494),
    E = t(43189),
    f = t(652215),
    x = t(49999),
    v = t(375708),
    I = t(62502);
let T = function (e) {
    let { channel: n, guild: t, maxWidth: T } = e,
        j = (0, u.Ay)(n);
    i.useEffect(() => {
        (0, h.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.i.AUTO });
    }, []);
    let N = i.useCallback(() => {
            (o.A.updateChatOpen(n.id, !1), g._.safeDispatch(f.jej.FOCUS_CHAT_BUTTON));
        }, [n.id]),
        _ = (0, l.jsx)(C.Ay.Icon, { icon: a.P, tooltip: v.intl.string(v.t.cpT0Cq), onClick: N });
    return (0, l.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: T,
        floatingLayer: E.Ay,
        children: [
            (0, l.jsx)(c.A, { channel: n, draftType: p.C.ChannelMessage }),
            (0, l.jsxs)(C.Ay, {
                toolbar: _,
                "aria-label": v.intl.string(v.t.BIYAqa),
                children: [
                    (0, l.jsx)(C.Ay.ChannelIcon, { icon: r.ChatIcon, "aria-label": v.intl.string(v.t.Kx5kCN) }),
                    (0, l.jsx)(C.Ay.Title, { children: j }),
                ],
            }),
            (0, l.jsx)("div", {
                className: I.T,
                children: (0, l.jsx)(d.A, { channel: n, guild: t, chatInputType: m.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
