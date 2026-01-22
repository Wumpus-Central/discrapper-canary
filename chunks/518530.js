n.d(t, { A: () => j });
var r = n(627968),
    l = n(64700),
    i = n(554146),
    a = n(397927),
    s = n(367513),
    o = n(738876),
    c = n(698718),
    u = n(812771),
    d = n(355622),
    f = n(826673),
    p = n(58736),
    h = n(31717),
    b = n(203982),
    g = n(43189),
    m = n(652215),
    A = n(49999),
    y = n(985018),
    O = n(266920);
let j = function (e) {
    let { channel: t, guild: n, maxWidth: j } = e;
    l.useEffect(() => {
        (0, f.Dr)(i.M.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: A.i.AUTO });
    }, []);
    let v = l.useCallback(() => {
            s.A.updateChatOpen(t.id, !1), b._.safeDispatch(m.jej.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        x = (0, r.jsx)(p.Ay.Icon, {
            icon: a.PGe,
            tooltip: y.intl.string(y.t.cpT0Cq),
            onClick: v,
        });
    return (0, r.jsxs)(u.A, {
        sidebarType: u.X.CallChatSidebar,
        maxWidth: j,
        floatingLayer: g.Ay,
        children: [
            (0, r.jsx)(o.A, {
                channel: t,
                draftType: h.C.ChannelMessage,
            }),
            (0, r.jsxs)(p.Ay, {
                toolbar: x,
                "aria-label": y.intl.string(y.t.BIYAqa),
                children: [
                    (0, r.jsx)(p.Ay.ChannelIcon, {
                        icon: a.oyn,
                        "aria-label": y.intl.string(y.t.Kx5kCN),
                    }),
                    (0, r.jsx)(p.Ay.Title, { children: t.name }),
                ],
            }),
            (0, r.jsx)("div", {
                className: O.T,
                children: (0, r.jsx)(
                    c.A,
                    {
                        channel: t,
                        guild: n,
                        chatInputType: d.oU.SIDEBAR,
                    },
                    t.id,
                ),
            }),
        ],
    });
};
