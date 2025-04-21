t.d(n, {
    M: () => r,
    t: () => d
});
var i = t(381499),
    a = t(675478),
    o = t(592125),
    c = t(626135),
    _ = t(981631);
function d(e, n, t, o) {
    n !== t &&
        ((0, a.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: t }) };
            },
            a.fy.INFREQUENT_USER_ACTION
        ),
        c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            location: o,
            soundpack: t
        }));
}
function r(e, n, t, d, r) {
    var l;
    t !== d &&
        ((0, a.BU)(
            e,
            n,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: d }) };
            },
            a.fy.INFREQUENT_USER_ACTION
        ),
        c.default.track(_.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            channel_id: n,
            channel_type: null == (l = o.Z.getChannel(n)) ? void 0 : l.type,
            location: r,
            soundpack: d
        }));
}
