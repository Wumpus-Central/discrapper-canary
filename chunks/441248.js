n.d(t, { k: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(40614),
    s = n(925329),
    c = n(810568),
    u = n(168524),
    d = n(115530),
    p = n(388032),
    h = n(270861);
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
        className: l()(null != i && h.clickableGameName),
        children: (0, r.jsx)(d.Z, {
            className: h.gameName,
            children: t
        })
    });
}
function g(e) {
    let { isStreaming: t, application: n, game: i, onClickNotSharing: l } = e,
        c = null != n ? n.name : null != i ? i.name : p.NW.string(p.t['UQMV/P']);
    return (0, r.jsxs)('div', {
        className: h.gameWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: h.gameIconWrapper,
                children: [
                    (0, r.jsx)(s.Z, {
                        className: h.gameIcon,
                        game: n,
                        pid: null == i ? void 0 : i.pid
                    }),
                    t
                        ? (0, r.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: h.liveBadge
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.info,
                children: [
                    null != c
                        ? (0, r.jsx)(f, {
                              name: c,
                              applicationId: null == n ? void 0 : n.id
                          })
                        : null,
                    (0, r.jsx)(a.V, { onClick: l })
                ]
            })
        ]
    });
}
