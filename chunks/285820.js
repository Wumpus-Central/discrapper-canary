"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(505779),
    r = n(60465),
    s = n(778591),
    c = n(145963),
    o = n(985018);
let d = new Set(["1402418703554842694", "356877880938070016"]),
    u = function (e) {
        let { detectedGame: t } = e,
            n = (function (e) {
                let t = (0, s.I)(e.applicationId),
                    { applicationId: n, websites: i } = e;
                return l.useMemo(() => {
                    let e = i.reduce((e, t) => ((e[t.category] = t), e), {}),
                        l = [];
                    return (
                        null != e[a.V.EPICGAMES] && d.has(n) && l.push(e[a.V.EPICGAMES]),
                        null != t && l.push({ category: a.V.STEAM, url: t }),
                        null != e[a.V.ROBLOX] && l.push(e[a.V.ROBLOX]),
                        null != e[a.V.BATTLENET] && l.push(e[a.V.BATTLENET]),
                        null != e[a.V.RIOT] && l.push(e[a.V.RIOT]),
                        null != e[a.V.MINECRAFT] && l.push(e[a.V.MINECRAFT]),
                        l
                    );
                }, [t, i, n]);
            })(t);
        return 0 === n.length
            ? null
            : 1 === n.length
              ? (0, i.jsx)(c.uC, { website: n[0] })
              : (0, i.jsx)(c.rZ, {
                    text: o.intl.string(o.t["/hMurx"]),
                    "aria-label": o.intl.string(o.t.nK60cc),
                    onClick: () => r.A.openGameProfileStoreLinksModal({ detectedGame: t, storeWebsites: n }),
                });
    };
