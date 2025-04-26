n.d(t, {
    M: () => c,
    t: () => a
});
var i = n(381499),
    r = n(675478),
    l = n(592125),
    s = n(626135),
    o = n(981631);
function a(e, t, n, l) {
    t !== n &&
        ((0, r.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: n }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
        s.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            location: l,
            soundpack: n
        }));
}
function c(e, t, n, a, c) {
    var u;
    n !== a &&
        ((0, r.BU)(
            e,
            t,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: a }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
        s.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            channel_id: t,
            channel_type: null == (u = l.Z.getChannel(t)) ? void 0 : u.type,
            location: c,
            soundpack: a
        }));
}
