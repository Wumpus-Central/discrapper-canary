(t.d(r, { DaveModuleFactory: () => n }),
    t(323874),
    t(14289),
    t(35956),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162),
    t(321073),
    t(667532),
    t(938796));
let n = async function () {
    let e,
        r,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var o,
        a,
        s,
        i,
        l,
        u,
        d,
        c,
        h,
        f,
        p,
        m,
        v,
        g,
        w,
        y,
        E,
        b,
        k,
        $,
        _,
        T,
        P,
        C,
        S,
        D = "./this.program",
        F = "";
    try {
        F = new URL(".", "file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js")
            .href;
    } catch {}
    o = async (e) => {
        var r = await fetch(e, { credentials: "same-origin" });
        if (r.ok) return r.arrayBuffer();
        throw Error(r.status + " : " + r.url);
    };
    var A = console.log.bind(console),
        M = console.error.bind(console),
        x = !1;
    function O() {
        if (!l?.buffer?.resizable) {
            var e = P.buffer;
            ((l = new Int8Array(e)),
                (f = new Int16Array(e)),
                (n.HEAPU8 = c = new Uint8Array(e)),
                (p = new Uint16Array(e)),
                (d = new Int32Array(e)),
                (u = new Uint32Array(e)),
                (g = new Float32Array(e)),
                (w = new Float64Array(e)),
                (h = new BigInt64Array(e)),
                (m = new BigUint64Array(e)));
        }
    }
    function R(e) {
        throw (
            n.onAbort?.(e),
            (e = `Aborted(${e})`),
            M(e),
            (x = !0),
            (e += ". Build with -sASSERTIONS for more info."),
            new WebAssembly.RuntimeError(e)
        );
    }
    async function N(e) {
        if (!s)
            try {
                var r = await o(e);
                return new Uint8Array(r);
            } catch {}
        if (a) return a(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function W(e, r) {
        try {
            var t = await N(e);
            return await WebAssembly.instantiate(t, r);
        } catch (e) {
            (M(`failed to asynchronously prepare wasm: ${e}`), R(e));
        }
    }
    async function j(e, r, t) {
        if (!e)
            try {
                var n = fetch(r, { credentials: "same-origin" });
                return await WebAssembly.instantiateStreaming(n, t);
            } catch (e) {
                (M(`wasm streaming compile failed: ${e}`), M("falling back to ArrayBuffer instantiation"));
            }
        return W(r, t);
    }
    async function z() {
        function e(e) {
            var r;
            return (
                (y = (r = S = e.exports).fa),
                (E = n._malloc = r.ha),
                (b = n._free = r.ia),
                (k = r.ja),
                ($ = r.ka),
                (_ = r.la),
                (T = r.ma),
                (P = r.da),
                (C = r.ga),
                O(),
                S
            );
        }
        var r = { a: rD },
            o = n.instantiateWasm;
        return o
            ? new Promise((t) => {
                  o(r, (r) => t(e(r)));
              })
            : ((i ??= (function () {
                  if (n.locateFile) {
                      var e;
                      return ((e = "libdave.wasm"), n.locateFile ? n.locateFile(e, F) : F + e);
                  }
                  return new URL(t(508678), t.b).href;
              })()),
              e((await j(s, i, r)).instance));
    }
    var B = (e) => {
            for (; e.length > 0;) e.shift()(n);
        },
        U = [],
        I = [],
        L = (e) => $(e),
        V = () => T();
    class H {
        constructor(e) {
            ((this.excPtr = e), (this.ptr = e - 24));
        }
        set_type(e) {
            u[(this.ptr + 4) >> 2] = e;
        }
        get_type() {
            return u[(this.ptr + 4) >> 2];
        }
        set_destructor(e) {
            u[(this.ptr + 8) >> 2] = e;
        }
        get_destructor() {
            return u[(this.ptr + 8) >> 2];
        }
        set_caught(e) {
            ((e = +!!e), (l[this.ptr + 12] = e));
        }
        get_caught() {
            return 0 != l[this.ptr + 12];
        }
        set_rethrown(e) {
            ((e = +!!e), (l[this.ptr + 13] = e));
        }
        get_rethrown() {
            return 0 != l[this.ptr + 13];
        }
        init(e, r) {
            (this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(r));
        }
        set_adjusted_ptr(e) {
            u[(this.ptr + 16) >> 2] = e;
        }
        get_adjusted_ptr() {
            return u[(this.ptr + 16) >> 2];
        }
    }
    var q = 0,
        G = () => {
            var e = d[eb.varargs >> 2];
            return ((eb.varargs += 4), e);
        },
        X = {
            isAbs: (e) => "/" === e.charAt(0),
            splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
            normalizeArray: (e, r) => {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                    var o = e[n];
                    "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
                }
                if (r) for (; t; t--) e.unshift("..");
                return e;
            },
            normalize: (e) => {
                var r = X.isAbs(e),
                    t = "/" === e.slice(-1);
                return (
                    (e = X.normalizeArray(
                        e.split("/").filter((e) => !!e),
                        !r,
                    ).join("/")) ||
                        r ||
                        (e = "."),
                    e && t && (e += "/"),
                    (r ? "/" : "") + e
                );
            },
            dirname: (e) => {
                var r = X.splitPath(e),
                    t = r[0],
                    n = r[1];
                return t || n ? (n && (n = n.slice(0, -1)), t + n) : ".";
            },
            basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
            join: function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                return X.normalize(r.join("/"));
            },
            join2: (e, r) => X.normalize(e + "/" + r),
        },
        K = (e) => (K = (e) => (crypto.getRandomValues(e), 0))(e),
        Y = {
            resolve: function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                for (var n = "", o = !1, a = r.length - 1; a >= -1 && !o; a--) {
                    var s = a >= 0 ? r[a] : ey.cwd();
                    if ("string" != typeof s) throw TypeError("Arguments to path.resolve must be strings");
                    if (!s) return "";
                    ((n = s + "/" + n), (o = X.isAbs(s)));
                }
                return (
                    (n = X.normalizeArray(
                        n.split("/").filter((e) => !!e),
                        !o,
                    ).join("/")),
                    (o ? "/" : "") + n || "."
                );
            },
            relative: (e, r) => {
                function t(e) {
                    for (var r = 0; r < e.length && "" === e[r]; r++);
                    for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
                    return r > t ? [] : e.slice(r, t - r + 1);
                }
                ((e = Y.resolve(e).slice(1)), (r = Y.resolve(r).slice(1)));
                for (
                    var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), s = a, i = 0;
                    i < a;
                    i++
                )
                    if (n[i] !== o[i]) {
                        s = i;
                        break;
                    }
                for (var l = [], i = s; i < n.length; i++) l.push("..");
                return (l = l.concat(o.slice(s))).join("/");
            },
        },
        Z = globalThis.TextDecoder && new TextDecoder(),
        J = (e, r, t, n) => {
            var o = r + t;
            if (n) return o;
            for (; e[r] && !(r >= o);) ++r;
            return r;
        },
        Q = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 ? arguments[2] : void 0,
                n = arguments.length > 3 ? arguments[3] : void 0;
            var o = J(e, r, t, n);
            if (o - r > 16 && e.buffer && Z) return Z.decode(e.subarray(r, o));
            for (var a = ""; r < o;) {
                var s = e[r++];
                if (!(128 & s)) {
                    a += String.fromCharCode(s);
                    continue;
                }
                var i = 63 & e[r++];
                if ((224 & s) == 192) {
                    a += String.fromCharCode(((31 & s) << 6) | i);
                    continue;
                }
                var l = 63 & e[r++];
                if (
                    (s =
                        (240 & s) == 224
                            ? ((15 & s) << 12) | (i << 6) | l
                            : ((7 & s) << 18) | (i << 12) | (l << 6) | (63 & e[r++])) < 65536
                )
                    a += String.fromCharCode(s);
                else {
                    var u = s - 65536;
                    a += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u));
                }
            }
            return a;
        },
        ee = [],
        er = (e) => {
            for (var r = 0, t = 0; t < e.length; ++t) {
                var n = e.charCodeAt(t);
                n <= 127 ? r++ : n <= 2047 ? (r += 2) : n >= 55296 && n <= 57343 ? ((r += 4), ++t) : (r += 3);
            }
            return r;
        },
        et = (e, r, t, n) => {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, s = 0; s < e.length; ++s) {
                var i = e.codePointAt(s);
                if (i <= 127) {
                    if (t >= a) break;
                    r[t++] = i;
                } else if (i <= 2047) {
                    if (t + 1 >= a) break;
                    ((r[t++] = 192 | (i >> 6)), (r[t++] = 128 | (63 & i)));
                } else if (i <= 65535) {
                    if (t + 2 >= a) break;
                    ((r[t++] = 224 | (i >> 12)), (r[t++] = 128 | ((i >> 6) & 63)), (r[t++] = 128 | (63 & i)));
                } else {
                    if (t + 3 >= a) break;
                    ((r[t++] = 240 | (i >> 18)),
                        (r[t++] = 128 | ((i >> 12) & 63)),
                        (r[t++] = 128 | ((i >> 6) & 63)),
                        (r[t++] = 128 | (63 & i)),
                        s++);
                }
            }
            return ((r[t] = 0), t - o);
        },
        en = (e, r, t) => {
            var n = Array(t > 0 ? t : er(e) + 1),
                o = et(e, n, 0, n.length);
            return (r && (n.length = o), n);
        },
        eo = {
            ttys: [],
            init() {},
            shutdown() {},
            register(e, r) {
                ((eo.ttys[e] = { input: [], output: [], ops: r }), ey.registerDevice(e, eo.stream_ops));
            },
            stream_ops: {
                open(e) {
                    var r = eo.ttys[e.node.rdev];
                    if (!r) throw new ey.ErrnoError(43);
                    ((e.tty = r), (e.seekable = !1));
                },
                close(e) {
                    e.tty.ops.fsync(e.tty);
                },
                fsync(e) {
                    e.tty.ops.fsync(e.tty);
                },
                read(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.get_char) throw new ey.ErrnoError(60);
                    for (var a, s = 0, i = 0; i < n; i++) {
                        try {
                            a = e.tty.ops.get_char(e.tty);
                        } catch (e) {
                            throw new ey.ErrnoError(29);
                        }
                        if (void 0 === a && !s) throw new ey.ErrnoError(6);
                        if (null == a || (s++, (r[t + i] = a), 10 === a)) break;
                    }
                    return (s && (e.node.atime = Date.now()), s);
                },
                write(e, r, t, n, o) {
                    if (!e.tty || !e.tty.ops.put_char) throw new ey.ErrnoError(60);
                    try {
                        for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a]);
                    } catch (e) {
                        throw new ey.ErrnoError(29);
                    }
                    return (n && (e.node.mtime = e.node.ctime = Date.now()), a);
                },
            },
            default_tty_ops: {
                get_char: (e) =>
                    (() => {
                        if (!ee.length) {
                            var e = null;
                            if (
                                (globalThis.window?.prompt && null !== (e = window.prompt("Input: ")) && (e += "\n"),
                                !e)
                            )
                                return null;
                            ee = en(e, !0);
                        }
                        return ee.shift();
                    })(),
                put_char(e, r) {
                    null === r || 10 === r ? (A(Q(e.output)), (e.output = [])) : 0 != r && e.output.push(r);
                },
                fsync(e) {
                    e.output?.length > 0 && (A(Q(e.output)), (e.output = []));
                },
                ioctl_tcgets: (e) => ({
                    c_iflag: 25856,
                    c_oflag: 5,
                    c_cflag: 191,
                    c_lflag: 35387,
                    c_cc: [
                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0,
                    ],
                }),
                ioctl_tcsets: (e, r, t) => 0,
                ioctl_tiocgwinsz: (e) => [24, 80],
            },
            default_tty1_ops: {
                put_char(e, r) {
                    null === r || 10 === r ? (M(Q(e.output)), (e.output = [])) : 0 != r && e.output.push(r);
                },
                fsync(e) {
                    e.output?.length > 0 && (M(Q(e.output)), (e.output = []));
                },
            },
        },
        ea = (e, r) => Math.ceil(e / r) * r,
        es = (e) => {
            let r;
            e = ea(e, 65536);
            var t = k(65536, e);
            return (t && ((r = e), c.fill(0, t, t + r)), t);
        },
        ei = {
            ops_table: null,
            mount: (e) => ei.createNode(null, "/", 16895, 0),
            createNode(e, r, t, n) {
                if (ey.isBlkdev(t) || ey.isFIFO(t)) throw new ey.ErrnoError(63);
                ei.ops_table ||= {
                    dir: {
                        node: {
                            getattr: ei.node_ops.getattr,
                            setattr: ei.node_ops.setattr,
                            lookup: ei.node_ops.lookup,
                            mknod: ei.node_ops.mknod,
                            rename: ei.node_ops.rename,
                            unlink: ei.node_ops.unlink,
                            rmdir: ei.node_ops.rmdir,
                            readdir: ei.node_ops.readdir,
                            symlink: ei.node_ops.symlink,
                        },
                        stream: { llseek: ei.stream_ops.llseek },
                    },
                    file: {
                        node: { getattr: ei.node_ops.getattr, setattr: ei.node_ops.setattr },
                        stream: {
                            llseek: ei.stream_ops.llseek,
                            read: ei.stream_ops.read,
                            write: ei.stream_ops.write,
                            mmap: ei.stream_ops.mmap,
                            msync: ei.stream_ops.msync,
                        },
                    },
                    link: {
                        node: {
                            getattr: ei.node_ops.getattr,
                            setattr: ei.node_ops.setattr,
                            readlink: ei.node_ops.readlink,
                        },
                        stream: {},
                    },
                    chrdev: {
                        node: { getattr: ei.node_ops.getattr, setattr: ei.node_ops.setattr },
                        stream: ey.chrdev_stream_ops,
                    },
                };
                var o = ey.createNode(e, r, t, n);
                return (
                    ey.isDir(o.mode)
                        ? ((o.node_ops = ei.ops_table.dir.node),
                          (o.stream_ops = ei.ops_table.dir.stream),
                          (o.contents = {}))
                        : ey.isFile(o.mode)
                          ? ((o.node_ops = ei.ops_table.file.node),
                            (o.stream_ops = ei.ops_table.file.stream),
                            (o.usedBytes = 0),
                            (o.contents = ei.emptyFileContents ??= new Uint8Array(0)))
                          : ey.isLink(o.mode)
                            ? ((o.node_ops = ei.ops_table.link.node), (o.stream_ops = ei.ops_table.link.stream))
                            : ey.isChrdev(o.mode) &&
                              ((o.node_ops = ei.ops_table.chrdev.node), (o.stream_ops = ei.ops_table.chrdev.stream)),
                    (o.atime = o.mtime = o.ctime = Date.now()),
                    e && ((e.contents[r] = o), (e.atime = e.mtime = e.ctime = o.atime)),
                    o
                );
            },
            getFileDataAsTypedArray: (e) => e.contents.subarray(0, e.usedBytes),
            expandFileStorage(e, r) {
                var t = e.contents.length;
                if (!(t >= r)) {
                    ((r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)), t && (r = Math.max(r, 256)));
                    var n = ei.getFileDataAsTypedArray(e);
                    ((e.contents = new Uint8Array(r)), e.contents.set(n));
                }
            },
            resizeFileStorage(e, r) {
                if (e.usedBytes != r) {
                    var t = e.contents;
                    ((e.contents = new Uint8Array(r)),
                        e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                        (e.usedBytes = r));
                }
            },
            node_ops: {
                getattr(e) {
                    var r = {};
                    return (
                        (r.dev = ey.isChrdev(e.mode) ? e.id : 1),
                        (r.ino = e.id),
                        (r.mode = e.mode),
                        (r.nlink = 1),
                        (r.uid = 0),
                        (r.gid = 0),
                        (r.rdev = e.rdev),
                        ey.isDir(e.mode)
                            ? (r.size = 4096)
                            : ey.isFile(e.mode)
                              ? (r.size = e.usedBytes)
                              : ey.isLink(e.mode)
                                ? (r.size = e.link.length)
                                : (r.size = 0),
                        (r.atime = new Date(e.atime)),
                        (r.mtime = new Date(e.mtime)),
                        (r.ctime = new Date(e.ctime)),
                        (r.atimeMs = e.atime),
                        (r.mtimeMs = e.mtime),
                        (r.ctimeMs = e.ctime),
                        (r.blksize = 4096),
                        (r.blocks = Math.ceil(r.size / r.blksize)),
                        r
                    );
                },
                setattr(e, r) {
                    for (let t of ["mode", "atime", "mtime", "ctime"]) null != r[t] && (e[t] = r[t]);
                    void 0 !== r.size && ei.resizeFileStorage(e, r.size);
                },
                lookup(e, r) {
                    throw (
                        ei.doesNotExistError ||
                            ((ei.doesNotExistError = new ey.ErrnoError(44)),
                            (ei.doesNotExistError.stack = "<generic error, no stack>")),
                        ei.doesNotExistError
                    );
                },
                mknod: (e, r, t, n) => ei.createNode(e, r, t, n),
                rename(e, r, t) {
                    var n;
                    try {
                        n = ey.lookupNode(r, t);
                    } catch (e) {}
                    if (n && ey.isDir(e.mode)) for (var o in n.contents) throw new ey.ErrnoError(55);
                    (delete e.parent.contents[e.name],
                        (r.contents[t] = e),
                        (e.name = t),
                        (r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now()));
                },
                unlink(e, r) {
                    (delete e.contents[r], (e.ctime = e.mtime = Date.now()));
                },
                rmdir(e, r) {
                    var t = ey.lookupNode(e, r);
                    for (var n in t.contents) throw new ey.ErrnoError(55);
                    (delete e.contents[r], (e.ctime = e.mtime = Date.now()));
                },
                readdir: (e) => [".", "..", ...Object.keys(e.contents)],
                symlink(e, r, t) {
                    var n = ei.createNode(e, r, 41471, 0);
                    return ((n.link = t), n);
                },
                readlink(e) {
                    if (!ey.isLink(e.mode)) throw new ey.ErrnoError(28);
                    return e.link;
                },
            },
            stream_ops: {
                read(e, r, t, n, o) {
                    var a = e.node.contents;
                    if (o >= e.node.usedBytes) return 0;
                    var s = Math.min(e.node.usedBytes - o, n);
                    return (r.set(a.subarray(o, o + s), t), s);
                },
                write(e, r, t, n, o, a) {
                    if ((r.buffer === l.buffer && (a = !1), !n)) return 0;
                    var s = e.node;
                    return (
                        (s.mtime = s.ctime = Date.now()),
                        a
                            ? ((s.contents = r.subarray(t, t + n)), (s.usedBytes = n))
                            : s.usedBytes || o
                              ? (ei.expandFileStorage(s, o + n),
                                s.contents.set(r.subarray(t, t + n), o),
                                (s.usedBytes = Math.max(s.usedBytes, o + n)))
                              : ((s.contents = r.slice(t, t + n)), (s.usedBytes = n)),
                        n
                    );
                },
                llseek(e, r, t) {
                    var n = r;
                    if (
                        (1 === t ? (n += e.position) : 2 === t && ey.isFile(e.node.mode) && (n += e.node.usedBytes),
                        n < 0)
                    )
                        throw new ey.ErrnoError(28);
                    return n;
                },
                mmap(e, r, t, n, o) {
                    if (!ey.isFile(e.node.mode)) throw new ey.ErrnoError(43);
                    var a,
                        s,
                        i = e.node.contents;
                    if (2 & o || i.buffer !== l.buffer) {
                        if (((s = !0), !(a = es(r)))) throw new ey.ErrnoError(48);
                        i &&
                            ((t > 0 || t + r < i.length) &&
                                (i = i.subarray ? i.subarray(t, t + r) : Array.prototype.slice.call(i, t, t + r)),
                            l.set(i, a));
                    } else ((s = !1), (a = i.byteOffset));
                    return { ptr: a, allocated: s };
                },
                msync: (e, r, t, n, o) => (ei.stream_ops.write(e, r, 0, n, t, !1), 0),
            },
        },
        el = (e) => ("string" == typeof e && (e = en(e, !0)), e.subarray || (e = new Uint8Array(e)), e),
        eu = (e, r) => {
            var t = 0;
            return (e && (t |= 365), r && (t |= 146), t);
        },
        ed = async (e) => new Uint8Array(await o(e)),
        ec = function () {
            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            return ey.createDataFile(...r);
        },
        eh = null,
        ef = async () => eh,
        ep = 0,
        em = null,
        ev = [],
        eg = async (e, r) => {
            for (var t of ("u" > typeof Browser && Browser.init(), ev)) if (t.canHandle(r)) return t.handle(e, r);
            return e;
        },
        ew = async (e, r, t, o, a, s, i, l) => {
            var u = r ? Y.resolve(X.join2(e, r)) : e;
            (ep || (eh = new Promise((e) => (em = e))), ep++, n.monitorRunDependencies?.(ep));
            try {
                var d = t;
                ("string" == typeof t && (d = await ed(t)), (d = await eg(d, u)), l?.(), s || ec(e, r, d, o, a, i));
            } finally {
                (ep--, n.monitorRunDependencies?.(ep), ep || em());
            }
        },
        ey = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: [],
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            filesystems: null,
            syncFSRequests: 0,
            ErrnoError: class {
                name = "ErrnoError";
                constructor(e) {
                    this.errno = e;
                }
            },
            FSStream: class {
                shared = {};
                get object() {
                    return this.node;
                }
                set object(e) {
                    this.node = e;
                }
                get isRead() {
                    return (2097155 & this.flags) != 1;
                }
                get isWrite() {
                    return (2097155 & this.flags) != 0;
                }
                get isAppend() {
                    return 1024 & this.flags;
                }
                get flags() {
                    return this.shared.flags;
                }
                set flags(e) {
                    this.shared.flags = e;
                }
                get position() {
                    return this.shared.position;
                }
                set position(e) {
                    this.shared.position = e;
                }
            },
            FSNode: class {
                node_ops = {};
                stream_ops = {};
                readMode = 365;
                writeMode = 146;
                mounted = null;
                constructor(e, r, t, n) {
                    (e || (e = this),
                        (this.parent = e),
                        (this.mount = e.mount),
                        (this.id = ey.nextInode++),
                        (this.name = r),
                        (this.mode = t),
                        (this.rdev = n),
                        (this.atime = this.mtime = this.ctime = Date.now()));
                }
                get read() {
                    return (this.mode & this.readMode) === this.readMode;
                }
                set read(e) {
                    e ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
                }
                get write() {
                    return (this.mode & this.writeMode) === this.writeMode;
                }
                set write(e) {
                    e ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
                }
                get isFolder() {
                    return ey.isDir(this.mode);
                }
                get isDevice() {
                    return ey.isChrdev(this.mode);
                }
                addListener(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var t = { cb: e, exclusive: r },
                        n = (this.listeners ??= new Set());
                    return (n.add(t), { listeners: n, entry: t });
                }
                notifyListeners(e) {
                    if (this.listeners) {
                        for (var r of this.listeners) r.exclusive ? (t ||= []).push(r) : r.cb(e);
                        if (t) {
                            var t,
                                n = (this.exclTurn || 0) % t.length;
                            ((this.exclTurn = n + 1), t[n].cb(e));
                        }
                    }
                }
            },
            lookupPath(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) throw new ey.ErrnoError(44);
                ((r.follow_mount ??= !0), X.isAbs(e) || (e = ey.cwd() + "/" + e));
                e: for (var t = 0; t < 40; t++) {
                    for (var n = e.split("/").filter((e) => !!e), o = ey.root, a = "/", s = 0; s < n.length; s++) {
                        var i = s === n.length - 1;
                        if (i && r.parent) break;
                        if ("." !== n[s]) {
                            if (".." === n[s]) {
                                if (((a = X.dirname(a)), ey.isRoot(o))) {
                                    ((e = a + "/" + n.slice(s + 1).join("/")), t--);
                                    continue e;
                                }
                                o = o.parent;
                                continue;
                            }
                            a = X.join2(a, n[s]);
                            try {
                                o = ey.lookupNode(o, n[s]);
                            } catch (e) {
                                if (e?.errno === 44 && i && r.noent_okay) return { path: a };
                                throw e;
                            }
                            if (
                                (ey.isMountpoint(o) && (!i || r.follow_mount) && (o = o.mounted.root),
                                ey.isLink(o.mode) && (!i || r.follow))
                            ) {
                                if (!o.node_ops.readlink) throw new ey.ErrnoError(52);
                                var l = o.node_ops.readlink(o);
                                (X.isAbs(l) || (l = X.dirname(a) + "/" + l), (e = l + "/" + n.slice(s + 1).join("/")));
                                continue e;
                            }
                        }
                    }
                    return { path: a, node: o };
                }
                throw new ey.ErrnoError(32);
            },
            getPath(e) {
                for (var r; ;) {
                    if (ey.isRoot(e)) {
                        var t = e.mount.mountpoint;
                        if (!r) return t;
                        return "/" !== t[t.length - 1] ? `${t}/${r}` : t + r;
                    }
                    ((r = r ? `${e.name}/${r}` : e.name), (e = e.parent));
                }
            },
            hashName(e, r) {
                for (var t = 0, n = 0; n < r.length; n++) t = ((t << 5) - t + r.charCodeAt(n)) | 0;
                return ((e + t) >>> 0) % ey.nameTable.length;
            },
            hashAddNode(e) {
                var r = ey.hashName(e.parent.id, e.name);
                ((e.name_next = ey.nameTable[r]), (ey.nameTable[r] = e));
            },
            hashRemoveNode(e) {
                var r = ey.hashName(e.parent.id, e.name);
                if (ey.nameTable[r] === e) ey.nameTable[r] = e.name_next;
                else
                    for (var t = ey.nameTable[r]; t;) {
                        if (t.name_next === e) {
                            t.name_next = e.name_next;
                            break;
                        }
                        t = t.name_next;
                    }
            },
            lookupNode(e, r) {
                var t = ey.mayLookup(e);
                if (t) throw new ey.ErrnoError(t);
                for (var n = ey.hashName(e.id, r), o = ey.nameTable[n]; o; o = o.name_next) {
                    var a = o.name;
                    if (o.parent.id === e.id && a === r) return o;
                }
                return ey.lookup(e, r);
            },
            createNode(e, r, t, n) {
                var o = new ey.FSNode(e, r, t, n);
                return (ey.hashAddNode(o), o);
            },
            destroyNode(e) {
                ey.hashRemoveNode(e);
            },
            isRoot: (e) => e === e.parent,
            isMountpoint: (e) => !!e.mounted,
            isFile: (e) => (61440 & e) == 32768,
            isDir: (e) => (61440 & e) == 16384,
            isLink: (e) => (61440 & e) == 40960,
            isChrdev: (e) => (61440 & e) == 8192,
            isBlkdev: (e) => (61440 & e) == 24576,
            isFIFO: (e) => (61440 & e) == 4096,
            isSocket: (e) => (49152 & e) == 49152,
            flagsToPermissionString(e) {
                var r = ["r", "w", "rw"][3 & e];
                return (512 & e && (r += "w"), r);
            },
            nodePermissions: (e, r) =>
                ey.ignorePermissions
                    ? 0
                    : (r.includes("r") && !(292 & e.mode)) ||
                        (r.includes("w") && !(146 & e.mode)) ||
                        (r.includes("x") && !(73 & e.mode))
                      ? 2
                      : 0,
            mayLookup(e) {
                if (!ey.isDir(e.mode)) return 54;
                var r = ey.nodePermissions(e, "x");
                return r || 2 * !e.node_ops.lookup;
            },
            mayCreate(e, r) {
                if (!ey.isDir(e.mode)) return 54;
                try {
                    return (ey.lookupNode(e, r), 20);
                } catch (e) {}
                return ey.nodePermissions(e, "wx");
            },
            mayDelete(e, r, t) {
                try {
                    n = ey.lookupNode(e, r);
                } catch (e) {
                    return e.errno;
                }
                var n,
                    o = ey.nodePermissions(e, "wx");
                if (o) return o;
                if (t) {
                    if (!ey.isDir(n.mode)) return 54;
                    if (ey.isRoot(n) || ey.getPath(n) === ey.cwd()) return 10;
                } else if (ey.isDir(n.mode)) return 31;
                return 0;
            },
            mayOpen(e, r) {
                if (!e) return 44;
                if (ey.isLink(e.mode)) return 32;
                var t = ey.flagsToPermissionString(r);
                return ey.isDir(e.mode) && ("r" !== t || 576 & r) ? 31 : ey.nodePermissions(e, t);
            },
            checkOpExists(e, r) {
                if (!e) throw new ey.ErrnoError(r);
                return e;
            },
            MAX_OPEN_FDS: 4096,
            nextfd() {
                for (var e = 0; e <= ey.MAX_OPEN_FDS; e++) if (!ey.streams[e]) return e;
                throw new ey.ErrnoError(33);
            },
            getStreamChecked(e) {
                var r = ey.getStream(e);
                if (!r) throw new ey.ErrnoError(8);
                return r;
            },
            getStream: (e) => ey.streams[e],
            createStream(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                return (
                    (e = Object.assign(new ey.FSStream(), e)),
                    -1 == r && (r = ey.nextfd()),
                    (e.fd = r),
                    (ey.streams[r] = e),
                    e
                );
            },
            closeStream(e) {
                ey.streams[e] = null;
            },
            dupStream(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                var t = ey.createStream(e, r);
                return (t.stream_ops?.dup?.(t), t);
            },
            doSetAttr(e, r, t) {
                var n = e?.stream_ops.setattr,
                    o = n ? e : r;
                ((n ??= r.node_ops.setattr), ey.checkOpExists(n, 63));
                try {
                    n(o, t);
                } catch (e) {
                    if (e instanceof RangeError) throw new ey.ErrnoError(22);
                    throw e;
                }
            },
            chrdev_stream_ops: {
                open(e) {
                    var r = ey.getDevice(e.node.rdev);
                    ((e.stream_ops = r.stream_ops), e.stream_ops.open?.(e));
                },
                llseek() {
                    throw new ey.ErrnoError(70);
                },
            },
            major: (e) => e >> 8,
            minor: (e) => 255 & e,
            makedev: (e, r) => (e << 8) | r,
            registerDevice(e, r) {
                ey.devices[e] = { stream_ops: r };
            },
            getDevice: (e) => ey.devices[e],
            getMounts(e) {
                for (var r = [], t = [e]; t.length;) {
                    var n = t.pop();
                    (r.push(n), t.push(...n.mounts));
                }
                return r;
            },
            syncfs(e, r) {
                ("function" == typeof e && ((r = e), (e = !1)),
                    ey.syncFSRequests++,
                    ey.syncFSRequests > 1 &&
                        M(
                            `warning: ${ey.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
                        ));
                var t = ey.getMounts(ey.root.mount),
                    n = 0;
                function o(e) {
                    return (ey.syncFSRequests--, r(e));
                }
                function a(e) {
                    if (e) return a.errored ? void 0 : ((a.errored = !0), o(e));
                    ++n >= t.length && o(null);
                }
                for (var s of t) s.type.syncfs ? s.type.syncfs(s, e, a) : a(null);
            },
            mount(e, r, t) {
                var n,
                    o = "/" === t,
                    a = !t;
                if (o && ey.root) throw new ey.ErrnoError(10);
                if (!o && !a) {
                    var s = ey.lookupPath(t, { follow_mount: !1 });
                    if (((t = s.path), (n = s.node), ey.isMountpoint(n))) throw new ey.ErrnoError(10);
                    if (!ey.isDir(n.mode)) throw new ey.ErrnoError(54);
                }
                var i = { type: e, opts: r, mountpoint: t, mounts: [] },
                    l = e.mount(i);
                return (
                    (l.mount = i),
                    (i.root = l),
                    o ? (ey.root = l) : n && ((n.mounted = i), n.mount && n.mount.mounts.push(i)),
                    l
                );
            },
            unmount(e) {
                var r = ey.lookupPath(e, { follow_mount: !1 });
                if (!ey.isMountpoint(r.node)) throw new ey.ErrnoError(28);
                var t = r.node,
                    n = t.mounted,
                    o = ey.getMounts(n);
                for (var [a, s] of Object.entries(ey.nameTable))
                    for (; s;) {
                        var i = s.name_next;
                        (o.includes(s.mount) && ey.destroyNode(s), (s = i));
                    }
                t.mounted = null;
                var l = t.mount.mounts.indexOf(n);
                t.mount.mounts.splice(l, 1);
            },
            lookup: (e, r) => e.node_ops.lookup(e, r),
            mknod(e, r, t) {
                var n = ey.lookupPath(e, { parent: !0 }).node,
                    o = X.basename(e);
                if (!o) throw new ey.ErrnoError(28);
                if ("." === o || ".." === o) throw new ey.ErrnoError(20);
                var a = ey.mayCreate(n, o);
                if (a) throw new ey.ErrnoError(a);
                if (!n.node_ops.mknod) throw new ey.ErrnoError(63);
                return n.node_ops.mknod(n, o, r, t);
            },
            statfs: (e) => ey.statfsNode(ey.lookupPath(e, { follow: !0 }).node),
            statfsStream: (e) => ey.statfsNode(e.node),
            statfsNode(e) {
                var r = {
                    bsize: 4096,
                    frsize: 4096,
                    blocks: 1e6,
                    bfree: 5e5,
                    bavail: 5e5,
                    files: ey.nextInode,
                    ffree: ey.nextInode - 1,
                    fsid: 42,
                    flags: 2,
                    namelen: 255,
                };
                return (e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r);
            },
            create(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                return ((r &= 4095), (r |= 32768), ey.mknod(e, r, 0));
            },
            mkdir(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                return ((r &= 1023), (r |= 16384), ey.mknod(e, r, 0));
            },
            mkdirTree(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                var t = e.split("/"),
                    n = "";
                for (var o of t)
                    if (o) {
                        ((n || X.isAbs(e)) && (n += "/"), (n += o));
                        try {
                            ey.mkdir(n, r);
                        } catch (e) {
                            if (20 != e.errno) throw e;
                        }
                    }
            },
            mkdev: (e, r, t) => (void 0 === t && ((t = r), (r = 438)), (r |= 8192), ey.mknod(e, r, t)),
            symlink(e, r) {
                if (!Y.resolve(e)) throw new ey.ErrnoError(44);
                var t = ey.lookupPath(r, { parent: !0 }).node;
                if (!t) throw new ey.ErrnoError(44);
                var n = X.basename(r),
                    o = ey.mayCreate(t, n);
                if (o) throw new ey.ErrnoError(o);
                if (!t.node_ops.symlink) throw new ey.ErrnoError(63);
                return t.node_ops.symlink(t, n, e);
            },
            link(e, r, t) {
                var n = ey.lookupPath(r, { parent: !0 }).node;
                if (!n) throw new ey.ErrnoError(44);
                var o = X.basename(r),
                    a = ey.mayCreate(n, o);
                if (a) throw new ey.ErrnoError(a);
                if (!n.node_ops.link) throw new ey.ErrnoError(34);
                return n.node_ops.link(n, o, e, t);
            },
            rename(e, r) {
                var t,
                    n,
                    o,
                    a = X.dirname(e),
                    s = X.dirname(r),
                    i = X.basename(e),
                    l = X.basename(r);
                if (
                    ((t = ey.lookupPath(e, { parent: !0 }).node), (n = ey.lookupPath(r, { parent: !0 }).node), !t || !n)
                )
                    throw new ey.ErrnoError(44);
                if (t.mount !== n.mount) throw new ey.ErrnoError(75);
                var u = ey.lookupNode(t, i),
                    d = Y.relative(e, s);
                if ("." !== d.charAt(0)) throw new ey.ErrnoError(28);
                if ("." !== (d = Y.relative(r, a)).charAt(0)) throw new ey.ErrnoError(55);
                try {
                    o = ey.lookupNode(n, l);
                } catch (e) {}
                if (u !== o) {
                    var c = ey.isDir(u.mode),
                        h = ey.mayDelete(t, i, c);
                    if (h || (h = o ? ey.mayDelete(n, l, c) : ey.mayCreate(n, l))) throw new ey.ErrnoError(h);
                    if (!t.node_ops.rename) throw new ey.ErrnoError(63);
                    if (ey.isMountpoint(u) || (o && ey.isMountpoint(o))) throw new ey.ErrnoError(10);
                    if (n !== t && (h = ey.nodePermissions(t, "w"))) throw new ey.ErrnoError(h);
                    ey.hashRemoveNode(u);
                    try {
                        (t.node_ops.rename(u, n, l), o && ey.hashRemoveNode(o), (u.parent = n));
                    } catch (e) {
                        throw e;
                    } finally {
                        ey.hashAddNode(u);
                    }
                }
            },
            rmdir(e) {
                var r = ey.lookupPath(e, { parent: !0 }).node,
                    t = X.basename(e),
                    n = ey.lookupNode(r, t),
                    o = ey.mayDelete(r, t, !0);
                if (o) throw new ey.ErrnoError(o);
                if (!r.node_ops.rmdir) throw new ey.ErrnoError(63);
                if (ey.isMountpoint(n)) throw new ey.ErrnoError(10);
                (r.node_ops.rmdir(r, t), ey.destroyNode(n));
            },
            readdir(e) {
                var r = ey.lookupPath(e, { follow: !0 }).node;
                return ey.checkOpExists(r.node_ops.readdir, 54)(r);
            },
            unlink(e) {
                var r = ey.lookupPath(e, { parent: !0 }).node;
                if (!r) throw new ey.ErrnoError(44);
                var t = X.basename(e),
                    n = ey.lookupNode(r, t),
                    o = ey.mayDelete(r, t, !1);
                if (o) throw new ey.ErrnoError(o);
                if (!r.node_ops.unlink) throw new ey.ErrnoError(63);
                if (ey.isMountpoint(n)) throw new ey.ErrnoError(10);
                (r.node_ops.unlink(r, t), ey.destroyNode(n));
            },
            readlink(e) {
                var r = ey.lookupPath(e).node;
                if (!r) throw new ey.ErrnoError(44);
                if (!r.node_ops.readlink) throw new ey.ErrnoError(28);
                return r.node_ops.readlink(r);
            },
            stat(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var t = ey.lookupPath(e, { follow: !r }).node;
                return ey.checkOpExists(t.node_ops.getattr, 63)(t);
            },
            fstat(e) {
                var r = ey.getStreamChecked(e),
                    t = r.node,
                    n = r.stream_ops.getattr,
                    o = n ? r : t;
                return ((n ??= t.node_ops.getattr), ey.checkOpExists(n, 63), n(o));
            },
            lstat: (e) => ey.stat(e, !0),
            doChmod(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                ey.doSetAttr(e, r, { mode: (4095 & t) | (-4096 & r.mode), ctime: Date.now(), dontFollow: n });
            },
            chmod(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ("string" == typeof e) {
                    var n;
                    n = ey.lookupPath(e, { follow: !t }).node;
                } else n = e;
                ey.doChmod(null, n, r, t);
            },
            lchmod(e, r) {
                ey.chmod(e, r, !0);
            },
            fchmod(e, r) {
                var t = ey.getStreamChecked(e);
                ey.doChmod(t, t.node, r, !1);
            },
            doChown(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                ey.doSetAttr(e, r, { timestamp: Date.now(), dontFollow: t });
            },
            chown(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if ("string" == typeof e) {
                    var o;
                    o = ey.lookupPath(e, { follow: !n }).node;
                } else o = e;
                ey.doChown(null, o, n);
            },
            lchown(e, r, t) {
                ey.chown(e, r, t, !0);
            },
            fchown(e, r, t) {
                var n = ey.getStreamChecked(e);
                ey.doChown(n, n.node, !1);
            },
            doTruncate(e, r, t) {
                if (ey.isDir(r.mode)) throw new ey.ErrnoError(31);
                if (!ey.isFile(r.mode)) throw new ey.ErrnoError(28);
                var n = ey.nodePermissions(r, "w");
                if (n) throw new ey.ErrnoError(n);
                ey.doSetAttr(e, r, { size: t, timestamp: Date.now() });
            },
            truncate(e, r) {
                if (r < 0) throw new ey.ErrnoError(28);
                if ("string" == typeof e) {
                    var t;
                    t = ey.lookupPath(e, { follow: !0 }).node;
                } else t = e;
                ey.doTruncate(null, t, r);
            },
            ftruncate(e, r) {
                var t = ey.getStreamChecked(e);
                if (r < 0 || (2097155 & t.flags) == 0) throw new ey.ErrnoError(28);
                ey.doTruncate(t, t.node, r);
            },
            utime(e, r, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                var o = ey.lookupPath(e, { follow: !n });
                ey.doSetAttr(null, o.node, { atime: r, mtime: t, dontFollow: n });
            },
            open(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                if ("" === e) throw new ey.ErrnoError(44);
                if (
                    ((t =
                        64 &
                        (r = ((e) => {
                            if ("string" != typeof e) return e;
                            var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e];
                            if (void 0 === r) throw Error(`Unknown file open mode: ${e}`);
                            return r;
                        })(r))
                            ? (4095 & t) | 32768
                            : 0),
                    "object" == typeof e)
                )
                    n = e;
                else {
                    var n,
                        o = e.endsWith("/"),
                        a = ey.lookupPath(e, { follow: !(131072 & r), noent_okay: !0 });
                    ((n = a.node), (e = a.path));
                }
                var s = !1;
                if (64 & r)
                    if (n) {
                        if (128 & r) throw new ey.ErrnoError(20);
                    } else if (o) throw new ey.ErrnoError(31);
                    else ((n = ey.mknod(e, 511 | t, 0)), (s = !0));
                if (!n) throw new ey.ErrnoError(44);
                if ((ey.isChrdev(n.mode) && (r &= -513), 65536 & r && !ey.isDir(n.mode))) throw new ey.ErrnoError(54);
                if (!s) {
                    var i = ey.mayOpen(n, r);
                    if (i) throw new ey.ErrnoError(i);
                }
                (512 & r && !s && ey.truncate(n, 0), (r &= -131713));
                var l = ey.createStream({
                    node: n,
                    path: ey.getPath(n),
                    flags: r,
                    seekable: !0,
                    position: 0,
                    stream_ops: n.stream_ops,
                    ungotten: [],
                    error: !1,
                });
                return (l.stream_ops.open && l.stream_ops.open(l), s && ey.chmod(n, 511 & t), l);
            },
            close(e) {
                if (ey.isClosed(e)) throw new ey.ErrnoError(8);
                (e.getdents && (e.getdents = null), e.node?.notifyListeners(32));
                try {
                    e.stream_ops.close && e.stream_ops.close(e);
                } catch (e) {
                    throw e;
                } finally {
                    ey.closeStream(e.fd);
                }
                e.fd = null;
            },
            isClosed: (e) => null === e.fd,
            llseek(e, r, t) {
                if (ey.isClosed(e)) throw new ey.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek) throw new ey.ErrnoError(70);
                if (0 != t && 1 != t && 2 != t) throw new ey.ErrnoError(28);
                return ((e.position = e.stream_ops.llseek(e, r, t)), (e.ungotten = []), e.position);
            },
            read(e, r, t, n, o) {
                if (n < 0 || o < 0) throw new ey.ErrnoError(28);
                if (ey.isClosed(e) || (2097155 & e.flags) == 1) throw new ey.ErrnoError(8);
                if (ey.isDir(e.node.mode)) throw new ey.ErrnoError(31);
                if (!e.stream_ops.read) throw new ey.ErrnoError(28);
                var a = void 0 !== o;
                if (a) {
                    if (!e.seekable) throw new ey.ErrnoError(70);
                } else o = e.position;
                var s = e.stream_ops.read(e, r, t, n, o);
                return (a || (e.position += s), s);
            },
            write(e, r, t, n, o, a) {
                if (n < 0 || o < 0) throw new ey.ErrnoError(28);
                if (ey.isClosed(e) || (2097155 & e.flags) == 0) throw new ey.ErrnoError(8);
                if (ey.isDir(e.node.mode)) throw new ey.ErrnoError(31);
                if (!e.stream_ops.write) throw new ey.ErrnoError(28);
                e.seekable && 1024 & e.flags && ey.llseek(e, 0, 2);
                var s = void 0 !== o;
                if (s) {
                    if (!e.seekable) throw new ey.ErrnoError(70);
                } else o = e.position;
                var i = e.stream_ops.write(e, r, t, n, o, a);
                return (s || (e.position += i), i);
            },
            mmap(e, r, t, n, o) {
                if ((2 & n && !(2 & o) && (2097155 & e.flags) != 2) || (2097155 & e.flags) == 1)
                    throw new ey.ErrnoError(2);
                if (!e.stream_ops.mmap) throw new ey.ErrnoError(43);
                if (!r) throw new ey.ErrnoError(28);
                return e.stream_ops.mmap(e, r, t, n, o);
            },
            msync: (e, r, t, n, o) => (e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0),
            ioctl(e, r, t) {
                if (!e.stream_ops.ioctl) throw new ey.ErrnoError(59);
                return e.stream_ops.ioctl(e, r, t);
            },
            readFile(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ((r.flags ??= 0),
                    (r.encoding ??= "binary"),
                    "utf8" !== r.encoding && "binary" !== r.encoding && R(`Invalid encoding type "${r.encoding}"`));
                var t = ey.open(e, r.flags),
                    n = ey.stat(e).size,
                    o = new Uint8Array(n);
                return (ey.read(t, o, 0, n, 0), "utf8" === r.encoding && (o = Q(o)), ey.close(t), o);
            },
            writeFile(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t.flags ??= 577;
                var n = ey.open(e, t.flags, t.mode);
                ((r = el(r)), ey.write(n, r, 0, r.byteLength, void 0, t.canOwn), ey.close(n));
            },
            cwd: () => ey.currentPath,
            chdir(e) {
                var r = ey.lookupPath(e, { follow: !0 });
                if (null === r.node) throw new ey.ErrnoError(44);
                if (!ey.isDir(r.node.mode)) throw new ey.ErrnoError(54);
                var t = ey.nodePermissions(r.node, "x");
                if (t) throw new ey.ErrnoError(t);
                ey.currentPath = r.path;
            },
            createDefaultDirectories() {
                (ey.mkdir("/tmp"), ey.mkdir("/home"), ey.mkdir("/home/web_user"));
            },
            createDefaultDevices() {
                (ey.mkdir("/dev"),
                    ey.registerDevice(ey.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n,
                        llseek: () => 0,
                    }),
                    ey.mkdev("/dev/null", ey.makedev(1, 3)),
                    eo.register(ey.makedev(5, 0), eo.default_tty_ops),
                    eo.register(ey.makedev(6, 0), eo.default_tty1_ops),
                    ey.mkdev("/dev/tty", ey.makedev(5, 0)),
                    ey.mkdev("/dev/tty1", ey.makedev(6, 0)));
                var e = new Uint8Array(1024),
                    r = 0,
                    t = () => (r || (K(e), (r = e.byteLength)), e[--r]);
                (ey.createDevice("/dev", "random", t),
                    ey.createDevice("/dev", "urandom", t),
                    ey.mkdir("/dev/shm"),
                    ey.mkdir("/dev/shm/tmp"));
            },
            createSpecialDirectories() {
                ey.mkdir("/proc");
                var e = ey.mkdir("/proc/self");
                (ey.mkdir("/proc/self/fd"),
                    ey.mount(
                        {
                            mount() {
                                var r = ey.createNode(e, "fd", 16895, 73);
                                return (
                                    (r.stream_ops = { llseek: ei.stream_ops.llseek }),
                                    (r.node_ops = {
                                        lookup(e, r) {
                                            var t = +r,
                                                n = ey.getStreamChecked(t),
                                                o = {
                                                    parent: null,
                                                    mount: { mountpoint: "fake" },
                                                    node_ops: { readlink: () => n.path },
                                                    id: t + 1,
                                                };
                                            return ((o.parent = o), o);
                                        },
                                        readdir: () =>
                                            Array.from(ey.streams.entries())
                                                .filter((e) => {
                                                    let [r, t] = e;
                                                    return t;
                                                })
                                                .map((e) => {
                                                    let [r, t] = e;
                                                    return r.toString();
                                                }),
                                    }),
                                    r
                                );
                            },
                        },
                        {},
                        "/proc/self/fd",
                    ));
            },
            createStandardStreams(e, r, t) {
                (e ? ey.createDevice("/dev", "stdin", e) : ey.symlink("/dev/tty", "/dev/stdin"),
                    r ? ey.createDevice("/dev", "stdout", null, r) : ey.symlink("/dev/tty", "/dev/stdout"),
                    t ? ey.createDevice("/dev", "stderr", null, t) : ey.symlink("/dev/tty1", "/dev/stderr"),
                    ey.open("/dev/stdin", 0),
                    ey.open("/dev/stdout", 1),
                    ey.open("/dev/stderr", 1));
            },
            staticInit() {
                ((ey.nameTable.length = 4096),
                    ey.mount(ei, {}, "/"),
                    ey.createDefaultDirectories(),
                    ey.createDefaultDevices(),
                    ey.createSpecialDirectories(),
                    (ey.filesystems = { MEMFS: ei }));
            },
            init(e, r, t) {
                ((ey.initialized = !0),
                    (e ??= n.stdin),
                    (r ??= n.stdout),
                    (t ??= n.stderr),
                    ey.createStandardStreams(e, r, t));
            },
            quit() {
                for (var e of ((ey.initialized = !1), ey.streams)) e && ey.close(e);
            },
            analyzePath(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                try {
                    var t = ey.lookupPath(e, { follow: !r });
                    e = t.path;
                } catch (e) {}
                var n = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null,
                };
                try {
                    var t = ey.lookupPath(e, { parent: !0 });
                    ((n.parentExists = !0),
                        (n.parentPath = t.path),
                        (n.parentObject = t.node),
                        (n.name = X.basename(e)),
                        (t = ey.lookupPath(e, { follow: !r })),
                        (n.exists = !0),
                        (n.path = t.path),
                        (n.object = t.node),
                        (n.name = t.node.name),
                        (n.isRoot = "/" === t.path));
                } catch (e) {
                    n.error = e.errno;
                }
                return n;
            },
            createPath(e, r, t, n) {
                e = "string" == typeof e ? e : ey.getPath(e);
                for (var o = r.split("/").reverse(); o.length;) {
                    var a = o.pop();
                    if (a) {
                        var s = X.join2(e, a);
                        try {
                            ey.mkdir(s);
                        } catch (e) {
                            if (20 != e.errno) throw e;
                        }
                        e = s;
                    }
                }
                return s;
            },
            createFile(e, r, t, n, o) {
                var a = X.join2("string" == typeof e ? e : ey.getPath(e), r),
                    s = eu(n, o);
                return ey.create(a, s);
            },
            createDataFile(e, r, t, n, o, a) {
                var s = r;
                e && ((e = "string" == typeof e ? e : ey.getPath(e)), (s = r ? X.join2(e, r) : e));
                var i = eu(n, o),
                    l = ey.create(s, i);
                if (t) {
                    ((t = el(t)), ey.chmod(l, 146 | i));
                    var u = ey.open(l, 577);
                    (ey.write(u, t, 0, t.length, 0, a), ey.close(u), ey.chmod(l, i));
                }
            },
            createDevice(e, r, t, n) {
                var o = X.join2("string" == typeof e ? e : ey.getPath(e), r),
                    a = eu(!!t, !!n);
                ey.createDevice.major ??= 64;
                var s = ey.makedev(ey.createDevice.major++, 0);
                return (
                    ey.registerDevice(s, {
                        open(e) {
                            e.seekable = !1;
                        },
                        close(e) {
                            n?.buffer?.length && n(10);
                        },
                        read(e, r, n, o, a) {
                            for (var s, i = 0, l = 0; l < o; l++) {
                                try {
                                    s = t();
                                } catch (e) {
                                    throw new ey.ErrnoError(29);
                                }
                                if (void 0 === s && !i) throw new ey.ErrnoError(6);
                                if (null == s) break;
                                (i++, (r[n + l] = s));
                            }
                            return (i && (e.node.atime = Date.now()), i);
                        },
                        write(e, r, t, o, a) {
                            for (var s = 0; s < o; s++)
                                try {
                                    n(r[t + s]);
                                } catch (e) {
                                    throw new ey.ErrnoError(29);
                                }
                            return (o && (e.node.mtime = e.node.ctime = Date.now()), s);
                        },
                    }),
                    ey.mkdev(o, a, s)
                );
            },
            forceLoadFile(e) {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if (globalThis.XMLHttpRequest)
                    R(
                        "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                    );
                else
                    try {
                        e.contents = a(e.url);
                    } catch (e) {
                        throw new ey.ErrnoError(29);
                    }
            },
            createLazyFile(e, r, t, n, o) {
                if (globalThis.XMLHttpRequest) {
                    R(
                        "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc",
                    );
                    var a = {
                        isDevice: !1,
                        contents: new (class {
                            lengthKnown = !1;
                            chunks = [];
                            get(e) {
                                if (!(e > this.length - 1) && !(e < 0)) {
                                    var r = e % this.chunkSize,
                                        t = (e / this.chunkSize) | 0;
                                    return this.getter(t)[r];
                                }
                            }
                            setDataGetter(e) {
                                this.getter = e;
                            }
                            cacheLength() {
                                var e,
                                    r = new XMLHttpRequest();
                                (r.open("HEAD", t, !1),
                                    r.send(null),
                                    (r.status >= 200 && r.status < 300) ||
                                        304 === r.status ||
                                        R(`Couldn't load ${t}. Status: ${r.status}`));
                                var n = Number(r.getResponseHeader("Content-length")),
                                    o = (e = r.getResponseHeader("Accept-Ranges")) && "bytes" === e,
                                    a = (e = r.getResponseHeader("Content-Encoding")) && "gzip" === e,
                                    s = 1048576;
                                o || (s = n);
                                var i = this;
                                (i.setDataGetter((e) => {
                                    var r,
                                        o,
                                        a = e * s,
                                        l = (e + 1) * s - 1;
                                    return (
                                        (l = Math.min(l, n - 1)),
                                        void 0 === i.chunks[e] &&
                                            (i.chunks[e] =
                                                (a > (r = l) && R(`invalid range (${a}, ${r}) or no bytes requested!`),
                                                r > n - 1 && R(`only ${n} bytes available! programmer error!`),
                                                ((o = new XMLHttpRequest()).open("GET", t, !1),
                                                n !== s && o.setRequestHeader("Range", `bytes=${a}-${r}`),
                                                (o.responseType = "arraybuffer"),
                                                o.overrideMimeType &&
                                                    o.overrideMimeType("text/plain; charset=x-user-defined"),
                                                o.send(null),
                                                (o.status >= 200 && o.status < 300) ||
                                                    304 === o.status ||
                                                    R(`Couldn't load ${t}. Status: ${o.status}`),
                                                void 0 !== o.response)
                                                    ? new Uint8Array(o.response || [])
                                                    : en(o.responseText ?? "", !0))),
                                        void 0 === i.chunks[e] && R("doXHR failed!"),
                                        i.chunks[e]
                                    );
                                }),
                                    (a || !n) &&
                                        ((s = n = 1),
                                        (s = n = this.getter(0).length),
                                        A(
                                            "LazyFiles on gzip forces download of the whole file when length is accessed",
                                        )),
                                    (this._length = n),
                                    (this._chunkSize = s),
                                    (this.lengthKnown = !0));
                            }
                            get length() {
                                return (this.lengthKnown || this.cacheLength(), this._length);
                            }
                            get chunkSize() {
                                return (this.lengthKnown || this.cacheLength(), this._chunkSize);
                            }
                        })(),
                    };
                } else var a = { isDevice: !1, url: t };
                var s = ey.createFile(e, r, a, n, o);
                (a.contents ? (s.contents = a.contents) : a.url && ((s.contents = null), (s.url = a.url)),
                    Object.defineProperties(s, {
                        usedBytes: {
                            get: function () {
                                return this.contents.length;
                            },
                        },
                    }));
                var i = {};
                for (let [e, r] of Object.entries(s.stream_ops))
                    i[e] = function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return (ey.forceLoadFile(s), r(...t));
                    };
                function u(e, r, t, n, o) {
                    var a = e.node.contents;
                    if (o >= a.length) return 0;
                    var s = Math.min(a.length - o, n);
                    if (a.slice) for (var i = 0; i < s; i++) r[t + i] = a[o + i];
                    else for (var i = 0; i < s; i++) r[t + i] = a.get(o + i);
                    return s;
                }
                return (
                    (i.read = (e, r, t, n, o) => (ey.forceLoadFile(s), u(e, r, t, n, o))),
                    (i.mmap = (e, r, t, n, o) => {
                        ey.forceLoadFile(s);
                        var a = es(r);
                        if (!a) throw new ey.ErrnoError(48);
                        return (u(e, l, a, r, t), { ptr: a, allocated: !0 });
                    }),
                    (s.stream_ops = i),
                    s
                );
            },
        },
        eE = (e, r, t) => (e ? Q(c, e, r, t) : ""),
        eb = {
            currentUmask: 18,
            calculateAt(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (X.isAbs(r)) return r;
                if (-100 === e) n = ey.cwd();
                else {
                    var n;
                    n = eb.getStreamFromFD(e).path;
                }
                if (0 == r.length) {
                    if (!t) throw new ey.ErrnoError(44);
                    return n;
                }
                return n + "/" + r;
            },
            writeStat(e, r) {
                ((u[e >> 2] = r.dev),
                    (u[(e + 4) >> 2] = r.mode),
                    (u[(e + 8) >> 2] = r.nlink),
                    (u[(e + 12) >> 2] = r.uid),
                    (u[(e + 16) >> 2] = r.gid),
                    (u[(e + 20) >> 2] = r.rdev),
                    (h[(e + 24) >> 3] = BigInt(r.size)),
                    (d[(e + 32) >> 2] = 4096),
                    (d[(e + 36) >> 2] = r.blocks));
                var t = r.atimeMs ?? r.atime.getTime(),
                    n = r.mtimeMs ?? r.mtime.getTime(),
                    o = r.ctimeMs ?? r.ctime.getTime();
                return (
                    (h[(e + 40) >> 3] = BigInt(Math.floor(t / 1e3))),
                    (u[(e + 48) >> 2] = Math.floor((t % 1e3) * 1e6)),
                    (h[(e + 56) >> 3] = BigInt(Math.floor(n / 1e3))),
                    (u[(e + 64) >> 2] = Math.floor((n % 1e3) * 1e6)),
                    (h[(e + 72) >> 3] = BigInt(Math.floor(o / 1e3))),
                    (u[(e + 80) >> 2] = Math.floor((o % 1e3) * 1e6)),
                    (h[(e + 88) >> 3] = BigInt(r.ino)),
                    0
                );
            },
            writeStatFs(e, r) {
                ((u[(e + 4) >> 2] = r.bsize),
                    (u[(e + 60) >> 2] = r.bsize),
                    (h[(e + 8) >> 3] = BigInt(r.blocks)),
                    (h[(e + 16) >> 3] = BigInt(r.bfree)),
                    (h[(e + 24) >> 3] = BigInt(r.bavail)),
                    (h[(e + 32) >> 3] = BigInt(r.files)),
                    (h[(e + 40) >> 3] = BigInt(r.ffree)),
                    (u[(e + 48) >> 2] = r.fsid),
                    (u[(e + 64) >> 2] = r.flags),
                    (u[(e + 56) >> 2] = r.namelen));
            },
            doMsync(e, r, t, n, o) {
                if (!ey.isFile(r.node.mode)) throw new ey.ErrnoError(43);
                if (2 & n) return 0;
                var a = c.subarray(e, e + t);
                ey.msync(r, a, o, t, n);
            },
            getStreamFromFD: (e) => ey.getStreamChecked(e),
            varargs: void 0,
            getStr: (e) => eE(e),
        },
        ek = (e, r, t) => et(e, c, r, t),
        e$ = (e) => {
            for (var r = ""; ;) {
                var t = c[e++];
                if (!t) return r;
                r += String.fromCharCode(t);
            }
        },
        e_ = {},
        eT = {},
        eP = {};
    class eC extends Error {
        constructor(e) {
            (super(e), (this.name = "BindingError"));
        }
    }
    var eS = (e) => {
        throw new eC(e);
    };
    function eD(e, r) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            var n = r.name;
            if ((e || eS(`type "${n}" must have a positive integer typeid pointer`), eT.hasOwnProperty(e)))
                if (t.ignoreDuplicateRegistrations) return;
                else eS(`Cannot register type '${n}' twice`);
            if (((eT[e] = r), delete eP[e], e_.hasOwnProperty(e))) {
                var o = e_[e];
                (delete e_[e], o.forEach((e) => e()));
            }
        })(e, r, t);
    }
    var eF = (e, r, t) => {
            switch (r) {
                case 1:
                    return t ? (e) => l[e] : (e) => c[e];
                case 2:
                    return t ? (e) => f[e >> 1] : (e) => p[e >> 1];
                case 4:
                    return t ? (e) => d[e >> 2] : (e) => u[e >> 2];
                case 8:
                    return t ? (e) => h[e >> 3] : (e) => m[e >> 3];
                default:
                    throw TypeError(`invalid integer width (${r}): ${e}`);
            }
        },
        eA = (e) => {
            eS(e.$$.ptrType.registeredClass.name + " instance already deleted");
        },
        eM = !1,
        ex = (e) => {},
        eO = (e) => {
            ((e.count.value -= 1),
                0 === e.count.value &&
                    (e.smartPtr
                        ? e.smartPtrType.rawDestructor(e.smartPtr)
                        : e.ptrType.registeredClass.rawDestructor(e.ptr)));
        },
        eR = (e) =>
            globalThis.FinalizationRegistry
                ? ((eM = new FinalizationRegistry((e) => {
                      eO(e.$$);
                  })),
                  (eR = (e) => {
                      var r = e.$$;
                      return (r.smartPtr && eM.register(e, { $$: r }, e), e);
                  }),
                  (ex = (e) => eM.unregister(e)),
                  eR(e))
                : ((eR = (e) => e), e),
        eN = [],
        eW = () => {
            for (; eN.length;) {
                var e = eN.pop();
                ((e.$$.deleteScheduled = !1), e.delete());
            }
        };
    function ej() {}
    var ez = (e, r) => Object.defineProperty(r, "name", { value: e }),
        eB = {},
        eU = (e, r, t) => {
            if (void 0 === e[r].overloadTable) {
                var n = e[r];
                ((e[r] = function () {
                    for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return (
                        e[r].overloadTable.hasOwnProperty(o.length) ||
                            eS(
                                `Function '${t}' called with an invalid number of arguments (${o.length}) - expects one of (${e[r].overloadTable})!`,
                            ),
                        e[r].overloadTable[o.length].apply(this, o)
                    );
                }),
                    (e[r].overloadTable = []),
                    (e[r].overloadTable[n.argCount] = n));
            }
        },
        eI = (e, r, t) => {
            n.hasOwnProperty(e)
                ? ((void 0 === t || (void 0 !== n[e].overloadTable && void 0 !== n[e].overloadTable[t])) &&
                      eS(`Cannot register public name '${e}' twice`),
                  eU(n, e, e),
                  n[e].overloadTable.hasOwnProperty(t) &&
                      eS(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),
                  (n[e].overloadTable[t] = r))
                : ((n[e] = r), (n[e].argCount = t));
        };
    function eL(e, r, t, n, o, a, s, i) {
        ((this.name = e),
            (this.constructor = r),
            (this.instancePrototype = t),
            (this.rawDestructor = n),
            (this.baseClass = o),
            (this.getActualType = a),
            (this.upcast = s),
            (this.downcast = i),
            (this.pureVirtualFunctions = []));
    }
    var eV = (e, r, t) => {
            for (; r !== t;)
                (r.upcast || eS(`Expected null or instance of ${t.name}, got an instance of ${r.name}`),
                    (e = r.upcast(e)),
                    (r = r.baseClass));
            return e;
        },
        eH = (e) => {
            if (null === e) return "null";
            var r = typeof e;
            return "object" === r || "array" === r || "function" === r ? e.toString() : "" + e;
        };
    function eq(e, r) {
        if (null === r) return (this.isReference && eS(`null is not a valid ${this.name}`), 0);
        (r.$$ || eS(`Cannot pass "${eH(r)}" as a ${this.name}`),
            r.$$.ptr || eS(`Cannot pass deleted object as a pointer of type ${this.name}`));
        var t = r.$$.ptrType.registeredClass;
        return eV(r.$$.ptr, t, this.registeredClass);
    }
    function eG(e, r) {
        if (null === r)
            return (this.isReference && eS(`null is not a valid ${this.name}`), this.isSmartPointer)
                ? ((t = this.rawConstructor()), null !== e && e.push(this.rawDestructor, t), t)
                : 0;
        ((r && r.$$) || eS(`Cannot pass "${eH(r)}" as a ${this.name}`),
            r.$$.ptr || eS(`Cannot pass deleted object as a pointer of type ${this.name}`),
            !this.isConst &&
                r.$$.ptrType.isConst &&
                eS(
                    `Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`,
                ));
        var t,
            n = r.$$.ptrType.registeredClass;
        if (((t = eV(r.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
            switch (
                (void 0 === r.$$.smartPtr && eS("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)
            ) {
                case 0:
                    r.$$.smartPtrType === this
                        ? (t = r.$$.smartPtr)
                        : eS(
                              `Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`,
                          );
                    break;
                case 1:
                    t = r.$$.smartPtr;
                    break;
                case 2:
                    if (r.$$.smartPtrType === this) t = r.$$.smartPtr;
                    else {
                        var o = r.clone();
                        ((t = this.rawShare(
                            t,
                            rl.toHandle(() => o.delete()),
                        )),
                            null !== e && e.push(this.rawDestructor, t));
                    }
                    break;
                default:
                    eS("Unsupported sharing policy");
            }
        return t;
    }
    function eX(e, r) {
        if (null === r) return (this.isReference && eS(`null is not a valid ${this.name}`), 0);
        (r.$$ || eS(`Cannot pass "${eH(r)}" as a ${this.name}`),
            r.$$.ptr || eS(`Cannot pass deleted object as a pointer of type ${this.name}`),
            r.$$.ptrType.isConst &&
                eS(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`));
        var t = r.$$.ptrType.registeredClass;
        return eV(r.$$.ptr, t, this.registeredClass);
    }
    function eK(e) {
        return this.fromWireType(u[e >> 2]);
    }
    var eY = (e, r, t) => {
            if (r === t) return e;
            if (void 0 === t.baseClass) return null;
            var n = eY(e, r, t.baseClass);
            return null === n ? null : t.downcast(n);
        },
        eZ = {};
    class eJ extends Error {
        constructor(e) {
            (super(e), (this.name = "InternalError"));
        }
    }
    var eQ = (e) => {
            throw new eJ(e);
        },
        e0 = (e, r) => (
            (r.ptrType && r.ptr) || eQ("makeClassHandle requires ptr and ptrType"),
            !!r.smartPtrType != !!r.smartPtr && eQ("Both smartPtrType and smartPtr must be specified"),
            (r.count = { value: 1 }),
            eR(Object.create(e, { $$: { value: r, writable: !0 } }))
        );
    function e1(e, r, t, n, o, a, s, i, l, u, d) {
        ((this.name = e),
            (this.registeredClass = r),
            (this.isReference = t),
            (this.isConst = n),
            (this.isSmartPointer = o),
            (this.pointeeType = a),
            (this.sharingPolicy = s),
            (this.rawGetPointee = i),
            (this.rawConstructor = l),
            (this.rawShare = u),
            (this.rawDestructor = d),
            o || void 0 !== r.baseClass
                ? (this.toWireType = eG)
                : (n ? (this.toWireType = eq) : (this.toWireType = eX), (this.destructorFunction = null)));
    }
    var e2 = (e, r, t) => {
            (n.hasOwnProperty(e) || eQ("Replacing nonexistent public symbol"),
                void 0 !== n[e].overloadTable && void 0 !== t
                    ? (n[e].overloadTable[t] = r)
                    : ((n[e] = r), (n[e].argCount = t)));
        },
        e4 = [],
        e3 = function (e, r) {
            (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], (e = e$(e)));
            var t,
                n = ((t = e4[r]) || (e4[r] = t = C.get(r)), t);
            return ("function" != typeof n && eS(`unknown function pointer with signature ${e}: ${r}`), n);
        };
    class e6 extends Error {}
    var e5 = (e) => {
            var r = y(e),
                t = e$(r);
            return (b(r), t);
        },
        e8 = (e, r) => {
            var t = [],
                n = {};
            throw (
                r.forEach(function e(r) {
                    if (!n[r] && !eT[r]) {
                        if (eP[r]) return void eP[r].forEach(e);
                        (t.push(r), (n[r] = !0));
                    }
                }),
                new e6(`${e}: ` + t.map(e5).join([", "]))
            );
        },
        e9 = (e, r, t) => {
            function n(r) {
                var n = t(r);
                n.length !== e.length && eQ("Mismatched type converter count");
                for (var o = 0; o < e.length; ++o) eD(e[o], n[o]);
            }
            e.forEach((e) => (eP[e] = r));
            var o = Array(r.length),
                a = [],
                s = 0;
            for (let [e, t] of r.entries())
                eT.hasOwnProperty(t)
                    ? (o[e] = eT[t])
                    : (a.push(t),
                      e_.hasOwnProperty(t) || (e_[t] = []),
                      e_[t].push(() => {
                          ((o[e] = eT[t]), ++s === a.length && n(o));
                      }));
            0 === a.length && n(o);
        },
        e7 = (e, r) => {
            for (var t = [], n = 0; n < e; n++) t.push(u[(r + 4 * n) >> 2]);
            return t;
        },
        re = (e) => {
            for (; e.length;) {
                var r = e.pop();
                e.pop()(r);
            }
        };
    function rr(e) {
        for (var r = 1; r < e.length; ++r) if (null !== e[r] && void 0 === e[r].destructorFunction) return !0;
        return !1;
    }
    function rt(e) {
        for (var r = 1; r < e.length; ++r) if (null !== e[r] && e[r].argStackAlloc) return !0;
        return !1;
    }
    function rn(e, r, t, n, o, a) {
        var s = r.length;
        s < 2 && eS("argTypes array size mismatch! Must at least get return value and receiver (this) types!");
        var i = null !== r[1] && null !== t,
            l = rr(r),
            u = rt(r),
            d = u && !a && !l;
        u && !d && (l = !0);
        var c = !r[0].isVoid,
            h = r[0],
            f = r[1],
            p = [e, eS, n, o, re, h.fromWireType.bind(h), f?.toWireType.bind(f)];
        d && p.push(V, L);
        for (var m = 2; m < s; ++m) {
            var v = r[m];
            p.push(v.toWireType.bind(v));
        }
        if (!l)
            for (var m = i ? 1 : 2; m < r.length; ++m)
                null !== r[m].destructorFunction && p.push(r[m].destructorFunction);
        return ez(
            e,
            (function (e, r, t, n) {
                var o = rr(e),
                    a = rt(e),
                    s = a && !n && !o;
                a && !s && (o = !0);
                var i = e.length - 2,
                    l = [],
                    u = ["fn"];
                r && u.push("thisWired");
                for (var d = 0; d < i; ++d) (l.push(`arg${d}`), u.push(`arg${d}Wired`));
                ((l = l.join()), (u = u.join()));
                var c = `return function (${l}) {
`;
                (o && (c += "var destructors = [];\n"), s && (c += "var sp = stackSave();\ntry {\n"));
                var h = o ? "destructors" : "null",
                    f = [
                        "humanName",
                        "throwBindingError",
                        "invoker",
                        "fn",
                        "runDestructors",
                        "fromRetWire",
                        "toClassParamWire",
                    ];
                (s && f.push("stackSave", "stackRestore"),
                    r &&
                        (c += `var thisWired = toClassParamWire(${h}, this);
`));
                for (var d = 0; d < i; ++d) {
                    var p = `toArg${d}Wire`;
                    ((c += `var arg${d}Wired = ${p}(${h}, arg${d});
`),
                        f.push(p));
                }
                if (
                    ((c +=
                        (t || n ? "var rv = " : "") +
                        `invoker(${u});
`),
                    s && (c += "} finally {\nstackRestore(sp);\n}\n"),
                    o)
                )
                    c += "runDestructors(destructors);\n";
                else
                    for (var d = r ? 1 : 2; d < e.length; ++d) {
                        var m = 1 === d ? "thisWired" : `arg${d - 2}Wired`;
                        null !== e[d].destructorFunction &&
                            ((c += `${m}_dtor(${m});
`),
                            f.push(`${m}_dtor`));
                    }
                return (t && (c += "var ret = fromRetWire(rv);\nreturn ret;\n"), Function(f, (c += "}\n")));
            })(
                r,
                i,
                c,
                a,
            )(...p),
        );
    }
    var ro = (e) => {
            let r = (e = e.trim()).indexOf("(");
            return -1 === r ? e : e.slice(0, r);
        },
        ra = [],
        rs = [0, 1, , 1, null, 1, !0, 1, !1, 1],
        ri = (e) => {
            e > 9 && 0 == --rs[e + 1] && (rs[e], (rs[e] = void 0), ra.push(e));
        },
        rl = {
            toValue: (e) => (e || eS(`Cannot use deleted val. handle = ${e}`), rs[e]),
            toHandle: (e) => {
                switch (e) {
                    case void 0:
                        return 2;
                    case null:
                        return 4;
                    case !0:
                        return 6;
                    case !1:
                        return 8;
                    default: {
                        let r = ra.pop() || rs.length;
                        return ((rs[r] = e), (rs[r + 1] = 1), r);
                    }
                }
            },
        },
        ru = {
            name: "emscripten::val",
            fromWireType: (e) => {
                var r = rl.toValue(e);
                return (ri(e), r);
            },
            toWireType: (e, r) => rl.toHandle(r),
            readValueFromPointer: eK,
            destructorFunction: null,
        },
        rd = (e, r, t) => {
            switch (r) {
                case 1:
                    return t
                        ? function (e) {
                              return this.fromWireType(l[e]);
                          }
                        : function (e) {
                              return this.fromWireType(c[e]);
                          };
                case 2:
                    return t
                        ? function (e) {
                              return this.fromWireType(f[e >> 1]);
                          }
                        : function (e) {
                              return this.fromWireType(p[e >> 1]);
                          };
                case 4:
                    return t
                        ? function (e) {
                              return this.fromWireType(d[e >> 2]);
                          }
                        : function (e) {
                              return this.fromWireType(u[e >> 2]);
                          };
                default:
                    throw TypeError(`invalid integer width (${r}): ${e}`);
            }
        },
        rc = (e, r) => {
            var t = eT[e];
            return (void 0 === t && eS(`${r} has unknown type ${e5(e)}`), t);
        },
        rh = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
        rf = (e, r, t) => {
            var n = e >> 1,
                o = J(p, n, r / 2, t);
            if (o - n > 16 && rh) return rh.decode(p.subarray(n, o));
            for (var a = "", s = n; s < o; ++s) a += String.fromCharCode(p[s]);
            return a;
        },
        rp = function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0x7fffffff;
            if (t < 2) return 0;
            for (var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0; a < o; ++a) {
                var s = e.charCodeAt(a);
                ((f[r >> 1] = s), (r += 2));
            }
            return ((f[r >> 1] = 0), r - n);
        },
        rm = (e) => 2 * e.length,
        rv = (e, r, t) => {
            for (var n = "", o = e >> 2, a = 0; !(a >= r / 4); a++) {
                var s = u[o + a];
                if (!s && !t) break;
                n += String.fromCodePoint(s);
            }
            return n;
        },
        rg = function (e, r) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0x7fffffff;
            if (t < 4) return 0;
            for (var n = r, o = n + t - 4, a = 0; a < e.length; ++a) {
                var s = e.codePointAt(a);
                if ((s > 65535 && a++, (d[r >> 2] = s), (r += 4) + 4 > o)) break;
            }
            return ((d[r >> 2] = 0), r - n);
        },
        rw = (e) => {
            for (var r = 0, t = 0; t < e.length; ++t) (e.codePointAt(t) > 65535 && t++, (r += 4));
            return r;
        },
        ry = [],
        rE = (e, r, t) => {
            var n = [],
                o = e(n, t);
            return (n.length && (u[r >> 2] = rl.toHandle(n)), o);
        },
        rb = {},
        rk = (e) => {
            var r = rb[e];
            return void 0 === r ? e$(e) : r;
        },
        r$ = (e) => (e < -0x20000000000000 || e > 0x20000000000000 ? NaN : Number(e)),
        r_ = () => Date.now(),
        rT = (e) => {
            var r = P.buffer.byteLength;
            try {
                return (P.grow(((e - r + 65535) / 65536) | 0), O(), 1);
            } catch (e) {}
        },
        rP = {},
        rC = () => {
            if (!rC.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
                    _: D,
                };
                for (var r in rP) void 0 === rP[r] ? delete e[r] : (e[r] = rP[r]);
                var t = [];
                for (var r in e) t.push(`${r}=${e[r]}`);
                rC.strings = t;
            }
            return rC.strings;
        };
    ((ey.createPreloadedFile = (e, r, t, n, o, a, s, i, l, u) => {
        ew(e, r, t, n, o, i, l, u).then(a).catch(s);
    }),
        (ey.preloadFile = ew),
        ey.staticInit(),
        Object.assign((e = ej.prototype), {
            isAliasOf(e) {
                if (!(this instanceof ej) || !(e instanceof ej)) return !1;
                var r = this.$$.ptrType.registeredClass,
                    t = this.$$.ptr;
                e.$$ = e.$$;
                for (var n = e.$$.ptrType.registeredClass, o = e.$$.ptr; r.baseClass;)
                    ((t = r.upcast(t)), (r = r.baseClass));
                for (; n.baseClass;) ((o = n.upcast(o)), (n = n.baseClass));
                return r === n && t === o;
            },
            clone() {
                if ((this.$$.ptr || eA(this), this.$$.preservePointerOnDelete))
                    return ((this.$$.count.value += 1), this);
                {
                    let r;
                    var e = eR(
                        Object.create(Object.getPrototypeOf(this), {
                            $$: {
                                value: {
                                    count: (r = this.$$).count,
                                    deleteScheduled: r.deleteScheduled,
                                    preservePointerOnDelete: r.preservePointerOnDelete,
                                    ptr: r.ptr,
                                    ptrType: r.ptrType,
                                    smartPtr: r.smartPtr,
                                    smartPtrType: r.smartPtrType,
                                },
                            },
                        }),
                    );
                    return ((e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e);
                }
            },
            delete() {
                (this.$$.ptr || eA(this),
                    this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        eS("Object already scheduled for deletion"),
                    ex(this),
                    eO(this.$$),
                    this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
            },
            isDeleted() {
                return !this.$$.ptr;
            },
            deleteLater() {
                return (
                    this.$$.ptr || eA(this),
                    this.$$.deleteScheduled &&
                        !this.$$.preservePointerOnDelete &&
                        eS("Object already scheduled for deletion"),
                    eN.push(this),
                    1 === eN.length && v && v(eW),
                    (this.$$.deleteScheduled = !0),
                    this
                );
            },
        }),
        (r = Symbol.dispose) && (e[r] = e.delete),
        Object.assign(e1.prototype, {
            getPointee(e) {
                return (this.rawGetPointee && (e = this.rawGetPointee(e)), e);
            },
            destructor(e) {
                this.rawDestructor?.(e);
            },
            readValueFromPointer: eK,
            fromWireType: function (e) {
                var r,
                    t = this.getPointee(e);
                if (!t) return (this.destructor(e), null);
                var n =
                    eZ[
                        ((e, r) => {
                            for (void 0 === r && eS("ptr should not be undefined"); e.baseClass;)
                                ((r = e.upcast(r)), (e = e.baseClass));
                            return r;
                        })(this.registeredClass, t)
                    ];
                if (void 0 !== n)
                    if (0 === n.$$.count.value) return ((n.$$.ptr = t), (n.$$.smartPtr = e), n.clone());
                    else {
                        var o = n.clone();
                        return (this.destructor(e), o);
                    }
                function a() {
                    return this.isSmartPointer
                        ? e0(this.registeredClass.instancePrototype, {
                              ptrType: this.pointeeType,
                              ptr: t,
                              smartPtrType: this,
                              smartPtr: e,
                          })
                        : e0(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
                }
                var s = eB[this.registeredClass.getActualType(t)];
                if (!s) return a.call(this);
                r = this.isConst ? s.constPointerType : s.pointerType;
                var i = eY(t, this.registeredClass, r.registeredClass);
                return null === i
                    ? a.call(this)
                    : this.isSmartPointer
                      ? e0(r.registeredClass.instancePrototype, { ptrType: r, ptr: i, smartPtrType: this, smartPtr: e })
                      : e0(r.registeredClass.instancePrototype, { ptrType: r, ptr: i });
            },
        }),
        n.noExitRuntime && n.noExitRuntime,
        n.print && (A = n.print),
        n.printErr && (M = n.printErr),
        n.arguments && n.arguments,
        n.thisProgram && (D = n.thisProgram));
    var rS = n.preInit;
    if (rS) for ("function" == typeof rS && (n.preInit = rS = [rS]); rS.length > 0;) rS.shift()();
    n.ccall = (e, r, t, o, a) => {
        var s,
            i = {
                string: (e) => {
                    var r,
                        t,
                        n,
                        o = 0;
                    return (null != e && 0 !== e && ((t = er((r = e)) + 1), ek(r, (n = _(t)), t), (o = n)), o);
                },
                array: (e) => {
                    let r;
                    var t = ((r = e.length), _(r));
                    return (l.set(e, t), t);
                },
            },
            u = n["_" + e],
            d = [],
            c = 0;
        if (o)
            for (var h = 0; h < o.length; h++) {
                var f = i[t[h]];
                f ? (c || (c = V()), (d[h] = f(o[h]))) : (d[h] = o[h]);
            }
        var p = u(...d);
        return ((s = p), c && L(c), (p = "string" === r ? eE(s) : "boolean" === r ? !!s : s));
    };
    var rD = {
        a: (e, r, t) => {
            (new H(e).init(r, t), q++, R());
        },
        y: function (e, r, t) {
            eb.varargs = t;
            try {
                var n = eb.getStreamFromFD(e);
                switch (r) {
                    case 0:
                        var o = G();
                        if (o < 0) break;
                        for (; ey.streams[o];) o++;
                        return ey.dupStream(n, o).fd;
                    case 1:
                    case 2:
                    case 13:
                    case 14:
                        return 0;
                    case 3:
                        return n.flags;
                    case 4:
                        var o = G();
                        return ((n.flags = (-289793 & n.flags) | (289792 & o)), 0);
                    case 12:
                        var o = G();
                        return ((f[(o + 0) >> 1] = 2), 0);
                }
                return -28;
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        S: function (e, r) {
            try {
                return eb.writeStat(r, ey.fstat(e));
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        F: function (e, r, t) {
            try {
                var n = eb.getStreamFromFD(e);
                n.getdents ||= ey.readdir(n.path);
                for (
                    var o = 0,
                        a = ey.llseek(n, 0, 1),
                        s = Math.floor(a / 280),
                        i = Math.min(n.getdents.length, s + Math.floor(t / 280)),
                        u = s;
                    u < i;
                    u++
                ) {
                    var d,
                        c,
                        p,
                        m = n.getdents[u];
                    if ("." === m) ((d = n.node.id), (c = 4));
                    else if (".." === m) ((d = ey.lookupPath(n.path, { parent: !0 }).node.id), (c = 4));
                    else {
                        try {
                            p = ey.lookupNode(n.node, m);
                        } catch (e) {
                            if (e?.errno === 28) continue;
                            throw e;
                        }
                        ((d = p.id), (c = ey.isChrdev(p.mode) ? 2 : ey.isDir(p.mode) ? 4 : ey.isLink(p.mode) ? 10 : 8));
                    }
                    ((h[(r + o) >> 3] = BigInt(d)),
                        (h[(r + o + 8) >> 3] = BigInt((u + 1) * 280)),
                        (f[(r + o + 16) >> 1] = 280),
                        (l[r + o + 18] = c),
                        ek(m, r + o + 19, 256),
                        (o += 280));
                }
                return (ey.llseek(n, 280 * u, 0), o);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        O: () => 0,
        L: () => 0,
        K: () => 0,
        J: () => 0,
        s: function (e, r, t) {
            eb.varargs = t;
            try {
                var n = eb.getStreamFromFD(e);
                switch (r) {
                    case 21509:
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21524:
                    case 21515:
                        if (!n.tty) return -59;
                        return 0;
                    case 21505:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tcgets) {
                            var o = n.tty.ops.ioctl_tcgets(n),
                                a = G();
                            ((d[a >> 2] = o.c_iflag || 0),
                                (d[(a + 4) >> 2] = o.c_oflag || 0),
                                (d[(a + 8) >> 2] = o.c_cflag || 0),
                                (d[(a + 12) >> 2] = o.c_lflag || 0));
                            for (var s = 0; s < 32; s++) l[a + s + 17] = o.c_cc[s] || 0;
                        }
                        return 0;
                    case 21506:
                    case 21507:
                    case 21508:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tcsets) {
                            for (
                                var a = G(),
                                    i = d[a >> 2],
                                    u = d[(a + 4) >> 2],
                                    c = d[(a + 8) >> 2],
                                    h = d[(a + 12) >> 2],
                                    p = [],
                                    s = 0;
                                s < 32;
                                s++
                            )
                                p.push(l[a + s + 17]);
                            return n.tty.ops.ioctl_tcsets(n.tty, r, {
                                c_iflag: i,
                                c_oflag: u,
                                c_cflag: c,
                                c_lflag: h,
                                c_cc: p,
                            });
                        }
                        return 0;
                    case 21519:
                        if (!n.tty) return -59;
                        var a = G();
                        return ((d[a >> 2] = 0), 0);
                    case 21520:
                        if (!n.tty) return -59;
                        return -28;
                    case 21537:
                    case 21531:
                        var a = G();
                        return ey.ioctl(n, r, a);
                    case 21523:
                        if (!n.tty) return -59;
                        if (n.tty.ops.ioctl_tiocgwinsz) {
                            var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                a = G();
                            ((f[a >> 1] = m[0]), (f[(a + 2) >> 1] = m[1]));
                        }
                        return 0;
                    default:
                        return -28;
                }
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        P: function (e, r) {
            try {
                return ((e = eb.getStr(e)), eb.writeStat(r, ey.lstat(e)));
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        Q: function (e, r, t, n) {
            try {
                r = eb.getStr(r);
                var o = 256 & n,
                    a = 4096 & n;
                return ((n &= -6401), (r = eb.calculateAt(e, r, a)), eb.writeStat(t, o ? ey.lstat(r) : ey.stat(r)));
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        z: function (e, r, t, n) {
            eb.varargs = n;
            try {
                ((r = eb.getStr(r)), (r = eb.calculateAt(e, r)));
                var o = n ? G() : 0;
                return (64 & t && (o &= ~eb.currentUmask), ey.open(r, t, o).fd);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        R: function (e, r) {
            try {
                return ((e = eb.getStr(e)), eb.writeStat(r, ey.stat(e)));
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        U: () => R(""),
        C: (e, r, t, n, o) => {
            r = e$(r);
            let a = 0n === n,
                s = (e) => e;
            if (a) {
                let e = 8 * t;
                o = (s = (r) => BigInt.asUintN(e, r))(o);
            }
            eD(e, {
                name: r,
                fromWireType: s,
                toWireType: (e, r) => ("number" == typeof r && (r = BigInt(r)), r),
                readValueFromPointer: eF(r, t, !a),
                destructorFunction: null,
            });
        },
        Y: (e, r, t, n) => {
            eD(e, {
                name: (r = e$(r)),
                fromWireType: function (e) {
                    return !!e;
                },
                toWireType: function (e, r) {
                    return r ? t : n;
                },
                readValueFromPointer: function (e) {
                    return this.fromWireType(c[e]);
                },
                destructorFunction: null,
            });
        },
        o: (e, r, t, n, o, a, s, i, l, u, d, c, h) => {
            ((d = e$(d)), (a = e3(o, a)), (i &&= e3(s, i)), (u &&= e3(l, u)), (h = e3(c, h)));
            var f,
                p,
                m = (p = (f = (f = d).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) >= 48 && p <= 57 ? `_${f}` : f;
            (eI(m, function () {
                e8(`Cannot construct ${d} due to unbound types`, [n]);
            }),
                e9([e, r, t], n ? [n] : [], (r) => {
                    r = r[0];
                    var t,
                        o = n ? (t = r.registeredClass).instancePrototype : ej.prototype,
                        s = ez(d, function () {
                            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                            if (Object.getPrototypeOf(this) !== l) throw new eC(`Use 'new' to construct ${d}`);
                            if (void 0 === c.constructor_body) throw new eC(`${d} has no accessible constructor`);
                            var n = c.constructor_body[r.length];
                            if (void 0 === n)
                                throw new eC(
                                    `Tried to invoke ctor of ${d} with invalid number of parameters (${r.length}) - expected (${Object.keys(c.constructor_body).toString()}) parameters instead!`,
                                );
                            return n.apply(this, r);
                        }),
                        l = Object.create(o, { constructor: { value: s } });
                    s.prototype = l;
                    var c = new eL(d, s, l, h, t, a, i, u);
                    c.baseClass && ((c.baseClass.__derivedClasses ??= []), c.baseClass.__derivedClasses.push(c));
                    var f = new e1(d, c, !0, !1, !1),
                        p = new e1(d + "*", c, !1, !1, !1),
                        v = new e1(d + " const*", c, !1, !0, !1);
                    return ((eB[e] = { pointerType: p, constPointerType: v }), e2(m, s), [f, p, v]);
                }));
        },
        r: (e, r, t, n, o, a) => {
            var s = e7(r, t);
            ((o = e3(n, o)),
                e9([], [e], (e) => {
                    e = e[0];
                    var t = `constructor ${e.name}`;
                    if (
                        (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []),
                        void 0 !== e.registeredClass.constructor_body[r - 1])
                    )
                        throw new eC(
                            `Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                        );
                    return (
                        (e.registeredClass.constructor_body[r - 1] = () => {
                            e8(`Cannot construct ${e.name} due to unbound types`, s);
                        }),
                        e9(
                            [],
                            s,
                            (n) => (
                                n.splice(1, 0, null),
                                (e.registeredClass.constructor_body[r - 1] = rn(t, n, null, o, a)),
                                []
                            ),
                        ),
                        []
                    );
                }));
        },
        c: (e, r, t, n, o, a, s, i, l, u) => {
            var d = e7(t, n);
            ((r = ro((r = e$(r)))),
                (a = e3(o, a, l)),
                e9([], [e], (e) => {
                    e = e[0];
                    var n = `${e.name}.${r}`;
                    function o() {
                        e8(`Cannot call ${n} due to unbound types`, d);
                    }
                    (r.startsWith("@@") && (r = Symbol[r.substring(2)]),
                        i && e.registeredClass.pureVirtualFunctions.push(r));
                    var u = e.registeredClass.instancePrototype,
                        c = u[r];
                    return (
                        void 0 === c || (void 0 === c.overloadTable && c.className !== e.name && c.argCount === t - 2)
                            ? ((o.argCount = t - 2), (o.className = e.name), (u[r] = o))
                            : (eU(u, r, n), (u[r].overloadTable[t - 2] = o)),
                        e9([], d, (o) => {
                            var i = rn(n, o, e, a, s, l);
                            return (
                                void 0 === u[r].overloadTable
                                    ? ((i.argCount = t - 2), (u[r] = i))
                                    : (u[r].overloadTable[t - 2] = i),
                                []
                            );
                        }),
                        []
                    );
                }));
        },
        D: (e, r, t) => {
            ((e = e$(e)), e9([], [r], (r) => ((r = r[0]), (n[e] = r.fromWireType(t)), [])));
        },
        W: (e) => eD(e, ru),
        v: (e, r, t, o, a) => {
            r = e$(r);
            let s = a ? (1 === a ? "number" : "string") : "object";
            switch (s) {
                case "object":
                    function i() {}
                    ((i.values = {}),
                        eD(e, {
                            name: r,
                            constructor: i,
                            valueType: s,
                            fromWireType: function (e) {
                                return this.constructor.values[e];
                            },
                            toWireType: (e, r) => r.value,
                            readValueFromPointer: rd(r, t, o),
                            destructorFunction: null,
                        }),
                        eI(r, i));
                    break;
                case "number":
                    var l = {};
                    (eD(e, {
                        name: r,
                        keysMap: l,
                        valueType: s,
                        fromWireType: (e) => e,
                        toWireType: (e, r) => r,
                        readValueFromPointer: rd(r, t, o),
                        destructorFunction: null,
                    }),
                        eI(r, l),
                        delete n[r].argCount);
                    break;
                case "string":
                    var l = {};
                    (eD(e, {
                        name: r,
                        valuesMap: {},
                        reverseMap: {},
                        keysMap: l,
                        valueType: s,
                        fromWireType: function (e) {
                            return this.reverseMap[e];
                        },
                        toWireType: function (e, r) {
                            return this.valuesMap[r];
                        },
                        readValueFromPointer: rd(r, t, o),
                        destructorFunction: null,
                    }),
                        eI(r, l),
                        delete n[r].argCount);
            }
        },
        h: (e, r, t) => {
            var n = rc(e, "enum");
            switch (((r = e$(r)), n.valueType)) {
                case "object":
                    var o = n.constructor,
                        a = Object.create(n.constructor.prototype, {
                            value: { value: t },
                            constructor: { value: ez(`${n.name}_${r}`, function () {}) },
                        });
                    ((o.values[t] = a), (o[r] = a));
                    break;
                case "number":
                    n.keysMap[r] = t;
                    break;
                case "string":
                    ((n.valuesMap[r] = t), (n.reverseMap[t] = r), (n.keysMap[r] = r));
            }
        },
        B: (e, r, t) => {
            eD(e, {
                name: (r = e$(r)),
                fromWireType: (e) => e,
                toWireType: (e, r) => r,
                readValueFromPointer: ((e, r) => {
                    switch (r) {
                        case 4:
                            return function (e) {
                                return this.fromWireType(g[e >> 2]);
                            };
                        case 8:
                            return function (e) {
                                return this.fromWireType(w[e >> 3]);
                            };
                        default:
                            throw TypeError(`invalid float width (${r}): ${e}`);
                    }
                })(r, t),
                destructorFunction: null,
            });
        },
        u: (e, r, t, n, o, a, s, i) => {
            var l = e7(r, t);
            ((e = ro((e = e$(e)))),
                (o = e3(n, o, s)),
                eI(
                    e,
                    function () {
                        e8(`Cannot call ${e} due to unbound types`, l);
                    },
                    r - 1,
                ),
                e9([], l, (t) => {
                    var n = [t[0], null].concat(t.slice(1));
                    return (e2(e, rn(e, n, null, o, a, s), r - 1), []);
                }));
        },
        j: (e, r, t, n, o) => {
            r = e$(r);
            let a = (e) => e;
            if (0 === n) {
                var s = 32 - 8 * t;
                o = (a = (e) => (e << s) >>> s)(o);
            }
            eD(e, {
                name: r,
                fromWireType: a,
                toWireType: (e, r) => r,
                readValueFromPointer: eF(r, t, 0 !== n),
                destructorFunction: null,
            });
        },
        d: (e, r, t) => {
            var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
                BigInt64Array,
                BigUint64Array,
            ][r];
            function o(e) {
                var r = u[e >> 2],
                    t = u[(e + 4) >> 2];
                return new n(l.buffer, t, r);
            }
            eD(
                e,
                { name: (t = e$(t)), fromWireType: o, readValueFromPointer: o },
                { ignoreDuplicateRegistrations: !0 },
            );
        },
        ba: (e, r, t, n, o, a, s, i, l, u, d, c) => {
            ((t = e$(t)),
                (a = e3(o, a)),
                (i = e3(s, i)),
                (u = e3(l, u)),
                (c = e3(d, c)),
                e9([e], [r], (e) => ((e = e[0]), [new e1(t, e.registeredClass, !1, !1, !0, e, n, a, i, u, c)])));
        },
        X: (e, r) => {
            eD(e, {
                name: (r = e$(r)),
                fromWireType(e) {
                    var r,
                        t = u[e >> 2];
                    return ((r = eE(e + 4, t, !0)), b(e), r);
                },
                toWireType(e, r) {
                    r instanceof ArrayBuffer && (r = new Uint8Array(r));
                    var t,
                        n = "string" == typeof r;
                    (n ||
                        (ArrayBuffer.isView(r) && 1 == r.BYTES_PER_ELEMENT) ||
                        eS("Cannot pass non-string to std::string"),
                        (t = n ? er(r) : r.length));
                    var o = E(4 + t + 1),
                        a = o + 4;
                    if (((u[o >> 2] = t), n))
                        if (0)
                            for (var s = 0; s < t; ++s) {
                                var i = r.charCodeAt(s);
                                (i > 255 && (b(o), eS("String has UTF-16 code units that do not fit in 8 bits")),
                                    (c[a + s] = i));
                            }
                        else ek(r, a, t + 1);
                    else c.set(r, a);
                    return (null !== e && e.push(b, o), o);
                },
                readValueFromPointer: eK,
                destructorFunction(e) {
                    b(e);
                },
            });
        },
        t: (e, r, t) => {
            var n, o, a;
            ((t = e$(t)),
                2 === r ? ((n = rf), (o = rp), (a = rm)) : ((n = rv), (o = rg), (a = rw)),
                eD(e, {
                    name: t,
                    fromWireType: (e) => {
                        var t = u[e >> 2],
                            o = n(e + 4, t * r, !0);
                        return (b(e), o);
                    },
                    toWireType: (e, n) => {
                        "string" != typeof n && eS(`Cannot pass non-string to C++ string type ${t}`);
                        var s = a(n),
                            i = E(4 + s + r);
                        return ((u[i >> 2] = s / r), o(n, i + 4, s + r), null !== e && e.push(b, i), i);
                    },
                    readValueFromPointer: eK,
                    destructorFunction(e) {
                        b(e);
                    },
                }));
        },
        Z: (e, r) => {
            eD(e, { isVoid: !0, name: (r = e$(r)), fromWireType: () => void 0, toWireType: (e, r) => void 0 });
        },
        ca: (e, r) => {
            ((e = rl.toValue(e)), (r = rl.toValue(r)), e.set(r));
        },
        g: (e, r, t) => {
            var n,
                o,
                a,
                [s, ...i] = ((e, r) => {
                    for (var t = Array(e), n = 0; n < e; ++n) t[n] = rc(u[(r + 4 * n) >> 2], `parameter ${n}`);
                    return t;
                })(e, r),
                l = s.toWireType.bind(s),
                d = i.map((e) => e.readValueFromPointer.bind(e));
            e--;
            var c = { toValue: rl.toValue },
                h = d.map((e, r) => {
                    var t = `argFromPtr${r}`;
                    return ((c[t] = e), `${t}(args${r ? "+" + 8 * r : ""})`);
                });
            switch (t) {
                case 0:
                    n = "toValue(handle)";
                    break;
                case 2:
                    n = "new (toValue(handle))";
                    break;
                case 3:
                    n = "";
                    break;
                case 1:
                    ((c.getStringOrSymbol = rk), (n = "toValue(handle)[getStringOrSymbol(methodName)]"));
            }
            ((n += `(${h})`),
                s.isVoid ||
                    ((c.toReturnWire = l),
                    (c.emval_returnValue = rE),
                    (n = `return emval_returnValue(toReturnWire, destructorsRef, ${n})`)),
                (n = `return function (handle, methodName, destructorsRef, args) {
${n}
}`));
            var f = Function(Object.keys(c), n)(...Object.values(c));
            return (
                (o = ez(`methodCaller<(${i.map((e) => e.name)}) => ${s.name}>`, f)), (a = ry.length), ry.push(o), a
            );
        },
        b: ri,
        m: (e, r) => ((e = rl.toValue(e)), (r = rl.toValue(r)), rl.toHandle(e[r])),
        i: (e) => {
            e > 9 && (rs[e + 1] += 1);
        },
        f: (e, r, t, n, o) => ry[e](r, t, n, o),
        l: () => rl.toHandle([]),
        k: (e) => rl.toHandle(rk(e)),
        p: () => rl.toHandle({}),
        e: (e) => {
            (re(rl.toValue(e)), ri(e));
        },
        n: (e, r, t) => {
            ((e = rl.toValue(e)), (r = rl.toValue(r)), (t = rl.toValue(t)), (e[r] = t));
        },
        H: function (e, r) {
            var t = new Date(1e3 * (e = r$(e)));
            if (isNaN(t.getTime())) return 1;
            ((d[r >> 2] = t.getUTCSeconds()),
                (d[(r + 4) >> 2] = t.getUTCMinutes()),
                (d[(r + 8) >> 2] = t.getUTCHours()),
                (d[(r + 12) >> 2] = t.getUTCDate()),
                (d[(r + 16) >> 2] = t.getUTCMonth()),
                (d[(r + 20) >> 2] = t.getUTCFullYear() - 1900),
                (d[(r + 24) >> 2] = t.getUTCDay()));
            var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                o = ((t.getTime() - n) / 864e5) | 0;
            return ((d[(r + 28) >> 2] = o), 0);
        },
        G: function (e, r, t, n, o, a) {
            a = r$(a);
            try {
                var s = eb.getStreamFromFD(o);
                2 & t && eb.doMsync(e, s, r, n, a);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return -e.errno;
            }
        },
        V: (e, r, t, n) => {
            var o = new Date().getFullYear(),
                a = new Date(o, 0, 1),
                s = new Date(o, 6, 1),
                i = a.getTimezoneOffset(),
                l = s.getTimezoneOffset(),
                c = Math.max(i, l);
            ((u[e >> 2] = 60 * c), (d[r >> 2] = Number(i != l)));
            var h = (e) => {
                    var r = Math.abs(e),
                        t = String(Math.floor(r / 60)).padStart(2, "0"),
                        n = String(r % 60).padStart(2, "0");
                    return `UTC${e >= 0 ? "-" : "+"}${t}${n}`;
                },
                f = h(i),
                p = h(l);
            l < i ? (ek(f, t, 17), ek(p, n, 17)) : (ek(f, n, 17), ek(p, t, 17));
        },
        T: function (e, r, t) {
            if (((r = r$(r)), !(e >= 0 && e <= 3))) return 28;
            if (0 === e) n = r_();
            else {
                0;
                n = performance.now();
            }
            var n,
                o = Math.round(1e6 * n);
            return ((h[t >> 3] = BigInt(o)), 0);
        },
        aa: (e) => {
            console.error(eE(e));
        },
        _: (e) => {
            console.log(eE(e));
        },
        $: (e) => {
            console.warn(eE(e));
        },
        A: r_,
        E: (e) => {
            var r = c.length;
            if ((e >>>= 0) > 0x80000000) return !1;
            for (var t = 1; t <= 4; t *= 2) {
                var n = r * (1 + 0.2 / t);
                if (((n = Math.min(n, e + 0x6000000)), rT(Math.min(0x80000000, ea(Math.max(e, n), 65536))))) return !0;
            }
            return !1;
        },
        M: (e, r) => {
            var t = 0,
                n = 0;
            for (var o of rC()) {
                var a = r + t;
                ((u[(e + n) >> 2] = a), (t += ek(o, a, 1 / 0) + 1), (n += 4));
            }
            return 0;
        },
        N: (e, r) => {
            var t = rC();
            u[e >> 2] = t.length;
            var n = 0;
            for (var o of t) n += er(o) + 1;
            return ((u[r >> 2] = n), 0);
        },
        q: function (e) {
            try {
                var r = eb.getStreamFromFD(e);
                return (ey.close(r), 0);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        w: function (e, r, t, n) {
            try {
                var o = eb.getStreamFromFD(e),
                    a = ((e, r, t, n) => {
                        for (var o = 0, a = 0; a < t; a++) {
                            var s = u[r >> 2],
                                i = u[(r + 4) >> 2];
                            r += 8;
                            try {
                                var d = ey.read(e, l, s, i, n);
                            } catch (e) {
                                if (o > 0 && e instanceof ey.ErrnoError && (6 == e.errno || 6 == e.errno)) break;
                                throw e;
                            }
                            if (d < 0) return -1;
                            if (((o += d), d < i)) break;
                            void 0 !== n && (n += d);
                        }
                        return o;
                    })(o, r, t);
                return ((u[n >> 2] = a), 0);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        I: function (e, r, t, n) {
            r = r$(r);
            try {
                if (isNaN(r)) return 22;
                var o = eb.getStreamFromFD(e);
                return (
                    ey.llseek(o, r, t),
                    (h[n >> 3] = BigInt(o.position)),
                    o.getdents && !r && 0 === t && (o.getdents = null),
                    0
                );
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
        x: function (e, r, t, n) {
            try {
                var o = eb.getStreamFromFD(e),
                    a = ((e, r, t, n) => {
                        if (1 == t) return ey.write(e, l, u[r >> 2], u[(r + 4) >> 2], n);
                        for (var o = 0, a = 0, s = r; a < t; a++, s += 8) o += u[(s + 4) >> 2];
                        for (var i = new Uint8Array(o), d = 0, a = 0; a < t; a++, r += 8) {
                            var h = u[r >> 2],
                                f = u[(r + 4) >> 2];
                            (i.set(c.subarray(h, h + f), d), (d += f));
                        }
                        return ey.write(e, i, 0, o, n);
                    })(o, r, t);
                return ((u[n >> 2] = a), 0);
            } catch (e) {
                if (void 0 === ey || "ErrnoError" !== e.name) throw e;
                return e.errno;
            }
        },
    };
    async function rF() {
        ((e = n.preRun) && ("function" == typeof e && (e = [e]), I.push(...e)), B(I), ep && (await ef()));
        var e,
            r,
            t = n.setStatus;
        (t && (t("Running..."), await new Promise((e) => setTimeout(e, 1)), setTimeout(t, 1, "")),
            x ||
                (n.noFSInit || ey.initialized || ey.init(),
                eo.init(),
                S.ea(),
                (ey.ignorePermissions = !1),
                n.onRuntimeInitialized?.(),
                (r = n.postRun) && ("function" == typeof r && (r = [r]), U.push(...r)),
                B(U)));
    }
    return ((S = await z()), await rF(), n);
};
