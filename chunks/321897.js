n.d(t, { ZP: () => s });
let i = Object.freeze({
        overflowY: 'scroll',
        overflowX: 'hidden'
    }),
    r = Object.freeze({
        overflowX: 'scroll',
        overflowY: 'hidden'
    }),
    a = Object.freeze({ overflow: 'auto' });
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        n = 'vertical' === t ? i : 'horizontal' === t ? r : a;
    return null != e
        ? {
              ...n,
              ...e
          }
        : n;
}
