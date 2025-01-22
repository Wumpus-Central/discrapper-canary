var i, a;
function o(e) {
    return e.type === i.literal;
}
function s(e) {
    return e.type === i.argument;
}
function l(e) {
    return e.type === i.number;
}
function u(e) {
    return e.type === i.date;
}
function c(e) {
    return e.type === i.time;
}
function d(e) {
    return e.type === i.select;
}
function f(e) {
    return e.type === i.plural;
}
function p(e) {
    return e.type === i.pound;
}
function h(e) {
    return e.type === i.tag;
}
function _(e) {
    return !!(e && 'object' == typeof e && e.type === a.number);
}
function m(e) {
    return !!(e && 'object' == typeof e && e.type === a.dateTime);
}
r.d(n, {
    HI: function () {
        return h;
    },
    Ii: function () {
        return m;
    },
    Jo: function () {
        return f;
    },
    O4: function () {
        return o;
    },
    VG: function () {
        return s;
    },
    Wh: function () {
        return _;
    },
    Wi: function () {
        return d;
    },
    aV: function () {
        return a;
    },
    pe: function () {
        return c;
    },
    rp: function () {
        return u;
    },
    uf: function () {
        return l;
    },
    wD: function () {
        return i;
    },
    yx: function () {
        return p;
    }
}),
    !(function (e) {
        (e[(e.literal = 0)] = 'literal'), (e[(e.argument = 1)] = 'argument'), (e[(e.number = 2)] = 'number'), (e[(e.date = 3)] = 'date'), (e[(e.time = 4)] = 'time'), (e[(e.select = 5)] = 'select'), (e[(e.plural = 6)] = 'plural'), (e[(e.pound = 7)] = 'pound'), (e[(e.tag = 8)] = 'tag');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime');
    })(a || (a = {}));
