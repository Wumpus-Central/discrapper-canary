var n = l(582128),
    a = l(855986),
    r = l(778858),
    i = l(696451),
    s = l(317525),
    o = l(287809),
    u = l(403362),
    d = l(695184),
    c = l(427262);
l.d(
    t,
    {},
    {
        B5: function (e) {
            return (0, a.yK)(
                [i.Ay, o.default],
                () =>
                    null != e
                        ? i.Ay.getMemberIds(e)
                              .map((e) => o.default.getUser(e))
                              .filter(u.Vq)
                        : [],
                [e],
            );
        },
        S6: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            n.useEffect(() => {
                null != e && d.A.requestMembers(e, "", 25);
            }, [e]);
            let l = t.join(",");
            return (
                n.useEffect(() => {
                    if (null == e || "" === l) return;
                    let t = l.split(",").filter((t) => !i.Ay.isMember(e, t));
                    t.length > 0 && r.A.requestMembersById(e, t);
                }, [e, l]),
                n.useCallback(
                    (t) => {
                        let l = t.trim();
                        null != e && "" !== l && d.A.requestMembers(e, l, 25);
                    },
                    [e],
                )
            );
        },
        hY: function (e, t) {
            return (0, c.QV)(e, { identifiable: t ? "never" : "always" });
        },
        qm: function (e) {
            return (0, a.yK)([s.A], () => (null != e ? s.A.getSortedRoles(e) : []), [e]);
        },
    },
);
