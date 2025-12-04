r.d(t, { N: () => i });
var n = r(886649),
    a = r(509440);
function i(e, t = {}, r = (0, a.nZ)()) {
    let { message: o, name: _, email: s, url: c, source: E, associatedEventId: l, tags: u } = e,
        d = {
            contexts: {
                feedback: (0, n.Jr)({
                    contact_email: s,
                    name: _,
                    message: o,
                    url: c,
                    source: E,
                    associated_event_id: l,
                }),
            },
            type: "feedback",
            level: "info",
            tags: u,
        },
        I = (r && r.getClient()) || (0, a.s3)();
    return I && I.emit("beforeSendFeedback", d, t), r.captureEvent(d, t);
}
