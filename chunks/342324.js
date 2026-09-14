let n;
r.d(t, { A: () => tw });
var s,
    a,
    i,
    u,
    l,
    o,
    h,
    c,
    f = {};
(r.r(f), r.d(f, { decode: () => _, encode: () => m, format: () => b, parse: () => z }));
var p = {};
(r.r(p), r.d(p, { Any: () => J, Cc: () => j, Cf: () => T, P: () => I, S: () => S, Z: () => L }));
let d = {};
function g(e, t) {
    "string" != typeof t && (t = g.defaultChars);
    let r = (function (e) {
        let t = d[e];
        if (t) return t;
        t = d[e] = [];
        for (let e = 0; e < 128; e++) {
            let r = String.fromCharCode(e);
            t.push(r);
        }
        for (let r = 0; r < e.length; r++) {
            let n = e.charCodeAt(r);
            t[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
        }
        return t;
    })(t);
    return e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
        let t = "";
        for (let n = 0, s = e.length; n < s; n += 3) {
            let a = parseInt(e.slice(n + 1, n + 3), 16);
            if (a < 128) {
                t += r[a];
                continue;
            }
            if ((224 & a) == 192 && n + 3 < s) {
                let r = parseInt(e.slice(n + 4, n + 6), 16);
                if ((192 & r) == 128) {
                    let e = ((a << 6) & 1984) | (63 & r);
                    (e < 128 ? (t += "\uFFFD\uFFFD") : (t += String.fromCharCode(e)), (n += 3));
                    continue;
                }
            }
            if ((240 & a) == 224 && n + 6 < s) {
                let r = parseInt(e.slice(n + 4, n + 6), 16),
                    s = parseInt(e.slice(n + 7, n + 9), 16);
                if ((192 & r) == 128 && (192 & s) == 128) {
                    let e = ((a << 12) & 61440) | ((r << 6) & 4032) | (63 & s);
                    (e < 2048 || (e >= 55296 && e <= 57343)
                        ? (t += "\uFFFD\uFFFD\uFFFD")
                        : (t += String.fromCharCode(e)),
                        (n += 6));
                    continue;
                }
            }
            if ((248 & a) == 240 && n + 9 < s) {
                let r = parseInt(e.slice(n + 4, n + 6), 16),
                    s = parseInt(e.slice(n + 7, n + 9), 16),
                    i = parseInt(e.slice(n + 10, n + 12), 16);
                if ((192 & r) == 128 && (192 & s) == 128 && (192 & i) == 128) {
                    let e = ((a << 18) & 1835008) | ((r << 12) & 258048) | ((s << 6) & 4032) | (63 & i);
                    (e < 65536 || e > 1114111
                        ? (t += "\uFFFD\uFFFD\uFFFD\uFFFD")
                        : ((e -= 65536), (t += String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))),
                        (n += 9));
                    continue;
                }
            }
            t += "\uFFFD";
        }
        return t;
    });
}
((g.defaultChars = ";/?:@&=+$,#"), (g.componentChars = ""));
let _ = g,
    R = {};
function k(e, t, r) {
    ("string" != typeof t && ((r = t), (t = k.defaultChars)), void 0 === r && (r = !0));
    let n = (function (e) {
            let t = R[e];
            if (t) return t;
            t = R[e] = [];
            for (let e = 0; e < 128; e++) {
                let r = String.fromCharCode(e);
                /^[0-9a-z]$/i.test(r) ? t.push(r) : t.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            }
            for (let r = 0; r < e.length; r++) t[e.charCodeAt(r)] = e[r];
            return t;
        })(t),
        s = "";
    for (let t = 0, a = e.length; t < a; t++) {
        let i = e.charCodeAt(t);
        if (r && 37 === i && t + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(t + 1, t + 3))) {
            ((s += e.slice(t, t + 3)), (t += 2));
            continue;
        }
        if (i < 128) {
            s += n[i];
            continue;
        }
        if (i >= 55296 && i <= 57343) {
            if (i >= 55296 && i <= 56319 && t + 1 < a) {
                let r = e.charCodeAt(t + 1);
                if (r >= 56320 && r <= 57343) {
                    ((s += encodeURIComponent(e[t] + e[t + 1])), t++);
                    continue;
                }
            }
            s += "%EF%BF%BD";
            continue;
        }
        s += encodeURIComponent(e[t]);
    }
    return s;
}
((k.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (k.componentChars = "-_.!~*'()"));
let m = k;
function b(e) {
    let t = "";
    return (
        (t += e.protocol || ""),
        (t += e.slashes ? "//" : ""),
        (t += e.auth ? e.auth + "@" : ""),
        e.hostname && -1 !== e.hostname.indexOf(":") ? (t += "[" + e.hostname + "]") : (t += e.hostname || ""),
        (t += e.port ? ":" + e.port : ""),
        (t += e.pathname || ""),
        (t += e.search || ""),
        (t += e.hash || "")
    );
}
function D() {
    ((this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.pathname = null));
}
let C = /^([a-z0-9.+-]+:)/i,
    v = /:[0-9]*$/,
    A = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    x = ["%", "/", "?", ";", "#"].concat(
        ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    ),
    w = ["/", "?", "#"],
    F = /^[+a-z0-9A-Z_-]{0,63}$/,
    E = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    y = { javascript: !0, "javascript:": !0 },
    B = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
    };
((D.prototype.parse = function (e, t) {
    let r,
        n,
        s,
        a = e;
    if (((a = a.trim()), !t && 1 === e.split("#").length)) {
        let e = A.exec(a);
        if (e) return ((this.pathname = e[1]), e[2] && (this.search = e[2]), this);
    }
    let i = C.exec(a);
    if (
        (i && ((r = (i = i[0]).toLowerCase()), (this.protocol = i), (a = a.substr(i.length))),
        (t || i || a.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (s = "//" === a.substr(0, 2)) &&
            !(i && y[i]) &&
            ((a = a.substr(2)), (this.slashes = !0)),
        !y[i] && (s || (i && !B[i])))
    ) {
        let e,
            t,
            r = -1;
        for (let e = 0; e < w.length; e++) -1 !== (n = a.indexOf(w[e])) && (-1 === r || n < r) && (r = n);
        (-1 !== (t = -1 === r ? a.lastIndexOf("@") : a.lastIndexOf("@", r)) &&
            ((e = a.slice(0, t)), (a = a.slice(t + 1)), (this.auth = e)),
            (r = -1));
        for (let e = 0; e < x.length; e++) -1 !== (n = a.indexOf(x[e])) && (-1 === r || n < r) && (r = n);
        (-1 === r && (r = a.length), ":" === a[r - 1] && r--);
        let s = a.slice(0, r);
        ((a = a.slice(r)), this.parseHost(s), (this.hostname = this.hostname || ""));
        let i = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!i) {
            let e = this.hostname.split(/\./);
            for (let t = 0, r = e.length; t < r; t++) {
                let r = e[t];
                if (r && !r.match(F)) {
                    let n = "";
                    for (let e = 0, t = r.length; e < t; e++) r.charCodeAt(e) > 127 ? (n += "x") : (n += r[e]);
                    if (!n.match(F)) {
                        let n = e.slice(0, t),
                            s = e.slice(t + 1),
                            i = r.match(E);
                        (i && (n.push(i[1]), s.unshift(i[2])),
                            s.length && (a = s.join(".") + a),
                            (this.hostname = n.join(".")));
                        break;
                    }
                }
            }
        }
        (this.hostname.length > 255 && (this.hostname = ""),
            i && (this.hostname = this.hostname.substr(1, this.hostname.length - 2)));
    }
    let u = a.indexOf("#");
    -1 !== u && ((this.hash = a.substr(u)), (a = a.slice(0, u)));
    let l = a.indexOf("?");
    return (
        -1 !== l && ((this.search = a.substr(l)), (a = a.slice(0, l))),
        a && (this.pathname = a),
        B[r] && this.hostname && !this.pathname && (this.pathname = ""),
        this
    );
}),
    (D.prototype.parseHost = function (e) {
        let t = v.exec(e);
        (t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e));
    }));
let z = function (e, t) {
        if (e && e instanceof D) return e;
        let r = new D();
        return (r.parse(e, t), r);
    },
    J =
        /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    j = /[\0-\x1F\x7F-\x9F]/,
    T =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
    I =
        /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]/,
    S =
        /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F\uDED1-\uDED8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA]/,
    L = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    M = [
        8364, 0, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 0, 381, 0, 0, 8216, 8217, 8220, 8221,
        8226, 8211, 8212, 732, 8482, 353, 8250, 339, 0, 382, 376,
    ],
    q = (() => {
        let e = new Uint8Array(127),
            t = 0;
        for (let r = 33; r <= 126; r++) 34 !== r && 36 !== r && 92 !== r && (e[r] = t++);
        return e;
    })(),
    $ = (function (e) {
        let t = e.length,
            r = 0,
            n = () => {
                let t = q[e.charCodeAt(r++)];
                return t < 61 ? t : 91 * t - 5490 + q[e.charCodeAt(r++)];
            },
            s = new Int32Array(2738);
        (s.fill(-1, 49, 61), s.fill(-1, 2725, 2738));
        let a = new Int32Array(2738),
            i = new Int32Array(2738);
        function u(t, n) {
            let a = 0,
                i = n,
                u = n + t;
            for (; i < u;) {
                let t = q[e.charCodeAt(r++)];
                if (t < 89) ((a += t), (s[i++] = a));
                else if (89 === t) {
                    let t = q[e.charCodeAt(r++)] + 2;
                    for (; t--;) s[i++] = ++a;
                } else {
                    let t = q[e.charCodeAt(r++)];
                    ((a +=
                        89 +
                        (t < 90
                            ? 91 * t + q[e.charCodeAt(r++)]
                            : 8281 * q[e.charCodeAt(r++)] + 91 * q[e.charCodeAt(r++)] + q[e.charCodeAt(r++)])),
                        (s[i++] = a));
                }
            }
        }
        (u(49, 0), u(2664, 61));
        let l = new Int32Array(50),
            o = 0,
            h = 0;
        function c(e, t) {
            for (let r = 0; r < e; r++) {
                let e = t + r,
                    u = n(),
                    c = n();
                ((l[2 * h] = u), (l[2 * h + 1] = c), (h += 1), (a[e] = o));
                let f = (s[u] < 0 ? i[u] : 1) + (s[c] < 0 ? i[c] : 1);
                ((i[e] = f), (o += f));
            }
        }
        (c(13, 2725), c(12, 49));
        let f = new Uint16Array(o),
            p = 0;
        for (let e = 0; e < h; e++)
            for (let t = 0; t < 2; t++) {
                let r = l[2 * e + t],
                    n = s[r];
                if (n < 0) {
                    let e = a[r],
                        t = e + i[r];
                    for (; e < t;) f[p++] = f[e++];
                } else f[p++] = n;
            }
        let d = new Uint16Array(13494),
            g = 0;
        for (; r < t;) {
            let t = q[e.charCodeAt(r++)];
            t >= 61 && (t = 91 * t - 5490 + q[e.charCodeAt(r++)]);
            let n = s[t];
            if (n < 0) {
                let e = a[t],
                    r = e + i[t];
                for (; e < r;) d[g++] = f[e++];
            } else d[g++] = n;
        }
        return d;
    })(
        "!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P",
    );
(((s = l || (l = {}))[(s.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (s[(s.FLAG13 = 8192)] = "FLAG13"),
    (s[(s.BRANCH_LENGTH = 8064)] = "BRANCH_LENGTH"),
    (s[(s.JUMP_TABLE = 127)] = "JUMP_TABLE"),
    (s[(s.VALUE_MASK = 8191)] = "VALUE_MASK"),
    ((a = o || (o = {}))[(a.AMP = 38)] = "AMP"),
    (a[(a.NUM = 35)] = "NUM"),
    (a[(a.SEMI = 59)] = "SEMI"),
    (a[(a.EQUALS = 61)] = "EQUALS"),
    (a[(a.ZERO = 48)] = "ZERO"),
    (a[(a.NINE = 57)] = "NINE"),
    (a[(a.LOWER_A = 97)] = "LOWER_A"),
    (a[(a.LOWER_X = 120)] = "LOWER_X"));
let Z = 0;
function W(e) {
    return (e - o.ZERO) >>> 0 <= 9;
}
function U(e) {
    return ((32 | e) - o.LOWER_A) >>> 0 <= 25;
}
(((i = h || (h = {}))[(i.EntityStart = 0)] = "EntityStart"),
    (i[(i.NumericStart = 1)] = "NumericStart"),
    (i[(i.NumericDecimal = 2)] = "NumericDecimal"),
    (i[(i.NumericHex = 3)] = "NumericHex"),
    (i[(i.NamedEntity = 4)] = "NamedEntity"),
    ((u = c || (c = {}))[(u.Legacy = 0)] = "Legacy"),
    (u[(u.Strict = 1)] = "Strict"),
    (u[(u.Attribute = 2)] = "Attribute"));
function N(e, t, r) {
    return 1 === r
        ? String.fromCharCode(e[t] & l.VALUE_MASK)
        : 2 === r
          ? String.fromCharCode(e[t + 1])
          : String.fromCharCode(e[t + 1], e[t + 2]);
}
function X(e) {
    return (function (e, t, r) {
        let n = e.indexOf("&");
        if (n < 0) return e;
        let s = e.length,
            a = 0,
            i = "",
            u = $[0],
            h = u & l.JUMP_TABLE,
            c = (u & l.BRANCH_LENGTH) >> 7;
        do {
            var f;
            let u,
                p,
                d = n + 1,
                g = e.charCodeAt(d);
            if (g === o.NUM) {
                let r = (function (e, t, r) {
                    let n = t + 1,
                        s = 0,
                        a = n;
                    if (n < r && (32 | e.charCodeAt(n)) === o.LOWER_X)
                        for (n += 1, a = n; n < r;) {
                            let t = e.charCodeAt(n);
                            if (W(t)) s = 16 * s + (t - o.ZERO);
                            else if (((32 | t) - o.LOWER_A) >>> 0 <= 5) s = 16 * s + ((32 | t) - o.LOWER_A + 10);
                            else break;
                            n += 1;
                        }
                    else
                        for (; n < r;) {
                            let t = e.charCodeAt(n) - o.ZERO;
                            if (t >>> 0 > 9) break;
                            ((s = 10 * s + t), (n += 1));
                        }
                    if (n === a) return 0;
                    (n < r && e.charCodeAt(n) === o.SEMI && (n += 1), s > 1114111 && (s = 1114112));
                    let i = n - t;
                    return (i >= 2047 && ((Z = i), (i = 2047)), (i << 21) | s);
                })(e, d, s);
                ((u = (function (e) {
                    let t = e >>> 21;
                    return 2047 === t ? Z : t;
                })(r)),
                    t && u > 0 && e.charCodeAt(d + u - 1) !== o.SEMI && (u = 0),
                    (p =
                        0 === u
                            ? ""
                            : (function (e) {
                                  return (e - 1) >>> 0 < 127 || (e - 160) >>> 0 < 55136
                                      ? String.fromCharCode(e)
                                      : String.fromCodePoint(
                                            0 === e || (e >= 55296 && e <= 57343) || e > 1114111
                                                ? 65533
                                                : (e >= 128 && e <= 159 && M[e - 128]) || e,
                                        );
                              })(2097151 & r)));
            } else if (U(g)) {
                let r;
                ((u = 0), (p = ""));
                let n = g - h;
                if (n >>> 0 < c) {
                    let e = $[1 + n];
                    r = 0 === e ? -1 : (c + e) & 65535;
                } else r = -1;
                let a = 0,
                    i = 0,
                    f = r < 0 ? 0 : $[r],
                    _ = d + 1;
                e: for (; _ < s;) {
                    for (; (f & (l.VALUE_LENGTH | l.FLAG13)) == 0 && (f & l.JUMP_TABLE) != 0;) {
                        let t = f & l.JUMP_TABLE,
                            n = (f & l.BRANCH_LENGTH) >> 7;
                        if (0 === n) {
                            if (e.charCodeAt(_) !== t) break e;
                            r += 1;
                        } else {
                            let s = e.charCodeAt(_) - t;
                            if (s >>> 0 >= n) break e;
                            let a = $[r + 1 + s];
                            if (0 === a) break e;
                            r = (r + n + a) & 65535;
                        }
                        if (((f = $[r]), (_ += 1) >= s)) break e;
                    }
                    if ((f & (l.VALUE_LENGTH | l.FLAG13)) === l.FLAG13) {
                        let t = (f & l.BRANCH_LENGTH) >> 7;
                        if (e.charCodeAt(_) !== (f & l.JUMP_TABLE)) break;
                        _ += 1;
                        let n = t - 1,
                            s = r + 1,
                            a = 0;
                        for (; a + 1 < n; a += 2) {
                            let t = $[s];
                            if (e.charCodeAt(_) !== (255 & t) || ((_ += 1), e.charCodeAt(_) !== ((t >> 8) & 255)))
                                break e;
                            ((_ += 1), (s += 1));
                        }
                        if (a < n) {
                            if (e.charCodeAt(_) !== (255 & $[s])) break;
                            _ += 1;
                        }
                        ((r += 1 + (t >> 1)), (f = $[r]));
                        continue;
                    }
                    let n = f >>> 14,
                        h = e.charCodeAt(_);
                    if (0 !== n) {
                        if (h === o.SEMI) {
                            ((u = _ - d + 1), (p = 1 === n ? String.fromCharCode(f & l.VALUE_MASK) : N($, r, n)));
                            break;
                        }
                        if ((t || (f & l.FLAG13) != 0 || ((u = _ - d), (a = r), (i = n)), 1 === n)) break;
                    }
                    let c = (function (e, t, r, n) {
                        let s = (t & l.BRANCH_LENGTH) >> 7,
                            a = t & l.JUMP_TABLE;
                        if (a) {
                            if (0 === s) return n === a ? r : -1;
                            let t = n - a;
                            if (t >>> 0 >= s) return -1;
                            let i = e[r + t];
                            return 0 === i ? -1 : (r + s + i - 1) & 65535;
                        }
                        if (0 === s) return -1;
                        let i = (s + 1) >> 1,
                            u = r + i + s;
                        for (let t = 0; t < s; t++) {
                            let s = (e[r + (t >> 1)] >> ((1 & t) << 3)) & 255;
                            if (s === n) return (u + e[r + i + t]) & 65535;
                            if (s > n) break;
                        }
                        return -1;
                    })($, f, r + (n || 1), h);
                    if (c < 0) break;
                    ((f = $[(r = c)]), (_ += 1));
                }
                if ("" === p) {
                    let e = f >>> 14;
                    (0 === e || t || (f & l.FLAG13) != 0 || ((u = _ - d), (a = r), (i = e)), u > 0 && (p = N($, a, i)));
                }
            } else ((u = 0), (p = ""));
            (0 === u ||
            (r &&
                g !== o.NUM &&
                e.charCodeAt(d + u - 1) !== o.SEMI &&
                d + u < s &&
                ((f = e.charCodeAt(d + u)) === o.EQUALS || U(f) || W(f)))
                ? (n = d)
                : (a < n && (i += e.slice(a, n)), (i += p), (n = a = d + u)),
                e.charCodeAt(n) !== o.AMP && (n = e.indexOf("&", n)));
        } while (n >= 0);
        return i + e.slice(a);
    })(e, !0, !1);
}
var Y = class {
        src_Any = J.source;
        src_Cc = j.source;
        src_Z = L.source;
        src_P = I.source;
        src_ZPCc = [this.src_Z, this.src_P, this.src_Cc].join("|");
        src_ZCc = [this.src_Z, this.src_Cc].join("|");
        cache = {};
        opts = { maxLength: 1e4, urlAuth: !1, schema_names: [] };
        constructor(e = {}) {
            this.opts = { ...this.opts, ...e };
        }
        set(e = {}) {
            return ((this.opts = { ...this.opts, ...e }), (this.cache = {}), this);
        }
        escapeRE(e) {
            return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        nestedPairRE(e, t, r = 4) {
            let n = this.escapeRE(e),
                s = this.escapeRE(t),
                a = `(?:(?!${this.src_ZCc}|${n}|${s}).)`,
                i = `${n}${a}{0,1000}${s}`;
            for (let e = 2; e <= r; e++) i = `${n}(?:${a}|${i}){0,1000}${s}`;
            return i;
        }
        get_text_separators() {
            return (this.cache.text_separators ??= /[><\uff5c]/);
        }
        get_pseudo_letter() {
            return (this.cache.src_pseudo_letter ??= RegExp(
                `(?:(?!${this.get_text_separators().source}|${this.src_ZPCc})${this.src_Any})`,
            ));
        }
        get_ipv4_addr() {
            return (this.cache.src_ip4 ??= RegExp(
                "(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])[.]){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])",
            ));
        }
        get_ipv6_addr() {
            let e = "[0-9A-Fa-f]{1,4}",
                t = `(?:(?:${e}:${e})|${this.get_ipv4_addr().source})`;
            return (this.cache.src_ip6_addr ??= RegExp(
                `(?:(?:${e}:){6}${t}|::(?:${e}:){5}${t}|(?:${e})?::(?:${e}:){4}${t}|(?:(?:${e}:){0,1}${e})?::(?:${e}:){3}${t}|(?:(?:${e}:){0,2}${e})?::(?:${e}:){2}${t}|(?:(?:${e}:){0,3}${e})?::${e}:${t}|(?:(?:${e}:){0,4}${e})?::${t}|(?:(?:${e}:){0,5}${e})?::${e}|(?:(?:${e}:){0,6}${e})?::)`,
            ));
        }
        get_ipv6_url_host() {
            return (this.cache.src_ip6_host ??= RegExp(`\\[${this.get_ipv6_addr().source}\\]`));
        }
        get_ipv6_mail_host() {
            return (this.cache.src_ipv6_mail_host ??= RegExp(`\\[IPv6:${this.get_ipv6_addr().source}\\]`));
        }
        get_auth() {
            return (this.cache.src_auth ??= RegExp(`(?:(?:(?!${this.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`));
        }
        get_port() {
            return (this.cache.src_port ??= RegExp(
                "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
            ));
        }
        get_host_terminator() {
            return (this.cache.src_host_terminator ??= RegExp(
                `(?=$|${this.get_text_separators().source}|${this.src_ZPCc})(?!${this.opts["---"] ? "-(?!--)|" : "-|"}_|:\\d|\\.-|\\.(?!$|${this.src_ZPCc}))`,
            ));
        }
        get_path_terminator() {
            return (this.cache.src_path_terminator ??= RegExp(`${this.src_ZPCc}|${this.get_text_separators().source}`));
        }
        get_path() {
            return (this.cache.src_path ??= RegExp(
                `(?:[/?#](?:${this.nestedPairRE("[", "]")}|${this.nestedPairRE("(", ")")}|${this.nestedPairRE("{", "}")}|\\"(?:(?!${this.src_ZCc}|["]).){1,100}\\"|\\'(?:(?!${this.src_ZCc}|[']).){1,100}\\'|\\'(?=${this.get_pseudo_letter().source}|[-])|\\.{2,20}[:]?[a-zA-Z0-9%/&]|\\.(?!${this.src_ZCc}|[.]|$)|` +
                    (this.opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-{0,19})|" : "\\-{1,20}|") +
                    `,(?!${this.src_ZCc}|$)|;(?!${this.src_ZCc}|$)|\\!{1,20}(?!${this.src_ZCc}|[!]|$)|\\?(?!${this.src_ZCc}|[?]|$)|` +
                    this.get_path_extra().source +
                    `[\\\\/:%@#&=_~*]|(?!${this.get_path_terminator().source}).){1,${this.opts.maxLength}}|\\/)?`,
            ));
        }
        get_mail_name() {
            return (this.cache.src_mail_name ??= RegExp(
                "[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9](?:[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9]|[.](?=[-!#$%&'*+/=?^_`{|}~a-zA-Z0-9])){0,63}",
            ));
        }
        get_xn() {
            return (this.cache.src_xn ??= RegExp("xn--[a-z0-9\\-]{1,59}"));
        }
        get_tld() {
            if (this.cache.tld) return this.cache.tld;
            let e = [...new Set(this.opts.tlds || [])].sort().reverse().join("|");
            return ((this.cache.tld = RegExp(`${e || "$#none#$"}|${this.get_xn().source}`)), this.cache.tld);
        }
        get_domain_root() {
            return (this.cache.src_domain_root ??= RegExp(
                "(?:" + this.get_xn().source + `|${this.get_pseudo_letter().source}{1,63})`,
            ));
        }
        get_domain() {
            return (this.cache.src_domain ??= RegExp(
                "(?:" +
                    this.get_xn().source +
                    `|(?:${this.get_pseudo_letter().source})|(?:${this.get_pseudo_letter().source}(?:-|${this.get_pseudo_letter().source}){0,61}${this.get_pseudo_letter().source}))`,
            ));
        }
        get_url_host_port() {
            return (this.cache.url_host_port ??= RegExp(
                "(?:" +
                    this.get_ipv6_url_host().source +
                    `|(?:(?:(?:${this.get_domain().source})\\.){0,10}${this.get_domain().source}))` +
                    this.get_port().source +
                    this.get_host_terminator().source,
            ));
        }
        get_fuzzy_url_host_port() {
            return (this.cache.fuzzy_url_host_port ??= RegExp(
                "(?:" +
                    (this.opts.fuzzyIP ? this.get_ipv4_addr().source + "|" : "") +
                    `(?:(?:(?:${this.get_domain().source})\\.){1,10}(?:${this.get_tld().source})))` +
                    this.get_host_terminator().source,
            ));
        }
        get_mail_host() {
            return (this.cache.src_mail_host ??= RegExp(
                "(?:" +
                    this.get_ipv6_mail_host().source +
                    `|(?:(?:(?:${this.get_domain().source})\\.){0,4}${this.get_domain().source}))` +
                    this.get_host_terminator().source,
            ));
        }
        get_fuzzy_mail_host() {
            return (this.cache.src_fuzzy_mail_host ??= RegExp(
                "(?:" +
                    this.get_ipv6_mail_host().source +
                    `|(?:(?:(?:${this.get_domain().source})[.]){1,4}${this.get_domain_root().source}))` +
                    this.get_host_terminator().source,
            ));
        }
        get_path_extra() {
            return (this.cache.src_path_extra ??= RegExp(""));
        }
        get_fuzzy_mail_host_search() {
            return (this.cache.mail_fuzzy_host_search ??= RegExp(`@${this.get_fuzzy_mail_host().source}`, "ig"));
        }
        get_fuzzy_link_search() {
            return (this.cache.link_fuzzy_search ??= RegExp(
                `(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${this.src_ZPCc}))(?:(?![$+<=>^\`|\uff5c])${this.get_fuzzy_url_host_port().source}${this.get_path().source})`,
                "ig",
            ));
        }
        get_http_validator() {
            return (this.cache.http_validator ??= RegExp(
                "\\/\\/" +
                    (this.opts.urlAuth ? this.get_auth().source : "") +
                    this.get_url_host_port().source +
                    this.get_path().source,
                "iy",
            ));
        }
        get_relative_proto_validator() {
            return (this.cache.relative_proto_validator ??= RegExp(
                (this.opts.urlAuth ? this.get_auth().source : "") +
                    `(?:localhost|${this.get_ipv6_url_host().source}|(?:(?:${this.get_domain().source})[.]){1,10}${this.get_domain_root().source})` +
                    this.get_port().source +
                    this.get_host_terminator().source +
                    this.get_path().source,
                "iy",
            ));
        }
        get_mail_name_validator() {
            return (this.cache.mail_name_validator ??= RegExp(
                `(?:^|${this.get_text_separators().source}|"|\\(|${this.src_ZCc})(${this.get_mail_name().source})$`,
            ));
        }
        get_mailto_validator() {
            return (this.cache.mailto_validator ??= RegExp(
                `${this.get_mail_name().source}@${this.get_mail_host().source}`,
                "iy",
            ));
        }
        get_schema_names() {
            return (this.cache.schema_names ??= new RegExp(
                (this.opts.schema_names || []).map((e) => this.escapeRE(e)).join("|"),
            ));
        }
        get_schema_search() {
            return (this.cache.schema_search ??= RegExp(
                `(^|(?!_)(?:[><\uff5c]|${this.src_ZPCc}))(${this.get_schema_names().source})`,
                "ig",
            ));
        }
        get_schema_at_start() {
            return (this.cache.schema_at_start ??= RegExp(`^${this.get_schema_search().source}`, "i"));
        }
    },
    P = {
        validate: (e, t, r) => {
            let n = r.re.get_http_validator();
            n.lastIndex = t;
            let s = n.exec(e);
            return s ? s[0].length : 0;
        },
        normalize: (e, t) => t.normalize(e),
    },
    O = {
        "http:": P,
        "https:": P,
        "ftp:": P,
        "//": {
            validate: function (e, t, r) {
                let n = r.re.get_relative_proto_validator();
                n.lastIndex = t;
                let s = n.exec(e);
                return s ? ((t >= 3 && ":" === e[t - 3]) || (t >= 3 && "/" === e[t - 3]) ? 0 : s[0].length) : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
        "mailto:": {
            validate: function (e, t, r) {
                let n = r.re.get_mailto_validator();
                n.lastIndex = t;
                let s = n.exec(e);
                return s ? s[0].length : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
    },
    K = {
        fuzzyLink: !1,
        fuzzyEmail: !0,
        fuzzyIP: !1,
        "---": !1,
        tlds:
            ((n = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|")),
            "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw"
                .split("|")
                .forEach((e) => {
                    let t = e.indexOf(":"),
                        r = e.slice(0, t);
                    for (let s of e.slice(t + 1)) n.push(r + s);
                }),
            n),
        urlAuth: !1,
        maxLength: 1e4,
    },
    G = class {
        schema;
        index;
        lastIndex;
        raw;
        text;
        url;
        constructor(e, t, r, n) {
            const s = e.slice(r, n);
            ((this.schema = t.toLowerCase()),
                (this.index = r),
                (this.lastIndex = n),
                (this.raw = s),
                (this.text = s),
                (this.url = s));
        }
    },
    H = class {
        __opts__;
        __schemas__;
        re;
        constructor(e = {}) {
            const { rebuilder: t, ...r } = e;
            ((this.__opts__ = { ...K, ...r }),
                (this.__schemas__ = { ...O }),
                (this.re = t || new Y()),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }));
        }
        add(e, t = null) {
            if (t) {
                let r = { normalize: (e, t) => t.normalize(e), ...t };
                this.__schemas__[e] = r;
            } else delete this.__schemas__[e];
            return (this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }), this);
        }
        set(e = {}) {
            return (
                (this.__opts__ = { ...this.__opts__, ...e }),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }),
                this
            );
        }
        test(e) {
            let t, r;
            if (!e.length) return !1;
            for ((r = this.re.get_schema_search()).lastIndex = 0; null !== (t = r.exec(e));)
                if (this.testSchemaAt(e, t[2], r.lastIndex)) return !0;
            if (
                this.__opts__.fuzzyLink &&
                this.__schemas__["http:"] &&
                (((r = this.re.get_fuzzy_link_search()).lastIndex = 0), null !== r.exec(e))
            )
                return !0;
            if (this.__opts__.fuzzyEmail && this.__schemas__["mailto:"] && e.indexOf("@") >= 0) {
                let r = this.re.get_fuzzy_mail_host_search(),
                    n = this.re.get_mail_name_validator();
                for (r.lastIndex = 0; null !== (t = r.exec(e));) {
                    let r = e.slice(Math.max(0, t.index - 65), t.index);
                    if (n.test(r)) return !0;
                }
            }
            return !1;
        }
        testSchemaAt(e, t, r) {
            return this.__schemas__[t.toLowerCase()]
                ? this.__schemas__[t.toLowerCase()].validate(e.slice(0, r + this.__opts__.maxLength), r, this)
                : 0;
        }
        match(e) {
            let t,
                r,
                n,
                s,
                a,
                i,
                u = [],
                l = this.re.get_schema_search(),
                o = !1,
                h = !1,
                c = !1,
                f = 0;
            if (!e.length) return null;
            for (
                l.lastIndex = 0,
                    this.__opts__.fuzzyLink &&
                        this.__schemas__["http:"] &&
                        ((t = this.re.get_fuzzy_link_search()).lastIndex = 0),
                    this.__opts__.fuzzyEmail &&
                        this.__schemas__["mailto:"] &&
                        (((r = this.re.get_fuzzy_mail_host_search()).lastIndex = 0),
                        (n = this.re.get_mail_name_validator()));
                ;
            ) {
                let p,
                    d = Math.max(f - 1, 0);
                if (r && n && !c && (!a || a.index < f))
                    for (r.lastIndex < d && (r.lastIndex = d); ;) {
                        let t = r.exec(e);
                        if (!t) {
                            ((c = !0), (a = void 0));
                            break;
                        }
                        let s = n.exec(e.slice(Math.max(0, t.index - 65), t.index));
                        if (s) {
                            if (
                                (a = {
                                    schema: "mailto:",
                                    index: t.index - s[1].length,
                                    lastIndex: t.index + t[0].length,
                                }).index >= f
                            )
                                break;
                            r.lastIndex < d && (r.lastIndex = d);
                        }
                    }
                if (t && !h && (!s || s.index < f))
                    for (t.lastIndex < d && (t.lastIndex = d); ;) {
                        let r = t.exec(e);
                        if (!r) {
                            ((h = !0), (s = void 0));
                            break;
                        }
                        if (
                            (s = { schema: "", index: r.index + r[1].length, lastIndex: r.index + r[0].length })
                                .index >= f
                        )
                            break;
                        t.lastIndex < d && (t.lastIndex = d);
                    }
                let g = a;
                if (
                    ((!g || (s && (s.index < g.index || (s.index === g.index && s.lastIndex > g.lastIndex)))) &&
                        (g = s),
                    !o)
                )
                    for (;;) {
                        if (!i) {
                            l.lastIndex < d && (l.lastIndex = d);
                            let t = l.exec(e);
                            if (!t) {
                                o = !0;
                                break;
                            }
                            i = { schema: t[2], index: t.index + t[1].length, lastIndex: t.index + t[0].length };
                        }
                        if (i.index < f) {
                            i = void 0;
                            continue;
                        }
                        if (g && i.index > g.index) break;
                        let t = i;
                        i = void 0;
                        let r = this.testSchemaAt(e, t.schema, t.lastIndex);
                        if (r) {
                            p = { schema: t.schema, index: t.index, lastIndex: t.lastIndex + r };
                            break;
                        }
                    }
                let _ = p;
                if (
                    ((!_ || (a && (a.index < _.index || (a.index === _.index && a.lastIndex > _.lastIndex)))) &&
                        (_ = a),
                    (!_ || (s && (s.index < _.index || (s.index === _.index && s.lastIndex > _.lastIndex)))) && (_ = s),
                    !_)
                )
                    break;
                _ === a ? (a = void 0) : _ === s && (s = void 0);
                let R = new G(e, _.schema, _.index, _.lastIndex);
                (R.schema ? this.__schemas__[R.schema].normalize(R, this) : this.normalize(R),
                    u.push(R),
                    (f = _.lastIndex));
            }
            return u.length ? u : null;
        }
        matchAtStart(e) {
            if (!e.length) return null;
            let t = this.re.get_schema_at_start().exec(e);
            if (!t) return null;
            let r = this.testSchemaAt(e, t[2], t[0].length);
            if (!r) return null;
            let n = new G(e, t[2], t.index + t[1].length, t.index + t[0].length + r);
            return (this.__schemas__[n.schema].normalize(n, this), n);
        }
        tlds(e, t = !1) {
            return (
                (e = Array.isArray(e) ? e : [e]),
                t ? (this.__opts__.tlds = this.__opts__.tlds.concat(e)) : (this.__opts__.tlds = e),
                this.re.set({ ...this.__opts__, schema_names: Object.keys(this.__schemas__) }),
                this
            );
        }
        normalize(e) {
            (e.schema || (e.url = `http://${e.url}`),
                "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = `mailto:${e.url}`));
        }
    };
let V = /^xn--/,
    Q = /[^\0-\x7F]/,
    ee = /[\x2E\u3002\uFF0E\uFF61]/g,
    et = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    er = Math.floor,
    en = String.fromCharCode;
function es(e) {
    throw RangeError(et[e]);
}
function ea(e, t) {
    let r = e.split("@"),
        n = "";
    return (
        r.length > 1 && ((n = r[0] + "@"), (e = r[1])),
        n +
            (function (e, t) {
                let r = [],
                    n = e.length;
                for (; n--;) r[n] = t(e[n]);
                return r;
            })((e = e.replace(ee, ".")).split("."), t).join(".")
    );
}
let ei = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    eu = function (e, t, r) {
        let n = 0;
        for (e = r ? er(e / 700) : e >> 1, e += er(e / t); e > 455; n += 36) e = er(e / 35);
        return er(n + (36 * e) / (e + 38));
    },
    el = function (e) {
        let t = [],
            r = e.length,
            n = 0,
            s = 128,
            a = 72,
            i = e.lastIndexOf("-");
        i < 0 && (i = 0);
        for (let r = 0; r < i; ++r) (e.charCodeAt(r) >= 128 && es("not-basic"), t.push(e.charCodeAt(r)));
        for (let l = i > 0 ? i + 1 : 0; l < r;) {
            let i = n;
            for (let t = 1, s = 36; ; s += 36) {
                var u;
                l >= r && es("invalid-input");
                let i =
                    (u = e.charCodeAt(l++)) >= 48 && u < 58
                        ? 26 + (u - 48)
                        : u >= 65 && u < 91
                          ? u - 65
                          : u >= 97 && u < 123
                            ? u - 97
                            : 36;
                (i >= 36 && es("invalid-input"), i > er((0x7fffffff - n) / t) && es("overflow"), (n += i * t));
                let o = s <= a ? 1 : s >= a + 26 ? 26 : s - a;
                if (i < o) break;
                let h = 36 - o;
                (t > er(0x7fffffff / h) && es("overflow"), (t *= h));
            }
            let o = t.length + 1;
            ((a = eu(n - i, o, 0 == i)),
                er(n / o) > 0x7fffffff - s && es("overflow"),
                (s += er(n / o)),
                (n %= o),
                t.splice(n++, 0, s));
        }
        return String.fromCodePoint(...t);
    },
    eo = function (e) {
        let t = [],
            r = (e = (function (e) {
                let t = [],
                    r = 0,
                    n = e.length;
                for (; r < n;) {
                    let s = e.charCodeAt(r++);
                    if (s >= 55296 && s <= 56319 && r < n) {
                        let n = e.charCodeAt(r++);
                        (64512 & n) == 56320 ? t.push(((1023 & s) << 10) + (1023 & n) + 65536) : (t.push(s), r--);
                    } else t.push(s);
                }
                return t;
            })(e)).length,
            n = 128,
            s = 0,
            a = 72;
        for (let r of e) r < 128 && t.push(en(r));
        let i = t.length,
            u = i;
        for (i && t.push("-"); u < r;) {
            let r = 0x7fffffff;
            for (let t of e) t >= n && t < r && (r = t);
            let l = u + 1;
            for (let o of (r - n > er((0x7fffffff - s) / l) && es("overflow"), (s += (r - n) * l), (n = r), e))
                if ((o < n && ++s > 0x7fffffff && es("overflow"), o === n)) {
                    let e = s;
                    for (let r = 36; ; r += 36) {
                        let n = r <= a ? 1 : r >= a + 26 ? 26 : r - a;
                        if (e < n) break;
                        let s = e - n,
                            i = 36 - n;
                        (t.push(en(ei(n + (s % i), 0))), (e = er(s / i)));
                    }
                    (t.push(en(ei(e, 0))), (a = eu(s, l, u === i)), (s = 0), ++u);
                }
            (++s, ++n);
        }
        return t.join("");
    };
var eh = Object.defineProperty,
    ec = (e, t) => {
        let r = {};
        for (var n in e) eh(r, n, { get: e[n], enumerable: !0 });
        return (t || eh(r, Symbol.toStringTag, { value: "Module" }), r);
    },
    ef = ec({
        arrayReplaceAt: () => ed,
        asciiTrim: () => eS,
        callable: () => ep,
        escapeHtml: () => ew,
        escapeRE: () => eE,
        fromCodePoint: () => e_,
        isMdAsciiPunct: () => ej,
        isPunctChar: () => ez,
        isPunctCharCode: () => eJ,
        isSpace: () => ey,
        isValidEntityCode: () => eg,
        isWhiteSpace: () => eB,
        lib: () => eL,
        normalizeReference: () => eT,
        unescapeAll: () => eD,
        unescapeMd: () => eb,
    });
function ep(e) {
    let t = function (...r) {
        return Reflect.construct(e, r, new.target && new.target !== t ? new.target : e);
    };
    return (
        Object.defineProperty(t, "name", { value: e.name }), Object.setPrototypeOf(t, e), (t.prototype = e.prototype), t
    );
}
function ed(e, t, r) {
    return [].concat(e.slice(0, t), r, e.slice(t + 1));
}
function eg(e) {
    return (
        (!(e >= 55296) || !(e <= 57343)) &&
        (!(e >= 64976) || !(e <= 65007)) &&
        (65535 & e) != 65535 &&
        (65535 & e) != 65534 &&
        (!(e >= 0) || !(e <= 8)) &&
        11 !== e &&
        (!(e >= 14) || !(e <= 31)) &&
        (!(e >= 127) || !(e <= 159)) &&
        !(e > 1114111) &&
        !0
    );
}
function e_(e) {
    return e > 65535 ? String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (1023 & e)) : String.fromCharCode(e);
}
var eR = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    ek = RegExp(`${eR.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi"),
    em = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function eb(e) {
    return 0 > e.indexOf("\\") ? e : e.replace(eR, "$1");
}
function eD(e) {
    return 0 > e.indexOf("\\") && 0 > e.indexOf("&")
        ? e
        : e.replace(ek, function (e, t, r) {
              if (t) return t;
              if (35 === r.charCodeAt(0) && em.test(r)) {
                  let t = "x" === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
                  return eg(t) ? e_(t) : e;
              }
              let n = X(e);
              return n !== e ? n : e;
          });
}
var eC = /[&<>"]/,
    ev = /[&<>"]/g,
    eA = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function ex(e) {
    return eA[e];
}
function ew(e) {
    return eC.test(e) ? e.replace(ev, ex) : e;
}
var eF = /[.?*+^$[\]\\(){}|-]/g;
function eE(e) {
    return e.replace(eF, "\\$&");
}
function ey(e) {
    switch (e) {
        case 9:
        case 32:
            return !0;
    }
    return !1;
}
function eB(e) {
    if (e >= 8192 && e <= 8202) return !0;
    switch (e) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
            return !0;
    }
    return !1;
}
function ez(e) {
    return I.test(e) || S.test(e);
}
function eJ(e) {
    return ez(e_(e));
}
function ej(e) {
    switch (e) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
            return !0;
        default:
            return !1;
    }
}
function eT(e) {
    return (e = e.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
}
function eI(e) {
    return 32 === e || 9 === e || 10 === e || 13 === e;
}
function eS(e) {
    let t = 0;
    for (; t < e.length && eI(e.charCodeAt(t)); t++);
    let r = e.length - 1;
    for (; r >= t && eI(e.charCodeAt(r)); r--);
    return e.slice(t, r + 1);
}
var eL = { mdurl: f, ucmicro: p };
function eM(e, t, r) {
    let n,
        s,
        a,
        i,
        u = e.posMax,
        l = e.pos;
    for (e.pos = t + 1, n = 1; e.pos < u;) {
        if (93 === (a = e.src.charCodeAt(e.pos)) && 0 == --n) {
            s = !0;
            break;
        }
        if (((i = e.pos), e.md.inline.skipToken(e), 91 === a)) {
            if (i === e.pos - 1) n++;
            else if (r) return ((e.pos = l), -1);
        }
    }
    let o = -1;
    return (s && (o = e.pos), (e.pos = l), o);
}
function eq(e, t, r) {
    let n,
        s = t,
        a = { ok: !1, pos: 0, str: "" };
    if (60 === e.charCodeAt(s)) {
        for (s++; s < r && 10 !== (n = e.charCodeAt(s)) && 60 !== n;) {
            if (62 === n) {
                ((a.pos = s + 1), (a.str = eD(e.slice(t + 1, s))), (a.ok = !0));
                break;
            }
            if (92 === n && s + 1 < r) {
                s += 2;
                continue;
            }
            s++;
        }
        return a;
    }
    let i = 0;
    for (; s < r && 32 !== (n = e.charCodeAt(s)) && !(n < 32) && 127 !== n;) {
        if (92 === n && s + 1 < r) {
            if (32 === e.charCodeAt(s + 1)) {
                s++;
                continue;
            }
            s += 2;
            continue;
        }
        if (40 === n && ++i > 32) return a;
        if (41 === n) {
            if (0 === i) break;
            i--;
        }
        s++;
    }
    return (t === s || 0 !== i || ((a.str = eD(e.slice(t, s))), (a.pos = s), (a.ok = !0)), a);
}
function e$(e, t, r, n) {
    let s,
        a = t,
        i = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
    if (n) ((i.str = n.str), (i.marker = n.marker));
    else {
        if (a >= r) return i;
        let n = e.charCodeAt(a);
        if (34 !== n && 39 !== n && 40 !== n) return i;
        (t++, a++, 40 === n && (n = 41), (i.marker = n));
    }
    for (; a < r;) {
        if ((s = e.charCodeAt(a)) === i.marker) return ((i.pos = a + 1), (i.str += eD(e.slice(t, a))), (i.ok = !0), i);
        if (40 === s && 41 === i.marker) return i;
        (92 === s && a + 1 < r && a++, a++);
    }
    return ((i.can_continue = !0), (i.str += eD(e.slice(t, a))), i);
}
var eZ = ec({ parseLinkDestination: () => eq, parseLinkLabel: () => eM, parseLinkTitle: () => e$ });
function eW(e) {
    return (eW =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function eU(e, t, r) {
    var n;
    return (
        ((n = (function (e, t) {
            if ("object" != eW(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != eW(n)) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        })(t, "string")),
        (t = "symbol" == eW(n) ? n : n + "") in e)
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
        e
    );
}
var eN = class {
        constructor(e, t, r) {
            (eU(this, "map", null),
                eU(this, "level", 0),
                eU(this, "children", null),
                eU(this, "content", ""),
                eU(this, "markup", ""),
                eU(this, "info", ""),
                eU(this, "block", !1),
                eU(this, "hidden", !1),
                (this.type = e),
                (this.tag = t),
                (this.attrs = null),
                (this.nesting = r),
                (this.meta = null));
        }
        attrIndex(e) {
            if (!this.attrs) return -1;
            let t = this.attrs;
            for (let r = 0, n = t.length; r < n; r++) if (t[r][0] === e) return r;
            return -1;
        }
        attrPush(e) {
            this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
        }
        attrSet(e, t) {
            let r = this.attrIndex(e),
                n = [e, t];
            r < 0 ? this.attrPush(n) : (this.attrs[r] = n);
        }
        attrGet(e) {
            let t = this.attrIndex(e),
                r = null;
            return (t >= 0 && (r = this.attrs[t][1]), r);
        }
        attrJoin(e, t) {
            let r = this.attrIndex(e);
            r < 0 ? this.attrPush([e, t]) : (this.attrs[r][1] = `${this.attrs[r][1]} ${t}`);
        }
    },
    eX = class {
        constructor() {
            (eU(this, "__rules__", []), eU(this, "__cache__", null));
        }
        __find__(e) {
            for (let t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
            return -1;
        }
        __compile__() {
            let e = new Set();
            (this.__rules__.forEach((t) => {
                t.enabled &&
                    t.alt.forEach((t) => {
                        t && e.add(t);
                    });
            }),
                (this.__cache__ = Object.create(null)),
                (this.__cache__[""] = []),
                this.__rules__.forEach((e) => {
                    e.enabled && this.__cache__[""].push(e.fn);
                }),
                e.forEach((e) => {
                    ((this.__cache__[e] = []),
                        this.__rules__.forEach((t) => {
                            t.enabled && t.alt.indexOf(e) >= 0 && this.__cache__[e].push(t.fn);
                        }));
                }));
        }
        at(e, t, r = {}) {
            let n = this.__find__(e);
            if (-1 === n) throw Error(`Parser rule not found: ${e}`);
            ((this.__rules__[n].fn = t), (this.__rules__[n].alt = r.alt || []), (this.__cache__ = null));
        }
        before(e, t, r, n = {}) {
            let s = this.__find__(e);
            if (-1 === s) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(s, 0, { name: t, enabled: !0, fn: r, alt: n.alt || [] }), (this.__cache__ = null));
        }
        after(e, t, r, n = {}) {
            let s = this.__find__(e);
            if (-1 === s) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(s + 1, 0, { name: t, enabled: !0, fn: r, alt: n.alt || [] }),
                (this.__cache__ = null));
        }
        push(e, t, r = {}) {
            (this.__rules__.push({ name: e, enabled: !0, fn: t, alt: r.alt || [] }), (this.__cache__ = null));
        }
        enable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let r = [];
            return (
                e.forEach((e) => {
                    let n = this.__find__(e);
                    if (n < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[n].enabled = !0), r.push(e));
                }),
                (this.__cache__ = null),
                r
            );
        }
        enableOnly(e, t = !1) {
            (Array.isArray(e) || (e = [e]),
                this.__rules__.forEach((e) => {
                    e.enabled = !1;
                }),
                this.enable(e, t));
        }
        disable(e, t = !1) {
            Array.isArray(e) || (e = [e]);
            let r = [];
            return (
                e.forEach((e) => {
                    let n = this.__find__(e);
                    if (n < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[n].enabled = !1), r.push(e));
                }),
                (this.__cache__ = null),
                r
            );
        }
        getRules(e) {
            return (this.__cache__ || this.__compile__(), this.__cache__[e] || []);
        }
    },
    eY = {};
((eY.code_inline = function (e, t, r, n, s) {
    let a = e[t];
    return `<code${s.renderAttrs(a)}>${ew(a.content)}</code>`;
}),
    (eY.code_block = function (e, t, r, n, s) {
        let a = e[t];
        return `<pre${s.renderAttrs(a)}><code>${ew(e[t].content)}</code></pre>
`;
    }),
    (eY.fence = function (e, t, r, n, s) {
        let a,
            i = e[t],
            u = i.info ? eD(i.info).trim() : "",
            l = "",
            o = "";
        if (u) {
            let e = u.split(/(\s+)/g);
            ((l = e[0]), (o = e.slice(2).join("")));
        }
        if (0 === (a = (r.highlight && r.highlight(i.content, l, o)) || ew(i.content)).indexOf("<pre")) return a + "\n";
        if (u) {
            let e = i.attrIndex("class"),
                t = i.attrs ? i.attrs.slice() : [];
            return (
                e < 0
                    ? t.push(["class", `${r.langPrefix}${l}`])
                    : ((t[e] = [t[e][0], t[e][1]]), (t[e][1] += ` ${r.langPrefix}${l}`)),
                `<pre><code${s.renderAttrs({ attrs: t })}>${a}</code></pre>
`
            );
        }
        return `<pre><code${s.renderAttrs(i)}>${a}</code></pre>
`;
    }),
    (eY.image = function (e, t, r, n, s) {
        let a = e[t];
        return ((a.attrs[a.attrIndex("alt")][1] = s.renderInlineAsText(a.children, r, n)), s.renderToken(e, t, r));
    }),
    (eY.hardbreak = function (e, t, r) {
        return r.xhtmlOut ? "<br />\n" : "<br>\n";
    }),
    (eY.softbreak = function (e, t, r) {
        return r.breaks ? (r.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
    }),
    (eY.text = function (e, t) {
        return ew(e[t].content);
    }),
    (eY.html_block = function (e, t) {
        return e[t].content;
    }),
    (eY.html_inline = function (e, t) {
        return e[t].content;
    }));
var eP = class {
        constructor() {
            eU(this, "rules", Object.assign({}, eY));
        }
        renderAttrs(e) {
            let t, r, n;
            if (!e.attrs) return "";
            for (t = 0, n = "", r = e.attrs.length; t < r; t++)
                n += ` ${ew(e.attrs[t][0])}="${ew(String(e.attrs[t][1]))}"`;
            return n;
        }
        renderToken(e, t, r) {
            let n = e[t],
                s = "";
            if (n.hidden) return "";
            let a = t - 1;
            for (; a >= 0 && e[a].hidden && 0 === e[a].nesting;) a--;
            (n.block && -1 !== n.nesting && a >= 0 && e[a].hidden && -1 === e[a].nesting && (s += "\n"),
                (s += (-1 === n.nesting ? "</" : "<") + n.tag),
                (s += this.renderAttrs(n)),
                0 === n.nesting && r.xhtmlOut && (s += " /"));
            let i = !1;
            if (n.block && ((i = !0), 1 === n.nesting)) {
                let r = t + 1;
                for (; r < e.length && e[r].hidden && 0 === e[r].nesting;) r++;
                if (r < e.length) {
                    let t = e[r];
                    "inline" === t.type || t.hidden ? (i = !1) : -1 === t.nesting && t.tag === n.tag && (i = !1);
                }
            }
            return s + (i ? ">\n" : ">");
        }
        renderInline(e, t, r) {
            let n = "",
                s = this.rules;
            for (let a = 0, i = e.length; a < i; a++) {
                let i = e[a].type;
                void 0 !== s[i] ? (n += s[i](e, a, t, r, this)) : (n += this.renderToken(e, a, t));
            }
            return n;
        }
        renderInlineAsText(e, t, r) {
            let n = "";
            for (let s = 0, a = e.length; s < a; s++)
                switch (e[s].type) {
                    case "text":
                    case "code_inline":
                    case "html_inline":
                    case "html_block":
                        n += e[s].content;
                        break;
                    case "image":
                        n += this.renderInlineAsText(e[s].children, t, r);
                        break;
                    case "softbreak":
                    case "hardbreak":
                        n += "\n";
                }
            return n;
        }
        render(e, t, r) {
            let n = "",
                s = this.rules;
            for (let a = 0, i = e.length; a < i; a++) {
                let i = e[a].type;
                "inline" === i
                    ? (n += this.renderInline(e[a].children, t, r))
                    : void 0 !== s[i]
                      ? (n += s[i](e, a, t, r, this))
                      : (n += this.renderToken(e, a, t));
            }
            return n;
        }
    },
    eO = class {
        constructor(e, t, r) {
            (eU(this, "tokens", []),
                eU(this, "inlineMode", !1),
                eU(this, "Token", eN),
                (this.src = e),
                (this.env = r),
                (this.md = t));
        }
    },
    eK = /\r\n?/g,
    eG = /\0/g,
    eH = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    eV = /\((c|tm|r)\)/i,
    eQ = /\((c|tm|r)\)/gi,
    e0 = { c: "\xa9", r: "\xae", tm: "\u2122" };
function e1(e, t) {
    return e0[t.toLowerCase()];
}
var e2 = /['"]/,
    e3 = /['"]/g;
function e5(e, t, r, n) {
    (e[t] || (e[t] = []), e[t].push({ pos: r, ch: n }));
}
var e6 = [
        [
            "normalize",
            function (e) {
                let t;
                ((t = (t = e.src.replace(eK, "\n")).replace(eG, "\uFFFD")), (e.src = t));
            },
        ],
        [
            "block",
            function (e) {
                let t;
                e.inlineMode
                    ? (((t = new e.Token("inline", "", 0)).content = e.src),
                      (t.map = [0, 1]),
                      (t.children = []),
                      e.tokens.push(t))
                    : e.md.block.parse(e.src, e.md, e.env, e.tokens);
            },
        ],
        [
            "strip_references",
            function (e) {
                let t = e.tokens,
                    r = 0;
                for (let e = 0; e < t.length; e++)
                    "reference_definition" !== t[e].type && (e !== r && (t[r] = t[e]), r++);
                t.length !== r && (t.length = r);
            },
        ],
        [
            "inline",
            function (e) {
                let t = e.tokens;
                for (let r = 0, n = t.length; r < n; r++) {
                    let n = t[r];
                    "inline" === n.type && e.md.inline.parse(n.content, e.md, e.env, n.children);
                }
            },
        ],
        [
            "linkify",
            function (e) {
                let t = e.tokens;
                if (e.md.options.linkify)
                    for (let s = 0, a = t.length; s < a; s++) {
                        if ("inline" !== t[s].type || !e.md.linkify.test(t[s].content)) continue;
                        let a = t[s].children,
                            i = [],
                            u = 0;
                        for (let t = a.length - 1; t >= 0; t--) {
                            let s = a[t];
                            if ("link_close" === s.type) {
                                for (t--; a[t].level !== s.level && "link_open" !== a[t].type;) t--;
                                continue;
                            }
                            if ("html_inline" === s.type) {
                                var r, n;
                                ((r = s.content),
                                    /^<a[>\s]/i.test(r) && u > 0 && u--,
                                    (n = s.content),
                                    /^<\/a\s*>/i.test(n) && u++);
                            }
                            if (!(u > 0) && "text" === s.type && e.md.linkify.test(s.content)) {
                                let r = s.content,
                                    n = e.md.linkify.match(r),
                                    u = [],
                                    l = s.level,
                                    o = 0;
                                n.length > 0 &&
                                    0 === n[0].index &&
                                    t > 0 &&
                                    "text_special" === a[t - 1].type &&
                                    (n = n.slice(1));
                                for (let t = 0; t < n.length; t++) {
                                    let s = n[t].url,
                                        a = e.md.normalizeLink(s);
                                    if (!e.md.validateLink(a)) continue;
                                    let i = n[t].text;
                                    i = n[t].schema
                                        ? "mailto:" !== n[t].schema || /^mailto:/i.test(i)
                                            ? e.md.normalizeLinkText(i)
                                            : e.md.normalizeLinkText(`mailto:${i}`).replace(/^mailto:/, "")
                                        : e.md.normalizeLinkText(`http://${i}`).replace(/^http:\/\//, "");
                                    let h = n[t].index;
                                    if (h > o) {
                                        let t = new e.Token("text", "", 0);
                                        ((t.content = r.slice(o, h)), (t.level = l), u.push(t));
                                    }
                                    let c = new e.Token("link_open", "a", 1);
                                    ((c.attrs = [["href", a]]),
                                        (c.level = l++),
                                        (c.markup = "linkify"),
                                        (c.info = "auto"),
                                        u.push(c));
                                    let f = new e.Token("text", "", 0);
                                    ((f.content = i), (f.level = l), u.push(f));
                                    let p = new e.Token("link_close", "a", -1);
                                    ((p.level = --l),
                                        (p.markup = "linkify"),
                                        (p.info = "auto"),
                                        u.push(p),
                                        (o = n[t].lastIndex));
                                }
                                if (o < r.length) {
                                    let t = new e.Token("text", "", 0);
                                    ((t.content = r.slice(o)), (t.level = l), u.push(t));
                                }
                                i.push({ index: t, nodes: u });
                            }
                        }
                        if (i.length > 0) {
                            let e = a.length;
                            for (let t of i) e += t.nodes.length - 1;
                            let r = Array(e),
                                n = 0,
                                u = 0;
                            i.reverse();
                            for (let e = 0; e < a.length; e++) {
                                let t = i[n];
                                if ((null == t ? void 0 : t.index) === e) {
                                    for (let e of t.nodes) r[u++] = e;
                                    n++;
                                } else r[u++] = a[e];
                            }
                            t[s].children = r;
                        }
                    }
            },
        ],
        [
            "replacements",
            function (e) {
                let t;
                if (e.md.options.typographer)
                    for (t = e.tokens.length - 1; t >= 0; t--)
                        "inline" === e.tokens[t].type &&
                            (eV.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let r = e.length - 1; r >= 0; r--) {
                                        let n = e[r];
                                        ("text" !== n.type || t || (n.content = n.content.replace(eQ, e1)),
                                            "link_open" === n.type && "auto" === n.info && t--,
                                            "link_close" === n.type && "auto" === n.info && t++);
                                    }
                                })(e.tokens[t].children),
                            eH.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let r = e.length - 1; r >= 0; r--) {
                                        let n = e[r];
                                        ("text" === n.type &&
                                            !t &&
                                            eH.test(n.content) &&
                                            (n.content = n.content
                                                .replace(/\+-/g, "\xb1")
                                                .replace(/\.{2,}/g, "\u2026")
                                                .replace(/([?!])\u2026/g, "$1..")
                                                .replace(/([?!]){4,}/g, "$1$1$1")
                                                .replace(/,{2,}/g, ",")
                                                .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
                                                .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
                                                .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
                                            "link_open" === n.type && "auto" === n.info && t--,
                                            "link_close" === n.type && "auto" === n.info && t++);
                                    }
                                })(e.tokens[t].children));
            },
        ],
        [
            "smartquotes",
            function (e) {
                if (e.md.options.typographer)
                    for (let t = e.tokens.length - 1; t >= 0; t--)
                        "inline" === e.tokens[t].type &&
                            e2.test(e.tokens[t].content) &&
                            (function (e, t) {
                                let r,
                                    n = [],
                                    s = {};
                                for (let a = 0; a < e.length; a++) {
                                    let i = e[a],
                                        u = e[a].level;
                                    for (r = n.length - 1; r >= 0 && !(n[r].level <= u); r--);
                                    if (((n.length = r + 1), "text" !== i.type)) continue;
                                    let l = i.content,
                                        o = 0,
                                        h = l.length;
                                    t: for (; o < h;) {
                                        e3.lastIndex = o;
                                        let i = e3.exec(l);
                                        if (!i) break;
                                        let c = !0,
                                            f = !0;
                                        o = i.index + 1;
                                        let p = "'" === i[0],
                                            d = 32;
                                        if (i.index - 1 >= 0) d = l.charCodeAt(i.index - 1);
                                        else
                                            for (
                                                r = a - 1;
                                                r >= 0 && "softbreak" !== e[r].type && "hardbreak" !== e[r].type;
                                                r--
                                            )
                                                if (e[r].content) {
                                                    d = e[r].content.charCodeAt(e[r].content.length - 1);
                                                    break;
                                                }
                                        let g = 32;
                                        if (o < h) g = l.charCodeAt(o);
                                        else
                                            for (
                                                r = a + 1;
                                                r < e.length && "softbreak" !== e[r].type && "hardbreak" !== e[r].type;
                                                r++
                                            )
                                                if (e[r].content) {
                                                    g = e[r].content.charCodeAt(0);
                                                    break;
                                                }
                                        let _ = ej(d) || eJ(d),
                                            R = ej(g) || eJ(g),
                                            k = eB(d),
                                            m = eB(g);
                                        if (
                                            (m ? (c = !1) : R && !(k || _) && (c = !1),
                                            k ? (f = !1) : _ && !(m || R) && (f = !1),
                                            34 === g && '"' === i[0] && d >= 48 && d <= 57 && (f = c = !1),
                                            c && f && ((c = _), (f = R)),
                                            !c && !f)
                                        ) {
                                            p && e5(s, a, i.index, "\u2019");
                                            continue;
                                        }
                                        if (f)
                                            for (r = n.length - 1; r >= 0; r--) {
                                                let e = n[r];
                                                if (n[r].level < u) break;
                                                if (e.single === p && n[r].level === u) {
                                                    let u, l;
                                                    ((e = n[r]),
                                                        p
                                                            ? ((u = t.md.options.quotes[2]),
                                                              (l = t.md.options.quotes[3]))
                                                            : ((u = t.md.options.quotes[0]),
                                                              (l = t.md.options.quotes[1])),
                                                        e5(s, a, i.index, l),
                                                        e5(s, e.token, e.pos, u),
                                                        (n.length = r));
                                                    continue t;
                                                }
                                            }
                                        c
                                            ? n.push({ token: a, pos: i.index, single: p, level: u })
                                            : f && p && e5(s, a, i.index, "\u2019");
                                    }
                                }
                                Object.keys(s).forEach(function (t) {
                                    let r = Number(t);
                                    e[r].content = (function (e, t) {
                                        let r = "",
                                            n = 0;
                                        t.sort((e, t) => e.pos - t.pos);
                                        for (let s = 0; s < t.length; s++) {
                                            let a = t[s];
                                            ((r += e.slice(n, a.pos) + a.ch), (n = a.pos + 1));
                                        }
                                        return r + e.slice(n);
                                    })(e[r].content, s[t]);
                                });
                            })(e.tokens[t].children, e);
            },
        ],
        [
            "text_join",
            function (e) {
                let t,
                    r,
                    n = e.tokens,
                    s = n.length;
                for (let e = 0; e < s; e++) {
                    if ("inline" !== n[e].type) continue;
                    let s = n[e].children,
                        a = s.length;
                    for (t = 0; t < a; t++)
                        ("text_special" === s[t].type && (s[t].type = "text"),
                            s[t].children &&
                                (function (e) {
                                    let t,
                                        r,
                                        n = e.length;
                                    for (t = 0; t < n; t++) "text_special" === e[t].type && (e[t].type = "text");
                                    for (t = r = 0; t < n; t++)
                                        "text" === e[t].type && t + 1 < n && "text" === e[t + 1].type
                                            ? (e[t + 1].content = e[t].content + e[t + 1].content)
                                            : (t !== r && (e[r] = e[t]), r++);
                                    t !== r && (e.length = r);
                                })(s[t].children));
                    for (t = r = 0; t < a; t++)
                        "text" === s[t].type && t + 1 < a && "text" === s[t + 1].type
                            ? (s[t + 1].content = s[t].content + s[t + 1].content)
                            : (t !== r && (s[r] = s[t]), r++);
                    t !== r && (s.length = r);
                }
            },
        ],
    ],
    e9 = class {
        constructor() {
            (eU(this, "ruler", new eX()), eU(this, "State", eO));
            for (let e = 0; e < e6.length; e++) this.ruler.push(e6[e][0], e6[e][1]);
        }
        process(e) {
            let t = this.ruler.getRules("");
            for (let r = 0, n = t.length; r < n; r++) t[r](e);
        }
    },
    e4 = class {
        constructor(e, t, r, n) {
            (eU(this, "bMarks", []),
                eU(this, "eMarks", []),
                eU(this, "tShift", []),
                eU(this, "sCount", []),
                eU(this, "bsCount", []),
                eU(this, "blkIndent", 0),
                eU(this, "line", 0),
                eU(this, "lineMax", 0),
                eU(this, "tight", !1),
                eU(this, "listIndent", -1),
                eU(this, "parentType", "root"),
                eU(this, "level", 0),
                eU(this, "Token", eN),
                (this.src = e),
                (this.md = t),
                (this.env = r),
                (this.tokens = n));
            const s = this.src;
            for (let e = 0, t = 0, r = 0, n = 0, a = s.length, i = !1; t < a; t++) {
                const u = s.charCodeAt(t);
                if (!i)
                    if (ey(u)) {
                        (r++, 9 === u ? (n += 4 - (n % 4)) : n++);
                        continue;
                    } else i = !0;
                (10 === u || t === a - 1) &&
                    (10 !== u && t++,
                    this.bMarks.push(e),
                    this.eMarks.push(t),
                    this.tShift.push(r),
                    this.sCount.push(n),
                    this.bsCount.push(0),
                    (i = !1),
                    (r = 0),
                    (n = 0),
                    (e = t + 1));
            }
            (this.bMarks.push(s.length),
                this.eMarks.push(s.length),
                this.tShift.push(0),
                this.sCount.push(0),
                this.bsCount.push(0),
                (this.lineMax = this.bMarks.length - 1));
        }
        push(e, t, r) {
            let n = new eN(e, t, r);
            return (
                (n.block = !0),
                r < 0 && this.level--,
                (n.level = this.level),
                r > 0 && this.level++,
                this.tokens.push(n),
                n
            );
        }
        isEmpty(e) {
            return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
        }
        skipEmptyLines(e) {
            for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
            return e;
        }
        skipSpaces(e) {
            for (let t = this.src.length; e < t && ey(this.src.charCodeAt(e)); e++);
            return e;
        }
        skipSpacesBack(e, t) {
            if (e <= t) return e;
            for (; e > t;) if (!ey(this.src.charCodeAt(--e))) return e + 1;
            return e;
        }
        skipChars(e, t) {
            for (let r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++);
            return e;
        }
        skipCharsBack(e, t, r) {
            if (e <= r) return e;
            for (; e > r;) if (t !== this.src.charCodeAt(--e)) return e + 1;
            return e;
        }
        getLines(e, t, r, n) {
            if (e >= t) return "";
            let s = Array(t - e);
            for (let a = 0, i = e; i < t; i++, a++) {
                let e,
                    u = 0,
                    l = this.bMarks[i],
                    o = l;
                for (e = i + 1 < t || n ? this.eMarks[i] + 1 : this.eMarks[i]; o < e && u < r;) {
                    let e = this.src.charCodeAt(o);
                    if (ey(e)) 9 === e ? (u += 4 - ((u + this.bsCount[i]) % 4)) : u++;
                    else if (o - l < this.tShift[i]) u++;
                    else break;
                    o++;
                }
                u > r ? (s[a] = Array(u - r + 1).join(" ") + this.src.slice(o, e)) : (s[a] = this.src.slice(o, e));
            }
            return s.join("");
        }
    };
function e8(e, t) {
    let r = e.bMarks[t] + e.tShift[t],
        n = e.eMarks[t];
    return e.src.slice(r, n);
}
function e7(e) {
    let t = [],
        r = e.length,
        n = 0,
        s = e.charCodeAt(n),
        a = !1,
        i = 0,
        u = "";
    for (; n < r;)
        (124 === s &&
            (a ? ((u += e.substring(i, n - 1)), (i = n)) : (t.push(u + e.substring(i, n)), (u = ""), (i = n + 1))),
            (a = 92 === s),
            n++,
            (s = e.charCodeAt(n)));
    return (t.push(u + e.substring(i)), t);
}
function te(e, t) {
    let r = e.eMarks[t],
        n = e.bMarks[t] + e.tShift[t],
        s = e.src.charCodeAt(n++);
    return (42 !== s && 45 !== s && 43 !== s) || (n < r && !ey(e.src.charCodeAt(n))) ? -1 : n;
}
function tt(e, t) {
    let r = e.bMarks[t] + e.tShift[t],
        n = e.eMarks[t],
        s = r;
    if (s + 1 >= n) return -1;
    let a = e.src.charCodeAt(s++);
    if (a < 48 || a > 57) return -1;
    for (;;) {
        if (s >= n) return -1;
        if ((a = e.src.charCodeAt(s++)) >= 48 && a <= 57) {
            if (s - r >= 10) return -1;
            continue;
        }
        if (41 === a || 46 === a) break;
        return -1;
    }
    return s < n && !ey((a = e.src.charCodeAt(s))) ? -1 : s;
}
var tr =
        "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    tn = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    ts = RegExp(
        `^(?:${tr}|${tn}|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`,
    ),
    ta = RegExp(`^(?:${tr}|${tn})`),
    ti = [
        [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
        [/^<!--/, /-->/, !0],
        [/^<\?/, /\?>/, !0],
        [/^<![A-Za-z]/, />/, !0],
        [/^<!\[CDATA\[/, /\]\]>/, !0],
        [
            RegExp(
                "^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))",
                "i",
            ),
            /^$/,
            !0,
        ],
        [RegExp(`${ta.source}\\s*$`), /^$/, !1],
    ],
    tu = [
        [
            "table",
            function (e, t, r, n) {
                let s;
                if (t + 2 > r) return !1;
                let a = t + 1;
                if (e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4) return !1;
                let i = e.bMarks[a] + e.tShift[a];
                if (i >= e.eMarks[a]) return !1;
                let u = e.src.charCodeAt(i++);
                if ((124 !== u && 45 !== u && 58 !== u) || i >= e.eMarks[a]) return !1;
                let l = e.src.charCodeAt(i++);
                if ((124 !== l && 45 !== l && 58 !== l && !ey(l)) || (45 === u && ey(l))) return !1;
                for (; i < e.eMarks[a];) {
                    let t = e.src.charCodeAt(i);
                    if (124 !== t && 45 !== t && 58 !== t && !ey(t)) return !1;
                    i++;
                }
                let o = e8(e, t + 1),
                    h = o.split("|"),
                    c = [];
                for (let e = 0; e < h.length; e++) {
                    let t = h[e].trim();
                    if (!t)
                        if (0 === e || e === h.length - 1) continue;
                        else return !1;
                    if (!/^:?-+:?$/.test(t)) return !1;
                    58 === t.charCodeAt(t.length - 1)
                        ? c.push(58 === t.charCodeAt(0) ? "center" : "right")
                        : 58 === t.charCodeAt(0)
                          ? c.push("left")
                          : c.push("");
                }
                if (-1 === (o = e8(e, t).trim()).indexOf("|") || e.sCount[t] - e.blkIndent >= 4) return !1;
                ((h = e7(o)).length && "" === h[0] && h.shift(), h.length && "" === h[h.length - 1] && h.pop());
                let f = h.length;
                if (0 === f || f !== c.length) return !1;
                if (n) return !0;
                let p = e.parentType;
                e.parentType = "table";
                let d = e.md.block.ruler.getRules("blockquote"),
                    g = e.push("table_open", "table", 1),
                    _ = [t, 0];
                ((g.map = _),
                    (e.push("thead_open", "thead", 1).map = [t, t + 1]),
                    (e.push("tr_open", "tr", 1).map = [t, t + 1]));
                for (let t = 0; t < h.length; t++) {
                    let r = e.push("th_open", "th", 1);
                    c[t] && (r.attrs = [["style", `text-align:${c[t]}`]]);
                    let n = e.push("inline", "", 0);
                    ((n.content = h[t].trim()), (n.children = []), e.push("th_close", "th", -1));
                }
                (e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1));
                let R = 0;
                for (a = t + 2; a < r && !(e.sCount[a] < e.blkIndent); a++) {
                    let n = !1;
                    for (let t = 0, s = d.length; t < s; t++)
                        if (d[t](e, a, r, !0)) {
                            n = !0;
                            break;
                        }
                    if (
                        n ||
                        !(o = e8(e, a).trim()) ||
                        e.sCount[a] - e.blkIndent >= 4 ||
                        ((h = e7(o)).length && "" === h[0] && h.shift(),
                        h.length && "" === h[h.length - 1] && h.pop(),
                        (R += f - h.length) > 65536)
                    )
                        break;
                    (a === t + 2 && (e.push("tbody_open", "tbody", 1).map = s = [t + 2, 0]),
                        (e.push("tr_open", "tr", 1).map = [a, a + 1]));
                    for (let t = 0; t < f; t++) {
                        let r = e.push("td_open", "td", 1);
                        c[t] && (r.attrs = [["style", `text-align:${c[t]}`]]);
                        let n = e.push("inline", "", 0);
                        ((n.content = h[t] ? h[t].trim() : ""), (n.children = []), e.push("td_close", "td", -1));
                    }
                    e.push("tr_close", "tr", -1);
                }
                return (
                    s && (e.push("tbody_close", "tbody", -1), (s[1] = a)),
                    e.push("table_close", "table", -1),
                    (_[1] = a),
                    (e.parentType = p),
                    (e.line = a),
                    !0
                );
            },
            ["paragraph", "reference"],
        ],
        [
            "code",
            function (e, t, r) {
                if (e.sCount[t] - e.blkIndent < 4) return !1;
                let n = t + 1,
                    s = n;
                for (; n < r;) {
                    if (e.isEmpty(n)) {
                        n++;
                        continue;
                    }
                    if (e.sCount[n] - e.blkIndent >= 4) {
                        s = ++n;
                        continue;
                    }
                    break;
                }
                e.line = s;
                let a = e.push("code_block", "code", 0);
                return ((a.content = e.getLines(t, s, 4 + e.blkIndent, !1) + "\n"), (a.map = [t, e.line]), !0);
            },
        ],
        [
            "fence",
            function (e, t, r, n) {
                let s = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || s + 3 > a) return !1;
                let i = e.src.charCodeAt(s);
                if (126 !== i && 96 !== i) return !1;
                let u = s,
                    l = (s = e.skipChars(s, i)) - u;
                if (l < 3) return !1;
                let o = e.src.slice(u, s),
                    h = e.src.slice(s, a);
                if (96 === i && h.indexOf(String.fromCharCode(i)) >= 0) return !1;
                if (n) return !0;
                let c = t,
                    f = !1;
                for (
                    ;
                    !(++c >= r) &&
                    (!((s = u = e.bMarks[c] + e.tShift[c]) < (a = e.eMarks[c])) || !(e.sCount[c] < e.blkIndent));
                ) {
                    if (
                        !(
                            e.src.charCodeAt(s) !== i ||
                            e.sCount[c] - e.blkIndent >= 4 ||
                            (s = e.skipChars(s, i)) - u < l
                        ) &&
                        !((s = e.skipSpaces(s)) < a)
                    ) {
                        f = !0;
                        break;
                    }
                }
                ((l = e.sCount[t]), (e.line = c + +!!f));
                let p = e.push("fence", "code", 0);
                return (
                    (p.info = h), (p.content = e.getLines(t + 1, c, l, !0)), (p.markup = o), (p.map = [t, e.line]), !0
                );
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "blockquote",
            function (e, t, r, n) {
                let s,
                    a = e.bMarks[t] + e.tShift[t],
                    i = e.eMarks[t],
                    u = e.lineMax;
                if (e.sCount[t] - e.blkIndent >= 4 || 62 !== e.src.charCodeAt(a)) return !1;
                if (n) return !0;
                let l = [],
                    o = [],
                    h = [],
                    c = [],
                    f = e.md.block.ruler.getRules("blockquote"),
                    p = e.parentType;
                e.parentType = "blockquote";
                let d = !1;
                for (s = t; s < r; s++) {
                    let t = e.sCount[s] < e.blkIndent;
                    if ((a = e.bMarks[s] + e.tShift[s]) >= (i = e.eMarks[s])) break;
                    if (62 === e.src.charCodeAt(a++) && !t) {
                        let t,
                            r,
                            n = e.sCount[s] + 1;
                        32 === e.src.charCodeAt(a)
                            ? (a++, n++, (r = !1), (t = !0))
                            : 9 === e.src.charCodeAt(a)
                              ? ((t = !0), (e.bsCount[s] + n) % 4 == 3 ? (a++, n++, (r = !1)) : (r = !0))
                              : (t = !1);
                        let u = n;
                        for (l.push(e.bMarks[s]), e.bMarks[s] = a; a < i;) {
                            let t = e.src.charCodeAt(a);
                            if (ey(t)) 9 === t ? (u += 4 - ((u + e.bsCount[s] + +!!r) % 4)) : u++;
                            else break;
                            a++;
                        }
                        ((d = a >= i),
                            o.push(e.bsCount[s]),
                            (e.bsCount[s] = e.sCount[s] + 1 + +!!t),
                            h.push(e.sCount[s]),
                            (e.sCount[s] = u - n),
                            c.push(e.tShift[s]),
                            (e.tShift[s] = a - e.bMarks[s]));
                        continue;
                    }
                    if (d) break;
                    let n = !1;
                    for (let t = 0, a = f.length; t < a; t++)
                        if (f[t](e, s, r, !0)) {
                            n = !0;
                            break;
                        }
                    if (n) {
                        ((e.lineMax = s),
                            0 !== e.blkIndent &&
                                (l.push(e.bMarks[s]),
                                o.push(e.bsCount[s]),
                                c.push(e.tShift[s]),
                                h.push(e.sCount[s]),
                                (e.sCount[s] -= e.blkIndent)));
                        break;
                    }
                    (l.push(e.bMarks[s]),
                        o.push(e.bsCount[s]),
                        c.push(e.tShift[s]),
                        h.push(e.sCount[s]),
                        (e.sCount[s] = -1));
                }
                let g = e.blkIndent;
                e.blkIndent = 0;
                let _ = e.push("blockquote_open", "blockquote", 1);
                _.markup = ">";
                let R = [t, 0];
                ((_.map = R),
                    e.md.block.tokenize(e, t, s),
                    (e.push("blockquote_close", "blockquote", -1).markup = ">"),
                    (e.lineMax = u),
                    (e.parentType = p),
                    (R[1] = e.line));
                for (let r = 0; r < c.length; r++)
                    ((e.bMarks[r + t] = l[r]),
                        (e.tShift[r + t] = c[r]),
                        (e.sCount[r + t] = h[r]),
                        (e.bsCount[r + t] = o[r]));
                return ((e.blkIndent = g), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "hr",
            function (e, t, r, n) {
                let s = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let a = e.bMarks[t] + e.tShift[t],
                    i = e.src.charCodeAt(a++);
                if (42 !== i && 45 !== i && 95 !== i) return !1;
                let u = 1;
                for (; a < s;) {
                    let t = e.src.charCodeAt(a++);
                    if (t !== i && !ey(t)) return !1;
                    t === i && u++;
                }
                if (u < 3) return !1;
                if (n) return !0;
                e.line = t + 1;
                let l = e.push("hr", "hr", 0);
                return ((l.map = [t, e.line]), (l.markup = Array(u + 1).join(String.fromCharCode(i))), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "list",
            function (e, t, r, n) {
                let s,
                    a,
                    i,
                    u,
                    l,
                    o,
                    h,
                    c = t,
                    f = !0;
                if (
                    e.sCount[c] - e.blkIndent >= 4 ||
                    (e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
                )
                    return !1;
                let p = !1;
                if (
                    (n && "paragraph" === e.parentType && e.sCount[c] >= e.blkIndent && (p = !0), (h = tt(e, c)) >= 0)
                ) {
                    if (((l = !0), (i = e.bMarks[c] + e.tShift[c]), (o = Number(e.src.slice(i, h - 1))), p && 1 !== o))
                        return !1;
                } else {
                    if (!((h = te(e, c)) >= 0)) return !1;
                    l = !1;
                }
                if (p && e.skipSpaces(h) >= e.eMarks[c]) return !1;
                if (n) return !0;
                let d = e.src.charCodeAt(h - 1),
                    g = e.tokens.length;
                l
                    ? ((u = e.push("ordered_list_open", "ol", 1)), 1 !== o && (u.attrs = [["start", o]]))
                    : (u = e.push("bullet_list_open", "ul", 1));
                let _ = [c, 0];
                ((u.map = _), (u.markup = String.fromCharCode(d)));
                let R = !1,
                    k = e.md.block.ruler.getRules("list"),
                    m = e.parentType;
                for (e.parentType = "list"; c < r;) {
                    let t;
                    ((a = h), (s = e.eMarks[c]));
                    let n = e.sCount[c] + h - (e.bMarks[c] + e.tShift[c]),
                        o = n;
                    for (; a < s;) {
                        let t = e.src.charCodeAt(a);
                        if (9 === t) o += 4 - ((o + e.bsCount[c]) % 4);
                        else if (32 === t) o++;
                        else break;
                        a++;
                    }
                    let p = a;
                    (t = p >= s ? 1 : o - n) > 4 && (t = 1);
                    let g = n + t;
                    (u = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(d);
                    let _ = [c, 0];
                    ((u.map = _), l && (u.info = e.src.slice(i, h - 1)));
                    let m = e.tight,
                        b = e.tShift[c],
                        D = e.sCount[c],
                        C = e.listIndent;
                    if (
                        ((e.listIndent = e.blkIndent),
                        (e.blkIndent = g),
                        (e.tight = !0),
                        (e.tShift[c] = p - e.bMarks[c]),
                        (e.sCount[c] = o),
                        p >= s && e.isEmpty(c + 1) ? (e.line = Math.min(e.line + 2, r)) : e.md.block.tokenize(e, c, r),
                        (!e.tight || R) && (f = !1),
                        (R = e.line - c > 1 && e.isEmpty(e.line - 1)),
                        (e.blkIndent = e.listIndent),
                        (e.listIndent = C),
                        (e.tShift[c] = b),
                        (e.sCount[c] = D),
                        (e.tight = m),
                        ((u = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(d)),
                        (c = e.line),
                        (_[1] = c),
                        c >= r || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
                    )
                        break;
                    let v = !1;
                    for (let t = 0, n = k.length; t < n; t++)
                        if (k[t](e, c, r, !0)) {
                            v = !0;
                            break;
                        }
                    if (v) break;
                    if (l) {
                        if ((h = tt(e, c)) < 0) break;
                        i = e.bMarks[c] + e.tShift[c];
                    } else if ((h = te(e, c)) < 0) break;
                    if (d !== e.src.charCodeAt(h - 1)) break;
                }
                return (
                    ((u = l ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup =
                        String.fromCharCode(d)),
                    (_[1] = c),
                    (e.line = c),
                    (e.parentType = m),
                    f &&
                        (function (e, t) {
                            let r = e.level + 2;
                            for (let n = t + 2, s = e.tokens.length - 2; n < s; n++)
                                e.tokens[n].level === r &&
                                    "paragraph_open" === e.tokens[n].type &&
                                    ((e.tokens[n + 2].hidden = !0), (e.tokens[n].hidden = !0), (n += 2));
                        })(e, g),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "reference",
            function (e, t, r, n) {
                let s,
                    a = e.bMarks[t] + e.tShift[t],
                    i = e.eMarks[t],
                    u = t + 1;
                if (e.sCount[t] - e.blkIndent >= 4 || 91 !== e.src.charCodeAt(a)) return !1;
                function l(t) {
                    let r = e.lineMax;
                    if (t >= r || e.isEmpty(t)) return null;
                    let n = !1;
                    if ((e.sCount[t] - e.blkIndent > 3 && (n = !0), e.sCount[t] < 0 && (n = !0), !n)) {
                        let n = e.md.block.ruler.getRules("reference"),
                            s = e.parentType;
                        e.parentType = "reference";
                        let a = !1;
                        for (let s = 0, i = n.length; s < i; s++)
                            if (n[s](e, t, r, !0)) {
                                a = !0;
                                break;
                            }
                        if (((e.parentType = s), a)) return null;
                    }
                    let s = e.bMarks[t] + e.tShift[t],
                        a = e.eMarks[t];
                    return e.src.slice(s, a + 1);
                }
                let o = e.src.slice(a, i + 1);
                i = o.length;
                let h = -1;
                for (a = 1; a < i; a++) {
                    let e = o.charCodeAt(a);
                    if (91 === e) return !1;
                    if (93 === e) {
                        h = a;
                        break;
                    }
                    if (10 === e) {
                        let e = l(u);
                        null !== e && ((o += e), (i = o.length), u++);
                    } else if (92 === e && ++a < i && 10 === o.charCodeAt(a)) {
                        let e = l(u);
                        null !== e && ((o += e), (i = o.length), u++);
                    }
                }
                if (h < 0 || 58 !== o.charCodeAt(h + 1)) return !1;
                for (a = h + 2; a < i; a++) {
                    let e = o.charCodeAt(a);
                    if (10 === e) {
                        let e = l(u);
                        null !== e && ((o += e), (i = o.length), u++);
                    } else if (ey(e));
                    else break;
                }
                let c = e.md.helpers.parseLinkDestination(o, a, i);
                if (!c.ok) return !1;
                let f = e.md.normalizeLink(c.str);
                if (!e.md.validateLink(f)) return !1;
                let p = (a = c.pos),
                    d = u,
                    g = a;
                for (; a < i; a++) {
                    let e = o.charCodeAt(a);
                    if (10 === e) {
                        let e = l(u);
                        null !== e && ((o += e), (i = o.length), u++);
                    } else if (ey(e));
                    else break;
                }
                let _ = e.md.helpers.parseLinkTitle(o, a, i);
                for (; _.can_continue;) {
                    let t = l(u);
                    if (null === t) break;
                    ((o += t), (a = i), (i = o.length), u++, (_ = e.md.helpers.parseLinkTitle(o, a, i, _)));
                }
                for (
                    a < i && g !== a && _.ok ? ((s = _.str), (a = _.pos)) : ((s = ""), (a = p), (u = d));
                    a < i && ey(o.charCodeAt(a));
                )
                    a++;
                if (a < i && 10 !== o.charCodeAt(a) && s) for (s = "", a = p, u = d; a < i && ey(o.charCodeAt(a));) a++;
                if (a < i && 10 !== o.charCodeAt(a)) return !1;
                let R = eT(o.slice(1, h));
                if (!R) return !1;
                if (n) return !0;
                (void 0 === e.env.references && (e.env.references = {}),
                    void 0 === e.env.references[R] && (e.env.references[R] = { title: s, href: f }));
                let k = e.push("reference_definition", "", 0);
                ((k.map = [t, u]), (k.hidden = !0));
                let m = Object.create(null);
                return ((m.label = R), (k.meta = m), (e.line = u), !0);
            },
        ],
        [
            "html_block",
            function (e, t, r, n) {
                let s = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || 60 !== e.src.charCodeAt(s)) return !1;
                let i = e.src.slice(s, a),
                    u = 0;
                for (; u < ti.length && !ti[u][0].test(i); u++);
                if (u === ti.length) return !1;
                if (n) return ti[u][2];
                let l = t + 1,
                    o = ti[u][1].test("");
                if (!ti[u][1].test(i)) {
                    for (; l < r && (!(e.sCount[l] < e.blkIndent) || (!o && e.isEmpty(l))); l++)
                        if (
                            ((s = e.bMarks[l] + e.tShift[l]),
                            (a = e.eMarks[l]),
                            (i = e.src.slice(s, a)),
                            ti[u][1].test(i))
                        ) {
                            0 !== i.length && l++;
                            break;
                        }
                }
                e.line = l;
                let h = e.push("html_block", "", 0);
                return ((h.map = [t, l]), (h.content = e.getLines(t, l, e.blkIndent, !0)), !0);
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "heading",
            function (e, t, r, n) {
                let s = e.bMarks[t] + e.tShift[t],
                    a = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let i = e.src.charCodeAt(s);
                if (35 !== i || s >= a) return !1;
                let u = 1;
                for (i = e.src.charCodeAt(++s); 35 === i && s < a && u <= 6;) (u++, (i = e.src.charCodeAt(++s)));
                if (u > 6 || (s < a && !ey(i))) return !1;
                if (n) return !0;
                a = e.skipSpacesBack(a, s);
                let l = e.skipCharsBack(a, 35, s);
                (l > s && ey(e.src.charCodeAt(l - 1)) && (a = l), (e.line = t + 1));
                let o = e.push("heading_open", `h${u}`, 1);
                ((o.markup = "########".slice(0, u)), (o.map = [t, e.line]));
                let h = e.push("inline", "", 0);
                return (
                    (h.content = eS(e.src.slice(s, a))),
                    (h.map = [t, e.line]),
                    (h.children = []),
                    (e.push("heading_close", `h${u}`, -1).markup = "########".slice(0, u)),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "lheading",
            function (e, t, r) {
                let n,
                    s = e.md.block.ruler.getRules("paragraph");
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let a = e.parentType;
                e.parentType = "paragraph";
                let i = 0,
                    u = t + 1;
                for (; u < r && !e.isEmpty(u); u++) {
                    if (e.sCount[u] - e.blkIndent > 3) continue;
                    if (e.sCount[u] >= e.blkIndent) {
                        let t = e.bMarks[u] + e.tShift[u],
                            r = e.eMarks[u];
                        if (
                            t < r &&
                            (45 === (n = e.src.charCodeAt(t)) || 61 === n) &&
                            ((t = e.skipChars(t, n)), (t = e.skipSpaces(t)) >= r)
                        ) {
                            i = 61 === n ? 1 : 2;
                            break;
                        }
                    }
                    if (e.sCount[u] < 0) continue;
                    let t = !1;
                    for (let n = 0, a = s.length; n < a; n++)
                        if (s[n](e, u, r, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                if (!i) return ((e.parentType = a), !1);
                let l = eS(e.getLines(t, u, e.blkIndent, !1));
                e.line = u + 1;
                let o = e.push("heading_open", `h${i}`, 1);
                ((o.markup = String.fromCharCode(n)), (o.map = [t, e.line]));
                let h = e.push("inline", "", 0);
                return (
                    (h.content = l),
                    (h.map = [t, e.line - 1]),
                    (h.children = []),
                    (e.push("heading_close", `h${i}`, -1).markup = String.fromCharCode(n)),
                    (e.parentType = a),
                    !0
                );
            },
        ],
        [
            "paragraph",
            function (e, t, r) {
                let n = e.md.block.ruler.getRules("paragraph"),
                    s = e.parentType,
                    a = t + 1;
                for (e.parentType = "paragraph"; a < r && !e.isEmpty(a); a++) {
                    if (e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0) continue;
                    let t = !1;
                    for (let s = 0, i = n.length; s < i; s++)
                        if (n[s](e, a, r, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                let i = eS(e.getLines(t, a, e.blkIndent, !1));
                ((e.line = a), (e.push("paragraph_open", "p", 1).map = [t, e.line]));
                let u = e.push("inline", "", 0);
                return (
                    (u.content = i),
                    (u.map = [t, e.line]),
                    (u.children = []),
                    e.push("paragraph_close", "p", -1),
                    (e.parentType = s),
                    !0
                );
            },
        ],
    ],
    tl = class {
        constructor() {
            (eU(this, "ruler", new eX()), eU(this, "State", e4));
            for (let e = 0; e < tu.length; e++) this.ruler.push(tu[e][0], tu[e][1], { alt: (tu[e][2] || []).slice() });
        }
        tokenize(e, t, r) {
            let n = this.ruler.getRules(""),
                s = n.length,
                a = e.md.options.maxNesting,
                i = t,
                u = !1;
            for (; i < r && ((e.line = i = e.skipEmptyLines(i)), !(i >= r) && !(e.sCount[i] < e.blkIndent));) {
                if (e.level >= a) {
                    e.line = r;
                    break;
                }
                let t = e.line,
                    l = !1;
                for (let a = 0; a < s; a++)
                    if ((l = n[a](e, i, r, !1))) {
                        if (t >= e.line) throw Error("block rule didn't increment state.line");
                        break;
                    }
                if (!l) throw Error("none of the block rules matched");
                ((e.tight = !u),
                    e.isEmpty(e.line - 1) && (u = !0),
                    (i = e.line) < r && e.isEmpty(i) && ((u = !0), (e.line = ++i)));
            }
        }
        parse(e, t, r, n) {
            if (!e) return;
            let s = new this.State(e, t, r, n);
            this.tokenize(s, s.line, s.lineMax);
        }
    },
    to = class {
        constructor(e, t, r, n) {
            (eU(this, "pos", 0),
                eU(this, "level", 0),
                eU(this, "pending", ""),
                eU(this, "pendingLevel", 0),
                eU(this, "cache", {}),
                eU(this, "backticks", {}),
                eU(this, "backticksScanned", !1),
                eU(this, "linkLevel", 0),
                eU(this, "delimiters", []),
                eU(this, "_prev_delimiters", []),
                eU(this, "Token", eN),
                (this.src = e),
                (this.env = r),
                (this.md = t),
                (this.tokens = n),
                (this.tokens_meta = Array(n.length)),
                (this.posMax = this.src.length));
        }
        pushPending() {
            let e = new eN("text", "", 0);
            return (
                (e.content = this.pending), (e.level = this.pendingLevel), this.tokens.push(e), (this.pending = ""), e
            );
        }
        push(e, t, r) {
            let n;
            this.pending && this.pushPending();
            let s = new eN(e, t, r);
            return (
                r < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
                (s.level = this.level),
                r > 0 &&
                    (this.level++,
                    this._prev_delimiters.push(this.delimiters),
                    (this.delimiters = []),
                    (n = { delimiters: this.delimiters })),
                (this.pendingLevel = this.level),
                this.tokens.push(s),
                this.tokens_meta.push(n),
                s
            );
        }
        scanDelims(e, t) {
            let r,
                n = this.posMax,
                s = this.src.charCodeAt(e);
            if (0 === e) r = 32;
            else if (1 === e) (63488 & (r = this.src.charCodeAt(0))) == 55296 && (r = 65533);
            else if ((64512 & (r = this.src.charCodeAt(e - 1))) == 56320) {
                let t = this.src.charCodeAt(e - 2);
                r = (64512 & t) == 55296 ? 65536 + ((t - 55296) << 10) + (r - 56320) : 65533;
            } else (64512 & r) == 55296 && (r = 65533);
            let a = e;
            for (; a < n && this.src.charCodeAt(a) === s;) a++;
            let i = a - e,
                u = a < n ? this.src.charCodeAt(a) : 32;
            if ((64512 & u) == 55296) {
                let e = this.src.charCodeAt(a + 1);
                u = (64512 & e) == 56320 ? 65536 + ((u - 55296) << 10) + (e - 56320) : 65533;
            } else (64512 & u) == 56320 && (u = 65533);
            let l = ej(r) || eJ(r),
                o = ej(u) || eJ(u),
                h = eB(r),
                c = eB(u),
                f = !c && (!o || h || l),
                p = !h && (!l || c || o);
            return { can_open: f && (t || !p || l), can_close: p && (t || !f || o), length: i };
        }
    },
    th = [];
for (let e = 0; e < 256; e++) th.push(0);
function tc(e, t) {
    let r,
        n = [],
        s = t.length;
    for (let a = 0; a < s; a++) {
        let s = t[a];
        if (126 !== s.marker || -1 === s.end) continue;
        let i = t[s.end];
        (((r = e.tokens[s.token]).type = "s_open"),
            (r.tag = "s"),
            (r.nesting = 1),
            (r.markup = "~~"),
            (r.content = ""),
            ((r = e.tokens[i.token]).type = "s_close"),
            (r.tag = "s"),
            (r.nesting = -1),
            (r.markup = "~~"),
            (r.content = ""),
            "text" === e.tokens[i.token - 1].type && "~" === e.tokens[i.token - 1].content && n.push(i.token - 1));
    }
    for (; n.length;) {
        let t = n.pop(),
            s = t + 1;
        for (; s < e.tokens.length && "s_close" === e.tokens[s].type;) s++;
        t !== --s && ((r = e.tokens[s]), (e.tokens[s] = e.tokens[t]), (e.tokens[t] = r));
    }
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
    th[e.charCodeAt(0)] = 1;
});
function tf(e, t) {
    let r = t.length;
    for (let n = r - 1; n >= 0; n--) {
        let r = t[n];
        if ((95 !== r.marker && 42 !== r.marker) || -1 === r.end) continue;
        let s = t[r.end],
            a =
                n > 0 &&
                t[n - 1].end === r.end + 1 &&
                t[n - 1].marker === r.marker &&
                t[n - 1].token === r.token - 1 &&
                t[r.end + 1].token === s.token + 1,
            i = String.fromCharCode(r.marker),
            u = e.tokens[r.token];
        ((u.type = a ? "strong_open" : "em_open"),
            (u.tag = a ? "strong" : "em"),
            (u.nesting = 1),
            (u.markup = a ? i + i : i),
            (u.content = ""));
        let l = e.tokens[s.token];
        ((l.type = a ? "strong_close" : "em_close"),
            (l.tag = a ? "strong" : "em"),
            (l.nesting = -1),
            (l.markup = a ? i + i : i),
            (l.content = ""),
            a && ((e.tokens[t[n - 1].token].content = ""), (e.tokens[t[r.end + 1].token].content = ""), n--));
    }
}
var tp =
        /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    td = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
    tg = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    t_ = /^&([a-z][a-z0-9]{1,31});/i;
function tR(e) {
    let t = {},
        r = e.length;
    if (!r) return;
    let n = 0,
        s = -2,
        a = [];
    for (let i = 0; i < r; i++) {
        let r = e[i];
        if (
            (a.push(0),
            (e[n].marker !== r.marker || s !== r.token - 1) && (n = i),
            (s = r.token),
            (r.length = r.length || 0),
            !r.close)
        )
            continue;
        t.hasOwnProperty(r.marker) || (t[r.marker] = [-1, -1, -1, -1, -1, -1]);
        let u = t[r.marker][3 * !!r.open + (r.length % 3)],
            l = n - a[n] - 1,
            o = l;
        for (; l > u; l -= a[l] + 1) {
            let t = e[l];
            if (t.marker === r.marker && t.open && t.end < 0) {
                let n = !1;
                if (
                    ((t.close || r.open) &&
                        (t.length + r.length) % 3 == 0 &&
                        (t.length % 3 != 0 || r.length % 3 != 0) &&
                        (n = !0),
                    !n)
                ) {
                    let n = l > 0 && !e[l - 1].open ? a[l - 1] + 1 : 0;
                    ((a[i] = i - l + n), (a[l] = n), (r.open = !1), (t.end = i), (t.close = !1), (o = -1), (s = -2));
                    break;
                }
            }
        }
        -1 !== o && (t[r.marker][3 * !!r.open + ((r.length || 0) % 3)] = o);
    }
}
var tk = [
        [
            "text",
            function (e, t) {
                let r = e.pos;
                for (
                    ;
                    r < e.posMax &&
                    !(function (e) {
                        switch (e) {
                            case 10:
                            case 33:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 42:
                            case 43:
                            case 45:
                            case 58:
                            case 60:
                            case 61:
                            case 62:
                            case 64:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 123:
                            case 125:
                            case 126:
                                return !0;
                            default:
                                return !1;
                        }
                    })(e.src.charCodeAt(r));
                )
                    r++;
                return r !== e.pos && (t || (e.pending += e.src.slice(e.pos, r)), (e.pos = r), !0);
            },
        ],
        [
            "linkify",
            function (e, t) {
                var r, n;
                if (!e.md.options.linkify || e.linkLevel > 0) return !1;
                let s = e.pos;
                if (
                    s + 3 > e.posMax ||
                    58 !== e.src.charCodeAt(s) ||
                    47 !== e.src.charCodeAt(s + 1) ||
                    47 !== e.src.charCodeAt(s + 2)
                )
                    return !1;
                let a = s - Math.min(10, e.pending.length, s),
                    i = s;
                for (
                    ;
                    i > a &&
                    (((r = e.src.charCodeAt(i - 1)) >= 65 && r <= 90) ||
                        (r >= 97 && r <= 122) ||
                        (r >= 48 && r <= 57) ||
                        43 === r ||
                        45 === r ||
                        46 === r);
                )
                    i--;
                if (i === s || !(((n = e.src.charCodeAt(i)) >= 65 && n <= 90) || (n >= 97 && n <= 122))) return !1;
                let u = s - i,
                    l = e.md.linkify.matchAtStart(e.src.slice(i));
                if (!l) return !1;
                let o = l.url;
                if (o.length <= u) return !1;
                let h = o.length;
                for (; h > 0 && 42 === o.charCodeAt(h - 1);) h--;
                h !== o.length && (o = o.slice(0, h));
                let c = e.md.normalizeLink(o);
                if (!e.md.validateLink(c)) return !1;
                if (!t) {
                    e.pending = e.pending.slice(0, -u);
                    let t = e.push("link_open", "a", 1);
                    ((t.attrs = [["href", c]]),
                        (t.markup = "linkify"),
                        (t.info = "auto"),
                        (e.push("text", "", 0).content = e.md.normalizeLinkText(o)));
                    let r = e.push("link_close", "a", -1);
                    ((r.markup = "linkify"), (r.info = "auto"));
                }
                return ((e.pos += o.length - u), !0);
            },
        ],
        [
            "newline",
            function (e, t) {
                let r = e.pos;
                if (10 !== e.src.charCodeAt(r)) return !1;
                let n = e.pending.length - 1,
                    s = e.posMax;
                if (!t)
                    if (n >= 0 && 32 === e.pending.charCodeAt(n))
                        if (n >= 1 && 32 === e.pending.charCodeAt(n - 1)) {
                            let t = n - 1;
                            for (; t >= 1 && 32 === e.pending.charCodeAt(t - 1);) t--;
                            ((e.pending = e.pending.slice(0, t)), e.push("hardbreak", "br", 0));
                        } else ((e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0));
                    else e.push("softbreak", "br", 0);
                for (r++; r < s && ey(e.src.charCodeAt(r));) r++;
                return ((e.pos = r), !0);
            },
        ],
        [
            "escape",
            function (e, t) {
                let r = e.pos,
                    n = e.posMax;
                if (92 !== e.src.charCodeAt(r) || ++r >= n) return !1;
                let s = e.src.charCodeAt(r);
                if (10 === s) {
                    for (t || e.push("hardbreak", "br", 0), r++; r < n && ey((s = e.src.charCodeAt(r)));) r++;
                    return ((e.pos = r), !0);
                }
                if (32 === s) {
                    if (!t) {
                        let t = e.push("text_special", "", 0);
                        ((t.content = "\\"), (t.markup = "\\"), (t.info = "escape"));
                    }
                    return ((e.pos = r), !0);
                }
                let a = e.src[r];
                if (s >= 55296 && s <= 56319 && r + 1 < n) {
                    let t = e.src.charCodeAt(r + 1);
                    t >= 56320 && t <= 57343 && ((a += e.src[r + 1]), r++);
                }
                let i = "\\" + a;
                if (!t) {
                    let t = e.push("text_special", "", 0);
                    (s < 256 && 0 !== th[s] ? (t.content = a) : (t.content = i), (t.markup = i), (t.info = "escape"));
                }
                return ((e.pos = r + 1), !0);
            },
        ],
        [
            "backticks",
            function (e, t) {
                var r;
                let n = e.pos;
                if (96 !== e.src.charCodeAt(n)) return !1;
                let s = e.posMax,
                    a = n + 1;
                for (; a < s && 96 === e.src.charCodeAt(a);) a++;
                let i = e.src.slice(n, a),
                    u = i.length;
                if (
                    (e.backticksScanned ||
                        ((e.backticks = (function (e) {
                            let t = {},
                                r = 0;
                            for (; -1 !== (r = e.indexOf("`", r));) {
                                let n = r;
                                for (; 96 === e.charCodeAt(++r););
                                t[r - n] = n;
                            }
                            return t;
                        })(e.src)),
                        (e.backticksScanned = !0)),
                    (null != (r = e.backticks[u]) ? r : -1) >= a)
                ) {
                    let r,
                        n = a;
                    for (; -1 !== (r = e.src.indexOf("`", n)) && r < s;) {
                        for (n = r + 1; 96 === e.src.charCodeAt(n);) n++;
                        if (n > s) break;
                        if (n - r === u) {
                            if (!t) {
                                let t = e.push("code_inline", "code", 0);
                                t.markup = i;
                                let n = e.src.slice(a, r).replace(/\n/g, " ");
                                (n.startsWith(" ") && n.endsWith(" ") && /[^ ]/.test(n) && (n = n.slice(1, -1)),
                                    (t.content = n));
                            }
                            return ((e.pos = n), !0);
                        }
                    }
                }
                return (t || (e.pending += i), (e.pos = a), !0);
            },
        ],
        [
            "strikethrough",
            function (e, t) {
                let r = e.pos,
                    n = e.src.charCodeAt(r);
                if (t || 126 !== n) return !1;
                let s = e.scanDelims(e.pos, !0),
                    a = s.length,
                    i = String.fromCharCode(n);
                if (a < 2) return !1;
                a % 2 && ((e.push("text", "", 0).content = i), a--);
                for (let t = 0; t < a; t += 2)
                    ((e.push("text", "", 0).content = i + i),
                        e.delimiters.push({
                            marker: n,
                            length: 0,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: s.can_open,
                            close: s.can_close,
                        }));
                return ((e.pos += s.length), !0);
            },
        ],
        [
            "emphasis",
            function (e, t) {
                let r = e.pos,
                    n = e.src.charCodeAt(r);
                if (t || (95 !== n && 42 !== n)) return !1;
                let s = e.scanDelims(e.pos, 42 === n);
                for (let t = 0; t < s.length; t++)
                    ((e.push("text", "", 0).content = String.fromCharCode(n)),
                        e.delimiters.push({
                            marker: n,
                            length: s.length,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: s.can_open,
                            close: s.can_close,
                        }));
                return ((e.pos += s.length), !0);
            },
        ],
        [
            "link",
            function (e, t) {
                let r,
                    n,
                    s,
                    a,
                    i = "",
                    u = "",
                    l = e.pos,
                    o = !0;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                let h = e.pos,
                    c = e.posMax,
                    f = e.pos + 1,
                    p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
                if (p < 0) return !1;
                let d = p + 1;
                if (d < c && 40 === e.src.charCodeAt(d)) {
                    for (o = !1, d++; d < c && (ey((r = e.src.charCodeAt(d))) || 10 === r); d++);
                    if (d >= c) return !1;
                    if (((l = d), (s = e.md.helpers.parseLinkDestination(e.src, d, e.posMax)).ok)) {
                        for (
                            i = e.md.normalizeLink(s.str), e.md.validateLink(i) ? (d = s.pos) : (i = ""), l = d;
                            d < c && (ey((r = e.src.charCodeAt(d))) || 10 === r);
                            d++
                        );
                        if (((s = e.md.helpers.parseLinkTitle(e.src, d, e.posMax)), d < c && l !== d && s.ok))
                            for (u = s.str, d = s.pos; d < c && (ey((r = e.src.charCodeAt(d))) || 10 === r); d++);
                    }
                    ((d >= c || 41 !== e.src.charCodeAt(d)) && (o = !0), d++);
                }
                if (o) {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (d < c && 91 === e.src.charCodeAt(d)
                            ? ((l = d + 1),
                              (d = e.md.helpers.parseLinkLabel(e, d)) >= 0 ? (n = e.src.slice(l, d++)) : (d = p + 1))
                            : (d = p + 1),
                        n || (n = e.src.slice(f, p)),
                        (n = eT(n)),
                        !(a = e.env.references[n]))
                    )
                        return ((e.pos = h), !1);
                    ((i = a.href), (u = a.title));
                }
                if (!t) {
                    ((e.pos = f), (e.posMax = p));
                    let t = e.push("link_open", "a", 1),
                        r = [["href", i]];
                    if (((t.attrs = r), u && r.push(["title", u]), n)) {
                        let e = Object.create(null);
                        ((e.label = n), (t.meta = e));
                    }
                    (e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1));
                }
                return ((e.pos = d), (e.posMax = c), !0);
            },
        ],
        [
            "image",
            function (e, t) {
                let r,
                    n,
                    s,
                    a,
                    i,
                    u,
                    l,
                    o,
                    h = "",
                    c = e.pos,
                    f = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos) || 91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                let p = e.pos + 2,
                    d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
                if (d < 0) return !1;
                if ((a = d + 1) < f && 40 === e.src.charCodeAt(a)) {
                    for (a++; a < f && (ey((r = e.src.charCodeAt(a))) || 10 === r); a++);
                    if (a >= f) return !1;
                    for (
                        o = a,
                            (u = e.md.helpers.parseLinkDestination(e.src, a, e.posMax)).ok &&
                                ((h = e.md.normalizeLink(u.str)), e.md.validateLink(h) ? (a = u.pos) : (h = "")),
                            o = a;
                        a < f && (ey((r = e.src.charCodeAt(a))) || 10 === r);
                        a++
                    );
                    if (((u = e.md.helpers.parseLinkTitle(e.src, a, e.posMax)), a < f && o !== a && u.ok))
                        for (l = u.str, a = u.pos; a < f && (ey((r = e.src.charCodeAt(a))) || 10 === r); a++);
                    else l = "";
                    if (a >= f || 41 !== e.src.charCodeAt(a)) return ((e.pos = c), !1);
                    a++;
                } else {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (a < f && 91 === e.src.charCodeAt(a)
                            ? ((o = a + 1),
                              (a = e.md.helpers.parseLinkLabel(e, a)) >= 0 ? (s = e.src.slice(o, a++)) : (a = d + 1))
                            : (a = d + 1),
                        s || (s = e.src.slice(p, d)),
                        (s = eT(s)),
                        !(i = e.env.references[s]))
                    )
                        return ((e.pos = c), !1);
                    ((h = i.href), (l = i.title));
                }
                if (!t) {
                    n = e.src.slice(p, d);
                    let t = [];
                    e.md.inline.parse(n, e.md, e.env, t);
                    let r = e.push("image", "img", 0),
                        a = [
                            ["src", h],
                            ["alt", ""],
                        ];
                    if (((r.attrs = a), (r.children = t), (r.content = n), l && a.push(["title", l]), s)) {
                        let e = Object.create(null);
                        ((e.label = s), (r.meta = e));
                    }
                }
                return ((e.pos = a), (e.posMax = f), !0);
            },
        ],
        [
            "autolink",
            function (e, t) {
                let r = e.pos;
                if (60 !== e.src.charCodeAt(r)) return !1;
                let n = e.pos,
                    s = e.posMax;
                for (;;) {
                    if (++r >= s) return !1;
                    let t = e.src.charCodeAt(r);
                    if (60 === t) return !1;
                    if (62 === t) break;
                }
                let a = e.src.slice(n + 1, r);
                if (td.test(a)) {
                    let r = e.md.normalizeLink(a);
                    if (!e.md.validateLink(r)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", r]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(a)));
                        let n = e.push("link_close", "a", -1);
                        ((n.markup = "autolink"), (n.info = "auto"));
                    }
                    return ((e.pos += a.length + 2), !0);
                }
                if (tp.test(a)) {
                    let r = e.md.normalizeLink(`mailto:${a}`);
                    if (!e.md.validateLink(r)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", r]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(a)));
                        let n = e.push("link_close", "a", -1);
                        ((n.markup = "autolink"), (n.info = "auto"));
                    }
                    return ((e.pos += a.length + 2), !0);
                }
                return !1;
            },
        ],
        [
            "html_inline",
            function (e, t) {
                let r;
                if (!e.md.options.html) return !1;
                let n = e.posMax,
                    s = e.pos;
                if (60 !== e.src.charCodeAt(s) || s + 2 >= n) return !1;
                let a = e.src.charCodeAt(s + 1);
                if (33 !== a && 63 !== a && 47 !== a && (!((r = 32 | a) >= 97) || !(r <= 122))) return !1;
                let i = e.src.slice(s).match(ts);
                if (!i) return !1;
                if (!t) {
                    var u, l;
                    let t = e.push("html_inline", "", 0);
                    ((t.content = i[0]),
                        (u = t.content),
                        /^<a[>\s]/i.test(u) && e.linkLevel++,
                        (l = t.content),
                        /^<\/a\s*>/i.test(l) && e.linkLevel--);
                }
                return ((e.pos += i[0].length), !0);
            },
        ],
        [
            "entity",
            function (e, t) {
                let r = e.pos,
                    n = e.posMax;
                if (38 !== e.src.charCodeAt(r) || r + 1 >= n) return !1;
                if (35 === e.src.charCodeAt(r + 1)) {
                    let n = e.src.slice(r).match(tg);
                    if (n) {
                        if (!t) {
                            let t = "x" === n[1][0].toLowerCase() ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10),
                                r = e.push("text_special", "", 0);
                            ((r.content = eg(t) ? e_(t) : e_(65533)), (r.markup = n[0]), (r.info = "entity"));
                        }
                        return ((e.pos += n[0].length), !0);
                    }
                } else {
                    let n = e.src.slice(r).match(t_);
                    if (n) {
                        let r = X(n[0]);
                        if (r !== n[0]) {
                            if (!t) {
                                let t = e.push("text_special", "", 0);
                                ((t.content = r), (t.markup = n[0]), (t.info = "entity"));
                            }
                            return ((e.pos += n[0].length), !0);
                        }
                    }
                }
                return !1;
            },
        ],
    ],
    tm = [
        [
            "balance_pairs",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tR(e.delimiters);
                for (let e = 0; e < r; e++) {
                    var n;
                    let r = null == (n = t[e]) ? void 0 : n.delimiters;
                    r && tR(r);
                }
            },
        ],
        [
            "strikethrough",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tc(e, e.delimiters);
                for (let s = 0; s < r; s++) {
                    var n;
                    let r = null == (n = t[s]) ? void 0 : n.delimiters;
                    r && tc(e, r);
                }
            },
        ],
        [
            "emphasis",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tf(e, e.delimiters);
                for (let s = 0; s < r; s++) {
                    var n;
                    let r = null == (n = t[s]) ? void 0 : n.delimiters;
                    r && tf(e, r);
                }
            },
        ],
        [
            "fragments_join",
            function (e) {
                let t,
                    r,
                    n = 0,
                    s = e.tokens,
                    a = e.tokens.length;
                for (t = r = 0; t < a; t++)
                    (s[t].nesting < 0 && n--,
                        (s[t].level = n),
                        s[t].nesting > 0 && n++,
                        "text" === s[t].type && t + 1 < a && "text" === s[t + 1].type
                            ? (s[t + 1].content = s[t].content + s[t + 1].content)
                            : (t !== r && (s[r] = s[t]), r++));
                t !== r && (s.length = r);
            },
        ],
    ],
    tb = class {
        constructor() {
            (eU(this, "ruler", new eX()), eU(this, "ruler2", new eX()), eU(this, "State", to));
            for (let e = 0; e < tk.length; e++) this.ruler.push(tk[e][0], tk[e][1]);
            for (let e = 0; e < tm.length; e++) this.ruler2.push(tm[e][0], tm[e][1]);
        }
        skipToken(e) {
            let t = e.pos,
                r = this.ruler.getRules(""),
                n = r.length,
                s = e.md.options.maxNesting,
                a = e.cache;
            if (void 0 !== a[t]) {
                e.pos = a[t];
                return;
            }
            let i = !1;
            if (e.level < s) {
                for (let s = 0; s < n; s++)
                    if ((e.level++, (i = r[s](e, !0)), e.level--, i)) {
                        if (t >= e.pos) throw Error("inline rule didn't increment state.pos");
                        break;
                    }
            } else e.pos = e.posMax;
            (!i && e.pos++, (a[t] = e.pos));
        }
        tokenize(e) {
            let t = this.ruler.getRules(""),
                r = t.length,
                n = e.posMax,
                s = e.md.options.maxNesting;
            for (; e.pos < n;) {
                let a = e.pos,
                    i = !1;
                if (e.level < s) {
                    for (let n = 0; n < r; n++)
                        if ((i = t[n](e, !1))) {
                            if (a >= e.pos) throw Error("inline rule didn't increment state.pos");
                            break;
                        }
                }
                if (i) {
                    if (e.pos >= n) break;
                    continue;
                }
                e.pending += e.src[e.pos++];
            }
            e.pending && e.pushPending();
        }
        parse(e, t, r, n) {
            let s = new this.State(e, t, r, n);
            this.tokenize(s);
            let a = this.ruler2.getRules(""),
                i = a.length;
            for (let e = 0; e < i; e++) a[e](s);
        }
    },
    tD = {
        default: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 100,
            },
            components: { core: {}, block: {}, inline: {} },
        },
        zero: {
            options: {
                html: !1,
                xhtmlOut: !1,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 20,
            },
            components: {
                core: { rules: ["normalize", "block", "strip_references", "inline", "text_join"] },
                block: { rules: ["paragraph"] },
                inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] },
            },
        },
        commonmark: {
            options: {
                html: !0,
                xhtmlOut: !0,
                breaks: !1,
                langPrefix: "language-",
                linkify: !1,
                typographer: !1,
                quotes: "\u201C\u201D\u2018\u2019",
                highlight: null,
                maxNesting: 20,
            },
            components: {
                core: { rules: ["normalize", "block", "strip_references", "inline", "text_join"] },
                block: {
                    rules: [
                        "blockquote",
                        "code",
                        "fence",
                        "heading",
                        "hr",
                        "html_block",
                        "lheading",
                        "list",
                        "reference",
                        "paragraph",
                    ],
                },
                inline: {
                    rules: [
                        "autolink",
                        "backticks",
                        "emphasis",
                        "entity",
                        "escape",
                        "html_inline",
                        "image",
                        "link",
                        "newline",
                        "text",
                    ],
                    rules2: ["balance_pairs", "emphasis", "fragments_join"],
                },
            },
        },
    },
    tC = /^(vbscript|javascript|file|data):/,
    tv = /^data:image\/(gif|png|jpeg|webp);/,
    tA = ["http:", "https:", "mailto:"],
    tx = class {
        validateLink(e) {
            let t = e.trim().toLowerCase();
            return !tC.test(t) || tv.test(t);
        }
        normalizeLink(e) {
            let t = z(e, !0);
            if (t.hostname && (!t.protocol || tA.indexOf(t.protocol) >= 0))
                try {
                    var r;
                    ((r = t.hostname),
                        (t.hostname = ea(r, function (e) {
                            return Q.test(e) ? "xn--" + eo(e) : e;
                        })));
                } catch (e) {}
            return (
                t.auth && (t.auth = m(t.auth)),
                t.hostname && (t.hostname = m(t.hostname)),
                t.pathname && (t.pathname = m(t.pathname)),
                t.search && (t.search = m(t.search)),
                t.hash && (t.hash = m(t.hash)),
                b(t)
            );
        }
        normalizeLinkText(e) {
            let t = z(e, !0);
            if (t.hostname && (!t.protocol || tA.indexOf(t.protocol) >= 0))
                try {
                    var r;
                    ((r = t.hostname),
                        (t.hostname = ea(r, function (e) {
                            return V.test(e) ? el(e.slice(4).toLowerCase()) : e;
                        })));
                } catch (e) {}
            return _(b(t), _.defaultChars + "%");
        }
        constructor(...e) {
            (eU(this, "inline", new tb()),
                eU(this, "block", new tl()),
                eU(this, "core", new e9()),
                eU(this, "renderer", new eP()),
                eU(this, "linkify", new H()),
                eU(this, "utils", ef),
                eU(this, "helpers", Object.assign({}, eZ)));
            const [t, r] = e;
            "string" == typeof t
                ? (this.configure(t), r && this.set(r))
                : (this.configure("default"), this.set(t || {}));
        }
        set(e) {
            return (Object.assign(this.options, e), this);
        }
        configure(e) {
            let t;
            if ("string" == typeof e) {
                if (!(t = tD[e])) throw Error(`Wrong 'markdown-it' preset "${e}", check name`);
            } else t = e;
            if (!t) throw Error("Wrong `markdown-it` preset, can't be empty");
            t.options && (this.options = { ...t.options });
            let r = t.components;
            if (r) {
                var n;
                ["core", "block", "inline"].forEach((e) => {
                    var t;
                    let n = null == (t = r[e]) ? void 0 : t.rules;
                    n && this[e].ruler.enableOnly(n);
                });
                let e = null == (n = r.inline) ? void 0 : n.rules2;
                e && this.inline.ruler2.enableOnly(e);
            }
            return this;
        }
        enable(e, t = !1) {
            let r = [];
            (Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach((t) => {
                    r = r.concat(this[t].ruler.enable(e, !0));
                }),
                (r = r.concat(this.inline.ruler2.enable(e, !0))));
            let n = e.filter((e) => 0 > r.indexOf(e));
            if (n.length && !t) throw Error(`MarkdownIt. Failed to enable unknown rule(s): ${n}`);
            return this;
        }
        disable(e, t = !1) {
            let r = [];
            (Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach((t) => {
                    r = r.concat(this[t].ruler.disable(e, !0));
                }),
                (r = r.concat(this.inline.ruler2.disable(e, !0))));
            let n = e.filter((e) => 0 > r.indexOf(e));
            if (n.length && !t) throw Error(`MarkdownIt. Failed to disable unknown rule(s): ${n}`);
            return this;
        }
        use(e, ...t) {
            return (e.apply(e, [this, ...t]), this);
        }
        parse(e, t) {
            if ("string" != typeof e) throw Error("Input data should be a String");
            let r = new this.core.State(e, this, t);
            return (this.core.process(r), r.tokens);
        }
        render(e, t = {}) {
            return this.renderer.render(this.parse(e, t), this.options, t);
        }
        parseInline(e, t) {
            let r = new this.core.State(e, this, t);
            return ((r.inlineMode = !0), this.core.process(r), r.tokens);
        }
        renderInline(e, t = {}) {
            return this.renderer.render(this.parseInline(e, t), this.options, t);
        }
    };
(eU(tx, "Token", eN),
    eU(tx, "Ruler", eX),
    eU(tx, "Renderer", eP),
    eU(tx, "ParserCore", e9),
    eU(tx, "StateCore", eO),
    eU(tx, "ParserBlock", tl),
    eU(tx, "StateBlock", e4),
    eU(tx, "ParserInline", tb),
    eU(tx, "StateInline", to));
var tw = ep(tx);
