let r, i;
n.d(t, {
    FC: () => m,
    _H: () => f,
    yR: () => h
}),
    n(388685),
    n(35282),
    n(704826);
var a = n(400053),
    o = n.n(a),
    s = n(477660),
    l = n.n(s),
    c = n(20970),
    u = n(959525);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
            n = u.yF.test(this.message),
            r = {};
        if (n) {
            let e = 0;
            for (let [n, i] of Object.entries(t)) this.message.includes('!!{'.concat(n, '}!!')) && ((r[++e] = i), (t[n] = e));
        }
        return [t, r];
    }
    constructor(e, t, n) {
        d(this, 'message', void 0), d(this, 'hasMarkdown', void 0), d(this, 'intlMessage', void 0), (this.message = n ? e : e.replace(u.hN, '')), (this.hasMarkdown = n), (this.intlMessage = new (o())(this.message, t));
    }
}
function _(e, t) {
    let n = l().parserFor(t(e)),
        r = l().reactFor(l().ruleOutput(e, 'react'));
    return (e, t, i) => {
        let a = !e.includes('\n\n');
        return (
            a || (e += '\n\n'),
            r(
                n(e, {
                    inline: a,
                    context: t,
                    unsafeContext: i
                })
            )
        );
    };
}
function p(e) {
    let t = l().parserFor(e);
    return (e, n, r) =>
        t(e + '\n\n', {
            inline: !1,
            context: n,
            unsafeContext: r
        });
}
function h(e) {
    (r = _(c.j, e)), (i = p(c.j));
}
function m(e, t) {
    if (null == e) return '';
    null == r && h(n(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let i = u.aT.test(e),
        a = u.b9.test(e);
    return i || a ? new f(e, t, a) : e;
}
