t.d(e, {
    M: function () {
        return d;
    },
    t: function () {
        return o;
    }
});
var i = t(381499),
    r = t(675478),
    l = t(592125),
    u = t(626135),
    a = t(981631);
function o(n, e, t, l) {
    if (e !== t)
        (0, r.PS)(
            n,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: t }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: n,
                location: l,
                soundpack: t
            });
}
function d(n, e, t, o, d) {
    var s;
    if (t !== o)
        (0, r.BU)(
            n,
            e,
            (n) => {
                n.customNotificationSoundConfig = { notificationSoundPackId: i.Gm.create({ value: o }) };
            },
            r.fy.INFREQUENT_USER_ACTION
        ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
                guild_id: n,
                channel_id: e,
                channel_type: null === (s = l.Z.getChannel(e)) || void 0 === s ? void 0 : s.type,
                location: d,
                soundpack: o
            });
}
