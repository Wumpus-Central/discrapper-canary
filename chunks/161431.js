n.d(t, { IP: () => d, Od: () => f, rU: () => c });
var l = n(582128),
    i = n(17928),
    r = n(73153),
    a = n(183011),
    u = n(989145);
let s = 221552 == n.j ? [] : null,
    o = new Set();
function d(e) {
    o.has(e) ||
        (o.add(e),
        (0, u.Y7)(e)
            .then((t) => {
                r.h.dispatch({
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
    return (0, i.bG)([a.A], () => a.A.getAttachments(e) ?? s, [e]);
}
function f(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getAttachment(t), [t]),
        u = null == n;
    return (
        l.useEffect(() => {
            !u ||
                null == e ||
                a.A.wasLookedUp(t) ||
                (r.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: t }), d(e));
        }, [u, e, t]),
        n
    );
}
