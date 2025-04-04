a.d(e, {
    EN: () => s,
    IQ: () => E,
    bU: () => o
});
var r = a(176984),
    n = a(573736),
    _ = a(622916);
let o = 'baggage',
    i = 'sentry-',
    c = /^sentry-/;
function s(t) {
    let e = (function (t) {
        if (t && ((0, n.HD)(t) || Array.isArray(t)))
            return Array.isArray(t)
                ? t.reduce(
                      (t, e) => (
                          Object.entries(l(e)).forEach(([e, a]) => {
                              t[e] = a;
                          }),
                          t
                      ),
                      {}
                  )
                : l(t);
    })(t);
    if (!e) return;
    let a = Object.entries(e).reduce((t, [e, a]) => (e.match(c) && (t[e.slice(i.length)] = a), t), {});
    return Object.keys(a).length > 0 ? a : void 0;
}
function E(t) {
    if (t) {
        var e = Object.entries(t).reduce((t, [e, a]) => (a && (t[`${i}${e}`] = a), t), {});
        return 0 !== Object.keys(e).length
            ? Object.entries(e).reduce((t, [e, a], n) => {
                  let o = `${encodeURIComponent(e)}=${encodeURIComponent(a)}`,
                      i = 0 === n ? o : `${t},${o}`;
                  return i.length > 8192 ? (r.X && _.kg.warn(`Not adding key: ${e} with val: ${a} to baggage header due to exceeding baggage size limits.`), t) : i;
              }, '')
            : void 0;
    }
}
function l(t) {
    return t
        .split(',')
        .map((t) => t.split('=').map((t) => decodeURIComponent(t.trim())))
        .reduce((t, [e, a]) => (e && a && (t[e] = a), t), {});
}
