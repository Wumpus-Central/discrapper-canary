n.d(t, { A: () => i });
var a = n(64700),
    l = n(311907),
    s = n(733391),
    r = n(832163);
function i(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([r.A], () => (null != t ? r.A.getStorefrontData(t) : void 0), [t]);
    return (
        a.useEffect(() => {
            null != t && n?.state !== "fetched" && n?.state !== "loading" && (0, s.Rw)(t, { eager: !1 });
        }, [t, n]),
        n
    );
}
