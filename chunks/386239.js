"use strict";
let i;
n.d(t, { F: () => C, Q4: () => O, W9: () => N });
var r = n(284009),
    a = n.n(r),
    s = n(723702),
    l = n(534979);
let o = new Map(),
    d = new Map(),
    c = new Set();
function u(e) {
    let t = o.get(e);
    if (null != t) return t;
    if (!(e in l.pb)) {
        let t = Promise.resolve(null);
        return o.set(e, t), t;
    }
    return (
        (t = (null == i && (i = (0, l.A)()), i)
            .then((t) => t.loadGrammar(l.pb[e]))
            .then((t) => {
                for (let n of (d.set(e, t), c)) n(e);
                return t;
            })),
        o.set(e, t),
        t
    );
}
var _ = n(19575),
    E = n(652215);
let A = "discord_arborium",
    h = null;
async function I() {
    return await _.Ay.ensureModule(A), (h = _.Ay.requireModule(A));
}
function f(e, t) {
    return e.availableLanguages().includes(t)
        ? {
              backend: "native",
              highlightToHtml(n) {
                  let { html: i, missingInjections: r } = e.highlightToHtml(t, n);
                  return { html: i, missingInjections: r };
              },
          }
        : null;
}
function p(e) {
    return e && s.isPlatformEmbedded;
}
function T(e) {
    return {
        backend: "wasm",
        highlightToHtml(t) {
            let n = e.createSession();
            try {
                n.setText(t);
                let { html: e, missingInjections: i } = n.highlightToHtml();
                return { html: e, missingInjections: i };
            } finally {
                n.free();
            }
        },
    };
}
let m = new Map();
async function g(e) {
    let t = await u(e);
    return null != t ? T(t) : null;
}
async function S(e) {
    let t;
    try {
        let n = await I();
        (t = f(n, e)), a()(null != t, "fallback to the WASM highlighter");
    } catch {
        t = await g(e);
    }
    return t;
}
function N(e, t) {
    let n = p(t),
        i = `${n ? "n" : "w"}:${e}`,
        r = m.get(i);
    return (
        null == r &&
            ((r = (r = n ? S(e) : g(e)).catch((e) => {
                throw (m.delete(i), e);
            })),
            m.set(i, r)),
        r
    );
}
function C(e, t) {
    let n;
    if (p(t)) {
        let t = (function () {
            if (null == h)
                try {
                    h = _.Ay.requireModule(A);
                } catch {
                    return I().catch(E.tEg), null;
                }
            return h;
        })();
        if (null == t) return null;
        let n = f(t, e);
        if (null != n) return n;
    }
    return null != (n = d.has(e) ? (d.get(e) ?? null) : (u(e), null)) ? T(n) : null;
}
function O(e) {
    return c.add(e), () => c.delete(e);
}
