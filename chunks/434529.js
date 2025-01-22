r.d(n, {
    BL: function () {
        return m;
    },
    KR: function () {
        return o;
    },
    Ox: function () {
        return u;
    },
    PY: function () {
        return c;
    },
    R: function () {
        return d;
    },
    jL: function () {
        return l;
    },
    o4: function () {
        return h;
    },
    ou: function () {
        return f;
    },
    uq: function () {
        return _;
    },
    vS: function () {
        return p;
    },
    w_: function () {
        return s;
    }
});
var i = r(411104);
function a(e) {
    return Math.max(Math.min(e, 1), 0);
}
function o(e, n) {
    let { top: r, bottom: i, left: o, right: s } = e;
    return {
        top: null != r ? Math.floor(a(r) * n.height) : void 0,
        left: null != o ? Math.floor(a(o) * n.width) : void 0,
        bottom: null != i ? Math.floor(a(i) * n.height) : void 0,
        right: null != s ? Math.floor(a(s) * n.width) : void 0
    };
}
function s(e, n) {
    let { width: r, height: i, fixed: o = !1 } = e;
    return o
        ? {
              width: r,
              height: i
          }
        : {
              width: 'auto' === r ? r : Math.floor(a(r) * n.width),
              height: 'auto' === i ? i : Math.floor(a(i) * n.height)
          };
}
function l(e, n) {
    let { top: r, bottom: i, left: o, right: s } = e;
    return {
        top: null != r ? a(r / n.height) : void 0,
        left: null != o ? a(o / n.width) : void 0,
        bottom: null != i ? a(i / n.height) : void 0,
        right: null != s ? a(s / n.width) : void 0
    };
}
function u(e, n) {
    let { width: r, height: i } = e;
    return {
        width: 'auto' === r ? r : r / n.width,
        height: 'auto' === i ? i : i / n.height
    };
}
function c(e, n, r, i, a) {
    let { top: o, bottom: s, left: l, right: u } = e;
    if ((null == o && null == s ? ((o = 0), (s = r - a)) : null == o && null != s ? (o = r - (s + a)) : null != o && (s = r - (o + a)), null == l && null == u ? ((l = 0), (u = n - i)) : null == l && null != u ? (l = n - (u + i)) : null == u && null != l && (u = n - (l + i)), null == o || null == s || null == l || null == u)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: o,
        left: l,
        bottom: s,
        right: u
    };
}
function d(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        0 === n || n <= i ? (i = null) : (n = null),
        0 === r || r <= a ? (a = null) : (r = null),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function f(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        a < 0 && ((r += a), (a = 0)),
        r < 0 && ((a += r), (r = 0)),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function p(e, n, r) {
    e = o(e, r);
    let { width: i, height: a } = s(n, r);
    return (i = 'string' == typeof i ? 0 : i), (a = 'string' == typeof a ? 0 : a), c(e, r.width, r.height, i, a);
}
function h(e, n, r) {
    let { top: i, left: a } = e,
        { x: o, y: s } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: p, height: h } = n;
    return [
        l(
            d(
                f(
                    c(
                        {
                            top: i + s,
                            left: a + o,
                            bottom: void 0,
                            right: void 0
                        },
                        r.width,
                        r.height,
                        'number' == typeof p ? p : 0,
                        'number' == typeof h ? h : 0
                    )
                )
            ),
            r
        ),
        u(n, r)
    ];
}
function _(e, n, r) {
    let { top: i, right: a } = e,
        { x: o, y: s } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: p, height: h } = n;
    return [
        l(
            d(
                f(
                    c(
                        {
                            top: i + s,
                            left: void 0,
                            bottom: void 0,
                            right: a - o
                        },
                        r.width,
                        r.height,
                        'number' == typeof p ? p : 0,
                        'number' == typeof h ? h : 0
                    )
                )
            ),
            r
        ),
        u(n, r)
    ];
}
function m(e, n) {
    let r = {
        top: void 0,
        bottom: void 0,
        left: void 0,
        right: void 0
    };
    return null != n.top && (r.top = e.top), null != n.bottom && (r.bottom = e.bottom), null != n.left && (r.left = e.left), null != n.right && (r.right = e.right), r;
}
