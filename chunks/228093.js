"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(481613),
    s = n.n(l),
    o = n(939249),
    c = n(834730),
    u = n(140735),
    d = n(77729),
    _ = n(521502),
    h = n(915089),
    p = n(206845),
    f = n(837921),
    m = n(985018),
    g = n(551188);
function E() {
    let e = (0, h.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "533526",
        i = "02d3782202dab7e2e9586fba1258789923f7aeb7".substring(0, 7),
        l = d.A?.app.getVersion(),
        E = d.A?.app.getBuildNumber(),
        v = d.A?.app.getAppArch(),
        y = _.A.getCurrentBuildOverride().overrides?.discord_web,
        A = (function () {
            let e = s()?.os?.toString();
            if (null == e || null == d.A) return null;
            let t = d.A.os.release,
                [n, r, i] = f.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        S = [t, n, `(${i})`];
    return (
        null != l && (S.push(`Host ${l}`), null != v && S.push(v.toLowerCase()), null != E && S.push(`(${E})`)),
        S.push(`Build Override: ${null != y ? y.id : "N/A"}`),
        null != A && S.push(A),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.A, {
                    copyValue: S.join(" "),
                    text: m.intl.string(m.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (s) =>
                        (0, r.jsxs)(o.D, {
                            ...s,
                            "aria-describedby": e,
                            className: a()(g.vk, g.oE),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: g.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, r.jsxs)(c.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, r.jsxs)("span", { className: g.Pc, children: ["(", i, ")"] }),
                                            ],
                                        }),
                                        null != l &&
                                            (0, r.jsxs)(c.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    l,
                                                    null != v &&
                                                        (0, r.jsxs)("span", {
                                                            className: g.GI,
                                                            children: [" ", v.toLowerCase()],
                                                        }),
                                                    null != E && (0, r.jsxs)("span", { children: [" (", E, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != y &&
                                    (0, r.jsx)(c.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: g.Pc,
                                            children: ["Build Override: ", y.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, r.jsx)(u.A, { id: e, children: m.intl.string(m.t["9Al4Qd"]) }),
            ],
        })
    );
}
