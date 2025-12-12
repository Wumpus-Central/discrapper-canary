n.d(t, { N: () => a });
var r = n(886649),
    i = n(509440);
function a(e, t = {}, n = (0, i.nZ)()) {
    let { message: o, name: _, email: s, url: c, source: E, associatedEventId: l, tags: u } = e,
        d = {
            contexts: {
                feedback: (0, r.Jr)({
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
        p = (n && n.getClient()) || (0, i.s3)();
    return p && p.emit("beforeSendFeedback", d, t), n.captureEvent(d, t);
}
