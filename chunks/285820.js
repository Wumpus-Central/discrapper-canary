i.d(t, { A: () => u }), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(505779),
    s = i(60465),
    r = i(778591),
    c = i(145963),
    o = i(985018);
let d = new Set(["1402418703554842694", "356877880938070016"]),
    u = function (e) {
        let { detectedGame: t } = e,
            i = (function (e) {
                let t = (0, r.I)(e.applicationId),
                    { applicationId: i, websites: n } = e;
                return l.useMemo(() => {
                    let e = n.reduce((e, t) => ((e[t.category] = t), e), {}),
                        l = [];
                    return (
                        null != e[a.V.EPICGAMES] && d.has(i) && l.push(e[a.V.EPICGAMES]),
                        null != t && l.push({ category: a.V.STEAM, url: t }),
                        null != e[a.V.ROBLOX] && l.push(e[a.V.ROBLOX]),
                        null != e[a.V.BATTLENET] && l.push(e[a.V.BATTLENET]),
                        null != e[a.V.RIOT] && l.push(e[a.V.RIOT]),
                        null != e[a.V.MINECRAFT] && l.push(e[a.V.MINECRAFT]),
                        l
                    );
                }, [t, n, i]);
            })(t);
        return 0 === i.length
            ? null
            : 1 === i.length
              ? (0, n.jsx)(c.uC, { website: i[0] })
              : (0, n.jsx)(c.rZ, {
                    text: o.intl.string(o.t["/hMurx"]),
                    "aria-label": o.intl.string(o.t.nK60cc),
                    onClick: () => s.A.openGameProfileStoreLinksModal({ detectedGame: t, storeWebsites: i }),
                });
    };
