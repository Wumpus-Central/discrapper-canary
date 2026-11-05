var n = e(477900);
e(582128);
var s = e(646514),
    r = e(834730),
    l = e(283973),
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
    y = e(665956),
    j = e(792996),
    k = e(121788);
let v = { size: "custom", width: 20, height: 20, color: s.A.colors.TEXT_STRONG.css },
    I = { ...v, color: s.A.colors.TEXT_FEEDBACK_CRITICAL.css };
function N(t) {
    let { header: i, description: e, icon: s } = t;
    return (0, n.jsxs)("div", {
        className: k.nM,
        children: [
            (0, n.jsx)("div", { className: k.zc, children: s }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(r.E, { className: k.wx, variant: "body-sm/medium", color: "text-strong", children: i }),
                    (0, n.jsx)(r.E, { className: k.h_, variant: "body-xs/medium", color: "text-muted", children: e }),
                ],
            }),
        ],
    });
}
function C(t) {
    let { title: i, description: e, prominentTitle: s = !1, rows: l } = t;
    return (0, n.jsxs)("div", {
        className: k.uW,
        children: [
            (0, n.jsxs)("div", {
                className: k.bV,
                children: [
                    (0, n.jsx)(r.E, {
                        className: k.SZ,
                        variant: s ? "body-sm/medium" : "body-xs/medium",
                        color: s ? "text-strong" : "text-muted",
                        children: i,
                    }),
                    null != e && (0, n.jsx)(r.E, { variant: "body-xs/medium", color: "text-muted", children: e }),
                ],
            }),
            (0, n.jsx)("div", {
                className: k.Os,
                children: l.map((t) => {
                    let { key: i, header: e, description: s, icon: r } = t;
                    return (0, n.jsx)(N, { header: e, description: s, icon: r }, i);
                }),
            }),
        ],
    });
}
e.d(
    i,
    {},
    {
        A: function (t) {
            let { showSectionDescriptions: i = !1 } = t,
                e = j.intl.string(y.default.CI1Env),
                s = j.intl.string(y.default["n73g+V"]),
                r = j.intl.string(y.default["/zMYZX"]),
                N = (0, p.y)(j.intl.string(y.default["5x3taM"]), j.intl.string(y.default.WZwGFX)),
                T = j.intl.string(y.default["44NEx6"]),
                E = (0, p.y)(j.intl.string(y.default.FcKkcr), j.intl.string(y.default.PQtDFk)),
                b = j.intl.string(y.default["Z3G+8h"]),
                w = j.intl.string(y.default.KBgArX),
                F = j.intl.string(y.default.GNs2ZH),
                A = j.intl.string(y.default.Ief2xc),
                G = j.intl.string(y.default.PjM3r5),
                X = (0, p.y)(j.intl.string(y.default["dES/2r"]), j.intl.string(y.default.ep6mdN)),
                Z = (0, p.y)(j.intl.string(y.default["30+sih"]), j.intl.string(y.default["0cuLn1"])),
                M = (0, p.y)(j.intl.string(y.default.tHTyRh), j.intl.string(y.default.TeNlMb)),
                P = (0, p.y)(j.intl.string(y.default.wZejZr), j.intl.string(y.default.tdgcf1)),
                S = (0, p.y)(j.intl.string(y.default.GWPcQg), j.intl.string(y.default.yFnKIg)),
                z = (0, p.y)(j.intl.string(y.default.PfveQ6), j.intl.string(y.default["f7ofm/"])),
                H = (0, p.y)(j.intl.string(y.default.MKeCj3), j.intl.string(y.default.HdcGGl)),
                _ = (0, p.y)(j.intl.string(y.default.ASf7XN), j.intl.string(y.default["82y87X"])),
                K = (0, p.y)(j.intl.string(y.default["0QDVFN"]), j.intl.string(y.default["1xBHHV"])),
                Q = (0, p.y)(j.intl.string(y.default.zzgr9Q), j.intl.string(y.default["4C8u97"])),
                V = [
                    { key: "friend-add", header: r, description: N, icon: (0, n.jsx)(l.UserPlusIcon, { ...v }) },
                    { key: "guild-participation", header: T, description: E, icon: (0, n.jsx)(d.ServerIcon, { ...v }) },
                    { key: "users-messaged", header: b, description: w, icon: (0, n.jsx)(a.ForumIcon, { ...v }) },
                    { key: "voice-minutes", header: F, description: A, icon: (0, n.jsx)(c.PhoneIcon, { ...v }) },
                    { key: "purchases", header: G, description: X, icon: (0, n.jsx)(o.CreditCardIcon, { ...v }) },
                    {
                        key: "gifts",
                        header: j.intl.string(y.default.Fv3n8L),
                        description: S,
                        icon: (0, n.jsx)(u.GiftIcon, { ...v }),
                    },
                    { key: "reports", header: Z, description: M, icon: (0, n.jsx)(g.FlagIcon, { ...v }) },
                ],
                B = [
                    {
                        key: "screen-time",
                        header: j.intl.string(y.default.kyT6pZ),
                        description: z,
                        icon: (0, n.jsx)(f.ClockIcon, { ...v }),
                    },
                    {
                        key: "spending-cap",
                        header: j.intl.string(y.default["52ld7c"]),
                        description: H,
                        icon: (0, n.jsx)(x.PiggyBankIcon, { ...v }),
                    },
                    {
                        key: "settings",
                        header: j.intl.string(y.default.UCuHM8),
                        description: P,
                        icon: (0, n.jsx)(h.SettingsIcon, { ...v }),
                    },
                ],
                R = [{ key: "excluded-content", header: _, description: K, icon: (0, n.jsx)(m.XSmallIcon, { ...I }) }];
            return (0, n.jsxs)("div", {
                className: k.V0,
                children: [
                    (0, n.jsx)(C, { title: e, description: i ? Q : void 0, prominentTitle: i, rows: V }),
                    (0, n.jsx)(C, {
                        title: j.intl.string(y.default["ksze+o"]),
                        description: i ? j.intl.string(y.default["8m2ROd"]) : void 0,
                        prominentTitle: i,
                        rows: B,
                    }),
                    (0, n.jsx)(C, { title: s, prominentTitle: i, rows: R }),
                ],
            });
        },
    },
);
