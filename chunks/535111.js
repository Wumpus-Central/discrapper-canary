n.d(t, {
    O: () => m,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(275667),
    o = n(576437),
    c = n(408486),
    u = n(769015),
    d = n(409626),
    f = n(692969),
    p = n(485599),
    h = n(985018),
    b = n(237235);

function g(e) {
    let { name: t, applicationId: n } = e,
        l = (0, f.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: d.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(a.DUT, {
        onClick: l,
        className: i()(null != l && b.On),
        children: (0, r.jsx)(p.A, {
            className: b.mO,
            children: t,
        }),
    });
}

function m(e) {
    let {
            isStreaming: t,
            application: n,
            game: l,
            onClickNotSharing: i,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: f,
            ref: p,
            popoutTargetRef: m,
        } = e,
        A = null != n ? n.name : null != l ? l.name : h.intl.string(h.t["UQMV/E"]);
    return (
        (0, c.z)(),
        (0, r.jsxs)("div", {
            className: b.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: b.f9,
                    children: [
                        (0, r.jsx)(u.A, {
                            className: b.Gt,
                            game: n,
                            pid: null == l ? void 0 : l.pid,
                            ref: p,
                        }),
                        t
                            ? (0, r.jsx)(a.npA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: b.it,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(o.M, {
                    popoutTargetRef: m,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: f,
                    children: (0, r.jsxs)("div", {
                        className: b.pq,
                        children: [
                            null != A
                                ? (0, r.jsx)(g, {
                                      name: A,
                                      applicationId: null == n ? void 0 : n.id,
                                  })
                                : null,
                            (0, r.jsx)(s.G, {
                                onClick: i,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
