t.d(n, { A: () => I });
var i = t(477900),
    l = t(582128),
    s = t(554146),
    a = t(789645),
    r = t(534890),
    o = t(367513),
    c = t(738876),
    u = t(47167),
    d = t(688606),
    A = t(812771),
    h = t(355622),
    m = t(826673),
    g = t(58736),
    x = t(31717),
    C = t(625494),
    f = t(43189),
    p = t(652215),
    E = t(49999),
    j = t(105292),
    v = t(62502);
let I = function (e) {
    let { channel: n, guild: t, maxWidth: I } = e,
        N = (0, u.Ay)(n);
    l.useEffect(() => {
        (0, m.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: E.i.AUTO });
    }, []);
    let _ = l.useCallback(() => {
            (o.A.updateChatOpen(n.id, !1), C._.safeDispatch(p.jej.FOCUS_CHAT_BUTTON));
        }, [n.id]),
        T = (0, i.jsx)(g.Ay.Icon, { icon: a.P, tooltip: j.intl.string(j.t.cpT0Cq), onClick: _ });
    return (0, i.jsxs)(A.A, {
        sidebarType: A.X.CallChatSidebar,
        maxWidth: I,
        floatingLayer: f.Ay,
        children: [
            (0, i.jsx)(c.A, { channel: n, draftType: x.C.ChannelMessage }),
            (0, i.jsxs)(g.Ay, {
                toolbar: T,
                "aria-label": j.intl.string(j.t.BIYAqa),
                children: [
                    (0, i.jsx)(g.Ay.ChannelIcon, { icon: r.ChatIcon, "aria-label": j.intl.string(j.t.Kx5kCN) }),
                    (0, i.jsx)(g.Ay.Title, { children: N }),
                ],
            }),
            (0, i.jsx)("div", {
                className: v.T,
                children: (0, i.jsx)(d.A, { channel: n, guild: t, chatInputType: h.oU.SIDEBAR }, n.id),
            }),
        ],
    });
};
