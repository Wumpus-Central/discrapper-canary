n.d(t, { k: () => b });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(40614),
    a = n(736409),
    c = n(12694),
    u = n(925329),
    d = n(810568),
    h = n(168524),
    p = n(115530),
    f = n(388032),
    g = n(270861);
function m(e) {
    let { name: t, applicationId: n } = e,
        i = (0, h.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: d.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, r.jsx)(o.P3F, {
        onClick: i,
        className: l()(null != i && g.clickableGameName),
        children: (0, r.jsx)(p.Z, {
            className: g.gameName,
            children: t
        })
    });
}
function b(e) {
    let { isStreaming: t, application: n, game: i, onClickNotSharing: l, isForceShowSharingPopout: d, setIsForceShowSharingPopout: h } = e,
        p = null != n ? n.name : null != i ? i.name : f.intl.string(f.t['UQMV/P']);
    return (
        (0, c.V)(),
        (0, r.jsxs)('div', {
            className: g.gameWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: g.gameIconWrapper,
                    children: [
                        (0, r.jsx)(u.Z, {
                            className: g.gameIcon,
                            game: n,
                            pid: null == i ? void 0 : i.pid
                        }),
                        t
                            ? (0, r.jsx)(o.Odl, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: g.liveBadge
                              })
                            : null
                    ]
                }),
                (0, r.jsx)(a.j, {
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: h,
                    children: (0, r.jsxs)('div', {
                        className: g.info,
                        children: [
                            null != p
                                ? (0, r.jsx)(m, {
                                      name: p,
                                      applicationId: null == n ? void 0 : n.id
                                  })
                                : null,
                            (0, r.jsx)(s.V, { onClick: l })
                        ]
                    })
                })
            ]
        })
    );
}
