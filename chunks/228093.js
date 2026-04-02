"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(481613),
    s = n.n(a),
    o = n(397927),
    u = n(77729),
    c = n(521502),
    d = n(915089),
    h = n(206845),
    f = n(837921),
    m = n(985018),
    p = n(417891);
function _() {
    let e = (0, d.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "522045",
        i = "a82e6b36e79c542554c0235e9e68e4d2be1f9d1a".substring(0, 7),
        a = u.A?.app.getVersion(),
        _ = u.A?.app.getBuildNumber(),
        v = u.A?.app.getAppArch(),
        y = c.A.getCurrentBuildOverride().overrides?.discord_web,
        g = (function () {
            let e = s()?.os?.toString();
            if (null == e || null == u.A) return null;
            let t = u.A.os.release,
                [n, r, i] = f.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        x = [t, n, `(${i})`];
    return (
        null != a && (x.push(`Host ${a}`), null != v && x.push(v.toLowerCase()), null != _ && x.push(`(${_})`)),
        x.push(`Build Override: ${null != y ? y.id : "N/A"}`),
        null != g && x.push(g),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    copyValue: x.join(" "),
                    text: m.intl.string(m.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (s) =>
                        (0, r.jsxs)(o.DUT, {
                            ...s,
                            "aria-describedby": e,
                            className: l()(p.vk, p.oE),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: p.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, r.jsxs)(o.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, r.jsxs)("span", { className: p.Pc, children: ["(", i, ")"] }),
                                            ],
                                        }),
                                        null != a &&
                                            (0, r.jsxs)(o.Text, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    a,
                                                    null != v &&
                                                        (0, r.jsxs)("span", {
                                                            className: p.GI,
                                                            children: [" ", v.toLowerCase()],
                                                        }),
                                                    null != _ && (0, r.jsxs)("span", { children: [" (", _, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != y &&
                                    (0, r.jsx)(o.Text, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: p.Pc,
                                            children: ["Build Override: ", y.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, r.jsx)(o.AC4, { id: e, children: m.intl.string(m.t["9Al4Qd"]) }),
            ],
        })
    );
}
