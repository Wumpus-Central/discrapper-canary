n.d(t, { O: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(275667),
    o = n(576437),
    d = n(408486),
    c = n(769015),
    u = n(409626),
    h = n(692969),
    A = n(485599),
    g = n(985018),
    m = n(237235);
function p(e) {
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
function _(e) {
    let {
            isStreaming: t,
            application: n,
            game: l,
            onClickNotSharing: s,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: h,
            ref: A,
            popoutTargetRef: _,
        } = e,
        x = null != n ? n.name : null != l ? l.name : g.intl.string(g.t["UQMV/E"]);
    return (
        (0, d.z)(),
        (0, i.jsxs)("div", {
            className: m.cm,
            children: [
                (0, i.jsxs)("div", {
                    className: m.f9,
                    children: [
                        (0, i.jsx)(c.A, { className: m.Gt, game: n, pid: l?.pid, ref: A }),
                        t ? (0, i.jsx)(a.npA, { size: "md", color: "currentColor", className: m.it }) : null,
                    ],
                }),
                (0, i.jsx)(o.M, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: h,
                    children: (0, i.jsxs)("div", {
                        className: m.pq,
                        children: [
                            null != x ? (0, i.jsx)(p, { name: x, applicationId: n?.id }) : null,
                            (0, i.jsx)(r.G, { onClick: s }),
                        ],
                    }),
                }),
            ],
        })
    );
}
