n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(367513),
    o = n(738876),
    d = n(47167),
    c = n(698718),
    u = n(812771),
    h = n(355622),
    A = n(826673),
    _ = n(58736),
    m = n(31717),
    p = n(203982),
    g = n(43189),
    f = n(652215),
    x = n(49999),
    E = n(985018),
    I = n(336858);
let C = function (e) {
    let { channel: t, guild: n, maxWidth: C } = e,
        N = (0, d.Ay)(t);
    l.useEffect(() => {
        (0, A.Dr)(s.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: x.i.AUTO });
    }, []);
    let T = l.useCallback(() => {
            r.A.updateChatOpen(t.id, !1, "close button"), p._.safeDispatch(f.jej.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        S = (0, i.jsx)(_.Ay.Icon, { icon: a.PGe, tooltip: E.intl.string(E.t.cpT0Cq), onClick: T });
    return (0, i.jsxs)(u.A, {
        sidebarType: u.X.CallChatSidebar,
        maxWidth: C,
        floatingLayer: g.Ay,
        children: [
            (0, i.jsx)(o.A, { channel: t, draftType: m.C.ChannelMessage }),
            (0, i.jsxs)(_.Ay, {
                toolbar: S,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: [
                    (0, i.jsx)(_.Ay.ChannelIcon, { icon: a.oyn, "aria-label": E.intl.string(E.t.Kx5kCN) }),
                    (0, i.jsx)(_.Ay.Title, { children: N }),
                ],
            }),
            (0, i.jsx)("div", {
                className: I.T,
                children: (0, i.jsx)(c.A, { channel: t, guild: n, chatInputType: h.oU.SIDEBAR }, t.id),
            }),
        ],
    });
};
