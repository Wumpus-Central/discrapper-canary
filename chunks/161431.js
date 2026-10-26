n.d(t, { IP: () => d, Od: () => f, rU: () => c });
var l = n(582128),
    a = n(17928),
    i = n(73153),
    r = n(183011),
    u = n(989145);
let s = 221552 == n.j ? [] : null,
    o = new Set();
function d(e) {
    o.has(e) ||
        (o.add(e),
        (0, u.Y7)(e)
            .then((t) => {
                i.h.dispatch({
                    type: "CONJURE_STORED_ATTACHMENTS_FETCHED",
                    projectId: e,
                    attachments: [...t].reverse(),
                });
            })
            .catch((e) => {
                console.error("[conjure] stored attachment list failed", e);
            })
            .finally(() => o.delete(e)));
}
function c(e) {
    return (0, a.bG)([r.A], () => r.A.getAttachments(e) ?? s, [e]);
}
function f(e, t) {
    let n = (0, a.bG)([r.A], () => r.A.getAttachment(t), [t]),
        u = null == n;
    return (
        l.useEffect(() => {
            !u ||
                null == e ||
                r.A.wasLookedUp(t) ||
                (i.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: t }), d(e));
        }, [u, e, t]),
        n
    );
}
