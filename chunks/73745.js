var i, r;
function a(e) {
    return e.type === i.literal;
}
function s(e) {
    return e.type === i.argument;
}
function o(e) {
    return e.type === i.number;
}
function l(e) {
    return e.type === i.date;
}
function u(e) {
    return e.type === i.time;
}
function c(e) {
    return e.type === i.select;
}
function d(e) {
    return e.type === i.plural;
}
function f(e) {
    return e.type === i.pound;
}
function _(e) {
    return e.type === i.tag;
}
function p(e) {
    return !!(e && 'object' == typeof e && e.type === r.number);
}
function h(e) {
    return !!(e && 'object' == typeof e && e.type === r.dateTime);
}
n.d(t, {
    HI: () => _,
    Ii: () => h,
    Jo: () => d,
    O4: () => a,
    VG: () => s,
    Wh: () => p,
    Wi: () => c,
    aV: () => r,
    pe: () => u,
    rp: () => l,
    uf: () => o,
    wD: () => i,
    yx: () => f
}),
    (function (e) {
        (e[(e.literal = 0)] = 'literal'), (e[(e.argument = 1)] = 'argument'), (e[(e.number = 2)] = 'number'), (e[(e.date = 3)] = 'date'), (e[(e.time = 4)] = 'time'), (e[(e.select = 5)] = 'select'), (e[(e.plural = 6)] = 'plural'), (e[(e.pound = 7)] = 'pound'), (e[(e.tag = 8)] = 'tag');
    })(i || (i = {})),
    (function (e) {
        (e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime');
    })(r || (r = {}));
