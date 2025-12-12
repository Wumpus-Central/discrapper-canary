n.d(t, { Z: () => _ });
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
    h = n(665149),
    f = n(703558),
    m = n(585483),
    g = n(909820),
    b = n(981631),
    C = n(921944),
    y = n(388032),
    v = n(952899);
let _ = function (e) {
    let { channel: t, guild: n, maxWidth: _ } = e;
    r.useEffect(() => {
        (0, p.Q3)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: C.L.AUTO });
    }, []);
    let O = r.useCallback(() => {
            o.Z.updateChatOpen(t.id, !1), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        x = (0, i.jsx)(h.ZP.Icon, {
            icon: a.Dio,
            tooltip: y.intl.string(y.t.cpT0Cq),
            onClick: O,
        });
    return (0, i.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: _,
        floatingLayer: g.ZP,
        children: [
            (0, i.jsx)(s.Z, {
                channel: t,
                draftType: f.d.ChannelMessage,
            }),
            (0, i.jsxs)(h.ZP, {
                toolbar: x,
                "aria-label": y.intl.string(y.t.BIYAqa),
                children: [
                    (0, i.jsx)(h.ZP.ChannelIcon, {
                        icon: a.kBi,
                        "aria-label": y.intl.string(y.t.Kx5kCN),
                    }),
                    (0, i.jsx)(h.ZP.Title, { children: t.name }),
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
