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
    h = n(665149),
    f = n(703558),
    m = n(585483),
    g = n(909820),
    b = n(981631),
    y = n(921944),
    C = n(388032),
    _ = n(952899);
let v = function (e) {
    let { channel: t, guild: n, maxWidth: v } = e;
    i.useEffect(() => {
        (0, p.Q3)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: y.L.AUTO });
    }, []);
    let x = i.useCallback(() => {
            o.Z.updateChatOpen(t.id, !1), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        O = (0, r.jsx)(h.ZP.Icon, {
            icon: a.Dio,
            tooltip: C.intl.string(C.t.cpT0Cg),
            onClick: x,
        });
    return (0, r.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: v,
        floatingLayer: g.ZP,
        children: [
            (0, r.jsx)(s.Z, {
                channel: t,
                draftType: f.d.ChannelMessage,
            }),
            (0, r.jsxs)(h.ZP, {
                toolbar: O,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: [
                    (0, r.jsx)(h.ZP.ChannelIcon, {
                        icon: a.kBi,
                        "aria-label": C.intl.string(C.t.Kx5kCA),
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: t.name }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.chat,
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
