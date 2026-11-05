var i = n(582128),
    r = n(733391),
    a = n(376680);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationId: t, guildId: n } = e,
                s = (0, a.A)({ applicationId: t, guildId: n });
            return (
                i.useEffect(() => {
                    null != t ? (0, r.ap)(t, { eager: !1 }) : null != n && (0, r.Rw)(n, { eager: !1 });
                }, [t, n]),
                s
            );
        },
    },
);
