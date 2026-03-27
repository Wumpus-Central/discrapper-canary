n.d(t, { A: () => r });
var a = n(64700),
    l = n(311907),
    s = n(733391),
    i = n(832163);
function r(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([i.A], () => (null != t ? i.A.getStorefrontData(t) : void 0), [t]);
    return (
        a.useEffect(() => {
            null != t && (0, s.Rw)(t, { eager: !1 });
        }, [t]),
        n
    );
}
