let i = n(423906);
class r extends Error {
    constructor(e) {
        super(e), (this.name = 'TimeoutError');
    }
}
let a = (e, t, n) =>
    new Promise((a, s) => {
        if ('number' != typeof t || t < 0) throw TypeError('Expected `milliseconds` to be a positive number');
        if (t === 1 / 0) {
            a(e);
            return;
        }
        let o = setTimeout(() => {
            if ('function' == typeof n) {
                try {
                    a(n());
                } catch (e) {
                    s(e);
                }
                return;
            }
            let i = 'string' == typeof n ? n : `Promise timed out after ${t} milliseconds`,
                o = n instanceof Error ? n : new r(i);
            'function' == typeof e.cancel && e.cancel(), s(o);
        }, t);
        i(e.then(a, s), () => {
            clearTimeout(o);
        });
    });
(e.exports = a), (e.exports.default = a), (e.exports.TimeoutError = r);
