l.d(t, { A: () => s });
var n = l(64700),
    a = l(17928),
    i = l(733391),
    r = l(832163);
function s(e) {
    let { guildId: t } = e,
        l = (0, a.bG)([r.A], () => (null != t ? r.A.getStorefrontData(t) : void 0), [t]);
    return (
        n.useEffect(() => {
            null != t && (0, i.Rw)(t, { eager: !1 });
        }, [t]),
        l
    );
}
