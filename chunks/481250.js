n.d(t, {
    VE: () => C,
    lV: () => R,
}),
    n(539854),
    n(642613),
    n(388685);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(468194),
    s = n(442837),
    c = n(481060),
    d = n(304680),
    u = n(763520),
    m = n(600164),
    p = n(352978),
    h = n(271383),
    f = n(131951),
    y = n(19780),
    g = n(226961),
    v = n(594174),
    E = n(51144),
    b = n(513547),
    D = n(65154),
    P = n(966117),
    j = n(197571);
let x = {
    [D.Z.NO_OVERRIDE]: "None",
    [D.Z.LOW]: "Low Quality Stream",
    [D.Z.HIGH]: "High Quality Stream",
};
function C(e) {
    let t = [],
        n = 0;
    for (
        e.length % 2 != 0 &&
        e.push(
            (0, r.jsx)(
                m.Z,
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
                m.Z,
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
let Z = {
    ssrc: 1,
    codec: 2,
};
function R(e) {
    let {
            streams: t,
            context: n,
            mediaEngineConnectionId: i,
            userId: R,
            videoStreams: S,
            title: F,
            showUserInfo: N = !1,
            showSimulcastOverride: I = !1,
        } = e,
        [k, w] = a.useState("0"),
        B = (0, s.e7)([y.Z], () => (N ? y.Z.getGuildId() : null)),
        A = (0, s.e7)([v.default], () => (N && null != R ? v.default.getUser(R) : null)),
        T = (0, s.e7)([h.ZP], () => (N && null != B && null != R ? h.ZP.getNick(B, R) : null));
    if (null == t || (N && null == R) || 0 === t.length) return (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE });
    let L = F;
    N && null != A && (L = "".concat(F, " \u2014 ").concat(null != T ? T : E.ZP.getName(A)));
    let O = t.map((e, t) =>
            (0, r.jsx)(
                c.njP.Item,
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
        M = Math.min(parseInt(k, 10), t.length - 1),
        V = t[M],
        G = (function (e, t, n, a, i) {
            let o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let n = Z[e],
                    r = Z[t];
                return n !== r
                    ? void 0 === n
                        ? 1
                        : void 0 === r
                          ? -1
                          : n - r
                    : g.Pz[e] !== g.Pz[t]
                      ? g.Pz[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let n = e[t];
                b.al[t] ||
                    void 0 === n ||
                    o.push(
                        (0, r.jsx)(
                            b.ck,
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
                    className: j.marginBottom40,
                    children: [
                        "video" === e.type &&
                            null != n &&
                            null != a &&
                            null != i &&
                            (function (e, t, n, a) {
                                let i = a.get(t, n, e.ssrc);
                                return null != i
                                    ? (0, r.jsx)("div", {
                                          className: l()(P.videoWrapper, j.marginBottom40),
                                          children: (0, r.jsx)(p.Z, {
                                              streamId: i,
                                              videoComponent: f.Z.getMediaEngine().Video,
                                              paused: !1,
                                              videoSpinnerContext: u.m.REPLAY_VIDEO_STREAM,
                                              userId: n,
                                          }),
                                      })
                                    : null;
                            })(e, n, a, i),
                        C(o),
                    ],
                },
                "".concat(e.type, " + ").concat(e.ssrc),
            );
        })(V, 0, i, R, S),
        H =
            I &&
            "video" === V.type &&
            null != i &&
            null != R &&
            null != S &&
            (0, r.jsx)(m.Z, {
                className: j.marginBottom20,
                children: (0, r.jsx)(m.Z.Child, {
                    basis: "100%",
                    children: (0, r.jsx)(c.q4e, {
                        label: "Simulcast Override",
                        value: g.ZP.getSimulcastDebugOverride(R, n),
                        onChange: (e) => {
                            d.MS(R, n, e);
                        },
                        options: Object.values(D.Z).map((e) => ({
                            value: e,
                            label: x[e],
                        })),
                    }),
                }),
            });
    return (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-md/medium",
                children: L,
            }),
            (0, r.jsx)(c.njP, {
                type: "top",
                look: "brand",
                selectedItem: k,
                onItemSelect: w,
                className: P.tabBar,
                children: O,
            }),
            G,
            H,
        ],
    });
}
