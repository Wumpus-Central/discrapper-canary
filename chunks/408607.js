var i = l(582128),
    a = l(855986),
    s = l(778858),
    t = l(287809);
l.d(
    n,
    {},
    {
        A: function (e) {
            let n = (0, a.bG)([t.default], () => t.default.getUser(e?.creator_id), [e]);
            return (
                i.useEffect(() => {
                    null == n && e?.creator_id != null && s.A.requestMembersById(e.guild_id, e.creator_id);
                }, [e, n]),
                n
            );
        },
    },
);
