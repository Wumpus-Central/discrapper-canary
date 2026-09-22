t.d(n, { A: () => T });
var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(789645),
    o = t(534890),
    r = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(688438),
    A = t(812771),
    m = t(355622),
    h = t(826673),
    C = t(58736),
    p = t(31717),
    x = t(625494),
    g = t(43189),
    f = t(652215),
    E = t(49999),
    I = t(375708),
    v = t(62502);
let T = function (e) {
    let { channel: n, guild: t, maxWidth: T } = e,
        j = (0, u.Ay)(n);
    l.useEffect(() => {
        (0, h.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: E.i.AUTO });
    }, []);
    let N = l.useCallback(() => {
            (r.A.updateChatOpen(n.id, !1), x._.safeDispatch(f.jej.FOCUS_CHAT_BUTTON));
        }, [n.id]),
        _ = (0, i.jsx)(C.Ay.Icon, { icon: a.P, tooltip: I.intl.string(I.t.cpT0Cq), onClick: N });
    return (0, i.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: T,
        floatingLayer: g.Ay,
        children: [
            (0, i.jsx)(c.A, { channel: n, draftType: p.C.ChannelMessage }),
            (0, i.jsxs)(C.Ay, {
                toolbar: _,
                "aria-label": I.intl.string(I.t.BIYAqa),
                children: [
                    (0, i.jsx)(C.Ay.ChannelIcon, { icon: o.ChatIcon, "aria-label": I.intl.string(I.t.Kx5kCN) }),
                    (0, i.jsx)(C.Ay.Title, { children: j }),
                ],
            }),
            (0, i.jsx)("div", {
                className: v.T,
                children: (0, i.jsx)(d.A, { channel: n, guild: t, chatInputType: m.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
