n.d(t, { k: () => g });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(481060),
    a = n(40614),
    s = n(925329),
    c = n(810568),
    d = n(168524),
    u = n(115530),
    h = n(388032),
    p = n(657539);
function m(e) {
    let { name: t, applicationId: n } = e,
        l = (0, d.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: c.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(o.P3F, {
        onClick: l,
        className: r()(null != l && p.clickableGameName),
        children: (0, i.jsx)(u.Z, {
            className: p.gameName,
            children: t
        })
    });
}
function g(e) {
    let { isStreaming: t, application: n, game: l, onClickNotSharing: r } = e,
        c = null != n ? n.name : null != l ? l.name : h.intl.string(h.t['UQMV/P']);
    return (0, i.jsxs)('div', {
        className: p.gameWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: p.gameIconWrapper,
                children: [
                    (0, i.jsx)(s.Z, {
                        className: p.gameIcon,
                        game: n,
                        pid: null == l ? void 0 : l.pid
                    }),
                    t
                        ? (0, i.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.liveBadge
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.info,
                children: [
                    null != c
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(m, {
                                  name: c,
                                  applicationId: null == n ? void 0 : n.id
                              })
                          })
                        : null,
                    (0, i.jsx)(a.V, { onClick: r })
                ]
            })
        ]
    });
}
