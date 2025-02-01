n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
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
let _ = function (e) {
    let { channel: t } = e,
        n = (0, c.Q3)('ChannelPinsButton'),
        _ = (0, a.e7)(
            [d.Z, h.default],
            () => {
                let e = h.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !d.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        [C, x] = l.useState(!1),
        v = (0, a.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]),
        E = (0, o.Aq)(),
        I = l.useCallback(() => {
            _ || x((e) => !e);
        }, [_]);
    function b(e) {
        (null == e ? void 0 : e.shiftKey) || E.dispatch(f.CkL.POPOUT_CLOSE);
    }
    return (
        l.useEffect(
            () => (
                p.S.subscribe(f.CkL.TOGGLE_CHANNEL_PINS, I),
                () => {
                    p.S.unsubscribe(f.CkL.TOGGLE_CHANNEL_PINS, I);
                }
            ),
            [I]
        ),
        (0, i.jsx)(r.yRy, {
            shouldShow: C,
            animation: r.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            autoInvert: !1,
            ignoreModalClicks: !0,
            onRequestClose: () => x(!1),
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
                    onClick: I,
                    tooltip: l ? null : g.intl.string(g.t['mp1N//']),
                    icon: r.qQX,
                    iconSize: n ? 20 : void 0,
                    'aria-label': g.intl.string(g.t['mp1N//']),
                    disabled: _,
                    showBadge: v,
                    selected: l
                });
            }
        })
    );
};
