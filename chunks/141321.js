n.d(t, { Z: () => E });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(540059),
    o = n(317632),
    c = n(602478),
    d = n(665149),
    u = n(388035),
    m = n(306680),
    h = n(594174),
    _ = n(178088),
    p = n(222940),
    g = n(490897),
    f = n(388032),
    x = n(122682);
function E(e) {
    let { onOpen: t, onClose: n, className: E } = e,
        C = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        v = (0, s.Q3)('RecentsButton'),
        I = l.useRef(null),
        N = (0, a.e7)([m.ZP], () => (null == C ? void 0 : C.id) != null && m.ZP.getMentionCount(C.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: S } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        T = (0, a.e7)([o.Z], () => S && o.Z.getUnseenInviteCount() > 0),
        b = (0, r.dQu)(r.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, i.jsx)(_.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: N },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, l) =>
            (0, i.jsxs)('div', {
                ref: I,
                className: x.recentsIcon,
                children: [
                    S &&
                        (0, i.jsx)(p.Z, {
                            inboxIconRef: I,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(u.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(d.JO, {
                            ...n,
                            className: E,
                            onClick: e,
                            icon: r.xx7,
                            iconSize: v ? b : void 0,
                            'aria-label': f.intl.string(f.t.GSmTKC),
                            tooltip: t ? null : f.intl.string(f.t.GSmTKC),
                            selected: t,
                            showBadge: N || T || l
                        })
                    })
                ]
            })
    });
}
