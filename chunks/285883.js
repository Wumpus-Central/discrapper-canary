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
    var e;
    let a =
        (e = t) && ((0, n.HD)(e) || Array.isArray(e))
            ? Array.isArray(e)
                ? e.reduce(
                      (t, e) => (
                          Object.entries(l(e)).forEach(([e, a]) => {
                              t[e] = a;
                          }),
                          t
                      ),
                      {}
                  )
                : l(e)
            : void 0;
    if (!a) return;
    let r = Object.entries(a).reduce((t, [e, a]) => (e.match(c) && (t[e.slice(i.length)] = a), t), {});
    return Object.keys(r).length > 0 ? r : void 0;
}
function E(t) {
    if (t)
        return (function (t) {
            if (0 !== Object.keys(t).length)
                return Object.entries(t).reduce((t, [e, a], n) => {
                    let o = `${encodeURIComponent(e)}=${encodeURIComponent(a)}`,
                        i = 0 === n ? o : `${t},${o}`;
                    return i.length > 8192 ? (r.X && _.kg.warn(`Not adding key: ${e} with val: ${a} to baggage header due to exceeding baggage size limits.`), t) : i;
                }, '');
        })(Object.entries(t).reduce((t, [e, a]) => (a && (t[`${i}${e}`] = a), t), {}));
}
function l(t) {
    return t
        .split(',')
        .map((t) => t.split('=').map((t) => decodeURIComponent(t.trim())))
        .reduce((t, [e, a]) => (e && a && (t[e] = a), t), {});
}
