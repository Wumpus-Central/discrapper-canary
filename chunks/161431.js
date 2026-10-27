l.d(t, { IP: () => d, Od: () => f, rU: () => c });
var n = l(582128),
    a = l(17928),
    r = l(73153),
    i = l(183011),
    s = l(989145);
let u = 221552 == l.j ? [] : null,
    o = new Set();
function d(e) {
    o.has(e) ||
        (o.add(e),
        (0, s.Y7)(e)
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
    return (0, a.bG)([i.A], () => i.A.getAttachments(e) ?? u, [e]);
}
function f(e, t) {
    let l = (0, a.bG)([i.A], () => i.A.getAttachment(t), [t]),
        s = null == l;
    return (
        n.useEffect(() => {
            !s ||
                null == e ||
                i.A.wasLookedUp(t) ||
                (r.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: t }), d(e));
        }, [s, e, t]),
        l
    );
}
