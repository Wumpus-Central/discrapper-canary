r.d(n, {
    ZP: function () {
        return s;
    }
});
let i = Object.freeze({
        overflowY: 'scroll',
        overflowX: 'hidden'
    }),
    a = Object.freeze({
        overflowX: 'scroll',
        overflowY: 'hidden'
    }),
    o = Object.freeze({ overflow: 'auto' });
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        r = 'vertical' === n ? i : 'horizontal' === n ? a : o;
    return null != e
        ? {
              ...r,
              ...e
          }
        : r;
}
