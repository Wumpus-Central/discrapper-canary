n.d(t, { V: () => u });
var r = n(473749),
    i = n(442837),
    l = n(481060),
    o = n(695346),
    a = n(885110),
    s = n(626135),
    c = n(981631);
function u() {
    let e = o.G6.useSetting(),
        t = (0, i.e7)([a.Z], () => a.Z.getStatus());
    (0, r.useEffect)(() => {
        s.default.track(c.rMx.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === l.Skl.INVISIBLE,
        });
    }, [e, t]);
}
