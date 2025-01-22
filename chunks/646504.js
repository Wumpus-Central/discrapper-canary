r.d(n, {
    O: function () {
        return u;
    },
    w: function () {
        return l;
    }
});
var i,
    a,
    o = r(367907),
    s = r(981631);
function l() {
    o.ZP.trackWithMetadata(s.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !1
    });
}
function u() {
    o.ZP.trackWithMetadata(s.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !0
    });
}
!(function (e) {
    e.REMINDER_NOTIFICATION = 'Reminder Notification';
})(i || (i = {})),
    !(function (e) {
        e.GUILD_INVITE = 'Guild Invite';
    })(a || (a = {}));
