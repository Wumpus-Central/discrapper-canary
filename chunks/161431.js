n.d(t, { IP: () => c, Od: () => m, rU: () => d });
var l = n(582128),
    r = n(17928),
    a = n(73153),
    i = n(183011),
    s = n(989145);
let o = [],
    u = new Set();
function c(e) {
    u.has(e) ||
        (u.add(e),
        (0, s.Y7)(e)
            .then((t) => {
                a.h.dispatch({
                    type: "CONJURE_STORED_ATTACHMENTS_FETCHED",
                    projectId: e,
                    attachments: [...t].reverse(),
                });
            })
            .catch((e) => {
                console.error("[conjure] stored attachment list failed", e);
            })
            .finally(() => u.delete(e)));
}
function d(e) {
    return (0, r.bG)([i.A], () => i.A.getAttachments(e) ?? o, [e]);
}
function m(e, t) {
    let n = (0, r.bG)([i.A], () => i.A.getAttachment(t), [t]),
        s = null == n;
    return (
        l.useEffect(() => {
            !s ||
                null == e ||
                i.A.wasLookedUp(t) ||
                (a.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: t }), c(e));
        }, [s, e, t]),
        n
    );
}
