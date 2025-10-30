n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
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
    _ = n(921944),
    y = n(388032),
    C = n(229);
let v = function (e) {
    let { channel: t, guild: n, maxWidth: v } = e;
    i.useEffect(() => {
        (0, p.Q3)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: _.L.AUTO });
    }, []);
    let O = i.useCallback(() => {
            o.Z.updateChatOpen(t.id, !1), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        x = (0, r.jsx)(f.ZP.Icon, {
            icon: a.Dio,
            tooltip: y.intl.string(y.t.cpT0Cq),
            onClick: O,
        });
    return (0, r.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: v,
        floatingLayer: g.ZP,
        children: [
            (0, r.jsx)(s.Z, {
                channel: t,
                draftType: h.d.ChannelMessage,
            }),
            (0, r.jsxs)(f.ZP, {
                toolbar: x,
                "aria-label": y.intl.string(y.t.BIYAqa),
                children: [
                    (0, r.jsx)(f.ZP.ChannelIcon, {
                        icon: a.kBi,
                        "aria-label": y.intl.string(y.t.Kx5kCN),
                    }),
                    (0, r.jsx)(f.ZP.Title, { children: t.name }),
                ],
            }),
            (0, r.jsx)("div", {
                className: C.chat,
                children: (0, r.jsx)(
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
