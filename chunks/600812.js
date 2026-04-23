t.d(n, { A: () => s }), t(321073);
var l = t(64700),
    r = t(771781),
    i = t(933297);
function s(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === i.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = l.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: l } = e;
                        t === i.Xi.NEW && n.push(l);
                    }),
                    n
                );
            }, [e]);
            if ((0, r.uW)(n)) return "new";
        })(t),
    });
}
