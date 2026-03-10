n.d(t, { A: () => a }), n(321073);
var i = n(64700),
    s = n(771781),
    l = n(933297);
function a(e) {
    let { persistentBadge: t, dismissibleBadges: n } = e;
    return (function (e) {
        let { persistentBadgeType: t, dismissibleBadgeType: n } = e;
        return "beta" === t ? "beta" : (n ?? t);
    })({
        persistentBadgeType: t?.badgeType === l.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let t = i.useMemo(() => {
                let t = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: n, dismissibleContent: i } = e;
                        n === l.Xi.NEW && t.push(i);
                    }),
                    t
                );
            }, [e]);
            if ((0, s.uW)(t)) return "new";
        })(n),
    });
}
