l.d(t, { A: () => o });
var e = l(582128),
    r = l(733391),
    u = l(376680);
function o(n) {
    let { applicationId: t, guildId: l } = n,
        o = (0, u.A)({ applicationId: t, guildId: l });
    return (
        e.useEffect(() => {
            null != t ? (0, r.ap)(t, { eager: !1 }) : null != l && (0, r.Rw)(l, { eager: !1 });
        }, [t, l]),
        o
    );
}
