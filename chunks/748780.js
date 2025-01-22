var i = r(653041);
var a = r(371193);
var o = r(501501),
    s = r.n(o),
    l = r(78650),
    u = r.n(l),
    c = r(505444),
    d = r.n(c);
function f(e) {
    let n = Object.keys(e)[0];
    return ''.concat(n, '(').concat(e[n], ')');
}
let p = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function h(e) {
    let n = e.match(p);
    return (
        null != n &&
            (e = 'rgba('
                .concat(0 | n[1], ', ')
                .concat(0 | n[2], ', ')
                .concat(0 | n[3], ', ')
                .concat(n[4], ')')),
        e
    );
}
function _(e) {
    return e && (e.transform && (e.transform = e.WebkitTransform = e.MozTransform = e.transform.map(f).join(' ')), e.color && (e.color = h(e.color)), e.backgroundColor && (e.backgroundColor = h(e.backgroundColor))), e;
}
function m(e, n, r) {
    if (e.setNativeProps) e.setNativeProps(n);
    else {
        if (!e.nodeType || void 0 === e.setAttribute) return !1;
        d().setValueForStyles(e, _(n.style), r._reactInternalInstance);
    }
}
function g(e) {
    return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
}
function E(e, n, r) {
    return void 0 !== n && void 0 != r ? u()(n, r) : e;
}
function v(e, n) {
    let r;
    let { toValueMin: i, toValueMax: o, tension: s = 0, friction: l = 0, loop: u, reverse: c, invert: d, callback: f, type: p = 'spring', shouldLoop: h, durationMin: _, durationMax: m, ...g } = n,
        y = e._value,
        b = E(n.duration, _, m),
        I = E(n.toValue, i, o),
        T = a[p](e, {
            ...g,
            toValue: I,
            tension: s,
            friction: l,
            duration: b
        }),
        S = T;
    if (c || d) {
        let i = E(n.duration, _, m);
        (r = a[p](e, {
            ...g,
            toValue: c ? y : -I,
            tension: s,
            friction: l,
            duration: i
        })),
            (S = a.sequence([T, r]));
    }
    u
        ? S.start(() => {
              (!h || (h && h())) && (f ? f(v.bind(null, e, n)) : v(e, n));
          })
        : S.start(f);
}
function y(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return e.interpolate({
        inputRange: [0, 1],
        outputRange: r
    });
}
a.inject.ApplyAnimatedValues(m, (e) => e);
let b = { CLAMP: 'clamp' };
n.Z = {
    ...a,
    Easing: s(),
    accelerate: g,
    animate: v,
    interpolate: y,
    Extrapolate: b,
    div: a.createAnimatedComponent('div'),
    span: a.createAnimatedComponent('span'),
    img: a.createAnimatedComponent('img'),
    a: a.createAnimatedComponent('a'),
    form: a.createAnimatedComponent('form'),
    ul: a.createAnimatedComponent('ul'),
    li: a.createAnimatedComponent('li'),
    g: a.createAnimatedComponent('g'),
    use: a.createAnimatedComponent('use'),
    path: a.createAnimatedComponent('path'),
    section: a.createAnimatedComponent('section'),
    video: a.createAnimatedComponent('video')
};
