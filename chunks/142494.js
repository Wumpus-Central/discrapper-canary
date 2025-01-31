let i, r;
n.d(t, {
    FC: () => m,
    _H: () => f,
    yR: () => h
}),
    n(47120),
    n(757143);
var a = n(400053),
    s = n.n(a),
    o = n(477660),
    l = n.n(o),
    u = n(20970),
    c = n(959525);
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
        return i(this.intlMessage.format(t), t, n);
    }
    astFormat(e) {
        let [t, n] = this.getContext(e);
        return r(this.intlMessage.format(t), t, n);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let t = e,
            n = c.yF.test(this.message),
            i = {};
        if (n) {
            let e = 0;
            for (let [n, r] of Object.entries(t)) this.message.includes('!!{'.concat(n, '}!!')) && ((i[++e] = r), (t[n] = e));
        }
        return [t, i];
    }
    constructor(e, t, n) {
        d(this, 'message', void 0), d(this, 'hasMarkdown', void 0), d(this, 'intlMessage', void 0), (this.message = n ? e : e.replace(c.hN, '')), (this.hasMarkdown = n), (this.intlMessage = new (s())(this.message, t));
    }
}
function _(e, t) {
    let n = l().parserFor(t(e)),
        i = l().reactFor(l().ruleOutput(e, 'react'));
    return (e, t, r) => {
        let a = !e.includes('\n\n');
        return (
            a || (e += '\n\n'),
            i(
                n(e, {
                    inline: a,
                    context: t,
                    unsafeContext: r
                })
            )
        );
    };
}
function p(e) {
    let t = l().parserFor(e);
    return (e, n, i) =>
        t(e + '\n\n', {
            inline: !1,
            context: n,
            unsafeContext: i
        });
}
function h(e) {
    (i = _(u.j, e)), (r = p(u.j));
}
function m(e, t) {
    if (null == e) return '';
    null == i && h(n(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let r = c.aT.test(e),
        a = c.b9.test(e);
    return r || a ? new f(e, t, a) : e;
}
