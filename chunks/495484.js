r.d(n, {
    C: function () {
        return a;
    }
});
let i = new Map();
class a {
    format(e) {
        return this.formatter.format(e);
    }
    formatToParts(e) {
        return this.formatter.formatToParts(e);
    }
    formatRange(e, n) {
        if ('function' == typeof this.formatter.formatRange) return this.formatter.formatRange(e, n);
        if (n < e) throw RangeError('End date must be >= start date');
        return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(n)}`;
    }
    formatRangeToParts(e, n) {
        if ('function' == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, n);
        if (n < e) throw RangeError('End date must be >= start date');
        let r = this.formatter.formatToParts(e),
            i = this.formatter.formatToParts(n);
        return [
            ...r.map((e) => ({
                ...e,
                source: 'startRange'
            })),
            {
                type: 'literal',
                value: ' \u2013 ',
                source: 'shared'
            },
            ...i.map((e) => ({
                ...e,
                source: 'endRange'
            }))
        ];
    }
    resolvedOptions() {
        let e = this.formatter.resolvedOptions();
        return d() && (!this.resolvedHourCycle && (this.resolvedHourCycle = f(e.locale, this.options)), (e.hourCycle = this.resolvedHourCycle), (e.hour12 = 'h11' === this.resolvedHourCycle || 'h12' === this.resolvedHourCycle)), 'ethiopic-amete-alem' === e.calendar && (e.calendar = 'ethioaa'), e;
    }
    constructor(e, n = {}) {
        (this.formatter = s(e, n)), (this.options = n);
    }
}
let o = {
    true: { ja: 'h11' },
    false: {}
};
function s(e, n = {}) {
    if ('boolean' == typeof n.hour12 && u()) {
        let r = o[String((n = { ...n }).hour12)][e.split('-')[0]],
            i = n.hour12 ? 'h12' : 'h23';
        (n.hourCycle = null != r ? r : i), delete n.hour12;
    }
    let r =
        e +
        (n
            ? Object.entries(n)
                  .sort((e, n) => (e[0] < n[0] ? -1 : 1))
                  .join()
            : '');
    if (i.has(r)) return i.get(r);
    let a = new Intl.DateTimeFormat(e, n);
    return i.set(r, a), a;
}
let l = null;
function u() {
    return (
        null == l &&
            (l =
                '24' ===
                new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    hour12: !1
                }).format(new Date(2020, 2, 3, 0))),
        l
    );
}
let c = null;
function d() {
    return (
        null == c &&
            (c =
                'h12' ===
                new Intl.DateTimeFormat('fr', {
                    hour: 'numeric',
                    hour12: !1
                }).resolvedOptions().hourCycle),
        c
    );
}
function f(e, n) {
    if (!n.timeStyle && !n.hour) return;
    e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
    let r = s((e += (e.includes('-u-') ? '' : '-u') + '-nu-latn'), {
            ...n,
            timeZone: void 0
        }),
        i = parseInt(r.formatToParts(new Date(2020, 2, 3, 0)).find((e) => 'hour' === e.type).value, 10),
        a = parseInt(r.formatToParts(new Date(2020, 2, 3, 23)).find((e) => 'hour' === e.type).value, 10);
    if (0 === i && 23 === a) return 'h23';
    if (24 === i && 23 === a) return 'h24';
    if (0 === i && 11 === a) return 'h11';
    if (12 === i && 11 === a) return 'h12';
    throw Error('Unexpected hour cycle result');
}
