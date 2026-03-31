n.d(t, { O: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(275667),
    o = n(576437),
    c = n(408486),
    d = n(769015),
    u = n(409626),
    h = n(692969),
    A = n(485599),
    _ = n(985018),
    m = n(455270);
function g(e) {
    let { name: t, applicationId: n } = e,
        l = (0, h.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: u.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, i.jsx)(a.DUT, {
        onClick: l,
        className: s()(null != l && m.On),
        children: (0, i.jsx)(A.A, { className: m.mO, children: t }),
    });
}
function p(e) {
    let {
            isStreaming: t,
            application: n,
            game: l,
            onClickNotSharing: s,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: h,
            ref: A,
            popoutTargetRef: p,
        } = e,
        f = null != n ? n.name : null != l ? l.name : _.intl.string(_.t["UQMV/E"]);
    return (
        (0, c.z)(),
        (0, i.jsxs)("div", {
            className: m.cm,
            children: [
                (0, i.jsxs)("div", {
                    className: m.f9,
                    children: [
                        (0, i.jsx)(d.A, { className: m.Gt, game: n, pid: l?.pid, ref: A }),
                        t ? (0, i.jsx)(a.npA, { size: "md", color: "currentColor", className: m.it }) : null,
                    ],
                }),
                (0, i.jsx)(o.M, {
                    popoutTargetRef: p,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: h,
                    children: (0, i.jsxs)("div", {
                        className: m.pq,
                        children: [
                            null != f ? (0, i.jsx)(g, { name: f, applicationId: n?.id }) : null,
                            (0, i.jsx)(r.G, { onClick: s }),
                        ],
                    }),
                }),
            ],
        })
    );
}
