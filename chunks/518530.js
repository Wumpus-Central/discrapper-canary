n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(367513),
    o = n(738876),
    c = n(698718),
    d = n(812771),
    u = n(355622),
    h = n(826673),
    A = n(58736),
    _ = n(31717),
    m = n(203982),
    g = n(43189),
    p = n(652215),
    f = n(49999),
    x = n(985018),
    E = n(200393);
let I = function (e) {
    let { channel: t, guild: n, maxWidth: I } = e;
    l.useEffect(() => {
        (0, h.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: f.i.AUTO });
    }, []);
    let C = l.useCallback(() => {
            r.A.updateChatOpen(t.id, !1, "close button"), m._.safeDispatch(p.jej.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        N = (0, i.jsx)(A.Ay.Icon, { icon: a.PGe, tooltip: x.intl.string(x.t.cpT0Cq), onClick: C });
    return (0, i.jsxs)(d.A, {
        sidebarType: d.X.CallChatSidebar,
        maxWidth: I,
        floatingLayer: g.Ay,
        children: [
            (0, i.jsx)(o.A, { channel: t, draftType: _.C.ChannelMessage }),
            (0, i.jsxs)(A.Ay, {
                toolbar: N,
                "aria-label": x.intl.string(x.t.BIYAqa),
                children: [
                    (0, i.jsx)(A.Ay.ChannelIcon, { icon: a.oyn, "aria-label": x.intl.string(x.t.Kx5kCN) }),
                    (0, i.jsx)(A.Ay.Title, { children: t.name }),
                ],
            }),
            (0, i.jsx)("div", {
                className: E.T,
                children: (0, i.jsx)(c.A, { channel: t, guild: n, chatInputType: u.oU.SIDEBAR }, t.id),
            }),
        ],
    });
};
