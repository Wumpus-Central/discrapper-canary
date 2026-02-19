"use strict";
n.d(t, { O: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(275667),
    o = n(576437),
    c = n(408486),
    d = n(769015),
    u = n(409626),
    h = n(692969),
    A = n(485599),
    p = n(985018),
    g = n(237235);
function m(e) {
    let { name: t, applicationId: n } = e,
        s = (0, h.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: u.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, i.jsx)(r.DUT, {
        onClick: s,
        className: l()(null != s && g.On),
        children: (0, i.jsx)(A.A, { className: g.mO, children: t }),
    });
}
function _(e) {
    let {
            isStreaming: t,
            application: n,
            game: s,
            onClickNotSharing: l,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: h,
            ref: A,
            popoutTargetRef: _,
        } = e,
        f = null != n ? n.name : null != s ? s.name : p.intl.string(p.t["UQMV/E"]);
    return (
        (0, c.z)(),
        (0, i.jsxs)("div", {
            className: g.cm,
            children: [
                (0, i.jsxs)("div", {
                    className: g.f9,
                    children: [
                        (0, i.jsx)(d.A, { className: g.Gt, game: n, pid: s?.pid, ref: A }),
                        t ? (0, i.jsx)(r.npA, { size: "md", color: "currentColor", className: g.it }) : null,
                    ],
                }),
                (0, i.jsx)(o.M, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: h,
                    children: (0, i.jsxs)("div", {
                        className: g.pq,
                        children: [
                            null != f ? (0, i.jsx)(m, { name: f, applicationId: n?.id }) : null,
                            (0, i.jsx)(a.G, { onClick: l }),
                        ],
                    }),
                }),
            ],
        })
    );
}
