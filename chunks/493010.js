n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    o = n(704215),
    a = n(481060),
    s = n(475179),
    l = n(561472),
    c = n(287746),
    u = n(325708),
    d = n(541716),
    f = n(266454),
    _ = n(665149),
    p = n(703558),
    h = n(585483),
    m = n(909820),
    g = n(981631),
    E = n(921944),
    b = n(388032),
    y = n(13590);
let O = function (e) {
    let { channel: t, guild: n, maxWidth: O } = e;
    i.useEffect(() => {
        (0, f.Q3)(o.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: E.L.AUTO });
    }, []);
    let v = i.useCallback(() => {
            s.Z.updateChatOpen(t.id, !1), h.S.safeDispatch(g.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        I = (0, r.jsx)(_.ZP.Icon, {
            icon: a.Dio,
            tooltip: b.intl.string(b.t.cpT0Cg),
            onClick: v,
        });
    return (0, r.jsxs)(u.Z, {
        sidebarType: u.y.CallChatSidebar,
        maxWidth: O,
        floatingLayer: m.ZP,
        children: [
            (0, r.jsx)(l.Z, {
                channel: t,
                draftType: p.d.ChannelMessage,
            }),
            (0, r.jsxs)(_.ZP, {
                toolbar: I,
                "aria-label": b.intl.string(b.t.BIYAqa),
                children: [
                    (0, r.jsx)(_.ZP.ChannelIcon, {
                        icon: a.kBi,
                        "aria-label": b.intl.string(b.t.Kx5kCA),
                    }),
                    (0, r.jsx)(_.ZP.Title, { children: t.name }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.chat,
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
