t.d(n, {
    M: () => d,
    t: () => r,
});
var i = t(381499),
    o = t(675478),
    a = t(592125),
    _ = t(626135),
    c = t(981631);
function r(e, n, t, a) {
    n !== t &&
        ((0, o.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: t }) };
            },
            o.fy.INFREQUENT_USER_ACTION,
        ),
        _.default.track(c.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            location: a,
            soundpack: t,
        }));
}
function d(e, n, t, r, d) {
    var l;
    t !== r &&
        ((0, o.BU)(
            e,
            n,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: r }) };
            },
            o.fy.INFREQUENT_USER_ACTION,
        ),
        _.default.track(c.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            channel_id: n,
            channel_type: null == (l = a.Z.getChannel(n)) ? void 0 : l.type,
            location: d,
            soundpack: r,
        }));
}
