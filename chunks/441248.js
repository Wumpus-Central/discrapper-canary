n.d(t, {
    k: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(925329),
    s = n(810568),
    c = n(168524),
    u = n(115530),
    d = n(388032),
    h = n(832926);
function p(e) {
    let { name: t, applicationId: n } = e,
        l = (0, c.Z)({
            location: 'ActivityPanelGameCard',
            applicationId: n,
            source: s.m1.RtcPanel,
            trackEntryPointImpression: !0
        });
    return (0, i.jsx)(a.Clickable, {
        onClick: l,
        className: r()(null != l && h.clickableGameName),
        children: (0, i.jsx)(u.Z, {
            className: h.gameName,
            children: t
        })
    });
}
function m(e) {
    var t, n;
    let { isStreaming: l, application: r, game: s } = e;
    let c = ((t = r), (n = s), null != t ? t.name : null != n ? n.name : d.intl.string(d.t['UQMV/P']));
    return (0, i.jsxs)('div', {
        className: h.gameWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: h.gameIconWrapper,
                children: [
                    (0, i.jsx)(o.Z, {
                        className: h.gameIcon,
                        game: r,
                        pid: null == s ? void 0 : s.pid
                    }),
                    l
                        ? (0, i.jsx)(a.VideoIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: h.liveBadge
                          })
                        : null
                ]
            }),
            (0, i.jsx)('div', {
                className: h.info,
                children:
                    null != c
                        ? (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(p, {
                                  name: c,
                                  applicationId: null == r ? void 0 : r.id
                              })
                          })
                        : null
            })
        ]
    });
}
