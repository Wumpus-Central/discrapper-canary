"use strict";
n.d(t, { A: () => b }), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(481613),
    l = n.n(s),
    o = n(939249),
    c = n(834730),
    u = n(140735),
    d = n(77729),
    _ = n(521502),
    f = n(915089),
    h = n(206845),
    p = n(837921),
    m = n(985018),
    g = n(551188);
function b() {
    let e = (0, f.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "534149",
        i = "c1ea4d003c39d60d1cfe1080be064091929ac58f".substring(0, 7),
        s = d.A?.app.getVersion(),
        b = d.A?.app.getBuildNumber(),
        v = d.A?.app.getAppArch(),
        E = _.A.getCurrentBuildOverride().overrides?.discord_web,
        y = (function () {
            let e = l()?.os?.toString();
            if (null == e || null == d.A) return null;
            let t = d.A.os.release,
                [n, r, i] = p.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        A = [t, n, `(${i})`];
    return (
        null != s && (A.push(`Host ${s}`), null != v && A.push(v.toLowerCase()), null != b && A.push(`(${b})`)),
        A.push(`Build Override: ${null != E ? E.id : "N/A"}`),
        null != y && A.push(y),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    copyValue: A.join(" "),
                    text: m.intl.string(m.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (l) =>
                        (0, r.jsxs)(o.D, {
                            ...l,
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
                                        null != s &&
                                            (0, r.jsxs)(c.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    s,
                                                    null != v &&
                                                        (0, r.jsxs)("span", {
                                                            className: g.GI,
                                                            children: [" ", v.toLowerCase()],
                                                        }),
                                                    null != b && (0, r.jsxs)("span", { children: [" (", b, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != E &&
                                    (0, r.jsx)(c.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: g.Pc,
                                            children: ["Build Override: ", E.id],
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
