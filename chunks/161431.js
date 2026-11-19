var n = l(582128),
    a = l(855986),
    r = l(73153),
    i = l(183011),
    s = l(989145);
let o = 221552 == l.j ? [] : null,
    u = new Set();
function d(e) {
    u.has(e) ||
        (u.add(e),
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
            .finally(() => u.delete(e)));
}
l.d(
    t,
    {},
    {
        IP: d,
        Od: function (e, t) {
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
        },
        rU: function (e) {
            return (0, a.bG)([i.A], () => i.A.getAttachments(e) ?? o, [e]);
        },
    },
);
