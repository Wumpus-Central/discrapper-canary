n.d(t, {
    VE: () => Z,
    lV: () => S,
}),
    n(539854),
    n(642613),
    n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    o = n(468194),
    s = n(442837),
    c = n(199849),
    d = n(481060),
    u = n(304680),
    m = n(763520),
    p = n(600164),
    h = n(352978),
    f = n(271383),
    y = n(131951),
    g = n(19780),
    v = n(226961),
    E = n(594174),
    b = n(51144),
    D = n(513547),
    P = n(65154),
    j = n(966117),
    x = n(197571);
let C = {
    [P.Z.NO_OVERRIDE]: "None",
    [P.Z.LOW]: "Low Quality Stream",
    [P.Z.HIGH]: "High Quality Stream",
};
function Z(e) {
    let t = [],
        n = 0;
    for (
        e.length % 2 != 0 &&
        e.push(
            (0, r.jsx)(
                p.Z,
                {
                    basis: "50%",
                    grow: 0,
                },
                n++,
            ),
        );
        e.length > 0;
    )
        t.push(
            (0, r.jsx)(
                p.Z,
                {
                    basis: "50%",
                    grow: 0,
                    children: e.splice(0, 2),
                },
                n++,
            ),
        );
    return t;
}
let R = {
    ssrc: 1,
    codec: 2,
};
function S(e) {
    let {
            streams: t,
            context: n,
            mediaEngineConnectionId: i,
            userId: S,
            videoStreams: F,
            title: N,
            showUserInfo: I = !1,
            showSimulcastOverride: k = !1,
        } = e,
        [w, B] = a.useState("0"),
        A = (0, s.e7)([g.Z], () => (I ? g.Z.getGuildId() : null)),
        T = (0, s.e7)([E.default], () => (I && null != S ? E.default.getUser(S) : null)),
        L = (0, s.e7)([f.ZP], () => (I && null != A && null != S ? f.ZP.getNick(A, S) : null));
    if (null == t || (I && null == S) || 0 === t.length) return (0, r.jsx)(d.$jN, { type: d.$jN.Type.SPINNING_CIRCLE });
    let O = N;
    I && null != T && (O = "".concat(N, " \u2014 ").concat(null != L ? L : b.ZP.getName(T)));
    let M = t.map((e, t) =>
            (0, r.jsx)(
                d.njP.Item,
                {
                    id: t.toString(),
                    children: (function (e) {
                        let t = (0, o.De)(e.type),
                            n = "";
                        return (
                            "resolution" in e &&
                                null != e.resolution &&
                                0 !== e.resolution.width &&
                                0 !== e.resolution.height &&
                                (n = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")),
                            t + n
                        );
                    })(e),
                },
                t.toString(),
            ),
        ),
        V = Math.min(parseInt(w, 10), t.length - 1),
        G = t[V],
        H = (function (e, t, n, a, i) {
            let o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let n = R[e],
                    r = R[t];
                return n !== r
                    ? void 0 === n
                        ? 1
                        : void 0 === r
                          ? -1
                          : n - r
                    : v.Pz[e] !== v.Pz[t]
                      ? v.Pz[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let n = e[t];
                D.al[t] ||
                    void 0 === n ||
                    o.push(
                        (0, r.jsx)(
                            D.ck,
                            {
                                section: a,
                                label: t,
                                value: n,
                            },
                            t,
                        ),
                    );
            }
            return (0, r.jsxs)(
                "div",
                {
                    className: x.marginBottom40,
                    children: [
                        "video" === e.type &&
                            null != n &&
                            null != a &&
                            null != i &&
                            (function (e, t, n, a) {
                                let i = a.get(t, n, e.ssrc);
                                return null != i
                                    ? (0, r.jsx)("div", {
                                          className: l()(j.videoWrapper, x.marginBottom40),
                                          children: (0, r.jsx)(h.Z, {
                                              streamId: i,
                                              videoComponent: y.Z.getMediaEngine().Video,
                                              paused: !1,
                                              videoSpinnerContext: m.m.REPLAY_VIDEO_STREAM,
                                              userId: n,
                                          }),
                                      })
                                    : null;
                            })(e, n, a, i),
                        Z(o),
                    ],
                },
                "".concat(e.type, " + ").concat(e.ssrc),
            );
        })(G, 0, i, S, F),
        _ =
            k &&
            "video" === G.type &&
            null != i &&
            null != S &&
            null != F &&
            (0, r.jsx)(p.Z, {
                className: x.marginBottom20,
                children: (0, r.jsx)(p.Z.Child, {
                    basis: "100%",
                    children: (0, r.jsx)(c.y6, {
                        label: "Simulcast Override",
                        value: v.ZP.getSimulcastDebugOverride(S, n),
                        onChange: (e) => {
                            u.MS(S, n, e);
                        },
                        options: Object.values(P.Z).map((e) => ({
                            value: e,
                            label: C[e],
                        })),
                    }),
                }),
            });
    return (0, r.jsxs)(d.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                children: O,
            }),
            (0, r.jsx)(d.njP, {
                type: "top",
                look: "brand",
                selectedItem: w,
                onItemSelect: B,
                className: j.tabBar,
                children: M,
            }),
            H,
            _,
        ],
    });
}
