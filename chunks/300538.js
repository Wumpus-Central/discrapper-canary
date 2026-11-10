var l = n(582128),
    i = n(899847),
    r = n(153739);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, r.Vt)(e),
                s = l.useEffectEvent(t);
            return (
                l.useEffect(() => {
                    if (null == e || n) return;
                    let t = i.Ay.onTeenSettingsLoadFailure(e, s);
                    return (i.Ay.fetchTeenSettingsAndConsents(e), t);
                }, [e, n]),
                n
            );
        },
    },
);
