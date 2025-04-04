var r = a(147018),
    n = a(325008),
    _ = a(161581),
    o = a(581031),
    i = a(740362),
    c = a(354848),
    s = a(838957),
    E = a(714050),
    l = a(4340),
    u = a(381740),
    I = _.Symbol,
    R = I && I.prototype;
if (n && c(I) && (!('description' in R) || void 0 !== I().description)) {
    var d = {},
        A = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : E(arguments[0]),
                e = s(R, this) ? new I(t) : void 0 === t ? I() : I(t);
            return '' === t && (d[e] = !0), e;
        };
    u(A, I), (A.prototype = R), (R.constructor = A);
    var f = 'Symbol(description detection)' === String(I('description detection')),
        p = o(R.valueOf),
        N = o(R.toString),
        T = /^Symbol\((.*)\)[^)]+$/,
        L = o(''.replace),
        h = o(''.slice);
    l(R, 'description', {
        configurable: !0,
        get: function () {
            var t = p(this);
            if (i(d, t)) return '';
            var e = N(t),
                a = f ? h(e, 7, -1) : L(e, T, '$1');
            return '' === a ? void 0 : a;
        }
    }),
        r(
            {
                global: !0,
                constructor: !0,
                forced: !0
            },
            { Symbol: A }
        );
}
