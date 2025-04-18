let r = n(423906);
class i extends Error {
    constructor(e) {
        super(e), (this.name = 'TimeoutError');
    }
}
let a = (e, t, n) =>
    new Promise((a, o) => {
        if ('number' != typeof t || t < 0) throw TypeError('Expected `milliseconds` to be a positive number');
        if (t === 1 / 0) return void a(e);
        let s = setTimeout(() => {
            if ('function' == typeof n) {
                try {
                    a(n());
                } catch (e) {
                    o(e);
                }
                return;
            }
            let r = 'string' == typeof n ? n : `Promise timed out after ${t} milliseconds`,
                s = n instanceof Error ? n : new i(r);
            'function' == typeof e.cancel && e.cancel(), o(s);
        }, t);
        r(e.then(a, o), () => {
            clearTimeout(s);
        });
    });
(e.exports = a), (e.exports.default = a), (e.exports.TimeoutError = i);
