a.d(e, { N: () => n });
var r = a(370336),
    _ = a(263449);
function n(t, e = {}, a = (0, _.nZ)()) {
    let { message: o, name: i, email: E, url: c, source: s, associatedEventId: l, tags: I } = t,
        R = {
            contexts: {
                feedback: (0, r.Jr)({
                    contact_email: E,
                    name: i,
                    message: o,
                    url: c,
                    source: s,
                    associated_event_id: l,
                }),
            },
            type: "feedback",
            level: "info",
            tags: I,
        },
        u = (a && a.getClient()) || (0, _.s3)();
    return u && u.emit("beforeSendFeedback", R, e), a.captureEvent(R, e);
}
