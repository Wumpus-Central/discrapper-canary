var l = n(136722),
    i = n(855986),
    r = n(406704),
    s = n(696451),
    a = n(576705),
    o = n(287809),
    u = n(652215);
n.d(
    t,
    {},
    {
        f: function (e) {
            let t = e.getGuildId(),
                n = (0, i.bG)([s.Ay, o.default], () => {
                    let e = o.default.getCurrentUser();
                    return (null != t && null != e ? s.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
                }),
                { messagesDisabled: c } = (0, i.cf)(
                    [a.A],
                    () => {
                        let t = e.isPrivate(),
                            i = a.A.computePermissions(e),
                            s = l.zy(i, u.xBc.SEND_MESSAGES),
                            o = (0, r.UJ)(e);
                        return { messagesDisabled: n || (!t && !s) || o };
                    },
                    [e, n],
                );
            return !c;
        },
    },
);
