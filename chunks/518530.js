n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(367513),
    o = n(738876),
    d = n(698718),
    c = n(812771),
    u = n(355622),
    h = n(826673),
    A = n(58736),
    g = n(31717),
    m = n(203982),
    p = n(43189),
    _ = n(652215),
    x = n(49999),
    f = n(985018),
    E = n(266920);
let C = function (e) {
    let { channel: t, guild: n, maxWidth: C } = e;
    l.useEffect(() => {
        (0, h.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.i.AUTO });
    }, []);
    let I = l.useCallback(() => {
            r.A.updateChatOpen(t.id, !1, "close button"), m._.safeDispatch(_.jej.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        S = (0, i.jsx)(A.Ay.Icon, { icon: a.PGe, tooltip: f.intl.string(f.t.cpT0Cq), onClick: I });
    return (0, i.jsxs)(c.A, {
        sidebarType: c.X.CallChatSidebar,
        maxWidth: C,
        floatingLayer: p.Ay,
        children: [
            (0, i.jsx)(o.A, { channel: t, draftType: g.C.ChannelMessage }),
            (0, i.jsxs)(A.Ay, {
                toolbar: S,
                "aria-label": f.intl.string(f.t.BIYAqa),
                children: [
                    (0, i.jsx)(A.Ay.ChannelIcon, { icon: a.oyn, "aria-label": f.intl.string(f.t.Kx5kCN) }),
                    (0, i.jsx)(A.Ay.Title, { children: t.name }),
                ],
            }),
            (0, i.jsx)("div", {
                className: E.T,
                children: (0, i.jsx)(d.A, { channel: t, guild: n, chatInputType: u.oU.SIDEBAR }, t.id),
            }),
        ],
    });
};
