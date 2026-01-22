n.d(t, {
    f: () => u,
});
var r = n(136722),
    i = n(311907),
    a = n(406704),
    s = n(696451),
    o = n(576705),
    l = n(287809),
    c = n(652215);

function u(e) {
    let t = e.getGuildId(),
        n = (0, i.bG)([s.Ay, l.default], () => {
            var e, n;
            let r = l.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != t && null != r
                            ? null == (n = s.Ay.getMember(t, r.id))
                                ? void 0
                                : n.isPending
                            : null) && e
            );
        }),
        { messagesDisabled: u } = (0, i.cf)([o.A], () => {
            let t = e.isPrivate(),
                i = o.A.computePermissions(e),
                s = r.zy(i, c.xBc.SEND_MESSAGES),
                l = (0, a.UJ)(e);
            return {
                messagesDisabled: n || (!t && !s) || l,
            };
        }, [e, n]);
    return !u;
}
