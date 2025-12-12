n.d(t, { Z: () => O });
var i = n(54381),
    r = n(473749),
    l = n(704215),
    a = n(481060),
    o = n(475179),
    s = n(561472),
    c = n(287746),
    u = n(325708),
    d = n(541716),
    p = n(266454),
    f = n(665149),
    h = n(703558),
    m = n(585483),
    g = n(909820),
    b = n(981631),
    C = n(921944),
    y = n(388032),
    v = n(19055);
let O = function (e) {
    let { channel: t, guild: n, maxWidth: O } = e;
    r.useEffect(() => {
        (0, p.Q3)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: C.L.AUTO });
    }, []);
    let x = r.useCallback(() => {
            o.Z.updateChatOpen(t.id, !1), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        E = (0, i.jsx)(f.ZP.Icon, {
            icon: a.Dio,
            tooltip: y.intl.string(y.t.cpT0Cq),
            onClick: x,
        });
    return (0, i.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: O,
        floatingLayer: g.ZP,
        children: [
            (0, i.jsx)(s.Z, {
                channel: t,
                draftType: h.d.ChannelMessage,
            }),
            (0, i.jsxs)(f.ZP, {
                toolbar: E,
                "aria-label": y.intl.string(y.t.BIYAqa),
                children: [
                    (0, i.jsx)(f.ZP.ChannelIcon, {
                        icon: a.kBi,
                        "aria-label": y.intl.string(y.t.Kx5kCN),
                    }),
                    (0, i.jsx)(f.ZP.Title, { children: t.name }),
                ],
            }),
            (0, i.jsx)("div", {
                className: v.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: t,
                        guild: n,
                        chatInputType: d.Ie.SIDEBAR,
                    },
                    t.id,
                ),
            }),
        ],
    });
};
