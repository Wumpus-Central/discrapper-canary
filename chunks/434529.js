function i(e) {
    return Math.max(Math.min(e, 1), 0);
}
function r(e, t) {
    let { top: n, bottom: r, left: a, right: s } = e;
    return {
        top: null != n ? Math.floor(i(n) * t.height) : void 0,
        left: null != a ? Math.floor(i(a) * t.width) : void 0,
        bottom: null != r ? Math.floor(i(r) * t.height) : void 0,
        right: null != s ? Math.floor(i(s) * t.width) : void 0
    };
}
function a(e, t) {
    let { width: n, height: r, fixed: a = !1 } = e;
    return a
        ? {
              width: n,
              height: r
          }
        : {
              width: 'auto' === n ? n : Math.floor(i(n) * t.width),
              height: 'auto' === r ? r : Math.floor(i(r) * t.height)
          };
}
function s(e, t) {
    let { top: n, bottom: r, left: a, right: s } = e;
    return {
        top: null != n ? i(n / t.height) : void 0,
        left: null != a ? i(a / t.width) : void 0,
        bottom: null != r ? i(r / t.height) : void 0,
        right: null != s ? i(s / t.width) : void 0
    };
}
function o(e, t) {
    let { width: n, height: i } = e;
    return {
        width: 'auto' === n ? n : n / t.width,
        height: 'auto' === i ? i : i / t.height
    };
}
function l(e, t, n, i, r) {
    let { top: a, bottom: s, left: o, right: l } = e;
    if ((null == a && null == s ? ((a = 0), (s = n - r)) : null == a && null != s ? (a = n - (s + r)) : null != a && (s = n - (a + r)), null == o && null == l ? ((o = 0), (l = t - i)) : null == o && null != l ? (o = t - (l + i)) : null == l && null != o && (l = t - (o + i)), null == a || null == s || null == o || null == l)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: a,
        left: o,
        bottom: s,
        right: l
    };
}
function u(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= r ? (r = null) : (n = null),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function c(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        i < 0 && ((t += i), (i = 0)),
        t < 0 && ((i += t), (t = 0)),
        r < 0 && ((n += r), (r = 0)),
        n < 0 && ((r += n), (n = 0)),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function d(e, t, n) {
    e = r(e, n);
    let { width: i, height: s } = a(t, n);
    return (i = 'string' == typeof i ? 0 : i), (s = 'string' == typeof s ? 0 : s), l(e, n.width, n.height, i, s);
}
function f(e, t, n) {
    let { top: i, left: r } = e,
        { x: a, y: d } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: f, height: _ } = t;
    return [
        s(
            u(
                c(
                    l(
                        {
                            top: i + d,
                            left: r + a,
                            bottom: void 0,
                            right: void 0
                        },
                        n.width,
                        n.height,
                        'number' == typeof f ? f : 0,
                        'number' == typeof _ ? _ : 0
                    )
                )
            ),
            n
        ),
        o(t, n)
    ];
}
function _(e, t, n) {
    let { top: i, right: r } = e,
        { x: a, y: d } =
            arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {
                      x: 0,
                      y: 0
                  },
        { width: f, height: _ } = t;
    return [
        s(
            u(
                c(
                    l(
                        {
                            top: i + d,
                            left: void 0,
                            bottom: void 0,
                            right: r - a
                        },
                        n.width,
                        n.height,
                        'number' == typeof f ? f : 0,
                        'number' == typeof _ ? _ : 0
                    )
                )
            ),
            n
        ),
        o(t, n)
    ];
}
function p(e, t) {
    let n = {
        top: void 0,
        bottom: void 0,
        left: void 0,
        right: void 0
    };
    return null != t.top && (n.top = e.top), null != t.bottom && (n.bottom = e.bottom), null != t.left && (n.left = e.left), null != t.right && (n.right = e.right), n;
}
n.d(t, {
    BL: () => p,
    KR: () => r,
    Ox: () => o,
    PY: () => l,
    R: () => u,
    jL: () => s,
    o4: () => f,
    ou: () => c,
    uq: () => _,
    vS: () => d,
    w_: () => a
}),
    n(411104);
