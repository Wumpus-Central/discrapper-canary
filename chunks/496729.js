n.d(e, {
    Z: () => c,
    s: () => d
});
var i = n(200651),
    a = n(704215),
    l = n(481060),
    r = n(570140),
    u = n(605236),
    o = n(592125),
    s = n(305587);
function d(t) {
    let { channelId: e, location: n } = t,
        i = o.Z.getChannel(e),
        l = (0, u.un)(a.z.USER_DM_MUTE_FEEDBACK);
    null != i &&
        i.isDM() &&
        !l &&
        (0, s.Xs)(n) &&
        r.Z.dispatch({
            type: 'USER_DM_MUTE_SHOW_FEEDBACK',
            channel: i
        });
}
function c() {
    (0, l.ZDy)(async () => {
        let { default: t } = await n.e('87995').then(n.bind(n, 180970));
        return (e) => (0, i.jsx)(t, { ...e });
    });
}
