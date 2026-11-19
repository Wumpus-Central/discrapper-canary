var a = t(105712),
    n = t(557939),
    o = t(860511),
    c = t(230606),
    s = t(410323),
    i = t(503628),
    f = t(753891),
    u = t(339626),
    l = t(43452),
    p = t(652320),
    y = t(598349),
    h = t(837082),
    b = t(2871),
    d = t(101968),
    w = t(324988),
    g = t(210140),
    m = t(41575),
    v = t(706938),
    k = t(503199),
    E = t(627),
    A = t(565079),
    x = t(19319),
    O = t(139257),
    S = t(373458),
    D = t(150088),
    M = t(604400),
    R = t(772805),
    C = o.Object,
    B = o.Array,
    T = o.Date,
    I = o.Error,
    F = o.TypeError,
    U = o.PerformanceMark,
    L = c("DOMException"),
    P = x.Map,
    j = x.has,
    W = x.get,
    _ = x.set,
    N = O.Set,
    V = O.add,
    G = O.has,
    H = c("Object", "keys"),
    z = s([].push),
    q = s((!0).valueOf),
    Q = s((1).valueOf),
    K = s("".valueOf),
    J = s(T.prototype.getTime),
    X = f("structuredClone"),
    Y = "DataCloneError",
    Z = "Transferring",
    $ = function (e) {
        return (
            !i(function () {
                var r = new o.Set([7]),
                    t = e(r),
                    a = e(C(7));
                return t === r || !t.has(7) || !y(a) || 7 != +a;
            }) && e
        );
    },
    ee = function (e, r) {
        return !i(function () {
            var t = new r(),
                a = e({ a: t, b: t });
            return !(a && a.a === a.b && a.a instanceof r && a.a.stack === t.stack);
        });
    },
    er = o.structuredClone,
    et =
        a ||
        !ee(er, I) ||
        !ee(er, L) ||
        !!i(function () {
            var e = er(new o.AggregateError([1], X, { cause: 3 }));
            return "AggregateError" !== e.name || 1 !== e.errors[0] || e.message !== X || 3 !== e.cause;
        }),
    ea =
        !er &&
        $(function (e) {
            return new U(X, { detail: e }).detail;
        }),
    en = $(er) || ea,
    eo = function (e) {
        throw new L("Uncloneable type: " + e, Y);
    },
    ec = function (e, r) {
        throw new L((r || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", Y);
    },
    es = function (e, r) {
        return (en || ec(r), en(e));
    },
    ei = function () {
        var e;
        try {
            e = new o.DataTransfer();
        } catch (r) {
            try {
                e = new o.ClipboardEvent("").clipboardData;
            } catch (e) {}
        }
        return e && e.items && e.files ? e : null;
    },
    ef = function (e, r, t) {
        if (j(r, e)) return W(r, e);
        if ("SharedArrayBuffer" === (t || w(e))) a = en ? en(e) : e;
        else {
            var a,
                n,
                c,
                s,
                i,
                f,
                l = o.DataView;
            l || u(e.slice) || ec("ArrayBuffer");
            try {
                if (u(e.slice) && !e.resizable) a = e.slice(0);
                else
                    for (
                        n = e.byteLength,
                            c = ("maxByteLength" in e) ? { maxByteLength: e.maxByteLength } : void 0,
                            a = new ArrayBuffer(n, c),
                            s = new l(e),
                            i = new l(a),
                            f = 0;
                        f < n;
                        f++
                    )
                        i.setUint8(f, s.getUint8(f));
            } catch (e) {
                throw new L("ArrayBuffer is detached", Y);
            }
        }
        return (_(r, e, a), a);
    },
    eu = function (e, r, t, a, n) {
        var c = o[r];
        return (y(c) || ec(r), new c(ef(e.buffer, n), t, a));
    },
    el = function (e, r) {
        if ((h(e) && eo("Symbol"), !y(e))) return e;
        if (r) {
            if (j(r, e)) return W(r, e);
        } else r = new P();
        var t,
            a,
            n,
            s,
            i,
            f,
            l,
            p,
            b = w(e);
        switch (b) {
            case "Array":
                n = B(k(e));
                break;
            case "Object":
                n = {};
                break;
            case "Map":
                n = new P();
                break;
            case "Set":
                n = new N();
                break;
            case "RegExp":
                n = new RegExp(e.source, A(e));
                break;
            case "Error":
                switch ((a = e.name)) {
                    case "AggregateError":
                        n = new (c(a))([]);
                        break;
                    case "EvalError":
                    case "RangeError":
                    case "ReferenceError":
                    case "SuppressedError":
                    case "SyntaxError":
                    case "TypeError":
                    case "URIError":
                        n = new (c(a))();
                        break;
                    case "CompileError":
                    case "LinkError":
                    case "RuntimeError":
                        n = new (c("WebAssembly", a))();
                        break;
                    default:
                        n = new I();
                }
                break;
            case "DOMException":
                n = new L(e.message, e.name);
                break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
                n = ef(e, r, b);
                break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
                ((f = "DataView" === b ? e.byteLength : e.length), (n = eu(e, b, e.byteOffset, f, r)));
                break;
            case "DOMQuad":
                try {
                    n = new DOMQuad(el(e.p1, r), el(e.p2, r), el(e.p3, r), el(e.p4, r));
                } catch (r) {
                    n = es(e, b);
                }
                break;
            case "File":
                if (en)
                    try {
                        ((n = en(e)), w(n) !== b && (n = void 0));
                    } catch (e) {}
                if (!n)
                    try {
                        n = new File([e], e.name, e);
                    } catch (e) {}
                n || ec(b);
                break;
            case "FileList":
                if ((s = ei())) {
                    for (i = 0, f = k(e); i < f; i++) s.items.add(el(e[i], r));
                    n = s.files;
                } else n = es(e, b);
                break;
            case "ImageData":
                try {
                    n = new ImageData(el(e.data, r), e.width, e.height, { colorSpace: e.colorSpace });
                } catch (r) {
                    n = es(e, b);
                }
                break;
            default:
                if (en) n = en(e);
                else
                    switch (b) {
                        case "BigInt":
                            n = C(e.valueOf());
                            break;
                        case "Boolean":
                            n = C(q(e));
                            break;
                        case "Number":
                            n = C(Q(e));
                            break;
                        case "String":
                            n = C(K(e));
                            break;
                        case "Date":
                            n = new T(J(e));
                            break;
                        case "Blob":
                            try {
                                n = e.slice(0, e.size, e.type);
                            } catch (e) {
                                ec(b);
                            }
                            break;
                        case "DOMPoint":
                        case "DOMPointReadOnly":
                            t = o[b];
                            try {
                                n = t.fromPoint ? t.fromPoint(e) : new t(e.x, e.y, e.z, e.w);
                            } catch (e) {
                                ec(b);
                            }
                            break;
                        case "DOMRect":
                        case "DOMRectReadOnly":
                            t = o[b];
                            try {
                                n = t.fromRect ? t.fromRect(e) : new t(e.x, e.y, e.width, e.height);
                            } catch (e) {
                                ec(b);
                            }
                            break;
                        case "DOMMatrix":
                        case "DOMMatrixReadOnly":
                            t = o[b];
                            try {
                                n = t.fromMatrix ? t.fromMatrix(e) : new t(e);
                            } catch (e) {
                                ec(b);
                            }
                            break;
                        case "AudioData":
                        case "VideoFrame":
                            u(e.clone) || ec(b);
                            try {
                                n = e.clone();
                            } catch (e) {
                                eo(b);
                            }
                            break;
                        case "CropTarget":
                        case "CryptoKey":
                        case "FileSystemDirectoryHandle":
                        case "FileSystemFileHandle":
                        case "FileSystemHandle":
                        case "GPUCompilationInfo":
                        case "GPUCompilationMessage":
                        case "ImageBitmap":
                        case "RTCCertificate":
                        case "WebAssembly.Module":
                            ec(b);
                        default:
                            eo(b);
                    }
        }
        switch ((_(r, e, n), b)) {
            case "Array":
            case "Object":
                for (i = 0, f = k((l = H(e))); i < f; i++) ((p = l[i]), m(n, p, el(e[p], r)));
                break;
            case "Map":
                e.forEach(function (e, t) {
                    _(n, el(t, r), el(e, r));
                });
                break;
            case "Set":
                e.forEach(function (e) {
                    V(n, el(e, r));
                });
                break;
            case "Error":
                (v(n, "message", el(e.message, r)),
                    g(e, "cause") && v(n, "cause", el(e.cause, r)),
                    "AggregateError" === a
                        ? (n.errors = el(e.errors, r))
                        : "SuppressedError" === a &&
                          ((n.error = el(e.error, r)), (n.suppressed = el(e.suppressed, r))));
            case "DOMException":
                M && v(n, "stack", el(e.stack, r));
        }
        return n;
    },
    ep = function (e, r) {
        if (!y(e)) throw new F("Transfer option cannot be converted to a sequence");
        var t,
            a,
            n,
            c,
            s,
            i = [];
        b(e, function (e) {
            z(i, d(e));
        });
        for (var f = 0, p = k(i), h = new N(); f < p;) {
            if ("ArrayBuffer" === (a = w((t = i[f++]))) ? G(h, t) : j(r, t)) throw new L("Duplicate transferable", Y);
            if ("ArrayBuffer" === a) {
                V(h, t);
                continue;
            }
            if (R) c = er(t, { transfer: [t] });
            else
                switch (a) {
                    case "ImageBitmap":
                        l((n = o.OffscreenCanvas)) || ec(a, Z);
                        try {
                            ((s = new n(t.width, t.height)).getContext("bitmaprenderer").transferFromImageBitmap(t),
                                (c = s.transferToImageBitmap()));
                        } catch (e) {}
                        break;
                    case "AudioData":
                    case "VideoFrame":
                        (u(t.clone) && u(t.close)) || ec(a, Z);
                        try {
                            ((c = t.clone()), t.close());
                        } catch (e) {}
                        break;
                    case "MediaSourceHandle":
                    case "MessagePort":
                    case "MIDIAccess":
                    case "OffscreenCanvas":
                    case "ReadableStream":
                    case "RTCDataChannel":
                    case "TransformStream":
                    case "WebTransportReceiveStream":
                    case "WebTransportSendStream":
                    case "WritableStream":
                        ec(a, Z);
                }
            if (void 0 === c) throw new L("This object cannot be transferred: " + a, Y);
            _(r, t, c);
        }
        return h;
    },
    ey = function (e) {
        S(e, function (e) {
            R ? en(e, { transfer: [e] }) : u(e.transfer) ? e.transfer() : D ? D(e) : ec("ArrayBuffer", Z);
        });
    };
n(
    { global: !0, enumerable: !0, sham: !R, forced: et },
    {
        structuredClone: function (e) {
            var r,
                t,
                a = E(arguments.length, 1) > 1 && !p(arguments[1]) ? d(arguments[1]) : void 0,
                n = a ? a.transfer : void 0;
            void 0 !== n && (t = ep(n, (r = new P())));
            var o = el(e, r);
            return (t && ey(t), o);
        },
    },
);
