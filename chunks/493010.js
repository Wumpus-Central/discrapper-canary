n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    a = n(704215),
    r = n(481060),
    s = n(475179),
    o = n(561472),
    c = n(287746),
    d = n(325708),
    u = n(541716),
    h = n(605236),
    p = n(665149),
    m = n(703558),
    f = n(585483),
    g = n(909820),
    _ = n(981631),
    C = n(921944),
    x = n(388032),
    v = n(31224);
let E = function (e) {
    let { channel: t, guild: n, maxWidth: E } = e;
    l.useEffect(() => {
        (0, h.EW)(a.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, { dismissAction: C.L.AUTO });
    }, []);
    let I = l.useCallback(() => {
            s.Z.updateChatOpen(t.id, !1), f.S.safeDispatch(_.CkL.FOCUS_CHAT_BUTTON);
        }, [t.id]),
        b = (0, i.jsx)(p.ZP.Icon, {
            icon: r.Dio,
            tooltip: x.intl.string(x.t.cpT0Cg),
            onClick: I
        });
    return (0, i.jsxs)(d.Z, {
        sidebarType: d.y.CallChatSidebar,
        maxWidth: E,
        floatingLayer: g.ZP,
        children: [
            (0, i.jsx)(o.Z, {
                channel: t,
                draftType: m.d.ChannelMessage
            }),
            (0, i.jsxs)(p.ZP, {
                toolbar: b,
                'aria-label': x.intl.string(x.t.BIYAqa),
                children: [
                    (0, i.jsx)(p.ZP.Icon, {
                        icon: r.kBi,
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.Kx5kCA)
                    }),
                    (0, i.jsx)(p.ZP.Title, { children: t.name })
                ]
            }),
            (0, i.jsx)('div', {
                className: v.chat,
                children: (0, i.jsx)(
                    c.Z,
                    {
                        channel: t,
                        guild: n,
                        chatInputType: u.Ie.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
};
