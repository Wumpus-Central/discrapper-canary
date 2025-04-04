n.d(t, {
    I: () => h,
    O: () => o
});
var r = n(139232),
    i = n(647005);
function o(e) {
    if (0 === e.length) throw Error('Number skeleton cannot be empty');
    for (
        var t = e.split(i.r).filter(function (e) {
                return e.length > 0;
            }),
            n = [],
            r = 0,
            o = t;
        r < o.length;
        r++
    ) {
        var a = o[r].split('/');
        if (0 === a.length) throw Error('Invalid number skeleton');
        for (var s = a[0], l = a.slice(1), c = 0, u = l; c < u.length; c++) if (0 === u[c].length) throw Error('Invalid number skeleton');
        n.push({
            stem: s,
            options: l
        });
    }
    return n;
}
function a(e) {
    return e.replace(/^(.*?)-/, '');
}
var s = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    l = /^(@+)?(\+|#+)?[rs]?$/g,
    c = /(\*)(0+)|(#+)(0+)|(0+)/g,
    u = /^(0+)$/;
function d(e) {
    var t = {};
    return (
        'r' === e[e.length - 1] ? (t.roundingPriority = 'morePrecision') : 's' === e[e.length - 1] && (t.roundingPriority = 'lessPrecision'),
        e.replace(l, function (e, n, r) {
            return 'string' != typeof r ? ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length)) : '+' === r ? (t.minimumSignificantDigits = n.length) : '#' === n[0] ? (t.maximumSignificantDigits = n.length) : ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length + ('string' == typeof r ? r.length : 0))), '';
        }),
        t
    );
}
function f(e) {
    switch (e) {
        case 'sign-auto':
            return { signDisplay: 'auto' };
        case 'sign-accounting':
        case '()':
            return { currencySign: 'accounting' };
        case 'sign-always':
        case '+!':
            return { signDisplay: 'always' };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting'
            };
        case 'sign-except-zero':
        case '+?':
            return { signDisplay: 'exceptZero' };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting'
            };
        case 'sign-never':
        case '+_':
            return { signDisplay: 'never' };
    }
}
function _(e) {
    var t;
    if (('E' === e[0] && 'E' === e[1] ? ((t = { notation: 'engineering' }), (e = e.slice(2))) : 'E' === e[0] && ((t = { notation: 'scientific' }), (e = e.slice(1))), t)) {
        var n = e.slice(0, 2);
        if (('+!' === n ? ((t.signDisplay = 'always'), (e = e.slice(2))) : '+?' === n && ((t.signDisplay = 'exceptZero'), (e = e.slice(2))), !u.test(e))) throw Error('Malformed concise eng/scientific notation');
        t.minimumIntegerDigits = e.length;
    }
    return t;
}
function p(e) {
    var t = {},
        n = f(e);
    return n || t;
}
function h(e) {
    for (var t = {}, n = 0, i = e; n < i.length; n++) {
        var o = i[n];
        switch (o.stem) {
            case 'percent':
            case '%':
                t.style = 'percent';
                continue;
            case '%x100':
                (t.style = 'percent'), (t.scale = 100);
                continue;
            case 'currency':
                (t.style = 'currency'), (t.currency = o.options[0]);
                continue;
            case 'group-off':
            case ',_':
                t.useGrouping = !1;
                continue;
            case 'precision-integer':
            case '.':
                t.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                (t.style = 'unit'), (t.unit = a(o.options[0]));
                continue;
            case 'compact-short':
            case 'K':
                (t.notation = 'compact'), (t.compactDisplay = 'short');
                continue;
            case 'compact-long':
            case 'KK':
                (t.notation = 'compact'), (t.compactDisplay = 'long');
                continue;
            case 'scientific':
                t = (0, r.pi)(
                    (0, r.pi)((0, r.pi)({}, t), { notation: 'scientific' }),
                    o.options.reduce(function (e, t) {
                        return (0, r.pi)((0, r.pi)({}, e), p(t));
                    }, {})
                );
                continue;
            case 'engineering':
                t = (0, r.pi)(
                    (0, r.pi)((0, r.pi)({}, t), { notation: 'engineering' }),
                    o.options.reduce(function (e, t) {
                        return (0, r.pi)((0, r.pi)({}, e), p(t));
                    }, {})
                );
                continue;
            case 'notation-simple':
                t.notation = 'standard';
                continue;
            case 'unit-width-narrow':
                (t.currencyDisplay = 'narrowSymbol'), (t.unitDisplay = 'narrow');
                continue;
            case 'unit-width-short':
                (t.currencyDisplay = 'code'), (t.unitDisplay = 'short');
                continue;
            case 'unit-width-full-name':
                (t.currencyDisplay = 'name'), (t.unitDisplay = 'long');
                continue;
            case 'unit-width-iso-code':
                t.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                t.scale = parseFloat(o.options[0]);
                continue;
            case 'rounding-mode-floor':
                t.roundingMode = 'floor';
                continue;
            case 'rounding-mode-ceiling':
                t.roundingMode = 'ceil';
                continue;
            case 'rounding-mode-down':
                t.roundingMode = 'trunc';
                continue;
            case 'rounding-mode-up':
                t.roundingMode = 'expand';
                continue;
            case 'rounding-mode-half-even':
                t.roundingMode = 'halfEven';
                continue;
            case 'rounding-mode-half-down':
                t.roundingMode = 'halfTrunc';
                continue;
            case 'rounding-mode-half-up':
                t.roundingMode = 'halfExpand';
                continue;
            case 'integer-width':
                if (o.options.length > 1) throw RangeError('integer-width stems only accept a single optional option');
                o.options[0].replace(c, function (e, n, r, i, o, a) {
                    if (n) t.minimumIntegerDigits = r.length;
                    else if (i && o) throw Error('We currently do not support maximum integer digits');
                    else if (a) throw Error('We currently do not support exact integer digits');
                    return '';
                });
                continue;
        }
        if (u.test(o.stem)) {
            t.minimumIntegerDigits = o.stem.length;
            continue;
        }
        if (s.test(o.stem)) {
            if (o.options.length > 1) throw RangeError('Fraction-precision stems only accept a single optional option');
            o.stem.replace(s, function (e, n, r, i, o, a) {
                return '*' === r ? (t.minimumFractionDigits = n.length) : i && '#' === i[0] ? (t.maximumFractionDigits = i.length) : o && a ? ((t.minimumFractionDigits = o.length), (t.maximumFractionDigits = o.length + a.length)) : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)), '';
            });
            var h = o.options[0];
            'w' === h ? (t = (0, r.pi)((0, r.pi)({}, t), { trailingZeroDisplay: 'stripIfInteger' })) : h && (t = (0, r.pi)((0, r.pi)({}, t), d(h)));
            continue;
        }
        if (l.test(o.stem)) {
            t = (0, r.pi)((0, r.pi)({}, t), d(o.stem));
            continue;
        }
        var m = f(o.stem);
        m && (t = (0, r.pi)((0, r.pi)({}, t), m));
        var g = _(o.stem);
        g && (t = (0, r.pi)((0, r.pi)({}, t), g));
    }
    return t;
}
