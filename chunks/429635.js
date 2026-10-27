l.d(e, { A: () => o });
var n = l(582128),
    r = l(733391),
    u = l(376680);
function o(t) {
    let { applicationId: e, guildId: l } = t,
        o = (0, u.A)({ applicationId: e, guildId: l });
    return (
        n.useEffect(() => {
            null != e ? (0, r.ap)(e, { eager: !1 }) : null != l && (0, r.Rw)(l, { eager: !1 });
        }, [e, l]),
        o
    );
}
