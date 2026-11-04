var i = l(582128),
    s = l(855986),
    a = l(778858),
    t = l(287809);
l.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, s.bG)([t.default], () => t.default.getUser(e?.creator_id), [e]);
            return (
                i.useEffect(() => {
                    null == n && e?.creator_id != null && a.A.requestMembersById(e.guild_id, e.creator_id);
                }, [e, n]),
                n
            );
        },
    },
);
