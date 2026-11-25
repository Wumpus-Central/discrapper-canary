n(321073);
var r = n(165363);
let s = 221552 == n.j ? r.l : null,
    o = 221552 == n.j ? ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"] : null,
    i =
        221552 == n.j
            ? {
                  op: "op",
                  ws: "op",
                  turn: "op",
                  alarm: "op",
                  side_chat: "op",
                  session: "op",
                  step: "op",
                  model: "model",
                  version_note: "model",
                  tool: "tool",
                  mcp: "tool",
                  sandbox: "sandbox",
                  worktree: "worktree",
                  build: "build",
                  deps: "build",
                  api: "platform",
                  state: "platform",
                  publish: "platform",
                  preview: "platform",
                  healthcheck: "platform",
                  usage: "platform",
                  live: "platform",
                  replay: "platform",
                  launch: "op",
                  request: "platform",
                  template: "setup",
                  workspace: "setup",
                  declarations: "setup",
                  manifest: "setup",
                  storage: "setup",
                  conversation: "setup",
                  runtime: "setup",
                  attachments: "setup",
                  upstream: "setup",
                  remix: "setup",
                  repo: "setup",
              }
            : null;
function l(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function a(e) {
    return e.spans.every((e) => null != e.end);
}
function c(e) {
    return !e.live && !a(e);
}
function d(e) {
    return { collapsed: f(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function u(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, n] = e;
                  return !0 === n ? t : `${t}=${String(n)}`;
              })
              .join(" ");
}
function p(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function h(e, t) {
    for (let n of (t(e), e.children)) h(n, t);
}
function _(e) {
    let t = e.name.search(/[.:]/),
        n = -1 === t ? e.name : e.name.slice(0, t),
        r = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        s = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: n,
        operation: "string" == typeof s && "" !== s ? `${r} \xb7 ${s}` : r,
        category: i[n] ?? "other",
    };
}
function f(e, t) {
    let n = new Set();
    return (
        !(function e(r) {
            for (let s of (r.children.length > 0 && t(r) && n.add(r.key), r.children)) e(s);
        })(e),
        n
    );
}
function g(e) {
    return `${e.name} ${u(e.attrs)}`;
}
function E(e) {
    let t = new Map();
    for (let n of e.spans) {
        let e = t.get(n.parent) ?? [];
        (e.push(n), t.set(n.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function S(e, t) {
    return t.end ?? e.as_of;
}
function m(e, t, n, r) {
    let s = t
            .map((t) => [Math.max(t.start, n), Math.min(S(e, t), r)])
            .filter((e) => {
                let [t, n] = e;
                return n > t;
            })
            .sort((e, t) => e[0] - t[0]),
        o = 0,
        i = -1 / 0;
    for (let [e, t] of s) t <= i || ((o += t - Math.max(e, i)), (i = t));
    return o;
}
n.d(
    t,
    {},
    {
        BF: o,
        H$: function (e, t) {
            let n = new Set(e.collapsed),
                r = new Set(e.revealed);
            return (
                h(t, (e) => {
                    (n.delete(e.key), r.add(e.key));
                }),
                { collapsed: n, revealed: r }
            );
        },
        IE: function (e, t) {
            let n = null;
            return (
                h(e, (e) => {
                    e.key === t && (n = e);
                }),
                n
            );
        },
        JQ: a,
        N5: _,
        Sj: u,
        TK: function (e) {
            let t = E(e);
            function n(e) {
                return !t.has(e.id) && null != e.end && null == e.error;
            }
            let r = l(e);
            if (null == r) return null;
            let o = (function r(o, i, l, a) {
                    let c = o[0],
                        d = Math.min(...o.map((e) => e.start)),
                        u = Math.max(...o.map((t) => S(e, t))),
                        p = o.map((t) => S(e, t) - t.start),
                        h = 1 === o.length ? (t.get(c.id) ?? []) : [],
                        f = 1 === o.length && s.has(c.name),
                        E = {
                            key: 1 === o.length ? `span-${c.id}` : `fold-${c.id}`,
                            depth: i,
                            span: c,
                            count: o.length,
                            start: d,
                            end: u,
                            totalMs: p.reduce((e, t) => e + t, 0),
                            maxMs: Math.max(...p),
                            selfMs: u - d - m(e, h, d, u),
                            running: null == c.end,
                            failed: null != c.error,
                            parallel: o.some((t) =>
                                l.some((n) => {
                                    var r, s, i;
                                    return (
                                        !o.includes(n) &&
                                        ((r = e), (s = t), (i = n), s.start < S(r, i) && i.start < S(r, s))
                                    );
                                }),
                            ),
                            outlivedParent: u > a,
                            ..._(c),
                            significant: !1,
                            marker: f,
                            children: [],
                            descendants: 0,
                        },
                        y = new Map();
                    for (let e of h) n(e) && y.set(g(e), (y.get(g(e)) ?? 0) + 1);
                    let T = new Set(),
                        O = E.marker ? 1 / 0 : u;
                    for (let e of h) {
                        let t = g(e);
                        if (n(e) && (y.get(t) ?? 0) >= 4) {
                            if (T.has(t)) continue;
                            T.add(t);
                            let e = h.filter((e) => n(e) && g(e) === t);
                            E.children.push(r(e, i + 1, h, O));
                        } else E.children.push(r([e], i + 1, h, O));
                    }
                    return ((E.descendants = E.children.reduce((e, t) => e + t.count + t.descendants, 0)), E);
                })([r], 0, [], 1 / 0),
                i = 0.1 * (o.end - o.start);
            return (
                h(o, (e) => {
                    e.significant = e.marker || p(e) >= i;
                }),
                o
            );
        },
        TN: function (e, t) {
            if (!e.collapsed.has(t.key)) return { ...e, collapsed: new Set(e.collapsed).add(t.key) };
            let n = new Set(e.collapsed);
            return (
                n.delete(t.key),
                {
                    collapsed: n,
                    revealed: t.children.some((e) => e.significant) ? e.revealed : new Set(e.revealed).add(t.key),
                }
            );
        },
        W7: function (e) {
            let t = E(e);
            return new Map(
                e.spans.map((n) => {
                    let r = S(e, n);
                    return [n.id, r - n.start - m(e, t.get(n.id) ?? [], n.start, r)];
                }),
            );
        },
        _0: function (e, t, n) {
            let r = [...d(t).collapsed].filter((e) => !n.has(e));
            return 0 === r.length ? e : { ...e, collapsed: new Set([...e.collapsed, ...r]) };
        },
        bM: l,
        dj: function (e) {
            return Math.max(1, ...e.spans.map((t) => S(e, t)));
        },
        hB: d,
        lQ: function (e) {
            return e.spans.some((e) => null != e.error) || l(e)?.attrs?.ok === !1 || c(e)
                ? "error"
                : a(e)
                  ? "ok"
                  : "running";
        },
        lp: c,
        nF: function (e) {
            let t = e / 6,
                n = 10 ** Math.floor(Math.log10(t)),
                r = [1, 2, 5, 10].map((e) => e * n).find((e) => e >= t) ?? t,
                s = [];
            for (let t = 0; t <= e; t += r) s.push(t);
            return s;
        },
        rQ: function (e) {
            return { collapsed: f(e, (e) => e.depth > 0), revealed: new Set() };
        },
        vH: function (e) {
            return { collapsed: new Set(), revealed: f(e, () => !0) };
        },
        wu: function (e, t) {
            let n = [];
            return (
                !(function e(r) {
                    if ((n.push({ kind: "node", key: r.key, node: r }), t.collapsed.has(r.key))) return;
                    let s = t.revealed.has(r.key),
                        o = [];
                    function i() {
                        (1 === o.length
                            ? e(o[0])
                            : o.length > 1 &&
                              n.push({
                                  kind: "smaller",
                                  key: `smaller-${o[0].key}`,
                                  parentKey: r.key,
                                  depth: r.depth + 1,
                                  count: o.reduce((e, t) => e + t.count, 0),
                                  start: Math.min(...o.map((e) => e.start)),
                                  end: Math.max(...o.map((e) => e.end)),
                                  totalMs: o.reduce((e, t) => e + p(t), 0),
                              }),
                            (o = []));
                    }
                    for (let t of r.children) s || t.significant ? (i(), e(t)) : o.push(t);
                    i();
                })(e),
                n
            );
        },
        x7: function (e) {
            let t = new Set();
            return (h(e, (e) => t.add(e.key)), t);
        },
    },
);
