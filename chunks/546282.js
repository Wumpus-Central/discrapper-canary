var n;
function o(r, e, t) {
    return (
        e in r
            ? Object.defineProperty(r, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (r[e] = t),
        r
    );
}
t.d(e, { Z: () => a }),
    t(704826),
    t(35282),
    t(415506),
    t(66299),
    t(227481),
    t(730884),
    t(20464),
    t(341884),
    t(364341),
    t(629680),
    t(505025),
    t(918970),
    t(121784),
    t(644351),
    t(146733),
    t(189980),
    t(410992),
    t(82823),
    t(491343),
    t(259475),
    t(17294),
    t(733314),
    t(290780),
    t(190126),
    t(368063),
    t(65234),
    t(111804),
    t(490233),
    t(97749),
    t(388685),
    t(539854),
    t(997841),
    t(583741),
    t(781311),
    t(953529),
    t(559231),
    t(824928);
let a =
    ((n = "file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js"),
    function () {
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var e,
            a,
            i,
            s,
            l,
            c,
            u,
            d,
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
            _,
            k,
            P,
            T,
            C,
            A,
            $,
            F,
            D = new Promise((r, t) => {
                (e = r), (a = t);
            }),
            S = Object.assign({}, r),
            j = "./this.program",
            x = "";
        "undefined" != typeof document && document.currentScript && (x = document.currentScript.src),
            n && (x = n),
            (x = x.startsWith("blob:") ? "" : x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
            (i = async (r) => {
                var e = await fetch(r, { credentials: "same-origin" });
                if (e.ok) return e.arrayBuffer();
                throw Error(e.status + " : " + e.url);
            });
        var O = r.print || console.log.bind(console),
            M = r.printErr || console.error.bind(console);
        Object.assign(r, S), (S = null), r.arguments && r.arguments, r.thisProgram && (j = r.thisProgram);
        var R = r.wasmBinary,
            N = !1;
        function W() {
            var e = l.buffer;
            (r.HEAP8 = c = new Int8Array(e)),
                (r.HEAP16 = d = new Int16Array(e)),
                (r.HEAPU8 = u = new Uint8Array(e)),
                (r.HEAPU16 = f = new Uint16Array(e)),
                (r.HEAP32 = h = new Int32Array(e)),
                (r.HEAPU32 = p = new Uint32Array(e)),
                (r.HEAPF32 = m = new Float32Array(e)),
                (r.HEAPF64 = g = new Float64Array(e)),
                (r.HEAP64 = v = new BigInt64Array(e)),
                (r.HEAPU64 = y = new BigUint64Array(e));
        }
        var B = [],
            U = [],
            z = [],
            I = 0,
            V = null;
        function L(e) {
            var t;
            I++, null == (t = r.monitorRunDependencies) || t.call(r, I);
        }
        function H(e) {
            var t;
            if ((I--, null == (t = r.monitorRunDependencies) || t.call(r, I), 0 == I && V)) {
                var n = V;
                (V = null), n();
            }
        }
        function q(e) {
            null == (t = r.onAbort) || t.call(r, e),
                M((e = "Aborted(" + e + ")")),
                (N = !0),
                (e += ". Build with -sASSERTIONS for more info.");
            var t,
                n = new WebAssembly.RuntimeError(e);
            throw (a(n), n);
        }
        var G = (r) => r.startsWith("data:application/octet-stream;base64,");
        async function X(r) {
            if (!R)
                try {
                    var e = await i(r);
                    return new Uint8Array(e);
                } catch (r) {}
            if (r == w && R) return new Uint8Array(R);
            if (s) return s(r);
            throw "both async and sync fetching of the wasm failed";
        }
        async function Y(r, e) {
            try {
                var t = await X(r);
                return await WebAssembly.instantiate(t, e);
            } catch (r) {
                M("failed to asynchronously prepare wasm: ".concat(r)), q(r);
            }
        }
        async function Z(r, e, t) {
            if (!r && "function" == typeof WebAssembly.instantiateStreaming && !G(e) && "function" == typeof fetch)
                try {
                    var n = fetch(e, { credentials: "same-origin" });
                    return await WebAssembly.instantiateStreaming(n, t);
                } catch (r) {
                    M("wasm streaming compile failed: ".concat(r)), M("falling back to ArrayBuffer instantiation");
                }
            return Y(e, t);
        }
        async function K() {
            function e(r, e) {
                var t;
                return (l = (C = r.exports)._), W(), (P = C.ba), (t = C.$), U.unshift(t), H("wasm-instantiate"), C;
            }
            L("wasm-instantiate");
            var n = { a: eA };
            if (r.instantiateWasm)
                try {
                    return r.instantiateWasm(n, e);
                } catch (r) {
                    M("Module.instantiateWasm callback failed with error: ".concat(r)), a(r);
                }
            null != w ||
                (w = (function () {
                    if (r.locateFile) {
                        var e = "libdave.wasm";
                        return G(e) ? e : r.locateFile ? r.locateFile(e, x) : x + e;
                    }
                    return new URL(t(153796), t.b).href;
                })());
            try {
                var o = await Z(R, w, n);
                return e(o.instance), o;
            } catch (r) {
                a(r);
                return;
            }
        }
        var J = (e) => {
            for (; e.length > 0; ) e.shift()(r);
        };
        r.noExitRuntime;
        var Q = () => eO();
        class rr {
            set_type(r) {
                p[(this.ptr + 4) >> 2] = r;
            }
            get_type() {
                return p[(this.ptr + 4) >> 2];
            }
            set_destructor(r) {
                p[(this.ptr + 8) >> 2] = r;
            }
            get_destructor() {
                return p[(this.ptr + 8) >> 2];
            }
            set_caught(r) {
                (r = +!!r), (c[this.ptr + 12] = r);
            }
            get_caught() {
                return 0 != c[this.ptr + 12];
            }
            set_rethrown(r) {
                (r = +!!r), (c[this.ptr + 13] = r);
            }
            get_rethrown() {
                return 0 != c[this.ptr + 13];
            }
            init(r, e) {
                this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(e);
            }
            set_adjusted_ptr(r) {
                p[(this.ptr + 16) >> 2] = r;
            }
            get_adjusted_ptr() {
                return p[(this.ptr + 16) >> 2];
            }
            constructor(r) {
                (this.excPtr = r), (this.ptr = r - 24);
            }
        }
        var re = 0,
            rt = 0,
            rn = () => {
                var r = h[rb.varargs >> 2];
                return (rb.varargs += 4), r;
            },
            ro = {
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
                    var e = ro.isAbs(r),
                        t = "/" === r.substr(-1);
                    return (
                        (r = ro
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
                    var e = ro.splitPath(r),
                        t = e[0],
                        n = e[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
                },
                basename: (r) => {
                    if ("/" === r) return "/";
                    var e = (r = (r = ro.normalize(r)).replace(/\/$/, "")).lastIndexOf("/");
                    return -1 === e ? r : r.substr(e + 1);
                },
                join: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    return ro.normalize(e.join("/"));
                },
                join2: (r, e) => ro.normalize(r + "/" + e),
            },
            ra = (r) =>
                (ra = (() => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                        return (r) => crypto.getRandomValues(r);
                    q("initRandomDevice");
                })())(r),
            ri = {
                resolve: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    for (var n = "", o = !1, a = e.length - 1; a >= -1 && !o; a--) {
                        var i = a >= 0 ? e[a] : rw.cwd();
                        if ("string" != typeof i) throw TypeError("Arguments to path.resolve must be strings");
                        if (!i) return "";
                        (n = i + "/" + n), (o = ro.isAbs(i));
                    }
                    return (
                        (n = ro
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
                    (r = ri.resolve(r).substr(1)), (e = ri.resolve(e).substr(1));
                    for (
                        var n = t(r.split("/")), o = t(e.split("/")), a = Math.min(n.length, o.length), i = a, s = 0;
                        s < a;
                        s++
                    )
                        if (n[s] !== o[s]) {
                            i = s;
                            break;
                        }
                    for (var l = [], s = i; s < n.length; s++) l.push("..");
                    return (l = l.concat(o.slice(i))).join("/");
                },
            },
            rs = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0,
            rl = function (r) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
                for (var n = e + t, o = e; r[o] && !(o >= n); ) ++o;
                if (o - e > 16 && r.buffer && rs) return rs.decode(r.subarray(e, o));
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
                    var l = 63 & r[e++];
                    if (
                        (i =
                            (240 & i) == 224
                                ? ((15 & i) << 12) | (s << 6) | l
                                : ((7 & i) << 18) | (s << 12) | (l << 6) | (63 & r[e++])) < 65536
                    )
                        a += String.fromCharCode(i);
                    else {
                        var c = i - 65536;
                        a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                    }
                }
                return a;
            },
            rc = [],
            ru = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n <= 127 ? e++ : n <= 2047 ? (e += 2) : n >= 55296 && n <= 57343 ? ((e += 4), ++t) : (e += 3);
                }
                return e;
            },
            rd = (r, e, t, n) => {
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
            rf = {
                ttys: [],
                init() {},
                shutdown() {},
                register(r, e) {
                    (rf.ttys[r] = {
                        input: [],
                        output: [],
                        ops: e,
                    }),
                        rw.registerDevice(r, rf.stream_ops);
                },
                stream_ops: {
                    open(r) {
                        var e = rf.ttys[r.node.rdev];
                        if (!e) throw new rw.ErrnoError(43);
                        (r.tty = e), (r.seekable = !1);
                    },
                    close(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    fsync(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    read(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.get_char) throw new rw.ErrnoError(60);
                        for (var a, i = 0, s = 0; s < n; s++) {
                            try {
                                a = r.tty.ops.get_char(r.tty);
                            } catch (r) {
                                throw new rw.ErrnoError(29);
                            }
                            if (void 0 === a && 0 === i) throw new rw.ErrnoError(6);
                            if (null == a) break;
                            i++, (e[t + s] = a);
                        }
                        return i && (r.node.atime = Date.now()), i;
                    },
                    write(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.put_char) throw new rw.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) r.tty.ops.put_char(r.tty, e[t + a]);
                        } catch (r) {
                            throw new rw.ErrnoError(29);
                        }
                        return n && (r.node.mtime = r.node.ctime = Date.now()), a;
                    },
                },
                default_tty_ops: {
                    get_char: (r) =>
                        (() => {
                            if (!rc.length) {
                                var r,
                                    e,
                                    t,
                                    n,
                                    o,
                                    a = null;
                                if (
                                    ("undefined" != typeof window &&
                                        "function" == typeof window.prompt &&
                                        null !== (a = window.prompt("Input: ")) &&
                                        (a += "\n"),
                                    !a)
                                )
                                    return null;
                                (r = a),
                                    (e = !0),
                                    (n = Array(ru(r) + 1)),
                                    (o = rd(r, n, 0, n.length)),
                                    e && (n.length = o),
                                    (rc = n);
                            }
                            return rc.shift();
                        })(),
                    put_char(r, e) {
                        null === e || 10 === e ? (O(rl(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (O(rl(r.output)), (r.output = []));
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
                        null === e || 10 === e ? (M(rl(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (M(rl(r.output)), (r.output = []));
                    },
                },
            },
            rh = (r, e) => Math.ceil(r / e) * e,
            rp = (r) => {
                r = rh(r, 65536);
                var e,
                    t = eS(65536, r);
                return t && ((e = r), u.fill(0, t, t + e)), t;
            },
            rm = {
                ops_table: null,
                mount: (r) => rm.createNode(null, "/", 16895, 0),
                createNode(r, e, t, n) {
                    if (rw.isBlkdev(t) || rw.isFIFO(t)) throw new rw.ErrnoError(63);
                    rm.ops_table ||
                        (rm.ops_table = {
                            dir: {
                                node: {
                                    getattr: rm.node_ops.getattr,
                                    setattr: rm.node_ops.setattr,
                                    lookup: rm.node_ops.lookup,
                                    mknod: rm.node_ops.mknod,
                                    rename: rm.node_ops.rename,
                                    unlink: rm.node_ops.unlink,
                                    rmdir: rm.node_ops.rmdir,
                                    readdir: rm.node_ops.readdir,
                                    symlink: rm.node_ops.symlink,
                                },
                                stream: { llseek: rm.stream_ops.llseek },
                            },
                            file: {
                                node: {
                                    getattr: rm.node_ops.getattr,
                                    setattr: rm.node_ops.setattr,
                                },
                                stream: {
                                    llseek: rm.stream_ops.llseek,
                                    read: rm.stream_ops.read,
                                    write: rm.stream_ops.write,
                                    allocate: rm.stream_ops.allocate,
                                    mmap: rm.stream_ops.mmap,
                                    msync: rm.stream_ops.msync,
                                },
                            },
                            link: {
                                node: {
                                    getattr: rm.node_ops.getattr,
                                    setattr: rm.node_ops.setattr,
                                    readlink: rm.node_ops.readlink,
                                },
                                stream: {},
                            },
                            chrdev: {
                                node: {
                                    getattr: rm.node_ops.getattr,
                                    setattr: rm.node_ops.setattr,
                                },
                                stream: rw.chrdev_stream_ops,
                            },
                        });
                    var o = rw.createNode(r, e, t, n);
                    return (
                        rw.isDir(o.mode)
                            ? ((o.node_ops = rm.ops_table.dir.node),
                              (o.stream_ops = rm.ops_table.dir.stream),
                              (o.contents = {}))
                            : rw.isFile(o.mode)
                              ? ((o.node_ops = rm.ops_table.file.node),
                                (o.stream_ops = rm.ops_table.file.stream),
                                (o.usedBytes = 0),
                                (o.contents = null))
                              : rw.isLink(o.mode)
                                ? ((o.node_ops = rm.ops_table.link.node), (o.stream_ops = rm.ops_table.link.stream))
                                : rw.isChrdev(o.mode) &&
                                  ((o.node_ops = rm.ops_table.chrdev.node),
                                  (o.stream_ops = rm.ops_table.chrdev.stream)),
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
                            (e.dev = rw.isChrdev(r.mode) ? r.id : 1),
                            (e.ino = r.id),
                            (e.mode = r.mode),
                            (e.nlink = 1),
                            (e.uid = 0),
                            (e.gid = 0),
                            (e.rdev = r.rdev),
                            rw.isDir(r.mode)
                                ? (e.size = 4096)
                                : rw.isFile(r.mode)
                                  ? (e.size = r.usedBytes)
                                  : rw.isLink(r.mode)
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
                        void 0 !== e.size && rm.resizeFileStorage(r, e.size);
                    },
                    lookup(r, e) {
                        throw rm.doesNotExistError;
                    },
                    mknod: (r, e, t, n) => rm.createNode(r, e, t, n),
                    rename(r, e, t) {
                        var n;
                        try {
                            n = rw.lookupNode(e, t);
                        } catch (r) {}
                        if (n) {
                            if (rw.isDir(r.mode)) for (var o in n.contents) throw new rw.ErrnoError(55);
                            rw.hashRemoveNode(n);
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
                        var t = rw.lookupNode(r, e);
                        for (var n in t.contents) throw new rw.ErrnoError(55);
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    readdir: (r) => [".", "..", ...Object.keys(r.contents)],
                    symlink(r, e, t) {
                        var n = rm.createNode(r, e, 41471, 0);
                        return (n.link = t), n;
                    },
                    readlink(r) {
                        if (!rw.isLink(r.mode)) throw new rw.ErrnoError(28);
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
                        if ((e.buffer === c.buffer && (a = !1), !n)) return 0;
                        var i = r.node;
                        if (((i.mtime = i.ctime = Date.now()), e.subarray && (!i.contents || i.contents.subarray))) {
                            if (a) return (i.contents = e.subarray(t, t + n)), (i.usedBytes = n), n;
                            else if (0 === i.usedBytes && 0 === o)
                                return (i.contents = e.slice(t, t + n)), (i.usedBytes = n), n;
                            else if (o + n <= i.usedBytes) return i.contents.set(e.subarray(t, t + n), o), n;
                        }
                        if ((rm.expandFileStorage(i, o + n), i.contents.subarray && e.subarray))
                            i.contents.set(e.subarray(t, t + n), o);
                        else for (var s = 0; s < n; s++) i.contents[o + s] = e[t + s];
                        return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
                    },
                    llseek(r, e, t) {
                        var n = e;
                        if (
                            (1 === t ? (n += r.position) : 2 === t && rw.isFile(r.node.mode) && (n += r.node.usedBytes),
                            n < 0)
                        )
                            throw new rw.ErrnoError(28);
                        return n;
                    },
                    allocate(r, e, t) {
                        rm.expandFileStorage(r.node, e + t), (r.node.usedBytes = Math.max(r.node.usedBytes, e + t));
                    },
                    mmap(r, e, t, n, o) {
                        if (!rw.isFile(r.node.mode)) throw new rw.ErrnoError(43);
                        var a,
                            i,
                            s = r.node.contents;
                        if (!(2 & o) && s && s.buffer === c.buffer) (i = !1), (a = s.byteOffset);
                        else {
                            if (((i = !0), !(a = rp(e)))) throw new rw.ErrnoError(48);
                            s &&
                                ((t > 0 || t + e < s.length) &&
                                    (s = s.subarray ? s.subarray(t, t + e) : Array.prototype.slice.call(s, t, t + e)),
                                c.set(s, a));
                        }
                        return {
                            ptr: a,
                            allocated: i,
                        };
                    },
                    msync: (r, e, t, n, o) => (rm.stream_ops.write(r, e, 0, n, t, !1), 0),
                },
            },
            rv = async (r) => new Uint8Array(await i(r)),
            ry = r.preloadPlugins || [],
            rg = (r, e) => {
                var t = 0;
                return r && (t |= 365), e && (t |= 146), t;
            },
            rw = {
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
                    constructor(r) {
                        o(this, "name", "ErrnoError"), (this.errno = r);
                    }
                },
                filesystems: null,
                syncFSRequests: 0,
                readFiles: {},
                FSStream: class {
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
                    constructor() {
                        o(this, "shared", {});
                    }
                },
                FSNode: class {
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
                        return rw.isDir(this.mode);
                    }
                    get isDevice() {
                        return rw.isChrdev(this.mode);
                    }
                    constructor(r, e, t, n) {
                        o(this, "node_ops", {}),
                            o(this, "stream_ops", {}),
                            o(this, "readMode", 365),
                            o(this, "writeMode", 146),
                            o(this, "mounted", null),
                            r || (r = this),
                            (this.parent = r),
                            (this.mount = r.mount),
                            (this.id = rw.nextInode++),
                            (this.name = e),
                            (this.mode = t),
                            (this.rdev = n),
                            (this.atime = this.mtime = this.ctime = Date.now());
                    }
                },
                lookupPath(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!r)
                        return {
                            path: "",
                            node: null,
                        };
                    null != e.follow_mount || (e.follow_mount = !0), ro.isAbs(r) || (r = rw.cwd() + "/" + r);
                    r: for (var t, n = 0; n < 40; n++) {
                        for (
                            var o = r.split("/").filter((r) => !!r && "." !== r), a = rw.root, i = "/", s = 0;
                            s < o.length;
                            s++
                        ) {
                            var l = s === o.length - 1;
                            if (l && e.parent) break;
                            if (".." === o[s]) {
                                (i = ro.dirname(i)), (a = a.parent);
                                continue;
                            }
                            i = ro.join2(i, o[s]);
                            try {
                                a = rw.lookupNode(a, o[s]);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 44 && l && e.noent_okay) return { path: i };
                                throw r;
                            }
                            if (
                                (rw.isMountpoint(a) && (!l || e.follow_mount) && (a = a.mounted.root),
                                rw.isLink(a.mode) && (!l || e.follow))
                            ) {
                                if (!a.node_ops.readlink) throw new rw.ErrnoError(52);
                                var c = a.node_ops.readlink(a);
                                ro.isAbs(c) || (c = ro.dirname(i) + "/" + c), (r = c + "/" + o.slice(s + 1).join("/"));
                                continue r;
                            }
                        }
                        return {
                            path: i,
                            node: a,
                        };
                    }
                    throw new rw.ErrnoError(32);
                },
                getPath(r) {
                    for (var e; ; ) {
                        if (rw.isRoot(r)) {
                            var t = r.mount.mountpoint;
                            if (!e) return t;
                            return "/" !== t[t.length - 1] ? "".concat(t, "/").concat(e) : t + e;
                        }
                        (e = e ? "".concat(r.name, "/").concat(e) : r.name), (r = r.parent);
                    }
                },
                hashName(r, e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
                    return ((r + t) >>> 0) % rw.nameTable.length;
                },
                hashAddNode(r) {
                    var e = rw.hashName(r.parent.id, r.name);
                    (r.name_next = rw.nameTable[e]), (rw.nameTable[e] = r);
                },
                hashRemoveNode(r) {
                    var e = rw.hashName(r.parent.id, r.name);
                    if (rw.nameTable[e] === r) rw.nameTable[e] = r.name_next;
                    else
                        for (var t = rw.nameTable[e]; t; ) {
                            if (t.name_next === r) {
                                t.name_next = r.name_next;
                                break;
                            }
                            t = t.name_next;
                        }
                },
                lookupNode(r, e) {
                    var t = rw.mayLookup(r);
                    if (t) throw new rw.ErrnoError(t);
                    for (var n = rw.hashName(r.id, e), o = rw.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === r.id && a === e) return o;
                    }
                    return rw.lookup(r, e);
                },
                createNode(r, e, t, n) {
                    var o = new rw.FSNode(r, e, t, n);
                    return rw.hashAddNode(o), o;
                },
                destroyNode(r) {
                    rw.hashRemoveNode(r);
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
                    rw.ignorePermissions
                        ? 0
                        : (e.includes("r") && !(292 & r.mode)) ||
                            (e.includes("w") && !(146 & r.mode)) ||
                            (e.includes("x") && !(73 & r.mode))
                          ? 2
                          : 0,
                mayLookup(r) {
                    if (!rw.isDir(r.mode)) return 54;
                    var e = rw.nodePermissions(r, "x");
                    return e || 2 * !r.node_ops.lookup;
                },
                mayCreate(r, e) {
                    if (!rw.isDir(r.mode)) return 54;
                    try {
                        return rw.lookupNode(r, e), 20;
                    } catch (r) {}
                    return rw.nodePermissions(r, "wx");
                },
                mayDelete(r, e, t) {
                    try {
                        n = rw.lookupNode(r, e);
                    } catch (r) {
                        return r.errno;
                    }
                    var n,
                        o = rw.nodePermissions(r, "wx");
                    if (o) return o;
                    if (t) {
                        if (!rw.isDir(n.mode)) return 54;
                        if (rw.isRoot(n) || rw.getPath(n) === rw.cwd()) return 10;
                    } else if (rw.isDir(n.mode)) return 31;
                    return 0;
                },
                mayOpen: (r, e) =>
                    r
                        ? rw.isLink(r.mode)
                            ? 32
                            : rw.isDir(r.mode) && ("r" !== rw.flagsToPermissionString(e) || 512 & e)
                              ? 31
                              : rw.nodePermissions(r, rw.flagsToPermissionString(e))
                        : 44,
                MAX_OPEN_FDS: 4096,
                nextfd() {
                    for (var r = 0; r <= rw.MAX_OPEN_FDS; r++) if (!rw.streams[r]) return r;
                    throw new rw.ErrnoError(33);
                },
                getStreamChecked(r) {
                    var e = rw.getStream(r);
                    if (!e) throw new rw.ErrnoError(8);
                    return e;
                },
                getStream: (r) => rw.streams[r],
                createStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return (
                        (r = Object.assign(new rw.FSStream(), r)),
                        -1 == e && (e = rw.nextfd()),
                        (r.fd = e),
                        (rw.streams[e] = r),
                        r
                    );
                },
                closeStream(r) {
                    rw.streams[r] = null;
                },
                dupStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    var t,
                        n,
                        o = rw.createStream(r, e);
                    return null == (n = o.stream_ops) || null == (t = n.dup) || t.call(n, o), o;
                },
                chrdev_stream_ops: {
                    open(r) {
                        var e,
                            t,
                            n = rw.getDevice(r.node.rdev);
                        (r.stream_ops = n.stream_ops), null == (e = (t = r.stream_ops).open) || e.call(t, r);
                    },
                    llseek() {
                        throw new rw.ErrnoError(70);
                    },
                },
                major: (r) => r >> 8,
                minor: (r) => 255 & r,
                makedev: (r, e) => (r << 8) | e,
                registerDevice(r, e) {
                    rw.devices[r] = { stream_ops: e };
                },
                getDevice: (r) => rw.devices[r],
                getMounts(r) {
                    for (var e = [], t = [r]; t.length; ) {
                        var n = t.pop();
                        e.push(n), t.push(...n.mounts);
                    }
                    return e;
                },
                syncfs(r, e) {
                    "function" == typeof r && ((e = r), (r = !1)),
                        rw.syncFSRequests++,
                        rw.syncFSRequests > 1 &&
                            M(
                                "warning: ".concat(
                                    rw.syncFSRequests,
                                    " FS.syncfs operations in flight at once, probably just doing extra work",
                                ),
                            );
                    var t = rw.getMounts(rw.root.mount),
                        n = 0;
                    function o(r) {
                        return rw.syncFSRequests--, e(r);
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
                    if (o && rw.root) throw new rw.ErrnoError(10);
                    if (!o && !a) {
                        var i = rw.lookupPath(t, { follow_mount: !1 });
                        if (((t = i.path), (n = i.node), rw.isMountpoint(n))) throw new rw.ErrnoError(10);
                        if (!rw.isDir(n.mode)) throw new rw.ErrnoError(54);
                    }
                    var s = {
                            type: r,
                            opts: e,
                            mountpoint: t,
                            mounts: [],
                        },
                        l = r.mount(s);
                    return (
                        (l.mount = s),
                        (s.root = l),
                        o ? (rw.root = l) : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
                        l
                    );
                },
                unmount(r) {
                    var e = rw.lookupPath(r, { follow_mount: !1 });
                    if (!rw.isMountpoint(e.node)) throw new rw.ErrnoError(28);
                    var t = e.node,
                        n = t.mounted,
                        o = rw.getMounts(n);
                    Object.keys(rw.nameTable).forEach((r) => {
                        for (var e = rw.nameTable[r]; e; ) {
                            var t = e.name_next;
                            o.includes(e.mount) && rw.destroyNode(e), (e = t);
                        }
                    }),
                        (t.mounted = null);
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1);
                },
                lookup: (r, e) => r.node_ops.lookup(r, e),
                mknod(r, e, t) {
                    var n = rw.lookupPath(r, { parent: !0 }).node,
                        o = ro.basename(r);
                    if (!o || "." === o || ".." === o) throw new rw.ErrnoError(28);
                    var a = rw.mayCreate(n, o);
                    if (a) throw new rw.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new rw.ErrnoError(63);
                    return n.node_ops.mknod(n, o, e, t);
                },
                statfs(r) {
                    var e = {
                            bsize: 4096,
                            frsize: 4096,
                            blocks: 1000000,
                            bfree: 500000,
                            bavail: 500000,
                            files: rw.nextInode,
                            ffree: rw.nextInode - 1,
                            fsid: 42,
                            flags: 2,
                            namelen: 255,
                        },
                        t = rw.lookupPath(r, { follow: !0 }).node;
                    return (
                        (null == t ? void 0 : t.node_ops.statfs) &&
                            Object.assign(e, t.node_ops.statfs(t.mount.opts.root)),
                        e
                    );
                },
                create(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                    return (e &= 4095), (e |= 32768), rw.mknod(r, e, 0);
                },
                mkdir(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                    return (e &= 1023), (e |= 16384), rw.mknod(r, e, 0);
                },
                mkdirTree(r, e) {
                    for (var t = r.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                rw.mkdir(n, e);
                            } catch (r) {
                                if (20 != r.errno) throw r;
                            }
                        }
                },
                mkdev: (r, e, t) => (void 0 === t && ((t = e), (e = 438)), (e |= 8192), rw.mknod(r, e, t)),
                symlink(r, e) {
                    if (!ri.resolve(r)) throw new rw.ErrnoError(44);
                    var t = rw.lookupPath(e, { parent: !0 }).node;
                    if (!t) throw new rw.ErrnoError(44);
                    var n = ro.basename(e),
                        o = rw.mayCreate(t, n);
                    if (o) throw new rw.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new rw.ErrnoError(63);
                    return t.node_ops.symlink(t, n, r);
                },
                rename(r, e) {
                    var t,
                        n,
                        o,
                        a = ro.dirname(r),
                        i = ro.dirname(e),
                        s = ro.basename(r),
                        l = ro.basename(e);
                    if (
                        ((t = rw.lookupPath(r, { parent: !0 }).node),
                        (n = rw.lookupPath(e, { parent: !0 }).node),
                        !t || !n)
                    )
                        throw new rw.ErrnoError(44);
                    if (t.mount !== n.mount) throw new rw.ErrnoError(75);
                    var c = rw.lookupNode(t, s),
                        u = ri.relative(r, i);
                    if ("." !== u.charAt(0)) throw new rw.ErrnoError(28);
                    if ("." !== (u = ri.relative(e, a)).charAt(0)) throw new rw.ErrnoError(55);
                    try {
                        o = rw.lookupNode(n, l);
                    } catch (r) {}
                    if (c !== o) {
                        var d = rw.isDir(c.mode),
                            f = rw.mayDelete(t, s, d);
                        if (f || (f = o ? rw.mayDelete(n, l, d) : rw.mayCreate(n, l))) throw new rw.ErrnoError(f);
                        if (!t.node_ops.rename) throw new rw.ErrnoError(63);
                        if (rw.isMountpoint(c) || (o && rw.isMountpoint(o))) throw new rw.ErrnoError(10);
                        if (n !== t && (f = rw.nodePermissions(t, "w"))) throw new rw.ErrnoError(f);
                        rw.hashRemoveNode(c);
                        try {
                            t.node_ops.rename(c, n, l), (c.parent = n);
                        } catch (r) {
                            throw r;
                        } finally {
                            rw.hashAddNode(c);
                        }
                    }
                },
                rmdir(r) {
                    var e = rw.lookupPath(r, { parent: !0 }).node,
                        t = ro.basename(r),
                        n = rw.lookupNode(e, t),
                        o = rw.mayDelete(e, t, !0);
                    if (o) throw new rw.ErrnoError(o);
                    if (!e.node_ops.rmdir) throw new rw.ErrnoError(63);
                    if (rw.isMountpoint(n)) throw new rw.ErrnoError(10);
                    e.node_ops.rmdir(e, t), rw.destroyNode(n);
                },
                readdir(r) {
                    var e = rw.lookupPath(r, { follow: !0 }).node;
                    if (!e.node_ops.readdir) throw new rw.ErrnoError(54);
                    return e.node_ops.readdir(e);
                },
                unlink(r) {
                    var e = rw.lookupPath(r, { parent: !0 }).node;
                    if (!e) throw new rw.ErrnoError(44);
                    var t = ro.basename(r),
                        n = rw.lookupNode(e, t),
                        o = rw.mayDelete(e, t, !1);
                    if (o) throw new rw.ErrnoError(o);
                    if (!e.node_ops.unlink) throw new rw.ErrnoError(63);
                    if (rw.isMountpoint(n)) throw new rw.ErrnoError(10);
                    e.node_ops.unlink(e, t), rw.destroyNode(n);
                },
                readlink(r) {
                    var e = rw.lookupPath(r).node;
                    if (!e) throw new rw.ErrnoError(44);
                    if (!e.node_ops.readlink) throw new rw.ErrnoError(28);
                    return e.node_ops.readlink(e);
                },
                stat(r, e) {
                    var t = rw.lookupPath(r, { follow: !e }).node;
                    if (!t) throw new rw.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new rw.ErrnoError(63);
                    return t.node_ops.getattr(t);
                },
                lstat: (r) => rw.stat(r, !0),
                chmod(r, e, t) {
                    var n;
                    if (!(n = "string" == typeof r ? rw.lookupPath(r, { follow: !t }).node : r).node_ops.setattr)
                        throw new rw.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: (4095 & e) | (-4096 & n.mode),
                        ctime: Date.now(),
                    });
                },
                lchmod(r, e) {
                    rw.chmod(r, e, !0);
                },
                fchmod(r, e) {
                    var t = rw.getStreamChecked(r);
                    rw.chmod(t.node, e);
                },
                chown(r, e, t, n) {
                    var o;
                    if (!(o = "string" == typeof r ? rw.lookupPath(r, { follow: !n }).node : r).node_ops.setattr)
                        throw new rw.ErrnoError(63);
                    o.node_ops.setattr(o, { timestamp: Date.now() });
                },
                lchown(r, e, t) {
                    rw.chown(r, e, t, !0);
                },
                fchown(r, e, t) {
                    var n = rw.getStreamChecked(r);
                    rw.chown(n.node, e, t);
                },
                truncate(r, e) {
                    if (e < 0) throw new rw.ErrnoError(28);
                    if ("string" == typeof r) {
                        var t;
                        t = rw.lookupPath(r, { follow: !0 }).node;
                    } else t = r;
                    if (!t.node_ops.setattr) throw new rw.ErrnoError(63);
                    if (rw.isDir(t.mode)) throw new rw.ErrnoError(31);
                    if (!rw.isFile(t.mode)) throw new rw.ErrnoError(28);
                    var n = rw.nodePermissions(t, "w");
                    if (n) throw new rw.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: e,
                        timestamp: Date.now(),
                    });
                },
                ftruncate(r, e) {
                    var t = rw.getStreamChecked(r);
                    if ((2097155 & t.flags) == 0) throw new rw.ErrnoError(28);
                    rw.truncate(t.node, e);
                },
                utime(r, e, t) {
                    var n = rw.lookupPath(r, { follow: !0 }).node;
                    n.node_ops.setattr(n, {
                        atime: e,
                        mtime: t,
                    });
                },
                open(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                    if ("" === e) throw new rw.ErrnoError(44);
                    if (
                        ((n =
                            64 &
                            (t =
                                "string" == typeof t
                                    ? ((r) => {
                                          var e = {
                                              r: 0,
                                              "r+": 2,
                                              w: 577,
                                              "w+": 578,
                                              a: 1089,
                                              "a+": 1090,
                                          }[r];
                                          if (void 0 === e) throw Error("Unknown file open mode: ".concat(r));
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
                            a = rw.lookupPath(e, {
                                follow: !(131072 & t),
                                noent_okay: !0,
                            });
                        (o = a.node), (e = a.path);
                    }
                    var i = !1;
                    if (64 & t)
                        if (o) {
                            if (128 & t) throw new rw.ErrnoError(20);
                        } else (o = rw.mknod(e, n, 0)), (i = !0);
                    if (!o) throw new rw.ErrnoError(44);
                    if ((rw.isChrdev(o.mode) && (t &= -513), 65536 & t && !rw.isDir(o.mode)))
                        throw new rw.ErrnoError(54);
                    if (!i) {
                        var s = rw.mayOpen(o, t);
                        if (s) throw new rw.ErrnoError(s);
                    }
                    512 & t && !i && rw.truncate(o, 0), (t &= -131713);
                    var l = rw.createStream({
                        node: o,
                        path: rw.getPath(o),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: o.stream_ops,
                        ungotten: [],
                        error: !1,
                    });
                    return (
                        l.stream_ops.open && l.stream_ops.open(l),
                        !r.logReadFiles || 1 & t || e in rw.readFiles || (rw.readFiles[e] = 1),
                        l
                    );
                },
                close(r) {
                    if (rw.isClosed(r)) throw new rw.ErrnoError(8);
                    r.getdents && (r.getdents = null);
                    try {
                        r.stream_ops.close && r.stream_ops.close(r);
                    } catch (r) {
                        throw r;
                    } finally {
                        rw.closeStream(r.fd);
                    }
                    r.fd = null;
                },
                isClosed: (r) => null === r.fd,
                llseek(r, e, t) {
                    if (rw.isClosed(r)) throw new rw.ErrnoError(8);
                    if (!r.seekable || !r.stream_ops.llseek) throw new rw.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new rw.ErrnoError(28);
                    return (r.position = r.stream_ops.llseek(r, e, t)), (r.ungotten = []), r.position;
                },
                read(r, e, t, n, o) {
                    if (n < 0 || o < 0) throw new rw.ErrnoError(28);
                    if (rw.isClosed(r) || (2097155 & r.flags) == 1) throw new rw.ErrnoError(8);
                    if (rw.isDir(r.node.mode)) throw new rw.ErrnoError(31);
                    if (!r.stream_ops.read) throw new rw.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!r.seekable) throw new rw.ErrnoError(70);
                    } else o = r.position;
                    var i = r.stream_ops.read(r, e, t, n, o);
                    return a || (r.position += i), i;
                },
                write(r, e, t, n, o, a) {
                    if (n < 0 || o < 0) throw new rw.ErrnoError(28);
                    if (rw.isClosed(r) || (2097155 & r.flags) == 0) throw new rw.ErrnoError(8);
                    if (rw.isDir(r.node.mode)) throw new rw.ErrnoError(31);
                    if (!r.stream_ops.write) throw new rw.ErrnoError(28);
                    r.seekable && 1024 & r.flags && rw.llseek(r, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!r.seekable) throw new rw.ErrnoError(70);
                    } else o = r.position;
                    var s = r.stream_ops.write(r, e, t, n, o, a);
                    return i || (r.position += s), s;
                },
                allocate(r, e, t) {
                    if (rw.isClosed(r)) throw new rw.ErrnoError(8);
                    if (e < 0 || t <= 0) throw new rw.ErrnoError(28);
                    if ((2097155 & r.flags) == 0) throw new rw.ErrnoError(8);
                    if (!rw.isFile(r.node.mode) && !rw.isDir(r.node.mode)) throw new rw.ErrnoError(43);
                    if (!r.stream_ops.allocate) throw new rw.ErrnoError(138);
                    r.stream_ops.allocate(r, e, t);
                },
                mmap(r, e, t, n, o) {
                    if (((2 & n) != 0 && (2 & o) == 0 && (2097155 & r.flags) != 2) || (2097155 & r.flags) == 1)
                        throw new rw.ErrnoError(2);
                    if (!r.stream_ops.mmap) throw new rw.ErrnoError(43);
                    if (!e) throw new rw.ErrnoError(28);
                    return r.stream_ops.mmap(r, e, t, n, o);
                },
                msync: (r, e, t, n, o) => (r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, o) : 0),
                ioctl(r, e, t) {
                    if (!r.stream_ops.ioctl) throw new rw.ErrnoError(59);
                    return r.stream_ops.ioctl(r, e, t);
                },
                readFile(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (
                        ((e.flags = e.flags || 0),
                        (e.encoding = e.encoding || "binary"),
                        "utf8" !== e.encoding && "binary" !== e.encoding)
                    )
                        throw Error('Invalid encoding type "'.concat(e.encoding, '"'));
                    var t,
                        n = rw.open(r, e.flags),
                        o = rw.stat(r).size,
                        a = new Uint8Array(o);
                    return (
                        rw.read(n, a, 0, o, 0),
                        "utf8" === e.encoding ? (t = rl(a)) : "binary" === e.encoding && (t = a),
                        rw.close(n),
                        t
                    );
                },
                writeFile(r, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t.flags = t.flags || 577;
                    var n = rw.open(r, t.flags, t.mode);
                    if ("string" == typeof e) {
                        var o = new Uint8Array(ru(e) + 1),
                            a = rd(e, o, 0, o.length);
                        rw.write(n, o, 0, a, void 0, t.canOwn);
                    } else if (ArrayBuffer.isView(e)) rw.write(n, e, 0, e.byteLength, void 0, t.canOwn);
                    else throw Error("Unsupported data type");
                    rw.close(n);
                },
                cwd: () => rw.currentPath,
                chdir(r) {
                    var e = rw.lookupPath(r, { follow: !0 });
                    if (null === e.node) throw new rw.ErrnoError(44);
                    if (!rw.isDir(e.node.mode)) throw new rw.ErrnoError(54);
                    var t = rw.nodePermissions(e.node, "x");
                    if (t) throw new rw.ErrnoError(t);
                    rw.currentPath = e.path;
                },
                createDefaultDirectories() {
                    rw.mkdir("/tmp"), rw.mkdir("/home"), rw.mkdir("/home/web_user");
                },
                createDefaultDevices() {
                    rw.mkdir("/dev"),
                        rw.registerDevice(rw.makedev(1, 3), {
                            read: () => 0,
                            write: (r, e, t, n, o) => n,
                            llseek: () => 0,
                        }),
                        rw.mkdev("/dev/null", rw.makedev(1, 3)),
                        rf.register(rw.makedev(5, 0), rf.default_tty_ops),
                        rf.register(rw.makedev(6, 0), rf.default_tty1_ops),
                        rw.mkdev("/dev/tty", rw.makedev(5, 0)),
                        rw.mkdev("/dev/tty1", rw.makedev(6, 0));
                    var r = new Uint8Array(1024),
                        e = 0,
                        t = () => (0 === e && (e = ra(r).byteLength), r[--e]);
                    rw.createDevice("/dev", "random", t),
                        rw.createDevice("/dev", "urandom", t),
                        rw.mkdir("/dev/shm"),
                        rw.mkdir("/dev/shm/tmp");
                },
                createSpecialDirectories() {
                    rw.mkdir("/proc");
                    var r = rw.mkdir("/proc/self");
                    rw.mkdir("/proc/self/fd"),
                        rw.mount(
                            {
                                mount() {
                                    var e = rw.createNode(r, "fd", 16895, 73);
                                    return (
                                        (e.stream_ops = { llseek: rm.stream_ops.llseek }),
                                        (e.node_ops = {
                                            lookup(r, e) {
                                                var t = +e,
                                                    n = rw.getStreamChecked(t),
                                                    o = {
                                                        parent: null,
                                                        mount: { mountpoint: "fake" },
                                                        node_ops: { readlink: () => n.path },
                                                        id: t + 1,
                                                    };
                                                return (o.parent = o), o;
                                            },
                                            readdir: () =>
                                                Array.from(rw.streams.entries())
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
                    r ? rw.createDevice("/dev", "stdin", r) : rw.symlink("/dev/tty", "/dev/stdin"),
                        e ? rw.createDevice("/dev", "stdout", null, e) : rw.symlink("/dev/tty", "/dev/stdout"),
                        t ? rw.createDevice("/dev", "stderr", null, t) : rw.symlink("/dev/tty1", "/dev/stderr"),
                        rw.open("/dev/stdin", 0),
                        rw.open("/dev/stdout", 1),
                        rw.open("/dev/stderr", 1);
                },
                staticInit() {
                    (rw.nameTable = Array(4096)),
                        rw.mount(rm, {}, "/"),
                        rw.createDefaultDirectories(),
                        rw.createDefaultDevices(),
                        rw.createSpecialDirectories(),
                        (rw.filesystems = { MEMFS: rm });
                },
                init(e, t, n) {
                    (rw.initialized = !0),
                        null != e || (e = r.stdin),
                        null != t || (t = r.stdout),
                        null != n || (n = r.stderr),
                        rw.createStandardStreams(e, t, n);
                },
                quit() {
                    rw.initialized = !1;
                    for (var r = 0; r < rw.streams.length; r++) {
                        var e = rw.streams[r];
                        e && rw.close(e);
                    }
                },
                findObject(r, e) {
                    var t = rw.analyzePath(r, e);
                    return t.exists ? t.object : null;
                },
                analyzePath(r, e) {
                    try {
                        var t = rw.lookupPath(r, { follow: !e });
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
                        var t = rw.lookupPath(r, { parent: !0 });
                        (n.parentExists = !0),
                            (n.parentPath = t.path),
                            (n.parentObject = t.node),
                            (n.name = ro.basename(r)),
                            (t = rw.lookupPath(r, { follow: !e })),
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
                    r = "string" == typeof r ? r : rw.getPath(r);
                    for (var o = e.split("/").reverse(); o.length; ) {
                        var a = o.pop();
                        if (a) {
                            var i = ro.join2(r, a);
                            try {
                                rw.mkdir(i);
                            } catch (r) {}
                            r = i;
                        }
                    }
                    return i;
                },
                createFile(r, e, t, n, o) {
                    var a = ro.join2("string" == typeof r ? r : rw.getPath(r), e),
                        i = rg(n, o);
                    return rw.create(a, i);
                },
                createDataFile(r, e, t, n, o, a) {
                    var i = e;
                    r && ((r = "string" == typeof r ? r : rw.getPath(r)), (i = e ? ro.join2(r, e) : r));
                    var s = rg(n, o),
                        l = rw.create(i, s);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var c = Array(t.length), u = 0, d = t.length; u < d; ++u) c[u] = t.charCodeAt(u);
                            t = c;
                        }
                        rw.chmod(l, 146 | s);
                        var f = rw.open(l, 577);
                        rw.write(f, t, 0, t.length, 0, a), rw.close(f), rw.chmod(l, s);
                    }
                },
                createDevice(r, e, t, n) {
                    var o,
                        a = ro.join2("string" == typeof r ? r : rw.getPath(r), e),
                        i = rg(!!t, !!n);
                    null != (o = rw.createDevice).major || (o.major = 64);
                    var s = rw.makedev(rw.createDevice.major++, 0);
                    return (
                        rw.registerDevice(s, {
                            open(r) {
                                r.seekable = !1;
                            },
                            close(r) {
                                var e;
                                (null == n || null == (e = n.buffer) ? void 0 : e.length) && n(10);
                            },
                            read(r, e, n, o, a) {
                                for (var i, s = 0, l = 0; l < o; l++) {
                                    try {
                                        i = t();
                                    } catch (r) {
                                        throw new rw.ErrnoError(29);
                                    }
                                    if (void 0 === i && 0 === s) throw new rw.ErrnoError(6);
                                    if (null == i) break;
                                    s++, (e[n + l] = i);
                                }
                                return s && (r.node.atime = Date.now()), s;
                            },
                            write(r, e, t, o, a) {
                                for (var i = 0; i < o; i++)
                                    try {
                                        n(e[t + i]);
                                    } catch (r) {
                                        throw new rw.ErrnoError(29);
                                    }
                                return o && (r.node.mtime = r.node.ctime = Date.now()), i;
                            },
                        }),
                        rw.mkdev(a, i, s)
                    );
                },
                forceLoadFile(r) {
                    if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
                    if ("undefined" != typeof XMLHttpRequest)
                        throw Error(
                            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
                        );
                    try {
                        (r.contents = s(r.url)), (r.usedBytes = r.contents.length);
                    } catch (r) {
                        throw new rw.ErrnoError(29);
                    }
                },
                createLazyFile(r, e, t, n, o) {
                    if ("undefined" != typeof XMLHttpRequest) {
                        var a;
                        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    }
                    var a = {
                            isDevice: !1,
                            url: t,
                        },
                        i = rw.createFile(r, e, a, n, o);
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
                                return rw.forceLoadFile(i), e(...t);
                            };
                        }),
                        (s.read = (r, e, t, n, o) => (rw.forceLoadFile(i), l(r, e, t, n, o))),
                        (s.mmap = (r, e, t, n, o) => {
                            rw.forceLoadFile(i);
                            var a = rp(e);
                            if (!a) throw new rw.ErrnoError(48);
                            return (
                                l(r, c, a, e, t),
                                {
                                    ptr: a,
                                    allocated: !0,
                                }
                            );
                        }),
                        (i.stream_ops = s),
                        i
                    );
                },
            },
            rE = (r, e) => (r ? rl(u, r, e) : ""),
            rb = {
                DEFAULT_POLLMASK: 5,
                calculateAt(r, e, t) {
                    if (ro.isAbs(e)) return e;
                    if (-100 === r) n = rw.cwd();
                    else {
                        var n;
                        n = rb.getStreamFromFD(r).path;
                    }
                    if (0 == e.length) {
                        if (!t) throw new rw.ErrnoError(44);
                        return n;
                    }
                    return n + "/" + e;
                },
                doStat(r, e, t) {
                    var n = r(e);
                    (h[t >> 2] = n.dev),
                        (h[(t + 4) >> 2] = n.mode),
                        (p[(t + 8) >> 2] = n.nlink),
                        (h[(t + 12) >> 2] = n.uid),
                        (h[(t + 16) >> 2] = n.gid),
                        (h[(t + 20) >> 2] = n.rdev),
                        (v[(t + 24) >> 3] = BigInt(n.size)),
                        (h[(t + 32) >> 2] = 4096),
                        (h[(t + 36) >> 2] = n.blocks);
                    var o = n.atime.getTime(),
                        a = n.mtime.getTime(),
                        i = n.ctime.getTime();
                    return (
                        (v[(t + 40) >> 3] = BigInt(Math.floor(o / 1000))),
                        (p[(t + 48) >> 2] = (o % 1000) * 1000000),
                        (v[(t + 56) >> 3] = BigInt(Math.floor(a / 1000))),
                        (p[(t + 64) >> 2] = (a % 1000) * 1000000),
                        (v[(t + 72) >> 3] = BigInt(Math.floor(i / 1000))),
                        (p[(t + 80) >> 2] = (i % 1000) * 1000000),
                        (v[(t + 88) >> 3] = BigInt(n.ino)),
                        0
                    );
                },
                doMsync(r, e, t, n, o) {
                    if (!rw.isFile(e.node.mode)) throw new rw.ErrnoError(43);
                    if (2 & n) return 0;
                    var a = u.slice(r, r + t);
                    rw.msync(e, a, o, t, n);
                },
                getStreamFromFD: (r) => rw.getStreamChecked(r),
                varargs: void 0,
                getStr: (r) => rE(r),
            },
            r_ = (r, e, t) => rd(r, u, e, t),
            rk = (r) => {
                if (null === r) return "null";
                var e = typeof r;
                return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r;
            },
            rP = (r) => {
                for (var e = "", t = r; u[t]; ) e += E[u[t++]];
                return e;
            },
            rT = {},
            rC = {},
            rA = {},
            r$ = (r) => {
                throw new b(r);
            },
            rF = (r) => {
                throw new _(r);
            },
            rD = (r, e, t) => {
                function n(e) {
                    var n = t(e);
                    n.length !== r.length && rF("Mismatched type converter count");
                    for (var o = 0; o < r.length; ++o) rS(r[o], n[o]);
                }
                r.forEach((r) => (rA[r] = e));
                var o = Array(e.length),
                    a = [],
                    i = 0;
                e.forEach((r, e) => {
                    rC.hasOwnProperty(r)
                        ? (o[e] = rC[r])
                        : (a.push(r),
                          rT.hasOwnProperty(r) || (rT[r] = []),
                          rT[r].push(() => {
                              (o[e] = rC[r]), ++i === a.length && n(o);
                          }));
                }),
                    0 === a.length && n(o);
            };
        function rS(r, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (function (r, e) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var n = e.name;
                if (
                    (r || r$('type "'.concat(n, '" must have a positive integer typeid pointer')), rC.hasOwnProperty(r))
                )
                    if (t.ignoreDuplicateRegistrations) return;
                    else r$("Cannot register type '".concat(n, "' twice"));
                if (((rC[r] = e), delete rA[r], rT.hasOwnProperty(r))) {
                    var o = rT[r];
                    delete rT[r], o.forEach((r) => r());
                }
            })(r, e, t);
        }
        var rj = (r, e, t) => {
                switch (e) {
                    case 1:
                        return t ? (r) => c[r] : (r) => u[r];
                    case 2:
                        return t ? (r) => d[r >> 1] : (r) => f[r >> 1];
                    case 4:
                        return t ? (r) => h[r >> 2] : (r) => p[r >> 2];
                    case 8:
                        return t ? (r) => v[r >> 3] : (r) => y[r >> 3];
                    default:
                        throw TypeError("invalid integer width (".concat(e, "): ").concat(r));
                }
            },
            rx = (r) => {
                r$(r.$$.ptrType.registeredClass.name + " instance already deleted");
            },
            rO = !1,
            rM = (r) => {},
            rR = (r) => {
                (r.count.value -= 1),
                    0 === r.count.value &&
                        (r.smartPtr
                            ? r.smartPtrType.rawDestructor(r.smartPtr)
                            : r.ptrType.registeredClass.rawDestructor(r.ptr));
            },
            rN = (r, e, t) => {
                if (e === t) return r;
                if (void 0 === t.baseClass) return null;
                var n = rN(r, e, t.baseClass);
                return null === n ? null : t.downcast(n);
            },
            rW = {},
            rB = {},
            rU = (r, e) => (
                (e.ptrType && e.ptr) || rF("makeClassHandle requires ptr and ptrType"),
                !!e.smartPtrType != !!e.smartPtr && rF("Both smartPtrType and smartPtr must be specified"),
                (e.count = { value: 1 }),
                rz(
                    Object.create(r, {
                        $$: {
                            value: e,
                            writable: !0,
                        },
                    }),
                )
            ),
            rz = (r) =>
                "undefined" == typeof FinalizationRegistry
                    ? ((rz = (r) => r), r)
                    : ((rO = new FinalizationRegistry((r) => {
                          rR(r.$$);
                      })),
                      (rz = (r) => {
                          var e = r.$$;
                          return e.smartPtr && rO.register(r, { $$: e }, r), r;
                      }),
                      (rM = (r) => rO.unregister(r)),
                      rz(r)),
            rI = [],
            rV = () => {
                for (; rI.length; ) {
                    var r = rI.pop();
                    (r.$$.deleteScheduled = !1), r.delete();
                }
            };
        function rL() {}
        var rH = (r, e) => Object.defineProperty(e, "name", { value: r }),
            rq = (r, e, t) => {
                if (void 0 === r[e].overloadTable) {
                    var n = r[e];
                    (r[e] = function () {
                        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        return (
                            r[e].overloadTable.hasOwnProperty(o.length) ||
                                r$(
                                    "Function '"
                                        .concat(t, "' called with an invalid number of arguments (")
                                        .concat(o.length, ") - expects one of (")
                                        .concat(r[e].overloadTable, ")!"),
                                ),
                            r[e].overloadTable[o.length].apply(this, o)
                        );
                    }),
                        (r[e].overloadTable = []),
                        (r[e].overloadTable[n.argCount] = n);
                }
            },
            rG = (e, t, n) => {
                r.hasOwnProperty(e)
                    ? ((void 0 === n || (void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[n])) &&
                          r$("Cannot register public name '".concat(e, "' twice")),
                      rq(r, e, e),
                      r[e].overloadTable.hasOwnProperty(n) &&
                          r$(
                              "Cannot register multiple overloads of a function with the same number of arguments (".concat(
                                  n,
                                  ")!",
                              ),
                          ),
                      (r[e].overloadTable[n] = t))
                    : ((r[e] = t), (r[e].argCount = n));
            };
        function rX(r, e, t, n, o, a, i, s) {
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
        var rY = (r, e, t) => {
            for (; e !== t; )
                e.upcast || r$("Expected null or instance of ".concat(t.name, ", got an instance of ").concat(e.name)),
                    (r = e.upcast(r)),
                    (e = e.baseClass);
            return r;
        };
        function rZ(r, e) {
            if (null === e) return this.isReference && r$("null is not a valid ".concat(this.name)), 0;
            e.$$ || r$('Cannot pass "'.concat(rk(e), '" as a ').concat(this.name)),
                e.$$.ptr || r$("Cannot pass deleted object as a pointer of type ".concat(this.name));
            var t = e.$$.ptrType.registeredClass;
            return rY(e.$$.ptr, t, this.registeredClass);
        }
        function rK(r, e) {
            if (null === e)
                return (this.isReference && r$("null is not a valid ".concat(this.name)), this.isSmartPointer)
                    ? ((t = this.rawConstructor()), null !== r && r.push(this.rawDestructor, t), t)
                    : 0;
            (e && e.$$) || r$('Cannot pass "'.concat(rk(e), '" as a ').concat(this.name)),
                e.$$.ptr || r$("Cannot pass deleted object as a pointer of type ".concat(this.name)),
                !this.isConst &&
                    e.$$.ptrType.isConst &&
                    r$(
                        "Cannot convert argument of type "
                            .concat(
                                e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name,
                                " to parameter type ",
                            )
                            .concat(this.name),
                    );
            var t,
                n = e.$$.ptrType.registeredClass;
            if (((t = rY(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
                switch (
                    (void 0 === e.$$.smartPtr && r$("Passing raw pointer to smart pointer is illegal"),
                    this.sharingPolicy)
                ) {
                    case 0:
                        e.$$.smartPtrType === this
                            ? (t = e.$$.smartPtr)
                            : r$(
                                  "Cannot convert argument of type "
                                      .concat(
                                          e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name,
                                          " to parameter type ",
                                      )
                                      .concat(this.name),
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
                                ea.toHandle(() => o.delete()),
                            )),
                                null !== r && r.push(this.rawDestructor, t);
                        }
                        break;
                    default:
                        r$("Unsupporting sharing policy");
                }
            return t;
        }
        function rJ(r, e) {
            if (null === e) return this.isReference && r$("null is not a valid ".concat(this.name)), 0;
            e.$$ || r$('Cannot pass "'.concat(rk(e), '" as a ').concat(this.name)),
                e.$$.ptr || r$("Cannot pass deleted object as a pointer of type ".concat(this.name)),
                e.$$.ptrType.isConst &&
                    r$(
                        "Cannot convert argument of type "
                            .concat(e.$$.ptrType.name, " to parameter type ")
                            .concat(this.name),
                    );
            var t = e.$$.ptrType.registeredClass;
            return rY(e.$$.ptr, t, this.registeredClass);
        }
        function rQ(r) {
            return this.fromWireType(p[r >> 2]);
        }
        function r0(r, e, t, n, o, a, i, s, l, c, u) {
            (this.name = r),
                (this.registeredClass = e),
                (this.isReference = t),
                (this.isConst = n),
                (this.isSmartPointer = o),
                (this.pointeeType = a),
                (this.sharingPolicy = i),
                (this.rawGetPointee = s),
                (this.rawConstructor = l),
                (this.rawShare = c),
                (this.rawDestructor = u),
                o || void 0 !== e.baseClass
                    ? (this.toWireType = rK)
                    : (n ? (this.toWireType = rZ) : (this.toWireType = rJ), (this.destructorFunction = null));
        }
        var r1 = (e, t, n) => {
                r.hasOwnProperty(e) || rF("Replacing nonexistent public symbol"),
                    void 0 !== r[e].overloadTable && void 0 !== n
                        ? (r[e].overloadTable[n] = t)
                        : ((r[e] = t), (r[e].argCount = n));
            },
            r2 = [],
            r4 = (r, e) => {
                r = rP(r);
                var t,
                    n = ((t = r2[e]) || (e >= r2.length && (r2.length = e + 1), (r2[e] = t = P.get(e))), t);
                return (
                    "function" != typeof n && r$("unknown function pointer with signature ".concat(r, ": ").concat(e)),
                    n
                );
            },
            r5 = (r) => {
                var e = e$(r),
                    t = rP(e);
                return eD(e), t;
            },
            r6 = (r, e) => {
                var t = [],
                    n = {};
                throw (
                    (e.forEach(function r(e) {
                        if (!n[e] && !rC[e]) {
                            if (rA[e]) return void rA[e].forEach(r);
                            t.push(e), (n[e] = !0);
                        }
                    }),
                    new T("".concat(r, ": ") + t.map(r5).join([", "])))
                );
            },
            r3 = (r, e) => {
                for (var t = [], n = 0; n < r; n++) t.push(p[(e + 4 * n) >> 2]);
                return t;
            },
            r8 = (r) => {
                for (; r.length; ) {
                    var e = r.pop();
                    r.pop()(e);
                }
            };
        function r9(r) {
            for (var e = 1; e < r.length; ++e) if (null !== r[e] && void 0 === r[e].destructorFunction) return !0;
            return !1;
        }
        function r7(r, e) {
            if (!(r instanceof Function))
                throw TypeError("new_ called with constructor type ".concat(typeof r, " which is not a function"));
            var t = rH(r.name || "unknownFunctionName", function () {});
            t.prototype = r.prototype;
            var n = new t(),
                o = r.apply(n, e);
            return o instanceof Object ? o : n;
        }
        function er(r, e, t, n, o, a) {
            var i = e.length;
            i < 2 && r$("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (
                var s = null !== e[1] && null !== t,
                    l = r9(e),
                    c = "void" !== e[0].name,
                    u = [r, r$, n, o, r8, e[0], e[1]],
                    d = 0;
                d < i - 2;
                ++d
            )
                u.push(e[d + 2]);
            if (!l)
                for (var d = s ? 1 : 2; d < e.length; ++d)
                    null !== e[d].destructorFunction && u.push(e[d].destructorFunction);
            let [f, h] = (function (r, e, t, n) {
                var o = r9(r),
                    a = r.length - 2,
                    i = [],
                    s = ["fn"];
                e && s.push("thisWired");
                for (var l = 0; l < a; ++l) i.push("arg".concat(l)), s.push("arg".concat(l, "Wired"));
                (i = i.join(",")), (s = s.join(","));
                var c = "return function (".concat(i, ") {\n");
                o && (c += "var destructors = [];\n");
                var u = o ? "destructors" : "null",
                    d = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
                e && (c += "var thisWired = classParam['toWireType'](".concat(u, ", this);\n"));
                for (var l = 0; l < a; ++l)
                    (c += "var arg"
                        .concat(l, "Wired = argType")
                        .concat(l, "['toWireType'](")
                        .concat(u, ", arg")
                        .concat(l, ");\n")),
                        d.push("argType".concat(l));
                if (((c += (t || n ? "var rv = " : "") + "invoker(".concat(s, ");\n")), o))
                    c += "runDestructors(destructors);\n";
                else
                    for (var l = e ? 1 : 2; l < r.length; ++l) {
                        var f = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
                        null !== r[l].destructorFunction &&
                            ((c += "".concat(f, "_dtor(").concat(f, ");\n")), d.push("".concat(f, "_dtor")));
                    }
                return t && (c += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [d, (c += "}\n")];
            })(e, s, c, a);
            return f.push(h), rH(r, r7(Function, f)(...u));
        }
        var ee = (r) => {
                let e = (r = r.trim()).indexOf("(");
                return -1 !== e ? r.substr(0, e) : r;
            },
            et = [],
            en = [],
            eo = (r) => {
                r > 9 && 0 == --en[r + 1] && ((en[r] = void 0), et.push(r));
            },
            ea = {
                toValue: (r) => (r || r$("Cannot use deleted val. handle = " + r), en[r]),
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
                            let e = et.pop() || en.length;
                            return (en[e] = r), (en[e + 1] = 1), e;
                        }
                    }
                },
            },
            ei = {
                name: "emscripten::val",
                fromWireType: (r) => {
                    var e = ea.toValue(r);
                    return eo(r), e;
                },
                toWireType: (r, e) => ea.toHandle(e),
                argPackAdvance: 8,
                readValueFromPointer: rQ,
                destructorFunction: null,
            },
            es = (r, e) => {
                var t = rC[r];
                return void 0 === t && r$("".concat(e, " has unknown type ").concat(r5(r))), t;
            },
            el = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
            ec = (r, e) => {
                for (var t = r, n = t >> 1, o = n + e / 2; !(n >= o) && f[n]; ) ++n;
                if ((t = n << 1) - r > 32 && el) return el.decode(u.subarray(r, t));
                for (var a = "", i = 0; !(i >= e / 2); ++i) {
                    var s = d[(r + 2 * i) >> 1];
                    if (0 == s) break;
                    a += String.fromCharCode(s);
                }
                return a;
            },
            eu = (r, e, t) => {
                if ((null != t || (t = 2147483647), t < 2)) return 0;
                for (var n = e, o = (t -= 2) < 2 * r.length ? t / 2 : r.length, a = 0; a < o; ++a) {
                    var i = r.charCodeAt(a);
                    (d[e >> 1] = i), (e += 2);
                }
                return (d[e >> 1] = 0), e - n;
            },
            ed = (r) => 2 * r.length,
            ef = (r, e) => {
                for (var t = 0, n = ""; !(t >= e / 4); ) {
                    var o = h[(r + 4 * t) >> 2];
                    if (0 == o) break;
                    if ((++t, o >= 65536)) {
                        var a = o - 65536;
                        n += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
                    } else n += String.fromCharCode(o);
                }
                return n;
            },
            eh = (r, e, t) => {
                if ((null != t || (t = 2147483647), t < 4)) return 0;
                for (var n = e, o = n + t - 4, a = 0; a < r.length; ++a) {
                    var i = r.charCodeAt(a);
                    if (
                        (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & r.charCodeAt(++a))),
                        (h[e >> 2] = i),
                        (e += 4) + 4 > o)
                    )
                        break;
                }
                return (h[e >> 2] = 0), e - n;
            },
            ep = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n >= 55296 && n <= 57343 && ++t, (e += 4);
                }
                return e;
            },
            em = (r, e, t) => {
                var n = [],
                    o = r.toWireType(n, t);
                return n.length && (p[e >> 2] = ea.toHandle(n)), o;
            },
            ev = [],
            ey = {},
            eg = (r) => {
                var e = ey[r];
                return void 0 === e ? rP(r) : e;
            },
            ew = (r) => (r < -9007199254740992 || r > 9007199254740992 ? NaN : Number(r)),
            eE = () => Date.now(),
            eb = (r) => {
                var e = ((r - l.buffer.byteLength + 65535) / 65536) | 0;
                try {
                    return l.grow(e), W(), 1;
                } catch (r) {}
            },
            e_ = {},
            ek = () => {
                if (!ek.strings) {
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
                        _: j || "./this.program",
                    };
                    for (var e in e_) void 0 === e_[e] ? delete r[e] : (r[e] = e_[e]);
                    var t = [];
                    for (var e in r) t.push("".concat(e, "=").concat(r[e]));
                    ek.strings = t;
                }
                return ek.strings;
            },
            eP = (r) => ex(r);
        (rw.createPreloadedFile = (r, e, t, n, o, a, i, s, l, c) => {
            var u = e ? ri.resolve(ro.join2(r, e)) : r,
                d = "cp ".concat(u);
            function f(t) {
                var f, h;
                function p(t) {
                    null == c || c(), s || rw.createDataFile(r, e, t, n, o, l), null == a || a(), H(d);
                }
                (f = () => {
                    null == i || i(), H(d);
                }),
                    "undefined" != typeof Browser && Browser.init(),
                    (h = !1),
                    ry.forEach((r) => {
                        !h && r.canHandle(u) && (r.handle(t, u, p, f), (h = !0));
                    }),
                    h || p(t);
            }
            L(d), "string" == typeof t ? rv(t).then(f, i) : f(t);
        }),
            rw.staticInit(),
            (rm.doesNotExistError = new rw.ErrnoError(44)),
            (rm.doesNotExistError.stack = "<generic error, no stack>");
        for (var eT = Array(256), eC = 0; eC < 256; ++eC) eT[eC] = String.fromCharCode(eC);
        (E = eT),
            (b = r.BindingError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = "BindingError");
                    }
                }),
            (_ = r.InternalError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = "InternalError");
                    }
                }),
            Object.assign(rL.prototype, {
                isAliasOf(r) {
                    if (!(this instanceof rL) || !(r instanceof rL)) return !1;
                    var e = this.$$.ptrType.registeredClass,
                        t = this.$$.ptr;
                    r.$$ = r.$$;
                    for (var n = r.$$.ptrType.registeredClass, o = r.$$.ptr; e.baseClass; )
                        (t = e.upcast(t)), (e = e.baseClass);
                    for (; n.baseClass; ) (o = n.upcast(o)), (n = n.baseClass);
                    return e === n && t === o;
                },
                clone() {
                    if ((this.$$.ptr || rx(this), this.$$.preservePointerOnDelete))
                        return (this.$$.count.value += 1), this;
                    {
                        let e;
                        var r = rz(
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
                    this.$$.ptr || rx(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            r$("Object already scheduled for deletion"),
                        rM(this),
                        rR(this.$$),
                        this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
                },
                isDeleted() {
                    return !this.$$.ptr;
                },
                deleteLater() {
                    return (
                        this.$$.ptr || rx(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            r$("Object already scheduled for deletion"),
                        rI.push(this),
                        1 === rI.length && k && k(rV),
                        (this.$$.deleteScheduled = !0),
                        this
                    );
                },
            }),
            Object.assign(r0.prototype, {
                getPointee(r) {
                    return this.rawGetPointee && (r = this.rawGetPointee(r)), r;
                },
                destructor(r) {
                    var e;
                    null == (e = this.rawDestructor) || e.call(this, r);
                },
                argPackAdvance: 8,
                readValueFromPointer: rQ,
                fromWireType: function (r) {
                    var e,
                        t = this.getPointee(r);
                    if (!t) return this.destructor(r), null;
                    var n =
                        rB[
                            ((r, e) => {
                                for (void 0 === e && r$("ptr should not be undefined"); r.baseClass; )
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
                            ? rU(this.registeredClass.instancePrototype, {
                                  ptrType: this.pointeeType,
                                  ptr: t,
                                  smartPtrType: this,
                                  smartPtr: r,
                              })
                            : rU(this.registeredClass.instancePrototype, {
                                  ptrType: this,
                                  ptr: r,
                              });
                    }
                    var i = rW[this.registeredClass.getActualType(t)];
                    if (!i) return a.call(this);
                    e = this.isConst ? i.constPointerType : i.pointerType;
                    var s = rN(t, this.registeredClass, e.registeredClass);
                    return null === s
                        ? a.call(this)
                        : this.isSmartPointer
                          ? rU(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: s,
                                smartPtrType: this,
                                smartPtr: r,
                            })
                          : rU(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: s,
                            });
                },
            }),
            ($ = Error),
            ((F = rH("UnboundTypeError", function (r) {
                (this.name = "UnboundTypeError"), (this.message = r);
                var e = Error(r).stack;
                void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
            })).prototype = Object.create($.prototype)),
            (F.prototype.constructor = F),
            (F.prototype.toString = function () {
                return void 0 === this.message ? this.name : "".concat(this.name, ": ").concat(this.message);
            }),
            (T = r.UnboundTypeError = F),
            en.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            (r.count_emval_handles = () => en.length / 2 - 5 - et.length);
        var eA = {
            a: (r, e, t) => {
                throw (new rr(r).init(e, t), (re = r), rt++, re);
            },
            x: function (r, e, t) {
                rb.varargs = t;
                try {
                    var n = rb.getStreamFromFD(r);
                    switch (e) {
                        case 0:
                            var o = rn();
                            if (o < 0) break;
                            for (; rw.streams[o]; ) o++;
                            return rw.dupStream(n, o).fd;
                        case 1:
                        case 2:
                        case 13:
                        case 14:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = rn();
                            return (n.flags |= o), 0;
                        case 12:
                            var o = rn();
                            return (d[(o + 0) >> 1] = 2), 0;
                    }
                    return -28;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            P: function (r, e) {
                try {
                    var t = rb.getStreamFromFD(r);
                    return rb.doStat(rw.stat, t.path, e);
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            G: function (r, e, t) {
                try {
                    var n = rb.getStreamFromFD(r);
                    n.getdents || (n.getdents = rw.readdir(n.path));
                    for (
                        var o = 0,
                            a = rw.llseek(n, 0, 1),
                            i = Math.floor(a / 280),
                            s = Math.min(n.getdents.length, i + Math.floor(t / 280)),
                            l = i;
                        l < s;
                        l++
                    ) {
                        var u,
                            f,
                            h,
                            p = n.getdents[l];
                        if ("." === p) (u = n.node.id), (f = 4);
                        else if (".." === p) (u = rw.lookupPath(n.path, { parent: !0 }).node.id), (f = 4);
                        else {
                            try {
                                h = rw.lookupNode(n.node, p);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 28) continue;
                                throw r;
                            }
                            (u = h.id),
                                (f = rw.isChrdev(h.mode) ? 2 : rw.isDir(h.mode) ? 4 : rw.isLink(h.mode) ? 10 : 8);
                        }
                        (v[(e + o) >> 3] = BigInt(u)),
                            (v[(e + o + 8) >> 3] = BigInt((l + 1) * 280)),
                            (d[(e + o + 16) >> 1] = 280),
                            (c[e + o + 18] = f),
                            r_(p, e + o + 19, 256),
                            (o += 280);
                    }
                    return rw.llseek(n, 280 * l, 0), o;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            s: function (r, e, t) {
                rb.varargs = t;
                try {
                    var n = rb.getStreamFromFD(r);
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
                                    a = rn();
                                (h[a >> 2] = o.c_iflag || 0),
                                    (h[(a + 4) >> 2] = o.c_oflag || 0),
                                    (h[(a + 8) >> 2] = o.c_cflag || 0),
                                    (h[(a + 12) >> 2] = o.c_lflag || 0);
                                for (var i = 0; i < 32; i++) c[a + i + 17] = o.c_cc[i] || 0;
                            }
                            return 0;
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tcsets) {
                                for (
                                    var a = rn(),
                                        s = h[a >> 2],
                                        l = h[(a + 4) >> 2],
                                        u = h[(a + 8) >> 2],
                                        f = h[(a + 12) >> 2],
                                        p = [],
                                        i = 0;
                                    i < 32;
                                    i++
                                )
                                    p.push(c[a + i + 17]);
                                return n.tty.ops.ioctl_tcsets(n.tty, e, {
                                    c_iflag: s,
                                    c_oflag: l,
                                    c_cflag: u,
                                    c_lflag: f,
                                    c_cc: p,
                                });
                            }
                            return 0;
                        case 21519:
                            if (!n.tty) return -59;
                            var a = rn();
                            return (h[a >> 2] = 0), 0;
                        case 21520:
                            if (!n.tty) return -59;
                            return -28;
                        case 21531:
                            var a = rn();
                            return rw.ioctl(n, e, a);
                        case 21523:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tiocgwinsz) {
                                var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                    a = rn();
                                (d[a >> 1] = m[0]), (d[(a + 2) >> 1] = m[1]);
                            }
                            return 0;
                        default:
                            return -28;
                    }
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            M: function (r, e) {
                try {
                    return (r = rb.getStr(r)), rb.doStat(rw.lstat, r, e);
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            N: function (r, e, t, n) {
                try {
                    e = rb.getStr(e);
                    var o = 256 & n,
                        a = 4096 & n;
                    return (n &= -6401), (e = rb.calculateAt(r, e, a)), rb.doStat(o ? rw.lstat : rw.stat, e, t);
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            y: function (r, e, t, n) {
                rb.varargs = n;
                try {
                    (e = rb.getStr(e)), (e = rb.calculateAt(r, e));
                    var o = n ? rn() : 0;
                    return rw.open(e, t, o).fd;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            O: function (r, e) {
                try {
                    return (r = rb.getStr(r)), rb.doStat(rw.stat, r, e);
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            R: () => q(""),
            B: (r, e, t, n, o) => {
                var a = -1 != (e = rP(e)).indexOf("u");
                rS(r, {
                    name: e,
                    fromWireType: (r) => r,
                    toWireType: function (r, e) {
                        if ("bigint" != typeof e && "number" != typeof e)
                            throw TypeError('Cannot convert "'.concat(rk(e), '" to ').concat(this.name));
                        return "number" == typeof e && (e = BigInt(e)), e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rj(e, t, !a),
                    destructorFunction: null,
                });
            },
            V: (r, e, t, n) => {
                rS(r, {
                    name: (e = rP(e)),
                    fromWireType: function (r) {
                        return !!r;
                    },
                    toWireType: function (r, e) {
                        return e ? t : n;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function (r) {
                        return this.fromWireType(u[r]);
                    },
                    destructorFunction: null,
                });
            },
            m: (r, e, t, n, o, a, i, s, l, c, u, d, f) => {
                (u = rP(u)), (a = r4(o, a)), s && (s = r4(i, s)), c && (c = r4(l, c)), (f = r4(d, f));
                var h,
                    p,
                    m =
                        (p = (h = (h = u).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) >= 48 && p <= 57
                            ? "_".concat(h)
                            : h;
                rG(m, function () {
                    r6("Cannot construct ".concat(u, " due to unbound types"), [n]);
                }),
                    rD([r, e, t], n ? [n] : [], (e) => {
                        e = e[0];
                        var t,
                            o,
                            i = n ? (t = e.registeredClass).instancePrototype : rL.prototype,
                            l = rH(u, function () {
                                for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                                if (Object.getPrototypeOf(this) !== d) throw new b("Use 'new' to construct " + u);
                                if (void 0 === h.constructor_body) throw new b(u + " has no accessible constructor");
                                var n = h.constructor_body[e.length];
                                if (void 0 === n)
                                    throw new b(
                                        "Tried to invoke ctor of "
                                            .concat(u, " with invalid number of parameters (")
                                            .concat(e.length, ") - expected (")
                                            .concat(
                                                Object.keys(h.constructor_body).toString(),
                                                ") parameters instead!",
                                            ),
                                    );
                                return n.apply(this, e);
                            }),
                            d = Object.create(i, { constructor: { value: l } });
                        l.prototype = d;
                        var h = new rX(u, l, d, f, t, a, s, c);
                        h.baseClass &&
                            (null != (o = h.baseClass).__derivedClasses || (o.__derivedClasses = []),
                            h.baseClass.__derivedClasses.push(h));
                        var p = new r0(u, h, !0, !1, !1),
                            v = new r0(u + "*", h, !1, !1, !1),
                            y = new r0(u + " const*", h, !1, !0, !1);
                        return (
                            (rW[r] = {
                                pointerType: v,
                                constPointerType: y,
                            }),
                            r1(m, l),
                            [p, v, y]
                        );
                    });
            },
            q: (r, e, t, n, o, a) => {
                var i = r3(e, t);
                (o = r4(n, o)),
                    rD([], [r], (r) => {
                        r = r[0];
                        var t = "constructor ".concat(r.name);
                        if (
                            (void 0 === r.registeredClass.constructor_body && (r.registeredClass.constructor_body = []),
                            void 0 !== r.registeredClass.constructor_body[e - 1])
                        )
                            throw new b(
                                "Cannot register multiple constructors with identical number of parameters ("
                                    .concat(e - 1, ") for class '")
                                    .concat(
                                        r.name,
                                        "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
                                    ),
                            );
                        return (
                            (r.registeredClass.constructor_body[e - 1] = () => {
                                r6("Cannot construct ".concat(r.name, " due to unbound types"), i);
                            }),
                            rD(
                                [],
                                i,
                                (n) => (
                                    n.splice(1, 0, null),
                                    (r.registeredClass.constructor_body[e - 1] = er(t, n, null, o, a)),
                                    []
                                ),
                            ),
                            []
                        );
                    });
            },
            c: (r, e, t, n, o, a, i, s, l, c) => {
                var u = r3(t, n);
                (e = ee((e = rP(e)))),
                    (a = r4(o, a)),
                    rD([], [r], (r) => {
                        r = r[0];
                        var n = "".concat(r.name, ".").concat(e);
                        function o() {
                            r6("Cannot call ".concat(n, " due to unbound types"), u);
                        }
                        e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                            s && r.registeredClass.pureVirtualFunctions.push(e);
                        var c = r.registeredClass.instancePrototype,
                            d = c[e];
                        return (
                            void 0 === d ||
                            (void 0 === d.overloadTable && d.className !== r.name && d.argCount === t - 2)
                                ? ((o.argCount = t - 2), (o.className = r.name), (c[e] = o))
                                : (rq(c, e, n), (c[e].overloadTable[t - 2] = o)),
                            rD([], u, (o) => {
                                var s = er(n, o, r, a, i, l);
                                return (
                                    void 0 === c[e].overloadTable
                                        ? ((s.argCount = t - 2), (c[e] = s))
                                        : (c[e].overloadTable[t - 2] = s),
                                    []
                                );
                            }),
                            []
                        );
                    });
            },
            E: (e, t, n) => {
                (e = rP(e)), rD([], [t], (t) => ((t = t[0]), (r[e] = t.fromWireType(n)), []));
            },
            T: (r) => rS(r, ei),
            D: (r, e, t, n) => {
                function o() {}
                (e = rP(e)),
                    (o.values = {}),
                    rS(r, {
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
                                              return this.fromWireType(c[r]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(u[r]);
                                          };
                                case 2:
                                    return t
                                        ? function (r) {
                                              return this.fromWireType(d[r >> 1]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(f[r >> 1]);
                                          };
                                case 4:
                                    return t
                                        ? function (r) {
                                              return this.fromWireType(h[r >> 2]);
                                          }
                                        : function (r) {
                                              return this.fromWireType(p[r >> 2]);
                                          };
                                default:
                                    throw TypeError("invalid integer width (".concat(e, "): ").concat(r));
                            }
                        })(e, t, n),
                        destructorFunction: null,
                    }),
                    rG(e, o);
            },
            j: (r, e, t) => {
                var n = es(r, "enum");
                e = rP(e);
                var o = n.constructor,
                    a = Object.create(n.constructor.prototype, {
                        value: { value: t },
                        constructor: {
                            value: rH("".concat(n.name, "_").concat(e), function () {}),
                        },
                    });
                (o.values[t] = a), (o[e] = a);
            },
            A: (r, e, t) => {
                rS(r, {
                    name: (e = rP(e)),
                    fromWireType: (r) => r,
                    toWireType: (r, e) => e,
                    argPackAdvance: 8,
                    readValueFromPointer: ((r, e) => {
                        switch (e) {
                            case 4:
                                return function (r) {
                                    return this.fromWireType(m[r >> 2]);
                                };
                            case 8:
                                return function (r) {
                                    return this.fromWireType(g[r >> 3]);
                                };
                            default:
                                throw TypeError("invalid float width (".concat(e, "): ").concat(r));
                        }
                    })(e, t),
                    destructorFunction: null,
                });
            },
            Y: (r, e, t, n, o, a, i, s) => {
                var l = r3(e, t);
                (r = ee((r = rP(r)))),
                    (o = r4(n, o)),
                    rG(
                        r,
                        function () {
                            r6("Cannot call ".concat(r, " due to unbound types"), l);
                        },
                        e - 1,
                    ),
                    rD([], l, (t) => {
                        var n = [t[0], null].concat(t.slice(1));
                        return r1(r, er(r, n, null, o, a, i), e - 1), [];
                    });
            },
            i: (r, e, t, n, o) => {
                (e = rP(e)), -1 === o && (o = 4294967295);
                var a = (r) => r;
                if (0 === n) {
                    var i = 32 - 8 * t;
                    a = (r) => (r << i) >>> i;
                }
                var s = e.includes("unsigned"),
                    l = (r, e) => {};
                rS(r, {
                    name: e,
                    fromWireType: a,
                    toWireType: s
                        ? function (r, e) {
                              return l(e, this.name), e >>> 0;
                          }
                        : function (r, e) {
                              return l(e, this.name), e;
                          },
                    argPackAdvance: 8,
                    readValueFromPointer: rj(e, t, 0 !== n),
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
                    var e = p[r >> 2],
                        t = p[(r + 4) >> 2];
                    return new n(c.buffer, t, e);
                }
                rS(
                    r,
                    {
                        name: (t = rP(t)),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o,
                    },
                    { ignoreDuplicateRegistrations: !0 },
                );
            },
            X: (r, e, t, n, o, a, i, s, l, c, u, d) => {
                (t = rP(t)),
                    (a = r4(o, a)),
                    (s = r4(i, s)),
                    (c = r4(l, c)),
                    (d = r4(u, d)),
                    rD([r], [e], (r) => ((r = r[0]), [new r0(t, r.registeredClass, !1, !1, !0, r, n, a, s, c, d)]));
            },
            U: (r, e) => {
                rS(r, {
                    name: (e = rP(e)),
                    fromWireType(r) {
                        for (var e, t, n = p[r >> 2], o = r + 4, a = o, e = 0; e <= n; ++e) {
                            var i = o + e;
                            if (e == n || 0 == u[i]) {
                                var s = i - a,
                                    l = rE(a, s);
                                void 0 === t ? (t = l) : ((t += "\0"), (t += l)), (a = i + 1);
                            }
                        }
                        return eD(r), t;
                    },
                    toWireType(r, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var t,
                            n = "string" == typeof e;
                        n ||
                            e instanceof Uint8Array ||
                            e instanceof Uint8ClampedArray ||
                            e instanceof Int8Array ||
                            r$("Cannot pass non-string to std::string"),
                            (t = n ? ru(e) : e.length);
                        var o = eF(4 + t + 1),
                            a = o + 4;
                        if (((p[o >> 2] = t), n)) r_(e, a, t + 1);
                        else if (n)
                            for (var i = 0; i < t; ++i) {
                                var s = e.charCodeAt(i);
                                s > 255 && (eD(a), r$("String has UTF-16 code units that do not fit in 8 bits")),
                                    (u[a + i] = s);
                            }
                        else for (var i = 0; i < t; ++i) u[a + i] = e[i];
                        return null !== r && r.push(eD, o), o;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rQ,
                    destructorFunction(r) {
                        eD(r);
                    },
                });
            },
            t: (r, e, t) => {
                var n, o, a, i;
                (t = rP(t)),
                    2 === e
                        ? ((n = ec), (o = eu), (i = ed), (a = (r) => f[r >> 1]))
                        : 4 === e && ((n = ef), (o = eh), (i = ep), (a = (r) => p[r >> 2])),
                    rS(r, {
                        name: t,
                        fromWireType: (r) => {
                            for (var t, o = p[r >> 2], i = r + 4, s = 0; s <= o; ++s) {
                                var l = r + 4 + s * e;
                                if (s == o || 0 == a(l)) {
                                    var c = l - i,
                                        u = n(i, c);
                                    void 0 === t ? (t = u) : ((t += "\0"), (t += u)), (i = l + e);
                                }
                            }
                            return eD(r), t;
                        },
                        toWireType: (r, n) => {
                            "string" != typeof n && r$("Cannot pass non-string to C++ string type ".concat(t));
                            var a = i(n),
                                s = eF(4 + a + e);
                            return (p[s >> 2] = a / e), o(n, s + 4, a + e), null !== r && r.push(eD, s), s;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: rQ,
                        destructorFunction(r) {
                            eD(r);
                        },
                    });
            },
            W: (r, e) => {
                rS(r, {
                    isVoid: !0,
                    name: (e = rP(e)),
                    argPackAdvance: 0,
                    fromWireType: () => void 0,
                    toWireType: (r, e) => void 0,
                });
            },
            r: (r, e, t) => ((r = ea.toValue(r)), em((e = es(e, "emval::as")), t, r)),
            u: (r, e, t, n) => (r = ev[r])(null, (e = ea.toValue(e)), t, n),
            C: (r, e, t, n, o) => ((r = ev[r]), r((e = ea.toValue(e)), e[(t = eg(t))], n, o)),
            b: eo,
            n: (r, e, t) => {
                var n,
                    o,
                    a = ((r, e) => {
                        for (var t = Array(r), n = 0; n < r; ++n) t[n] = es(p[(e + 4 * n) >> 2], "parameter " + n);
                        return t;
                    })(r, e),
                    i = a.shift();
                r--;
                var s = "return function (obj, func, destructorsRef, args) {\n",
                    l = 0,
                    c = [];
                0 === t && c.push("obj");
                for (var u = ["retType"], d = [i], f = 0; f < r; ++f)
                    c.push("arg" + f),
                        u.push("argType" + f),
                        d.push(a[f]),
                        (s += "  var arg"
                            .concat(f, " = argType")
                            .concat(f, ".readValueFromPointer(args")
                            .concat(l ? "+" + l : "", ");\n")),
                        (l += a[f].argPackAdvance);
                (s += "  var rv = ".concat(1 === t ? "new func" : "func.call", "(").concat(c.join(", "), ");\n")),
                    i.isVoid ||
                        (u.push("emval_returnValue"),
                        d.push(em),
                        (s += "  return emval_returnValue(retType, destructorsRef, rv);\n")),
                    (s += "};\n"),
                    u.push(s);
                var h = r7(Function, u)(...d);
                return (
                    (n = rH("methodCaller<(".concat(a.map((r) => r.name).join(", "), ") => ").concat(i.name, ">"), h)),
                    (o = ev.length),
                    ev.push(n),
                    o
                );
            },
            l: (r, e) => ((r = ea.toValue(r)), (e = ea.toValue(e)), ea.toHandle(r[e])),
            f: (r) => {
                r > 9 && (en[r + 1] += 1);
            },
            Z: () => ea.toHandle([]),
            g: (r) => ea.toHandle(eg(r)),
            o: () => ea.toHandle({}),
            h: (r) => {
                r8(ea.toValue(r)), eo(r);
            },
            k: (r, e, t) => {
                (r = ea.toValue(r)), (e = ea.toValue(e)), (t = ea.toValue(t)), (r[e] = t);
            },
            e: (r, e) => {
                var t = (r = es(r, "_emval_take_value")).readValueFromPointer(e);
                return ea.toHandle(t);
            },
            I: function (r, e) {
                var t = new Date(1000 * (r = ew(r)));
                (h[e >> 2] = t.getUTCSeconds()),
                    (h[(e + 4) >> 2] = t.getUTCMinutes()),
                    (h[(e + 8) >> 2] = t.getUTCHours()),
                    (h[(e + 12) >> 2] = t.getUTCDate()),
                    (h[(e + 16) >> 2] = t.getUTCMonth()),
                    (h[(e + 20) >> 2] = t.getUTCFullYear() - 1900),
                    (h[(e + 24) >> 2] = t.getUTCDay());
                var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    o = ((t.getTime() - n) / 86400000) | 0;
                h[(e + 28) >> 2] = o;
            },
            H: function (r, e, t, n, o, a) {
                a = ew(a);
                try {
                    var i = rb.getStreamFromFD(o);
                    2 & t && rb.doMsync(r, i, e, n, a);
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            S: (r, e, t, n) => {
                var o = new Date().getFullYear(),
                    a = new Date(o, 0, 1),
                    i = new Date(o, 6, 1),
                    s = a.getTimezoneOffset(),
                    l = i.getTimezoneOffset(),
                    c = Math.max(s, l);
                (p[r >> 2] = 60 * c), (h[e >> 2] = Number(s != l));
                var u = (r) => {
                        var e = Math.abs(r),
                            t = String(Math.floor(e / 60)).padStart(2, "0"),
                            n = String(e % 60).padStart(2, "0");
                        return "UTC"
                            .concat(r >= 0 ? "-" : "+")
                            .concat(t)
                            .concat(n);
                    },
                    d = u(s),
                    f = u(l);
                l < s ? (r_(d, t, 17), r_(f, n, 17)) : (r_(d, n, 17), r_(f, t, 17));
            },
            Q: function (r, e, t) {
                if (((e = ew(e)), !(r >= 0 && r <= 3))) return 28;
                if (0 === r) n = eE();
                else {
                    0;
                    n = performance.now();
                }
                var n,
                    o = Math.round(1000 * n * 1000);
                return (v[t >> 3] = BigInt(o)), 0;
            },
            z: eE,
            F: (r) => {
                var e = u.length;
                if ((r >>>= 0) > 2147483648) return !1;
                for (var t = 1; t <= 4; t *= 2) {
                    var n = e * (1 + 0.2 / t);
                    if (((n = Math.min(n, r + 100663296)), eb(Math.min(2147483648, rh(Math.max(r, n), 65536)))))
                        return !0;
                }
                return !1;
            },
            K: (r, e) => {
                var t = 0;
                return (
                    ek().forEach((n, o) => {
                        var a = e + t;
                        p[(r + 4 * o) >> 2] = a;
                        for (var i = a, s = 0; s < n.length; ++s) c[i++] = n.charCodeAt(s);
                        (c[i] = 0), (t += n.length + 1);
                    }),
                    0
                );
            },
            L: (r, e) => {
                var t = ek();
                p[r >> 2] = t.length;
                var n = 0;
                return t.forEach((r) => (n += r.length + 1)), (p[e >> 2] = n), 0;
            },
            p: function (r) {
                try {
                    var e = rb.getStreamFromFD(r);
                    return rw.close(e), 0;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            v: function (r, e, t, n) {
                try {
                    var o = rb.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = p[e >> 2],
                                    s = p[(e + 4) >> 2];
                                e += 8;
                                var l = rw.read(r, c, i, s, n);
                                if (l < 0) return -1;
                                if (((o += l), l < s)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            J: function (r, e, t, n) {
                e = ew(e);
                try {
                    if (isNaN(e)) return 61;
                    var o = rb.getStreamFromFD(r);
                    return (
                        rw.llseek(o, e, t),
                        (v[n >> 3] = BigInt(o.position)),
                        o.getdents && 0 === e && 0 === t && (o.getdents = null),
                        0
                    );
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            w: function (r, e, t, n) {
                try {
                    var o = rb.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var i = p[e >> 2],
                                    s = p[(e + 4) >> 2];
                                e += 8;
                                var l = rw.write(r, c, i, s, n);
                                if (l < 0) return -1;
                                if (((o += l), l < s)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rw || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
        };
        K();
        var e$ = (r) => (e$ = C.aa)(r),
            eF = (r._malloc = (e) => (eF = r._malloc = C.ca)(e)),
            eD = (r._free = (e) => (eD = r._free = C.da)(e)),
            eS = (r, e) => (eS = C.ea)(r, e),
            ej = (r) => (ej = C.fa)(r),
            ex = (r) => (ex = C.ga)(r),
            eO = () => (eO = C.ha)();
        function eM() {
            if (!(I > 0)) {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) {
                        var t;
                        (t = r.preRun.shift()), B.unshift(t);
                    }
                J(B),
                    I > 0 ||
                        (r.setStatus
                            ? (r.setStatus("Running..."),
                              setTimeout(() => {
                                  setTimeout(() => r.setStatus(""), 1), n();
                              }, 1))
                            : n());
            }
            function n() {
                var t, n;
                if (!A && ((A = !0), (r.calledRun = !0), !N)) {
                    if (
                        (r.noFSInit || rw.initialized || rw.init(),
                        (rw.ignorePermissions = !1),
                        rf.init(),
                        J(U),
                        e(r),
                        null == (t = r.onRuntimeInitialized) || t.call(r),
                        r.postRun)
                    )
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) {
                            (n = r.postRun.shift()), z.unshift(n);
                        }
                    J(z);
                }
            }
        }
        if (
            ((r.ccall = (e, t, n, o, a) => {
                var i = {
                        string: (r) => {
                            var e,
                                t,
                                n = 0;
                            return null != r && 0 !== r && ((t = eP((e = ru(r) + 1))), r_(r, t, e), (n = t)), n;
                        },
                        array: (r) => {
                            var e = eP(r.length);
                            return c.set(r, e), e;
                        },
                    },
                    s = r["_" + e],
                    l = [],
                    u = 0;
                if (o)
                    for (var d = 0; d < o.length; d++) {
                        var f = i[n[d]];
                        f ? (0 === u && (u = Q()), (l[d] = f(o[d]))) : (l[d] = o[d]);
                    }
                var h = s(...l);
                return (function (r) {
                    return 0 !== u && ej(u), "string" === t ? rE(r) : "boolean" === t ? !!r : r;
                })(h);
            }),
            (V = function r() {
                A || eM(), A || (V = r);
            }),
            r.preInit)
        )
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
        return eM(), D;
    });
