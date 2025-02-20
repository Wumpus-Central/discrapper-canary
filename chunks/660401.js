n.d(t, { Z: () => P });
var r = n(176338),
    i = n(725180),
    o = n(370873),
    a = '[object Arguments]',
    s = '[object Array]',
    l = '[object Boolean]',
    c = '[object Date]',
    u = '[object Error]',
    d = '[object Function]',
    f = '[object Map]',
    p = '[object Number]',
    _ = '[object Object]',
    h = '[object RegExp]',
    m = '[object Set]',
    g = '[object String]',
    E = '[object WeakMap]',
    v = '[object ArrayBuffer]',
    b = '[object DataView]',
    y = '[object Float64Array]',
    O = '[object Int8Array]',
    S = '[object Int16Array]',
    I = '[object Int32Array]',
    T = '[object Uint8Array]',
    N = '[object Uint8ClampedArray]',
    A = '[object Uint16Array]',
    C = '[object Uint32Array]',
    R = {};
(R['[object Float32Array]'] = R[y] = R[O] = R[S] = R[I] = R[T] = R[N] = R[A] = R[C] = !0), (R[a] = R[s] = R[v] = R[l] = R[b] = R[c] = R[u] = R[d] = R[f] = R[p] = R[_] = R[h] = R[m] = R[g] = R[E] = !1);
let P = function (e) {
    return (0, o.Z)(e) && (0, i.Z)(e.length) && !!R[(0, r.Z)(e)];
};
