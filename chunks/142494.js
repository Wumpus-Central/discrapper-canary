let i, a;
r.d(n, {
    FC: function () {
        return v;
    },
    _H: function () {
        return _;
    },
    yR: function () {
        return E;
    }
});
var o = r(47120);
var s = r(757143);
var l = r(400053),
    u = r.n(l),
    c = r(477660),
    d = r.n(c),
    f = r(20970),
    p = r(959525);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class _ {
    format(e) {
        if (!this.hasMarkdown) return this.intlMessage.format(e);
        let [n, r] = this.getContext(e);
        return i(this.intlMessage.format(n), n, r);
    }
    astFormat(e) {
        let [n, r] = this.getContext(e);
        return a(this.intlMessage.format(n), n, r);
    }
    plainFormat(e) {
        return this.intlMessage.format(e);
    }
    getContext(e) {
        let n = e,
            r = p.yF.test(this.message),
            i = {};
        if (r) {
            let e = 0;
            for (let [r, a] of Object.entries(n)) this.message.includes('!!{'.concat(r, '}!!')) && ((i[++e] = a), (n[r] = e));
        }
        return [n, i];
    }
    constructor(e, n, r) {
        h(this, 'message', void 0), h(this, 'hasMarkdown', void 0), h(this, 'intlMessage', void 0), (this.message = r ? e : e.replace(p.hN, '')), (this.hasMarkdown = r), (this.intlMessage = new (u())(this.message, n));
    }
}
function m(e, n) {
    let r = d().parserFor(n(e)),
        i = d().reactFor(d().ruleOutput(e, 'react'));
    return (e, n, a) => {
        let o = !e.includes('\n\n');
        return (
            !o && (e += '\n\n'),
            i(
                r(e, {
                    inline: o,
                    context: n,
                    unsafeContext: a
                })
            )
        );
    };
}
function g(e) {
    let n = d().parserFor(e);
    return (e, r, i) =>
        n(e + '\n\n', {
            inline: !1,
            context: r,
            unsafeContext: i
        });
}
function E(e) {
    (i = m(f.j, e)), (a = g(f.j));
}
function v(e, n) {
    if (null == e) return '';
    null == i && E(r(281071).Z), (e = e.replace(/^\n+|\n+$/g, ''));
    let a = p.aT.test(e),
        o = p.b9.test(e);
    return a || o ? new _(e, n, o) : e;
}
