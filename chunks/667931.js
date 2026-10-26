(n.d(t, {
    BF: () => r,
    H$: () => S,
    IE: () => m,
    JQ: () => a,
    N5: () => N,
    Sj: () => b,
    TK: () => d,
    TN: () => E,
    W7: () => y,
    _0: () => h,
    bM: () => o,
    dj: () => l,
    hB: () => p,
    lQ: () => i,
    lp: () => c,
    nF: () => O,
    rQ: () => g,
    vH: () => f,
    wu: () => u,
    x7: () => _,
}),
    n(321073));
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
function o(e) {
    return e.spans.find((e) => null == e.parent) ?? null;
}
function l(e) {
    return Math.max(1, ...e.spans.map((t) => A(e, t)));
}
function i(e) {
    return e.spans.some((e) => null != e.error) || o(e)?.attrs?.ok === !1 || c(e) ? "error" : a(e) ? "ok" : "running";
}
function a(e) {
    return e.spans.every((e) => null != e.end);
}
function c(e) {
    return !e.live && !a(e);
}
function d(e) {
    let t = R(e);
    function n(e) {
        return !t.has(e.id) && null != e.end && null == e.error;
    }
    let r = o(e);
    if (null == r) return null;
    let s = (function r(s, o, l, i) {
            let a = s[0],
                c = Math.min(...s.map((e) => e.start)),
                d = Math.max(...s.map((t) => A(e, t))),
                u = s.map((t) => A(e, t) - t.start),
                p = 1 === s.length ? (t.get(a.id) ?? []) : [],
                h = {
                    key: 1 === s.length ? `span-${a.id}` : `fold-${a.id}`,
                    depth: o,
                    span: a,
                    count: s.length,
                    start: c,
                    end: d,
                    totalMs: u.reduce((e, t) => e + t, 0),
                    maxMs: Math.max(...u),
                    selfMs: d - c - U(e, p, c, d),
                    running: null == a.end,
                    failed: null != a.error,
                    parallel: s.some((t) =>
                        l.some((n) => {
                            var r, o, l;
                            return (
                                !s.includes(n) && ((r = e), (o = t), (l = n), o.start < A(r, l) && l.start < A(r, o))
                            );
                        }),
                    ),
                    outlivedParent: d > i,
                    ...N(a),
                    significant: !1,
                    children: [],
                    descendants: 0,
                },
                _ = new Map();
            for (let e of p) n(e) && _.set(C(e), (_.get(C(e)) ?? 0) + 1);
            let f = new Set();
            for (let e of p) {
                let t = C(e);
                if (n(e) && (_.get(t) ?? 0) >= 4) {
                    if (f.has(t)) continue;
                    f.add(t);
                    let e = p.filter((e) => n(e) && C(e) === t);
                    h.children.push(r(e, o + 1, p, d));
                } else h.children.push(r([e], o + 1, p, d));
            }
            return ((h.descendants = h.children.reduce((e, t) => e + t.count + t.descendants, 0)), h);
        })([r], 0, [], 1 / 0),
        l = 0.1 * (s.end - s.start);
    return (
        w(s, (e) => {
            e.significant = T(e) >= l;
        }),
        s
    );
}
function u(e, t) {
    let n = [];
    return (
        !(function e(r) {
            if ((n.push({ kind: "node", key: r.key, node: r }), t.collapsed.has(r.key))) return;
            let s = t.revealed.has(r.key),
                o = [];
            function l() {
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
                          totalMs: o.reduce((e, t) => e + T(t), 0),
                      }),
                    (o = []));
            }
            for (let t of r.children) s || t.significant ? (l(), e(t)) : o.push(t);
            l();
        })(e),
        n
    );
}
function p(e) {
    return { collapsed: k(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function h(e, t, n) {
    let r = [...p(t).collapsed].filter((e) => !n.has(e));
    return 0 === r.length ? e : { ...e, collapsed: new Set([...e.collapsed, ...r]) };
}
function _(e) {
    let t = new Set();
    return (w(e, (e) => t.add(e.key)), t);
}
function f(e) {
    return { collapsed: new Set(), revealed: k(e, () => !0) };
}
function g(e) {
    return { collapsed: k(e, (e) => e.depth > 0), revealed: new Set() };
}
function E(e, t) {
    if (!e.collapsed.has(t.key)) return { ...e, collapsed: new Set(e.collapsed).add(t.key) };
    let n = new Set(e.collapsed);
    return (
        n.delete(t.key),
        { collapsed: n, revealed: t.children.some((e) => e.significant) ? e.revealed : new Set(e.revealed).add(t.key) }
    );
}
function S(e, t) {
    let n = new Set(e.collapsed),
        r = new Set(e.revealed);
    return (
        w(t, (e) => {
            (n.delete(e.key), r.add(e.key));
        }),
        { collapsed: n, revealed: r }
    );
}
function m(e, t) {
    let n = null;
    return (
        w(e, (e) => {
            e.key === t && (n = e);
        }),
        n
    );
}
function y(e) {
    let t = R(e);
    return new Map(
        e.spans.map((n) => {
            let r = A(e, n);
            return [n.id, r - n.start - U(e, t.get(n.id) ?? [], n.start, r)];
        }),
    );
}
function O(e) {
    let t = e / 6,
        n = 10 ** Math.floor(Math.log10(t)),
        r = [1, 2, 5, 10].map((e) => e * n).find((e) => e >= t) ?? t,
        s = [];
    for (let t = 0; t <= e; t += r) s.push(t);
    return s;
}
function b(e) {
    return null == e
        ? ""
        : Object.entries(e)
              .map((e) => {
                  let [t, n] = e;
                  return !0 === n ? t : `${t}=${String(n)}`;
              })
              .join(" ");
}
function T(e) {
    return e.count > 1 ? e.totalMs : e.end - e.start;
}
function w(e, t) {
    for (let n of (t(e), e.children)) w(n, t);
}
function N(e) {
    let t = e.name.search(/[.:]/),
        n = -1 === t ? e.name : e.name.slice(0, t),
        r = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        o = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: n,
        operation: "string" == typeof o && "" !== o ? `${r} \xb7 ${o}` : r,
        category: s[n] ?? "other",
    };
}
function k(e, t) {
    let n = new Set();
    return (
        !(function e(r) {
            for (let s of (r.children.length > 0 && t(r) && n.add(r.key), r.children)) e(s);
        })(e),
        n
    );
}
function C(e) {
    return `${e.name} ${b(e.attrs)}`;
}
function R(e) {
    let t = new Map();
    for (let n of e.spans) {
        let e = t.get(n.parent) ?? [];
        (e.push(n), t.set(n.parent, e));
    }
    for (let e of t.values()) e.sort((e, t) => e.start - t.start);
    return t;
}
function A(e, t) {
    return t.end ?? e.as_of;
}
function U(e, t, n, r) {
    let s = t
            .map((t) => [Math.max(t.start, n), Math.min(A(e, t), r)])
            .filter((e) => {
                let [t, n] = e;
                return n > t;
            })
            .sort((e, t) => e[0] - t[0]),
        o = 0,
        l = -1 / 0;
    for (let [e, t] of s) t <= l || ((o += t - Math.max(e, l)), (l = t));
    return o;
}
