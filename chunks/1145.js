var r = l(635377),
    s = l.n(r),
    n = l(236572);
function a(e) {
    return (t) => {
        try {
            return e(t);
        } catch (e) {
            throw (e instanceof WebAssembly.RuntimeError && (o.clear(), (0, n.W6)()), e);
        }
    };
}
function i(e) {
    return {
        highlightToSpans: a((t) => {
            let l = e.createSession();
            try {
                l.setText(
                    t.endsWith("\n")
                        ? t
                        : `${t}
`,
                );
                let { spans: e, missingInjections: r } = l.highlightToSpans();
                return { spans: e, missingInjections: r.sort() };
            } finally {
                l.free();
            }
        }),
        highlightToHtml: a((t) => {
            let l = e.createSession();
            try {
                l.setText(
                    t.endsWith("\n")
                        ? t
                        : `${t}
`,
                );
                let { html: e, missingInjections: r } = l.highlightToHtml();
                return { html: e, missingInjections: r.sort() };
            } finally {
                l.free();
            }
        }),
    };
}
let o = new Map();
function c(e) {
    let t = o.get(e);
    return (
        null == t &&
            ((t = (async function (e) {
                try {
                    let t = await (0, n.k3)(e);
                    return null == t ? null : i(t);
                } catch {
                    return null;
                }
            })(e)),
            o.set(e, t)),
        t
    );
}
l.d(
    t,
    {},
    {
        $z: function (e) {
            return Promise.all(Array.from(e, c)).then((e) => e.some((e) => null != e));
        },
        F: function (e) {
            let t = (0, n.vo)(e);
            return null != t ? i(t) : null;
        },
        Gn: function () {
            let e = new (s())({ max: 256 });
            return (t) => {
                let l = e.get(t) ?? 0;
                return !(l >= 3) && (e.set(t, l + 1), !0);
            };
        },
        Q4: function (e) {
            return (0, n.gf)(e);
        },
        W9: c,
    },
);
