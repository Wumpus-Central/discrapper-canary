e.d(t, {
    M: () => u,
    t: () => d
});
var i = e(381499),
    l = e(675478),
    r = e(592125),
    a = e(626135),
    s = e(981631);
function d(n, t, e, r) {
    t !== e &&
        ((0, l.PS)(
            n,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: e }) };
            },
            l.fy.INFREQUENT_USER_ACTION
        ),
        a.default.track(s.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: n,
            location: r,
            soundpack: e
        }));
}
function u(n, t, e, d, u) {
    var o;
    e !== d &&
        ((0, l.BU)(
            n,
            t,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: d }) };
            },
            l.fy.INFREQUENT_USER_ACTION
        ),
        a.default.track(s.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: n,
            channel_id: t,
            channel_type: null === (o = r.Z.getChannel(t)) || void 0 === o ? void 0 : o.type,
            location: u,
            soundpack: d
        }));
}
