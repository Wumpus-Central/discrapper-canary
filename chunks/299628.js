e.d(i, { A: () => C });
var n = e(477900);
e(582128);
var s = e(661531),
    l = e(834730),
    r = e(283973),
    d = e(664121),
    a = e(56059),
    c = e(289020),
    o = e(360669),
    u = e(597770),
    g = e(138134),
    f = e(406810),
    x = e(695458),
    h = e(625903),
    m = e(789645),
    p = e(294433),
    j = e(513687),
    y = e(375708),
    k = e(121788);
let v = { size: "custom", width: 20, height: 20, color: s.A.colors.TEXT_STRONG.css },
    N = { ...v, color: s.A.colors.TEXT_FEEDBACK_CRITICAL.css };
function E(t) {
    let { header: i, description: e, icon: s } = t;
    return (0, n.jsxs)("div", {
        className: k.nM,
        children: [
            (0, n.jsx)("div", { className: k.zc, children: s }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(l.E, { className: k.wx, variant: "text-sm/medium", color: "text-strong", children: i }),
                    (0, n.jsx)(l.E, { className: k.h_, variant: "text-xs/medium", color: "text-muted", children: e }),
                ],
            }),
        ],
    });
}
function T(t) {
    let { title: i, description: e, prominentTitle: s = !1, rows: r } = t;
    return (0, n.jsxs)("div", {
        className: k.uW,
        children: [
            (0, n.jsxs)("div", {
                className: k.bV,
                children: [
                    (0, n.jsx)(l.E, {
                        className: k.SZ,
                        variant: s ? "text-sm/medium" : "text-xs/medium",
                        color: s ? "text-strong" : "text-muted",
                        children: i,
                    }),
                    null != e && (0, n.jsx)(l.E, { variant: "text-xs/medium", color: "text-muted", children: e }),
                ],
            }),
            (0, n.jsx)("div", {
                className: k.Os,
                children: r.map((t) => {
                    let { key: i, header: e, description: s, icon: l } = t;
                    return (0, n.jsx)(E, { header: e, description: s, icon: l }, i);
                }),
            }),
        ],
    });
}
let C = function (t) {
    let { showSectionDescriptions: i = !1 } = t,
        e = y.intl.string(j.default.CI1Env),
        s = y.intl.string(j.default["n73g+V"]),
        l = y.intl.string(j.default["/zMYZX"]),
        E = (0, p.y)(y.intl.string(j.default["5x3taM"]), y.intl.string(j.default.WZwGFX)),
        C = y.intl.string(j.default["44NEx6"]),
        w = (0, p.y)(y.intl.string(j.default.FcKkcr), y.intl.string(j.default.PQtDFk)),
        I = y.intl.string(j.default["Z3G+8h"]),
        A = y.intl.string(j.default.KBgArX),
        F = y.intl.string(j.default.GNs2ZH),
        G = y.intl.string(j.default.Ief2xc),
        Z = y.intl.string(j.default.PjM3r5),
        M = (0, p.y)(y.intl.string(j.default["dES/2r"]), y.intl.string(j.default.ep6mdN)),
        X = (0, p.y)(y.intl.string(j.default["30+sih"]), y.intl.string(j.default["0cuLn1"])),
        z = (0, p.y)(y.intl.string(j.default.tHTyRh), y.intl.string(j.default.TeNlMb)),
        H = (0, p.y)(y.intl.string(j.default.wZejZr), y.intl.string(j.default.tdgcf1)),
        R = (0, p.y)(y.intl.string(j.default.GWPcQg), y.intl.string(j.default.yFnKIg)),
        _ = (0, p.y)(y.intl.string(j.default.PfveQ6), y.intl.string(j.default["f7ofm/"])),
        b = (0, p.y)(y.intl.string(j.default.MKeCj3), y.intl.string(j.default.HdcGGl)),
        K = (0, p.y)(y.intl.string(j.default.ASf7XN), y.intl.string(j.default["82y87X"])),
        P = (0, p.y)(y.intl.string(j.default["0QDVFN"]), y.intl.string(j.default["1xBHHV"])),
        Q = (0, p.y)(y.intl.string(j.default.zzgr9Q), y.intl.string(j.default["4C8u97"])),
        S = [
            { key: "friend-add", header: l, description: E, icon: (0, n.jsx)(r.R, { ...v }) },
            { key: "guild-participation", header: C, description: w, icon: (0, n.jsx)(d.R, { ...v }) },
            { key: "users-messaged", header: I, description: A, icon: (0, n.jsx)(a.b, { ...v }) },
            { key: "voice-minutes", header: F, description: G, icon: (0, n.jsx)(c.E, { ...v }) },
            { key: "purchases", header: Z, description: M, icon: (0, n.jsx)(o.B, { ...v }) },
            {
                key: "gifts",
                header: y.intl.string(j.default.Fv3n8L),
                description: R,
                icon: (0, n.jsx)(u.GiftIcon, { ...v }),
            },
            { key: "reports", header: X, description: z, icon: (0, n.jsx)(g.FlagIcon, { ...v }) },
        ],
        V = [
            {
                key: "screen-time",
                header: y.intl.string(j.default.kyT6pZ),
                description: _,
                icon: (0, n.jsx)(f.ClockIcon, { ...v }),
            },
            {
                key: "spending-cap",
                header: y.intl.string(j.default["52ld7c"]),
                description: b,
                icon: (0, n.jsx)(x.m, { ...v }),
            },
            {
                key: "settings",
                header: y.intl.string(j.default.UCuHM8),
                description: H,
                icon: (0, n.jsx)(h.SettingsIcon, { ...v }),
            },
        ],
        B = [{ key: "excluded-content", header: K, description: P, icon: (0, n.jsx)(m.P, { ...N }) }];
    return (0, n.jsxs)("div", {
        className: k.V0,
        children: [
            (0, n.jsx)(T, { title: e, description: i ? Q : void 0, prominentTitle: i, rows: S }),
            (0, n.jsx)(T, {
                title: y.intl.string(j.default["ksze+o"]),
                description: i ? y.intl.string(j.default["8m2ROd"]) : void 0,
                prominentTitle: i,
                rows: V,
            }),
            (0, n.jsx)(T, { title: s, prominentTitle: i, rows: B }),
        ],
    });
};
