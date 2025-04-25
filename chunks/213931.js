n.d(t, {
    M: () => u,
    t: () => c
});
var r = n(381499),
    i = n(675478),
    l = n(592125),
    a = n(626135),
    o = n(981631);
function c(e, t, n, l) {
    t !== n &&
        ((0, i.PS)(
            e,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: r.Gm.create({ value: n }) };
            },
            i.fy.INFREQUENT_USER_ACTION
        ),
        a.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            location: l,
            soundpack: n
        }));
}
function u(e, t, n, c, u) {
    var s;
    n !== c &&
        ((0, i.BU)(
            e,
            t,
            (e) => {
                e.customNotificationSoundConfig = { notificationSoundPackId: r.Gm.create({ value: c }) };
            },
            i.fy.INFREQUENT_USER_ACTION
        ),
        a.default.track(o.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
            guild_id: e,
            channel_id: t,
            channel_type: null == (s = l.Z.getChannel(t)) ? void 0 : s.type,
            location: u,
            soundpack: c
        }));
}
