"use strict";
let r, i;
n.d(t, { I4: () => f, Zs: () => _ });
var s = n(424899),
    a = n.n(s),
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
            (this.intlMessage = new (a())(this.message, t));
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
        let t = c.N6.test(this.message),
            n = {};
        if (t) {
            let t = 0;
            for (let [r, i] of Object.entries(e)) this.message.includes(`!!{${r}}!!`) && ((n[++t] = i), (e[r] = t));
        }
        return [e, n];
    }
}
function _(e) {
    var t, n;
    let s, a, o;
    (t = u.a),
        (s = l().parserFor(e(t))),
        (a = l().reactFor(l().ruleOutput(t, "react"))),
        (r = (e, t, n) => {
            let r = !e.includes("\n\n");
            return r || (e += "\n\n"), a(s(e, { inline: r, context: t, unsafeContext: n }));
        }),
        (n = u.a),
        (o = l().parserFor(n)),
        (i = (e, t, n) => o(e + "\n\n", { inline: !1, context: t, unsafeContext: n }));
}
function f(e, t) {
    if (null == e) return "";
    null == r && _(n(759794).A), (e = e.replace(/^\n+|\n+$/g, ""));
    let i = c.qF.test(e),
        s = c.wn.test(e);
    return i || s ? new d(e, t, s) : e;
}
