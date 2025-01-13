n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(540059),
    s = n(317632),
    c = n(602478),
    d = n(665149),
    u = n(388035),
    m = n(306680),
    h = n(594174),
    f = n(178088),
    p = n(222940),
    _ = n(490897),
    g = n(388032),
    E = n(122682);
function C(e) {
    let { onOpen: t, onClose: n, className: C } = e,
        I = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        x = (0, o.Q3)('RecentsButton'),
        N = r.useRef(null),
        v = (0, l.e7)([m.ZP], () => (null == I ? void 0 : I.id) != null && m.ZP.getMentionCount(I.id, _.W.NOTIFICATION_CENTER) > 0),
        { enabled: T } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        S = (0, l.e7)([s.Z], () => T && s.Z.getUnseenInviteCount() > 0);
    return (0, i.jsx)(f.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: v },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, r) =>
            (0, i.jsxs)('div', {
                ref: N,
                className: E.recentsIcon,
                children: [
                    T &&
                        (0, i.jsx)(p.Z, {
                            inboxIconRef: N,
                            recentsPopoutShown: t
                        }),
                    (0, i.jsx)(u.U, {
                        location: 'inbox-button',
                        children: (0, i.jsx)(d.JO, {
                            ...n,
                            className: C,
                            onClick: e,
                            icon: a.InboxIcon,
                            iconSize: x ? 16 : void 0,
                            'aria-label': g.intl.string(g.t.GSmTKC),
                            tooltip: t ? null : g.intl.string(g.t.GSmTKC),
                            selected: t,
                            showBadge: v || S || r
                        })
                    })
                ]
            })
    });
}
