a.d(e, { N: () => n });
var r = a(370336),
    _ = a(263449);
function n(t, e = {}, a = (0, _.nZ)()) {
    let { message: o, name: i, email: c, url: E, source: s, associatedEventId: l, tags: I } = t,
        u = {
            contexts: {
                feedback: (0, r.Jr)({
                    contact_email: c,
                    name: i,
                    message: o,
                    url: E,
                    source: s,
                    associated_event_id: l
                })
            },
            type: 'feedback',
            level: 'info',
            tags: I
        },
        R = (a && a.getClient()) || (0, _.s3)();
    return R && R.emit('beforeSendFeedback', u, e), a.captureEvent(u, e);
}
