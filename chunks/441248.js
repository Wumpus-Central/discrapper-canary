n.d(t, { k: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(40614),
    s = n(736409),
    c = n(12694),
    u = n(925329),
    d = n(810568),
    f = n(168524),
    h = n(115530),
    p = n(388032),
    g = n(867751);
function b(e) {
    let { name: t, applicationId: n } = e,
        i = (0, f.Z)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: d.m1.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(a.P3F, {
        onClick: i,
        className: l()(null != i && g.clickableGameName),
        children: (0, r.jsx)(h.Z, {
            className: g.gameName,
            children: t,
        }),
    });
}
function m(e) {
    let {
            isStreaming: t,
            application: n,
            game: i,
            onClickNotSharing: l,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: f,
            ref: h,
            popoutTargetRef: m,
        } = e,
        y = null != n ? n.name : null != i ? i.name : p.intl.string(p.t["UQMV/E"]);
    return (
        (0, c.V)(),
        (0, r.jsxs)("div", {
            className: g.gameWrapper,
            children: [
                (0, r.jsxs)("div", {
                    className: g.gameIconWrapper,
                    children: [
                        (0, r.jsx)(u.Z, {
                            className: g.gameIcon,
                            game: n,
                            pid: null == i ? void 0 : i.pid,
                            ref: h,
                        }),
                        t
                            ? (0, r.jsx)(a.Odl, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.liveBadge,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(s.j, {
                    popoutTargetRef: m,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: f,
                    children: (0, r.jsxs)("div", {
                        className: g.info,
                        children: [
                            null != y
                                ? (0, r.jsx)(b, {
                                      name: y,
                                      applicationId: null == n ? void 0 : n.id,
                                  })
                                : null,
                            (0, r.jsx)(o.V, { onClick: l }),
                        ],
                    }),
                }),
            ],
        })
    );
}
