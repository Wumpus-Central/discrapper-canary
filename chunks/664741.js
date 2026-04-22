i.d(t, { A: () => c });
var n = i(643479),
    r = i(890167),
    o = i(105423),
    a = i(801765);
let s = "Exif IFD Pointer",
    l = "GPS Info IFD Pointer",
    u = "Interoperability IFD Pointer",
    c = {
        read: function (e, t, i) {
            var c, d, f, p, m, g, h, y, A, v, T, b, P, S, F, I, C, x, E;
            let M = r.A.getByteOrder(e, t),
                U = ((c = e), (d = t), (f = M), (p = i), (0, a.y)(c, o.eY, d, (0, a.x)(c, d, f), f, p));
            return {
                tags:
                    ((F =
                        ((v =
                            ((m = U),
                            (g = e),
                            (h = t),
                            (y = M),
                            (A = i),
                            (U = void 0 !== m[s] ? (0, n.dP)(m, (0, a.y)(g, o.Ct, h, h + m[s].value, y, A)) : m))),
                        (T = e),
                        (b = t),
                        (P = M),
                        (S = i),
                        (U = void 0 !== v[l] ? (0, n.dP)(v, (0, a.y)(T, o.eU, b, b + v[l].value, P, S)) : v))),
                    (I = e),
                    (C = t),
                    (x = M),
                    (E = i),
                    (U = void 0 !== F[u] ? (0, n.dP)(F, (0, a.y)(I, o.MJ, C, C + F[u].value, x, E)) : F)),
                byteOrder: M,
            };
        },
    };
