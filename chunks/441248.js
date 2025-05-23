n.d(t, { k: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(40614),
    a = n(736409),
    c = n(925329),
    u = n(810568),
    d = n(168524),
    h = n(115530),
    p = n(388032),
    f = n(270861);
function g(e) {
    let { name: t, applicationId: n } = e,
        i = (0, d.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: u.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, r.jsx)(o.P3F, {
        onClick: i,
        className: l()(null != i && f.clickableGameName),
        children: (0, r.jsx)(h.Z, {
            className: f.gameName,
            children: t
        })
    });
}
function m(e) {
    let { isStreaming: t, application: n, game: i, onClickNotSharing: l, isForceShowSharingPopout: u, setIsForceShowSharingPopout: d } = e,
        h = null != n ? n.name : null != i ? i.name : p.intl.string(p.t['UQMV/P']);
    return (0, r.jsxs)('div', {
        className: f.gameWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: f.gameIconWrapper,
                children: [
                    (0, r.jsx)(c.Z, {
                        className: f.gameIcon,
                        game: n,
                        pid: null == i ? void 0 : i.pid
                    }),
                    t
                        ? (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.liveBadge
                          })
                        : null
                ]
            }),
            (0, r.jsx)(a.j, {
                isForceShowSharingPopout: u,
                setIsForceShowSharingPopout: d,
                children: (0, r.jsxs)('div', {
                    className: f.info,
                    children: [
                        null != h
                            ? (0, r.jsx)(g, {
                                  name: h,
                                  applicationId: null == n ? void 0 : n.id
                              })
                            : null,
                        (0, r.jsx)(s.V, { onClick: l })
                    ]
                })
            })
        ]
    });
}
