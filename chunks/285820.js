i.d(t, { A: () => u }), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(792216),
    s = i(505779),
    r = i(60465),
    o = i(145963),
    c = i(985018);
let d = new Set(["1402418703554842694", "356877880938070016"]),
    u = function (e) {
        let { detectedGame: t } = e,
            i = (function (e) {
                let { applicationId: t, steamReleaseStatus: i, websites: n } = e;
                return l.useMemo(() => {
                    let e = n.reduce((e, t) => ((e[t.category] = t), e), {}),
                        l = [];
                    return (
                        null != e[s.V.EPICGAMES] && d.has(t) && l.push(e[s.V.EPICGAMES]),
                        null != e[s.V.STEAM] && i !== a.Y.RETIRED_ABANDONED && l.push(e[s.V.STEAM]),
                        null != e[s.V.ROBLOX] && l.push(e[s.V.ROBLOX]),
                        null != e[s.V.BATTLENET] && l.push(e[s.V.BATTLENET]),
                        null != e[s.V.RIOT] && l.push(e[s.V.RIOT]),
                        null != e[s.V.MINECRAFT] && l.push(e[s.V.MINECRAFT]),
                        l
                    );
                }, [t, n, i]);
            })(t);
        return 0 === i.length
            ? null
            : 1 === i.length
              ? (0, n.jsx)(o.uC, { website: i[0] })
              : (0, n.jsx)(o.rZ, {
                    text: c.intl.string(c.t["/hMurx"]),
                    "aria-label": c.intl.string(c.t.nK60cc),
                    onClick: () => r.A.openGameProfileStoreLinksModal({ detectedGame: t, storeWebsites: i }),
                });
    };
