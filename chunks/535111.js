n.d(t, { O: () => f });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(939249),
    r = n(428689),
    o = n(275667),
    d = n(576437),
    c = n(408486),
    u = n(769015),
    h = n(409626),
    A = n(692969),
    _ = n(485599),
    m = n(985018),
    g = n(379414);
function p(e) {
    let { name: t, applicationId: n } = e,
        l = (0, A.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: h.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, i.jsx)(a.D, {
        onClick: l,
        className: s()(null != l && g.On),
        children: (0, i.jsx)(_.A, { className: g.mO, children: t }),
    });
}
function f(e) {
    let {
            isStreaming: t,
            application: n,
            game: l,
            onClickNotSharing: s,
            isForceShowSharingPopout: a,
            setIsForceShowSharingPopout: h,
            ref: A,
            popoutTargetRef: _,
        } = e,
        f = null != n ? n.name : null != l ? l.name : m.intl.string(m.t["UQMV/E"]);
    return (
        (0, c.z)(),
        (0, i.jsxs)("div", {
            className: g.cm,
            children: [
                (0, i.jsxs)("div", {
                    className: g.f9,
                    children: [
                        (0, i.jsx)(u.A, { className: g.Gt, game: n, pid: l?.pid, ref: A }),
                        t ? (0, i.jsx)(r.n, { size: "md", color: "currentColor", className: g.it }) : null,
                    ],
                }),
                (0, i.jsx)(d.M, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: a,
                    setIsForceShowSharingPopout: h,
                    children: (0, i.jsxs)("div", {
                        className: g.pq,
                        children: [
                            null != f ? (0, i.jsx)(p, { name: f, applicationId: n?.id }) : null,
                            (0, i.jsx)(o.G, { onClick: s }),
                        ],
                    }),
                }),
            ],
        })
    );
}
