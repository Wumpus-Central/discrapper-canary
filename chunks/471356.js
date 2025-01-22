let i = r(423906);
class a extends Error {
    constructor(e) {
        super(e), (this.name = 'TimeoutError');
    }
}
let o = (e, n, r) =>
    new Promise((o, s) => {
        if ('number' != typeof n || n < 0) throw TypeError('Expected `milliseconds` to be a positive number');
        if (n === 1 / 0) {
            o(e);
            return;
        }
        let l = setTimeout(() => {
            if ('function' == typeof r) {
                try {
                    o(r());
                } catch (e) {
                    s(e);
                }
                return;
            }
            let i = 'string' == typeof r ? r : `Promise timed out after ${n} milliseconds`,
                l = r instanceof Error ? r : new a(i);
            'function' == typeof e.cancel && e.cancel(), s(l);
        }, n);
        i(e.then(o, s), () => {
            clearTimeout(l);
        });
    });
(e.exports = o), (e.exports.default = o), (e.exports.TimeoutError = a);
