var i = n(582128),
    l = n(855986),
    s = n(287809),
    a = n(792996);
n.d(
    t,
    {},
    {
        N: function (e) {
            let t = e.linkedLobby?.linked_at,
                n = (0, l.bG)([s.default], () => s.default.getUser(e.linkedLobby?.linked_by));
            return i.useMemo(() => {
                if (null == t) return;
                let e = new Date(t);
                return null != n
                    ? a.intl.format(a.t["xPrJ+q"], { username: n.username, linkedAtDate: e })
                    : a.intl.formatToPlainString(a.t.EyygeM, { linkedAtDate: e });
            }, [t, n]);
        },
    },
);
