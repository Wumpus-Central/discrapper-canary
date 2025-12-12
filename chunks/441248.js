n.d(t, { k: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(40614),
    s = n(736409),
    c = n(12694),
    u = n(925329),
    d = n(810568),
    f = n(168524),
    h = n(115530),
    p = n(388032),
    g = n(48733);
function m(e) {
    let { name: t, applicationId: n } = e,
        i = (0, f.Z)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: d.m1.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(o.P3F, {
        onClick: i,
        className: l()(null != i && g.clickableGameName),
        children: (0, r.jsx)(h.Z, {
            className: g.gameName,
            children: t,
        }),
    });
}
function b(e) {
    let {
            isStreaming: t,
            application: n,
            game: i,
            onClickNotSharing: l,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: f,
            ref: h,
            popoutTargetRef: b,
        } = e,
        _ = null != n ? n.name : null != i ? i.name : p.intl.string(p.t["UQMV/E"]);
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
                            ? (0, r.jsx)(o.Odl, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.liveBadge,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(s.j, {
                    popoutTargetRef: b,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: f,
                    children: (0, r.jsxs)("div", {
                        className: g.info,
                        children: [
                            null != _
                                ? (0, r.jsx)(m, {
                                      name: _,
                                      applicationId: null == n ? void 0 : n.id,
                                  })
                                : null,
                            (0, r.jsx)(a.V, { onClick: l }),
                        ],
                    }),
                }),
            ],
        })
    );
}
