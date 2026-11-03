e.d(i, { A: () => b });
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
    y = e(83152),
    j = e(105292),
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
                    (0, n.jsx)(l.E, { className: k.wx, variant: "body-sm/medium", color: "text-strong", children: i }),
                    (0, n.jsx)(l.E, { className: k.h_, variant: "body-xs/medium", color: "text-muted", children: e }),
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
                        variant: s ? "body-sm/medium" : "body-xs/medium",
                        color: s ? "text-strong" : "text-muted",
                        children: i,
                    }),
                    null != e && (0, n.jsx)(l.E, { variant: "body-xs/medium", color: "text-muted", children: e }),
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
let b = function (t) {
    let { showSectionDescriptions: i = !1 } = t,
        e = j.intl.string(y.default.CI1Env),
        s = j.intl.string(y.default["n73g+V"]),
        l = j.intl.string(y.default["/zMYZX"]),
        E = (0, p.y)(j.intl.string(y.default["5x3taM"]), j.intl.string(y.default.WZwGFX)),
        b = j.intl.string(y.default["44NEx6"]),
        C = (0, p.y)(j.intl.string(y.default.FcKkcr), j.intl.string(y.default.PQtDFk)),
        w = j.intl.string(y.default["Z3G+8h"]),
        I = j.intl.string(y.default.KBgArX),
        A = j.intl.string(y.default.GNs2ZH),
        F = j.intl.string(y.default.Ief2xc),
        G = j.intl.string(y.default.PjM3r5),
        Z = (0, p.y)(j.intl.string(y.default["dES/2r"]), j.intl.string(y.default.ep6mdN)),
        M = (0, p.y)(j.intl.string(y.default["30+sih"]), j.intl.string(y.default["0cuLn1"])),
        X = (0, p.y)(j.intl.string(y.default.tHTyRh), j.intl.string(y.default.TeNlMb)),
        z = (0, p.y)(j.intl.string(y.default.wZejZr), j.intl.string(y.default.tdgcf1)),
        H = (0, p.y)(j.intl.string(y.default.GWPcQg), j.intl.string(y.default.yFnKIg)),
        R = (0, p.y)(j.intl.string(y.default.PfveQ6), j.intl.string(y.default["f7ofm/"])),
        _ = (0, p.y)(j.intl.string(y.default.MKeCj3), j.intl.string(y.default.HdcGGl)),
        K = (0, p.y)(j.intl.string(y.default.ASf7XN), j.intl.string(y.default["82y87X"])),
        P = (0, p.y)(j.intl.string(y.default["0QDVFN"]), j.intl.string(y.default["1xBHHV"])),
        Q = (0, p.y)(j.intl.string(y.default.zzgr9Q), j.intl.string(y.default["4C8u97"])),
        S = [
            { key: "friend-add", header: l, description: E, icon: (0, n.jsx)(r.R, { ...v }) },
            { key: "guild-participation", header: b, description: C, icon: (0, n.jsx)(d.R, { ...v }) },
            { key: "users-messaged", header: w, description: I, icon: (0, n.jsx)(a.b, { ...v }) },
            { key: "voice-minutes", header: A, description: F, icon: (0, n.jsx)(c.E, { ...v }) },
            { key: "purchases", header: G, description: Z, icon: (0, n.jsx)(o.B, { ...v }) },
            {
                key: "gifts",
                header: j.intl.string(y.default.Fv3n8L),
                description: H,
                icon: (0, n.jsx)(u.GiftIcon, { ...v }),
            },
            { key: "reports", header: M, description: X, icon: (0, n.jsx)(g.FlagIcon, { ...v }) },
        ],
        V = [
            {
                key: "screen-time",
                header: j.intl.string(y.default.kyT6pZ),
                description: R,
                icon: (0, n.jsx)(f.ClockIcon, { ...v }),
            },
            {
                key: "spending-cap",
                header: j.intl.string(y.default["52ld7c"]),
                description: _,
                icon: (0, n.jsx)(x.m, { ...v }),
            },
            {
                key: "settings",
                header: j.intl.string(y.default.UCuHM8),
                description: z,
                icon: (0, n.jsx)(h.SettingsIcon, { ...v }),
            },
        ],
        B = [{ key: "excluded-content", header: K, description: P, icon: (0, n.jsx)(m.P, { ...N }) }];
    return (0, n.jsxs)("div", {
        className: k.V0,
        children: [
            (0, n.jsx)(T, { title: e, description: i ? Q : void 0, prominentTitle: i, rows: S }),
            (0, n.jsx)(T, {
                title: j.intl.string(y.default["ksze+o"]),
                description: i ? j.intl.string(y.default["8m2ROd"]) : void 0,
                prominentTitle: i,
                rows: V,
            }),
            (0, n.jsx)(T, { title: s, prominentTitle: i, rows: B }),
        ],
    });
};
