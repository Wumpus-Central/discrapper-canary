var n;
function o(r, e, t) {
    return (
        e in r
            ? Object.defineProperty(r, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (r[e] = t),
        r
    );
}
t.d(e, { Z: () => a }), t(704826), t(35282), t(415506), t(66299), t(227481), t(730884), t(20464), t(341884), t(364341), t(629680), t(505025), t(918970), t(121784), t(644351), t(146733), t(189980), t(410992), t(82823), t(491343), t(259475), t(17294), t(733314), t(290780), t(190126), t(368063), t(65234), t(111804), t(490233), t(97749), t(388685), t(539854), t(997841), t(583741), t(781311), t(953529), t(559231), t(824928);
let a =
    ((n = 'file:///ci/build/discord/discord/discord_common/js/packages/libdave/package/wasm/libdave.js'),
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
            D,
            S = new Promise((r, t) => {
                (e = r), (a = t);
            }),
            j = Object.assign({}, r),
            x = './this.program',
            O = '';
        'undefined' != typeof document && document.currentScript && (O = document.currentScript.src),
            n && (O = n),
            (O = O.startsWith('blob:') ? '' : O.substr(0, O.replace(/[?#].*/, '').lastIndexOf('/') + 1)),
            (i = async (r) => {
                var e = await fetch(r, { credentials: 'same-origin' });
                if (e.ok) return e.arrayBuffer();
                throw Error(e.status + ' : ' + e.url);
            });
        var M = r.print || console.log.bind(console),
            R = r.printErr || console.error.bind(console);
        Object.assign(r, j), (j = null), r.arguments && r.arguments, r.thisProgram && (x = r.thisProgram);
        var N = r.wasmBinary,
            W = !1;
        function B() {
            var e = l.buffer;
            (r.HEAP8 = c = new Int8Array(e)), (r.HEAP16 = d = new Int16Array(e)), (r.HEAPU8 = u = new Uint8Array(e)), (r.HEAPU16 = f = new Uint16Array(e)), (r.HEAP32 = h = new Int32Array(e)), (r.HEAPU32 = p = new Uint32Array(e)), (r.HEAPF32 = m = new Float32Array(e)), (r.HEAPF64 = g = new Float64Array(e)), (r.HEAP64 = v = new BigInt64Array(e)), (r.HEAPU64 = y = new BigUint64Array(e));
        }
        var U = [],
            z = [],
            I = [],
            V = 0,
            L = null;
        function H(e) {
            var t;
            V++, null == (t = r.monitorRunDependencies) || t.call(r, V);
        }
        function q(e) {
            var t;
            if ((V--, null == (t = r.monitorRunDependencies) || t.call(r, V), 0 == V && L)) {
                var n = L;
                (L = null), n();
            }
        }
        function G(e) {
            null == (t = r.onAbort) || t.call(r, e), R((e = 'Aborted(' + e + ')')), (W = !0), (e += '. Build with -sASSERTIONS for more info.');
            var t,
                n = new WebAssembly.RuntimeError(e);
            throw (a(n), n);
        }
        var X = (r) => r.startsWith('data:application/octet-stream;base64,');
        async function Y(r) {
            if (!N)
                try {
                    var e = await i(r);
                    return new Uint8Array(e);
                } catch (r) {}
            if (r == w && N) return new Uint8Array(N);
            if (s) return s(r);
            throw 'both async and sync fetching of the wasm failed';
        }
        async function Z(r, e) {
            try {
                var t = await Y(r);
                return await WebAssembly.instantiate(t, e);
            } catch (r) {
                R('failed to asynchronously prepare wasm: '.concat(r)), G(r);
            }
        }
        async function K(r, e, t) {
            if (!r && 'function' == typeof WebAssembly.instantiateStreaming && !X(e) && 'function' == typeof fetch)
                try {
                    var n = fetch(e, { credentials: 'same-origin' });
                    return await WebAssembly.instantiateStreaming(n, t);
                } catch (r) {
                    R('wasm streaming compile failed: '.concat(r)), R('falling back to ArrayBuffer instantiation');
                }
            return Z(e, t);
        }
        async function J() {
            function e(r, e) {
                var t;
                return (l = (C = r.exports)._), B(), (P = C.ba), (t = C.$), z.unshift(t), q('wasm-instantiate'), C;
            }
            H('wasm-instantiate');
            var n = { a: e1 };
            if (r.instantiateWasm)
                try {
                    return r.instantiateWasm(n, e);
                } catch (r) {
                    R('Module.instantiateWasm callback failed with error: '.concat(r)), a(r);
                }
            null != w ||
                (w = (function () {
                    if (r.locateFile) {
                        var e = 'libdave.wasm';
                        return X(e) ? e : r.locateFile ? r.locateFile(e, O) : O + e;
                    }
                    return new URL(t(153796), t.b).href;
                })());
            try {
                var o = await K(N, w, n);
                return e(o.instance), o;
            } catch (r) {
                a(r);
                return;
            }
        }
        var Q = (e) => {
            for (; e.length > 0; ) e.shift()(r);
        };
        r.noExitRuntime;
        var rr = (r) => e3(r),
            re = () => e9();
        class rt {
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
        var rn = 0,
            ro = 0,
            ra = () => {
                var r = h[+rF.varargs >> 2];
                return (rF.varargs += 4), r;
            },
            ri = {
                isAbs: (r) => '/' === r.charAt(0),
                splitPath: (r) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r).slice(1),
                normalizeArray: (r, e) => {
                    for (var t = 0, n = r.length - 1; n >= 0; n--) {
                        var o = r[n];
                        '.' === o ? r.splice(n, 1) : '..' === o ? (r.splice(n, 1), t++) : t && (r.splice(n, 1), t--);
                    }
                    if (e) for (; t; t--) r.unshift('..');
                    return r;
                },
                normalize: (r) => {
                    var e = ri.isAbs(r),
                        t = '/' === r.substr(-1);
                    return (
                        (r = ri
                            .normalizeArray(
                                r.split('/').filter((r) => !!r),
                                !e
                            )
                            .join('/')) ||
                            e ||
                            (r = '.'),
                        r && t && (r += '/'),
                        (e ? '/' : '') + r
                    );
                },
                dirname: (r) => {
                    var e = ri.splitPath(r),
                        t = e[0],
                        n = e[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : '.';
                },
                basename: (r) => {
                    if ('/' === r) return '/';
                    var e = (r = (r = ri.normalize(r)).replace(/\/$/, '')).lastIndexOf('/');
                    return -1 === e ? r : r.substr(e + 1);
                },
                join: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    return ri.normalize(e.join('/'));
                },
                join2: (r, e) => ri.normalize(r + '/' + e)
            },
            rs = () => {
                if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues) return (r) => crypto.getRandomValues(r);
                G('initRandomDevice');
            },
            rl = (r) => (rl = rs())(r),
            rc = {
                resolve: function () {
                    for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                    for (var n = '', o = !1, a = e.length - 1; a >= -1 && !o; a--) {
                        var i = a >= 0 ? e[a] : rA.cwd();
                        if ('string' != typeof i) throw TypeError('Arguments to path.resolve must be strings');
                        if (!i) return '';
                        (n = i + '/' + n), (o = ri.isAbs(i));
                    }
                    return (
                        (n = ri
                            .normalizeArray(
                                n.split('/').filter((r) => !!r),
                                !o
                            )
                            .join('/')),
                        (o ? '/' : '') + n || '.'
                    );
                },
                relative: (r, e) => {
                    function t(r) {
                        for (var e = 0; e < r.length && '' === r[e]; e++);
                        for (var t = r.length - 1; t >= 0 && '' === r[t]; t--);
                        return e > t ? [] : r.slice(e, t - e + 1);
                    }
                    (r = rc.resolve(r).substr(1)), (e = rc.resolve(e).substr(1));
                    for (var n = t(r.split('/')), o = t(e.split('/')), a = Math.min(n.length, o.length), i = a, s = 0; s < a; s++)
                        if (n[s] !== o[s]) {
                            i = s;
                            break;
                        }
                    for (var l = [], s = i; s < n.length; s++) l.push('..');
                    return (l = l.concat(o.slice(i))).join('/');
                }
            },
            ru = 'undefined' != typeof TextDecoder ? new TextDecoder() : void 0,
            rd = function (r) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN;
                for (var n = e + t, o = e; r[o] && !(o >= n); ) ++o;
                if (o - e > 16 && r.buffer && ru) return ru.decode(r.subarray(e, o));
                for (var a = ''; e < o; ) {
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
                    if ((i = (240 & i) == 224 ? ((15 & i) << 12) | (s << 6) | l : ((7 & i) << 18) | (s << 12) | (l << 6) | (63 & r[e++])) < 65536) a += String.fromCharCode(i);
                    else {
                        var c = i - 65536;
                        a += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                    }
                }
                return a;
            },
            rf = [],
            rh = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n <= 127 ? e++ : n <= 2047 ? (e += 2) : n >= 55296 && n <= 57343 ? ((e += 4), ++t) : (e += 3);
                }
                return e;
            },
            rp = (r, e, t, n) => {
                if (!(n > 0)) return 0;
                for (var o = t, a = t + n - 1, i = 0; i < r.length; ++i) {
                    var s = r.charCodeAt(i);
                    if ((s >= 55296 && s <= 57343 && (s = (65536 + ((1023 & s) << 10)) | (1023 & r.charCodeAt(++i))), s <= 127)) {
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
                        (e[t++] = 240 | (s >> 18)), (e[t++] = 128 | ((s >> 12) & 63)), (e[t++] = 128 | ((s >> 6) & 63)), (e[t++] = 128 | (63 & s));
                    }
                }
                return (e[t] = 0), t - o;
            },
            rm = () => {
                if (!rf.length) {
                    var r,
                        e,
                        t,
                        n,
                        o,
                        a = null;
                    if (('undefined' != typeof window && 'function' == typeof window.prompt && null !== (a = window.prompt('Input: ')) && (a += '\n'), !a)) return null;
                    (r = a), (e = !0), (n = Array(rh(r) + 1)), (o = rp(r, n, 0, n.length)), e && (n.length = o), (rf = n);
                }
                return rf.shift();
            },
            rv = {
                ttys: [],
                init() {},
                shutdown() {},
                register(r, e) {
                    (rv.ttys[r] = {
                        input: [],
                        output: [],
                        ops: e
                    }),
                        rA.registerDevice(r, rv.stream_ops);
                },
                stream_ops: {
                    open(r) {
                        var e = rv.ttys[r.node.rdev];
                        if (!e) throw new rA.ErrnoError(43);
                        (r.tty = e), (r.seekable = !1);
                    },
                    close(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    fsync(r) {
                        r.tty.ops.fsync(r.tty);
                    },
                    read(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.get_char) throw new rA.ErrnoError(60);
                        for (var a, i = 0, s = 0; s < n; s++) {
                            try {
                                a = r.tty.ops.get_char(r.tty);
                            } catch (r) {
                                throw new rA.ErrnoError(29);
                            }
                            if (void 0 === a && 0 === i) throw new rA.ErrnoError(6);
                            if (null == a) break;
                            i++, (e[t + s] = a);
                        }
                        return i && (r.node.atime = Date.now()), i;
                    },
                    write(r, e, t, n, o) {
                        if (!r.tty || !r.tty.ops.put_char) throw new rA.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) r.tty.ops.put_char(r.tty, e[t + a]);
                        } catch (r) {
                            throw new rA.ErrnoError(29);
                        }
                        return n && (r.node.mtime = r.node.ctime = Date.now()), a;
                    }
                },
                default_tty_ops: {
                    get_char: (r) => rm(),
                    put_char(r, e) {
                        null === e || 10 === e ? (M(rd(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (M(rd(r.output)), (r.output = []));
                    },
                    ioctl_tcgets: (r) => ({
                        c_iflag: 25856,
                        c_oflag: 5,
                        c_cflag: 191,
                        c_lflag: 35387,
                        c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }),
                    ioctl_tcsets: (r, e, t) => 0,
                    ioctl_tiocgwinsz: (r) => [24, 80]
                },
                default_tty1_ops: {
                    put_char(r, e) {
                        null === e || 10 === e ? (R(rd(r.output)), (r.output = [])) : 0 != e && r.output.push(e);
                    },
                    fsync(r) {
                        r.output && r.output.length > 0 && (R(rd(r.output)), (r.output = []));
                    }
                }
            },
            ry = (r, e) => {
                u.fill(0, r, r + e);
            },
            rg = (r, e) => Math.ceil(r / e) * e,
            rw = (r) => {
                r = rg(r, 65536);
                var e = e6(65536, r);
                return e && ry(e, r), e;
            },
            rE = {
                ops_table: null,
                mount: (r) => rE.createNode(null, '/', 16895, 0),
                createNode(r, e, t, n) {
                    if (rA.isBlkdev(t) || rA.isFIFO(t)) throw new rA.ErrnoError(63);
                    rE.ops_table ||
                        (rE.ops_table = {
                            dir: {
                                node: {
                                    getattr: rE.node_ops.getattr,
                                    setattr: rE.node_ops.setattr,
                                    lookup: rE.node_ops.lookup,
                                    mknod: rE.node_ops.mknod,
                                    rename: rE.node_ops.rename,
                                    unlink: rE.node_ops.unlink,
                                    rmdir: rE.node_ops.rmdir,
                                    readdir: rE.node_ops.readdir,
                                    symlink: rE.node_ops.symlink
                                },
                                stream: { llseek: rE.stream_ops.llseek }
                            },
                            file: {
                                node: {
                                    getattr: rE.node_ops.getattr,
                                    setattr: rE.node_ops.setattr
                                },
                                stream: {
                                    llseek: rE.stream_ops.llseek,
                                    read: rE.stream_ops.read,
                                    write: rE.stream_ops.write,
                                    allocate: rE.stream_ops.allocate,
                                    mmap: rE.stream_ops.mmap,
                                    msync: rE.stream_ops.msync
                                }
                            },
                            link: {
                                node: {
                                    getattr: rE.node_ops.getattr,
                                    setattr: rE.node_ops.setattr,
                                    readlink: rE.node_ops.readlink
                                },
                                stream: {}
                            },
                            chrdev: {
                                node: {
                                    getattr: rE.node_ops.getattr,
                                    setattr: rE.node_ops.setattr
                                },
                                stream: rA.chrdev_stream_ops
                            }
                        });
                    var o = rA.createNode(r, e, t, n);
                    return rA.isDir(o.mode) ? ((o.node_ops = rE.ops_table.dir.node), (o.stream_ops = rE.ops_table.dir.stream), (o.contents = {})) : rA.isFile(o.mode) ? ((o.node_ops = rE.ops_table.file.node), (o.stream_ops = rE.ops_table.file.stream), (o.usedBytes = 0), (o.contents = null)) : rA.isLink(o.mode) ? ((o.node_ops = rE.ops_table.link.node), (o.stream_ops = rE.ops_table.link.stream)) : rA.isChrdev(o.mode) && ((o.node_ops = rE.ops_table.chrdev.node), (o.stream_ops = rE.ops_table.chrdev.stream)), (o.atime = o.mtime = o.ctime = Date.now()), r && ((r.contents[e] = o), (r.atime = r.mtime = r.ctime = o.atime)), o;
                },
                getFileDataAsTypedArray: (r) => (r.contents ? (r.contents.subarray ? r.contents.subarray(0, r.usedBytes) : new Uint8Array(r.contents)) : new Uint8Array(0)),
                expandFileStorage(r, e) {
                    var t = r.contents ? r.contents.length : 0;
                    if (!(t >= e)) {
                        (e = Math.max(e, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)), 0 != t && (e = Math.max(e, 256));
                        var n = r.contents;
                        (r.contents = new Uint8Array(e)), r.usedBytes > 0 && r.contents.set(n.subarray(0, r.usedBytes), 0);
                    }
                },
                resizeFileStorage(r, e) {
                    if (r.usedBytes != e)
                        if (0 == e) (r.contents = null), (r.usedBytes = 0);
                        else {
                            var t = r.contents;
                            (r.contents = new Uint8Array(e)), t && r.contents.set(t.subarray(0, Math.min(e, r.usedBytes))), (r.usedBytes = e);
                        }
                },
                node_ops: {
                    getattr(r) {
                        var e = {};
                        return (e.dev = rA.isChrdev(r.mode) ? r.id : 1), (e.ino = r.id), (e.mode = r.mode), (e.nlink = 1), (e.uid = 0), (e.gid = 0), (e.rdev = r.rdev), rA.isDir(r.mode) ? (e.size = 4096) : rA.isFile(r.mode) ? (e.size = r.usedBytes) : rA.isLink(r.mode) ? (e.size = r.link.length) : (e.size = 0), (e.atime = new Date(r.atime)), (e.mtime = new Date(r.mtime)), (e.ctime = new Date(r.ctime)), (e.blksize = 4096), (e.blocks = Math.ceil(e.size / e.blksize)), e;
                    },
                    setattr(r, e) {
                        for (let t of ['mode', 'atime', 'mtime', 'ctime']) e[t] && (r[t] = e[t]);
                        void 0 !== e.size && rE.resizeFileStorage(r, e.size);
                    },
                    lookup(r, e) {
                        throw rE.doesNotExistError;
                    },
                    mknod: (r, e, t, n) => rE.createNode(r, e, t, n),
                    rename(r, e, t) {
                        var n;
                        try {
                            n = rA.lookupNode(e, t);
                        } catch (r) {}
                        if (n) {
                            if (rA.isDir(r.mode)) for (var o in n.contents) throw new rA.ErrnoError(55);
                            rA.hashRemoveNode(n);
                        }
                        delete r.parent.contents[r.name], (e.contents[t] = r), (r.name = t), (e.ctime = e.mtime = r.parent.ctime = r.parent.mtime = Date.now());
                    },
                    unlink(r, e) {
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    rmdir(r, e) {
                        var t = rA.lookupNode(r, e);
                        for (var n in t.contents) throw new rA.ErrnoError(55);
                        delete r.contents[e], (r.ctime = r.mtime = Date.now());
                    },
                    readdir: (r) => ['.', '..', ...Object.keys(r.contents)],
                    symlink(r, e, t) {
                        var n = rE.createNode(r, e, 41471, 0);
                        return (n.link = t), n;
                    },
                    readlink(r) {
                        if (!rA.isLink(r.mode)) throw new rA.ErrnoError(28);
                        return r.link;
                    }
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
                            else if (0 === i.usedBytes && 0 === o) return (i.contents = e.slice(t, t + n)), (i.usedBytes = n), n;
                            else if (o + n <= i.usedBytes) return i.contents.set(e.subarray(t, t + n), o), n;
                        }
                        if ((rE.expandFileStorage(i, o + n), i.contents.subarray && e.subarray)) i.contents.set(e.subarray(t, t + n), o);
                        else for (var s = 0; s < n; s++) i.contents[o + s] = e[t + s];
                        return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
                    },
                    llseek(r, e, t) {
                        var n = e;
                        if ((1 === t ? (n += r.position) : 2 === t && rA.isFile(r.node.mode) && (n += r.node.usedBytes), n < 0)) throw new rA.ErrnoError(28);
                        return n;
                    },
                    allocate(r, e, t) {
                        rE.expandFileStorage(r.node, e + t), (r.node.usedBytes = Math.max(r.node.usedBytes, e + t));
                    },
                    mmap(r, e, t, n, o) {
                        if (!rA.isFile(r.node.mode)) throw new rA.ErrnoError(43);
                        var a,
                            i,
                            s = r.node.contents;
                        if (!(2 & o) && s && s.buffer === c.buffer) (i = !1), (a = s.byteOffset);
                        else {
                            if (((i = !0), !(a = rw(e)))) throw new rA.ErrnoError(48);
                            s && ((t > 0 || t + e < s.length) && (s = s.subarray ? s.subarray(t, t + e) : Array.prototype.slice.call(s, t, t + e)), c.set(s, a));
                        }
                        return {
                            ptr: a,
                            allocated: i
                        };
                    },
                    msync: (r, e, t, n, o) => (rE.stream_ops.write(r, e, 0, n, t, !1), 0)
                }
            },
            rb = async (r) => new Uint8Array(await i(r)),
            r_ = (r, e, t, n, o, a) => {
                rA.createDataFile(r, e, t, n, o, a);
            },
            rk = r.preloadPlugins || [],
            rP = (r, e, t, n) => {
                'undefined' != typeof Browser && Browser.init();
                var o = !1;
                return (
                    rk.forEach((a) => {
                        !o && a.canHandle(e) && (a.handle(r, e, t, n), (o = !0));
                    }),
                    o
                );
            },
            rT = (r) => {
                var e = {
                    r: 0,
                    'r+': 2,
                    w: 577,
                    'w+': 578,
                    a: 1089,
                    'a+': 1090
                }[r];
                if (void 0 === e) throw Error('Unknown file open mode: '.concat(r));
                return e;
            },
            rC = (r, e) => {
                var t = 0;
                return r && (t |= 365), e && (t |= 146), t;
            },
            rA = {
                root: null,
                mounts: [],
                devices: {},
                streams: [],
                nextInode: 1,
                nameTable: null,
                currentPath: '/',
                initialized: !1,
                ignorePermissions: !0,
                ErrnoError: class {
                    constructor(r) {
                        o(this, 'name', 'ErrnoError'), (this.errno = r);
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
                        o(this, 'shared', {});
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
                        return rA.isDir(this.mode);
                    }
                    get isDevice() {
                        return rA.isChrdev(this.mode);
                    }
                    constructor(r, e, t, n) {
                        o(this, 'node_ops', {}), o(this, 'stream_ops', {}), o(this, 'readMode', 365), o(this, 'writeMode', 146), o(this, 'mounted', null), r || (r = this), (this.parent = r), (this.mount = r.mount), (this.id = rA.nextInode++), (this.name = e), (this.mode = t), (this.rdev = n), (this.atime = this.mtime = this.ctime = Date.now());
                    }
                },
                lookupPath(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!r)
                        return {
                            path: '',
                            node: null
                        };
                    null != e.follow_mount || (e.follow_mount = !0), ri.isAbs(r) || (r = rA.cwd() + '/' + r);
                    r: for (var t, n = 0; n < 40; n++) {
                        for (var o = r.split('/').filter((r) => !!r && '.' !== r), a = rA.root, i = '/', s = 0; s < o.length; s++) {
                            var l = s === o.length - 1;
                            if (l && e.parent) break;
                            if ('..' === o[s]) {
                                (i = ri.dirname(i)), (a = a.parent);
                                continue;
                            }
                            i = ri.join2(i, o[s]);
                            try {
                                a = rA.lookupNode(a, o[s]);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 44 && l && e.noent_okay) return { path: i };
                                throw r;
                            }
                            if ((rA.isMountpoint(a) && (!l || e.follow_mount) && (a = a.mounted.root), rA.isLink(a.mode) && (!l || e.follow))) {
                                if (!a.node_ops.readlink) throw new rA.ErrnoError(52);
                                var c = a.node_ops.readlink(a);
                                ri.isAbs(c) || (c = ri.dirname(i) + '/' + c), (r = c + '/' + o.slice(s + 1).join('/'));
                                continue r;
                            }
                        }
                        return {
                            path: i,
                            node: a
                        };
                    }
                    throw new rA.ErrnoError(32);
                },
                getPath(r) {
                    for (var e; ; ) {
                        if (rA.isRoot(r)) {
                            var t = r.mount.mountpoint;
                            if (!e) return t;
                            return '/' !== t[t.length - 1] ? ''.concat(t, '/').concat(e) : t + e;
                        }
                        (e = e ? ''.concat(r.name, '/').concat(e) : r.name), (r = r.parent);
                    }
                },
                hashName(r, e) {
                    for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
                    return ((r + t) >>> 0) % rA.nameTable.length;
                },
                hashAddNode(r) {
                    var e = rA.hashName(r.parent.id, r.name);
                    (r.name_next = rA.nameTable[e]), (rA.nameTable[e] = r);
                },
                hashRemoveNode(r) {
                    var e = rA.hashName(r.parent.id, r.name);
                    if (rA.nameTable[e] === r) rA.nameTable[e] = r.name_next;
                    else
                        for (var t = rA.nameTable[e]; t; ) {
                            if (t.name_next === r) {
                                t.name_next = r.name_next;
                                break;
                            }
                            t = t.name_next;
                        }
                },
                lookupNode(r, e) {
                    var t = rA.mayLookup(r);
                    if (t) throw new rA.ErrnoError(t);
                    for (var n = rA.hashName(r.id, e), o = rA.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === r.id && a === e) return o;
                    }
                    return rA.lookup(r, e);
                },
                createNode(r, e, t, n) {
                    var o = new rA.FSNode(r, e, t, n);
                    return rA.hashAddNode(o), o;
                },
                destroyNode(r) {
                    rA.hashRemoveNode(r);
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
                    var e = ['r', 'w', 'rw'][3 & r];
                    return 512 & r && (e += 'w'), e;
                },
                nodePermissions: (r, e) => (rA.ignorePermissions ? 0 : (e.includes('r') && !(292 & r.mode)) || (e.includes('w') && !(146 & r.mode)) || (e.includes('x') && !(73 & r.mode)) ? 2 : 0),
                mayLookup(r) {
                    if (!rA.isDir(r.mode)) return 54;
                    var e = rA.nodePermissions(r, 'x');
                    return e || 2 * !r.node_ops.lookup;
                },
                mayCreate(r, e) {
                    if (!rA.isDir(r.mode)) return 54;
                    try {
                        return rA.lookupNode(r, e), 20;
                    } catch (r) {}
                    return rA.nodePermissions(r, 'wx');
                },
                mayDelete(r, e, t) {
                    try {
                        n = rA.lookupNode(r, e);
                    } catch (r) {
                        return r.errno;
                    }
                    var n,
                        o = rA.nodePermissions(r, 'wx');
                    if (o) return o;
                    if (t) {
                        if (!rA.isDir(n.mode)) return 54;
                        if (rA.isRoot(n) || rA.getPath(n) === rA.cwd()) return 10;
                    } else if (rA.isDir(n.mode)) return 31;
                    return 0;
                },
                mayOpen: (r, e) => (r ? (rA.isLink(r.mode) ? 32 : rA.isDir(r.mode) && ('r' !== rA.flagsToPermissionString(e) || 512 & e) ? 31 : rA.nodePermissions(r, rA.flagsToPermissionString(e))) : 44),
                MAX_OPEN_FDS: 4096,
                nextfd() {
                    for (var r = 0; r <= rA.MAX_OPEN_FDS; r++) if (!rA.streams[r]) return r;
                    throw new rA.ErrnoError(33);
                },
                getStreamChecked(r) {
                    var e = rA.getStream(r);
                    if (!e) throw new rA.ErrnoError(8);
                    return e;
                },
                getStream: (r) => rA.streams[r],
                createStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return (r = Object.assign(new rA.FSStream(), r)), -1 == e && (e = rA.nextfd()), (r.fd = e), (rA.streams[e] = r), r;
                },
                closeStream(r) {
                    rA.streams[r] = null;
                },
                dupStream(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    var t,
                        n,
                        o = rA.createStream(r, e);
                    return null == (n = o.stream_ops) || null == (t = n.dup) || t.call(n, o), o;
                },
                chrdev_stream_ops: {
                    open(r) {
                        var e,
                            t,
                            n = rA.getDevice(r.node.rdev);
                        (r.stream_ops = n.stream_ops), null == (e = (t = r.stream_ops).open) || e.call(t, r);
                    },
                    llseek() {
                        throw new rA.ErrnoError(70);
                    }
                },
                major: (r) => r >> 8,
                minor: (r) => 255 & r,
                makedev: (r, e) => (r << 8) | e,
                registerDevice(r, e) {
                    rA.devices[r] = { stream_ops: e };
                },
                getDevice: (r) => rA.devices[r],
                getMounts(r) {
                    for (var e = [], t = [r]; t.length; ) {
                        var n = t.pop();
                        e.push(n), t.push(...n.mounts);
                    }
                    return e;
                },
                syncfs(r, e) {
                    'function' == typeof r && ((e = r), (r = !1)), rA.syncFSRequests++, rA.syncFSRequests > 1 && R('warning: '.concat(rA.syncFSRequests, ' FS.syncfs operations in flight at once, probably just doing extra work'));
                    var t = rA.getMounts(rA.root.mount),
                        n = 0;
                    function o(r) {
                        return rA.syncFSRequests--, e(r);
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
                        o = '/' === t,
                        a = !t;
                    if (o && rA.root) throw new rA.ErrnoError(10);
                    if (!o && !a) {
                        var i = rA.lookupPath(t, { follow_mount: !1 });
                        if (((t = i.path), (n = i.node), rA.isMountpoint(n))) throw new rA.ErrnoError(10);
                        if (!rA.isDir(n.mode)) throw new rA.ErrnoError(54);
                    }
                    var s = {
                            type: r,
                            opts: e,
                            mountpoint: t,
                            mounts: []
                        },
                        l = r.mount(s);
                    return (l.mount = s), (s.root = l), o ? (rA.root = l) : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)), l;
                },
                unmount(r) {
                    var e = rA.lookupPath(r, { follow_mount: !1 });
                    if (!rA.isMountpoint(e.node)) throw new rA.ErrnoError(28);
                    var t = e.node,
                        n = t.mounted,
                        o = rA.getMounts(n);
                    Object.keys(rA.nameTable).forEach((r) => {
                        for (var e = rA.nameTable[r]; e; ) {
                            var t = e.name_next;
                            o.includes(e.mount) && rA.destroyNode(e), (e = t);
                        }
                    }),
                        (t.mounted = null);
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1);
                },
                lookup: (r, e) => r.node_ops.lookup(r, e),
                mknod(r, e, t) {
                    var n = rA.lookupPath(r, { parent: !0 }).node,
                        o = ri.basename(r);
                    if (!o || '.' === o || '..' === o) throw new rA.ErrnoError(28);
                    var a = rA.mayCreate(n, o);
                    if (a) throw new rA.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new rA.ErrnoError(63);
                    return n.node_ops.mknod(n, o, e, t);
                },
                statfs(r) {
                    var e = {
                            bsize: 4096,
                            frsize: 4096,
                            blocks: 1000000,
                            bfree: 500000,
                            bavail: 500000,
                            files: rA.nextInode,
                            ffree: rA.nextInode - 1,
                            fsid: 42,
                            flags: 2,
                            namelen: 255
                        },
                        t = rA.lookupPath(r, { follow: !0 }).node;
                    return (null == t ? void 0 : t.node_ops.statfs) && Object.assign(e, t.node_ops.statfs(t.mount.opts.root)), e;
                },
                create(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 438;
                    return (e &= 4095), (e |= 32768), rA.mknod(r, e, 0);
                },
                mkdir(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 511;
                    return (e &= 1023), (e |= 16384), rA.mknod(r, e, 0);
                },
                mkdirTree(r, e) {
                    for (var t = r.split('/'), n = '', o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += '/' + t[o];
                            try {
                                rA.mkdir(n, e);
                            } catch (r) {
                                if (20 != r.errno) throw r;
                            }
                        }
                },
                mkdev: (r, e, t) => (void 0 === t && ((t = e), (e = 438)), (e |= 8192), rA.mknod(r, e, t)),
                symlink(r, e) {
                    if (!rc.resolve(r)) throw new rA.ErrnoError(44);
                    var t = rA.lookupPath(e, { parent: !0 }).node;
                    if (!t) throw new rA.ErrnoError(44);
                    var n = ri.basename(e),
                        o = rA.mayCreate(t, n);
                    if (o) throw new rA.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new rA.ErrnoError(63);
                    return t.node_ops.symlink(t, n, r);
                },
                rename(r, e) {
                    var t,
                        n,
                        o,
                        a,
                        i = ri.dirname(r),
                        s = ri.dirname(e),
                        l = ri.basename(r),
                        c = ri.basename(e);
                    if (((n = rA.lookupPath(r, { parent: !0 }).node), (o = rA.lookupPath(e, { parent: !0 }).node), !n || !o)) throw new rA.ErrnoError(44);
                    if (n.mount !== o.mount) throw new rA.ErrnoError(75);
                    var u = rA.lookupNode(n, l),
                        d = rc.relative(r, s);
                    if ('.' !== d.charAt(0)) throw new rA.ErrnoError(28);
                    if ('.' !== (d = rc.relative(e, i)).charAt(0)) throw new rA.ErrnoError(55);
                    try {
                        a = rA.lookupNode(o, c);
                    } catch (r) {}
                    if (u !== a) {
                        var f = rA.isDir(u.mode),
                            h = rA.mayDelete(n, l, f);
                        if (h || (h = a ? rA.mayDelete(o, c, f) : rA.mayCreate(o, c))) throw new rA.ErrnoError(h);
                        if (!n.node_ops.rename) throw new rA.ErrnoError(63);
                        if (rA.isMountpoint(u) || (a && rA.isMountpoint(a))) throw new rA.ErrnoError(10);
                        if (o !== n && (h = rA.nodePermissions(n, 'w'))) throw new rA.ErrnoError(h);
                        rA.hashRemoveNode(u);
                        try {
                            n.node_ops.rename(u, o, c), (u.parent = o);
                        } catch (r) {
                            throw r;
                        } finally {
                            rA.hashAddNode(u);
                        }
                    }
                },
                rmdir(r) {
                    var e = rA.lookupPath(r, { parent: !0 }).node,
                        t = ri.basename(r),
                        n = rA.lookupNode(e, t),
                        o = rA.mayDelete(e, t, !0);
                    if (o) throw new rA.ErrnoError(o);
                    if (!e.node_ops.rmdir) throw new rA.ErrnoError(63);
                    if (rA.isMountpoint(n)) throw new rA.ErrnoError(10);
                    e.node_ops.rmdir(e, t), rA.destroyNode(n);
                },
                readdir(r) {
                    var e = rA.lookupPath(r, { follow: !0 }).node;
                    if (!e.node_ops.readdir) throw new rA.ErrnoError(54);
                    return e.node_ops.readdir(e);
                },
                unlink(r) {
                    var e = rA.lookupPath(r, { parent: !0 }).node;
                    if (!e) throw new rA.ErrnoError(44);
                    var t = ri.basename(r),
                        n = rA.lookupNode(e, t),
                        o = rA.mayDelete(e, t, !1);
                    if (o) throw new rA.ErrnoError(o);
                    if (!e.node_ops.unlink) throw new rA.ErrnoError(63);
                    if (rA.isMountpoint(n)) throw new rA.ErrnoError(10);
                    e.node_ops.unlink(e, t), rA.destroyNode(n);
                },
                readlink(r) {
                    var e = rA.lookupPath(r).node;
                    if (!e) throw new rA.ErrnoError(44);
                    if (!e.node_ops.readlink) throw new rA.ErrnoError(28);
                    return e.node_ops.readlink(e);
                },
                stat(r, e) {
                    var t = rA.lookupPath(r, { follow: !e }).node;
                    if (!t) throw new rA.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new rA.ErrnoError(63);
                    return t.node_ops.getattr(t);
                },
                lstat: (r) => rA.stat(r, !0),
                chmod(r, e, t) {
                    var n;
                    if (!(n = 'string' == typeof r ? rA.lookupPath(r, { follow: !t }).node : r).node_ops.setattr) throw new rA.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: (4095 & e) | (-4096 & n.mode),
                        ctime: Date.now()
                    });
                },
                lchmod(r, e) {
                    rA.chmod(r, e, !0);
                },
                fchmod(r, e) {
                    var t = rA.getStreamChecked(r);
                    rA.chmod(t.node, e);
                },
                chown(r, e, t, n) {
                    var o;
                    if (!(o = 'string' == typeof r ? rA.lookupPath(r, { follow: !n }).node : r).node_ops.setattr) throw new rA.ErrnoError(63);
                    o.node_ops.setattr(o, { timestamp: Date.now() });
                },
                lchown(r, e, t) {
                    rA.chown(r, e, t, !0);
                },
                fchown(r, e, t) {
                    var n = rA.getStreamChecked(r);
                    rA.chown(n.node, e, t);
                },
                truncate(r, e) {
                    if (e < 0) throw new rA.ErrnoError(28);
                    if ('string' == typeof r) {
                        var t;
                        t = rA.lookupPath(r, { follow: !0 }).node;
                    } else t = r;
                    if (!t.node_ops.setattr) throw new rA.ErrnoError(63);
                    if (rA.isDir(t.mode)) throw new rA.ErrnoError(31);
                    if (!rA.isFile(t.mode)) throw new rA.ErrnoError(28);
                    var n = rA.nodePermissions(t, 'w');
                    if (n) throw new rA.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: e,
                        timestamp: Date.now()
                    });
                },
                ftruncate(r, e) {
                    var t = rA.getStreamChecked(r);
                    if ((2097155 & t.flags) == 0) throw new rA.ErrnoError(28);
                    rA.truncate(t.node, e);
                },
                utime(r, e, t) {
                    var n = rA.lookupPath(r, { follow: !0 }).node;
                    n.node_ops.setattr(n, {
                        atime: e,
                        mtime: t
                    });
                },
                open(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 438;
                    if ('' === e) throw new rA.ErrnoError(44);
                    if (((n = 64 & (t = 'string' == typeof t ? rT(t) : t) ? (4095 & n) | 32768 : 0), 'object' == typeof e)) o = e;
                    else {
                        var o,
                            a = rA.lookupPath(e, {
                                follow: !(131072 & t),
                                noent_okay: !0
                            });
                        (o = a.node), (e = a.path);
                    }
                    var i = !1;
                    if (64 & t)
                        if (o) {
                            if (128 & t) throw new rA.ErrnoError(20);
                        } else (o = rA.mknod(e, n, 0)), (i = !0);
                    if (!o) throw new rA.ErrnoError(44);
                    if ((rA.isChrdev(o.mode) && (t &= -513), 65536 & t && !rA.isDir(o.mode))) throw new rA.ErrnoError(54);
                    if (!i) {
                        var s = rA.mayOpen(o, t);
                        if (s) throw new rA.ErrnoError(s);
                    }
                    512 & t && !i && rA.truncate(o, 0), (t &= -131713);
                    var l = rA.createStream({
                        node: o,
                        path: rA.getPath(o),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: o.stream_ops,
                        ungotten: [],
                        error: !1
                    });
                    return l.stream_ops.open && l.stream_ops.open(l), !r.logReadFiles || 1 & t || e in rA.readFiles || (rA.readFiles[e] = 1), l;
                },
                close(r) {
                    if (rA.isClosed(r)) throw new rA.ErrnoError(8);
                    r.getdents && (r.getdents = null);
                    try {
                        r.stream_ops.close && r.stream_ops.close(r);
                    } catch (r) {
                        throw r;
                    } finally {
                        rA.closeStream(r.fd);
                    }
                    r.fd = null;
                },
                isClosed: (r) => null === r.fd,
                llseek(r, e, t) {
                    if (rA.isClosed(r)) throw new rA.ErrnoError(8);
                    if (!r.seekable || !r.stream_ops.llseek) throw new rA.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new rA.ErrnoError(28);
                    return (r.position = r.stream_ops.llseek(r, e, t)), (r.ungotten = []), r.position;
                },
                read(r, e, t, n, o) {
                    if (n < 0 || o < 0) throw new rA.ErrnoError(28);
                    if (rA.isClosed(r) || (2097155 & r.flags) == 1) throw new rA.ErrnoError(8);
                    if (rA.isDir(r.node.mode)) throw new rA.ErrnoError(31);
                    if (!r.stream_ops.read) throw new rA.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!r.seekable) throw new rA.ErrnoError(70);
                    } else o = r.position;
                    var i = r.stream_ops.read(r, e, t, n, o);
                    return a || (r.position += i), i;
                },
                write(r, e, t, n, o, a) {
                    if (n < 0 || o < 0) throw new rA.ErrnoError(28);
                    if (rA.isClosed(r) || (2097155 & r.flags) == 0) throw new rA.ErrnoError(8);
                    if (rA.isDir(r.node.mode)) throw new rA.ErrnoError(31);
                    if (!r.stream_ops.write) throw new rA.ErrnoError(28);
                    r.seekable && 1024 & r.flags && rA.llseek(r, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!r.seekable) throw new rA.ErrnoError(70);
                    } else o = r.position;
                    var s = r.stream_ops.write(r, e, t, n, o, a);
                    return i || (r.position += s), s;
                },
                allocate(r, e, t) {
                    if (rA.isClosed(r)) throw new rA.ErrnoError(8);
                    if (e < 0 || t <= 0) throw new rA.ErrnoError(28);
                    if ((2097155 & r.flags) == 0) throw new rA.ErrnoError(8);
                    if (!rA.isFile(r.node.mode) && !rA.isDir(r.node.mode)) throw new rA.ErrnoError(43);
                    if (!r.stream_ops.allocate) throw new rA.ErrnoError(138);
                    r.stream_ops.allocate(r, e, t);
                },
                mmap(r, e, t, n, o) {
                    if (((2 & n) != 0 && (2 & o) == 0 && (2097155 & r.flags) != 2) || (2097155 & r.flags) == 1) throw new rA.ErrnoError(2);
                    if (!r.stream_ops.mmap) throw new rA.ErrnoError(43);
                    if (!e) throw new rA.ErrnoError(28);
                    return r.stream_ops.mmap(r, e, t, n, o);
                },
                msync: (r, e, t, n, o) => (r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, o) : 0),
                ioctl(r, e, t) {
                    if (!r.stream_ops.ioctl) throw new rA.ErrnoError(59);
                    return r.stream_ops.ioctl(r, e, t);
                },
                readFile(r) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (((e.flags = e.flags || 0), (e.encoding = e.encoding || 'binary'), 'utf8' !== e.encoding && 'binary' !== e.encoding)) throw Error('Invalid encoding type "'.concat(e.encoding, '"'));
                    var t,
                        n = rA.open(r, e.flags),
                        o = rA.stat(r).size,
                        a = new Uint8Array(o);
                    return rA.read(n, a, 0, o, 0), 'utf8' === e.encoding ? (t = rd(a)) : 'binary' === e.encoding && (t = a), rA.close(n), t;
                },
                writeFile(r, e) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t.flags = t.flags || 577;
                    var n = rA.open(r, t.flags, t.mode);
                    if ('string' == typeof e) {
                        var o = new Uint8Array(rh(e) + 1),
                            a = rp(e, o, 0, o.length);
                        rA.write(n, o, 0, a, void 0, t.canOwn);
                    } else if (ArrayBuffer.isView(e)) rA.write(n, e, 0, e.byteLength, void 0, t.canOwn);
                    else throw Error('Unsupported data type');
                    rA.close(n);
                },
                cwd: () => rA.currentPath,
                chdir(r) {
                    var e = rA.lookupPath(r, { follow: !0 });
                    if (null === e.node) throw new rA.ErrnoError(44);
                    if (!rA.isDir(e.node.mode)) throw new rA.ErrnoError(54);
                    var t = rA.nodePermissions(e.node, 'x');
                    if (t) throw new rA.ErrnoError(t);
                    rA.currentPath = e.path;
                },
                createDefaultDirectories() {
                    rA.mkdir('/tmp'), rA.mkdir('/home'), rA.mkdir('/home/web_user');
                },
                createDefaultDevices() {
                    rA.mkdir('/dev'),
                        rA.registerDevice(rA.makedev(1, 3), {
                            read: () => 0,
                            write: (r, e, t, n, o) => n,
                            llseek: () => 0
                        }),
                        rA.mkdev('/dev/null', rA.makedev(1, 3)),
                        rv.register(rA.makedev(5, 0), rv.default_tty_ops),
                        rv.register(rA.makedev(6, 0), rv.default_tty1_ops),
                        rA.mkdev('/dev/tty', rA.makedev(5, 0)),
                        rA.mkdev('/dev/tty1', rA.makedev(6, 0));
                    var r = new Uint8Array(1024),
                        e = 0,
                        t = () => (0 === e && (e = rl(r).byteLength), r[--e]);
                    rA.createDevice('/dev', 'random', t), rA.createDevice('/dev', 'urandom', t), rA.mkdir('/dev/shm'), rA.mkdir('/dev/shm/tmp');
                },
                createSpecialDirectories() {
                    rA.mkdir('/proc');
                    var r = rA.mkdir('/proc/self');
                    rA.mkdir('/proc/self/fd'),
                        rA.mount(
                            {
                                mount() {
                                    var e = rA.createNode(r, 'fd', 16895, 73);
                                    return (
                                        (e.stream_ops = { llseek: rE.stream_ops.llseek }),
                                        (e.node_ops = {
                                            lookup(r, e) {
                                                var t = +e,
                                                    n = rA.getStreamChecked(t),
                                                    o = {
                                                        parent: null,
                                                        mount: { mountpoint: 'fake' },
                                                        node_ops: { readlink: () => n.path },
                                                        id: t + 1
                                                    };
                                                return (o.parent = o), o;
                                            },
                                            readdir: () =>
                                                Array.from(rA.streams.entries())
                                                    .filter((r) => {
                                                        let [e, t] = r;
                                                        return t;
                                                    })
                                                    .map((r) => {
                                                        let [e, t] = r;
                                                        return e.toString();
                                                    })
                                        }),
                                        e
                                    );
                                }
                            },
                            {},
                            '/proc/self/fd'
                        );
                },
                createStandardStreams(r, e, t) {
                    r ? rA.createDevice('/dev', 'stdin', r) : rA.symlink('/dev/tty', '/dev/stdin'), e ? rA.createDevice('/dev', 'stdout', null, e) : rA.symlink('/dev/tty', '/dev/stdout'), t ? rA.createDevice('/dev', 'stderr', null, t) : rA.symlink('/dev/tty1', '/dev/stderr'), rA.open('/dev/stdin', 0), rA.open('/dev/stdout', 1), rA.open('/dev/stderr', 1);
                },
                staticInit() {
                    (rA.nameTable = Array(4096)), rA.mount(rE, {}, '/'), rA.createDefaultDirectories(), rA.createDefaultDevices(), rA.createSpecialDirectories(), (rA.filesystems = { MEMFS: rE });
                },
                init(e, t, n) {
                    (rA.initialized = !0), null != e || (e = r.stdin), null != t || (t = r.stdout), null != n || (n = r.stderr), rA.createStandardStreams(e, t, n);
                },
                quit() {
                    rA.initialized = !1;
                    for (var r = 0; r < rA.streams.length; r++) {
                        var e = rA.streams[r];
                        e && rA.close(e);
                    }
                },
                findObject(r, e) {
                    var t = rA.analyzePath(r, e);
                    return t.exists ? t.object : null;
                },
                analyzePath(r, e) {
                    try {
                        var t = rA.lookupPath(r, { follow: !e });
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
                        parentObject: null
                    };
                    try {
                        var t = rA.lookupPath(r, { parent: !0 });
                        (n.parentExists = !0), (n.parentPath = t.path), (n.parentObject = t.node), (n.name = ri.basename(r)), (t = rA.lookupPath(r, { follow: !e })), (n.exists = !0), (n.path = t.path), (n.object = t.node), (n.name = t.node.name), (n.isRoot = '/' === t.path);
                    } catch (r) {
                        n.error = r.errno;
                    }
                    return n;
                },
                createPath(r, e, t, n) {
                    r = 'string' == typeof r ? r : rA.getPath(r);
                    for (var o = e.split('/').reverse(); o.length; ) {
                        var a = o.pop();
                        if (a) {
                            var i = ri.join2(r, a);
                            try {
                                rA.mkdir(i);
                            } catch (r) {}
                            r = i;
                        }
                    }
                    return i;
                },
                createFile(r, e, t, n, o) {
                    var a = ri.join2('string' == typeof r ? r : rA.getPath(r), e),
                        i = rC(n, o);
                    return rA.create(a, i);
                },
                createDataFile(r, e, t, n, o, a) {
                    var i = e;
                    r && ((r = 'string' == typeof r ? r : rA.getPath(r)), (i = e ? ri.join2(r, e) : r));
                    var s = rC(n, o),
                        l = rA.create(i, s);
                    if (t) {
                        if ('string' == typeof t) {
                            for (var c = Array(t.length), u = 0, d = t.length; u < d; ++u) c[u] = t.charCodeAt(u);
                            t = c;
                        }
                        rA.chmod(l, 146 | s);
                        var f = rA.open(l, 577);
                        rA.write(f, t, 0, t.length, 0, a), rA.close(f), rA.chmod(l, s);
                    }
                },
                createDevice(r, e, t, n) {
                    var o,
                        a,
                        i = ri.join2('string' == typeof r ? r : rA.getPath(r), e),
                        s = rC(!!t, !!n);
                    null != (o = rA.createDevice).major || (o.major = 64);
                    var l = rA.makedev(rA.createDevice.major++, 0);
                    return (
                        rA.registerDevice(l, {
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
                                        throw new rA.ErrnoError(29);
                                    }
                                    if (void 0 === i && 0 === s) throw new rA.ErrnoError(6);
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
                                        throw new rA.ErrnoError(29);
                                    }
                                return o && (r.node.mtime = r.node.ctime = Date.now()), i;
                            }
                        }),
                        rA.mkdev(i, s, l)
                    );
                },
                forceLoadFile(r) {
                    if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
                    if ('undefined' != typeof XMLHttpRequest) throw Error('Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.');
                    try {
                        (r.contents = s(r.url)), (r.usedBytes = r.contents.length);
                    } catch (r) {
                        throw new rA.ErrnoError(29);
                    }
                },
                createLazyFile(r, e, t, n, o) {
                    if ('undefined' != typeof XMLHttpRequest) {
                        var a;
                        throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
                    }
                    var a = {
                            isDevice: !1,
                            url: t
                        },
                        i = rA.createFile(r, e, a, n, o);
                    a.contents ? (i.contents = a.contents) : a.url && ((i.contents = null), (i.url = a.url)),
                        Object.defineProperties(i, {
                            usedBytes: {
                                get: function () {
                                    return this.contents.length;
                                }
                            }
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
                                return rA.forceLoadFile(i), e(...t);
                            };
                        }),
                        (s.read = (r, e, t, n, o) => (rA.forceLoadFile(i), l(r, e, t, n, o))),
                        (s.mmap = (r, e, t, n, o) => {
                            rA.forceLoadFile(i);
                            var a = rw(e);
                            if (!a) throw new rA.ErrnoError(48);
                            return (
                                l(r, c, a, e, t),
                                {
                                    ptr: a,
                                    allocated: !0
                                }
                            );
                        }),
                        (i.stream_ops = s),
                        i
                    );
                }
            },
            r$ = (r, e) => (r ? rd(u, r, e) : ''),
            rF = {
                DEFAULT_POLLMASK: 5,
                calculateAt(r, e, t) {
                    if (ri.isAbs(e)) return e;
                    if (-100 === r) n = rA.cwd();
                    else {
                        var n;
                        n = rF.getStreamFromFD(r).path;
                    }
                    if (0 == e.length) {
                        if (!t) throw new rA.ErrnoError(44);
                        return n;
                    }
                    return n + '/' + e;
                },
                doStat(r, e, t) {
                    var n = r(e);
                    (h[t >> 2] = n.dev), (h[(t + 4) >> 2] = n.mode), (p[(t + 8) >> 2] = n.nlink), (h[(t + 12) >> 2] = n.uid), (h[(t + 16) >> 2] = n.gid), (h[(t + 20) >> 2] = n.rdev), (v[(t + 24) >> 3] = BigInt(n.size)), (h[(t + 32) >> 2] = 4096), (h[(t + 36) >> 2] = n.blocks);
                    var o = n.atime.getTime(),
                        a = n.mtime.getTime(),
                        i = n.ctime.getTime();
                    return (v[(t + 40) >> 3] = BigInt(Math.floor(o / 1000))), (p[(t + 48) >> 2] = (o % 1000) * 1000000), (v[(t + 56) >> 3] = BigInt(Math.floor(a / 1000))), (p[(t + 64) >> 2] = (a % 1000) * 1000000), (v[(t + 72) >> 3] = BigInt(Math.floor(i / 1000))), (p[(t + 80) >> 2] = (i % 1000) * 1000000), (v[(t + 88) >> 3] = BigInt(n.ino)), 0;
                },
                doMsync(r, e, t, n, o) {
                    if (!rA.isFile(e.node.mode)) throw new rA.ErrnoError(43);
                    if (2 & n) return 0;
                    var a = u.slice(r, r + t);
                    rA.msync(e, a, o, t, n);
                },
                getStreamFromFD: (r) => rA.getStreamChecked(r),
                varargs: void 0,
                getStr: (r) => r$(r)
            },
            rD = (r, e, t) => rp(r, u, e, t),
            rS = (r) => {
                if (null === r) return 'null';
                var e = typeof r;
                return 'object' === e || 'array' === e || 'function' === e ? r.toString() : '' + r;
            },
            rj = (r) => {
                for (var e = '', t = r; u[t]; ) e += E[u[t++]];
                return e;
            },
            rx = {},
            rO = {},
            rM = {},
            rR = (r) => {
                throw new b(r);
            },
            rN = (r) => {
                throw new _(r);
            },
            rW = (r, e, t) => {
                function n(e) {
                    var n = t(e);
                    n.length !== r.length && rN('Mismatched type converter count');
                    for (var o = 0; o < r.length; ++o) rB(r[o], n[o]);
                }
                r.forEach((r) => (rM[r] = e));
                var o = Array(e.length),
                    a = [],
                    i = 0;
                e.forEach((r, e) => {
                    rO.hasOwnProperty(r)
                        ? (o[e] = rO[r])
                        : (a.push(r),
                          rx.hasOwnProperty(r) || (rx[r] = []),
                          rx[r].push(() => {
                              (o[e] = rO[r]), ++i === a.length && n(o);
                          }));
                }),
                    0 === a.length && n(o);
            };
        function rB(r, e) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (function (r, e) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                var n = e.name;
                if ((r || rR('type "'.concat(n, '" must have a positive integer typeid pointer')), rO.hasOwnProperty(r)))
                    if (t.ignoreDuplicateRegistrations) return;
                    else rR("Cannot register type '".concat(n, "' twice"));
                if (((rO[r] = e), delete rM[r], rx.hasOwnProperty(r))) {
                    var o = rx[r];
                    delete rx[r], o.forEach((r) => r());
                }
            })(r, e, t);
        }
        var rU = (r, e, t) => {
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
                        throw TypeError('invalid integer width ('.concat(e, '): ').concat(r));
                }
            },
            rz = (r) => ({
                count: r.count,
                deleteScheduled: r.deleteScheduled,
                preservePointerOnDelete: r.preservePointerOnDelete,
                ptr: r.ptr,
                ptrType: r.ptrType,
                smartPtr: r.smartPtr,
                smartPtrType: r.smartPtrType
            }),
            rI = (r) => {
                rR(r.$$.ptrType.registeredClass.name + ' instance already deleted');
            },
            rV = !1,
            rL = (r) => {},
            rH = (r) => {
                r.smartPtr ? r.smartPtrType.rawDestructor(r.smartPtr) : r.ptrType.registeredClass.rawDestructor(r.ptr);
            },
            rq = (r) => {
                (r.count.value -= 1), 0 === r.count.value && rH(r);
            },
            rG = (r, e, t) => {
                if (e === t) return r;
                if (void 0 === t.baseClass) return null;
                var n = rG(r, e, t.baseClass);
                return null === n ? null : t.downcast(n);
            },
            rX = {},
            rY = {},
            rZ = (r, e) => {
                for (void 0 === e && rR('ptr should not be undefined'); r.baseClass; ) (e = r.upcast(e)), (r = r.baseClass);
                return e;
            },
            rK = (r, e) => rY[(e = rZ(r, e))],
            rJ = (r, e) => (
                (e.ptrType && e.ptr) || rN('makeClassHandle requires ptr and ptrType'),
                !!e.smartPtrType != !!e.smartPtr && rN('Both smartPtrType and smartPtr must be specified'),
                (e.count = { value: 1 }),
                rQ(
                    Object.create(r, {
                        $$: {
                            value: e,
                            writable: !0
                        }
                    })
                )
            ),
            rQ = (r) =>
                'undefined' == typeof FinalizationRegistry
                    ? ((rQ = (r) => r), r)
                    : ((rV = new FinalizationRegistry((r) => {
                          rq(r.$$);
                      })),
                      (rQ = (r) => {
                          var e = r.$$;
                          return e.smartPtr && rV.register(r, { $$: e }, r), r;
                      }),
                      (rL = (r) => rV.unregister(r)),
                      rQ(r)),
            r0 = [],
            r1 = () => {
                for (; r0.length; ) {
                    var r = r0.pop();
                    (r.$$.deleteScheduled = !1), r.delete();
                }
            };
        function r2() {}
        var r4 = (r, e) => Object.defineProperty(e, 'name', { value: r }),
            r5 = (r, e, t) => {
                if (void 0 === r[e].overloadTable) {
                    var n = r[e];
                    (r[e] = function () {
                        for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                        return r[e].overloadTable.hasOwnProperty(o.length) || rR("Function '".concat(t, "' called with an invalid number of arguments (").concat(o.length, ') - expects one of (').concat(r[e].overloadTable, ')!')), r[e].overloadTable[o.length].apply(this, o);
                    }),
                        (r[e].overloadTable = []),
                        (r[e].overloadTable[n.argCount] = n);
                }
            },
            r6 = (e, t, n) => {
                r.hasOwnProperty(e) ? ((void 0 === n || (void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[n])) && rR("Cannot register public name '".concat(e, "' twice")), r5(r, e, e), r[e].overloadTable.hasOwnProperty(n) && rR('Cannot register multiple overloads of a function with the same number of arguments ('.concat(n, ')!')), (r[e].overloadTable[n] = t)) : ((r[e] = t), (r[e].argCount = n));
            },
            r3 = (r) => {
                var e = (r = r.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
                return e >= 48 && e <= 57 ? '_'.concat(r) : r;
            };
        function r8(r, e, t, n, o, a, i, s) {
            (this.name = r), (this.constructor = e), (this.instancePrototype = t), (this.rawDestructor = n), (this.baseClass = o), (this.getActualType = a), (this.upcast = i), (this.downcast = s), (this.pureVirtualFunctions = []);
        }
        var r9 = (r, e, t) => {
            for (; e !== t; ) e.upcast || rR('Expected null or instance of '.concat(t.name, ', got an instance of ').concat(e.name)), (r = e.upcast(r)), (e = e.baseClass);
            return r;
        };
        function r7(r, e) {
            if (null === e) return this.isReference && rR('null is not a valid '.concat(this.name)), 0;
            e.$$ || rR('Cannot pass "'.concat(rS(e), '" as a ').concat(this.name)), e.$$.ptr || rR('Cannot pass deleted object as a pointer of type '.concat(this.name));
            var t = e.$$.ptrType.registeredClass;
            return r9(e.$$.ptr, t, this.registeredClass);
        }
        function er(r, e) {
            if (null === e) return (this.isReference && rR('null is not a valid '.concat(this.name)), this.isSmartPointer) ? ((t = this.rawConstructor()), null !== r && r.push(this.rawDestructor, t), t) : 0;
            (e && e.$$) || rR('Cannot pass "'.concat(rS(e), '" as a ').concat(this.name)), e.$$.ptr || rR('Cannot pass deleted object as a pointer of type '.concat(this.name)), !this.isConst && e.$$.ptrType.isConst && rR('Cannot convert argument of type '.concat(e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name, ' to parameter type ').concat(this.name));
            var t,
                n = e.$$.ptrType.registeredClass;
            if (((t = r9(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
                switch ((void 0 === e.$$.smartPtr && rR('Passing raw pointer to smart pointer is illegal'), this.sharingPolicy)) {
                    case 0:
                        e.$$.smartPtrType === this ? (t = e.$$.smartPtr) : rR('Cannot convert argument of type '.concat(e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name, ' to parameter type ').concat(this.name));
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
                                ew.toHandle(() => o.delete())
                            )),
                                null !== r && r.push(this.rawDestructor, t);
                        }
                        break;
                    default:
                        rR('Unsupporting sharing policy');
                }
            return t;
        }
        function ee(r, e) {
            if (null === e) return this.isReference && rR('null is not a valid '.concat(this.name)), 0;
            e.$$ || rR('Cannot pass "'.concat(rS(e), '" as a ').concat(this.name)), e.$$.ptr || rR('Cannot pass deleted object as a pointer of type '.concat(this.name)), e.$$.ptrType.isConst && rR('Cannot convert argument of type '.concat(e.$$.ptrType.name, ' to parameter type ').concat(this.name));
            var t = e.$$.ptrType.registeredClass;
            return r9(e.$$.ptr, t, this.registeredClass);
        }
        function et(r) {
            return this.fromWireType(p[r >> 2]);
        }
        function en(r, e, t, n, o, a, i, s, l, c, u) {
            (this.name = r), (this.registeredClass = e), (this.isReference = t), (this.isConst = n), (this.isSmartPointer = o), (this.pointeeType = a), (this.sharingPolicy = i), (this.rawGetPointee = s), (this.rawConstructor = l), (this.rawShare = c), (this.rawDestructor = u), o || void 0 !== e.baseClass ? (this.toWireType = er) : (n ? (this.toWireType = r7) : (this.toWireType = ee), (this.destructorFunction = null));
        }
        var eo = (e, t, n) => {
                r.hasOwnProperty(e) || rN('Replacing nonexistent public symbol'), void 0 !== r[e].overloadTable && void 0 !== n ? (r[e].overloadTable[n] = t) : ((r[e] = t), (r[e].argCount = n));
            },
            ea = [],
            ei = (r) => {
                var e = ea[r];
                return e || (r >= ea.length && (ea.length = r + 1), (ea[r] = e = P.get(r))), e;
            },
            es = (r, e) => {
                r = rj(r);
                var t = ei(e);
                return 'function' != typeof t && rR('unknown function pointer with signature '.concat(r, ': ').concat(e)), t;
            },
            el = (r) => {
                var e = e2(r),
                    t = rj(e);
                return e5(e), t;
            },
            ec = (r, e) => {
                var t = [],
                    n = {};
                throw (
                    (e.forEach(function r(e) {
                        if (!n[e] && !rO[e]) {
                            if (rM[e]) return void rM[e].forEach(r);
                            t.push(e), (n[e] = !0);
                        }
                    }),
                    new T(''.concat(r, ': ') + t.map(el).join([', '])))
                );
            },
            eu = (r, e) => {
                for (var t = [], n = 0; n < r; n++) t.push(p[(e + 4 * n) >> 2]);
                return t;
            },
            ed = (r) => {
                for (; r.length; ) {
                    var e = r.pop();
                    r.pop()(e);
                }
            };
        function ef(r) {
            for (var e = 1; e < r.length; ++e) if (null !== r[e] && void 0 === r[e].destructorFunction) return !0;
            return !1;
        }
        function eh(r, e) {
            if (!(r instanceof Function)) throw TypeError('new_ called with constructor type '.concat(typeof r, ' which is not a function'));
            var t = r4(r.name || 'unknownFunctionName', function () {});
            t.prototype = r.prototype;
            var n = new t(),
                o = r.apply(n, e);
            return o instanceof Object ? o : n;
        }
        function ep(r, e, t, n, o, a) {
            var i = e.length;
            i < 2 && rR("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var s = null !== e[1] && null !== t, l = ef(e), c = 'void' !== e[0].name, u = [r, rR, n, o, ed, e[0], e[1]], d = 0; d < i - 2; ++d) u.push(e[d + 2]);
            if (!l) for (var d = s ? 1 : 2; d < e.length; ++d) null !== e[d].destructorFunction && u.push(e[d].destructorFunction);
            let [f, h] = (function (r, e, t, n) {
                var o = ef(r),
                    a = r.length - 2,
                    i = [],
                    s = ['fn'];
                e && s.push('thisWired');
                for (var l = 0; l < a; ++l) i.push('arg'.concat(l)), s.push('arg'.concat(l, 'Wired'));
                (i = i.join(',')), (s = s.join(','));
                var c = 'return function ('.concat(i, ') {\n');
                o && (c += 'var destructors = [];\n');
                var u = o ? 'destructors' : 'null',
                    d = ['humanName', 'throwBindingError', 'invoker', 'fn', 'runDestructors', 'retType', 'classParam'];
                e && (c += "var thisWired = classParam['toWireType'](".concat(u, ', this);\n'));
                for (var l = 0; l < a; ++l) (c += 'var arg'.concat(l, 'Wired = argType').concat(l, "['toWireType'](").concat(u, ', arg').concat(l, ');\n')), d.push('argType'.concat(l));
                if (((c += (t || n ? 'var rv = ' : '') + 'invoker('.concat(s, ');\n')), o)) c += 'runDestructors(destructors);\n';
                else
                    for (var l = e ? 1 : 2; l < r.length; ++l) {
                        var f = 1 === l ? 'thisWired' : 'arg' + (l - 2) + 'Wired';
                        null !== r[l].destructorFunction && ((c += ''.concat(f, '_dtor(').concat(f, ');\n')), d.push(''.concat(f, '_dtor')));
                    }
                return t && (c += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [d, (c += '}\n')];
            })(e, s, c, a);
            return f.push(h), r4(r, eh(Function, f)(...u));
        }
        var em = (r) => {
                let e = (r = r.trim()).indexOf('(');
                return -1 !== e ? r.substr(0, e) : r;
            },
            ev = [],
            ey = [],
            eg = (r) => {
                r > 9 && 0 == --ey[r + 1] && ((ey[r] = void 0), ev.push(r));
            },
            ew = {
                toValue: (r) => (r || rR('Cannot use deleted val. handle = ' + r), ey[r]),
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
                            let e = ev.pop() || ey.length;
                            return (ey[e] = r), (ey[e + 1] = 1), e;
                        }
                    }
                }
            },
            eE = {
                name: 'emscripten::val',
                fromWireType: (r) => {
                    var e = ew.toValue(r);
                    return eg(r), e;
                },
                toWireType: (r, e) => ew.toHandle(e),
                argPackAdvance: 8,
                readValueFromPointer: et,
                destructorFunction: null
            },
            eb = (r, e, t) => {
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
                        throw TypeError('invalid integer width ('.concat(e, '): ').concat(r));
                }
            },
            e_ = (r, e) => {
                var t = rO[r];
                return void 0 === t && rR(''.concat(e, ' has unknown type ').concat(el(r))), t;
            },
            ek = (r, e) => {
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
                        throw TypeError('invalid float width ('.concat(e, '): ').concat(r));
                }
            },
            eP = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0,
            eT = (r, e) => {
                for (var t = r, n = t >> 1, o = n + e / 2; !(n >= o) && f[n]; ) ++n;
                if ((t = n << 1) - r > 32 && eP) return eP.decode(u.subarray(r, t));
                for (var a = '', i = 0; !(i >= e / 2); ++i) {
                    var s = d[(r + 2 * i) >> 1];
                    if (0 == s) break;
                    a += String.fromCharCode(s);
                }
                return a;
            },
            eC = (r, e, t) => {
                if ((null != t || (t = 2147483647), t < 2)) return 0;
                for (var n = e, o = (t -= 2) < 2 * r.length ? t / 2 : r.length, a = 0; a < o; ++a) {
                    var i = r.charCodeAt(a);
                    (d[e >> 1] = i), (e += 2);
                }
                return (d[e >> 1] = 0), e - n;
            },
            eA = (r) => 2 * r.length,
            e$ = (r, e) => {
                for (var t = 0, n = ''; !(t >= e / 4); ) {
                    var o = h[(r + 4 * t) >> 2];
                    if (0 == o) break;
                    if ((++t, o >= 65536)) {
                        var a = o - 65536;
                        n += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
                    } else n += String.fromCharCode(o);
                }
                return n;
            },
            eF = (r, e, t) => {
                if ((null != t || (t = 2147483647), t < 4)) return 0;
                for (var n = e, o = n + t - 4, a = 0; a < r.length; ++a) {
                    var i = r.charCodeAt(a);
                    if ((i >= 55296 && i <= 57343 && (i = (65536 + ((1023 & i) << 10)) | (1023 & r.charCodeAt(++a))), (h[e >> 2] = i), (e += 4) + 4 > o)) break;
                }
                return (h[e >> 2] = 0), e - n;
            },
            eD = (r) => {
                for (var e = 0, t = 0; t < r.length; ++t) {
                    var n = r.charCodeAt(t);
                    n >= 55296 && n <= 57343 && ++t, (e += 4);
                }
                return e;
            },
            eS = (r, e, t) => {
                var n = [],
                    o = r.toWireType(n, t);
                return n.length && (p[e >> 2] = ew.toHandle(n)), o;
            },
            ej = [],
            ex = {},
            eO = (r) => {
                var e = ex[r];
                return void 0 === e ? rj(r) : e;
            },
            eM = (r) => {
                var e = ej.length;
                return ej.push(r), e;
            },
            eR = (r, e) => {
                for (var t = Array(r), n = 0; n < r; ++n) t[n] = e_(p[(e + 4 * n) >> 2], 'parameter ' + n);
                return t;
            },
            eN = (r) => (r < -9007199254740992 || r > 9007199254740992 ? NaN : Number(r)),
            eW = () => performance.now(),
            eB = () => Date.now(),
            eU = (r) => r >= 0 && r <= 3,
            ez = () => 2147483648,
            eI = (r) => {
                var e = ((r - l.buffer.byteLength + 65535) / 65536) | 0;
                try {
                    return l.grow(e), B(), 1;
                } catch (r) {}
            },
            eV = {},
            eL = () => x || './this.program',
            eH = () => {
                if (!eH.strings) {
                    var r = {
                        USER: 'web_user',
                        LOGNAME: 'web_user',
                        PATH: '/',
                        PWD: '/',
                        HOME: '/home/web_user',
                        LANG: (('object' == typeof navigator && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8',
                        _: eL()
                    };
                    for (var e in eV) void 0 === eV[e] ? delete r[e] : (r[e] = eV[e]);
                    var t = [];
                    for (var e in r) t.push(''.concat(e, '=').concat(r[e]));
                    eH.strings = t;
                }
                return eH.strings;
            },
            eq = (r, e) => {
                for (var t = 0; t < r.length; ++t) c[e++] = r.charCodeAt(t);
                c[e] = 0;
            },
            eG = (r, e, t, n) => {
                for (var o = 0, a = 0; a < t; a++) {
                    var i = p[e >> 2],
                        s = p[(e + 4) >> 2];
                    e += 8;
                    var l = rA.read(r, c, i, s, n);
                    if (l < 0) return -1;
                    if (((o += l), l < s)) break;
                    void 0 !== n && (n += l);
                }
                return o;
            },
            eX = (r, e, t, n) => {
                for (var o = 0, a = 0; a < t; a++) {
                    var i = p[e >> 2],
                        s = p[(e + 4) >> 2];
                    e += 8;
                    var l = rA.write(r, c, i, s, n);
                    if (l < 0) return -1;
                    if (((o += l), l < s)) break;
                    void 0 !== n && (n += l);
                }
                return o;
            },
            eY = (e) => r['_' + e],
            eZ = (r, e) => {
                c.set(r, e);
            },
            eK = (r) => e8(r),
            eJ = (r) => {
                var e = rh(r) + 1,
                    t = eK(e);
                return rD(r, t, e), t;
            };
        (rA.createPreloadedFile = (r, e, t, n, o, a, i, s, l, c) => {
            var u = e ? rc.resolve(ri.join2(r, e)) : r,
                d = 'cp '.concat(u);
            function f(t) {
                function f(t) {
                    null == c || c(), s || r_(r, e, t, n, o, l), null == a || a(), q(d);
                }
                rP(t, u, f, () => {
                    null == i || i(), q(d);
                }) || f(t);
            }
            H(d), 'string' == typeof t ? rb(t).then(f, i) : f(t);
        }),
            rA.staticInit(),
            (rE.doesNotExistError = new rA.ErrnoError(44)),
            (rE.doesNotExistError.stack = '<generic error, no stack>');
        for (var eQ = Array(256), e0 = 0; e0 < 256; ++e0) eQ[e0] = String.fromCharCode(e0);
        (E = eQ),
            (b = r.BindingError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = 'BindingError');
                    }
                }),
            (_ = r.InternalError =
                class extends Error {
                    constructor(r) {
                        super(r), (this.name = 'InternalError');
                    }
                }),
            Object.assign(r2.prototype, {
                isAliasOf(r) {
                    if (!(this instanceof r2) || !(r instanceof r2)) return !1;
                    var e = this.$$.ptrType.registeredClass,
                        t = this.$$.ptr;
                    r.$$ = r.$$;
                    for (var n = r.$$.ptrType.registeredClass, o = r.$$.ptr; e.baseClass; ) (t = e.upcast(t)), (e = e.baseClass);
                    for (; n.baseClass; ) (o = n.upcast(o)), (n = n.baseClass);
                    return e === n && t === o;
                },
                clone() {
                    if ((this.$$.ptr || rI(this), this.$$.preservePointerOnDelete)) return (this.$$.count.value += 1), this;
                    var r = rQ(Object.create(Object.getPrototypeOf(this), { $$: { value: rz(this.$$) } }));
                    return (r.$$.count.value += 1), (r.$$.deleteScheduled = !1), r;
                },
                delete() {
                    this.$$.ptr || rI(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && rR('Object already scheduled for deletion'), rL(this), rq(this.$$), this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
                },
                isDeleted() {
                    return !this.$$.ptr;
                },
                deleteLater() {
                    return this.$$.ptr || rI(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && rR('Object already scheduled for deletion'), r0.push(this), 1 === r0.length && k && k(r1), (this.$$.deleteScheduled = !0), this;
                }
            }),
            Object.assign(en.prototype, {
                getPointee(r) {
                    return this.rawGetPointee && (r = this.rawGetPointee(r)), r;
                },
                destructor(r) {
                    var e;
                    null == (e = this.rawDestructor) || e.call(this, r);
                },
                argPackAdvance: 8,
                readValueFromPointer: et,
                fromWireType: function (r) {
                    var e,
                        t = this.getPointee(r);
                    if (!t) return this.destructor(r), null;
                    var n = rK(this.registeredClass, t);
                    if (void 0 !== n)
                        if (0 === n.$$.count.value) return (n.$$.ptr = t), (n.$$.smartPtr = r), n.clone();
                        else {
                            var o = n.clone();
                            return this.destructor(r), o;
                        }
                    function a() {
                        return this.isSmartPointer
                            ? rJ(this.registeredClass.instancePrototype, {
                                  ptrType: this.pointeeType,
                                  ptr: t,
                                  smartPtrType: this,
                                  smartPtr: r
                              })
                            : rJ(this.registeredClass.instancePrototype, {
                                  ptrType: this,
                                  ptr: r
                              });
                    }
                    var i = rX[this.registeredClass.getActualType(t)];
                    if (!i) return a.call(this);
                    e = this.isConst ? i.constPointerType : i.pointerType;
                    var s = rG(t, this.registeredClass, e.registeredClass);
                    return null === s
                        ? a.call(this)
                        : this.isSmartPointer
                          ? rJ(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: s,
                                smartPtrType: this,
                                smartPtr: r
                            })
                          : rJ(e.registeredClass.instancePrototype, {
                                ptrType: e,
                                ptr: s
                            });
                }
            }),
            ($ = Error),
            ((D = r4((F = 'UnboundTypeError'), function (r) {
                (this.name = F), (this.message = r);
                var e = Error(r).stack;
                void 0 !== e && (this.stack = this.toString() + '\n' + e.replace(/^Error(:[^\n]*)?\n/, ''));
            })).prototype = Object.create($.prototype)),
            (D.prototype.constructor = D),
            (D.prototype.toString = function () {
                return void 0 === this.message ? this.name : ''.concat(this.name, ': ').concat(this.message);
            }),
            (T = r.UnboundTypeError = D),
            ey.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
            (r.count_emval_handles = () => ey.length / 2 - 5 - ev.length);
        var e1 = {
            a: (r, e, t) => {
                throw (new rt(r).init(e, t), (rn = r), ro++, rn);
            },
            x: function (r, e, t) {
                rF.varargs = t;
                try {
                    var n = rF.getStreamFromFD(r);
                    switch (e) {
                        case 0:
                            var o = ra();
                            if (o < 0) break;
                            for (; rA.streams[o]; ) o++;
                            return rA.dupStream(n, o).fd;
                        case 1:
                        case 2:
                        case 13:
                        case 14:
                            return 0;
                        case 3:
                            return n.flags;
                        case 4:
                            var o = ra();
                            return (n.flags |= o), 0;
                        case 12:
                            var o = ra();
                            return (d[(o + 0) >> 1] = 2), 0;
                    }
                    return -28;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            P: function (r, e) {
                try {
                    var t = rF.getStreamFromFD(r);
                    return rF.doStat(rA.stat, t.path, e);
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            G: function (r, e, t) {
                try {
                    var n = rF.getStreamFromFD(r);
                    n.getdents || (n.getdents = rA.readdir(n.path));
                    for (var o = 0, a = rA.llseek(n, 0, 1), i = Math.floor(a / 280), s = Math.min(n.getdents.length, i + Math.floor(t / 280)), l = i; l < s; l++) {
                        var u,
                            f,
                            h,
                            p = n.getdents[l];
                        if ('.' === p) (u = n.node.id), (f = 4);
                        else if ('..' === p) (u = rA.lookupPath(n.path, { parent: !0 }).node.id), (f = 4);
                        else {
                            try {
                                h = rA.lookupNode(n.node, p);
                            } catch (r) {
                                if ((null == r ? void 0 : r.errno) === 28) continue;
                                throw r;
                            }
                            (u = h.id), (f = rA.isChrdev(h.mode) ? 2 : rA.isDir(h.mode) ? 4 : rA.isLink(h.mode) ? 10 : 8);
                        }
                        (v[(e + o) >> 3] = BigInt(u)), (v[(e + o + 8) >> 3] = BigInt((l + 1) * 280)), (d[(e + o + 16) >> 1] = 280), (c[e + o + 18] = f), rD(p, e + o + 19, 256), (o += 280);
                    }
                    return rA.llseek(n, 280 * l, 0), o;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            s: function (r, e, t) {
                rF.varargs = t;
                try {
                    var n = rF.getStreamFromFD(r);
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
                                    a = ra();
                                (h[a >> 2] = o.c_iflag || 0), (h[(a + 4) >> 2] = o.c_oflag || 0), (h[(a + 8) >> 2] = o.c_cflag || 0), (h[(a + 12) >> 2] = o.c_lflag || 0);
                                for (var i = 0; i < 32; i++) c[a + i + 17] = o.c_cc[i] || 0;
                            }
                            return 0;
                        case 21506:
                        case 21507:
                        case 21508:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tcsets) {
                                for (var a = ra(), s = h[a >> 2], l = h[(a + 4) >> 2], u = h[(a + 8) >> 2], f = h[(a + 12) >> 2], p = [], i = 0; i < 32; i++) p.push(c[a + i + 17]);
                                return n.tty.ops.ioctl_tcsets(n.tty, e, {
                                    c_iflag: s,
                                    c_oflag: l,
                                    c_cflag: u,
                                    c_lflag: f,
                                    c_cc: p
                                });
                            }
                            return 0;
                        case 21519:
                            if (!n.tty) return -59;
                            var a = ra();
                            return (h[a >> 2] = 0), 0;
                        case 21520:
                            if (!n.tty) return -59;
                            return -28;
                        case 21531:
                            var a = ra();
                            return rA.ioctl(n, e, a);
                        case 21523:
                            if (!n.tty) return -59;
                            if (n.tty.ops.ioctl_tiocgwinsz) {
                                var m = n.tty.ops.ioctl_tiocgwinsz(n.tty),
                                    a = ra();
                                (d[a >> 1] = m[0]), (d[(a + 2) >> 1] = m[1]);
                            }
                            return 0;
                        default:
                            return -28;
                    }
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            M: function (r, e) {
                try {
                    return (r = rF.getStr(r)), rF.doStat(rA.lstat, r, e);
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            N: function (r, e, t, n) {
                try {
                    e = rF.getStr(e);
                    var o = 256 & n,
                        a = 4096 & n;
                    return (n &= -6401), (e = rF.calculateAt(r, e, a)), rF.doStat(o ? rA.lstat : rA.stat, e, t);
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            y: function (r, e, t, n) {
                rF.varargs = n;
                try {
                    (e = rF.getStr(e)), (e = rF.calculateAt(r, e));
                    var o = n ? ra() : 0;
                    return rA.open(e, t, o).fd;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            O: function (r, e) {
                try {
                    return (r = rF.getStr(r)), rF.doStat(rA.stat, r, e);
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return -r.errno;
                }
            },
            R: () => G(''),
            B: (r, e, t, n, o) => {
                var a = -1 != (e = rj(e)).indexOf('u');
                rB(r, {
                    name: e,
                    fromWireType: (r) => r,
                    toWireType: function (r, e) {
                        if ('bigint' != typeof e && 'number' != typeof e) throw TypeError('Cannot convert "'.concat(rS(e), '" to ').concat(this.name));
                        return 'number' == typeof e && (e = BigInt(e)), e;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: rU(e, t, !a),
                    destructorFunction: null
                });
            },
            V: (r, e, t, n) => {
                rB(r, {
                    name: (e = rj(e)),
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
                    destructorFunction: null
                });
            },
            m: (r, e, t, n, o, a, i, s, l, c, u, d, f) => {
                (u = rj(u)), (a = es(o, a)), s && (s = es(i, s)), c && (c = es(l, c)), (f = es(d, f));
                var h = r3(u);
                r6(h, function () {
                    ec('Cannot construct '.concat(u, ' due to unbound types'), [n]);
                }),
                    rW([r, e, t], n ? [n] : [], (e) => {
                        e = e[0];
                        var t,
                            o,
                            i,
                            l = n ? (t = e.registeredClass).instancePrototype : r2.prototype,
                            d = r4(u, function () {
                                for (var r = arguments.length, e = Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                                if (Object.getPrototypeOf(this) !== p) throw new b("Use 'new' to construct " + u);
                                if (void 0 === m.constructor_body) throw new b(u + ' has no accessible constructor');
                                var n = m.constructor_body[e.length];
                                if (void 0 === n) throw new b('Tried to invoke ctor of '.concat(u, ' with invalid number of parameters (').concat(e.length, ') - expected (').concat(Object.keys(m.constructor_body).toString(), ') parameters instead!'));
                                return n.apply(this, e);
                            }),
                            p = Object.create(l, { constructor: { value: d } });
                        d.prototype = p;
                        var m = new r8(u, d, p, f, t, a, s, c);
                        m.baseClass && (null != (o = m.baseClass).__derivedClasses || (o.__derivedClasses = []), m.baseClass.__derivedClasses.push(m));
                        var v = new en(u, m, !0, !1, !1),
                            y = new en(u + '*', m, !1, !1, !1),
                            g = new en(u + ' const*', m, !1, !0, !1);
                        return (
                            (rX[r] = {
                                pointerType: y,
                                constPointerType: g
                            }),
                            eo(h, d),
                            [v, y, g]
                        );
                    });
            },
            q: (r, e, t, n, o, a) => {
                var i = eu(e, t);
                (o = es(n, o)),
                    rW([], [r], (r) => {
                        r = r[0];
                        var t = 'constructor '.concat(r.name);
                        if ((void 0 === r.registeredClass.constructor_body && (r.registeredClass.constructor_body = []), void 0 !== r.registeredClass.constructor_body[e - 1])) throw new b('Cannot register multiple constructors with identical number of parameters ('.concat(e - 1, ") for class '").concat(r.name, "'! Overload resolution is currently only performed using the parameter count, not actual type info!"));
                        return (
                            (r.registeredClass.constructor_body[e - 1] = () => {
                                ec('Cannot construct '.concat(r.name, ' due to unbound types'), i);
                            }),
                            rW([], i, (n) => (n.splice(1, 0, null), (r.registeredClass.constructor_body[e - 1] = ep(t, n, null, o, a)), [])),
                            []
                        );
                    });
            },
            c: (r, e, t, n, o, a, i, s, l, c) => {
                var u = eu(t, n);
                (e = em((e = rj(e)))),
                    (a = es(o, a)),
                    rW([], [r], (r) => {
                        r = r[0];
                        var n = ''.concat(r.name, '.').concat(e);
                        function o() {
                            ec('Cannot call '.concat(n, ' due to unbound types'), u);
                        }
                        e.startsWith('@@') && (e = Symbol[e.substring(2)]), s && r.registeredClass.pureVirtualFunctions.push(e);
                        var c = r.registeredClass.instancePrototype,
                            d = c[e];
                        return (
                            void 0 === d || (void 0 === d.overloadTable && d.className !== r.name && d.argCount === t - 2) ? ((o.argCount = t - 2), (o.className = r.name), (c[e] = o)) : (r5(c, e, n), (c[e].overloadTable[t - 2] = o)),
                            rW([], u, (o) => {
                                var s = ep(n, o, r, a, i, l);
                                return void 0 === c[e].overloadTable ? ((s.argCount = t - 2), (c[e] = s)) : (c[e].overloadTable[t - 2] = s), [];
                            }),
                            []
                        );
                    });
            },
            E: (e, t, n) => {
                (e = rj(e)), rW([], [t], (t) => ((t = t[0]), (r[e] = t.fromWireType(n)), []));
            },
            T: (r) => rB(r, eE),
            D: (r, e, t, n) => {
                function o() {}
                (e = rj(e)),
                    (o.values = {}),
                    rB(r, {
                        name: e,
                        constructor: o,
                        fromWireType: function (r) {
                            return this.constructor.values[r];
                        },
                        toWireType: (r, e) => e.value,
                        argPackAdvance: 8,
                        readValueFromPointer: eb(e, t, n),
                        destructorFunction: null
                    }),
                    r6(e, o);
            },
            j: (r, e, t) => {
                var n = e_(r, 'enum');
                e = rj(e);
                var o = n.constructor,
                    a = Object.create(n.constructor.prototype, {
                        value: { value: t },
                        constructor: {
                            value: r4(''.concat(n.name, '_').concat(e), function () {})
                        }
                    });
                (o.values[t] = a), (o[e] = a);
            },
            A: (r, e, t) => {
                rB(r, {
                    name: (e = rj(e)),
                    fromWireType: (r) => r,
                    toWireType: (r, e) => e,
                    argPackAdvance: 8,
                    readValueFromPointer: ek(e, t),
                    destructorFunction: null
                });
            },
            Y: (r, e, t, n, o, a, i, s) => {
                var l = eu(e, t);
                (r = em((r = rj(r)))),
                    (o = es(n, o)),
                    r6(
                        r,
                        function () {
                            ec('Cannot call '.concat(r, ' due to unbound types'), l);
                        },
                        e - 1
                    ),
                    rW([], l, (t) => {
                        var n = [t[0], null].concat(t.slice(1));
                        return eo(r, ep(r, n, null, o, a, i), e - 1), [];
                    });
            },
            i: (r, e, t, n, o) => {
                (e = rj(e)), -1 === o && (o = 4294967295);
                var a,
                    i = (r) => r;
                if (0 === n) {
                    var s = 32 - 8 * t;
                    i = (r) => (r << s) >>> s;
                }
                var l = e.includes('unsigned'),
                    c = (r, e) => {};
                rB(r, {
                    name: e,
                    fromWireType: i,
                    toWireType: l
                        ? function (r, e) {
                              return c(e, this.name), e >>> 0;
                          }
                        : function (r, e) {
                              return c(e, this.name), e;
                          },
                    argPackAdvance: 8,
                    readValueFromPointer: rU(e, t, 0 !== n),
                    destructorFunction: null
                });
            },
            d: (r, e, t) => {
                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][e];
                function o(r) {
                    var e = p[r >> 2],
                        t = p[(r + 4) >> 2];
                    return new n(c.buffer, t, e);
                }
                rB(
                    r,
                    {
                        name: (t = rj(t)),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o
                    },
                    { ignoreDuplicateRegistrations: !0 }
                );
            },
            X: (r, e, t, n, o, a, i, s, l, c, u, d) => {
                (t = rj(t)), (a = es(o, a)), (s = es(i, s)), (c = es(l, c)), (d = es(u, d)), rW([r], [e], (r) => ((r = r[0]), [new en(t, r.registeredClass, !1, !1, !0, r, n, a, s, c, d)]));
            },
            U: (r, e) => {
                rB(r, {
                    name: (e = rj(e)),
                    fromWireType(r) {
                        for (var e, t, n = p[r >> 2], o = r + 4, a = o, e = 0; e <= n; ++e) {
                            var i = o + e;
                            if (e == n || 0 == u[i]) {
                                var s = i - a,
                                    l = r$(a, s);
                                void 0 === t ? (t = l) : ((t += '\0'), (t += l)), (a = i + 1);
                            }
                        }
                        return e5(r), t;
                    },
                    toWireType(r, e) {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var t,
                            n = 'string' == typeof e;
                        n || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || rR('Cannot pass non-string to std::string'), (t = n ? rh(e) : e.length);
                        var o = e4(4 + t + 1),
                            a = o + 4;
                        if (((p[o >> 2] = t), n)) rD(e, a, t + 1);
                        else if (n)
                            for (var i = 0; i < t; ++i) {
                                var s = e.charCodeAt(i);
                                s > 255 && (e5(a), rR('String has UTF-16 code units that do not fit in 8 bits')), (u[a + i] = s);
                            }
                        else for (var i = 0; i < t; ++i) u[a + i] = e[i];
                        return null !== r && r.push(e5, o), o;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: et,
                    destructorFunction(r) {
                        e5(r);
                    }
                });
            },
            t: (r, e, t) => {
                var n, o, a, i;
                (t = rj(t)),
                    2 === e ? ((n = eT), (o = eC), (i = eA), (a = (r) => f[r >> 1])) : 4 === e && ((n = e$), (o = eF), (i = eD), (a = (r) => p[r >> 2])),
                    rB(r, {
                        name: t,
                        fromWireType: (r) => {
                            for (var t, o = p[r >> 2], i = r + 4, s = 0; s <= o; ++s) {
                                var l = r + 4 + s * e;
                                if (s == o || 0 == a(l)) {
                                    var c = l - i,
                                        u = n(i, c);
                                    void 0 === t ? (t = u) : ((t += '\0'), (t += u)), (i = l + e);
                                }
                            }
                            return e5(r), t;
                        },
                        toWireType: (r, n) => {
                            'string' != typeof n && rR('Cannot pass non-string to C++ string type '.concat(t));
                            var a = i(n),
                                s = e4(4 + a + e);
                            return (p[s >> 2] = a / e), o(n, s + 4, a + e), null !== r && r.push(e5, s), s;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: et,
                        destructorFunction(r) {
                            e5(r);
                        }
                    });
            },
            W: (r, e) => {
                rB(r, {
                    isVoid: !0,
                    name: (e = rj(e)),
                    argPackAdvance: 0,
                    fromWireType: () => void 0,
                    toWireType: (r, e) => void 0
                });
            },
            r: (r, e, t) => ((r = ew.toValue(r)), eS((e = e_(e, 'emval::as')), t, r)),
            u: (r, e, t, n) => (r = ej[r])(null, (e = ew.toValue(e)), t, n),
            C: (r, e, t, n, o) => ((r = ej[r]), r((e = ew.toValue(e)), e[(t = eO(t))], n, o)),
            b: eg,
            n: (r, e, t) => {
                var n = eR(r, e),
                    o = n.shift();
                r--;
                var a = 'return function (obj, func, destructorsRef, args) {\n',
                    i = 0,
                    s = [];
                0 === t && s.push('obj');
                for (var l = ['retType'], c = [o], u = 0; u < r; ++u)
                    s.push('arg' + u),
                        l.push('argType' + u),
                        c.push(n[u]),
                        (a += '  var arg'
                            .concat(u, ' = argType')
                            .concat(u, '.readValueFromPointer(args')
                            .concat(i ? '+' + i : '', ');\n')),
                        (i += n[u].argPackAdvance);
                (a += '  var rv = '.concat(1 === t ? 'new func' : 'func.call', '(').concat(s.join(', '), ');\n')), o.isVoid || (l.push('emval_returnValue'), c.push(eS), (a += '  return emval_returnValue(retType, destructorsRef, rv);\n')), (a += '};\n'), l.push(a);
                var d = eh(Function, l)(...c);
                return eM(r4('methodCaller<('.concat(n.map((r) => r.name).join(', '), ') => ').concat(o.name, '>'), d));
            },
            l: (r, e) => ((r = ew.toValue(r)), (e = ew.toValue(e)), ew.toHandle(r[e])),
            f: (r) => {
                r > 9 && (ey[r + 1] += 1);
            },
            Z: () => ew.toHandle([]),
            g: (r) => ew.toHandle(eO(r)),
            o: () => ew.toHandle({}),
            h: (r) => {
                ed(ew.toValue(r)), eg(r);
            },
            k: (r, e, t) => {
                (r = ew.toValue(r)), (e = ew.toValue(e)), (t = ew.toValue(t)), (r[e] = t);
            },
            e: (r, e) => {
                var t = (r = e_(r, '_emval_take_value')).readValueFromPointer(e);
                return ew.toHandle(t);
            },
            I: function (r, e) {
                var t = new Date(1000 * (r = eN(r)));
                (h[e >> 2] = t.getUTCSeconds()), (h[(e + 4) >> 2] = t.getUTCMinutes()), (h[(e + 8) >> 2] = t.getUTCHours()), (h[(e + 12) >> 2] = t.getUTCDate()), (h[(e + 16) >> 2] = t.getUTCMonth()), (h[(e + 20) >> 2] = t.getUTCFullYear() - 1900), (h[(e + 24) >> 2] = t.getUTCDay());
                var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    o = ((t.getTime() - n) / 86400000) | 0;
                h[(e + 28) >> 2] = o;
            },
            H: function (r, e, t, n, o, a) {
                a = eN(a);
                try {
                    var i = rF.getStreamFromFD(o);
                    2 & t && rF.doMsync(r, i, e, n, a);
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
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
                            t = String(Math.floor(e / 60)).padStart(2, '0'),
                            n = String(e % 60).padStart(2, '0');
                        return 'UTC'
                            .concat(r >= 0 ? '-' : '+')
                            .concat(t)
                            .concat(n);
                    },
                    d = u(s),
                    f = u(l);
                l < s ? (rD(d, t, 17), rD(f, n, 17)) : (rD(d, n, 17), rD(f, t, 17));
            },
            Q: function (r, e, t) {
                if (((e = eN(e)), !eU(r))) return 28;
                if (0 === r) n = eB();
                else {
                    0;
                    n = eW();
                }
                var n,
                    o = Math.round(1000 * n * 1000);
                return (v[t >> 3] = BigInt(o)), 0;
            },
            z: eB,
            F: (r) => {
                var e = u.length;
                r >>>= 0;
                var t = ez();
                if (r > t) return !1;
                for (var n = 1; n <= 4; n *= 2) {
                    var o = e * (1 + 0.2 / n);
                    if (((o = Math.min(o, r + 100663296)), eI(Math.min(t, rg(Math.max(r, o), 65536))))) return !0;
                }
                return !1;
            },
            K: (r, e) => {
                var t = 0;
                return (
                    eH().forEach((n, o) => {
                        var a = e + t;
                        (p[(r + 4 * o) >> 2] = a), eq(n, a), (t += n.length + 1);
                    }),
                    0
                );
            },
            L: (r, e) => {
                var t = eH();
                p[r >> 2] = t.length;
                var n = 0;
                return t.forEach((r) => (n += r.length + 1)), (p[e >> 2] = n), 0;
            },
            p: function (r) {
                try {
                    var e = rF.getStreamFromFD(r);
                    return rA.close(e), 0;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return r.errno;
                }
            },
            v: function (r, e, t, n) {
                try {
                    var o = rF.getStreamFromFD(r),
                        a = eG(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return r.errno;
                }
            },
            J: function (r, e, t, n) {
                e = eN(e);
                try {
                    if (isNaN(e)) return 61;
                    var o = rF.getStreamFromFD(r);
                    return rA.llseek(o, e, t), (v[n >> 3] = BigInt(o.position)), o.getdents && 0 === e && 0 === t && (o.getdents = null), 0;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return r.errno;
                }
            },
            w: function (r, e, t, n) {
                try {
                    var o = rF.getStreamFromFD(r),
                        a = eX(o, e, t);
                    return (p[n >> 2] = a), 0;
                } catch (r) {
                    if (void 0 === rA || 'ErrnoError' !== r.name) throw r;
                    return r.errno;
                }
            }
        };
        J();
        var e2 = (r) => (e2 = C.aa)(r),
            e4 = (r._malloc = (e) => (e4 = r._malloc = C.ca)(e)),
            e5 = (r._free = (e) => (e5 = r._free = C.da)(e)),
            e6 = (r, e) => (e6 = C.ea)(r, e),
            e3 = (r) => (e3 = C.fa)(r),
            e8 = (r) => (e8 = C.ga)(r),
            e9 = () => (e9 = C.ha)();
        function e7() {
            if (!(V > 0)) {
                if (r.preRun)
                    for ('function' == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) {
                        var t;
                        (t = r.preRun.shift()), U.unshift(t);
                    }
                Q(U),
                    V > 0 ||
                        (r.setStatus
                            ? (r.setStatus('Running...'),
                              setTimeout(() => {
                                  setTimeout(() => r.setStatus(''), 1), n();
                              }, 1))
                            : n());
            }
            function n() {
                var t, n;
                if (!A && ((A = !0), (r.calledRun = !0), !W)) {
                    if ((r.noFSInit || rA.initialized || rA.init(), (rA.ignorePermissions = !1), rv.init(), Q(z), e(r), null == (t = r.onRuntimeInitialized) || t.call(r), r.postRun))
                        for ('function' == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) {
                            (n = r.postRun.shift()), I.unshift(n);
                        }
                    Q(I);
                }
            }
        }
        if (
            ((r.ccall = (r, e, t, n, o) => {
                var a,
                    i = {
                        string: (r) => {
                            var e = 0;
                            return null != r && 0 !== r && (e = eJ(r)), e;
                        },
                        array: (r) => {
                            var e = eK(r.length);
                            return eZ(r, e), e;
                        }
                    },
                    s = eY(r),
                    l = [],
                    c = 0;
                if (n)
                    for (var u = 0; u < n.length; u++) {
                        var d = i[t[u]];
                        d ? (0 === c && (c = re()), (l[u] = d(n[u]))) : (l[u] = n[u]);
                    }
                var f = s(...l);
                return (a = f), 0 !== c && rr(c), (f = 'string' === e ? r$(a) : 'boolean' === e ? !!a : a);
            }),
            (L = function r() {
                A || e7(), A || (L = r);
            }),
            r.preInit)
        )
            for ('function' == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
        return e7(), S;
    });
