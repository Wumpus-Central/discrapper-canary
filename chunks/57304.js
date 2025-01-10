n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(23536),
    o = n(40851),
    c = n(540059),
    d = n(731290),
    u = n(306680),
    h = n(594174),
    p = n(585483),
    m = n(665149),
    f = n(981631),
    g = n(388032);
t.Z = function (e) {
    let { channel: t } = e,
        n = (0, c.Q3)('ChannelPinsButton'),
        C = (0, r.e7)(
            [d.Z, h.default],
            () => {
                let e = h.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !d.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [x, v] = l.useState(!1),
        _ = (0, r.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]),
        I = (0, o.Aq)(),
        E = l.useCallback(() => {
            !C && v((e) => !e);
        }, [C]);
    function b(e) {
        !(null == e ? void 0 : e.shiftKey) && I.dispatch(f.CkL.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                p.S.subscribe(f.CkL.TOGGLE_CHANNEL_PINS, E),
                () => {
                    p.S.unsubscribe(f.CkL.TOGGLE_CHANNEL_PINS, E);
                }
            ),
            [E]
        ),
        (0, i.jsx)(a.Popout, {
            shouldShow: x,
            animation: a.Popout.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => v(!1),
            renderPopout: function (e) {
                return (0, i.jsx)(s.Z, {
                    ...e,
                    onJump: b,
                    channel: t
                });
            },
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: l } = t;
                return (0, i.jsx)(m.JO, {
                    ...e,
                    onClick: E,
                    tooltip: l ? null : g.intl.string(g.t['mp1N//']),
                    icon: a.PinIcon,
                    iconSize: n ? 20 : void 0,
                    'aria-label': g.intl.string(g.t['mp1N//']),
                    disabled: C,
                    showBadge: _,
                    selected: l
                });
            }
        })
    );
};
