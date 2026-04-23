var n;
t.d(e, { DaveModuleFactory: () => o }),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162),
    t(667532),
    t(323874),
    t(14289),
    t(35956),
    t(321073),
    t(938796);
let o =
    ((n = "file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js"),
    function () {
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var e,
            o,
            a,
            i,
            s,
            u,
            l,
            d,
            c,
            f,
            h,
            p,
            m,
            v,
            y,
            g,
            w,
            E,
            b,
            k,
            _,
            $,
            P,
            T,
            C,
            A,
            F = new Promise((r, t) => {
                (e = r), (o = t);
            }),
            D = Object.assign({}, r),
            S = "./this.program",
            x = "";
        "u" > typeof document && document.currentScript && (x = document.currentScript.src),
            n && (x = n),
            (x = x.startsWith("blob:") ? "" : x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
            (a = async (r) => {
                var e = await fetch(r, { credentials: "same-origin" });
                if (e.ok) return e.arrayBuffer();
                throw Error(e.status + " : " + e.url);
            });
        var j = r.print || console.log.bind(console),
            O = r.printErr || console.error.bind(console);
        Object.assign(r, D), (D = null), r.arguments && r.arguments, r.thisProgram && (S = r.thisProgram);
        var M = r.wasmBinary,
            R = !1;
        function N() {
            var e = s.buffer;
            (r.HEAP8 = u = new Int8Array(e)),
                (r.HEAP16 = d = new Int16Array(e)),
                (r.HEAPU8 = l = new Uint8Array(e)),
                (r.HEAPU16 = c = new Uint16Array(e)),
                (r.HEAP32 = f = new Int32Array(e)),
                (r.HEAPU32 = h = new Uint32Array(e)),
                (r.HEAPF32 = p = new Float32Array(e)),
                (r.HEAPF64 = y = new Float64Array(e)),
                (r.HEAP64 = m = new BigInt64Array(e)),
                (r.HEAPU64 = v = new BigUint64Array(e));
        }
        var W = [],
            U = [],
            B = [],
            z = 0,
            I = null;
        function L(e) {
            z++, r.monitorRunDependencies?.(z);
        }
        function V(e) {
            if ((z--, r.monitorRunDependencies?.(z), 0 == z && I)) {
                var t = I;
                (I = null), t();
            }
        }
        function H(e) {
            r.onAbort?.(e), O((e = "Aborted(" + e + ")")), (R = !0), (e += ". Build with -sASSERTIONS for more info.");
            var t = new WebAssembly.RuntimeError(e);
            throw (o(t), t);
        }
        async function q(r) {
            if (!M)
                try {
                    var e = await a(r);
                    return new Uint8Array(e);
                } catch {}
            if (r == g && M) return new Uint8Array(M);
            if (i) return i(r);
            throw "both async and sync fetching of the wasm failed";
        }
        async function G(r, e) {
            try {
                var t = await q(r);
                return await WebAssembly.instantiate(t, e);
            } catch (r) {
                O(`failed to asynchronously prepare wasm: ${r}`), H(r);
            }
        }
        async function X(r, e, t) {
            if (
                !r &&
                "function" == typeof WebAssembly.instantiateStreaming &&
                !e.startsWith("data:application/octet-stream;base64,") &&
                "function" == typeof fetch
            )
                try {
                    var n = fetch(e, { credentials: "same-origin" });
                    return await WebAssembly.instantiateStreaming(n, t);
                } catch (r) {
                    O(`wasm streaming compile failed: ${r}`), O("falling back to ArrayBuffer instantiation");
                }
            return G(e, t);
        }
        async function Y() {
            function e(r, e) {
                var t;
                return (s = (P = r.exports)._), N(), (_ = P.ba), (t = P.$), U.unshift(t), V("wasm-instantiate"), P;
            }
            L("wasm-instantiate");
            var n = { a: e$ };
            if (r.instantiateWasm)
                try {
                    return r.instantiateWasm(n, e);
                } catch (r) {
                    O(`Module.instantiateWasm callback failed with error: ${r}`), o(r);
                }
            g ??= (function () {
                if (r.locateFile) {
                    var e = "libdave.wasm";
                    return e.startsWith("data:application/octet-stream;base64,")
                        ? e
                        : r.locateFile
                          ? r.locateFile(e, x)
                          : x + e;
                }
                return new URL(t(264219), t.b).href;
            })();
            try {
                var a = await X(M, g, n);
                return e(a.instance), a;
            } catch (r) {
                o(r);
                return;
            }
        }
        var K = (e) => {
            for (; e.length > 0; ) e.shift()(r);
        };
        r.noExitRuntime;
        var Z = () => eS();
        class J {
            constructor(r) {
                (this.excPtr = r), (this.ptr = r - 24);
            }
            set_type(r) {
                h[(this.ptr + 4) >> 2] = r;
            }
            get_type() {
                return h[(this.ptr + 4) >> 2];
            }
            set_destructor(r) {
                h[(this.ptr + 8) >> 2] = r;
            }
            get_destructor() {
                return h[(this.ptr + 8) >> 2];
            }
            set_caught(r) {
                (r = +!!r), (u[this.ptr + 12] = r);
            }
            get_caught() {
                return 0 != u[this.ptr + 12];
            }
            set_rethrown(r) {
                (r = +!!r), (u[this.ptr + 13] = r);
            }
            get_rethrown() {
                return 0 != u[this.ptr + 13];
            }
            init(r, e) {
                this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(e);
            }
            set_adjusted_ptr(r) {
                h[(this.ptr + 16) >> 2] = r;
            }
            get_adjusted_ptr() {
                return h[(this.ptr + 16) >> 2];
            }
        }
        var Q = 0,
            rr = 0,
            re = () => {
                var r = f[rw.varargs >> 2];
                return (rw.varargs += 4), r;
            },
            rt = {
                isAbs: (r) => "/" === r.charAt(0),
                splitPath: (r) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r).slice(1),
                normalizeArray: (r, e) => {
                    for (var t = 0, n = r.length - 1; n >= 0; n--) {
                        var o = r[n];
                        "." === o ? r.splice(n, 1) : ".." === o ? (r.splice(n, 1), t++) : t && (r.splice(n, 1), t--);
                    }
                    if (e) for (; t; t--) r.unshift("..");
                    return r;
                },
                normalize: (r) => {
                    var e = rt.isAbs(r),
                        t = "/" === r.substr(-1);
                    return (
                        (r = rt
                            .normalizeArray(
                                r.split("/").filter((r) => !!r),
                                !e,
                            )
                            .join("/")) ||
                            e ||
                            (r = "."),
                        r && t && (r += "/"),
                        (e ? "/" : "") + r
                    );
                },
                dirname: (r) => {
                    var e = rt.splitPath(r),
                        t = e[0],
                        n = e[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
                },
                basename: (r) => {
                    if ("/" === r) return "/";
                    var e = (r = (r = rt.normalize(r)).replace(/\/$/, "")).lastIndexOf("/");
                    return -1 === e ? r : r.substr(e + 1);
                },
                join: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    return rt.normalize(e.join("/"));
                },
                join2: (r, e) => rt.normalize(r + "/" + e),
            },
            rn = (r) =>
                (rn = (() => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                        return (r) => crypto.getRandomValues(r);
                    H("initRandomDevice");
                })())(r),
            ro = {
                resolve: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    for (var n = "", o = !1, a = e.length - 1; a >= -1 && !o; a--) {
                        var i = a >= 0 ? e[a] : ry.cwd();
                        if ("string" != typeof i) throw TypeError("Arguments to path.resolve must be strings");
                        if (!i) return "";
                        (n = i + "/" + n), (o = rt.isAbs(i));
                    }
                    return (
                        (n = rt
                            .normalizeArray(
                                n.split("/").filter((r) => !!r),
                                !o,
                            )
                            .join("/")),
                        (o ? "/" : "") + n || "."
                    );
                },
                relative: (r, e) => {
                    function t(r) {
                        for (var e = 0; e < r.length && "" === r[e]; e++);
                        for (var t = r.length - 1; t >= 0 && "" === r[t]; t--);
                        return e > t ? [] : r.slice(e, t - e + 1);
                    }
                    (r = ro.resolve(r).substr(1)), (e = ro.resolve(e).substr(1));
                    for (
                        var n = t(r.split("/")), o = t(e.split("/")), a = Math.min(n.length, o.length), i = a, s = 0;
                        s < a;
                        s++
                    )
                        if (n[s] !== o[s]) {
                            i = s;
                            break;
                        }
                    for (var u = [], s = i; s < n.length; s++) u.push("..");
                    return (u = u.concat(o.slice(i))).join("/");
                },
            },
            ra = "u" > typeof TextDecoder ? new TextDecoder() : void 0,
            ri = function (r) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
                for (var n = e + t, o = e; r[o] && !(o >= n); ) ++o;
                if (o - e > 16 && r.buffer && ra) return ra.decode(r.subarray(e, o));
                for (var a = ""; e < o; ) {
                    var i = r[e++];
                    if (!(128 & i)) {
                        a += String.fromCharCode(i);
                        continue;
                    }
                    var s = 63 & r[e++];
                    if ((224 & i) == 192) {
                        a += String.fromCharCode(((31 & i) << 6) | s);
                        continue;
                    }
                    var u = 63 & r[e++];
                    if (
                        (i =
                            (240 & i) == 224
                                ? ((15 & i) << 12) | (s << 6) | u
                                : ((7 & i) << 18) | (s << 12) | (u << 6) | (63 & r[e++])) < 65536
                    )
                        a += String.fromCharCode(i);
                    else {
                        var l = i - 65536;
                        a += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
                    }
                }
                return a;
            },
            rs = [],
            ru = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n <= 127 ? e++ : n <= 2047 ? (e += 2) : n >= 55296 && n <= 57343 ? ((e += 4), ++t) : (e += 3);
                }
                return e;
            },
            rl = (r, e, t, n) => {
                if (!(n > 0)) return 0;
                for (var o = t, a = t + n - 1, i = 0; i < r.length; ++i) {
                    var s = r.charCodeAt(i);
                    if (
                        (s >= 55296 && s <= 57343 && (s = (65536 + ((1023 & s) << 10)) | (1023 & r.charCodeAt(++i))),
                        s <= 127)
                    ) {
                        if (t >= a) break;
                        e[t++] = s;
                    } else if (s <= 2047) {
                        if (t + 1 >= a) break;
                        (e[t++] = 192 | (s >> 6)), (e[t++] = 128 | (63 & s));
                    } else if (s <= 65535) {
                        if (t + 2 >= a) break;
                        (e[t++] = 224 | (s >> 12)), (e[t++] = 128 | ((s >> 6) & 63)), (e[t++] = 128 | (63 & s));
                    } else {
                        if (t + 3 >= a) break;
                        (e[t++] = 240 | (s >> 18)),
                            (e[t++] = 128 | ((s >> 12) & 63)),
                            (e[t++] = 128 | ((s >> 6) & 63)),
                            (e[t++] = 128 | (63 & s));
                    }
                }
                return (e[t] = 0), t - o;
            },
            rd = {
                ttys: [],
                init() {},
                shutdown() {},
                register(r, e) {
                    (rd.ttys[r] = { input: [], output: [], ops: e }), ry.registerDevice(r, rd.stream_ops);
                },
                stream_ops: {
                    open(r) {
                        var e = rd.ttys[r.node.rdev];
                        if (!e) throw new ry.ErrnoError(43);
                        (r.tty = e), (r.seekable = !1);
                    },
                    close(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    fsync(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    read(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.get_char) throw new ry.ErrnoError(60);
                        for (var a, i = 0, s = 0; s < n; s++) {
                            try {
                                a = r.tty.ops.get_char(r.tty);
                            } catch (r) {
                                throw new ry.ErrnoError(29);
                            }
                            if (void 0 === a && 0 === i) throw new ry.ErrnoError(6);
                            if (null == a) break;
                            i++, (e[t + s] = a);
                        }
                        return i && (r.node.atime = Date.now()), i;
                    },
                    write(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.put_char) throw new ry.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) r.tty.ops.put_char(r.tty, e[t + a]);
                        } catch (r) {
                            throw new ry.ErrnoError(29);
                        }
                        return n && (r.node.mtime = r.node.ctime = Date.now()), a;
                    },
                },
                default_tty_ops: {
                    get_char: (r) =>
                        (() => {
                            if (!rs.length) {
                                var r,
                                    e,
                                    t,
                                    n,
                                    o = null;
                                if (
                                    ("u" > typeof window &&
                                        "function" == typeof window.prompt &&
                                        null !== (o = window.prompt("Input: ")) &&
                                        (o += "\n"),
                                    !o)
                                )
                                    return null;
                                (r = o),
                                    (e = !0),
                                    (t = Array(ru(r) + 1)),
                                    (n = rl(r, t, 0, t.length)),
                                    e && (t.length = n),
                                    (rs = t);
                            }
                            return rs.shift();
                        })(),
                    put_char(r, e) {
                        null === e || 10 === e ? (j(ri(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (j(ri(r.output)), (r.output = []));
                    },
                    ioctl_tcgets: (r) => ({
                        c_iflag: 25856,
                        c_oflag: 5,
                        c_cflag: 191,
                        c_lflag: 35387,
                        c_cc: [
                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0,
                        ],
                    }),
                    ioctl_tcsets: (r, e, t) => 0,
                    ioctl_tiocgwinsz: (r) => [24, 80],
                },
                default_tty1_ops: {
                    put_char(r, e) {
                        null === e || 10 === e ? (O(ri(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (O(ri(r.output)), (r.output = []));
                    },
                },
            },
            rc = (r, e) => Math.ceil(r / e) * e,
            rf = (r) => {
                r = rc(r, 65536);
                var e,
                    t = eA(65536, r);
                return t && ((e = r), l.fill(0, t, t + e)), t;
            },
            rh = {
                ops_table: null,
                mount: (r) => rh.createNode(null, "/", 16895, 0),
                createNode(r, e, t, n) {
                    if (ry.isBlkdev(t) || ry.isFIFO(t)) throw new ry.ErrnoError(63);
                    rh.ops_table ||= {
                        dir: {
                            node: {
                                getattr: rh.node_ops.getattr,
                                setattr: rh.node_ops.setattr,
                                lookup: rh.node_ops.lookup,
                                mknod: rh.node_ops.mknod,
                                rename: rh.node_ops.rename,
                                unlink: rh.node_ops.unlink,
                                rmdir: rh.node_ops.rmdir,
                                readdir: rh.node_ops.readdir,
                                symlink: rh.node_ops.symlink,
                            },
                            stream: { llseek: rh.stream_ops.llseek },
                        },
                        file: {
                            node: { getattr: rh.node_ops.getattr, setattr: rh.node_ops.setattr },
                            stream: {
                                llseek: rh.stream_ops.llseek,
                                read: rh.stream_ops.read,
                                write: rh.stream_ops.write,
                                allocate: rh.stream_ops.allocate,
                                mmap: rh.stream_ops.mmap,
                                msync: rh.stream_ops.msync,
                            },
                        },
                        link: {
                            node: {
                                getattr: rh.node_ops.getattr,
                                setattr: rh.node_ops.setattr,
                                readlink: rh.node_ops.readlink,
                            },
                            stream: {},
                        },
                        chrdev: {
                            node: { getattr: rh.node_ops.getattr, setattr: rh.node_ops.setattr },
                            stream: ry.chrdev_stream_ops,
                        },
                    };
                    var o = ry.createNode(r, e, t, n);
                    return (
                        ry.isDir(o.mode)
                            ? ((o.node_ops = rh.ops_table.dir.node),
                              (o.stream_ops = rh.ops_table.dir.stream),
                              (o.contents = {}))
                            : ry.isFile(o.mode)
                              ? ((o.node_ops = rh.ops_table.file.node),
                                (o.stream_ops = rh.ops_table.file.stream),
                                (o.usedBytes = 0),
                                (o.contents = null))
                              : ry.isLink(o.mode)
                                ? ((o.node_ops = rh.ops_table.link.node), (o.stream_ops = rh.ops_table.link.stream))
                                : ry.isChrdev(o.mode) &&
                                  ((o.node_ops = rh.ops_table.chrdev.node),
                                  (o.stream_ops = rh.ops_table.chrdev.stream)),
                        (o.atime = o.mtime = o.ctime = Date.now()),
                        r && ((r.contents[e] = o), (r.atime = r.mtime = r.ctime = o.atime)),
                        o
                    );
                },
                getFileDataAsTypedArray: (r) =>
                    r.contents
                        ? r.contents.subarray
                            ? r.contents.subarray(0, r.usedBytes)
                            : new Uint8Array(r.contents)
                        : new Uint8Array(0),
                expandFileStorage(r, e) {
                    var t = r.contents ? r.contents.length : 0;
                    if (!(t >= e)) {
                        (e = Math.max(e, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)), 0 != t && (e = Math.max(e, 256));
                        var n = r.contents;
                        (r.contents = new Uint8Array(e)),
                            r.usedBytes > 0 && r.contents.set(n.subarray(0, r.usedBytes), 0);
                    }
                },
                resizeFileStorage(r, e) {
                    if (r.usedBytes != e)
                        if (0 == e) (r.contents = null), (r.usedBytes = 0);
                        else {
                            var t = r.contents;
                            (r.contents = new Uint8Array(e)),
                                t && r.contents.set(t.subarray(0, Math.min(e, r.usedBytes))),
                                (r.usedBytes = e);
                        }
                },
                node_ops: {
                    getattr(r) {
                        var e = {};
                        return (
                            (e.dev = ry.isChrdev(r.mode) ? r.id : 1),
                            (e.ino = r.id),
                            (e.mode = r.mode),
                            (e.nlink = 1),
                            (e.uid = 0),
                            (e.gid = 0),
                            (e.rdev = r.rdev),
                            ry.isDir(r.mode)
                                ? (e.size = 4096)
                                : ry.isFile(r.mode)
                                  ? (e.size = r.usedBytes)
                                  : ry.isLink(r.mode)
                                    ? (e.size = r.link.length)
                                    : (e.size = 0),
                            (e.atime = new Date(r.atime)),
                            (e.mtime = new Date(r.mtime)),
                            (e.ctime = new Date(r.ctime)),
                            (e.blksize = 4096),
                            (e.blocks = Math.ceil(e.size / e.blksize)),
                            e
                        );
                    },
                    setattr(r, e) {
                        for (let t of ["mode", "atime", "mtime", "ctime"]) e[t] && (r[t] = e[t]);
                        void 0 !== e.size && rh.resizeFileStorage(r, e.size);
                    },
                    lookup(r, e) {
                        throw rh.doesNotExistError;
                    },
                    mknod: (r, e, t, n) => rh.createNode(r, e, t, n),
                    rename(r, e, t) {
                        var n;
                        try {
                            n = ry.lookupNode(e, t);
                        } catch (r) {}
                        if (n) {
                            if (ry.isDir(r.mode)) for (var o in n.contents) throw new ry.ErrnoError(55);
                            ry.hashRemoveNode(n);
                        }
                        delete r.parent.contents[r.name],
                            (e.contents[t] = r),
                            (r.name = t),
                            (e.ctime = e.mtime = r.parent.ctime = r.parent.mtime = Date.now());
                    },
                    unlink(r, e) {
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    rmdir(r, e) {
                        var t = ry.lookupNode(r, e);
                        for (var n in t.contents) throw new ry.ErrnoError(55);
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    readdir: (r) => [".", "..", ...Object.keys(r.contents)],
                    symlink(r, e, t) {
                        var n = rh.createNode(r, e, 41471, 0);
                        return (n.link = t), n;
                    },
                    readlink(r) {
                        if (!ry.isLink(r.mode)) throw new ry.ErrnoError(28);
                        return r.link;
                    },
                },
                stream_ops: {
                    read(r, e, t, n, o) {
                        var a = r.node.contents;
                        if (o >= r.node.usedBytes) return 0;
                        var i = Math.min(r.node.usedBytes - o, n);
                        if (i > 8 && a.subarray) e.set(a.subarray(o, o + i), t);
                        else for (var s = 0; s < i; s++) e[t + s] = a[o + s];
                        return i;
                    },
                    write(r, e, t, n, o, a) {
                        if ((e.buffer === u.buffer && (a = !1), !n)) return 0;
                        var i = r.node;
                        if (((i.mtime = i.ctime = Date.now()), e.subarray && (!i.contents || i.contents.subarray))) {
                            if (a) return (i.contents = e.subarray(t, t + n)), (i.usedBytes = n), n;
                            else if (0 === i.usedBytes && 0 === o)
                                return (i.contents = e.slice(t, t + n)), (i.usedBytes = n), n;
                            else if (o + n <= i.usedBytes) return i.contents.set(e.subarray(t, t + n), o), n;
                        }
                        if ((rh.expandFileStorage(i, o + n), i.contents.subarray && e.subarray))
                            i.contents.set(e.subarray(t, t + n), o);
                        else for (var s = 0; s < n; s++) i.contents[o + s] = e[t + s];
                        return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
                    },
                    llseek(r, e, t) {
                        var n = e;
                        if (
                            (1 === t ? (n += r.position) : 2 === t && ry.isFile(r.node.mode) && (n += r.node.usedBytes),
                            n < 0)
                        )
                            throw new ry.ErrnoError(28);
                        return n;
                    },
                    allocate(r, e, t) {
                        rh.expandFileStorage(r.node, e + t), (r.node.usedBytes = Math.max(r.node.usedBytes, e + t));
                    },
                    mmap(r, e, t, n, o) {
                        if (!ry.isFile(r.node.mode)) throw new ry.ErrnoError(43);
                        var a,
                            i,
                            s = r.node.contents;
                        if (!(2 & o) && s && s.buffer === u.buffer) (i = !1), (a = s.byteOffset);
                        else {
                            if (((i = !0), !(a = rf(e)))) throw new ry.ErrnoError(48);
                            s &&
                                ((t > 0 || t + e < s.length) &&
                                    (s = s.subarray ? s.subarray(t, t + e) : Array.prototype.slice.call(s, t, t + e)),
                                u.set(s, a));
                        }
                        return { ptr: a, allocated: i };
                    },
                    msync: (r, e, t, n, o) => (rh.stream_ops.write(r, e, 0, n, t, !1), 0),
                },
            },
            rp = async (r) => new Uint8Array(await a(r)),
            rm = r.preloadPlugins || [],
            rv = (r, e) => {
                var t = 0;
                return r && (t |= 365), e && (t |= 146), t;
            },
            ry = {
                root: null,
                mounts: [],
                devices: {},
                streams: [],
                nextInode: 1,
                nameTable: null,
                currentPath: "/",
                initialized: !1,
                ignorePermissions: !0,
                ErrnoError: class {
                    name = "ErrnoError";
                    constructor(r) {
                        this.errno = r;
                    }
                },
                filesystems: null,
                syncFSRequests: 0,
                readFiles: {},
                FSStream: class {
                    shared = {};
                    get object() {
                        return this.node;
                    }
                    set object(r) {
                        this.node = r;
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
                    set flags(r) {
                        this.shared.flags = r;
                    }
                    get position() {
                        return this.shared.position;
                    }
                    set position(r) {
                        this.shared.position = r;
                    }
                },
                FSNode: class {
                    node_ops = {};
                    stream_ops = {};
                    readMode = 365;
                    writeMode = 146;
                    mounted = null;
                    constructor(r, e, t, n) {
                        r || (r = this),
                            (this.parent = r),
                            (this.mount = r.mount),
                            (this.id = ry.nextInode++),
                            (this.name = e),
                            (this.mode = t),
                            (this.rdev = n),
                            (this.atime = this.mtime = this.ctime = Date.now());
                    }
                    get read() {
                        return (this.mode & this.readMode) === this.readMode;
                    }
                    set read(r) {
                        r ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
                    }
                    get write() {
                        return (this.mode & this.writeMode) === this.writeMode;
                    }
                    set write(r) {
                        r ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
                    }
                    get isFolder() {
                        return ry.isDir(this.mode);
                    }
                    get isDevice() {
                        return ry.isChrdev(this.mode);
                    }
                },
                lookupPath(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!r) return { path: "", node: null };
                    (e.follow_mount ??= !0), rt.isAbs(r) || (r = ry.cwd() + "/" + r);
                    r: for (var t = 0; t < 40; t++) {
                        for (
                            var n = r.split("/").filter((r) => !!r && "." !== r), o = ry.root, a = "/", i = 0;
                            i < n.length;
                            i++
                        ) {
                            var s = i === n.length - 1;
                            if (s && e.parent) break;
                            if (".." === n[i]) {
                                (a = rt.dirname(a)), (o = o.parent);
                                continue;
                            }
                            a = rt.join2(a, n[i]);
                            try {
                                o = ry.lookupNode(o, n[i]);
                            } catch (r) {
                                if (r?.errno === 44 && s && e.noent_okay) return { path: a };
                                throw r;
                            }
                            if (
                                (ry.isMountpoint(o) && (!s || e.follow_mount) && (o = o.mounted.root),
                                ry.isLink(o.mode) && (!s || e.follow))
                            ) {
                                if (!o.node_ops.readlink) throw new ry.ErrnoError(52);
                                var u = o.node_ops.readlink(o);
                                rt.isAbs(u) || (u = rt.dirname(a) + "/" + u), (r = u + "/" + n.slice(i + 1).join("/"));
                                continue r;
                            }
                        }
                        return { path: a, node: o };
                    }
                    throw new ry.ErrnoError(32);
                },
                getPath(r) {
                    for (var e; ; ) {
                        if (ry.isRoot(r)) {
                            var t = r.mount.mountpoint;
                            if (!e) return t;
                            return "/" !== t[t.length - 1] ? `${t}/${e}` : t + e;
                        }
                        (e = e ? `${r.name}/${e}` : r.name), (r = r.parent);
                    }
                },
                hashName(r, e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
                    return ((r + t) >>> 0) % ry.nameTable.length;
                },
                hashAddNode(r) {
                    var e = ry.hashName(r.parent.id, r.name);
                    (r.name_next = ry.nameTable[e]), (ry.nameTable[e] = r);
                },
                hashRemoveNode(r) {
                    var e = ry.hashName(r.parent.id, r.name);
                    if (ry.nameTable[e] === r) ry.nameTable[e] = r.name_next;
                    else
                        for (var t = ry.nameTable[e]; t; ) {
                            if (t.name_next === r) {
                                t.name_next = r.name_next;
                                break;
                            }
                            t = t.name_next;
                        }
                },
                lookupNode(r, e) {
                    var t = ry.mayLookup(r);
                    if (t) throw new ry.ErrnoError(t);
                    for (var n = ry.hashName(r.id, e), o = ry.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === r.id && a === e) return o;
                    }
                    return ry.lookup(r, e);
                },
                createNode(r, e, t, n) {
                    var o = new ry.FSNode(r, e, t, n);
                    return ry.hashAddNode(o), o;
                },
                destroyNode(r) {
                    ry.hashRemoveNode(r);
                },
                isRoot: (r) => r === r.parent,
                isMountpoint: (r) => !!r.mounted,
                isFile: (r) => (61440 & r) == 32768,
                isDir: (r) => (61440 & r) == 16384,
                isLink: (r) => (61440 & r) == 40960,
                isChrdev: (r) => (61440 & r) == 8192,
                isBlkdev: (r) => (61440 & r) == 24576,
                isFIFO: (r) => (61440 & r) == 4096,
                isSocket: (r) => (49152 & r) == 49152,
                flagsToPermissionString(r) {
                    var e = ["r", "w", "rw"][3 & r];
                    return 512 & r && (e += "w"), e;
                },
                nodePermissions: (r, e) =>
                    ry.ignorePermissions
                        ? 0
                        : (e.includes("r") && !(292 & r.mode)) ||
                            (e.includes("w") && !(146 & r.mode)) ||
                            (e.includes("x") && !(73 & r.mode))
                          ? 2
                          : 0,
                mayLookup(r) {
                    if (!ry.isDir(r.mode)) return 54;
                    var e = ry.nodePermissions(r, "x");
                    return e || 2 * !r.node_ops.lookup;
                },
                mayCreate(r, e) {
                    if (!ry.isDir(r.mode)) return 54;
                    try {
                        return ry.lookupNode(r, e), 20;
                    } catch (r) {}
                    return ry.nodePermissions(r, "wx");
                },
                mayDelete(r, e, t) {
                    try {
                        n = ry.lookupNode(r, e);
                    } catch (r) {
                        return r.errno;
                    }
                    var n,
                        o = ry.nodePermissions(r, "wx");
                    if (o) return o;
                    if (t) {
                        if (!ry.isDir(n.mode)) return 54;
                        if (ry.isRoot(n) || ry.getPath(n) === ry.cwd()) return 10;
                    } else if (ry.isDir(n.mode)) return 31;
                    return 0;
                },
                mayOpen: (r, e) =>
                    r
                        ? ry.isLink(r.mode)
                            ? 32
                            : ry.isDir(r.mode) && ("r" !== ry.flagsToPermissionString(e) || 512 & e)
                              ? 31
                              : ry.nodePermissions(r, ry.flagsToPermissionString(e))
                        : 44,
                MAX_OPEN_FDS: 4096,
                nextfd() {
                    for (var r = 0; r <= ry.MAX_OPEN_FDS; r++) if (!ry.streams[r]) return r;
                    throw new ry.ErrnoError(33);
                },
                getStreamChecked(r) {
                    var e = ry.getStream(r);
                    if (!e) throw new ry.ErrnoError(8);
                    return e;
                },
                getStream: (r) => ry.streams[r],
                createStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return (
                        (r = Object.assign(new ry.FSStream(), r)),
                        -1 == e && (e = ry.nextfd()),
                        (r.fd = e),
                        (ry.streams[e] = r),
                        r
                    );
                },
                closeStream(r) {
                    ry.streams[r] = null;
                },
                dupStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    var t = ry.createStream(r, e);
                    return t.stream_ops?.dup?.(t), t;
                },
                chrdev_stream_ops: {
                    open(r) {
                        var e = ry.getDevice(r.node.rdev);
                        (r.stream_ops = e.stream_ops), r.stream_ops.open?.(r);
                    },
                    llseek() {
                        throw new ry.ErrnoError(70);
                    },
                },
                major: (r) => r >> 8,
                minor: (r) => 255 & r,
                makedev: (r, e) => (r << 8) | e,
                registerDevice(r, e) {
                    ry.devices[r] = { stream_ops: e };
                },
                getDevice: (r) => ry.devices[r],
                getMounts(r) {
                    for (var e = [], t = [r]; t.length; ) {
                        var n = t.pop();
                        e.push(n), t.push(...n.mounts);
                    }
                    return e;
                },
                syncfs(r, e) {
                    "function" == typeof r && ((e = r), (r = !1)),
                        ry.syncFSRequests++,
                        ry.syncFSRequests > 1 &&
                            O(
                                `warning: ${ry.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
                            );
                    var t = ry.getMounts(ry.root.mount),
                        n = 0;
                    function o(r) {
                        return ry.syncFSRequests--, e(r);
                    }
                    function a(r) {
                        if (r) return a.errored ? void 0 : ((a.errored = !0), o(r));
                        ++n >= t.length && o(null);
                    }
                    t.forEach((e) => {
                        if (!e.type.syncfs) return a(null);
                        e.type.syncfs(e, r, a);
                    });
                },
                mount(r, e, t) {
                    var n,
                        o = "/" === t,
                        a = !t;
                    if (o && ry.root) throw new ry.ErrnoError(10);
                    if (!o && !a) {
                        var i = ry.lookupPath(t, { follow_mount: !1 });
                        if (((t = i.path), (n = i.node), ry.isMountpoint(n))) throw new ry.ErrnoError(10);
                        if (!ry.isDir(n.mode)) throw new ry.ErrnoError(54);
                    }
                    var s = { type: r, opts: e, mountpoint: t, mounts: [] },
                        u = r.mount(s);
                    return (
                        (u.mount = s),
                        (s.root = u),
                        o ? (ry.root = u) : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
                        u
                    );
                },
                unmount(r) {
                    var e = ry.lookupPath(r, { follow_mount: !1 });
                    if (!ry.isMountpoint(e.node)) throw new ry.ErrnoError(28);
                    var t = e.node,
                        n = t.mounted,
                        o = ry.getMounts(n);
                    Object.keys(ry.nameTable).forEach((r) => {
                        for (var e = ry.nameTable[r]; e; ) {
                            var t = e.name_next;
                            o.includes(e.mount) && ry.destroyNode(e), (e = t);
                        }
                    }),
                        (t.mounted = null);
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1);
                },
                lookup: (r, e) => r.node_ops.lookup(r, e),
                mknod(r, e, t) {
                    var n = ry.lookupPath(r, { parent: !0 }).node,
                        o = rt.basename(r);
                    if (!o || "." === o || ".." === o) throw new ry.ErrnoError(28);
                    var a = ry.mayCreate(n, o);
                    if (a) throw new ry.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new ry.ErrnoError(63);
                    return n.node_ops.mknod(n, o, e, t);
                },
                statfs(r) {
                    var e = {
                            bsize: 4096,
                            frsize: 4096,
                            blocks: 1e6,
                            bfree: 5e5,
                            bavail: 5e5,
                            files: ry.nextInode,
                            ffree: ry.nextInode - 1,
                            fsid: 42,
                            flags: 2,
                            namelen: 255,
                        },
                        t = ry.lookupPath(r, { follow: !0 }).node;
                    return t?.node_ops.statfs && Object.assign(e, t.node_ops.statfs(t.mount.opts.root)), e;
                },
                create(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                    return (e &= 4095), (e |= 32768), ry.mknod(r, e, 0);
                },
                mkdir(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                    return (e &= 1023), (e |= 16384), ry.mknod(r, e, 0);
                },
                mkdirTree(r, e) {
                    for (var t = r.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                ry.mkdir(n, e);
                            } catch (r) {
                                if (20 != r.errno) throw r;
                            }
                        }
                },
                mkdev: (r, e, t) => (void 0 === t && ((t = e), (e = 438)), (e |= 8192), ry.mknod(r, e, t)),
                symlink(r, e) {
                    if (!ro.resolve(r)) throw new ry.ErrnoError(44);
                    var t = ry.lookupPath(e, { parent: !0 }).node;
                    if (!t) throw new ry.ErrnoError(44);
                    var n = rt.basename(e),
                        o = ry.mayCreate(t, n);
                    if (o) throw new ry.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new ry.ErrnoError(63);
                    return t.node_ops.symlink(t, n, r);
                },
                rename(r, e) {
                    var t,
                        n,
                        o,
                        a = rt.dirname(r),
                        i = rt.dirname(e),
                        s = rt.basename(r),
                        u = rt.basename(e);
                    if (
                        ((t = ry.lookupPath(r, { parent: !0 }).node),
                        (n = ry.lookupPath(e, { parent: !0 }).node),
                        !t || !n)
                    )
                        throw new ry.ErrnoError(44);
                    if (t.mount !== n.mount) throw new ry.ErrnoError(75);
                    var l = ry.lookupNode(t, s),
                        d = ro.relative(r, i);
                    if ("." !== d.charAt(0)) throw new ry.ErrnoError(28);
                    if ("." !== (d = ro.relative(e, a)).charAt(0)) throw new ry.ErrnoError(55);
                    try {
                        o = ry.lookupNode(n, u);
                    } catch (r) {}
                    if (l !== o) {
                        var c = ry.isDir(l.mode),
                            f = ry.mayDelete(t, s, c);
                        if (f || (f = o ? ry.mayDelete(n, u, c) : ry.mayCreate(n, u))) throw new ry.ErrnoError(f);
                        if (!t.node_ops.rename) throw new ry.ErrnoError(63);
                        if (ry.isMountpoint(l) || (o && ry.isMountpoint(o))) throw new ry.ErrnoError(10);
                        if (n !== t && (f = ry.nodePermissions(t, "w"))) throw new ry.ErrnoError(f);
                        ry.hashRemoveNode(l);
                        try {
                            t.node_ops.rename(l, n, u), (l.parent = n);
                        } catch (r) {
                            throw r;
                        } finally {
                            ry.hashAddNode(l);
                        }
                    }
                },
                rmdir(r) {
                    var e = ry.lookupPath(r, { parent: !0 }).node,
                        t = rt.basename(r),
                        n = ry.lookupNode(e, t),
                        o = ry.mayDelete(e, t, !0);
                    if (o) throw new ry.ErrnoError(o);
                    if (!e.node_ops.rmdir) throw new ry.ErrnoError(63);
                    if (ry.isMountpoint(n)) throw new ry.ErrnoError(10);
                    e.node_ops.rmdir(e, t), ry.destroyNode(n);
                },
                readdir(r) {
                    var e = ry.lookupPath(r, { follow: !0 }).node;
                    if (!e.node_ops.readdir) throw new ry.ErrnoError(54);
                    return e.node_ops.readdir(e);
                },
                unlink(r) {
                    var e = ry.lookupPath(r, { parent: !0 }).node;
                    if (!e) throw new ry.ErrnoError(44);
                    var t = rt.basename(r),
                        n = ry.lookupNode(e, t),
                        o = ry.mayDelete(e, t, !1);
                    if (o) throw new ry.ErrnoError(o);
                    if (!e.node_ops.unlink) throw new ry.ErrnoError(63);
                    if (ry.isMountpoint(n)) throw new ry.ErrnoError(10);
                    e.node_ops.unlink(e, t), ry.destroyNode(n);
                },
                readlink(r) {
                    var e = ry.lookupPath(r).node;
                    if (!e) throw new ry.ErrnoError(44);
                    if (!e.node_ops.readlink) throw new ry.ErrnoError(28);
                    return e.node_ops.readlink(e);
                },
                stat(r, e) {
                    var t = ry.lookupPath(r, { follow: !e }).node;
                    if (!t) throw new ry.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new ry.ErrnoError(63);
                    return t.node_ops.getattr(t);
                },
                lstat: (r) => ry.stat(r, !0),
                chmod(r, e, t) {
                    var n;
                    if (!(n = "string" == typeof r ? ry.lookupPath(r, { follow: !t }).node : r).node_ops.setattr)
                        throw new ry.ErrnoError(63);
                    n.node_ops.setattr(n, { mode: (4095 & e) | (-4096 & n.mode), ctime: Date.now() });
                },
                lchmod(r, e) {
                    ry.chmod(r, e, !0);
                },
                fchmod(r, e) {
                    var t = ry.getStreamChecked(r);
                    ry.chmod(t.node, e);
                },
                chown(r, e, t, n) {
                    var o;
                    if (!(o = "string" == typeof r ? ry.lookupPath(r, { follow: !n }).node : r).node_ops.setattr)
                        throw new ry.ErrnoError(63);
                    o.node_ops.setattr(o, { timestamp: Date.now() });
                },
                lchown(r, e, t) {
                    ry.chown(r, e, t, !0);
                },
                fchown(r, e, t) {
                    var n = ry.getStreamChecked(r);
                    ry.chown(n.node, e, t);
                },
                truncate(r, e) {
                    if (e < 0) throw new ry.ErrnoError(28);
                    if ("string" == typeof r) {
                        var t;
                        t = ry.lookupPath(r, { follow: !0 }).node;
                    } else t = r;
                    if (!t.node_ops.setattr) throw new ry.ErrnoError(63);
                    if (ry.isDir(t.mode)) throw new ry.ErrnoError(31);
                    if (!ry.isFile(t.mode)) throw new ry.ErrnoError(28);
                    var n = ry.nodePermissions(t, "w");
                    if (n) throw new ry.ErrnoError(n);
                    t.node_ops.setattr(t, { size: e, timestamp: Date.now() });
                },
                ftruncate(r, e) {
                    var t = ry.getStreamChecked(r);
                    if ((2097155 & t.flags) == 0) throw new ry.ErrnoError(28);
                    ry.truncate(t.node, e);
                },
                utime(r, e, t) {
                    var n = ry.lookupPath(r, { follow: !0 }).node;
                    n.node_ops.setattr(n, { atime: e, mtime: t });
                },
                open(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                    if ("" === e) throw new ry.ErrnoError(44);
                    if (
                        ((n =
                            64 &
                            (t =
                                "string" == typeof t
                                    ? ((r) => {
                                          var e = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
                                          if (void 0 === e) throw Error(`Unknown file open mode: ${r}`);
                                          return e;
                                      })(t)
                                    : t)
                                ? (4095 & n) | 32768
                                : 0),
                        "object" == typeof e)
                    )
                        o = e;
                    else {
                        var o,
                            a = ry.lookupPath(e, { follow: !(131072 & t), noent_okay: !0 });
                        (o = a.node), (e = a.path);
                    }
                    var i = !1;
                    if (64 & t)
                        if (o) {
                            if (128 & t) throw new ry.ErrnoError(20);
                        } else (o = ry.mknod(e, n, 0)), (i = !0);
                    if (!o) throw new ry.ErrnoError(44);
                    if ((ry.isChrdev(o.mode) && (t &= -513), 65536 & t && !ry.isDir(o.mode)))
                        throw new ry.ErrnoError(54);
                    if (!i) {
                        var s = ry.mayOpen(o, t);
                        if (s) throw new ry.ErrnoError(s);
                    }
                    512 & t && !i && ry.truncate(o, 0), (t &= -131713);
                    var u = ry.createStream({
                        node: o,
                        path: ry.getPath(o),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: o.stream_ops,
                        ungotten: [],
                        error: !1,
                    });
                    return (
                        u.stream_ops.open && u.stream_ops.open(u),
                        !r.logReadFiles || 1 & t || e in ry.readFiles || (ry.readFiles[e] = 1),
                        u
                    );
                },
                close(r) {
                    if (ry.isClosed(r)) throw new ry.ErrnoError(8);
                    r.getdents && (r.getdents = null);
                    try {
                        r.stream_ops.close && r.stream_ops.close(r);
                    } catch (r) {
                        throw r;
                    } finally {
                        ry.closeStream(r.fd);
                    }
                    r.fd = null;
                },
                isClosed: (r) => null === r.fd,
                llseek(r, e, t) {
                    if (ry.isClosed(r)) throw new ry.ErrnoError(8);
                    if (!r.seekable || !r.stream_ops.llseek) throw new ry.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new ry.ErrnoError(28);
                    return (r.position = r.stream_ops.llseek(r, e, t)), (r.ungotten = []), r.position;
                },
                read(r, e, t, n, o) {
                    if (n < 0 || o < 0) throw new ry.ErrnoError(28);
                    if (ry.isClosed(r) || (2097155 & r.flags) == 1) throw new ry.ErrnoError(8);
                    if (ry.isDir(r.node.mode)) throw new ry.ErrnoError(31);
                    if (!r.stream_ops.read) throw new ry.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!r.seekable) throw new ry.ErrnoError(70);
                    } else o = r.position;
                    var i = r.stream_ops.read(r, e, t, n, o);
                    return a || (r.position += i), i;
                },
                write(r, e, t, n, o, a) {
                    if (n < 0 || o < 0) throw new ry.ErrnoError(28);
                    if (ry.isClosed(r) || (2097155 & r.flags) == 0) throw new ry.ErrnoError(8);
                    if (ry.isDir(r.node.mode)) throw new ry.ErrnoError(31);
                    if (!r.stream_ops.write) throw new ry.ErrnoError(28);
                    r.seekable && 1024 & r.flags && ry.llseek(r, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!r.seekable) throw new ry.ErrnoError(70);
                    } else o = r.position;
                    var s = r.stream_ops.write(r, e, t, n, o, a);
                    return i || (r.position += s), s;
                },
                allocate(r, e, t) {
                    if (ry.isClosed(r)) throw new ry.ErrnoError(8);
                    if (e < 0 || t <= 0) throw new ry.ErrnoError(28);
                    if ((2097155 & r.flags) == 0) throw new ry.ErrnoError(8);
                    if (!ry.isFile(r.node.mode) && !ry.isDir(r.node.mode)) throw new ry.ErrnoError(43);
                    if (!r.stream_ops.allocate) throw new ry.ErrnoError(138);
                    r.stream_ops.allocate(r, e, t);
                },
                mmap(r, e, t, n, o) {
                    if (((2 & n) != 0 && (2 & o) == 0 && (2097155 & r.flags) != 2) || (2097155 & r.flags) == 1)
                        throw new ry.ErrnoError(2);
                    if (!r.stream_ops.mmap) throw new ry.ErrnoError(43);
                    if (!e) throw new ry.ErrnoError(28);
                    return r.stream_ops.mmap(r, e, t, n, o);
                },
                msync: (r, e, t, n, o) => (r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, o) : 0),
                ioctl(r, e, t) {
                    if (!r.stream_ops.ioctl) throw new ry.ErrnoError(59);
                    return r.stream_ops.ioctl(r, e, t);
                },
                readFile(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (
                        ((e.flags = e.flags || 0),
                        (e.encoding = e.encoding || "binary"),
                        "utf8" !== e.encoding && "binary" !== e.encoding)
                    )
                        throw Error(`Invalid encoding type "${e.encoding}"`);
                    var t,
                        n = ry.open(r, e.flags),
                        o = ry.stat(r).size,
                        a = new Uint8Array(o);
                    return (
                        ry.read(n, a, 0, o, 0),
                        "utf8" === e.encoding ? (t = ri(a)) : "binary" === e.encoding && (t = a),
                        ry.close(n),
                        t
                    );
                },
                writeFile(r, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t.flags = t.flags || 577;
                    var n = ry.open(r, t.flags, t.mode);
                    if ("string" == typeof e) {
                        var o = new Uint8Array(ru(e) + 1),
                            a = rl(e, o, 0, o.length);
                        ry.write(n, o, 0, a, void 0, t.canOwn);
                    } else if (ArrayBuffer.isView(e)) ry.write(n, e, 0, e.byteLength, void 0, t.canOwn);
                    else throw Error("Unsupported data type");
                    ry.close(n);
                },
                cwd: () => ry.currentPath,
                chdir(r) {
                    var e = ry.lookupPath(r, { follow: !0 });
                    if (null === e.node) throw new ry.ErrnoError(44);
                    if (!ry.isDir(e.node.mode)) throw new ry.ErrnoError(54);
                    var t = ry.nodePermissions(e.node, "x");
                    if (t) throw new ry.ErrnoError(t);
                    ry.currentPath = e.path;
                },
                createDefaultDirectories() {
                    ry.mkdir("/tmp"), ry.mkdir("/home"), ry.mkdir("/home/web_user");
                },
                createDefaultDevices() {
                    ry.mkdir("/dev"),
                        ry.registerDevice(ry.makedev(1, 3), {
                            read: () => 0,
                            write: (r, e, t, n, o) => n,
                            llseek: () => 0,
                        }),
                        ry.mkdev("/dev/null", ry.makedev(1, 3)),
                        rd.register(ry.makedev(5, 0), rd.default_tty_ops),
                        rd.register(ry.makedev(6, 0), rd.default_tty1_ops),
                        ry.mkdev("/dev/tty", ry.makedev(5, 0)),
                        ry.mkdev("/dev/tty1", ry.makedev(6, 0));
                    var r = new Uint8Array(1024),
                        e = 0,
                        t = () => (0 === e && (e = rn(r).byteLength), r[--e]);
                    ry.createDevice("/dev", "random", t),
                        ry.createDevice("/dev", "urandom", t),
                        ry.mkdir("/dev/shm"),
                        ry.mkdir("/dev/shm/tmp");
                },
                createSpecialDirectories() {
                    ry.mkdir("/proc");
                    var r = ry.mkdir("/proc/self");
                    ry.mkdir("/proc/self/fd"),
                        ry.mount(
                            {
                                mount() {
                                    var e = ry.createNode(r, "fd", 16895, 73);
                                    return (
                                        (e.stream_ops = { llseek: rh.stream_ops.llseek }),
                                        (e.node_ops = {
                                            lookup(r, e) {
                                                var t = +e,
                                                    n = ry.getStreamChecked(t),
                                                    o = {
                                                        parent: null,
                                                        mount: { mountpoint: "fake" },
                                                        node_ops: { readlink: () => n.path },
                                                        id: t + 1,
                                                    };
                                                return (o.parent = o), o;
                                            },
                                            readdir: () =>
                                                Array.from(ry.streams.entries())
                                                    .filter((r) => {
                                                        let [e, t] = r;
                                                        return t;
                                                    })
                                                    .map((r) => {
                                                        let [e, t] = r;
                                                        return e.toString();
                                                    }),
                                        }),
                                        e
                                    );
                                },
                            },
                            {},
                            "/proc/self/fd",
                        );
                },
                createStandardStreams(r, e, t) {
                    r ? ry.createDevice("/dev", "stdin", r) : ry.symlink("/dev/tty", "/dev/stdin"),
                        e ? ry.createDevice("/dev", "stdout", null, e) : ry.symlink("/dev/tty", "/dev/stdout"),
                        t ? ry.createDevice("/dev", "stderr", null, t) : ry.symlink("/dev/tty1", "/dev/stderr"),
                        ry.open("/dev/stdin", 0),
                        ry.open("/dev/stdout", 1),
                        ry.open("/dev/stderr", 1);
                },
                staticInit() {
                    (ry.nameTable = Array(4096)),
                        ry.mount(rh, {}, "/"),
                        ry.createDefaultDirectories(),
                        ry.createDefaultDevices(),
                        ry.createSpecialDirectories(),
                        (ry.filesystems = { MEMFS: rh });
                },
                init(e, t, n) {
                    (ry.initialized = !0),
                        (e ??= r.stdin),
                        (t ??= r.stdout),
                        (n ??= r.stderr),
                        ry.createStandardStreams(e, t, n);
                },
                quit() {
                    ry.initialized = !1;
                    for (var r = 0; r < ry.streams.length; r++) {
                        var e = ry.streams[r];
                        e && ry.close(e);
                    }
                },
                findObject(r, e) {
                    var t = ry.analyzePath(r, e);
                    return t.exists ? t.object : null;
                },
                analyzePath(r, e) {
                    try {
                        var t = ry.lookupPath(r, { follow: !e });
                        r = t.path;
                    } catch (r) {}
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
                        var t = ry.lookupPath(r, { parent: !0 });
                        (n.parentExists = !0),
                            (n.parentPath = t.path),
                            (n.parentObject = t.node),
                            (n.name = rt.basename(r)),
                            (t = ry.lookupPath(r, { follow: !e })),
                            (n.exists = !0),
                            (n.path = t.path),
                            (n.object = t.node),
                            (n.name = t.node.name),
                            (n.isRoot = "/" === t.path);
                    } catch (r) {
                        n.error = r.errno;
                    }
                    return n;
                },
                createPath(r, e, t, n) {
                    r = "string" == typeof r ? r : ry.getPath(r);
                    for (var o = e.split("/").reverse(); o.length; ) {
                        var a = o.pop();
                        if (a) {
                            var i = rt.join2(r, a);
                            try {
                                ry.mkdir(i);
                            } catch (r) {}
                            r = i;
                        }
                    }
                    return i;
                },
                createFile(r, e, t, n, o) {
                    var a = rt.join2("string" == typeof r ? r : ry.getPath(r), e),
                        i = rv(n, o);
                    return ry.create(a, i);
                },
                createDataFile(r, e, t, n, o, a) {
                    var i = e;
                    r && ((r = "string" == typeof r ? r : ry.getPath(r)), (i = e ? rt.join2(r, e) : r));
                    var s = rv(n, o),
                        u = ry.create(i, s);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var l = Array(t.length), d = 0, c = t.length; d < c; ++d) l[d] = t.charCodeAt(d);
                            t = l;
                        }
                        ry.chmod(u, 146 | s);
                        var f = ry.open(u, 577);
                        ry.write(f, t, 0, t.length, 0, a), ry.close(f), ry.chmod(u, s);
                    }
                },
                createDevice(r, e, t, n) {
                    var o = rt.join2("string" == typeof r ? r : ry.getPath(r), e),
                        a = rv(!!t, !!n);
                    ry.createDevice.major ??= 64;
                    var i = ry.makedev(ry.createDevice.major++, 0);
                    return (
                        ry.registerDevice(i, {
                            open(r) {
                                r.seekable = !1;
                            },
                            close(r) {
                                n?.buffer?.length && n(10);
                            },
                            read(r, e, n, o, a) {
                                for (var i, s = 0, u = 0; u < o; u++) {
                                    try {
                                        i = t();
                                    } catch (r) {
                                        throw new ry.ErrnoError(29);
                                    }
                                    if (void 0 === i && 0 === s) throw new ry.ErrnoError(6);
                                    if (null == i) break;
                                    s++, (e[n + u] = i);
                                }
                                return s && (r.node.atime = Date.now()), s;
                            },
                            write(r, e, t, o, a) {
                                for (var i = 0; i < o; i++)
                                    try {
                                        n(e[t + i]);
                                    } catch (r) {
                                        throw new ry.ErrnoError(29);
                                    }
                                return o && (r.node.mtime = r.node.ctime = Date.now()), i;
                            },
                        }),
                        ry.mkdev(o, a, i)
                    );
                },
                forceLoadFile(r) {
                    if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
                    if ("u" > typeof XMLHttpRequest)
                        throw Error(
                            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                        );
                    try {
                        (r.contents = i(r.url)), (r.usedBytes = r.contents.length);
                    } catch (r) {
                        throw new ry.ErrnoError(29);
                    }
                },
                createLazyFile(r, e, t, n, o) {
                    if ("u" > typeof XMLHttpRequest) {
                        var a;
                        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    }
                    var a = { isDevice: !1, url: t },
                        i = ry.createFile(r, e, a, n, o);
                    a.contents ? (i.contents = a.contents) : a.url && ((i.contents = null), (i.url = a.url)),
                        Object.defineProperties(i, {
                            usedBytes: {
                                get: function () {
                                    return this.contents.length;
                                },
                            },
                        });
                    var s = {};
                    function l(r, e, t, n, o) {
                        var a = r.node.contents;
                        if (o >= a.length) return 0;
                        var i = Math.min(a.length - o, n);
                        if (a.slice) for (var s = 0; s < i; s++) e[t + s] = a[o + s];
                        else for (var s = 0; s < i; s++) e[t + s] = a.get(o + s);
                        return i;
                    }
                    return (
                        Object.keys(i.stream_ops).forEach((r) => {
                            var e = i.stream_ops[r];
                            s[r] = function () {
                                for (var r = arguments.length, t = Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                                return ry.forceLoadFile(i), e(...t);
                            };
                        }),
                        (s.read = (r, e, t, n, o) => (ry.forceLoadFile(i), l(r, e, t, n, o))),
                        (s.mmap = (r, e, t, n, o) => {
                            ry.forceLoadFile(i);
                            var a = rf(e);
                            if (!a) throw new ry.ErrnoError(48);
                            return l(r, u, a, e, t), { ptr: a, allocated: !0 };
                        }),
                        (i.stream_ops = s),
                        i
                    );
                },
            },
            rg = (r, e) => (r ? ri(l, r, e) : ""),
            rw = {
                DEFAULT_POLLMASK: 5,
                calculateAt(r, e, t) {
                    if (rt.isAbs(e)) return e;
                    if (-100 === r) n = ry.cwd();
                    else {
                        var n;
                        n = rw.getStreamFromFD(r).path;
                    }
                    if (0 == e.length) {
                        if (!t) throw new ry.ErrnoError(44);
                        return n;
                    }
                    return n + "/" + e;
                },
                doStat(r, e, t) {
                    var n = r(e);
                    (f[t >> 2] = n.dev),
                        (f[(t + 4) >> 2] = n.mode),
                        (h[(t + 8) >> 2] = n.nlink),
                        (f[(t + 12) >> 2] = n.uid),
                        (f[(t + 16) >> 2] = n.gid),
                        (f[(t + 20) >> 2] = n.rdev),
                        (m[(t + 24) >> 3] = BigInt(n.size)),
                        (f[(t + 32) >> 2] = 4096),
                        (f[(t + 36) >> 2] = n.blocks);
                    var o = n.atime.getTime(),
                        a = n.mtime.getTime(),
                        i = n.ctime.getTime();
                    return (
                        (m[(t + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                        (h[(t + 48) >> 2] = (o % 1e3) * 1e6),
                        (m[(t + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                        (h[(t + 64) >> 2] = (a % 1e3) * 1e6),
                        (m[(t + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
                        (h[(t + 80) >> 2] = (i % 1e3) * 1e6),
                        (m[(t + 88) >> 3] = BigInt(n.ino)),
                        0
                    );
                },
                doMsync(r, e, t, n, o) {
                    if (!ry.isFile(e.node.mode)) throw new ry.ErrnoError(43);
                    if (2 & n) return 0;
                    var a = l.slice(r, r + t);
                    ry.msync(e, a, o, t, n);
                },
                getStreamFromFD: (r) => ry.getStreamChecked(r),
                varargs: void 0,
                getStr: (r) => rg(r),
            },
            rE = (r, e, t) => rl(r, l, e, t),
            rb = (r) => {
                if (null === r) return "null";
                var e = typeof r;
                return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r;
            },
            rk = (r) => {
                for (var e = "", t = r; l[t]; ) e += w[l[t++]];
                return e;
            },
            r_ = {},
            r$ = {},
            rP = {},
            rT = (r) => {
                throw new E(r);
            },
            rC = (r) => {
                throw new b(r);
            },
            rA = (r, e, t) => {
                function n(e) {
                    var n = t(e);
                    n.length !== r.length && rC("Mismatched type converter count");
                    for (var o = 0; o < r.length; ++o) rF(r[o], n[o]);
                }
                r.forEach((r) => (rP[r] = e));
                var o = Array(e.length),
                    a = [],
                    i = 0;
                e.forEach((r, e) => {
                    r$.hasOwnProperty(r)
                        ? (o[e] = r$[r])
                        : (a.push(r),
                          r_.hasOwnProperty(r) || (r_[r] = []),
                          r_[r].push(() => {
                              (o[e] = r$[r]), ++i === a.length && n(o);
                          }));
                }),
                    0 === a.length && n(o);
            };
        function rF(r, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (function (r, e) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var n = e.name;
                if ((r || rT(`type "${n}" must have a positive integer typeid pointer`), r$.hasOwnProperty(r)))
                    if (t.ignoreDuplicateRegistrations) return;
                    else rT(`Cannot register type '${n}' twice`);
                if (((r$[r] = e), delete rP[r], r_.hasOwnProperty(r))) {
                    var o = r_[r];
                    delete r_[r], o.forEach((r) => r());
                }
            })(r, e, t);
        }
        var rD = (r, e, t) => {
                switch (e) {
                    case 1:
                        return t ? (r) => u[r] : (r) => l[r];
                    case 2:
                        return t ? (r) => d[r >> 1] : (r) => c[r >> 1];
                    case 4:
                        return t ? (r) => f[r >> 2] : (r) => h[r >> 2];
                    case 8:
                        return t ? (r) => m[r >> 3] : (r) => v[r >> 3];
                    default:
                        throw TypeError(`invalid integer width (${e}): ${r}`);
                }
            },
            rS = (r) => {
                rT(r.$$.ptrType.registeredClass.name + " instance already deleted");
            },
            rx = !1,
            rj = (r) => {},
            rO = (r) => {
                (r.count.value -= 1),
                    0 === r.count.value &&
                        (r.smartPtr
                            ? r.smartPtrType.rawDestructor(r.smartPtr)
                            : r.ptrType.registeredClass.rawDestructor(r.ptr));
            },
            rM = (r, e, t) => {
                if (e === t) return r;
                if (void 0 === t.baseClass) return null;
                var n = rM(r, e, t.baseClass);
                return null === n ? null : t.downcast(n);
            },
            rR = {},
            rN = {},
            rW = (r, e) => (
                (e.ptrType && e.ptr) || rC("makeClassHandle requires ptr and ptrType"),
                !!e.smartPtrType != !!e.smartPtr && rC("Both smartPtrType and smartPtr must be specified"),
                (e.count = { value: 1 }),
                rU(Object.create(r, { $$: { value: e, writable: !0 } }))
            ),
            rU = (r) =>
                "u" < typeof FinalizationRegistry
                    ? ((rU = (r) => r), r)
                    : ((rx = new FinalizationRegistry((r) => {
                          rO(r.$$);
                      })),
                      (rU = (r) => {
                          var e = r.$$;
                          return e.smartPtr && rx.register(r, { $$: e }, r), r;
                      }),
                      (rj = (r) => rx.unregister(r)),
                      rU(r)),
            rB = [],
            rz = () => {
                for (; rB.length; ) {
                    var r = rB.pop();
                    (r.$$.deleteScheduled = !1), r.delete();
                }
            };
        function rI() {}
        var rL = (r, e) => Object.defineProperty(e, "name", { value: r }),
            rV = (r, e, t) => {
                if (void 0 === r[e].overloadTable) {
                    var n = r[e];
                    (r[e] = function () {
                        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        return (
                            r[e].overloadTable.hasOwnProperty(o.length) ||
                                rT(
                                    `Function '${t}' called with an invalid number of arguments (${o.length}) - expects one of (${r[e].overloadTable})!`,
                                ),
                            r[e].overloadTable[o.length].apply(this, o)
                        );
                    }),
                        (r[e].overloadTable = []),
                        (r[e].overloadTable[n.argCount] = n);
                }
            },
            rH = (e, t, n) => {
                r.hasOwnProperty(e)
                    ? ((void 0 === n || (void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[n])) &&
                          rT(`Cannot register public name '${e}' twice`),
                      rV(r, e, e),
                      r[e].overloadTable.hasOwnProperty(n) &&
                          rT(
                              `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                          ),
                      (r[e].overloadTable[n] = t))
                    : ((r[e] = t), (r[e].argCount = n));
            };
        function rq(r, e, t, n, o, a, i, s) {
            (this.name = r),
                (this.constructor = e),
                (this.instancePrototype = t),
                (this.rawDestructor = n),
                (this.baseClass = o),
                (this.getActualType = a),
                (this.upcast = i),
                (this.downcast = s),
                (this.pureVirtualFunctions = []);
        }
        var rG = (r, e, t) => {
            for (; e !== t; )
                e.upcast || rT(`Expected null or instance of ${t.name}, got an instance of ${e.name}`),
                    (r = e.upcast(r)),
                    (e = e.baseClass);
            return r;
        };
        function rX(r, e) {
            if (null === e) return this.isReference && rT(`null is not a valid ${this.name}`), 0;
            e.$$ || rT(`Cannot pass "${rb(e)}" as a ${this.name}`),
                e.$$.ptr || rT(`Cannot pass deleted object as a pointer of type ${this.name}`);
            var t = e.$$.ptrType.registeredClass;
            return rG(e.$$.ptr, t, this.registeredClass);
        }
        function rY(r, e) {
            if (null === e)
                return (this.isReference && rT(`null is not a valid ${this.name}`), this.isSmartPointer)
                    ? ((t = this.rawConstructor()), null !== r && r.push(this.rawDestructor, t), t)
                    : 0;
            (e && e.$$) || rT(`Cannot pass "${rb(e)}" as a ${this.name}`),
                e.$$.ptr || rT(`Cannot pass deleted object as a pointer of type ${this.name}`),
                !this.isConst &&
                    e.$$.ptrType.isConst &&
                    rT(
                        `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`,
                    );
            var t,
                n = e.$$.ptrType.registeredClass;
            if (((t = rG(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
                switch (
                    (void 0 === e.$$.smartPtr && rT("Passing raw pointer to smart pointer is illegal"),
                    this.sharingPolicy)
                ) {
                    case 0:
                        e.$$.smartPtrType === this
                            ? (t = e.$$.smartPtr)
                            : rT(
                                  `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`,
                              );
                        break;
                    case 1:
                        t = e.$$.smartPtr;
                        break;
                    case 2:
                        if (e.$$.smartPtrType === this) t = e.$$.smartPtr;
                        else {
                            var o = e.clone();
                            (t = this.rawShare(
                                t,
                                en.toHandle(() => o.delete()),
                            )),
                                null !== r && r.push(this.rawDestructor, t);
                        }
                        break;
                    default:
                        rT("Unsupporting sharing policy");
                }
            return t;
        }
        function rK(r, e) {
            if (null === e) return this.isReference && rT(`null is not a valid ${this.name}`), 0;
            e.$$ || rT(`Cannot pass "${rb(e)}" as a ${this.name}`),
                e.$$.ptr || rT(`Cannot pass deleted object as a pointer of type ${this.name}`),
                e.$$.ptrType.isConst &&
                    rT(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);
            var t = e.$$.ptrType.registeredClass;
            return rG(e.$$.ptr, t, this.registeredClass);
        }
        function rZ(r) {
            return this.fromWireType(h[r >> 2]);
        }
        function rJ(r, e, t, n, o, a, i, s, u, l, d) {
            (this.name = r),
                (this.registeredClass = e),
                (this.isReference = t),
                (this.isConst = n),
                (this.isSmartPointer = o),
                (this.pointeeType = a),
                (this.sharingPolicy = i),
                (this.rawGetPointee = s),
                (this.rawConstructor = u),
                (this.rawShare = l),
                (this.rawDestructor = d),
                o || void 0 !== e.baseClass
                    ? (this.toWireType = rY)
                    : (n ? (this.toWireType = rX) : (this.toWireType = rK), (this.destructorFunction = null));
        }
        var rQ = (e, t, n) => {
                r.hasOwnProperty(e) || rC("Replacing nonexistent public symbol"),
                    void 0 !== r[e].overloadTable && void 0 !== n
                        ? (r[e].overloadTable[n] = t)
                        : ((r[e] = t), (r[e].argCount = n));
            },
            r0 = [],
            r1 = (r, e) => {
                r = rk(r);
                var t,
                    n = ((t = r0[e]) || (e >= r0.length && (r0.length = e + 1), (r0[e] = t = _.get(e))), t);
                return "function" != typeof n && rT(`unknown function pointer with signature ${r}: ${e}`), n;
            },
            r2 = (r) => {
                var e = eP(r),
                    t = rk(e);
                return eC(e), t;
            },
            r4 = (r, e) => {
                var t = [],
                    n = {};
                throw (
                    (e.forEach(function r(e) {
                        if (!n[e] && !r$[e]) {
                            if (rP[e]) return void rP[e].forEach(r);
                            t.push(e), (n[e] = !0);
                        }
                    }),
                    new $(`${r}: ` + t.map(r2).join([", "])))
                );
            },
            r6 = (r, e) => {
                for (var t = [], n = 0; n < r; n++) t.push(h[(e + 4 * n) >> 2]);
                return t;
            },
            r5 = (r) => {
                for (; r.length; ) {
                    var e = r.pop();
                    r.pop()(e);
                }
            };
        function r3(r) {
            for (var e = 1; e < r.length; ++e) if (null !== r[e] && void 0 === r[e].destructorFunction) return !0;
            return !1;
        }
        function r8(r, e) {
            if (!(r instanceof Function))
                throw TypeError(`new_ called with constructor type ${typeof r} which is not a function`);
            var t = rL(r.name || "unknownFunctionName", function () {});
            t.prototype = r.prototype;
            var n = new t(),
                o = r.apply(n, e);
            return o instanceof Object ? o : n;
        }
        function r9(r, e, t, n, o, a) {
            var i = e.length;
            i < 2 && rT("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (
                var s = null !== e[1] && null !== t,
                    u = r3(e),
                    l = "void" !== e[0].name,
                    d = [r, rT, n, o, r5, e[0], e[1]],
                    c = 0;
                c < i - 2;
                ++c
            )
                d.push(e[c + 2]);
            if (!u)
                for (var c = s ? 1 : 2; c < e.length; ++c)
                    null !== e[c].destructorFunction && d.push(e[c].destructorFunction);
            let [f, h] = (function (r, e, t, n) {
                var o = r3(r),
                    a = r.length - 2,
                    i = [],
                    s = ["fn"];
                e && s.push("thisWired");
                for (var u = 0; u < a; ++u) i.push(`arg${u}`), s.push(`arg${u}Wired`);
                (i = i.join(",")), (s = s.join(","));
                var l = `return function (${i}) {
`;
                o && (l += "var destructors = [];\n");
                var d = o ? "destructors" : "null",
                    c = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
                e &&
                    (l += `var thisWired = classParam['toWireType'](${d}, this);
`);
                for (var u = 0; u < a; ++u)
                    (l += `var arg${u}Wired = argType${u}['toWireType'](${d}, arg${u});
`),
                        c.push(`argType${u}`);
                if (
                    ((l +=
                        (t || n ? "var rv = " : "") +
                        `invoker(${s});
`),
                    o)
                )
                    l += "runDestructors(destructors);\n";
                else
                    for (var u = e ? 1 : 2; u < r.length; ++u) {
                        var f = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                        null !== r[u].destructorFunction &&
                            ((l += `${f}_dtor(${f});
`),
                            c.push(`${f}_dtor`));
                    }
                return t && (l += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [c, (l += "}\n")];
            })(e, s, l, a);
            return f.push(h), rL(r, r8(Function, f)(...d));
        }
        var r7 = (r) => {
                let e = (r = r.trim()).indexOf("(");
                return -1 !== e ? r.substr(0, e) : r;
            },
            er = [],
            ee = [],
            et = (r) => {
                r > 9 && 0 == --ee[r + 1] && ((ee[r] = void 0), er.push(r));
            },
            en = {
                toValue: (r) => (r || rT("Cannot use deleted val. handle = " + r), ee[r]),
                toHandle: (r) => {
                    switch (r) {
                        case void 0:
                            return 2;
                        case null:
                            return 4;
                        case !0:
                            return 6;
                        case !1:
                            return 8;
                        default: {
                            let e = er.pop() || ee.length;
                            return (ee[e] = r), (ee[e + 1] = 1), e;
                        }
                    }
                },
            },
            eo = {
                name: "emscripten::val",
                fromWireType: (r) => {
                    var e = en.toValue(r);
                    return et(r), e;
                },
                toWireType: (r, e) => en.toHandle(e),
                argPackAdvance: 8,
                readValueFromPointer: rZ,
                destructorFunction: null,
            },
            ea = (r, e) => {
                var t = r$[r];
                return void 0 === t && rT(`${e} has unknown type ${r2(r)}`), t;
            },
            ei = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
            es = (r, e) => {
                for (var t = r, n = t >> 1, o = n + e / 2; !(n >= o) && c[n]; ) ++n;
                if ((t = n << 1) - r > 32 && ei) return ei.decode(l.subarray(r, t));
                for (var a = "", i = 0; !(i >= e / 2); ++i) {
                    var s = d[(r + 2 * i) >> 1];
                    if (0 == s) break;
                    a += String.fromCharCode(s);
                }
                return a;
            },
            eu = (r, e, t) => {
                if ((t ??= 0x7fffffff) < 2) return 0;
                for (var n = e, o = (t -= 2) < 2 * r.length ? t / 2 : r.length, a = 0; a < o; ++a) {
                    var i = r.charCodeAt(a);
                    (d[e >> 1] = i), (e += 2);
                }
                return (d[e >> 1] = 0), e - n;
            },
            el = (r) => 2 * r.length,
            ed = (r, e) => {
                for (var t = 0, n = ""; !(t >= e / 4); ) {
                    var o = f[(r + 4 * t) >> 2];
                    if (0 == o) break;
                    if ((++t, o >= 65536)) {
                        var a = o - 65536;
                        n += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
                    } else n += String.fromCharCode(o);
                }
                return n;
            },
            ec = (r, e, t) => {
                if ((t ??= 0x7fffffff) < 4) return 0;
                for (var n = e, o = n + t - 4, a = 0; a < r.length; ++a) {
                    var i = r.charCodeAt(a);
                    if (
                        (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & r.charCodeAt(++a))),
                        (f[e >> 2] = i),
                        (e += 4) + 4 > o)
                    )
                        break;
                }
                return (f[e >> 2] = 0), e - n;
            },
            ef = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n >= 55296 && n <= 57343 && ++t, (e += 4);
                }
                return e;
            },
            eh = (r, e, t) => {
                var n = [],
                    o = r.toWireType(n, t);
                return n.length && (h[e >> 2] = en.toHandle(n)), o;
            },
            ep = [],
            em = {},
            ev = (r) => {
                var e = em[r];
                return void 0 === e ? rk(r) : e;
            },
            ey = (r) => (r < -0x20000000000000 || r > 0x20000000000000 ? NaN : Number(r)),
            eg = () => Date.now(),
            ew = (r) => {
                var e = ((r - s.buffer.byteLength + 65535) / 65536) | 0;
                try {
                    return s.grow(e), N(), 1;
                } catch (r) {}
            },
            eE = {},
            eb = () => {
                if (!eb.strings) {
                    var r = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG:
                            (
                                ("object" == typeof navigator && navigator.languages && navigator.languages[0]) ||
                                "C"
                            ).replace("-", "_") + ".UTF-8",
                        _: S || "./this.program",
                    };
                    for (var e in eE) void 0 === eE[e] ? delete r[e] : (r[e] = eE[e]);
                    var t = [];
                    for (var e in r) t.push(`${e}=${r[e]}`);
                    eb.strings = t;
                }
                return eb.strings;
            };
        (ry.createPreloadedFile = (r, e, t, n, o, a, i, s, u, l) => {
            var d = e ? ro.resolve(rt.join2(r, e)) : r,
                c = `cp ${d}`;
            function f(t) {
                var f, h;
                function p(t) {
                    l?.(), s || ry.createDataFile(r, e, t, n, o, u), a?.(), V(c);
                }
                (f = () => {
                    i?.(), V(c);
                }),
                    "u" > typeof Browser && Browser.init(),
                    (h = !1),
                    rm.forEach((r) => {
                        !h && r.canHandle(d) && (r.handle(t, d, p, f), (h = !0));
                    }),
                    h || p(t);
            }
            L(c), "string" == typeof t ? rp(t).then(f, i) : f(t);
        }),
            ry.staticInit(),
            (rh.doesNotExistError = new ry.ErrnoError(44)),
            (rh.doesNotExistError.stack = "<generic error, no stack>");
        for (var ek = Array(256), e_ = 0; e_ < 256; ++e_) ek[e_] = String.fromCharCode(e_);
        (w = ek),
            (E = r.BindingError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = "BindingError");
                    }
                }),
            (b = r.InternalError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = "InternalError");
                    }
                }),
            Object.assign(rI.prototype, {
                isAliasOf(r) {
                    if (!(this instanceof rI) || !(r instanceof rI)) return !1;
                    var e = this.$$.ptrType.registeredClass,
                        t = this.$$.ptr;
                    r.$$ = r.$$;
                    for (var n = r.$$.ptrType.registeredClass, o = r.$$.ptr; e.baseClass; )
                        (t = e.upcast(t)), (e = e.baseClass);
                    for (; n.baseClass; ) (o = n.upcast(o)), (n = n.baseClass);
                    return e === n && t === o;
                },
                clone() {
                    if ((this.$$.ptr || rS(this), this.$$.preservePointerOnDelete))
                        return (this.$$.count.value += 1), this;
                    {
                        let e;
                        var r = rU(
                            Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: {
                                        count: (e = this.$$).count,
                                        deleteScheduled: e.deleteScheduled,
                                        preservePointerOnDelete: e.preservePointerOnDelete,
                                        ptr: e.ptr,
                                        ptrType: e.ptrType,
                                        smartPtr: e.smartPtr,
                                        smartPtrType: e.smartPtrType,
                                    },
                                },
                            }),
                        );
                        return (r.$$.count.value += 1), (r.$$.deleteScheduled = !1), r;
                    }
                },
                delete() {
                    this.$$.ptr || rS(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            rT("Object already scheduled for deletion"),
                        rj(this),
                        rO(this.$$),
                        this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
                },
                isDeleted() {
                    return !this.$$.ptr;
                },
                deleteLater() {
                    return (
                        this.$$.ptr || rS(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            rT("Object already scheduled for deletion"),
                        rB.push(this),
                        1 === rB.length && k && k(rz),
                        (this.$$.deleteScheduled = !0),
                        this
                    );
                },
            }),
            Object.assign(rJ.prototype, {
                getPointee(r) {
                    return this.rawGetPointee && (r = this.rawGetPointee(r)), r;
                },
                destructor(r) {
                    this.rawDestructor?.(r);
                },
                argPackAdvance: 8,
                readValueFromPointer: rZ,
                fromWireType: function (r) {
                    var e,
                        t = this.getPointee(r);
                    if (!t) return this.destructor(r), null;
                    var n =
                        rN[
                            ((r, e) => {
                                for (void 0 === e && rT("ptr should not be undefined"); r.baseClass; )
                                    (e = r.upcast(e)), (r = r.baseClass);
                                return e;
                            })(this.registeredClass, t)
                        ];
                    if (void 0 !== n)
                        if (0 === n.$$.count.value) return (n.$$.ptr = t), (n.$$.smartPtr = r), n.clone();
                        else {
                            var o = n.clone();
                            return this.destructor(r), o;
                        }
                    function a() {
                        return this.isSmartPointer
                            ? rW(this.registeredClass.instancePrototype, {
                                  ptrType: this.pointeeType,
                                  ptr: t,
                                  smartPtrType: this,
                                  smartPtr: r,
                              })
                            : rW(this.registeredClass.instancePrototype, { ptrType: this, ptr: r });
                    }
                    var i = rR[this.registeredClass.getActualType(t)];
                    if (!i) return a.call(this);
                    e = this.isConst ? i.constPointerType : i.pointerType;
                    var s = rM(t, this.registeredClass, e.registeredClass);
                    return null === s
                        ? a.call(this)
                        : this.isSmartPointer
                          ? rW(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: s,
                                smartPtrType: this,
                                smartPtr: r,
                            })
                          : rW(e.registeredClass.instancePrototype, { ptrType: e, ptr: s });
                },
            }),
            (C = Error),
            ((A = rL("UnboundTypeError", function (r) {
                (this.name = "UnboundTypeError"), (this.message = r);
                var e = Error(r).stack;
                void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
            })).prototype = Object.create(C.prototype)),
            (A.prototype.constructor = A),
            (A.prototype.toString = function () {
                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
            }),
            ($ = r.UnboundTypeError = A),
            ee.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            (r.count_emval_handles = () => ee.length / 2 - 5 - er.length);
        var e$ = {
            a: (r, e, t) => {
                throw (new J(r).init(e, t), (Q = r), rr++, Q);
            },
            x: function (r, e, t) {
                rw.varargs = t;
                try {
                    var n = rw.getStreamFromFD(r);
                    switch (e) {
                        case 0:
                            var o = re();
                            if (o < 0) break;
                            for (; ry.streams[o]; ) o++;
                            return ry.dupStream(n, o).fd;
                        case 1:
                        case 2:
                        case 13:
                        case 14:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = re();
                            return (n.flags |= o), 0;
                        case 12:
                            var o = re();
                            return (d[(o + 0) >> 1] = 2), 0;
                    }
                    return -28;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            P: function (r, e) {
                try {
                    var t = rw.getStreamFromFD(r);
                    return rw.doStat(ry.stat, t.path, e);
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            G: function (r, e, t) {
                try {
                    var n = rw.getStreamFromFD(r);
                    n.getdents ||= ry.readdir(n.path);
                    for (
                        var o = 0,
                            a = ry.llseek(n, 0, 1),
                            i = Math.floor(a / 280),
                            s = Math.min(n.getdents.length, i + Math.floor(t / 280)),
                            l = i;
                        l < s;
                        l++
                    ) {
                        var c,
                            f,
                            h,
                            p = n.getdents[l];
                        if ("." === p) (c = n.node.id), (f = 4);
                        else if (".." === p) (c = ry.lookupPath(n.path, { parent: !0 }).node.id), (f = 4);
                        else {
                            try {
                                h = ry.lookupNode(n.node, p);
                            } catch (r) {
                                if (r?.errno === 28) continue;
                                throw r;
                            }
                            (c = h.id),
                                (f = ry.isChrdev(h.mode) ? 2 : ry.isDir(h.mode) ? 4 : ry.isLink(h.mode) ? 10 : 8);
                        }
                        (m[(e + o) >> 3] = BigInt(c)),
                            (m[(e + o + 8) >> 3] = BigInt((l + 1) * 280)),
                            (d[(e + o + 16) >> 1] = 280),
                            (u[e + o + 18] = f),
                            rE(p, e + o + 19, 256),
                            (o += 280);
                    }
                    return ry.llseek(n, 280 * l, 0), o;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            s: function (r, e, t) {
                rw.varargs = t;
                try {
                    var n = rw.getStreamFromFD(r);
                    switch (e) {
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
                                    a = re();
                                (f[a >> 2] = o.c_iflag || 0),
                                    (f[(a + 4) >> 2] = o.c_oflag || 0),
                                    (f[(a + 8) >> 2] = o.c_cflag || 0),
                                    (f[(a + 12) >> 2] = o.c_lflag || 0);
                                for (var i = 0; i < 32; i++) u[a + i + 17] = o.c_cc[i] || 0;
                            }
                            return 0;
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tcsets) {
                                for (
                                    var a = re(),
                                        s = f[a >> 2],
                                        l = f[(a + 4) >> 2],
                                        c = f[(a + 8) >> 2],
                                        h = f[(a + 12) >> 2],
                                        p = [],
                                        i = 0;
                                    i < 32;
                                    i++
                                )
                                    p.push(u[a + i + 17]);
                                return n.tty.ops.ioctl_tcsets(n.tty, e, {
                                    c_iflag: s,
                                    c_oflag: l,
                                    c_cflag: c,
                                    c_lflag: h,
                                    c_cc: p,
                                });
                            }
                            return 0;
                        case 21519:
                            if (!n.tty) return -59;
                            var a = re();
                            return (f[a >> 2] = 0), 0;
                        case 21520:
                            if (!n.tty) return -59;
                            return -28;
                        case 21531:
                            var a = re();
                            return ry.ioctl(n, e, a);
                        case 21523:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tiocgwinsz) {
                                var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                    a = re();
                                (d[a >> 1] = m[0]), (d[(a + 2) >> 1] = m[1]);
                            }
                            return 0;
                        default:
                            return -28;
                    }
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            M: function (r, e) {
                try {
                    return (r = rw.getStr(r)), rw.doStat(ry.lstat, r, e);
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            N: function (r, e, t, n) {
                try {
                    e = rw.getStr(e);
                    var o = 256 & n,
                        a = 4096 & n;
                    return (n &= -6401), (e = rw.calculateAt(r, e, a)), rw.doStat(o ? ry.lstat : ry.stat, e, t);
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            y: function (r, e, t, n) {
                rw.varargs = n;
                try {
                    (e = rw.getStr(e)), (e = rw.calculateAt(r, e));
                    var o = n ? re() : 0;
                    return ry.open(e, t, o).fd;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            O: function (r, e) {
                try {
                    return (r = rw.getStr(r)), rw.doStat(ry.stat, r, e);
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            R: () => H(""),
            B: (r, e, t, n, o) => {
                var a = -1 != (e = rk(e)).indexOf("u");
                rF(r, {
                    name: e,
                    fromWireType: (r) => r,
                    toWireType: function (r, e) {
                        if ("bigint" != typeof e && "number" != typeof e)
                            throw TypeError(`Cannot convert "${rb(e)}" to ${this.name}`);
                        return "number" == typeof e && (e = BigInt(e)), e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rD(e, t, !a),
                    destructorFunction: null,
                });
            },
            V: (r, e, t, n) => {
                rF(r, {
                    name: (e = rk(e)),
                    fromWireType: function (r) {
                        return !!r;
                    },
                    toWireType: function (r, e) {
                        return e ? t : n;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function (r) {
                        return this.fromWireType(l[r]);
                    },
                    destructorFunction: null,
                });
            },
            m: (r, e, t, n, o, a, i, s, u, l, d, c, f) => {
                (d = rk(d)), (a = r1(o, a)), (s &&= r1(i, s)), (l &&= r1(u, l)), (f = r1(c, f));
                var h,
                    p,
                    m = (p = (h = (h = d).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) >= 48 && p <= 57 ? `_${h}` : h;
                rH(m, function () {
                    r4(`Cannot construct ${d} due to unbound types`, [n]);
                }),
                    rA([r, e, t], n ? [n] : [], (e) => {
                        e = e[0];
                        var t,
                            o = n ? (t = e.registeredClass).instancePrototype : rI.prototype,
                            i = rL(d, function () {
                                for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                                if (Object.getPrototypeOf(this) !== u) throw new E("Use 'new' to construct " + d);
                                if (void 0 === c.constructor_body) throw new E(d + " has no accessible constructor");
                                var n = c.constructor_body[e.length];
                                if (void 0 === n)
                                    throw new E(
                                        `Tried to invoke ctor of ${d} with invalid number of parameters (${e.length}) - expected (${Object.keys(c.constructor_body).toString()}) parameters instead!`,
                                    );
                                return n.apply(this, e);
                            }),
                            u = Object.create(o, { constructor: { value: i } });
                        i.prototype = u;
                        var c = new rq(d, i, u, f, t, a, s, l);
                        c.baseClass && ((c.baseClass.__derivedClasses ??= []), c.baseClass.__derivedClasses.push(c));
                        var h = new rJ(d, c, !0, !1, !1),
                            p = new rJ(d + "*", c, !1, !1, !1),
                            v = new rJ(d + " const*", c, !1, !0, !1);
                        return (rR[r] = { pointerType: p, constPointerType: v }), rQ(m, i), [h, p, v];
                    });
            },
            q: (r, e, t, n, o, a) => {
                var i = r6(e, t);
                (o = r1(n, o)),
                    rA([], [r], (r) => {
                        r = r[0];
                        var t = `constructor ${r.name}`;
                        if (
                            (void 0 === r.registeredClass.constructor_body && (r.registeredClass.constructor_body = []),
                            void 0 !== r.registeredClass.constructor_body[e - 1])
                        )
                            throw new E(
                                `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${r.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                            );
                        return (
                            (r.registeredClass.constructor_body[e - 1] = () => {
                                r4(`Cannot construct ${r.name} due to unbound types`, i);
                            }),
                            rA(
                                [],
                                i,
                                (n) => (
                                    n.splice(1, 0, null),
                                    (r.registeredClass.constructor_body[e - 1] = r9(t, n, null, o, a)),
                                    []
                                ),
                            ),
                            []
                        );
                    });
            },
            c: (r, e, t, n, o, a, i, s, u, l) => {
                var d = r6(t, n);
                (e = r7((e = rk(e)))),
                    (a = r1(o, a)),
                    rA([], [r], (r) => {
                        r = r[0];
                        var n = `${r.name}.${e}`;
                        function o() {
                            r4(`Cannot call ${n} due to unbound types`, d);
                        }
                        e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                            s && r.registeredClass.pureVirtualFunctions.push(e);
                        var l = r.registeredClass.instancePrototype,
                            c = l[e];
                        return (
                            void 0 === c ||
                            (void 0 === c.overloadTable && c.className !== r.name && c.argCount === t - 2)
                                ? ((o.argCount = t - 2), (o.className = r.name), (l[e] = o))
                                : (rV(l, e, n), (l[e].overloadTable[t - 2] = o)),
                            rA([], d, (o) => {
                                var s = r9(n, o, r, a, i, u);
                                return (
                                    void 0 === l[e].overloadTable
                                        ? ((s.argCount = t - 2), (l[e] = s))
                                        : (l[e].overloadTable[t - 2] = s),
                                    []
                                );
                            }),
                            []
                        );
                    });
            },
            E: (e, t, n) => {
                (e = rk(e)), rA([], [t], (t) => ((t = t[0]), (r[e] = t.fromWireType(n)), []));
            },
            T: (r) => rF(r, eo),
            D: (r, e, t, n) => {
                function o() {}
                (e = rk(e)),
                    (o.values = {}),
                    rF(r, {
                        name: e,
                        constructor: o,
                        fromWireType: function (r) {
                            return this.constructor.values[r];
                        },
                        toWireType: (r, e) => e.value,
                        argPackAdvance: 8,
                        readValueFromPointer: ((r, e, t) => {
                            switch (e) {
                                case 1:
                                    return t
                                        ? function (r) {
                                              return this.fromWireType(u[r]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(l[r]);
                                          };
                                case 2:
                                    return t
                                        ? function (r) {
                                              return this.fromWireType(d[r >> 1]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(c[r >> 1]);
                                          };
                                case 4:
                                    return t
                                        ? function (r) {
                                              return this.fromWireType(f[r >> 2]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(h[r >> 2]);
                                          };
                                default:
                                    throw TypeError(`invalid integer width (${e}): ${r}`);
                            }
                        })(e, t, n),
                        destructorFunction: null,
                    }),
                    rH(e, o);
            },
            j: (r, e, t) => {
                var n = ea(r, "enum");
                e = rk(e);
                var o = n.constructor,
                    a = Object.create(n.constructor.prototype, {
                        value: { value: t },
                        constructor: { value: rL(`${n.name}_${e}`, function () {}) },
                    });
                (o.values[t] = a), (o[e] = a);
            },
            A: (r, e, t) => {
                rF(r, {
                    name: (e = rk(e)),
                    fromWireType: (r) => r,
                    toWireType: (r, e) => e,
                    argPackAdvance: 8,
                    readValueFromPointer: ((r, e) => {
                        switch (e) {
                            case 4:
                                return function (r) {
                                    return this.fromWireType(p[r >> 2]);
                                };
                            case 8:
                                return function (r) {
                                    return this.fromWireType(y[r >> 3]);
                                };
                            default:
                                throw TypeError(`invalid float width (${e}): ${r}`);
                        }
                    })(e, t),
                    destructorFunction: null,
                });
            },
            Y: (r, e, t, n, o, a, i, s) => {
                var u = r6(e, t);
                (r = r7((r = rk(r)))),
                    (o = r1(n, o)),
                    rH(
                        r,
                        function () {
                            r4(`Cannot call ${r} due to unbound types`, u);
                        },
                        e - 1,
                    ),
                    rA([], u, (t) => {
                        var n = [t[0], null].concat(t.slice(1));
                        return rQ(r, r9(r, n, null, o, a, i), e - 1), [];
                    });
            },
            i: (r, e, t, n, o) => {
                (e = rk(e)), -1 === o && (o = 0xffffffff);
                var a = (r) => r;
                if (0 === n) {
                    var i = 32 - 8 * t;
                    a = (r) => (r << i) >>> i;
                }
                var s = e.includes("unsigned"),
                    u = (r, e) => {};
                rF(r, {
                    name: e,
                    fromWireType: a,
                    toWireType: s
                        ? function (r, e) {
                              return u(e, this.name), e >>> 0;
                          }
                        : function (r, e) {
                              return u(e, this.name), e;
                          },
                    argPackAdvance: 8,
                    readValueFromPointer: rD(e, t, 0 !== n),
                    destructorFunction: null,
                });
            },
            d: (r, e, t) => {
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
                ][e];
                function o(r) {
                    var e = h[r >> 2],
                        t = h[(r + 4) >> 2];
                    return new n(u.buffer, t, e);
                }
                rF(
                    r,
                    { name: (t = rk(t)), fromWireType: o, argPackAdvance: 8, readValueFromPointer: o },
                    { ignoreDuplicateRegistrations: !0 },
                );
            },
            X: (r, e, t, n, o, a, i, s, u, l, d, c) => {
                (t = rk(t)),
                    (a = r1(o, a)),
                    (s = r1(i, s)),
                    (l = r1(u, l)),
                    (c = r1(d, c)),
                    rA([r], [e], (r) => ((r = r[0]), [new rJ(t, r.registeredClass, !1, !1, !0, r, n, a, s, l, c)]));
            },
            U: (r, e) => {
                rF(r, {
                    name: (e = rk(e)),
                    fromWireType(r) {
                        for (var e, t, n = h[r >> 2], o = r + 4, a = o, e = 0; e <= n; ++e) {
                            var i = o + e;
                            if (e == n || 0 == l[i]) {
                                var s = i - a,
                                    u = rg(a, s);
                                void 0 === t ? (t = u) : ((t += "\0"), (t += u)), (a = i + 1);
                            }
                        }
                        return eC(r), t;
                    },
                    toWireType(r, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var t,
                            n = "string" == typeof e;
                        n ||
                            e instanceof Uint8Array ||
                            e instanceof Uint8ClampedArray ||
                            e instanceof Int8Array ||
                            rT("Cannot pass non-string to std::string"),
                            (t = n ? ru(e) : e.length);
                        var o = eT(4 + t + 1),
                            a = o + 4;
                        if (((h[o >> 2] = t), n)) rE(e, a, t + 1);
                        else if (n)
                            for (var i = 0; i < t; ++i) {
                                var s = e.charCodeAt(i);
                                s > 255 && (eC(a), rT("String has UTF-16 code units that do not fit in 8 bits")),
                                    (l[a + i] = s);
                            }
                        else for (var i = 0; i < t; ++i) l[a + i] = e[i];
                        return null !== r && r.push(eC, o), o;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rZ,
                    destructorFunction(r) {
                        eC(r);
                    },
                });
            },
            t: (r, e, t) => {
                var n, o, a, i;
                (t = rk(t)),
                    2 === e
                        ? ((n = es), (o = eu), (i = el), (a = (r) => c[r >> 1]))
                        : 4 === e && ((n = ed), (o = ec), (i = ef), (a = (r) => h[r >> 2])),
                    rF(r, {
                        name: t,
                        fromWireType: (r) => {
                            for (var t, o = h[r >> 2], i = r + 4, s = 0; s <= o; ++s) {
                                var u = r + 4 + s * e;
                                if (s == o || 0 == a(u)) {
                                    var l = u - i,
                                        d = n(i, l);
                                    void 0 === t ? (t = d) : ((t += "\0"), (t += d)), (i = u + e);
                                }
                            }
                            return eC(r), t;
                        },
                        toWireType: (r, n) => {
                            "string" != typeof n && rT(`Cannot pass non-string to C++ string type ${t}`);
                            var a = i(n),
                                s = eT(4 + a + e);
                            return (h[s >> 2] = a / e), o(n, s + 4, a + e), null !== r && r.push(eC, s), s;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: rZ,
                        destructorFunction(r) {
                            eC(r);
                        },
                    });
            },
            W: (r, e) => {
                rF(r, {
                    isVoid: !0,
                    name: (e = rk(e)),
                    argPackAdvance: 0,
                    fromWireType: () => void 0,
                    toWireType: (r, e) => void 0,
                });
            },
            r: (r, e, t) => ((r = en.toValue(r)), eh((e = ea(e, "emval::as")), t, r)),
            u: (r, e, t, n) => (r = ep[r])(null, (e = en.toValue(e)), t, n),
            C: (r, e, t, n, o) => ((r = ep[r]), r((e = en.toValue(e)), e[(t = ev(t))], n, o)),
            b: et,
            n: (r, e, t) => {
                var n,
                    o,
                    a = ((r, e) => {
                        for (var t = Array(r), n = 0; n < r; ++n) t[n] = ea(h[(e + 4 * n) >> 2], "parameter " + n);
                        return t;
                    })(r, e),
                    i = a.shift();
                r--;
                var s = `return function (obj, func, destructorsRef, args) {
`,
                    u = 0,
                    l = [];
                0 === t && l.push("obj");
                for (var d = ["retType"], c = [i], f = 0; f < r; ++f)
                    l.push("arg" + f),
                        d.push("argType" + f),
                        c.push(a[f]),
                        (s += `  var arg${f} = argType${f}.readValueFromPointer(args${u ? "+" + u : ""});
`),
                        (u += a[f].argPackAdvance);
                (s += `  var rv = ${1 === t ? "new func" : "func.call"}(${l.join(", ")});
`),
                    i.isVoid ||
                        (d.push("emval_returnValue"),
                        c.push(eh),
                        (s += "  return emval_returnValue(retType, destructorsRef, rv);\n")),
                    (s += "};\n"),
                    d.push(s);
                var p = r8(Function, d)(...c);
                return (
                    (n = rL(`methodCaller<(${a.map((r) => r.name).join(", ")}) => ${i.name}>`, p)),
                    (o = ep.length),
                    ep.push(n),
                    o
                );
            },
            l: (r, e) => ((r = en.toValue(r)), (e = en.toValue(e)), en.toHandle(r[e])),
            f: (r) => {
                r > 9 && (ee[r + 1] += 1);
            },
            Z: () => en.toHandle([]),
            g: (r) => en.toHandle(ev(r)),
            o: () => en.toHandle({}),
            h: (r) => {
                r5(en.toValue(r)), et(r);
            },
            k: (r, e, t) => {
                (r = en.toValue(r)), (e = en.toValue(e)), (t = en.toValue(t)), (r[e] = t);
            },
            e: (r, e) => {
                var t = (r = ea(r, "_emval_take_value")).readValueFromPointer(e);
                return en.toHandle(t);
            },
            I: function (r, e) {
                var t = new Date(1e3 * (r = ey(r)));
                (f[e >> 2] = t.getUTCSeconds()),
                    (f[(e + 4) >> 2] = t.getUTCMinutes()),
                    (f[(e + 8) >> 2] = t.getUTCHours()),
                    (f[(e + 12) >> 2] = t.getUTCDate()),
                    (f[(e + 16) >> 2] = t.getUTCMonth()),
                    (f[(e + 20) >> 2] = t.getUTCFullYear() - 1900),
                    (f[(e + 24) >> 2] = t.getUTCDay());
                var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    o = ((t.getTime() - n) / 864e5) | 0;
                f[(e + 28) >> 2] = o;
            },
            H: function (r, e, t, n, o, a) {
                a = ey(a);
                try {
                    var i = rw.getStreamFromFD(o);
                    2 & t && rw.doMsync(r, i, e, n, a);
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            S: (r, e, t, n) => {
                var o = new Date().getFullYear(),
                    a = new Date(o, 0, 1),
                    i = new Date(o, 6, 1),
                    s = a.getTimezoneOffset(),
                    u = i.getTimezoneOffset(),
                    l = Math.max(s, u);
                (h[r >> 2] = 60 * l), (f[e >> 2] = Number(s != u));
                var d = (r) => {
                        var e = Math.abs(r),
                            t = String(Math.floor(e / 60)).padStart(2, "0"),
                            n = String(e % 60).padStart(2, "0");
                        return `UTC${r >= 0 ? "-" : "+"}${t}${n}`;
                    },
                    c = d(s),
                    p = d(u);
                u < s ? (rE(c, t, 17), rE(p, n, 17)) : (rE(c, n, 17), rE(p, t, 17));
            },
            Q: function (r, e, t) {
                if (((e = ey(e)), !(r >= 0 && r <= 3))) return 28;
                if (0 === r) n = eg();
                else {
                    0;
                    n = performance.now();
                }
                var n,
                    o = Math.round(1e3 * n * 1e3);
                return (m[t >> 3] = BigInt(o)), 0;
            },
            z: eg,
            F: (r) => {
                var e = l.length;
                if ((r >>>= 0) > 0x80000000) return !1;
                for (var t = 1; t <= 4; t *= 2) {
                    var n = e * (1 + 0.2 / t);
                    if (((n = Math.min(n, r + 0x6000000)), ew(Math.min(0x80000000, rc(Math.max(r, n), 65536)))))
                        return !0;
                }
                return !1;
            },
            K: (r, e) => {
                var t = 0;
                return (
                    eb().forEach((n, o) => {
                        var a = e + t;
                        h[(r + 4 * o) >> 2] = a;
                        for (var i = a, s = 0; s < n.length; ++s) u[i++] = n.charCodeAt(s);
                        (u[i] = 0), (t += n.length + 1);
                    }),
                    0
                );
            },
            L: (r, e) => {
                var t = eb();
                h[r >> 2] = t.length;
                var n = 0;
                return t.forEach((r) => (n += r.length + 1)), (h[e >> 2] = n), 0;
            },
            p: function (r) {
                try {
                    var e = rw.getStreamFromFD(r);
                    return ry.close(e), 0;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            v: function (r, e, t, n) {
                try {
                    var o = rw.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = h[e >> 2],
                                    s = h[(e + 4) >> 2];
                                e += 8;
                                var l = ry.read(r, u, i, s, n);
                                if (l < 0) return -1;
                                if (((o += l), l < s)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (h[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            J: function (r, e, t, n) {
                e = ey(e);
                try {
                    if (isNaN(e)) return 61;
                    var o = rw.getStreamFromFD(r);
                    return (
                        ry.llseek(o, e, t),
                        (m[n >> 3] = BigInt(o.position)),
                        o.getdents && 0 === e && 0 === t && (o.getdents = null),
                        0
                    );
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            w: function (r, e, t, n) {
                try {
                    var o = rw.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = h[e >> 2],
                                    s = h[(e + 4) >> 2];
                                e += 8;
                                var l = ry.write(r, u, i, s, n);
                                if (l < 0) return -1;
                                if (((o += l), l < s)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (h[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === ry || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
        };
        Y();
        var eP = (r) => (eP = P.aa)(r),
            eT = (r._malloc = (e) => (eT = r._malloc = P.ca)(e)),
            eC = (r._free = (e) => (eC = r._free = P.da)(e)),
            eA = (r, e) => (eA = P.ea)(r, e),
            eF = (r) => (eF = P.fa)(r),
            eD = (r) => (eD = P.ga)(r),
            eS = () => (eS = P.ha)();
        function ex() {
            if (!(z > 0)) {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) {
                        var t;
                        (t = r.preRun.shift()), W.unshift(t);
                    }
                K(W),
                    z > 0 ||
                        (r.setStatus
                            ? (r.setStatus("Running..."),
                              setTimeout(() => {
                                  setTimeout(() => r.setStatus(""), 1), n();
                              }, 1))
                            : n());
            }
            function n() {
                if (!T && ((T = !0), (r.calledRun = !0), !R)) {
                    if (
                        (r.noFSInit || ry.initialized || ry.init(),
                        (ry.ignorePermissions = !1),
                        rd.init(),
                        K(U),
                        e(r),
                        r.onRuntimeInitialized?.(),
                        r.postRun)
                    )
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) {
                            var t;
                            (t = r.postRun.shift()), B.unshift(t);
                        }
                    K(B);
                }
            }
        }
        if (
            ((r.ccall = (e, t, n, o, a) => {
                var i = {
                        string: (r) => {
                            var e,
                                t,
                                n,
                                o = 0;
                            return null != r && 0 !== r && ((t = ru((e = r)) + 1), rE(e, (n = eD(t)), t), (o = n)), o;
                        },
                        array: (r) => {
                            let e;
                            var t = ((e = r.length), eD(e));
                            return u.set(r, t), t;
                        },
                    },
                    s = r["_" + e],
                    l = [],
                    d = 0;
                if (o)
                    for (var c = 0; c < o.length; c++) {
                        var f = i[n[c]];
                        f ? (0 === d && (d = Z()), (l[c] = f(o[c]))) : (l[c] = o[c]);
                    }
                var h = s(...l);
                return (function (r) {
                    return 0 !== d && eF(d), "string" === t ? rg(r) : "boolean" === t ? !!r : r;
                })(h);
            }),
            (I = function r() {
                T || ex(), T || (I = r);
            }),
            r.preInit)
        )
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
        return ex(), F;
    });
