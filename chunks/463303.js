"use strict";
let r, i;
n.d(t, { I4: () => h, Zs: () => p });
var a = n(424899),
    s = n.n(a),
    o = n(791332),
    l = n.n(o),
    u = n(473598),
    c = n(906049);
class d {
    message;
    hasMarkdown;
    intlMessage;
    constructor(e, t, n) {
        (this.message = n ? e : e.replace(c.jx, "")),
            (this.hasMarkdown = n),
            (this.intlMessage = new (s())(this.message, t));
    }
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
            n = c.N6.test(this.message),
            r = {};
        if (n) {
            let e = 0;
            for (let [n, i] of Object.entries(t)) this.message.includes(`!!{${n}}!!`) && ((r[++e] = i), (t[n] = e));
        }
        return [t, r];
    }
}
function _(e, t) {
    let n = l().parserFor(t(e)),
        r = l().reactFor(l().ruleOutput(e, "react"));
    return (e, t, i) => {
        let a = !e.includes("\n\n");
        return a || (e += "\n\n"), r(n(e, { inline: a, context: t, unsafeContext: i }));
    };
}
function f(e) {
    let t = l().parserFor(e);
    return (e, n, r) => t(e + "\n\n", { inline: !1, context: n, unsafeContext: r });
}
function p(e) {
    (r = _(u.a, e)), (i = f(u.a));
}
function h(e, t) {
    if (null == e) return "";
    null == r && p(n(759794).A), (e = e.replace(/^\n+|\n+$/g, ""));
    let i = c.qF.test(e),
        a = c.wn.test(e);
    return i || a ? new d(e, t, a) : e;
}
