n(321073);
let r = 221552 == n.j ? ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"] : null,
    s =
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
function i(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function o(e) {
    return e.spans.every((e) => null != e.end);
}
function l(e) {
    return !e.live && !o(e);
}
function a(e) {
    return { collapsed: h(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function c(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, n] = e;
                  return !0 === n ? t : `${t}=${String(n)}`;
              })
              .join(" ");
}
function d(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function u(e, t) {
    for (let n of (t(e), e.children)) u(n, t);
}
function p(e) {
    let t = e.name.search(/[.:]/),
        n = -1 === t ? e.name : e.name.slice(0, t),
        r = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        i = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: n,
        operation: "string" == typeof i && "" !== i ? `${r} \xb7 ${i}` : r,
        category: s[n] ?? "other",
    };
}
function h(e, t) {
    let n = new Set();
    return (
        !(function e(r) {
            for (let s of (r.children.length > 0 && t(r) && n.add(r.key), r.children)) e(s);
        })(e),
        n
    );
}
function _(e) {
    return `${e.name} ${c(e.attrs)}`;
}
function f(e) {
    let t = new Map();
    for (let n of e.spans) {
        let e = t.get(n.parent) ?? [];
        (e.push(n), t.set(n.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function g(e, t) {
    return t.end ?? e.as_of;
}
function E(e, t, n, r) {
    let s = t
            .map((t) => [Math.max(t.start, n), Math.min(g(e, t), r)])
            .filter((e) => {
                let [t, n] = e;
                return n > t;
            })
            .sort((e, t) => e[0] - t[0]),
        i = 0,
        o = -1 / 0;
    for (let [e, t] of s) t <= o || ((i += t - Math.max(e, o)), (o = t));
    return i;
}
n.d(
    t,
    {},
    {
        BF: r,
        H$: function (e, t) {
            let n = new Set(e.collapsed),
                r = new Set(e.revealed);
            return (
                u(t, (e) => {
                    (n.delete(e.key), r.add(e.key));
                }),
                { collapsed: n, revealed: r }
            );
        },
        IE: function (e, t) {
            let n = null;
            return (
                u(e, (e) => {
                    e.key === t && (n = e);
                }),
                n
            );
        },
        JQ: o,
        N5: p,
        Sj: c,
        TK: function (e) {
            let t = f(e);
            function n(e) {
                return !t.has(e.id) && null != e.end && null == e.error;
            }
            let r = i(e);
            if (null == r) return null;
            let s = (function r(s, i, o, l) {
                    let a = s[0],
                        c = Math.min(...s.map((e) => e.start)),
                        d = Math.max(...s.map((t) => g(e, t))),
                        u = s.map((t) => g(e, t) - t.start),
                        h = 1 === s.length ? (t.get(a.id) ?? []) : [],
                        f = {
                            key: 1 === s.length ? `span-${a.id}` : `fold-${a.id}`,
                            depth: i,
                            span: a,
                            count: s.length,
                            start: c,
                            end: d,
                            totalMs: u.reduce((e, t) => e + t, 0),
                            maxMs: Math.max(...u),
                            selfMs: d - c - E(e, h, c, d),
                            running: null == a.end,
                            failed: null != a.error,
                            parallel: s.some((t) =>
                                o.some((n) => {
                                    var r, i, o;
                                    return (
                                        !s.includes(n) &&
                                        ((r = e), (i = t), (o = n), i.start < g(r, o) && o.start < g(r, i))
                                    );
                                }),
                            ),
                            outlivedParent: d > l,
                            ...p(a),
                            significant: !1,
                            children: [],
                            descendants: 0,
                        },
                        S = new Map();
                    for (let e of h) n(e) && S.set(_(e), (S.get(_(e)) ?? 0) + 1);
                    let m = new Set();
                    for (let e of h) {
                        let t = _(e);
                        if (n(e) && (S.get(t) ?? 0) >= 4) {
                            if (m.has(t)) continue;
                            m.add(t);
                            let e = h.filter((e) => n(e) && _(e) === t);
                            f.children.push(r(e, i + 1, h, d));
                        } else f.children.push(r([e], i + 1, h, d));
                    }
                    return ((f.descendants = f.children.reduce((e, t) => e + t.count + t.descendants, 0)), f);
                })([r], 0, [], 1 / 0),
                o = 0.1 * (s.end - s.start);
            return (
                u(s, (e) => {
                    e.significant = d(e) >= o;
                }),
                s
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
            let t = f(e);
            return new Map(
                e.spans.map((n) => {
                    let r = g(e, n);
                    return [n.id, r - n.start - E(e, t.get(n.id) ?? [], n.start, r)];
                }),
            );
        },
        _0: function (e, t, n) {
            let r = [...a(t).collapsed].filter((e) => !n.has(e));
            return 0 === r.length ? e : { ...e, collapsed: new Set([...e.collapsed, ...r]) };
        },
        bM: i,
        dj: function (e) {
            return Math.max(1, ...e.spans.map((t) => g(e, t)));
        },
        hB: a,
        lQ: function (e) {
            return e.spans.some((e) => null != e.error) || i(e)?.attrs?.ok === !1 || l(e)
                ? "error"
                : o(e)
                  ? "ok"
                  : "running";
        },
        lp: l,
        nF: function (e) {
            let t = e / 6,
                n = 10 ** Math.floor(Math.log10(t)),
                r = [1, 2, 5, 10].map((e) => e * n).find((e) => e >= t) ?? t,
                s = [];
            for (let t = 0; t <= e; t += r) s.push(t);
            return s;
        },
        rQ: function (e) {
            return { collapsed: h(e, (e) => e.depth > 0), revealed: new Set() };
        },
        vH: function (e) {
            return { collapsed: new Set(), revealed: h(e, () => !0) };
        },
        wu: function (e, t) {
            let n = [];
            return (
                !(function e(r) {
                    if ((n.push({ kind: "node", key: r.key, node: r }), t.collapsed.has(r.key))) return;
                    let s = t.revealed.has(r.key),
                        i = [];
                    function o() {
                        (1 === i.length
                            ? e(i[0])
                            : i.length > 1 &&
                              n.push({
                                  kind: "smaller",
                                  key: `smaller-${i[0].key}`,
                                  parentKey: r.key,
                                  depth: r.depth + 1,
                                  count: i.reduce((e, t) => e + t.count, 0),
                                  start: Math.min(...i.map((e) => e.start)),
                                  end: Math.max(...i.map((e) => e.end)),
                                  totalMs: i.reduce((e, t) => e + d(t), 0),
                              }),
                            (i = []));
                    }
                    for (let t of r.children) s || t.significant ? (o(), e(t)) : i.push(t);
                    o();
                })(e),
                n
            );
        },
        x7: function (e) {
            let t = new Set();
            return (u(e, (e) => t.add(e.key)), t);
        },
    },
);
