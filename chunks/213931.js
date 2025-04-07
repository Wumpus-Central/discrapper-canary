n.d(t, {
    M: () => c,
    t: () => o
});
var i = n(381499),
    r = n(675478),
    s = n(592125),
    l = n(626135),
    a = n(981631);
function o(e, t, n, s) {
    t !== n &&
        ((0, r.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: n }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
        l.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            location: s,
            soundpack: n
        }));
}
function c(e, t, n, o, c) {
    var u;
    n !== o &&
        ((0, r.BU)(
            e,
            t,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: o }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
        l.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            channel_id: t,
            channel_type: null == (u = s.Z.getChannel(t)) ? void 0 : u.type,
            location: c,
            soundpack: o
        }));
}
