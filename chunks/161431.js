l.d(t, { IP: () => d, Od: () => f, rU: () => c });
var n = l(582128),
    a = l(17928),
    i = l(73153),
    r = l(183011),
    u = l(989145);
let s = 221552 == l.j ? [] : null,
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
    let l = (0, a.bG)([r.A], () => r.A.getAttachment(t), [t]),
        u = null == l;
    return (
        n.useEffect(() => {
            !u ||
                null == e ||
                r.A.wasLookedUp(t) ||
                (i.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: t }), d(e));
        }, [u, e, t]),
        l
    );
}
