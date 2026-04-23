"use strict";
n.d(t, { F: () => b });
var r = n(756813),
    i = n(69171),
    o = n(35086),
    a = n(933138),
    s = n(823783),
    l = n(688331),
    c = n(630449),
    u = n(984083),
    d = n(231577),
    p = n(272469),
    h = n(693037),
    f = n(196010),
    m = n(826476);
function g(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
var _ = n(791132),
    y = n(607423),
    v = n(804524);
let b = (0, l._C)((e = {}) => {
    let t = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e };
    return {
        name: "Breadcrumbs",
        setup(e) {
            var n, l, b, w, S, E, k;
            t.console &&
                (0, a.P)(
                    ((n = e),
                    function (e) {
                        if ((0, c.KU)() !== n) return;
                        let t = {
                            category: "console",
                            data: { arguments: e.args, logger: "console" },
                            level: (0, f.t)(e.level),
                            message: (0, m.gt)(e.args, " "),
                        };
                        if ("assert" === e.level)
                            if (!1 !== e.args[0]) return;
                            else
                                (t.message = `Assertion failed: ${((0, m.gt))(e.args.slice(1), " ") || "console.assert"}`),
                                    (t.data.arguments = e.args.slice(1));
                        (0, u.Z)(t, { input: e.args, level: e.level });
                    }),
                ),
                t.dom &&
                    (0, r.i)(
                        ((l = e),
                        (b = t.dom),
                        function (e) {
                            let t, n;
                            if ((0, c.KU)() !== l) return;
                            let r = "object" == typeof b ? b.serializeAttribute : void 0,
                                i =
                                    "object" == typeof b && "number" == typeof b.maxStringLength
                                        ? b.maxStringLength
                                        : void 0;
                            i &&
                                i > 1024 &&
                                (y.T &&
                                    p.vF.warn(
                                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`,
                                    ),
                                (i = 1024)),
                                "string" == typeof r && (r = [r]);
                            try {
                                var o;
                                let a = e.event,
                                    s = (o = a) && o.target ? a.target : a;
                                (t = (0, h.Hd)(s, { keyAttrs: r, maxStringLength: i })), (n = (0, h.xE)(s));
                            } catch (e) {
                                t = "<unknown>";
                            }
                            if (0 === t.length) return;
                            let a = { category: `ui.${e.name}`, message: t };
                            n && (a.data = { "ui.component_name": n }),
                                (0, u.Z)(a, { event: e.event, name: e.name, global: e.global });
                        }),
                    ),
                t.xhr &&
                    (0, i.Mn)(
                        ((w = e),
                        function (e) {
                            if ((0, c.KU)() !== w) return;
                            let { startTimestamp: t, endTimestamp: n } = e,
                                r = e.xhr[i.Er];
                            if (!t || !n || !r) return;
                            let { method: o, url: a, status_code: s, body: l } = r,
                                d = { xhr: e.xhr, input: l, startTimestamp: t, endTimestamp: n },
                                p = g(s);
                            (0, u.Z)(
                                {
                                    category: "xhr",
                                    data: { method: o, url: a, status_code: s },
                                    type: "http",
                                    level: p,
                                },
                                d,
                            );
                        }),
                    ),
                t.fetch &&
                    (0, s.ur)(
                        ((S = e),
                        function (e) {
                            if ((0, c.KU)() !== S) return;
                            let { startTimestamp: t, endTimestamp: n } = e;
                            if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                                if (e.error) {
                                    let r = e.fetchData,
                                        i = { data: e.error, input: e.args, startTimestamp: t, endTimestamp: n };
                                    (0, u.Z)({ category: "fetch", data: r, level: "error", type: "http" }, i);
                                } else {
                                    let r = e.response,
                                        i = { ...e.fetchData, status_code: r && r.status },
                                        o = { input: e.args, response: r, startTimestamp: t, endTimestamp: n },
                                        a = g(i.status_code);
                                    (0, u.Z)({ category: "fetch", data: i, type: "http", level: a }, o);
                                }
                        }),
                    ),
                t.history &&
                    (0, o._)(
                        ((E = e),
                        function (e) {
                            if ((0, c.KU)() !== E) return;
                            let t = e.from,
                                n = e.to,
                                r = (0, _.Dl)(v.jf.location.href),
                                i = t ? (0, _.Dl)(t) : void 0,
                                o = (0, _.Dl)(n);
                            (i && i.path) || (i = r),
                                r.protocol === o.protocol && r.host === o.host && (n = o.relative),
                                r.protocol === i.protocol && r.host === i.host && (t = i.relative),
                                (0, u.Z)({ category: "navigation", data: { from: t, to: n } });
                        }),
                    ),
                t.sentry &&
                    e.on(
                        "beforeSendEvent",
                        ((k = e),
                        function (e) {
                            (0, c.KU)() === k &&
                                (0, u.Z)(
                                    {
                                        category: `sentry.${"transaction" === e.type ? "transaction" : "event"}`,
                                        event_id: e.event_id,
                                        level: e.level,
                                        message: (0, d.$X)(e),
                                    },
                                    { event: e },
                                );
                        }),
                    );
        },
    };
});
