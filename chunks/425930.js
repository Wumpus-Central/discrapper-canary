_.d(e, { N: () => n });
var a = _(370336),
    r = _(263449);
function n(t, e = {}, _ = (0, r.nZ)()) {
    let { message: o, name: E, email: i, url: c, source: s, associatedEventId: l, tags: I } = t,
        R = {
            contexts: {
                feedback: (0, a.Jr)({
                    contact_email: i,
                    name: E,
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
        N = (_ && _.getClient()) || (0, r.s3)();
    return N && N.emit("beforeSendFeedback", R, e), _.captureEvent(R, e);
}
