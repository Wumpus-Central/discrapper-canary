n.d(t, {
    k: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(40614),
    s = n(925329),
    c = n(810568),
    u = n(168524),
    d = n(115530),
    h = n(388032),
    p = n(832926);
function m(e) {
    let { name: t, applicationId: n } = e,
        l = (0, u.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: c.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(a.Clickable, {
        onClick: l,
        className: r()(null != l && p.clickableGameName),
        children: (0, i.jsx)(d.Z, {
            className: p.gameName,
            children: t
        })
    });
}
function f(e) {
    var t, n;
    let { isStreaming: l, application: r, game: c, onClickNotSharing: u } = e;
    let d = ((t = r), (n = c), null != t ? t.name : null != n ? n.name : h.intl.string(h.t['UQMV/P']));
    return (0, i.jsxs)('div', {
        className: p.gameWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: p.gameIconWrapper,
                children: [
                    (0, i.jsx)(s.Z, {
                        className: p.gameIcon,
                        game: r,
                        pid: null == c ? void 0 : c.pid
                    }),
                    l
                        ? (0, i.jsx)(a.VideoIcon, {
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
                    null != d
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(m, {
                                  name: d,
                                  applicationId: null == r ? void 0 : r.id
                              })
                          })
                        : null,
                    (0, i.jsx)(o.V, { onClick: u })
                ]
            })
        ]
    });
}
