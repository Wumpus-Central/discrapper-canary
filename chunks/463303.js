let r, i;
n.d(t, {
    I4: () => m,
    Zs: () => h,
}),
    n(896048),
    n(747238),
    n(812715);
var a = n(424899),
    s = n.n(a),
    o = n(280230),
    l = n.n(o),
    c = n(473598),
    u = n(906049);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f {
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [t, n] = this.getContext(e);
        return r(this.intlMessage.format(t), t, n);
    }
    astFormat(e) {
        let [t, n] = this.getContext(e);
        return i(this.intlMessage.format(t), t, n);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let t = e,
            n = u.N6.test(this.message),
            r = {};
        if (n) {
            let e = 0;
            for (let [n, i] of Object.entries(t))
                this.message.includes("!!{".concat(n, "}!!")) && ((r[++e] = i), (t[n] = e));
        }
        return [t, r];
    }
    constructor(e, t, n) {
        d(this, "message", void 0),
            d(this, "hasMarkdown", void 0),
            d(this, "intlMessage", void 0),
            (this.message = n ? e : e.replace(u.jx, "")),
            (this.hasMarkdown = n),
            (this.intlMessage = new (s())(this.message, t));
    }
}

function p(e, t) {
    let n = l().parserFor(t(e)),
        r = l().reactFor(l().ruleOutput(e, "react"));
    return (e, t, i) => {
        let a = !e.includes("\n\n");
        return (
            a || (e += "\n\n"),
            r(
                n(e, {
                    inline: a,
                    context: t,
                    unsafeContext: i,
                }),
            )
        );
    };
}

function _(e) {
    let t = l().parserFor(e);
    return (e, n, r) =>
        t(e + "\n\n", {
            inline: !1,
            context: n,
            unsafeContext: r,
        });
}

function h(e) {
    (r = p(c.a, e)), (i = _(c.a));
}

function m(e, t) {
    if (null == e) return "";
    null == r && h(n(759794).A), (e = e.replace(/^\n+|\n+$/g, ""));
    let i = u.qF.test(e),
        a = u.wn.test(e);
    return i || a ? new f(e, t, a) : e;
}
