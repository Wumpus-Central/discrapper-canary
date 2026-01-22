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
t.d(e, {
    A: () => a,
}),
    t(747238),
    t(812715),
    t(65821),
    t(927092),
    t(212978),
    t(24457),
    t(393431),
    t(752391),
    t(532706),
    t(42231),
    t(232424),
    t(757074),
    t(949626),
    t(767709),
    t(65162),
    t(440738),
    t(201528),
    t(298793),
    t(777220),
    t(834879),
    t(648691),
    t(797484),
    t(667532),
    t(896048),
    t(693327),
    t(554719),
    t(680155),
    t(323874),
    t(14289),
    t(35956),
    t(321073),
    t(938796),
    t(264879),
    t(733351),
    t(228524),
    t(597227),
    t(108757);
let a =
    ((n = "file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js"),
    function () {
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var e,
            a,
            s,
            i,
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
        "u" > typeof document && document.currentScript && (x = document.currentScript.src),
            n && (x = n),
            (x = x.startsWith("blob:") ? "" : x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
            (s = async (r) => {
                var e = await fetch(r, {
                    credentials: "same-origin",
                });
                if (e.ok) return e.arrayBuffer();
                throw Error(e.status + " : " + e.url);
            });
        var O = r.print || console.log.bind(console),
            M = r.printErr || console.error.bind(console);
        Object.assign(r, S), (S = null), r.arguments && r.arguments, r.thisProgram && (j = r.thisProgram);
        var W = r.wasmBinary,
            N = !1;

        function R() {
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
        async function G(r) {
            if (!W)
                try {
                    var e = await s(r);
                    return new Uint8Array(e);
                } catch (r) {}
            if (r == w && W) return new Uint8Array(W);
            if (i) return i(r);
            throw "both async and sync fetching of the wasm failed";
        }
        async function X(r, e) {
            try {
                var t = await G(r);
                return await WebAssembly.instantiate(t, e);
            } catch (r) {
                M("failed to asynchronously prepare wasm: ".concat(r)), q(r);
            }
        }
        async function Y(r, e, t) {
            if (
                !r &&
                "function" == typeof WebAssembly.instantiateStreaming &&
                !e.startsWith("data:application/octet-stream;base64,") &&
                "function" == typeof fetch
            )
                try {
                    var n = fetch(e, {
                        credentials: "same-origin",
                    });
                    return await WebAssembly.instantiateStreaming(n, t);
                } catch (r) {
                    M("wasm streaming compile failed: ".concat(r)), M("falling back to ArrayBuffer instantiation");
                }
            return X(e, t);
        }
        async function K() {
            function e(r, e) {
                var t;
                return (l = (C = r.exports)._), R(), (P = C.ba), (t = C.$), U.unshift(t), H("wasm-instantiate"), C;
            }
            L("wasm-instantiate");
            var n = {
                a: eT,
            };
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
                        return e.startsWith("data:application/octet-stream;base64,")
                            ? e
                            : r.locateFile
                              ? r.locateFile(e, x)
                              : x + e;
                    }
                    return new URL(t(264219), t.b).href;
                })());
            try {
                var o = await Y(W, w, n);
                return e(o.instance), o;
            } catch (r) {
                a(r);
                return;
            }
        }
        var Z = (e) => {
            for (; e.length > 0; ) e.shift()(r);
        };
        r.noExitRuntime;
        var J = () => ej();
        class Q {
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
        var rr = 0,
            re = 0,
            rt = () => {
                var r = h[rE.varargs >> 2];
                return (rE.varargs += 4), r;
            },
            rn = {
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
                    var e = rn.isAbs(r),
                        t = "/" === r.substr(-1);
                    return (
                        (r = rn
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
                    var e = rn.splitPath(r),
                        t = e[0],
                        n = e[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
                },
                basename: (r) => {
                    if ("/" === r) return "/";
                    var e = (r = (r = rn.normalize(r)).replace(/\/$/, "")).lastIndexOf("/");
                    return -1 === e ? r : r.substr(e + 1);
                },
                join: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    return rn.normalize(e.join("/"));
                },
                join2: (r, e) => rn.normalize(r + "/" + e),
            },
            ro = (r) =>
                (ro = (() => {
                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                        return (r) => crypto.getRandomValues(r);
                    q("initRandomDevice");
                })())(r),
            ra = {
                resolve: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    for (var n = "", o = !1, a = e.length - 1; a >= -1 && !o; a--) {
                        var s = a >= 0 ? e[a] : rg.cwd();
                        if ("string" != typeof s) throw TypeError("Arguments to path.resolve must be strings");
                        if (!s) return "";
                        (n = s + "/" + n), (o = rn.isAbs(s));
                    }
                    return (
                        (n = rn
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
                    (r = ra.resolve(r).substr(1)), (e = ra.resolve(e).substr(1));
                    for (
                        var n = t(r.split("/")), o = t(e.split("/")), a = Math.min(n.length, o.length), s = a, i = 0;
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
            rs = "u" > typeof TextDecoder ? new TextDecoder() : void 0,
            ri = function (r) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
                for (var n = e + t, o = e; r[o] && !(o >= n); ) ++o;
                if (o - e > 16 && r.buffer && rs) return rs.decode(r.subarray(e, o));
                for (var a = ""; e < o; ) {
                    var s = r[e++];
                    if (!(128 & s)) {
                        a += String.fromCharCode(s);
                        continue;
                    }
                    var i = 63 & r[e++];
                    if ((224 & s) == 192) {
                        a += String.fromCharCode(((31 & s) << 6) | i);
                        continue;
                    }
                    var l = 63 & r[e++];
                    if (
                        (s =
                            (240 & s) == 224
                                ? ((15 & s) << 12) | (i << 6) | l
                                : ((7 & s) << 18) | (i << 12) | (l << 6) | (63 & r[e++])) < 65536
                    )
                        a += String.fromCharCode(s);
                    else {
                        var c = s - 65536;
                        a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                    }
                }
                return a;
            },
            rl = [],
            rc = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n <= 127 ? e++ : n <= 2047 ? (e += 2) : n >= 55296 && n <= 57343 ? ((e += 4), ++t) : (e += 3);
                }
                return e;
            },
            ru = (r, e, t, n) => {
                if (!(n > 0)) return 0;
                for (var o = t, a = t + n - 1, s = 0; s < r.length; ++s) {
                    var i = r.charCodeAt(s);
                    if (
                        (i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & r.charCodeAt(++s))),
                        i <= 127)
                    ) {
                        if (t >= a) break;
                        e[t++] = i;
                    } else if (i <= 2047) {
                        if (t + 1 >= a) break;
                        (e[t++] = 192 | (i >> 6)), (e[t++] = 128 | (63 & i));
                    } else if (i <= 65535) {
                        if (t + 2 >= a) break;
                        (e[t++] = 224 | (i >> 12)), (e[t++] = 128 | ((i >> 6) & 63)), (e[t++] = 128 | (63 & i));
                    } else {
                        if (t + 3 >= a) break;
                        (e[t++] = 240 | (i >> 18)),
                            (e[t++] = 128 | ((i >> 12) & 63)),
                            (e[t++] = 128 | ((i >> 6) & 63)),
                            (e[t++] = 128 | (63 & i));
                    }
                }
                return (e[t] = 0), t - o;
            },
            rd = {
                ttys: [],
                init() {},
                shutdown() {},
                register(r, e) {
                    (rd.ttys[r] = {
                        input: [],
                        output: [],
                        ops: e,
                    }),
                        rg.registerDevice(r, rd.stream_ops);
                },
                stream_ops: {
                    open(r) {
                        var e = rd.ttys[r.node.rdev];
                        if (!e) throw new rg.ErrnoError(43);
                        (r.tty = e), (r.seekable = !1);
                    },
                    close(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    fsync(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    read(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.get_char) throw new rg.ErrnoError(60);
                        for (var a, s = 0, i = 0; i < n; i++) {
                            try {
                                a = r.tty.ops.get_char(r.tty);
                            } catch (r) {
                                throw new rg.ErrnoError(29);
                            }
                            if (void 0 === a && 0 === s) throw new rg.ErrnoError(6);
                            if (null == a) break;
                            s++, (e[t + i] = a);
                        }
                        return s && (r.node.atime = Date.now()), s;
                    },
                    write(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.put_char) throw new rg.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) r.tty.ops.put_char(r.tty, e[t + a]);
                        } catch (r) {
                            throw new rg.ErrnoError(29);
                        }
                        return n && (r.node.mtime = r.node.ctime = Date.now()), a;
                    },
                },
                default_tty_ops: {
                    get_char: (r) =>
                        (() => {
                            if (!rl.length) {
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
                                    (t = Array(rc(r) + 1)),
                                    (n = ru(r, t, 0, t.length)),
                                    e && (t.length = n),
                                    (rl = t);
                            }
                            return rl.shift();
                        })(),
                    put_char(r, e) {
                        null === e || 10 === e ? (O(ri(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (O(ri(r.output)), (r.output = []));
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
                        null === e || 10 === e ? (M(ri(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (M(ri(r.output)), (r.output = []));
                    },
                },
            },
            rf = (r, e) => Math.ceil(r / e) * e,
            rh = (r) => {
                r = rf(r, 65536);
                var e,
                    t = eF(65536, r);
                return t && ((e = r), u.fill(0, t, t + e)), t;
            },
            rp = {
                ops_table: null,
                mount: (r) => rp.createNode(null, "/", 16895, 0),
                createNode(r, e, t, n) {
                    if (rg.isBlkdev(t) || rg.isFIFO(t)) throw new rg.ErrnoError(63);
                    rp.ops_table ||
                        (rp.ops_table = {
                            dir: {
                                node: {
                                    getattr: rp.node_ops.getattr,
                                    setattr: rp.node_ops.setattr,
                                    lookup: rp.node_ops.lookup,
                                    mknod: rp.node_ops.mknod,
                                    rename: rp.node_ops.rename,
                                    unlink: rp.node_ops.unlink,
                                    rmdir: rp.node_ops.rmdir,
                                    readdir: rp.node_ops.readdir,
                                    symlink: rp.node_ops.symlink,
                                },
                                stream: {
                                    llseek: rp.stream_ops.llseek,
                                },
                            },
                            file: {
                                node: {
                                    getattr: rp.node_ops.getattr,
                                    setattr: rp.node_ops.setattr,
                                },
                                stream: {
                                    llseek: rp.stream_ops.llseek,
                                    read: rp.stream_ops.read,
                                    write: rp.stream_ops.write,
                                    allocate: rp.stream_ops.allocate,
                                    mmap: rp.stream_ops.mmap,
                                    msync: rp.stream_ops.msync,
                                },
                            },
                            link: {
                                node: {
                                    getattr: rp.node_ops.getattr,
                                    setattr: rp.node_ops.setattr,
                                    readlink: rp.node_ops.readlink,
                                },
                                stream: {},
                            },
                            chrdev: {
                                node: {
                                    getattr: rp.node_ops.getattr,
                                    setattr: rp.node_ops.setattr,
                                },
                                stream: rg.chrdev_stream_ops,
                            },
                        });
                    var o = rg.createNode(r, e, t, n);
                    return (
                        rg.isDir(o.mode)
                            ? ((o.node_ops = rp.ops_table.dir.node),
                              (o.stream_ops = rp.ops_table.dir.stream),
                              (o.contents = {}))
                            : rg.isFile(o.mode)
                              ? ((o.node_ops = rp.ops_table.file.node),
                                (o.stream_ops = rp.ops_table.file.stream),
                                (o.usedBytes = 0),
                                (o.contents = null))
                              : rg.isLink(o.mode)
                                ? ((o.node_ops = rp.ops_table.link.node), (o.stream_ops = rp.ops_table.link.stream))
                                : rg.isChrdev(o.mode) &&
                                  ((o.node_ops = rp.ops_table.chrdev.node),
                                  (o.stream_ops = rp.ops_table.chrdev.stream)),
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
                            (e.dev = rg.isChrdev(r.mode) ? r.id : 1),
                            (e.ino = r.id),
                            (e.mode = r.mode),
                            (e.nlink = 1),
                            (e.uid = 0),
                            (e.gid = 0),
                            (e.rdev = r.rdev),
                            rg.isDir(r.mode)
                                ? (e.size = 4096)
                                : rg.isFile(r.mode)
                                  ? (e.size = r.usedBytes)
                                  : rg.isLink(r.mode)
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
                        void 0 !== e.size && rp.resizeFileStorage(r, e.size);
                    },
                    lookup(r, e) {
                        throw rp.doesNotExistError;
                    },
                    mknod: (r, e, t, n) => rp.createNode(r, e, t, n),
                    rename(r, e, t) {
                        var n;
                        try {
                            n = rg.lookupNode(e, t);
                        } catch (r) {}
                        if (n) {
                            if (rg.isDir(r.mode)) for (var o in n.contents) throw new rg.ErrnoError(55);
                            rg.hashRemoveNode(n);
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
                        var t = rg.lookupNode(r, e);
                        for (var n in t.contents) throw new rg.ErrnoError(55);
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    readdir: (r) => [".", "..", ...Object.keys(r.contents)],
                    symlink(r, e, t) {
                        var n = rp.createNode(r, e, 41471, 0);
                        return (n.link = t), n;
                    },
                    readlink(r) {
                        if (!rg.isLink(r.mode)) throw new rg.ErrnoError(28);
                        return r.link;
                    },
                },
                stream_ops: {
                    read(r, e, t, n, o) {
                        var a = r.node.contents;
                        if (o >= r.node.usedBytes) return 0;
                        var s = Math.min(r.node.usedBytes - o, n);
                        if (s > 8 && a.subarray) e.set(a.subarray(o, o + s), t);
                        else for (var i = 0; i < s; i++) e[t + i] = a[o + i];
                        return s;
                    },
                    write(r, e, t, n, o, a) {
                        if ((e.buffer === c.buffer && (a = !1), !n)) return 0;
                        var s = r.node;
                        if (((s.mtime = s.ctime = Date.now()), e.subarray && (!s.contents || s.contents.subarray))) {
                            if (a) return (s.contents = e.subarray(t, t + n)), (s.usedBytes = n), n;
                            else if (0 === s.usedBytes && 0 === o)
                                return (s.contents = e.slice(t, t + n)), (s.usedBytes = n), n;
                            else if (o + n <= s.usedBytes) return s.contents.set(e.subarray(t, t + n), o), n;
                        }
                        if ((rp.expandFileStorage(s, o + n), s.contents.subarray && e.subarray))
                            s.contents.set(e.subarray(t, t + n), o);
                        else for (var i = 0; i < n; i++) s.contents[o + i] = e[t + i];
                        return (s.usedBytes = Math.max(s.usedBytes, o + n)), n;
                    },
                    llseek(r, e, t) {
                        var n = e;
                        if (
                            (1 === t ? (n += r.position) : 2 === t && rg.isFile(r.node.mode) && (n += r.node.usedBytes),
                            n < 0)
                        )
                            throw new rg.ErrnoError(28);
                        return n;
                    },
                    allocate(r, e, t) {
                        rp.expandFileStorage(r.node, e + t), (r.node.usedBytes = Math.max(r.node.usedBytes, e + t));
                    },
                    mmap(r, e, t, n, o) {
                        if (!rg.isFile(r.node.mode)) throw new rg.ErrnoError(43);
                        var a,
                            s,
                            i = r.node.contents;
                        if (!(2 & o) && i && i.buffer === c.buffer) (s = !1), (a = i.byteOffset);
                        else {
                            if (((s = !0), !(a = rh(e)))) throw new rg.ErrnoError(48);
                            i &&
                                ((t > 0 || t + e < i.length) &&
                                    (i = i.subarray ? i.subarray(t, t + e) : Array.prototype.slice.call(i, t, t + e)),
                                c.set(i, a));
                        }
                        return {
                            ptr: a,
                            allocated: s,
                        };
                    },
                    msync: (r, e, t, n, o) => (rp.stream_ops.write(r, e, 0, n, t, !1), 0),
                },
            },
            rm = async (r) => new Uint8Array(await s(r)),
            rv = r.preloadPlugins || [],
            ry = (r, e) => {
                var t = 0;
                return r && (t |= 365), e && (t |= 146), t;
            },
            rg = {
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
                        return rg.isDir(this.mode);
                    }
                    get isDevice() {
                        return rg.isChrdev(this.mode);
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
                            (this.id = rg.nextInode++),
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
                    null != e.follow_mount || (e.follow_mount = !0), rn.isAbs(r) || (r = rg.cwd() + "/" + r);
                    r: for (var t, n = 0; n < 40; n++) {
                        for (
                            var o = r.split("/").filter((r) => !!r && "." !== r), a = rg.root, s = "/", i = 0;
                            i < o.length;
                            i++
                        ) {
                            var l = i === o.length - 1;
                            if (l && e.parent) break;
                            if (".." === o[i]) {
                                (s = rn.dirname(s)), (a = a.parent);
                                continue;
                            }
                            s = rn.join2(s, o[i]);
                            try {
                                a = rg.lookupNode(a, o[i]);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 44 && l && e.noent_okay)
                                    return {
                                        path: s,
                                    };
                                throw r;
                            }
                            if (
                                (rg.isMountpoint(a) && (!l || e.follow_mount) && (a = a.mounted.root),
                                rg.isLink(a.mode) && (!l || e.follow))
                            ) {
                                if (!a.node_ops.readlink) throw new rg.ErrnoError(52);
                                var c = a.node_ops.readlink(a);
                                rn.isAbs(c) || (c = rn.dirname(s) + "/" + c), (r = c + "/" + o.slice(i + 1).join("/"));
                                continue r;
                            }
                        }
                        return {
                            path: s,
                            node: a,
                        };
                    }
                    throw new rg.ErrnoError(32);
                },
                getPath(r) {
                    for (var e; ; ) {
                        if (rg.isRoot(r)) {
                            var t = r.mount.mountpoint;
                            if (!e) return t;
                            return "/" !== t[t.length - 1] ? "".concat(t, "/").concat(e) : t + e;
                        }
                        (e = e ? "".concat(r.name, "/").concat(e) : r.name), (r = r.parent);
                    }
                },
                hashName(r, e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
                    return ((r + t) >>> 0) % rg.nameTable.length;
                },
                hashAddNode(r) {
                    var e = rg.hashName(r.parent.id, r.name);
                    (r.name_next = rg.nameTable[e]), (rg.nameTable[e] = r);
                },
                hashRemoveNode(r) {
                    var e = rg.hashName(r.parent.id, r.name);
                    if (rg.nameTable[e] === r) rg.nameTable[e] = r.name_next;
                    else
                        for (var t = rg.nameTable[e]; t; ) {
                            if (t.name_next === r) {
                                t.name_next = r.name_next;
                                break;
                            }
                            t = t.name_next;
                        }
                },
                lookupNode(r, e) {
                    var t = rg.mayLookup(r);
                    if (t) throw new rg.ErrnoError(t);
                    for (var n = rg.hashName(r.id, e), o = rg.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === r.id && a === e) return o;
                    }
                    return rg.lookup(r, e);
                },
                createNode(r, e, t, n) {
                    var o = new rg.FSNode(r, e, t, n);
                    return rg.hashAddNode(o), o;
                },
                destroyNode(r) {
                    rg.hashRemoveNode(r);
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
                    rg.ignorePermissions
                        ? 0
                        : (e.includes("r") && !(292 & r.mode)) ||
                            (e.includes("w") && !(146 & r.mode)) ||
                            (e.includes("x") && !(73 & r.mode))
                          ? 2
                          : 0,
                mayLookup(r) {
                    if (!rg.isDir(r.mode)) return 54;
                    var e = rg.nodePermissions(r, "x");
                    return e || 2 * !r.node_ops.lookup;
                },
                mayCreate(r, e) {
                    if (!rg.isDir(r.mode)) return 54;
                    try {
                        return rg.lookupNode(r, e), 20;
                    } catch (r) {}
                    return rg.nodePermissions(r, "wx");
                },
                mayDelete(r, e, t) {
                    try {
                        n = rg.lookupNode(r, e);
                    } catch (r) {
                        return r.errno;
                    }
                    var n,
                        o = rg.nodePermissions(r, "wx");
                    if (o) return o;
                    if (t) {
                        if (!rg.isDir(n.mode)) return 54;
                        if (rg.isRoot(n) || rg.getPath(n) === rg.cwd()) return 10;
                    } else if (rg.isDir(n.mode)) return 31;
                    return 0;
                },
                mayOpen: (r, e) =>
                    r
                        ? rg.isLink(r.mode)
                            ? 32
                            : rg.isDir(r.mode) && ("r" !== rg.flagsToPermissionString(e) || 512 & e)
                              ? 31
                              : rg.nodePermissions(r, rg.flagsToPermissionString(e))
                        : 44,
                MAX_OPEN_FDS: 4096,
                nextfd() {
                    for (var r = 0; r <= rg.MAX_OPEN_FDS; r++) if (!rg.streams[r]) return r;
                    throw new rg.ErrnoError(33);
                },
                getStreamChecked(r) {
                    var e = rg.getStream(r);
                    if (!e) throw new rg.ErrnoError(8);
                    return e;
                },
                getStream: (r) => rg.streams[r],
                createStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return (
                        (r = Object.assign(new rg.FSStream(), r)),
                        -1 == e && (e = rg.nextfd()),
                        (r.fd = e),
                        (rg.streams[e] = r),
                        r
                    );
                },
                closeStream(r) {
                    rg.streams[r] = null;
                },
                dupStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    var t,
                        n,
                        o = rg.createStream(r, e);
                    return null == (n = o.stream_ops) || null == (t = n.dup) || t.call(n, o), o;
                },
                chrdev_stream_ops: {
                    open(r) {
                        var e,
                            t,
                            n = rg.getDevice(r.node.rdev);
                        (r.stream_ops = n.stream_ops), null == (e = (t = r.stream_ops).open) || e.call(t, r);
                    },
                    llseek() {
                        throw new rg.ErrnoError(70);
                    },
                },
                major: (r) => r >> 8,
                minor: (r) => 255 & r,
                makedev: (r, e) => (r << 8) | e,
                registerDevice(r, e) {
                    rg.devices[r] = {
                        stream_ops: e,
                    };
                },
                getDevice: (r) => rg.devices[r],
                getMounts(r) {
                    for (var e = [], t = [r]; t.length; ) {
                        var n = t.pop();
                        e.push(n), t.push(...n.mounts);
                    }
                    return e;
                },
                syncfs(r, e) {
                    "function" == typeof r && ((e = r), (r = !1)),
                        rg.syncFSRequests++,
                        rg.syncFSRequests > 1 &&
                            M(
                                "warning: ".concat(
                                    rg.syncFSRequests,
                                    " FS.syncfs operations in flight at once, probably just doing extra work",
                                ),
                            );
                    var t = rg.getMounts(rg.root.mount),
                        n = 0;

                    function o(r) {
                        return rg.syncFSRequests--, e(r);
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
                    if (o && rg.root) throw new rg.ErrnoError(10);
                    if (!o && !a) {
                        var s = rg.lookupPath(t, {
                            follow_mount: !1,
                        });
                        if (((t = s.path), (n = s.node), rg.isMountpoint(n))) throw new rg.ErrnoError(10);
                        if (!rg.isDir(n.mode)) throw new rg.ErrnoError(54);
                    }
                    var i = {
                            type: r,
                            opts: e,
                            mountpoint: t,
                            mounts: [],
                        },
                        l = r.mount(i);
                    return (
                        (l.mount = i),
                        (i.root = l),
                        o ? (rg.root = l) : n && ((n.mounted = i), n.mount && n.mount.mounts.push(i)),
                        l
                    );
                },
                unmount(r) {
                    var e = rg.lookupPath(r, {
                        follow_mount: !1,
                    });
                    if (!rg.isMountpoint(e.node)) throw new rg.ErrnoError(28);
                    var t = e.node,
                        n = t.mounted,
                        o = rg.getMounts(n);
                    Object.keys(rg.nameTable).forEach((r) => {
                        for (var e = rg.nameTable[r]; e; ) {
                            var t = e.name_next;
                            o.includes(e.mount) && rg.destroyNode(e), (e = t);
                        }
                    }),
                        (t.mounted = null);
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1);
                },
                lookup: (r, e) => r.node_ops.lookup(r, e),
                mknod(r, e, t) {
                    var n = rg.lookupPath(r, {
                            parent: !0,
                        }).node,
                        o = rn.basename(r);
                    if (!o || "." === o || ".." === o) throw new rg.ErrnoError(28);
                    var a = rg.mayCreate(n, o);
                    if (a) throw new rg.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new rg.ErrnoError(63);
                    return n.node_ops.mknod(n, o, e, t);
                },
                statfs(r) {
                    var e = {
                            bsize: 4096,
                            frsize: 4096,
                            blocks: 1e6,
                            bfree: 5e5,
                            bavail: 5e5,
                            files: rg.nextInode,
                            ffree: rg.nextInode - 1,
                            fsid: 42,
                            flags: 2,
                            namelen: 255,
                        },
                        t = rg.lookupPath(r, {
                            follow: !0,
                        }).node;
                    return (
                        (null == t ? void 0 : t.node_ops.statfs) &&
                            Object.assign(e, t.node_ops.statfs(t.mount.opts.root)),
                        e
                    );
                },
                create(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                    return (e &= 4095), (e |= 32768), rg.mknod(r, e, 0);
                },
                mkdir(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                    return (e &= 1023), (e |= 16384), rg.mknod(r, e, 0);
                },
                mkdirTree(r, e) {
                    for (var t = r.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                rg.mkdir(n, e);
                            } catch (r) {
                                if (20 != r.errno) throw r;
                            }
                        }
                },
                mkdev: (r, e, t) => (void 0 === t && ((t = e), (e = 438)), (e |= 8192), rg.mknod(r, e, t)),
                symlink(r, e) {
                    if (!ra.resolve(r)) throw new rg.ErrnoError(44);
                    var t = rg.lookupPath(e, {
                        parent: !0,
                    }).node;
                    if (!t) throw new rg.ErrnoError(44);
                    var n = rn.basename(e),
                        o = rg.mayCreate(t, n);
                    if (o) throw new rg.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new rg.ErrnoError(63);
                    return t.node_ops.symlink(t, n, r);
                },
                rename(r, e) {
                    var t,
                        n,
                        o,
                        a = rn.dirname(r),
                        s = rn.dirname(e),
                        i = rn.basename(r),
                        l = rn.basename(e);
                    if (
                        ((t = rg.lookupPath(r, {
                            parent: !0,
                        }).node),
                        (n = rg.lookupPath(e, {
                            parent: !0,
                        }).node),
                        !t || !n)
                    )
                        throw new rg.ErrnoError(44);
                    if (t.mount !== n.mount) throw new rg.ErrnoError(75);
                    var c = rg.lookupNode(t, i),
                        u = ra.relative(r, s);
                    if ("." !== u.charAt(0)) throw new rg.ErrnoError(28);
                    if ("." !== (u = ra.relative(e, a)).charAt(0)) throw new rg.ErrnoError(55);
                    try {
                        o = rg.lookupNode(n, l);
                    } catch (r) {}
                    if (c !== o) {
                        var d = rg.isDir(c.mode),
                            f = rg.mayDelete(t, i, d);
                        if (f || (f = o ? rg.mayDelete(n, l, d) : rg.mayCreate(n, l))) throw new rg.ErrnoError(f);
                        if (!t.node_ops.rename) throw new rg.ErrnoError(63);
                        if (rg.isMountpoint(c) || (o && rg.isMountpoint(o))) throw new rg.ErrnoError(10);
                        if (n !== t && (f = rg.nodePermissions(t, "w"))) throw new rg.ErrnoError(f);
                        rg.hashRemoveNode(c);
                        try {
                            t.node_ops.rename(c, n, l), (c.parent = n);
                        } catch (r) {
                            throw r;
                        } finally {
                            rg.hashAddNode(c);
                        }
                    }
                },
                rmdir(r) {
                    var e = rg.lookupPath(r, {
                            parent: !0,
                        }).node,
                        t = rn.basename(r),
                        n = rg.lookupNode(e, t),
                        o = rg.mayDelete(e, t, !0);
                    if (o) throw new rg.ErrnoError(o);
                    if (!e.node_ops.rmdir) throw new rg.ErrnoError(63);
                    if (rg.isMountpoint(n)) throw new rg.ErrnoError(10);
                    e.node_ops.rmdir(e, t), rg.destroyNode(n);
                },
                readdir(r) {
                    var e = rg.lookupPath(r, {
                        follow: !0,
                    }).node;
                    if (!e.node_ops.readdir) throw new rg.ErrnoError(54);
                    return e.node_ops.readdir(e);
                },
                unlink(r) {
                    var e = rg.lookupPath(r, {
                        parent: !0,
                    }).node;
                    if (!e) throw new rg.ErrnoError(44);
                    var t = rn.basename(r),
                        n = rg.lookupNode(e, t),
                        o = rg.mayDelete(e, t, !1);
                    if (o) throw new rg.ErrnoError(o);
                    if (!e.node_ops.unlink) throw new rg.ErrnoError(63);
                    if (rg.isMountpoint(n)) throw new rg.ErrnoError(10);
                    e.node_ops.unlink(e, t), rg.destroyNode(n);
                },
                readlink(r) {
                    var e = rg.lookupPath(r).node;
                    if (!e) throw new rg.ErrnoError(44);
                    if (!e.node_ops.readlink) throw new rg.ErrnoError(28);
                    return e.node_ops.readlink(e);
                },
                stat(r, e) {
                    var t = rg.lookupPath(r, {
                        follow: !e,
                    }).node;
                    if (!t) throw new rg.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new rg.ErrnoError(63);
                    return t.node_ops.getattr(t);
                },
                lstat: (r) => rg.stat(r, !0),
                chmod(r, e, t) {
                    var n;
                    if (
                        !(n =
                            "string" == typeof r
                                ? rg.lookupPath(r, {
                                      follow: !t,
                                  }).node
                                : r).node_ops.setattr
                    )
                        throw new rg.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: (4095 & e) | (-4096 & n.mode),
                        ctime: Date.now(),
                    });
                },
                lchmod(r, e) {
                    rg.chmod(r, e, !0);
                },
                fchmod(r, e) {
                    var t = rg.getStreamChecked(r);
                    rg.chmod(t.node, e);
                },
                chown(r, e, t, n) {
                    var o;
                    if (
                        !(o =
                            "string" == typeof r
                                ? rg.lookupPath(r, {
                                      follow: !n,
                                  }).node
                                : r).node_ops.setattr
                    )
                        throw new rg.ErrnoError(63);
                    o.node_ops.setattr(o, {
                        timestamp: Date.now(),
                    });
                },
                lchown(r, e, t) {
                    rg.chown(r, e, t, !0);
                },
                fchown(r, e, t) {
                    var n = rg.getStreamChecked(r);
                    rg.chown(n.node, e, t);
                },
                truncate(r, e) {
                    if (e < 0) throw new rg.ErrnoError(28);
                    if ("string" == typeof r) {
                        var t;
                        t = rg.lookupPath(r, {
                            follow: !0,
                        }).node;
                    } else t = r;
                    if (!t.node_ops.setattr) throw new rg.ErrnoError(63);
                    if (rg.isDir(t.mode)) throw new rg.ErrnoError(31);
                    if (!rg.isFile(t.mode)) throw new rg.ErrnoError(28);
                    var n = rg.nodePermissions(t, "w");
                    if (n) throw new rg.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: e,
                        timestamp: Date.now(),
                    });
                },
                ftruncate(r, e) {
                    var t = rg.getStreamChecked(r);
                    if ((2097155 & t.flags) == 0) throw new rg.ErrnoError(28);
                    rg.truncate(t.node, e);
                },
                utime(r, e, t) {
                    var n = rg.lookupPath(r, {
                        follow: !0,
                    }).node;
                    n.node_ops.setattr(n, {
                        atime: e,
                        mtime: t,
                    });
                },
                open(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                    if ("" === e) throw new rg.ErrnoError(44);
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
                            a = rg.lookupPath(e, {
                                follow: !(131072 & t),
                                noent_okay: !0,
                            });
                        (o = a.node), (e = a.path);
                    }
                    var s = !1;
                    if (64 & t)
                        if (o) {
                            if (128 & t) throw new rg.ErrnoError(20);
                        } else (o = rg.mknod(e, n, 0)), (s = !0);
                    if (!o) throw new rg.ErrnoError(44);
                    if ((rg.isChrdev(o.mode) && (t &= -513), 65536 & t && !rg.isDir(o.mode)))
                        throw new rg.ErrnoError(54);
                    if (!s) {
                        var i = rg.mayOpen(o, t);
                        if (i) throw new rg.ErrnoError(i);
                    }
                    512 & t && !s && rg.truncate(o, 0), (t &= -131713);
                    var l = rg.createStream({
                        node: o,
                        path: rg.getPath(o),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: o.stream_ops,
                        ungotten: [],
                        error: !1,
                    });
                    return (
                        l.stream_ops.open && l.stream_ops.open(l),
                        !r.logReadFiles || 1 & t || e in rg.readFiles || (rg.readFiles[e] = 1),
                        l
                    );
                },
                close(r) {
                    if (rg.isClosed(r)) throw new rg.ErrnoError(8);
                    r.getdents && (r.getdents = null);
                    try {
                        r.stream_ops.close && r.stream_ops.close(r);
                    } catch (r) {
                        throw r;
                    } finally {
                        rg.closeStream(r.fd);
                    }
                    r.fd = null;
                },
                isClosed: (r) => null === r.fd,
                llseek(r, e, t) {
                    if (rg.isClosed(r)) throw new rg.ErrnoError(8);
                    if (!r.seekable || !r.stream_ops.llseek) throw new rg.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new rg.ErrnoError(28);
                    return (r.position = r.stream_ops.llseek(r, e, t)), (r.ungotten = []), r.position;
                },
                read(r, e, t, n, o) {
                    if (n < 0 || o < 0) throw new rg.ErrnoError(28);
                    if (rg.isClosed(r) || (2097155 & r.flags) == 1) throw new rg.ErrnoError(8);
                    if (rg.isDir(r.node.mode)) throw new rg.ErrnoError(31);
                    if (!r.stream_ops.read) throw new rg.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!r.seekable) throw new rg.ErrnoError(70);
                    } else o = r.position;
                    var s = r.stream_ops.read(r, e, t, n, o);
                    return a || (r.position += s), s;
                },
                write(r, e, t, n, o, a) {
                    if (n < 0 || o < 0) throw new rg.ErrnoError(28);
                    if (rg.isClosed(r) || (2097155 & r.flags) == 0) throw new rg.ErrnoError(8);
                    if (rg.isDir(r.node.mode)) throw new rg.ErrnoError(31);
                    if (!r.stream_ops.write) throw new rg.ErrnoError(28);
                    r.seekable && 1024 & r.flags && rg.llseek(r, 0, 2);
                    var s = void 0 !== o;
                    if (s) {
                        if (!r.seekable) throw new rg.ErrnoError(70);
                    } else o = r.position;
                    var i = r.stream_ops.write(r, e, t, n, o, a);
                    return s || (r.position += i), i;
                },
                allocate(r, e, t) {
                    if (rg.isClosed(r)) throw new rg.ErrnoError(8);
                    if (e < 0 || t <= 0) throw new rg.ErrnoError(28);
                    if ((2097155 & r.flags) == 0) throw new rg.ErrnoError(8);
                    if (!rg.isFile(r.node.mode) && !rg.isDir(r.node.mode)) throw new rg.ErrnoError(43);
                    if (!r.stream_ops.allocate) throw new rg.ErrnoError(138);
                    r.stream_ops.allocate(r, e, t);
                },
                mmap(r, e, t, n, o) {
                    if (((2 & n) != 0 && (2 & o) == 0 && (2097155 & r.flags) != 2) || (2097155 & r.flags) == 1)
                        throw new rg.ErrnoError(2);
                    if (!r.stream_ops.mmap) throw new rg.ErrnoError(43);
                    if (!e) throw new rg.ErrnoError(28);
                    return r.stream_ops.mmap(r, e, t, n, o);
                },
                msync: (r, e, t, n, o) => (r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, o) : 0),
                ioctl(r, e, t) {
                    if (!r.stream_ops.ioctl) throw new rg.ErrnoError(59);
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
                        n = rg.open(r, e.flags),
                        o = rg.stat(r).size,
                        a = new Uint8Array(o);
                    return (
                        rg.read(n, a, 0, o, 0),
                        "utf8" === e.encoding ? (t = ri(a)) : "binary" === e.encoding && (t = a),
                        rg.close(n),
                        t
                    );
                },
                writeFile(r, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t.flags = t.flags || 577;
                    var n = rg.open(r, t.flags, t.mode);
                    if ("string" == typeof e) {
                        var o = new Uint8Array(rc(e) + 1),
                            a = ru(e, o, 0, o.length);
                        rg.write(n, o, 0, a, void 0, t.canOwn);
                    } else if (ArrayBuffer.isView(e)) rg.write(n, e, 0, e.byteLength, void 0, t.canOwn);
                    else throw Error("Unsupported data type");
                    rg.close(n);
                },
                cwd: () => rg.currentPath,
                chdir(r) {
                    var e = rg.lookupPath(r, {
                        follow: !0,
                    });
                    if (null === e.node) throw new rg.ErrnoError(44);
                    if (!rg.isDir(e.node.mode)) throw new rg.ErrnoError(54);
                    var t = rg.nodePermissions(e.node, "x");
                    if (t) throw new rg.ErrnoError(t);
                    rg.currentPath = e.path;
                },
                createDefaultDirectories() {
                    rg.mkdir("/tmp"), rg.mkdir("/home"), rg.mkdir("/home/web_user");
                },
                createDefaultDevices() {
                    rg.mkdir("/dev"),
                        rg.registerDevice(rg.makedev(1, 3), {
                            read: () => 0,
                            write: (r, e, t, n, o) => n,
                            llseek: () => 0,
                        }),
                        rg.mkdev("/dev/null", rg.makedev(1, 3)),
                        rd.register(rg.makedev(5, 0), rd.default_tty_ops),
                        rd.register(rg.makedev(6, 0), rd.default_tty1_ops),
                        rg.mkdev("/dev/tty", rg.makedev(5, 0)),
                        rg.mkdev("/dev/tty1", rg.makedev(6, 0));
                    var r = new Uint8Array(1024),
                        e = 0,
                        t = () => (0 === e && (e = ro(r).byteLength), r[--e]);
                    rg.createDevice("/dev", "random", t),
                        rg.createDevice("/dev", "urandom", t),
                        rg.mkdir("/dev/shm"),
                        rg.mkdir("/dev/shm/tmp");
                },
                createSpecialDirectories() {
                    rg.mkdir("/proc");
                    var r = rg.mkdir("/proc/self");
                    rg.mkdir("/proc/self/fd"),
                        rg.mount(
                            {
                                mount() {
                                    var e = rg.createNode(r, "fd", 16895, 73);
                                    return (
                                        (e.stream_ops = {
                                            llseek: rp.stream_ops.llseek,
                                        }),
                                        (e.node_ops = {
                                            lookup(r, e) {
                                                var t = +e,
                                                    n = rg.getStreamChecked(t),
                                                    o = {
                                                        parent: null,
                                                        mount: {
                                                            mountpoint: "fake",
                                                        },
                                                        node_ops: {
                                                            readlink: () => n.path,
                                                        },
                                                        id: t + 1,
                                                    };
                                                return (o.parent = o), o;
                                            },
                                            readdir: () =>
                                                Array.from(rg.streams.entries())
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
                    r ? rg.createDevice("/dev", "stdin", r) : rg.symlink("/dev/tty", "/dev/stdin"),
                        e ? rg.createDevice("/dev", "stdout", null, e) : rg.symlink("/dev/tty", "/dev/stdout"),
                        t ? rg.createDevice("/dev", "stderr", null, t) : rg.symlink("/dev/tty1", "/dev/stderr"),
                        rg.open("/dev/stdin", 0),
                        rg.open("/dev/stdout", 1),
                        rg.open("/dev/stderr", 1);
                },
                staticInit() {
                    (rg.nameTable = Array(4096)),
                        rg.mount(rp, {}, "/"),
                        rg.createDefaultDirectories(),
                        rg.createDefaultDevices(),
                        rg.createSpecialDirectories(),
                        (rg.filesystems = {
                            MEMFS: rp,
                        });
                },
                init(e, t, n) {
                    (rg.initialized = !0),
                        null != e || (e = r.stdin),
                        null != t || (t = r.stdout),
                        null != n || (n = r.stderr),
                        rg.createStandardStreams(e, t, n);
                },
                quit() {
                    rg.initialized = !1;
                    for (var r = 0; r < rg.streams.length; r++) {
                        var e = rg.streams[r];
                        e && rg.close(e);
                    }
                },
                findObject(r, e) {
                    var t = rg.analyzePath(r, e);
                    return t.exists ? t.object : null;
                },
                analyzePath(r, e) {
                    try {
                        var t = rg.lookupPath(r, {
                            follow: !e,
                        });
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
                        var t = rg.lookupPath(r, {
                            parent: !0,
                        });
                        (n.parentExists = !0),
                            (n.parentPath = t.path),
                            (n.parentObject = t.node),
                            (n.name = rn.basename(r)),
                            (t = rg.lookupPath(r, {
                                follow: !e,
                            })),
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
                    r = "string" == typeof r ? r : rg.getPath(r);
                    for (var o = e.split("/").reverse(); o.length; ) {
                        var a = o.pop();
                        if (a) {
                            var s = rn.join2(r, a);
                            try {
                                rg.mkdir(s);
                            } catch (r) {}
                            r = s;
                        }
                    }
                    return s;
                },
                createFile(r, e, t, n, o) {
                    var a = rn.join2("string" == typeof r ? r : rg.getPath(r), e),
                        s = ry(n, o);
                    return rg.create(a, s);
                },
                createDataFile(r, e, t, n, o, a) {
                    var s = e;
                    r && ((r = "string" == typeof r ? r : rg.getPath(r)), (s = e ? rn.join2(r, e) : r));
                    var i = ry(n, o),
                        l = rg.create(s, i);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var c = Array(t.length), u = 0, d = t.length; u < d; ++u) c[u] = t.charCodeAt(u);
                            t = c;
                        }
                        rg.chmod(l, 146 | i);
                        var f = rg.open(l, 577);
                        rg.write(f, t, 0, t.length, 0, a), rg.close(f), rg.chmod(l, i);
                    }
                },
                createDevice(r, e, t, n) {
                    var o,
                        a = rn.join2("string" == typeof r ? r : rg.getPath(r), e),
                        s = ry(!!t, !!n);
                    null != (o = rg.createDevice).major || (o.major = 64);
                    var i = rg.makedev(rg.createDevice.major++, 0);
                    return (
                        rg.registerDevice(i, {
                            open(r) {
                                r.seekable = !1;
                            },
                            close(r) {
                                var e;
                                (null == n || null == (e = n.buffer) ? void 0 : e.length) && n(10);
                            },
                            read(r, e, n, o, a) {
                                for (var s, i = 0, l = 0; l < o; l++) {
                                    try {
                                        s = t();
                                    } catch (r) {
                                        throw new rg.ErrnoError(29);
                                    }
                                    if (void 0 === s && 0 === i) throw new rg.ErrnoError(6);
                                    if (null == s) break;
                                    i++, (e[n + l] = s);
                                }
                                return i && (r.node.atime = Date.now()), i;
                            },
                            write(r, e, t, o, a) {
                                for (var s = 0; s < o; s++)
                                    try {
                                        n(e[t + s]);
                                    } catch (r) {
                                        throw new rg.ErrnoError(29);
                                    }
                                return o && (r.node.mtime = r.node.ctime = Date.now()), s;
                            },
                        }),
                        rg.mkdev(a, s, i)
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
                        throw new rg.ErrnoError(29);
                    }
                },
                createLazyFile(r, e, t, n, o) {
                    if ("u" > typeof XMLHttpRequest) {
                        var a;
                        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    }
                    var a = {
                            isDevice: !1,
                            url: t,
                        },
                        s = rg.createFile(r, e, a, n, o);
                    a.contents ? (s.contents = a.contents) : a.url && ((s.contents = null), (s.url = a.url)),
                        Object.defineProperties(s, {
                            usedBytes: {
                                get: function () {
                                    return this.contents.length;
                                },
                            },
                        });
                    var i = {};

                    function l(r, e, t, n, o) {
                        var a = r.node.contents;
                        if (o >= a.length) return 0;
                        var s = Math.min(a.length - o, n);
                        if (a.slice) for (var i = 0; i < s; i++) e[t + i] = a[o + i];
                        else for (var i = 0; i < s; i++) e[t + i] = a.get(o + i);
                        return s;
                    }
                    return (
                        Object.keys(s.stream_ops).forEach((r) => {
                            var e = s.stream_ops[r];
                            i[r] = function () {
                                for (var r = arguments.length, t = Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                                return rg.forceLoadFile(s), e(...t);
                            };
                        }),
                        (i.read = (r, e, t, n, o) => (rg.forceLoadFile(s), l(r, e, t, n, o))),
                        (i.mmap = (r, e, t, n, o) => {
                            rg.forceLoadFile(s);
                            var a = rh(e);
                            if (!a) throw new rg.ErrnoError(48);
                            return (
                                l(r, c, a, e, t),
                                {
                                    ptr: a,
                                    allocated: !0,
                                }
                            );
                        }),
                        (s.stream_ops = i),
                        s
                    );
                },
            },
            rw = (r, e) => (r ? ri(u, r, e) : ""),
            rE = {
                DEFAULT_POLLMASK: 5,
                calculateAt(r, e, t) {
                    if (rn.isAbs(e)) return e;
                    if (-100 === r) n = rg.cwd();
                    else {
                        var n;
                        n = rE.getStreamFromFD(r).path;
                    }
                    if (0 == e.length) {
                        if (!t) throw new rg.ErrnoError(44);
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
                        s = n.ctime.getTime();
                    return (
                        (v[(t + 40) >> 3] = BigInt(Math.floor(o / 1e3))),
                        (p[(t + 48) >> 2] = (o % 1e3) * 1e6),
                        (v[(t + 56) >> 3] = BigInt(Math.floor(a / 1e3))),
                        (p[(t + 64) >> 2] = (a % 1e3) * 1e6),
                        (v[(t + 72) >> 3] = BigInt(Math.floor(s / 1e3))),
                        (p[(t + 80) >> 2] = (s % 1e3) * 1e6),
                        (v[(t + 88) >> 3] = BigInt(n.ino)),
                        0
                    );
                },
                doMsync(r, e, t, n, o) {
                    if (!rg.isFile(e.node.mode)) throw new rg.ErrnoError(43);
                    if (2 & n) return 0;
                    var a = u.slice(r, r + t);
                    rg.msync(e, a, o, t, n);
                },
                getStreamFromFD: (r) => rg.getStreamChecked(r),
                varargs: void 0,
                getStr: (r) => rw(r),
            },
            rb = (r, e, t) => ru(r, u, e, t),
            r_ = (r) => {
                if (null === r) return "null";
                var e = typeof r;
                return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r;
            },
            rk = (r) => {
                for (var e = "", t = r; u[t]; ) e += E[u[t++]];
                return e;
            },
            rP = {},
            rT = {},
            rC = {},
            rA = (r) => {
                throw new b(r);
            },
            r$ = (r) => {
                throw new _(r);
            },
            rF = (r, e, t) => {
                function n(e) {
                    var n = t(e);
                    n.length !== r.length && r$("Mismatched type converter count");
                    for (var o = 0; o < r.length; ++o) rD(r[o], n[o]);
                }
                r.forEach((r) => (rC[r] = e));
                var o = Array(e.length),
                    a = [],
                    s = 0;
                e.forEach((r, e) => {
                    rT.hasOwnProperty(r)
                        ? (o[e] = rT[r])
                        : (a.push(r),
                          rP.hasOwnProperty(r) || (rP[r] = []),
                          rP[r].push(() => {
                              (o[e] = rT[r]), ++s === a.length && n(o);
                          }));
                }),
                    0 === a.length && n(o);
            };

        function rD(r, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (function (r, e) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var n = e.name;
                if (
                    (r || rA('type "'.concat(n, '" must have a positive integer typeid pointer')), rT.hasOwnProperty(r))
                )
                    if (t.ignoreDuplicateRegistrations) return;
                    else rA("Cannot register type '".concat(n, "' twice"));
                if (((rT[r] = e), delete rC[r], rP.hasOwnProperty(r))) {
                    var o = rP[r];
                    delete rP[r], o.forEach((r) => r());
                }
            })(r, e, t);
        }
        var rS = (r, e, t) => {
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
            rj = (r) => {
                rA(r.$$.ptrType.registeredClass.name + " instance already deleted");
            },
            rx = !1,
            rO = (r) => {},
            rM = (r) => {
                (r.count.value -= 1),
                    0 === r.count.value &&
                        (r.smartPtr
                            ? r.smartPtrType.rawDestructor(r.smartPtr)
                            : r.ptrType.registeredClass.rawDestructor(r.ptr));
            },
            rW = (r, e, t) => {
                if (e === t) return r;
                if (void 0 === t.baseClass) return null;
                var n = rW(r, e, t.baseClass);
                return null === n ? null : t.downcast(n);
            },
            rN = {},
            rR = {},
            rB = (r, e) => (
                (e.ptrType && e.ptr) || r$("makeClassHandle requires ptr and ptrType"),
                !!e.smartPtrType != !!e.smartPtr && r$("Both smartPtrType and smartPtr must be specified"),
                (e.count = {
                    value: 1,
                }),
                rU(
                    Object.create(r, {
                        $$: {
                            value: e,
                            writable: !0,
                        },
                    }),
                )
            ),
            rU = (r) =>
                "u" < typeof FinalizationRegistry
                    ? ((rU = (r) => r), r)
                    : ((rx = new FinalizationRegistry((r) => {
                          rM(r.$$);
                      })),
                      (rU = (r) => {
                          var e = r.$$;
                          return (
                              e.smartPtr &&
                                  rx.register(
                                      r,
                                      {
                                          $$: e,
                                      },
                                      r,
                                  ),
                              r
                          );
                      }),
                      (rO = (r) => rx.unregister(r)),
                      rU(r)),
            rz = [],
            rI = () => {
                for (; rz.length; ) {
                    var r = rz.pop();
                    (r.$$.deleteScheduled = !1), r.delete();
                }
            };

        function rV() {}
        var rL = (r, e) =>
                Object.defineProperty(e, "name", {
                    value: r,
                }),
            rH = (r, e, t) => {
                if (void 0 === r[e].overloadTable) {
                    var n = r[e];
                    (r[e] = function () {
                        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        return (
                            r[e].overloadTable.hasOwnProperty(o.length) ||
                                rA(
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
            rq = (e, t, n) => {
                r.hasOwnProperty(e)
                    ? ((void 0 === n || (void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[n])) &&
                          rA("Cannot register public name '".concat(e, "' twice")),
                      rH(r, e, e),
                      r[e].overloadTable.hasOwnProperty(n) &&
                          rA(
                              "Cannot register multiple overloads of a function with the same number of arguments (".concat(
                                  n,
                                  ")!",
                              ),
                          ),
                      (r[e].overloadTable[n] = t))
                    : ((r[e] = t), (r[e].argCount = n));
            };

        function rG(r, e, t, n, o, a, s, i) {
            (this.name = r),
                (this.constructor = e),
                (this.instancePrototype = t),
                (this.rawDestructor = n),
                (this.baseClass = o),
                (this.getActualType = a),
                (this.upcast = s),
                (this.downcast = i),
                (this.pureVirtualFunctions = []);
        }
        var rX = (r, e, t) => {
            for (; e !== t; )
                e.upcast || rA("Expected null or instance of ".concat(t.name, ", got an instance of ").concat(e.name)),
                    (r = e.upcast(r)),
                    (e = e.baseClass);
            return r;
        };

        function rY(r, e) {
            if (null === e) return this.isReference && rA("null is not a valid ".concat(this.name)), 0;
            e.$$ || rA('Cannot pass "'.concat(r_(e), '" as a ').concat(this.name)),
                e.$$.ptr || rA("Cannot pass deleted object as a pointer of type ".concat(this.name));
            var t = e.$$.ptrType.registeredClass;
            return rX(e.$$.ptr, t, this.registeredClass);
        }

        function rK(r, e) {
            if (null === e)
                return (this.isReference && rA("null is not a valid ".concat(this.name)), this.isSmartPointer)
                    ? ((t = this.rawConstructor()), null !== r && r.push(this.rawDestructor, t), t)
                    : 0;
            (e && e.$$) || rA('Cannot pass "'.concat(r_(e), '" as a ').concat(this.name)),
                e.$$.ptr || rA("Cannot pass deleted object as a pointer of type ".concat(this.name)),
                !this.isConst &&
                    e.$$.ptrType.isConst &&
                    rA(
                        "Cannot convert argument of type "
                            .concat(
                                e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name,
                                " to parameter type ",
                            )
                            .concat(this.name),
                    );
            var t,
                n = e.$$.ptrType.registeredClass;
            if (((t = rX(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
                switch (
                    (void 0 === e.$$.smartPtr && rA("Passing raw pointer to smart pointer is illegal"),
                    this.sharingPolicy)
                ) {
                    case 0:
                        e.$$.smartPtrType === this
                            ? (t = e.$$.smartPtr)
                            : rA(
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
                                eo.toHandle(() => o.delete()),
                            )),
                                null !== r && r.push(this.rawDestructor, t);
                        }
                        break;
                    default:
                        rA("Unsupporting sharing policy");
                }
            return t;
        }

        function rZ(r, e) {
            if (null === e) return this.isReference && rA("null is not a valid ".concat(this.name)), 0;
            e.$$ || rA('Cannot pass "'.concat(r_(e), '" as a ').concat(this.name)),
                e.$$.ptr || rA("Cannot pass deleted object as a pointer of type ".concat(this.name)),
                e.$$.ptrType.isConst &&
                    rA(
                        "Cannot convert argument of type "
                            .concat(e.$$.ptrType.name, " to parameter type ")
                            .concat(this.name),
                    );
            var t = e.$$.ptrType.registeredClass;
            return rX(e.$$.ptr, t, this.registeredClass);
        }

        function rJ(r) {
            return this.fromWireType(p[r >> 2]);
        }

        function rQ(r, e, t, n, o, a, s, i, l, c, u) {
            (this.name = r),
                (this.registeredClass = e),
                (this.isReference = t),
                (this.isConst = n),
                (this.isSmartPointer = o),
                (this.pointeeType = a),
                (this.sharingPolicy = s),
                (this.rawGetPointee = i),
                (this.rawConstructor = l),
                (this.rawShare = c),
                (this.rawDestructor = u),
                o || void 0 !== e.baseClass
                    ? (this.toWireType = rK)
                    : (n ? (this.toWireType = rY) : (this.toWireType = rZ), (this.destructorFunction = null));
        }
        var r0 = (e, t, n) => {
                r.hasOwnProperty(e) || r$("Replacing nonexistent public symbol"),
                    void 0 !== r[e].overloadTable && void 0 !== n
                        ? (r[e].overloadTable[n] = t)
                        : ((r[e] = t), (r[e].argCount = n));
            },
            r1 = [],
            r2 = (r, e) => {
                r = rk(r);
                var t,
                    n = ((t = r1[e]) || (e >= r1.length && (r1.length = e + 1), (r1[e] = t = P.get(e))), t);
                return (
                    "function" != typeof n && rA("unknown function pointer with signature ".concat(r, ": ").concat(e)),
                    n
                );
            },
            r4 = (r) => {
                var e = eC(r),
                    t = rk(e);
                return e$(e), t;
            },
            r5 = (r, e) => {
                var t = [],
                    n = {};
                throw (
                    (e.forEach(function r(e) {
                        if (!n[e] && !rT[e]) {
                            if (rC[e]) return void rC[e].forEach(r);
                            t.push(e), (n[e] = !0);
                        }
                    }),
                    new T("".concat(r, ": ") + t.map(r4).join([", "])))
                );
            },
            r6 = (r, e) => {
                for (var t = [], n = 0; n < r; n++) t.push(p[(e + 4 * n) >> 2]);
                return t;
            },
            r3 = (r) => {
                for (; r.length; ) {
                    var e = r.pop();
                    r.pop()(e);
                }
            };

        function r8(r) {
            for (var e = 1; e < r.length; ++e) if (null !== r[e] && void 0 === r[e].destructorFunction) return !0;
            return !1;
        }

        function r7(r, e) {
            if (!(r instanceof Function))
                throw TypeError("new_ called with constructor type ".concat(typeof r, " which is not a function"));
            var t = rL(r.name || "unknownFunctionName", function () {});
            t.prototype = r.prototype;
            var n = new t(),
                o = r.apply(n, e);
            return o instanceof Object ? o : n;
        }

        function r9(r, e, t, n, o, a) {
            var s = e.length;
            s < 2 && rA("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (
                var i = null !== e[1] && null !== t,
                    l = r8(e),
                    c = "void" !== e[0].name,
                    u = [r, rA, n, o, r3, e[0], e[1]],
                    d = 0;
                d < s - 2;
                ++d
            )
                u.push(e[d + 2]);
            if (!l)
                for (var d = i ? 1 : 2; d < e.length; ++d)
                    null !== e[d].destructorFunction && u.push(e[d].destructorFunction);
            let [f, h] = (function (r, e, t, n) {
                var o = r8(r),
                    a = r.length - 2,
                    s = [],
                    i = ["fn"];
                e && i.push("thisWired");
                for (var l = 0; l < a; ++l) s.push("arg".concat(l)), i.push("arg".concat(l, "Wired"));
                (s = s.join(",")), (i = i.join(","));
                var c = "return function (".concat(s, ") {\n");
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
                if (((c += (t || n ? "var rv = " : "") + "invoker(".concat(i, ");\n")), o))
                    c += "runDestructors(destructors);\n";
                else
                    for (var l = e ? 1 : 2; l < r.length; ++l) {
                        var f = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
                        null !== r[l].destructorFunction &&
                            ((c += "".concat(f, "_dtor(").concat(f, ");\n")), d.push("".concat(f, "_dtor")));
                    }
                return t && (c += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [d, (c += "}\n")];
            })(e, i, c, a);
            return f.push(h), rL(r, r7(Function, f)(...u));
        }
        var er = (r) => {
                let e = (r = r.trim()).indexOf("(");
                return -1 !== e ? r.substr(0, e) : r;
            },
            ee = [],
            et = [],
            en = (r) => {
                r > 9 && 0 == --et[r + 1] && ((et[r] = void 0), ee.push(r));
            },
            eo = {
                toValue: (r) => (r || rA("Cannot use deleted val. handle = " + r), et[r]),
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
                            let e = ee.pop() || et.length;
                            return (et[e] = r), (et[e + 1] = 1), e;
                        }
                    }
                },
            },
            ea = {
                name: "emscripten::val",
                fromWireType: (r) => {
                    var e = eo.toValue(r);
                    return en(r), e;
                },
                toWireType: (r, e) => eo.toHandle(e),
                argPackAdvance: 8,
                readValueFromPointer: rJ,
                destructorFunction: null,
            },
            es = (r, e) => {
                var t = rT[r];
                return void 0 === t && rA("".concat(e, " has unknown type ").concat(r4(r))), t;
            },
            ei = "u" > typeof TextDecoder ? new TextDecoder("utf-16le") : void 0,
            el = (r, e) => {
                for (var t = r, n = t >> 1, o = n + e / 2; !(n >= o) && f[n]; ) ++n;
                if ((t = n << 1) - r > 32 && ei) return ei.decode(u.subarray(r, t));
                for (var a = "", s = 0; !(s >= e / 2); ++s) {
                    var i = d[(r + 2 * s) >> 1];
                    if (0 == i) break;
                    a += String.fromCharCode(i);
                }
                return a;
            },
            ec = (r, e, t) => {
                if ((null != t || (t = 0x7fffffff), t < 2)) return 0;
                for (var n = e, o = (t -= 2) < 2 * r.length ? t / 2 : r.length, a = 0; a < o; ++a) {
                    var s = r.charCodeAt(a);
                    (d[e >> 1] = s), (e += 2);
                }
                return (d[e >> 1] = 0), e - n;
            },
            eu = (r) => 2 * r.length,
            ed = (r, e) => {
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
            ef = (r, e, t) => {
                if ((null != t || (t = 0x7fffffff), t < 4)) return 0;
                for (var n = e, o = n + t - 4, a = 0; a < r.length; ++a) {
                    var s = r.charCodeAt(a);
                    if (
                        (s >= 55296 && s <= 57343 && (s = (65536 + ((1023 & s) << 10)) | (1023 & r.charCodeAt(++a))),
                        (h[e >> 2] = s),
                        (e += 4) + 4 > o)
                    )
                        break;
                }
                return (h[e >> 2] = 0), e - n;
            },
            eh = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n >= 55296 && n <= 57343 && ++t, (e += 4);
                }
                return e;
            },
            ep = (r, e, t) => {
                var n = [],
                    o = r.toWireType(n, t);
                return n.length && (p[e >> 2] = eo.toHandle(n)), o;
            },
            em = [],
            ev = {},
            ey = (r) => {
                var e = ev[r];
                return void 0 === e ? rk(r) : e;
            },
            eg = (r) => (r < -0x20000000000000 || r > 0x20000000000000 ? NaN : Number(r)),
            ew = () => Date.now(),
            eE = (r) => {
                var e = ((r - l.buffer.byteLength + 65535) / 65536) | 0;
                try {
                    return l.grow(e), R(), 1;
                } catch (r) {}
            },
            eb = {},
            e_ = () => {
                if (!e_.strings) {
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
                    for (var e in eb) void 0 === eb[e] ? delete r[e] : (r[e] = eb[e]);
                    var t = [];
                    for (var e in r) t.push("".concat(e, "=").concat(r[e]));
                    e_.strings = t;
                }
                return e_.strings;
            };
        (rg.createPreloadedFile = (r, e, t, n, o, a, s, i, l, c) => {
            var u = e ? ra.resolve(rn.join2(r, e)) : r,
                d = "cp ".concat(u);

            function f(t) {
                var f, h;

                function p(t) {
                    null == c || c(), i || rg.createDataFile(r, e, t, n, o, l), null == a || a(), H(d);
                }
                (f = () => {
                    null == s || s(), H(d);
                }),
                    "u" > typeof Browser && Browser.init(),
                    (h = !1),
                    rv.forEach((r) => {
                        !h && r.canHandle(u) && (r.handle(t, u, p, f), (h = !0));
                    }),
                    h || p(t);
            }
            L(d), "string" == typeof t ? rm(t).then(f, s) : f(t);
        }),
            rg.staticInit(),
            (rp.doesNotExistError = new rg.ErrnoError(44)),
            (rp.doesNotExistError.stack = "<generic error, no stack>");
        for (var ek = Array(256), eP = 0; eP < 256; ++eP) ek[eP] = String.fromCharCode(eP);
        (E = ek),
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
            Object.assign(rV.prototype, {
                isAliasOf(r) {
                    if (!(this instanceof rV) || !(r instanceof rV)) return !1;
                    var e = this.$$.ptrType.registeredClass,
                        t = this.$$.ptr;
                    r.$$ = r.$$;
                    for (var n = r.$$.ptrType.registeredClass, o = r.$$.ptr; e.baseClass; )
                        (t = e.upcast(t)), (e = e.baseClass);
                    for (; n.baseClass; ) (o = n.upcast(o)), (n = n.baseClass);
                    return e === n && t === o;
                },
                clone() {
                    if ((this.$$.ptr || rj(this), this.$$.preservePointerOnDelete))
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
                    this.$$.ptr || rj(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            rA("Object already scheduled for deletion"),
                        rO(this),
                        rM(this.$$),
                        this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
                },
                isDeleted() {
                    return !this.$$.ptr;
                },
                deleteLater() {
                    return (
                        this.$$.ptr || rj(this),
                        this.$$.deleteScheduled &&
                            !this.$$.preservePointerOnDelete &&
                            rA("Object already scheduled for deletion"),
                        rz.push(this),
                        1 === rz.length && k && k(rI),
                        (this.$$.deleteScheduled = !0),
                        this
                    );
                },
            }),
            Object.assign(rQ.prototype, {
                getPointee(r) {
                    return this.rawGetPointee && (r = this.rawGetPointee(r)), r;
                },
                destructor(r) {
                    var e;
                    null == (e = this.rawDestructor) || e.call(this, r);
                },
                argPackAdvance: 8,
                readValueFromPointer: rJ,
                fromWireType: function (r) {
                    var e,
                        t = this.getPointee(r);
                    if (!t) return this.destructor(r), null;
                    var n =
                        rR[
                            ((r, e) => {
                                for (void 0 === e && rA("ptr should not be undefined"); r.baseClass; )
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
                            ? rB(this.registeredClass.instancePrototype, {
                                  ptrType: this.pointeeType,
                                  ptr: t,
                                  smartPtrType: this,
                                  smartPtr: r,
                              })
                            : rB(this.registeredClass.instancePrototype, {
                                  ptrType: this,
                                  ptr: r,
                              });
                    }
                    var s = rN[this.registeredClass.getActualType(t)];
                    if (!s) return a.call(this);
                    e = this.isConst ? s.constPointerType : s.pointerType;
                    var i = rW(t, this.registeredClass, e.registeredClass);
                    return null === i
                        ? a.call(this)
                        : this.isSmartPointer
                          ? rB(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: i,
                                smartPtrType: this,
                                smartPtr: r,
                            })
                          : rB(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: i,
                            });
                },
            }),
            ($ = Error),
            ((F = rL("UnboundTypeError", function (r) {
                (this.name = "UnboundTypeError"), (this.message = r);
                var e = Error(r).stack;
                void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
            })).prototype = Object.create($.prototype)),
            (F.prototype.constructor = F),
            (F.prototype.toString = function () {
                return void 0 === this.message ? this.name : "".concat(this.name, ": ").concat(this.message);
            }),
            (T = r.UnboundTypeError = F),
            et.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            (r.count_emval_handles = () => et.length / 2 - 5 - ee.length);
        var eT = {
            a: (r, e, t) => {
                throw (new Q(r).init(e, t), (rr = r), re++, rr);
            },
            x: function (r, e, t) {
                rE.varargs = t;
                try {
                    var n = rE.getStreamFromFD(r);
                    switch (e) {
                        case 0:
                            var o = rt();
                            if (o < 0) break;
                            for (; rg.streams[o]; ) o++;
                            return rg.dupStream(n, o).fd;
                        case 1:
                        case 2:
                        case 13:
                        case 14:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = rt();
                            return (n.flags |= o), 0;
                        case 12:
                            var o = rt();
                            return (d[(o + 0) >> 1] = 2), 0;
                    }
                    return -28;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            P: function (r, e) {
                try {
                    var t = rE.getStreamFromFD(r);
                    return rE.doStat(rg.stat, t.path, e);
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            G: function (r, e, t) {
                try {
                    var n = rE.getStreamFromFD(r);
                    n.getdents || (n.getdents = rg.readdir(n.path));
                    for (
                        var o = 0,
                            a = rg.llseek(n, 0, 1),
                            s = Math.floor(a / 280),
                            i = Math.min(n.getdents.length, s + Math.floor(t / 280)),
                            l = s;
                        l < i;
                        l++
                    ) {
                        var u,
                            f,
                            h,
                            p = n.getdents[l];
                        if ("." === p) (u = n.node.id), (f = 4);
                        else if (".." === p)
                            (u = rg.lookupPath(n.path, {
                                parent: !0,
                            }).node.id),
                                (f = 4);
                        else {
                            try {
                                h = rg.lookupNode(n.node, p);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 28) continue;
                                throw r;
                            }
                            (u = h.id),
                                (f = rg.isChrdev(h.mode) ? 2 : rg.isDir(h.mode) ? 4 : rg.isLink(h.mode) ? 10 : 8);
                        }
                        (v[(e + o) >> 3] = BigInt(u)),
                            (v[(e + o + 8) >> 3] = BigInt((l + 1) * 280)),
                            (d[(e + o + 16) >> 1] = 280),
                            (c[e + o + 18] = f),
                            rb(p, e + o + 19, 256),
                            (o += 280);
                    }
                    return rg.llseek(n, 280 * l, 0), o;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            s: function (r, e, t) {
                rE.varargs = t;
                try {
                    var n = rE.getStreamFromFD(r);
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
                                    a = rt();
                                (h[a >> 2] = o.c_iflag || 0),
                                    (h[(a + 4) >> 2] = o.c_oflag || 0),
                                    (h[(a + 8) >> 2] = o.c_cflag || 0),
                                    (h[(a + 12) >> 2] = o.c_lflag || 0);
                                for (var s = 0; s < 32; s++) c[a + s + 17] = o.c_cc[s] || 0;
                            }
                            return 0;
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tcsets) {
                                for (
                                    var a = rt(),
                                        i = h[a >> 2],
                                        l = h[(a + 4) >> 2],
                                        u = h[(a + 8) >> 2],
                                        f = h[(a + 12) >> 2],
                                        p = [],
                                        s = 0;
                                    s < 32;
                                    s++
                                )
                                    p.push(c[a + s + 17]);
                                return n.tty.ops.ioctl_tcsets(n.tty, e, {
                                    c_iflag: i,
                                    c_oflag: l,
                                    c_cflag: u,
                                    c_lflag: f,
                                    c_cc: p,
                                });
                            }
                            return 0;
                        case 21519:
                            if (!n.tty) return -59;
                            var a = rt();
                            return (h[a >> 2] = 0), 0;
                        case 21520:
                            if (!n.tty) return -59;
                            return -28;
                        case 21531:
                            var a = rt();
                            return rg.ioctl(n, e, a);
                        case 21523:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tiocgwinsz) {
                                var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                    a = rt();
                                (d[a >> 1] = m[0]), (d[(a + 2) >> 1] = m[1]);
                            }
                            return 0;
                        default:
                            return -28;
                    }
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            M: function (r, e) {
                try {
                    return (r = rE.getStr(r)), rE.doStat(rg.lstat, r, e);
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            N: function (r, e, t, n) {
                try {
                    e = rE.getStr(e);
                    var o = 256 & n,
                        a = 4096 & n;
                    return (n &= -6401), (e = rE.calculateAt(r, e, a)), rE.doStat(o ? rg.lstat : rg.stat, e, t);
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            y: function (r, e, t, n) {
                rE.varargs = n;
                try {
                    (e = rE.getStr(e)), (e = rE.calculateAt(r, e));
                    var o = n ? rt() : 0;
                    return rg.open(e, t, o).fd;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            O: function (r, e) {
                try {
                    return (r = rE.getStr(r)), rE.doStat(rg.stat, r, e);
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            R: () => q(""),
            B: (r, e, t, n, o) => {
                var a = -1 != (e = rk(e)).indexOf("u");
                rD(r, {
                    name: e,
                    fromWireType: (r) => r,
                    toWireType: function (r, e) {
                        if ("bigint" != typeof e && "number" != typeof e)
                            throw TypeError('Cannot convert "'.concat(r_(e), '" to ').concat(this.name));
                        return "number" == typeof e && (e = BigInt(e)), e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rS(e, t, !a),
                    destructorFunction: null,
                });
            },
            V: (r, e, t, n) => {
                rD(r, {
                    name: (e = rk(e)),
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
            m: (r, e, t, n, o, a, s, i, l, c, u, d, f) => {
                (u = rk(u)), (a = r2(o, a)), i && (i = r2(s, i)), c && (c = r2(l, c)), (f = r2(d, f));
                var h,
                    p,
                    m =
                        (p = (h = (h = u).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) >= 48 && p <= 57
                            ? "_".concat(h)
                            : h;
                rq(m, function () {
                    r5("Cannot construct ".concat(u, " due to unbound types"), [n]);
                }),
                    rF([r, e, t], n ? [n] : [], (e) => {
                        e = e[0];
                        var t,
                            o,
                            s = n ? (t = e.registeredClass).instancePrototype : rV.prototype,
                            l = rL(u, function () {
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
                            d = Object.create(s, {
                                constructor: {
                                    value: l,
                                },
                            });
                        l.prototype = d;
                        var h = new rG(u, l, d, f, t, a, i, c);
                        h.baseClass &&
                            (null != (o = h.baseClass).__derivedClasses || (o.__derivedClasses = []),
                            h.baseClass.__derivedClasses.push(h));
                        var p = new rQ(u, h, !0, !1, !1),
                            v = new rQ(u + "*", h, !1, !1, !1),
                            y = new rQ(u + " const*", h, !1, !0, !1);
                        return (
                            (rN[r] = {
                                pointerType: v,
                                constPointerType: y,
                            }),
                            r0(m, l),
                            [p, v, y]
                        );
                    });
            },
            q: (r, e, t, n, o, a) => {
                var s = r6(e, t);
                (o = r2(n, o)),
                    rF([], [r], (r) => {
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
                                r5("Cannot construct ".concat(r.name, " due to unbound types"), s);
                            }),
                            rF(
                                [],
                                s,
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
            c: (r, e, t, n, o, a, s, i, l, c) => {
                var u = r6(t, n);
                (e = er((e = rk(e)))),
                    (a = r2(o, a)),
                    rF([], [r], (r) => {
                        r = r[0];
                        var n = "".concat(r.name, ".").concat(e);

                        function o() {
                            r5("Cannot call ".concat(n, " due to unbound types"), u);
                        }
                        e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                            i && r.registeredClass.pureVirtualFunctions.push(e);
                        var c = r.registeredClass.instancePrototype,
                            d = c[e];
                        return (
                            void 0 === d ||
                            (void 0 === d.overloadTable && d.className !== r.name && d.argCount === t - 2)
                                ? ((o.argCount = t - 2), (o.className = r.name), (c[e] = o))
                                : (rH(c, e, n), (c[e].overloadTable[t - 2] = o)),
                            rF([], u, (o) => {
                                var i = r9(n, o, r, a, s, l);
                                return (
                                    void 0 === c[e].overloadTable
                                        ? ((i.argCount = t - 2), (c[e] = i))
                                        : (c[e].overloadTable[t - 2] = i),
                                    []
                                );
                            }),
                            []
                        );
                    });
            },
            E: (e, t, n) => {
                (e = rk(e)), rF([], [t], (t) => ((t = t[0]), (r[e] = t.fromWireType(n)), []));
            },
            T: (r) => rD(r, ea),
            D: (r, e, t, n) => {
                function o() {}
                (e = rk(e)),
                    (o.values = {}),
                    rD(r, {
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
                    rq(e, o);
            },
            j: (r, e, t) => {
                var n = es(r, "enum");
                e = rk(e);
                var o = n.constructor,
                    a = Object.create(n.constructor.prototype, {
                        value: {
                            value: t,
                        },
                        constructor: {
                            value: rL("".concat(n.name, "_").concat(e), function () {}),
                        },
                    });
                (o.values[t] = a), (o[e] = a);
            },
            A: (r, e, t) => {
                rD(r, {
                    name: (e = rk(e)),
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
            Y: (r, e, t, n, o, a, s, i) => {
                var l = r6(e, t);
                (r = er((r = rk(r)))),
                    (o = r2(n, o)),
                    rq(
                        r,
                        function () {
                            r5("Cannot call ".concat(r, " due to unbound types"), l);
                        },
                        e - 1,
                    ),
                    rF([], l, (t) => {
                        var n = [t[0], null].concat(t.slice(1));
                        return r0(r, r9(r, n, null, o, a, s), e - 1), [];
                    });
            },
            i: (r, e, t, n, o) => {
                (e = rk(e)), -1 === o && (o = 0xffffffff);
                var a = (r) => r;
                if (0 === n) {
                    var s = 32 - 8 * t;
                    a = (r) => (r << s) >>> s;
                }
                var i = e.includes("unsigned"),
                    l = (r, e) => {};
                rD(r, {
                    name: e,
                    fromWireType: a,
                    toWireType: i
                        ? function (r, e) {
                              return l(e, this.name), e >>> 0;
                          }
                        : function (r, e) {
                              return l(e, this.name), e;
                          },
                    argPackAdvance: 8,
                    readValueFromPointer: rS(e, t, 0 !== n),
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
                rD(
                    r,
                    {
                        name: (t = rk(t)),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o,
                    },
                    {
                        ignoreDuplicateRegistrations: !0,
                    },
                );
            },
            X: (r, e, t, n, o, a, s, i, l, c, u, d) => {
                (t = rk(t)),
                    (a = r2(o, a)),
                    (i = r2(s, i)),
                    (c = r2(l, c)),
                    (d = r2(u, d)),
                    rF([r], [e], (r) => ((r = r[0]), [new rQ(t, r.registeredClass, !1, !1, !0, r, n, a, i, c, d)]));
            },
            U: (r, e) => {
                rD(r, {
                    name: (e = rk(e)),
                    fromWireType(r) {
                        for (var e, t, n = p[r >> 2], o = r + 4, a = o, e = 0; e <= n; ++e) {
                            var s = o + e;
                            if (e == n || 0 == u[s]) {
                                var i = s - a,
                                    l = rw(a, i);
                                void 0 === t ? (t = l) : ((t += "\0"), (t += l)), (a = s + 1);
                            }
                        }
                        return e$(r), t;
                    },
                    toWireType(r, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var t,
                            n = "string" == typeof e;
                        n ||
                            e instanceof Uint8Array ||
                            e instanceof Uint8ClampedArray ||
                            e instanceof Int8Array ||
                            rA("Cannot pass non-string to std::string"),
                            (t = n ? rc(e) : e.length);
                        var o = eA(4 + t + 1),
                            a = o + 4;
                        if (((p[o >> 2] = t), n)) rb(e, a, t + 1);
                        else if (n)
                            for (var s = 0; s < t; ++s) {
                                var i = e.charCodeAt(s);
                                i > 255 && (e$(a), rA("String has UTF-16 code units that do not fit in 8 bits")),
                                    (u[a + s] = i);
                            }
                        else for (var s = 0; s < t; ++s) u[a + s] = e[s];
                        return null !== r && r.push(e$, o), o;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rJ,
                    destructorFunction(r) {
                        e$(r);
                    },
                });
            },
            t: (r, e, t) => {
                var n, o, a, s;
                (t = rk(t)),
                    2 === e
                        ? ((n = el), (o = ec), (s = eu), (a = (r) => f[r >> 1]))
                        : 4 === e && ((n = ed), (o = ef), (s = eh), (a = (r) => p[r >> 2])),
                    rD(r, {
                        name: t,
                        fromWireType: (r) => {
                            for (var t, o = p[r >> 2], s = r + 4, i = 0; i <= o; ++i) {
                                var l = r + 4 + i * e;
                                if (i == o || 0 == a(l)) {
                                    var c = l - s,
                                        u = n(s, c);
                                    void 0 === t ? (t = u) : ((t += "\0"), (t += u)), (s = l + e);
                                }
                            }
                            return e$(r), t;
                        },
                        toWireType: (r, n) => {
                            "string" != typeof n && rA("Cannot pass non-string to C++ string type ".concat(t));
                            var a = s(n),
                                i = eA(4 + a + e);
                            return (p[i >> 2] = a / e), o(n, i + 4, a + e), null !== r && r.push(e$, i), i;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: rJ,
                        destructorFunction(r) {
                            e$(r);
                        },
                    });
            },
            W: (r, e) => {
                rD(r, {
                    isVoid: !0,
                    name: (e = rk(e)),
                    argPackAdvance: 0,
                    fromWireType: () => void 0,
                    toWireType: (r, e) => void 0,
                });
            },
            r: (r, e, t) => ((r = eo.toValue(r)), ep((e = es(e, "emval::as")), t, r)),
            u: (r, e, t, n) => (r = em[r])(null, (e = eo.toValue(e)), t, n),
            C: (r, e, t, n, o) => ((r = em[r]), r((e = eo.toValue(e)), e[(t = ey(t))], n, o)),
            b: en,
            n: (r, e, t) => {
                var n,
                    o,
                    a = ((r, e) => {
                        for (var t = Array(r), n = 0; n < r; ++n) t[n] = es(p[(e + 4 * n) >> 2], "parameter " + n);
                        return t;
                    })(r, e),
                    s = a.shift();
                r--;
                var i = "return function (obj, func, destructorsRef, args) {\n",
                    l = 0,
                    c = [];
                0 === t && c.push("obj");
                for (var u = ["retType"], d = [s], f = 0; f < r; ++f)
                    c.push("arg" + f),
                        u.push("argType" + f),
                        d.push(a[f]),
                        (i += "  var arg"
                            .concat(f, " = argType")
                            .concat(f, ".readValueFromPointer(args")
                            .concat(l ? "+" + l : "", ");\n")),
                        (l += a[f].argPackAdvance);
                (i += "  var rv = ".concat(1 === t ? "new func" : "func.call", "(").concat(c.join(", "), ");\n")),
                    s.isVoid ||
                        (u.push("emval_returnValue"),
                        d.push(ep),
                        (i += "  return emval_returnValue(retType, destructorsRef, rv);\n")),
                    (i += "};\n"),
                    u.push(i);
                var h = r7(Function, u)(...d);
                return (
                    (n = rL("methodCaller<(".concat(a.map((r) => r.name).join(", "), ") => ").concat(s.name, ">"), h)),
                    (o = em.length),
                    em.push(n),
                    o
                );
            },
            l: (r, e) => ((r = eo.toValue(r)), (e = eo.toValue(e)), eo.toHandle(r[e])),
            f: (r) => {
                r > 9 && (et[r + 1] += 1);
            },
            Z: () => eo.toHandle([]),
            g: (r) => eo.toHandle(ey(r)),
            o: () => eo.toHandle({}),
            h: (r) => {
                r3(eo.toValue(r)), en(r);
            },
            k: (r, e, t) => {
                (r = eo.toValue(r)), (e = eo.toValue(e)), (t = eo.toValue(t)), (r[e] = t);
            },
            e: (r, e) => {
                var t = (r = es(r, "_emval_take_value")).readValueFromPointer(e);
                return eo.toHandle(t);
            },
            I: function (r, e) {
                var t = new Date(1e3 * (r = eg(r)));
                (h[e >> 2] = t.getUTCSeconds()),
                    (h[(e + 4) >> 2] = t.getUTCMinutes()),
                    (h[(e + 8) >> 2] = t.getUTCHours()),
                    (h[(e + 12) >> 2] = t.getUTCDate()),
                    (h[(e + 16) >> 2] = t.getUTCMonth()),
                    (h[(e + 20) >> 2] = t.getUTCFullYear() - 1900),
                    (h[(e + 24) >> 2] = t.getUTCDay());
                var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    o = ((t.getTime() - n) / 864e5) | 0;
                h[(e + 28) >> 2] = o;
            },
            H: function (r, e, t, n, o, a) {
                a = eg(a);
                try {
                    var s = rE.getStreamFromFD(o);
                    2 & t && rE.doMsync(r, s, e, n, a);
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return -r.errno;
                }
            },
            S: (r, e, t, n) => {
                var o = new Date().getFullYear(),
                    a = new Date(o, 0, 1),
                    s = new Date(o, 6, 1),
                    i = a.getTimezoneOffset(),
                    l = s.getTimezoneOffset(),
                    c = Math.max(i, l);
                (p[r >> 2] = 60 * c), (h[e >> 2] = Number(i != l));
                var u = (r) => {
                        var e = Math.abs(r),
                            t = String(Math.floor(e / 60)).padStart(2, "0"),
                            n = String(e % 60).padStart(2, "0");
                        return "UTC"
                            .concat(r >= 0 ? "-" : "+")
                            .concat(t)
                            .concat(n);
                    },
                    d = u(i),
                    f = u(l);
                l < i ? (rb(d, t, 17), rb(f, n, 17)) : (rb(d, n, 17), rb(f, t, 17));
            },
            Q: function (r, e, t) {
                if (((e = eg(e)), !(r >= 0 && r <= 3))) return 28;
                if (0 === r) n = ew();
                else {
                    0;
                    n = performance.now();
                }
                var n,
                    o = Math.round(1e3 * n * 1e3);
                return (v[t >> 3] = BigInt(o)), 0;
            },
            z: ew,
            F: (r) => {
                var e = u.length;
                if ((r >>>= 0) > 0x80000000) return !1;
                for (var t = 1; t <= 4; t *= 2) {
                    var n = e * (1 + 0.2 / t);
                    if (((n = Math.min(n, r + 0x6000000)), eE(Math.min(0x80000000, rf(Math.max(r, n), 65536)))))
                        return !0;
                }
                return !1;
            },
            K: (r, e) => {
                var t = 0;
                return (
                    e_().forEach((n, o) => {
                        var a = e + t;
                        p[(r + 4 * o) >> 2] = a;
                        for (var s = a, i = 0; i < n.length; ++i) c[s++] = n.charCodeAt(i);
                        (c[s] = 0), (t += n.length + 1);
                    }),
                    0
                );
            },
            L: (r, e) => {
                var t = e_();
                p[r >> 2] = t.length;
                var n = 0;
                return t.forEach((r) => (n += r.length + 1)), (p[e >> 2] = n), 0;
            },
            p: function (r) {
                try {
                    var e = rE.getStreamFromFD(r);
                    return rg.close(e), 0;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            v: function (r, e, t, n) {
                try {
                    var o = rE.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var s = p[e >> 2],
                                    i = p[(e + 4) >> 2];
                                e += 8;
                                var l = rg.read(r, c, s, i, n);
                                if (l < 0) return -1;
                                if (((o += l), l < i)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            J: function (r, e, t, n) {
                e = eg(e);
                try {
                    if (isNaN(e)) return 61;
                    var o = rE.getStreamFromFD(r);
                    return (
                        rg.llseek(o, e, t),
                        (v[n >> 3] = BigInt(o.position)),
                        o.getdents && 0 === e && 0 === t && (o.getdents = null),
                        0
                    );
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
            w: function (r, e, t, n) {
                try {
                    var o = rE.getStreamFromFD(r),
                        a = ((r, e, t, n) => {
                            for (var o = 0, a = 0; a < t; a++) {
                                var s = p[e >> 2],
                                    i = p[(e + 4) >> 2];
                                e += 8;
                                var l = rg.write(r, c, s, i, n);
                                if (l < 0) return -1;
                                if (((o += l), l < i)) break;
                                void 0 !== n && (n += l);
                            }
                            return o;
                        })(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rg || "ErrnoError" !== r.name) throw r;
                    return r.errno;
                }
            },
        };
        K();
        var eC = (r) => (eC = C.aa)(r),
            eA = (r._malloc = (e) => (eA = r._malloc = C.ca)(e)),
            e$ = (r._free = (e) => (e$ = r._free = C.da)(e)),
            eF = (r, e) => (eF = C.ea)(r, e),
            eD = (r) => (eD = C.fa)(r),
            eS = (r) => (eS = C.ga)(r),
            ej = () => (ej = C.ha)();

        function ex() {
            if (!(I > 0)) {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) {
                        var t;
                        (t = r.preRun.shift()), B.unshift(t);
                    }
                Z(B),
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
                        (r.noFSInit || rg.initialized || rg.init(),
                        (rg.ignorePermissions = !1),
                        rd.init(),
                        Z(U),
                        e(r),
                        null == (t = r.onRuntimeInitialized) || t.call(r),
                        r.postRun)
                    )
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) {
                            (n = r.postRun.shift()), z.unshift(n);
                        }
                    Z(z);
                }
            }
        }
        if (
            ((r.ccall = (e, t, n, o, a) => {
                var s = {
                        string: (r) => {
                            var e,
                                t,
                                n,
                                o = 0;
                            return null != r && 0 !== r && ((t = rc((e = r)) + 1), rb(e, (n = eS(t)), t), (o = n)), o;
                        },
                        array: (r) => {
                            let e;
                            var t = ((e = r.length), eS(e));
                            return c.set(r, t), t;
                        },
                    },
                    i = r["_" + e],
                    l = [],
                    u = 0;
                if (o)
                    for (var d = 0; d < o.length; d++) {
                        var f = s[n[d]];
                        f ? (0 === u && (u = J()), (l[d] = f(o[d]))) : (l[d] = o[d]);
                    }
                var h = i(...l);
                return (function (r) {
                    return 0 !== u && eD(u), "string" === t ? rw(r) : "boolean" === t ? !!r : r;
                })(h);
            }),
            (V = function r() {
                A || ex(), A || (V = r);
            }),
            r.preInit)
        )
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
        return ex(), D;
    });
