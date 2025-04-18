n.d(t, { k: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(40614),
    a = n(925329),
    c = n(810568),
    u = n(168524),
    d = n(115530),
    h = n(388032),
    p = n(841580);
function f(e) {
    let { name: t, applicationId: n } = e,
        i = (0, u.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: c.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, r.jsx)(o.P3F, {
        onClick: i,
        className: l()(null != i && p.clickableGameName),
        children: (0, r.jsx)(d.Z, {
            className: p.gameName,
            children: t
        })
    });
}
function g(e) {
    let { isStreaming: t, application: n, game: i, onClickNotSharing: l } = e,
        c = null != n ? n.name : null != i ? i.name : h.NW.string(h.t['UQMV/P']);
    return (0, r.jsxs)('div', {
        className: p.gameWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: p.gameIconWrapper,
                children: [
                    (0, r.jsx)(a.Z, {
                        className: p.gameIcon,
                        game: n,
                        pid: null == i ? void 0 : i.pid
                    }),
                    t
                        ? (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.liveBadge
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.info,
                children: [
                    null != c
                        ? (0, r.jsx)(f, {
                              name: c,
                              applicationId: null == n ? void 0 : n.id
                          })
                        : null,
                    (0, r.jsx)(s.V, { onClick: l })
                ]
            })
        ]
    });
}
