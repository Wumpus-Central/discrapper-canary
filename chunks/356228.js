n.d(t, {
    I: () => h,
    O: () => a
});
var r = n(139232),
    i = n(647005);
function a(e) {
    if (0 === e.length) throw Error('Number skeleton cannot be empty');
    for (
        var t = e.split(i.r).filter(function (e) {
                return e.length > 0;
            }),
            n = [],
            r = 0,
            a = t;
        r < a.length;
        r++
    ) {
        var o = a[r].split('/');
        if (0 === o.length) throw Error('Invalid number skeleton');
        for (var s = o[0], l = o.slice(1), c = 0, u = l; c < u.length; c++) if (0 === u[c].length) throw Error('Invalid number skeleton');
        n.push({
            stem: s,
            options: l
        });
    }
    return n;
}
function o(e) {
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
        var a = i[n];
        switch (a.stem) {
            case 'percent':
            case '%':
                t.style = 'percent';
                continue;
            case '%x100':
                (t.style = 'percent'), (t.scale = 100);
                continue;
            case 'currency':
                (t.style = 'currency'), (t.currency = a.options[0]);
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
                (t.style = 'unit'), (t.unit = o(a.options[0]));
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
                    a.options.reduce(function (e, t) {
                        return (0, r.pi)((0, r.pi)({}, e), p(t));
                    }, {})
                );
                continue;
            case 'engineering':
                t = (0, r.pi)(
                    (0, r.pi)((0, r.pi)({}, t), { notation: 'engineering' }),
                    a.options.reduce(function (e, t) {
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
                t.scale = parseFloat(a.options[0]);
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
                if (a.options.length > 1) throw RangeError('integer-width stems only accept a single optional option');
                a.options[0].replace(c, function (e, n, r, i, a, o) {
                    if (n) t.minimumIntegerDigits = r.length;
                    else if (i && a) throw Error('We currently do not support maximum integer digits');
                    else if (o) throw Error('We currently do not support exact integer digits');
                    return '';
                });
                continue;
        }
        if (u.test(a.stem)) {
            t.minimumIntegerDigits = a.stem.length;
            continue;
        }
        if (s.test(a.stem)) {
            if (a.options.length > 1) throw RangeError('Fraction-precision stems only accept a single optional option');
            a.stem.replace(s, function (e, n, r, i, a, o) {
                return '*' === r ? (t.minimumFractionDigits = n.length) : i && '#' === i[0] ? (t.maximumFractionDigits = i.length) : a && o ? ((t.minimumFractionDigits = a.length), (t.maximumFractionDigits = a.length + o.length)) : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)), '';
            });
            var h = a.options[0];
            'w' === h ? (t = (0, r.pi)((0, r.pi)({}, t), { trailingZeroDisplay: 'stripIfInteger' })) : h && (t = (0, r.pi)((0, r.pi)({}, t), d(h)));
            continue;
        }
        if (l.test(a.stem)) {
            t = (0, r.pi)((0, r.pi)({}, t), d(a.stem));
            continue;
        }
        var m = f(a.stem);
        m && (t = (0, r.pi)((0, r.pi)({}, t), m));
        var g = _(a.stem);
        g && (t = (0, r.pi)((0, r.pi)({}, t), g));
    }
    return t;
}
