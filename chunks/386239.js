let r;
l.d(t, { F: () => q, Q4: () => M, W9: () => k });
var n = l(284009),
    s = l.n(n),
    a = l(723702),
    c = l(875538);
let i = new Map(),
    o = new Map(),
    h = new Set();
function u(e) {
    let t = i.get(e);
    if (null != t) return t;
    if (!(e in c.pb)) {
        let t = Promise.resolve(null);
        return i.set(e, t), t;
    }
    return (
        (t = (null == r && (r = (0, c.A)()), r)
            .then((t) => t.loadGrammar(c.pb[e]))
            .then((t) => {
                for (let l of (o.set(e, t), h)) l(e);
                return t;
            })),
        i.set(e, t),
        t
    );
}
var p = l(19575),
    m = l(652215);
let f = "discord_arborium",
    d = null;
async function g() {
    return await p.Ay.ensureModule(f), (d = p.Ay.requireModule(f));
}
function b(e, t) {
    return e.availableLanguages().includes(t)
        ? {
              backend: "native",
              highlightToHtml(l) {
                  let { html: r, missingInjections: n } = e.highlightToHtml(t, l);
                  return { html: r, missingInjections: n };
              },
          }
        : null;
}
function j(e) {
    return e && a.isPlatformEmbedded;
}
function y(e) {
    return {
        backend: "wasm",
        highlightToHtml(t) {
            let l = e.createSession();
            try {
                l.setText(t);
                let { html: e, missingInjections: r } = l.highlightToHtml();
                return { html: e, missingInjections: r };
            } finally {
                l.free();
            }
        },
    };
}
let x = new Map();
async function v(e) {
    let t = await u(e);
    return null != t ? y(t) : null;
}
async function w(e) {
    let t;
    try {
        let l = await g();
        (t = b(l, e)), s()(null != t, "fallback to the WASM highlighter");
    } catch {
        t = await v(e);
    }
    return t;
}
function k(e, t) {
    let l = j(t),
        r = `${l ? "n" : "w"}:${e}`,
        n = x.get(r);
    return (
        null == n &&
            ((n = (n = l ? w(e) : v(e)).catch((e) => {
                throw (x.delete(r), e);
            })),
            x.set(r, n)),
        n
    );
}
function q(e, t) {
    let l;
    if (j(t)) {
        let t = (function () {
            if (null == d)
                try {
                    d = p.Ay.requireModule(f);
                } catch {
                    return g().catch(m.tEg), null;
                }
            return d;
        })();
        if (null != t) {
            let l = b(t, e);
            if (null != l) return l;
        }
    }
    return null != (l = o.has(e) ? (o.get(e) ?? null) : (u(e), null)) ? y(l) : null;
}
function M(e) {
    return h.add(e), () => h.delete(e);
}
