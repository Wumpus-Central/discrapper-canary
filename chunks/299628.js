e.d(i, { A: () => w });
var n = e(627968);
e(64700);
var s = e(661531),
    r = e(834730),
    l = e(283973),
    d = e(664121),
    a = e(56059),
    c = e(289020),
    u = e(360669),
    o = e(597770),
    g = e(138134),
    f = e(406810),
    x = e(695458),
    h = e(625903),
    m = e(789645),
    p = e(294433),
    j = e(477480),
    y = e(375708),
    v = e(412699);
let k = { size: "custom", width: 20, height: 20, color: s.A.colors.TEXT_STRONG.css },
    N = { ...k, color: s.A.colors.TEXT_FEEDBACK_CRITICAL.css };
function E(t) {
    let { header: i, description: e, icon: s } = t;
    return (0, n.jsxs)("div", {
        className: v.nM,
        children: [
            (0, n.jsx)("div", { className: v.zc, children: s }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(r.E, { className: v.wx, variant: "text-sm/medium", color: "text-strong", children: i }),
                    (0, n.jsx)(r.E, { className: v.h_, variant: "text-xs/medium", color: "text-muted", children: e }),
                ],
            }),
        ],
    });
}
function T(t) {
    let { title: i, description: e, prominentTitle: s = !1, rows: l } = t;
    return (0, n.jsxs)("div", {
        className: v.uW,
        children: [
            (0, n.jsxs)("div", {
                className: v.bV,
                children: [
                    (0, n.jsx)(r.E, {
                        className: v.SZ,
                        variant: s ? "text-sm/medium" : "text-xs/medium",
                        color: s ? "text-strong" : "text-muted",
                        children: i,
                    }),
                    null != e && (0, n.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: e }),
                ],
            }),
            (0, n.jsx)("div", {
                className: v.Os,
                children: l.map((t) => {
                    let { key: i, header: e, description: s, icon: r } = t;
                    return (0, n.jsx)(E, { header: e, description: s, icon: r }, i);
                }),
            }),
        ],
    });
}
let w = function (t) {
    let { showSectionDescriptions: i = !1 } = t,
        e = y.intl.string(j.default.CI1Env),
        s = y.intl.string(j.default["n73g+V"]),
        r = y.intl.string(j.default["/zMYZX"]),
        E = (0, p.y)(y.intl.string(j.default["5x3taM"]), y.intl.string(j.default.WZwGFX)),
        w = y.intl.string(j.default["44NEx6"]),
        C = (0, p.y)(y.intl.string(j.default.FcKkcr), y.intl.string(j.default.PQtDFk)),
        Z = y.intl.string(j.default["Z3G+8h"]),
        A = y.intl.string(j.default.KBgArX),
        F = y.intl.string(j.default.GNs2ZH),
        G = y.intl.string(j.default.Ief2xc),
        M = y.intl.string(j.default.PjM3r5),
        X = (0, p.y)(y.intl.string(j.default["dES/2r"]), y.intl.string(j.default.ep6mdN)),
        z = (0, p.y)(y.intl.string(j.default["30+sih"]), y.intl.string(j.default["0cuLn1"])),
        H = (0, p.y)(y.intl.string(j.default.tHTyRh), y.intl.string(j.default.TeNlMb)),
        R = (0, p.y)(y.intl.string(j.default.wZejZr), y.intl.string(j.default.tdgcf1)),
        _ = (0, p.y)(y.intl.string(j.default.GWPcQg), y.intl.string(j.default.yFnKIg)),
        b = (0, p.y)(y.intl.string(j.default.PfveQ6), y.intl.string(j.default["f7ofm/"])),
        I = (0, p.y)(y.intl.string(j.default.MKeCj3), y.intl.string(j.default.HdcGGl)),
        K = (0, p.y)(y.intl.string(j.default.ASf7XN), y.intl.string(j.default["82y87X"])),
        P = (0, p.y)(y.intl.string(j.default["0QDVFN"]), y.intl.string(j.default["1xBHHV"])),
        Q = (0, p.y)(y.intl.string(j.default.zzgr9Q), y.intl.string(j.default["4C8u97"])),
        V = [
            { key: "friend-add", header: r, description: E, icon: (0, n.jsx)(l.R, { ...k }) },
            { key: "guild-participation", header: w, description: C, icon: (0, n.jsx)(d.R, { ...k }) },
            { key: "users-messaged", header: Z, description: A, icon: (0, n.jsx)(a.b, { ...k }) },
            { key: "voice-minutes", header: F, description: G, icon: (0, n.jsx)(c.E, { ...k }) },
            { key: "purchases", header: M, description: X, icon: (0, n.jsx)(u.B, { ...k }) },
            { key: "gifts", header: y.intl.string(j.default.Fv3n8L), description: _, icon: (0, n.jsx)(o.o, { ...k }) },
            { key: "reports", header: z, description: H, icon: (0, n.jsx)(g.i, { ...k }) },
        ],
        B = [
            {
                key: "screen-time",
                header: y.intl.string(j.default.kyT6pZ),
                description: b,
                icon: (0, n.jsx)(f.O, { ...k }),
            },
            {
                key: "spending-cap",
                header: y.intl.string(j.default["52ld7c"]),
                description: I,
                icon: (0, n.jsx)(x.m, { ...k }),
            },
            {
                key: "settings",
                header: y.intl.string(j.default.UCuHM8),
                description: R,
                icon: (0, n.jsx)(h.Z, { ...k }),
            },
        ],
        O = [{ key: "excluded-content", header: K, description: P, icon: (0, n.jsx)(m.P, { ...N }) }];
    return (0, n.jsxs)("div", {
        className: v.V0,
        children: [
            (0, n.jsx)(T, { title: e, description: i ? Q : void 0, prominentTitle: i, rows: V }),
            (0, n.jsx)(T, {
                title: y.intl.string(j.default["ksze+o"]),
                description: i ? y.intl.string(j.default["8m2ROd"]) : void 0,
                prominentTitle: i,
                rows: B,
            }),
            (0, n.jsx)(T, { title: s, prominentTitle: i, rows: O }),
        ],
    });
};
