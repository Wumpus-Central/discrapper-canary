n.d(t, { z: () => u });
var r = n(64700),
    l = n(311907),
    i = n(397927),
    a = n(253932),
    s = n(461213),
    o = n(954571),
    c = n(652215);
function u() {
    let e = a.tz.useSetting(),
        t = (0, l.bG)([s.A], () => s.A.getStatus());
    (0, r.useEffect)(() => {
        o.default.track(c.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
            show_current_game: e,
            status: t,
            rtc_popout_available: !e || t === i.clD.INVISIBLE,
        });
    }, [e, t]);
}
