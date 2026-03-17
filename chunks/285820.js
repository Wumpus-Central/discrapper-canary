n.d(t, { A: () => u }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(505779),
    r = n(60465),
    s = n(778591),
    o = n(145963),
    c = n(985018);
let d = new Set(["1402418703554842694", "356877880938070016"]),
    u = function (e) {
        let { detectedGame: t } = e,
            n = (function (e) {
                let t = (0, s.I)(e.applicationId),
                    { applicationId: n, websites: a } = e;
                return l.useMemo(() => {
                    let e = a.reduce((e, t) => ((e[t.category] = t), e), {}),
                        l = [];
                    return (
                        null != e[i.V.EPICGAMES] && d.has(n) && l.push(e[i.V.EPICGAMES]),
                        null != t && l.push({ category: i.V.STEAM, url: t }),
                        null != e[i.V.ROBLOX] && l.push(e[i.V.ROBLOX]),
                        null != e[i.V.BATTLENET] && l.push(e[i.V.BATTLENET]),
                        null != e[i.V.RIOT] && l.push(e[i.V.RIOT]),
                        null != e[i.V.MINECRAFT] && l.push(e[i.V.MINECRAFT]),
                        l
                    );
                }, [t, a, n]);
            })(t);
        return 0 === n.length
            ? null
            : 1 === n.length
              ? (0, a.jsx)(o.uC, { website: n[0] })
              : (0, a.jsx)(o.rZ, {
                    text: c.intl.string(c.t["/hMurx"]),
                    "aria-label": c.intl.string(c.t.nK60cc),
                    onClick: () => r.A.openGameProfileStoreLinksModal({ detectedGame: t, storeWebsites: n }),
                });
    };
