n.d(t, { Z: () => C });
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
    _ = n(594174),
    h = n(178088),
    p = n(222940),
    g = n(490897),
    f = n(388032),
    x = n(846785);
function C(e) {
    let { onOpen: t, onClose: n, className: C } = e,
        v = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        E = (0, s.Q3)('RecentsButton'),
        I = l.useRef(null),
        N = (0, a.e7)([m.ZP], () => (null == v ? void 0 : v.id) != null && m.ZP.getMentionCount(v.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: S } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        T = (0, a.e7)([o.Z], () => S && o.Z.getUnseenInviteCount() > 0),
        b = (0, r.dQu)(r.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, i.jsx)(h.k, {
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
                            className: C,
                            onClick: e,
                            icon: r.xx7,
                            iconSize: E ? b : void 0,
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
