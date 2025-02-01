var i = ['BigInt64Array', 'BigUint64Array', 'Float32Array', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray'],
    r = 'undefined' == typeof globalThis ? n.g : globalThis;
e.exports = function () {
    for (var e = [], t = 0; t < i.length; t++) 'function' == typeof r[i[t]] && (e[e.length] = i[t]);
    return e;
};
