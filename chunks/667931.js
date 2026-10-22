(n.d(t, {
    BF: () => s,
    H$: () => S,
    IE: () => m,
    JQ: () => a,
    N5: () => N,
    Sj: () => b,
    TK: () => d,
    TN: () => E,
    W7: () => O,
    _0: () => h,
    bM: () => o,
    dj: () => i,
    hB: () => p,
    lQ: () => l,
    lp: () => c,
    nF: () => y,
    rQ: () => g,
    vH: () => f,
    wu: () => u,
    x7: () => _,
}),
    n(321073));
let s = 221552 == n.j ? ["op", "model", "tool", "setup", "worktree", "sandbox", "build", "platform", "other"] : null,
    r =
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
function i(e) {
    return Math.max(1, ...e.spans.map((t) => A(e, t)));
}
function l(e) {
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
    let s = o(e);
    if (null == s) return null;
    let r = (function s(r, o, i, l) {
            let a = r[0],
                c = Math.min(...r.map((e) => e.start)),
                d = Math.max(...r.map((t) => A(e, t))),
                u = r.map((t) => A(e, t) - t.start),
                p = 1 === r.length ? (t.get(a.id) ?? []) : [],
                h = {
                    key: 1 === r.length ? `span-${a.id}` : `fold-${a.id}`,
                    depth: o,
                    span: a,
                    count: r.length,
                    start: c,
                    end: d,
                    totalMs: u.reduce((e, t) => e + t, 0),
                    maxMs: Math.max(...u),
                    selfMs: d - c - U(e, p, c, d),
                    running: null == a.end,
                    failed: null != a.error,
                    parallel: r.some((t) =>
                        i.some((n) => {
                            var s, o, i;
                            return (
                                !r.includes(n) && ((s = e), (o = t), (i = n), o.start < A(s, i) && i.start < A(s, o))
                            );
                        }),
                    ),
                    outlivedParent: d > l,
                    ...N(a),
                    significant: !1,
                    children: [],
                    descendants: 0,
                },
                _ = new Map();
            for (let e of p) n(e) && _.set(k(e), (_.get(k(e)) ?? 0) + 1);
            let f = new Set();
            for (let e of p) {
                let t = k(e);
                if (n(e) && (_.get(t) ?? 0) >= 4) {
                    if (f.has(t)) continue;
                    f.add(t);
                    let e = p.filter((e) => n(e) && k(e) === t);
                    h.children.push(s(e, o + 1, p, d));
                } else h.children.push(s([e], o + 1, p, d));
            }
            return ((h.descendants = h.children.reduce((e, t) => e + t.count + t.descendants, 0)), h);
        })([s], 0, [], 1 / 0),
        i = 0.1 * (r.end - r.start);
    return (
        w(r, (e) => {
            e.significant = T(e) >= i;
        }),
        r
    );
}
function u(e, t) {
    let n = [];
    return (
        !(function e(s) {
            if ((n.push({ kind: "node", key: s.key, node: s }), t.collapsed.has(s.key))) return;
            let r = t.revealed.has(s.key),
                o = [];
            function i() {
                (1 === o.length
                    ? e(o[0])
                    : o.length > 1 &&
                      n.push({
                          kind: "smaller",
                          key: `smaller-${o[0].key}`,
                          parentKey: s.key,
                          depth: s.depth + 1,
                          count: o.reduce((e, t) => e + t.count, 0),
                          start: Math.min(...o.map((e) => e.start)),
                          end: Math.max(...o.map((e) => e.end)),
                          totalMs: o.reduce((e, t) => e + T(t), 0),
                      }),
                    (o = []));
            }
            for (let t of s.children) r || t.significant ? (i(), e(t)) : o.push(t);
            i();
        })(e),
        n
    );
}
function p(e) {
    return { collapsed: C(e, (e) => e.depth > 0 && !e.children.some((e) => e.significant)), revealed: new Set() };
}
function h(e, t, n) {
    let s = [...p(t).collapsed].filter((e) => !n.has(e));
    return 0 === s.length ? e : { ...e, collapsed: new Set([...e.collapsed, ...s]) };
}
function _(e) {
    let t = new Set();
    return (w(e, (e) => t.add(e.key)), t);
}
function f(e) {
    return { collapsed: new Set(), revealed: C(e, () => !0) };
}
function g(e) {
    return { collapsed: C(e, (e) => e.depth > 0), revealed: new Set() };
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
        s = new Set(e.revealed);
    return (
        w(t, (e) => {
            (n.delete(e.key), s.add(e.key));
        }),
        { collapsed: n, revealed: s }
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
function O(e) {
    let t = R(e);
    return new Map(
        e.spans.map((n) => {
            let s = A(e, n);
            return [n.id, s - n.start - U(e, t.get(n.id) ?? [], n.start, s)];
        }),
    );
}
function y(e) {
    let t = e / 6,
        n = 10 ** Math.floor(Math.log10(t)),
        s = [1, 2, 5, 10].map((e) => e * n).find((e) => e >= t) ?? t,
        r = [];
    for (let t = 0; t <= e; t += s) r.push(t);
    return r;
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
        s = (-1 === t ? "" : e.name.slice(t + 1))
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .toLowerCase(),
        o = e.attrs?.cmd ?? e.attrs?.model;
    return {
        service: n,
        operation: "string" == typeof o && "" !== o ? `${s} \xb7 ${o}` : s,
        category: r[n] ?? "other",
    };
}
function C(e, t) {
    let n = new Set();
    return (
        !(function e(s) {
            for (let r of (s.children.length > 0 && t(s) && n.add(s.key), s.children)) e(r);
        })(e),
        n
    );
}
function k(e) {
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
function U(e, t, n, s) {
    let r = t
            .map((t) => [Math.max(t.start, n), Math.min(A(e, t), s)])
            .filter((e) => {
                let [t, n] = e;
                return n > t;
            })
            .sort((e, t) => e[0] - t[0]),
        o = 0,
        i = -1 / 0;
    for (let [e, t] of r) t <= i || ((o += t - Math.max(e, i)), (i = t));
    return o;
}
