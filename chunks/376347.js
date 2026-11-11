let a;
r.d(t, { A: () => tD });
var n,
    i,
    s,
    l,
    o,
    h,
    u,
    c,
    m = {};
(r.r(m), r.d(m, { decode: () => g, encode: () => x, format: () => y, parse: () => T }));
var p = {};
(r.r(p), r.d(p, { Any: () => E, Cc: () => F, Cf: () => B, P: () => q, S: () => I, Z: () => j }));
let d = {};
function f(e, t) {
    "string" != typeof t && (t = f.defaultChars);
    let r = (function (e) {
        let t = d[e];
        if (t) return t;
        t = d[e] = [];
        for (let e = 0; e < 128; e++) {
            let r = String.fromCharCode(e);
            t.push(r);
        }
        for (let r = 0; r < e.length; r++) {
            let a = e.charCodeAt(r);
            t[a] = "%" + ("0" + a.toString(16).toUpperCase()).slice(-2);
        }
        return t;
    })(t);
    return e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
        let t = "";
        for (let a = 0, n = e.length; a < n; a += 3) {
            let i = parseInt(e.slice(a + 1, a + 3), 16);
            if (i < 128) {
                t += r[i];
                continue;
            }
            if ((224 & i) == 192 && a + 3 < n) {
                let r = parseInt(e.slice(a + 4, a + 6), 16);
                if ((192 & r) == 128) {
                    let e = ((i << 6) & 1984) | (63 & r);
                    (e < 128 ? (t += "\uFFFD\uFFFD") : (t += String.fromCharCode(e)), (a += 3));
                    continue;
                }
            }
            if ((240 & i) == 224 && a + 6 < n) {
                let r = parseInt(e.slice(a + 4, a + 6), 16),
                    n = parseInt(e.slice(a + 7, a + 9), 16);
                if ((192 & r) == 128 && (192 & n) == 128) {
                    let e = ((i << 12) & 61440) | ((r << 6) & 4032) | (63 & n);
                    (e < 2048 || (e >= 55296 && e <= 57343)
                        ? (t += "\uFFFD\uFFFD\uFFFD")
                        : (t += String.fromCharCode(e)),
                        (a += 6));
                    continue;
                }
            }
            if ((248 & i) == 240 && a + 9 < n) {
                let r = parseInt(e.slice(a + 4, a + 6), 16),
                    n = parseInt(e.slice(a + 7, a + 9), 16),
                    s = parseInt(e.slice(a + 10, a + 12), 16);
                if ((192 & r) == 128 && (192 & n) == 128 && (192 & s) == 128) {
                    let e = ((i << 18) & 1835008) | ((r << 12) & 258048) | ((n << 6) & 4032) | (63 & s);
                    (e < 65536 || e > 1114111
                        ? (t += "\uFFFD\uFFFD\uFFFD\uFFFD")
                        : ((e -= 65536), (t += String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))),
                        (a += 9));
                    continue;
                }
            }
            t += "\uFFFD";
        }
        return t;
    });
}
((f.defaultChars = ";/?:@&=+$,#"), (f.componentChars = ""));
let g = f,
    b = {};
function v(e, t, r) {
    ("string" != typeof t && ((r = t), (t = v.defaultChars)), void 0 === r && (r = !0));
    let a = (function (e) {
            let t = b[e];
            if (t) return t;
            t = b[e] = [];
            for (let e = 0; e < 128; e++) {
                let r = String.fromCharCode(e);
                /^[0-9a-z]$/i.test(r) ? t.push(r) : t.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
            }
            for (let r = 0; r < e.length; r++) t[e.charCodeAt(r)] = e[r];
            return t;
        })(t),
        n = "";
    for (let t = 0, i = e.length; t < i; t++) {
        let s = e.charCodeAt(t);
        if (r && 37 === s && t + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(t + 1, t + 3))) {
            ((n += e.slice(t, t + 3)), (t += 2));
            continue;
        }
        if (s < 128) {
            n += a[s];
            continue;
        }
        if (s >= 55296 && s <= 57343) {
            if (s >= 55296 && s <= 56319 && t + 1 < i) {
                let r = e.charCodeAt(t + 1);
                if (r >= 56320 && r <= 57343) {
                    ((n += encodeURIComponent(e[t] + e[t + 1])), t++);
                    continue;
                }
            }
            n += "%EF%BF%BD";
            continue;
        }
        n += encodeURIComponent(e[t]);
    }
    return n;
}
((v.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (v.componentChars = "-_.!~*'()"));
let x = v;
function y(e) {
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
function w() {
    ((this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.pathname = null));
}
let k = /^([a-z0-9.+-]+:)/i,
    A = /:[0-9]*$/,
    C = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    R = ["%", "/", "?", ";", "#"].concat(
        ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
    ),
    _ = ["/", "?", "#"],
    D = /^[+a-z0-9A-Z_-]{0,63}$/,
    z = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    S = { javascript: !0, "javascript:": !0 },
    M = {
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
((w.prototype.parse = function (e, t) {
    let r,
        a,
        n,
        i = e;
    if (((i = i.trim()), !t && 1 === e.split("#").length)) {
        let e = C.exec(i);
        if (e) return ((this.pathname = e[1]), e[2] && (this.search = e[2]), this);
    }
    let s = k.exec(i);
    if (
        (s && ((r = (s = s[0]).toLowerCase()), (this.protocol = s), (i = i.substr(s.length))),
        (t || s || i.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (n = "//" === i.substr(0, 2)) &&
            !(s && S[s]) &&
            ((i = i.substr(2)), (this.slashes = !0)),
        !S[s] && (n || (s && !M[s])))
    ) {
        let e,
            t,
            r = -1;
        for (let e = 0; e < _.length; e++) -1 !== (a = i.indexOf(_[e])) && (-1 === r || a < r) && (r = a);
        (-1 !== (t = -1 === r ? i.lastIndexOf("@") : i.lastIndexOf("@", r)) &&
            ((e = i.slice(0, t)), (i = i.slice(t + 1)), (this.auth = e)),
            (r = -1));
        for (let e = 0; e < R.length; e++) -1 !== (a = i.indexOf(R[e])) && (-1 === r || a < r) && (r = a);
        (-1 === r && (r = i.length), ":" === i[r - 1] && r--);
        let n = i.slice(0, r);
        ((i = i.slice(r)), this.parseHost(n), (this.hostname = this.hostname || ""));
        let s = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!s) {
            let e = this.hostname.split(/\./);
            for (let t = 0, r = e.length; t < r; t++) {
                let r = e[t];
                if (r && !r.match(D)) {
                    let a = "";
                    for (let e = 0, t = r.length; e < t; e++) r.charCodeAt(e) > 127 ? (a += "x") : (a += r[e]);
                    if (!a.match(D)) {
                        let a = e.slice(0, t),
                            n = e.slice(t + 1),
                            s = r.match(z);
                        (s && (a.push(s[1]), n.unshift(s[2])),
                            n.length && (i = n.join(".") + i),
                            (this.hostname = a.join(".")));
                        break;
                    }
                }
            }
        }
        (this.hostname.length > 255 && (this.hostname = ""),
            s && (this.hostname = this.hostname.substr(1, this.hostname.length - 2)));
    }
    let l = i.indexOf("#");
    -1 !== l && ((this.hash = i.substr(l)), (i = i.slice(0, l)));
    let o = i.indexOf("?");
    return (
        -1 !== o && ((this.search = i.substr(o)), (i = i.slice(0, o))),
        i && (this.pathname = i),
        M[r] && this.hostname && !this.pathname && (this.pathname = ""),
        this
    );
}),
    (w.prototype.parseHost = function (e) {
        let t = A.exec(e);
        (t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e));
    }));
let T = function (e, t) {
        if (e && e instanceof w) return e;
        let r = new w();
        return (r.parse(e, t), r);
    },
    E =
        /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    F = /[\0-\x1F\x7F-\x9F]/,
    B =
        /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
    q =
        /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B60\u1B7D-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDEAD\uDED0\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]/,
    I =
        /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C1\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD803[\uDD8E\uDD8F\uDED1-\uDED8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDC00-\uDCEF\uDCFA-\uDCFC\uDD00-\uDEB3\uDEBA-\uDED0\uDEE0-\uDEF0\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED8\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDCD0-\uDCD8\uDD00-\uDE57\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF\uDFFA]/,
    j = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    L = [
        8364, 0, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 0, 381, 0, 0, 8216, 8217, 8220, 8221,
        8226, 8211, 8212, 732, 8482, 353, 8250, 339, 0, 382, 376,
    ],
    N = (() => {
        let e = new Uint8Array(127),
            t = 0;
        for (let r = 33; r <= 126; r++) 34 !== r && 36 !== r && 92 !== r && (e[r] = t++);
        return e;
    })(),
    O = (function (e) {
        let t = e.length,
            r = 0,
            a = () => {
                let t = N[e.charCodeAt(r++)];
                return t < 61 ? t : 91 * t - 5490 + N[e.charCodeAt(r++)];
            },
            n = new Int32Array(2738);
        (n.fill(-1, 49, 61), n.fill(-1, 2725, 2738));
        let i = new Int32Array(2738),
            s = new Int32Array(2738);
        function l(t, a) {
            let i = 0,
                s = a,
                l = a + t;
            for (; s < l;) {
                let t = N[e.charCodeAt(r++)];
                if (t < 89) ((i += t), (n[s++] = i));
                else if (89 === t) {
                    let t = N[e.charCodeAt(r++)] + 2;
                    for (; t--;) n[s++] = ++i;
                } else {
                    let t = N[e.charCodeAt(r++)];
                    ((i +=
                        89 +
                        (t < 90
                            ? 91 * t + N[e.charCodeAt(r++)]
                            : 8281 * N[e.charCodeAt(r++)] + 91 * N[e.charCodeAt(r++)] + N[e.charCodeAt(r++)])),
                        (n[s++] = i));
                }
            }
        }
        (l(49, 0), l(2664, 61));
        let o = new Int32Array(50),
            h = 0,
            u = 0;
        function c(e, t) {
            for (let r = 0; r < e; r++) {
                let e = t + r,
                    l = a(),
                    c = a();
                ((o[2 * u] = l), (o[2 * u + 1] = c), (u += 1), (i[e] = h));
                let m = (n[l] < 0 ? s[l] : 1) + (n[c] < 0 ? s[c] : 1);
                ((s[e] = m), (h += m));
            }
        }
        (c(13, 2725), c(12, 49));
        let m = new Uint16Array(h),
            p = 0;
        for (let e = 0; e < u; e++)
            for (let t = 0; t < 2; t++) {
                let r = o[2 * e + t],
                    a = n[r];
                if (a < 0) {
                    let e = i[r],
                        t = e + s[r];
                    for (; e < t;) m[p++] = m[e++];
                } else m[p++] = a;
            }
        let d = new Uint16Array(13494),
            f = 0;
        for (; r < t;) {
            let t = N[e.charCodeAt(r++)];
            t >= 61 && (t = 91 * t - 5490 + N[e.charCodeAt(r++)]);
            let a = n[t];
            if (a < 0) {
                let e = i[t],
                    r = e + s[t];
                for (; e < r;) d[f++] = m[e++];
            } else d[f++] = a;
        }
        return d;
    })(
        "!}.&u%}'&}*'~!6*)%&,~!J~!J~%L~y<~!R,~~%Lu~~#GD~~#|)1#%}^%}2%+#.##%##%}&%##%'#%##&%#%#'%#&#%#&#'#%%#&#%##%#)%''%&%#%#'%#%%#%%}%%%#%#&(23#%%#&-%0%('1#(##%#'##+%'*.:1}#%#6-+(%'%%#%%%}#L'2351&('%}&/N'(0(/*-%(%%}#'+&T%7.2}#&%&#%#36/5##%&%%#&#%%#))2%%##%&&'0~!#*+&'%1~!%).'3q?&%'1~!.##%6(~!+%%%(Gw'rT~!E#<nA%#jZ~!H%(~!42##~!*31&~!G%U~#)5~#`3~!J~!Z~%]~%Y~%C~!q~!u~#kz~%#~!6'~!D~!U~!?~#T~!c%~!G#'~%7|~!G~!J~!G&~#pb~(Df}#%}*&}#%##%##%##&#-}&'#'&%#.++}%mI,#,@&(}*%}*'%&##&#%##%}&0}#.},U},%}+%}&%}#%##&}B%(}(%}+%)})%##%#&}&%##%&}<%}>%#%&}*%}(%}9%}/%})%}*%}*%}?&}&%}3%}&*#%})%#%#)}#&#-#+*%E%%'%'#%}#*V##&##I}#&&##%&%#&&Qf%%))w/0+&%#(#.%-''''++++7}>%4'',##1,#%#&%##&#'##&#*#9)%&%}#*}%,#+P(%A&%#'&##wSD',9E00#y#@}(+}&%&>~!#~!X}#*}(&&}(&}(,%}%&#+&}#&}I%#%}%)#(},'%#*}4%%#%}(''}#/##(##),%-##%%)#&}(.}&%#&}%%}*&#%},&&}&%}#%*'#%})%}D&}&%}-&}6&#&}-,%}#%})-(~+`~,=?~I9'9%~!,#%})%})%}@%}?%}(~!?~#<~#pP~#BG~#=1#%K+~#?#~%;)~#A~#mF1~#A'~'X%'~#lR~#N~'N~#r~#m#-~#i'?%#'%~#B%##%,%#~#_%#0%~#]732~,w~2+#:&#%&'0%&>%}#>##F+)#%&&#(+_}4&}-%}(&}@&}O7Fdf0@+/v4}&WU##&/0#&'('B#%}.%}'+#%}#%%&#&%#%##+#&#)#6#'#.},%}c%},%#%##%&#&%#&~#>'*-.%##%##%}#%%}%'~#)D1}#%*&~#_%%'(~#S2%'.}#~#=##*'*-%}&'%'##&&~'E%.#&~#M4}%%##&'%#~#O1##%&#'+~#<B%##%%'%+~#;#@%}#&%#&&%#(~#H1}'%'##&&~#?A}&'~#D#%32}'&&&&~#[}'(#%}'~#;C})&}%%#%~#=&%,3}%'(#%%~#^'#&&)#%'~#Y%-~#d-%'~#^%%&#&&&}#~#b~2t*&'~&(~&@~0%~e~3}%*''0})&}+~!9##-}#%-hD*)1fC#%/&/fB#40~!+#)*4~!+~!K'&:~!/*7~!.#~!H~!L':~%x&~!H#~!*~%1~!I#~!+A~#p'~!F~~#-#~,,(~.Z~!V~%;'B'mq-W~!N~%I%#&&#&}#%},%%}'%}+X#%}#&}(%}'%}<%}#%}%%'}'%}:~![)9@~%>~#UA%-%##&~!C%~!-.9:~!1~!-^2/:a~!y,D*J#-5)/4~%23,~#G~!L1~!0X3`~!2+~!!0-~&E~!W~!o,>Y&]~%cZx_&~#O*9#A#'#+I'%#)~!0B*-5A+-((F&*M#)(-7-5+'-3a5Vi~!Y~!?+[)%3),ERHm~!+:D,VG.+)?fB%%*(%)'(#&80%1'8`K8?`+'Z#&O&'H5#*9)A%%5&3))0%39+.*7#()&&*=4@**L)<'_&*+..;(#*+)./&0#3)%')-8(4ixD(&.}%,('aI:,)%,k2231T)I'#/-W7,/'Q#.'Y24+h')37</31&83##&0#),H(?'&?/1##%#&&#%''-%&&&#(&''&#.-'%#%%(,')*'&#&#'##%(%(#%('#&##%%%%('%#%#%%#%#&%##h>w+v<ayvyvcg.uuhKr}g/v|g>u9i[~>g5uI~=RvdwEg;v/g;uk!!TTSx]@RT!U!#!@VBRUU!'UTe-d0c`e&gSdicedFcrdTaqb.kYcAohdYd@a3e+d}dMdtd.aJ#bqcK`dle/e.e'dwdPdodddjbEb}ogd^ofdpduc6j?l%d{drdqc)d7bacOdQ%T#Y)X.sR[yH>6Vyv3[xwLu>vo'!*.[yBacahoj>6Rew3[xqdZa#!a&#^(X-[yG>6Vyu3[xvg3sEr|g.u/Ri9db0T#^(Xa)!-[y;>6Vylg4wKs{JwNZt3@3r=c4Z([xlg;wKt!cpq's@v7A'*a(a+!-a#[y<3Dt?3Dt'>6Vym3[xmg9rxsNJwLZt4~?r?db1T#`-!(Xa,!0[yS>6Vz%NuQs.g4wKtnJwNZtS@3r>c4Z([y%g;wKtrdga8!a(!#&T*Y-Xa#!a0<or[yc3Dtq>6Vz43[y3JwNZtf@3s!Ju}!%Dti:pm3c_%X#tjB5pkd6q!r]u?voC'*-a.a2!0a&a+[yI3DtI3Ds~3DtH>6Vyw3[xx;:s#~<5pKJwNZtE@3r~d`a)!a2T#a.(!+U.X1[yT3Dt`3Dtv>6Vz&3[y&g9rxwzcxstPu.<rAJwLZtT~?r@dZa%!a.&^*Za(/Reu[ya>6Vz23[y1g3sEr}wkg{NuQRg{ci(U#5@b`~,cg#U(2WnH5wugcRh7dX#T(Y,a'Ta!!a,[yZ<]mj>6Vz,3[y+Pv#5ReZKu+=,%!H}7ABwkaS?Rh:BcW(X#<]mrj:ubv/ARekdg%!(!a.*Ta(Y.X1!#sP>Rl*Dt6[y>>6Vyo3Wf*jOvuumvuRgRJuq*!:9<B@bX~3jVv&v@s@5Re[d/rQt{uAvo&a&a*)a2!,0Wf!3Dt0=Bs'>6Re}3[xy~<5s%JwJZt1~Gs)c;&!#2sJkNuXvzq7rxu,Re8dka4!a8(aEZ+a@Y.X1Xa)[yd=Bs(3DtP>6Vz53[y4cX#X&Re:avRe9~<5s&JwJZtQ~Gs*i^rzvdRg+Jv{%!2sbB@bX}kdga,!Za?&^*T1/!a'Dt+[y6>6Vyf3Wf%g/u;s4hGu6?Rh-JvZ,!c%#&RoX54Rivj7uyvf8RgTKvZB%*!2sGh<vu5Rgq<=C::9bb~#dZ#T&Ta6Y.X*Dt>[y93Wf)coZ(T,6VyifluvRgC@95@B@bX~/hFu34cC#T,k/unq8w8Q5RkUklwQuzunq8w8Q5Rk8d/rJu?v8w9)-&!a0a;a&aIWejg3sEr/h1s<DtDJvyZqY5aws3Jvy!&Wei~Hr1:au5@Bag>23E~5c:Z&bX};kKv?w&unuVu5Rjc;>bs)#~@:Rh.=ay<a]C;b`}Vd6s/t{uAvoaxa()!a,a7%-a#a2Dt,[yF2Wo[>6Vyt3[xuNuPRi&NuPwpi#RoWh?vf8Ri%Jv]!%Ri:KvxD!.'2WeAjZu`q9rxu,Re7woeAg-unLq(qA_/*2Wg_g3u5q^9:4E}/jTrxrzv=Wkkd~0UX#^^Xa-a1a5T&a=U1a'*aEa]!a*aPaA-adok[y54Rn>;:p3~Dp5g9rpsFNvZqjg3uJp4~<5p0Pw;5qlJwNZt*@3p1Pw:5p/Ou!5p2JvG'!6Vye=<qnJvh_[xhg3v,Rh3kOwOw-sDuev/Re^dha[a%!%!a+#Ta7)-5TaCaO!aka!a)sf[yb2>Rl!9ARiq5E}Qg=ucRkBE|oJrJ_@Wk~@Wk{JrJ_@Wk|@WkyJrJ_@Wk}@WkzJvO_[y2g-vMRmiKuYC!)&>Ri;>Ri<@3RkNc](X#@9Rk=g5vuRmhKvDB!+'=]meg3u4Rmgd)#Y'Vz3CARmfd`a+!%T'!+#Ta1Ta6TaM-sTDt9[yA9sYd'%Y#s[[xpj:ueunaXRgEjRq,v-vuqdd2'`#6Rev<32@5>:2<E}5xIo9a*X#Y(;5RePJvD_g>vyRgNj8w)v8<wggs:RgXiZt|vjx,hSq3ah!-(~@:Ro/Ou!5RhWj^v(pyw8unRhUdx-UY#^Ua.a3a70!)%UX1TaDa)'omRiRRhE[y:3Dsz=Br,>6Vyj3[xkg6ruwjcqsrPw;5r*Ku]D'Zt-@3r(~?r.i[vwv]dU1a--U#`a4(g/vsRhPOu!5RhLj:rmu9Wo!~@:wdh@g/vsRiTjXuvvNr}:RhBj^v(pyw8unRn]dz1UYa'a+^Y(!aETZalaRY.Ta?a4[yDJw1!#qLsW>6Vyrfzq-pLflpwRe|Js>%!Dt@3Dt&Jvy_[xs~HrnjMuwpsw'RecKu+D#'!t<~Grl~?rjg5u-x,gwp{ah!-(~@:Rg~Ou!5Rh'jXuvvNr}:Rh#cW#X/c;&!#2sLi[v7u7RgpJv)(!iLrxu,Re6j7v@s@5Se[e7d`aW!Za(a`T.a#!a3!&aDa-!9)Dt_=6s+3[x~~DR|h~DS6avhGun5RkZj3w)v-]mkKunB!&*]kb97R|i<ARk<c:Z(6Vy}Juh'!wziMRoS:F|vkLuauJv5vtvQRh1d='T+Y#VyO~DR|jcF#T'7R|g97R|kJv3'!ay<Rj,Jvh&!:ReXcsa6*a+#a#_aIRf9aLRf?c,Z&Rf5Rf7c.Z&Rf;Rf>cQ#%T'p-Rf8Rf=ct#%'(*!,p,Rf4p+Rf6Rf:Rf<d~'Ua%U*^UYa(!a,-!#a4YaTalaEX0a8a<Weo3Dt/3Dsx=Br93Wen~Dr;~<5p<JwNZt2@3p=Pw:5p;Ou!5r3c7&!#:p>3Ds}KvGB)_6Vyk2sM=<r7x'eovA(!hFu1ARf}cV#X&@r5j6rvwQa^Rf3c=Za'wkghJv__g;unRggA53B9=b^}%j6uduo5Jq;!(hIv%2Re`Ou4ARe_e%a#^^^Xa&!a*a2!&a6YaP!*ad!#a:aE/5Rn?[y@>6Vyp;:pE~DrY~<5pBJwNZt8@3pCh=rt3rWPw:5pAJup_[xoNuPpF9c!#'45pD5ARn)d8#X'X*3@rU72s]h>v<<sSjJpqvewOJq/(!hNw'5ReBk0s2u3w/w'5ReE5@Jq.!a+JQ!&WeU23d(#Y&RjG5]jBk!u7w&u0udARjEe#+^^^Ub#!a2/a`Z(agT1!a-a;|@TaG!aS[yV=Re~fow'RguNuPRe?bz#'>RoUWeL>:Cbb|?JwPZtVg6ruRmzJvD'!6Vz(g/vmRh~Jvy_[y(g9voRgyx*cy(#2>Ri2B9b]~9kIw9u7rluJu3Rg]dI#a%UY'@=p%CAx.gQZ&RhwwygtRm{x5g_Z'+ABqR9Woa=Bp&dV#^*Xa'!&@o{g4v]Rk;Jv{!%Rk[wkkiA5RkiwwfUB=x,fUuqC&*!>RfTg8v0RfV~ARfSd;rJsAuAv9wR'ae+/aO!a@aza/a#[yQ@Wg!2Wemg3sEr0JvB_g>uvReWg2v+Re=KupB_+[y!2AbY~-~Hr2AJwD!(h<~El>h<~El?Kun@+_:9b`}Kg-v/Ri3g;vtwyk_9]k_d=&T#*U.6qh@Ab`|K9:H|CJv[!&3Dtex'fDwC%!Rf[9WlMd[(^X,!a%Z06Vz!@WgBg=v~Rgvg,QRe@awd,#Y+jTv|Q~EfWj]uNr|~FRfXdy#Y&^Ua%!aO.!(a)Ua;=!a@aKap!a-,a!Ta]a[rSa]p?[y82sK=Bq~;:p:~<5p8Pw:5p7d'#Y'Wf(;RnRi[u4w&RgJJvG'!6Vyh=<r#ijuuv/sIKuYD'ZtG@3p9~Gr&d2#`(g<vtRgFj`u5w&rqpxRf2CJuY!+:wfnTOu!5Rg}jNs1ucv&RfwJvA!&3@q|BDcC#T,k/unq8w8Q5RkTklwQuzunq8w8Q5Rk9dga#!a'!a=#a0!:+Tb*b@aO.a4!aba8aFJv^}?!VyR~Dr<g;u%Rn.~<5p[x'e`wNZtR@3p]Pw:5pZhNvjBp.woe_g5u-r4JwF!%DtO3:ooc7&!#:p^3DtpLuGw(!+%)Dtk6Vz#2sd=<r8d'#Y([y#<x3gJt`w@!)%}MRiowzikRij=]ilxAf3,U(#B2Rf#g0v-Rm[ck{`U#]giKv3>)!&6Ri154s,KuGB_%@r68r:dJ|t`#X(9<E|u2@H|rx3gJu?w'!+'1Nu7Reg4=H~+9<wxgY95Rm]xLggZ-`(X}U2:Ri4h<uOawRmsJv__5@bb{jbV~3dka#a'a]!,#a+U=a>b6a3b%!/aKa/)!arwve^VyJ;:pR~DpTg3uJpS~<5pOPw;5qmPw:5pNOu!5pQJvG'!6Vyx=<qoJvA!{~Jup!%@qk7Rn/KvyD!}''[xz;>wkh'?Rh,x8gyt`w5D!&),(SgyccRgztJ@3pPB5p#d'(Y#<]mmifubw&RgoJvE&!82s^JvF&!8Rf,ADb]~;x=h'rNu]vK!,%'*0RnORh)4Rh*AqQg-vaRnNg;wHwkh'ba~4cE#Ta*x3gctyw@'!+%RnFRnD<4Rn@hFvK5RnCxWg[#`&a0Ua()`1Rm75Rg[c]%X#qi8Rg^NvdRj>BwzgZauwji7Rm6A4wgg]d1#&(*,.0a#Rm;Rm<Rm=Rm>Rm?Rm@RmARmBe%#^^^Xaea?aC/b+(,!a+a#!a/!>a&Ta<aKbD!2wphBRnk[yPw}hE|.=Br-3Dtm>6Vy~g6urRf.x,hPrNav!%'RnqRo%Ro#Nu;q[Pw;5r+JwNZtM@3r)d'#Y'Weh;xChL#`&RnmRnoKu}>%(!Rne~Bs-;2wjcussJv+'!aYSO}6@B<5?ba~8LrNvj!.%*ROwungw~ng~:9;Ri^>wtnig;wHRnixDh@|(UZ.x1h@|)!#:2<H|*xHn]#-UX'3Ro)z=iT}6ARns=Bwsn_wpnaRncw]aR(#UXa&Ua*a/=]iPd'#Y&Ro'WnXf{QRm2hNvj]nZd`'T~&1`{|`#9b]{}c:'!#Wl{>@=be}]?cl{{U#:5Abb}Jds#^YaF!a*b4a#a3aPa>&Tb!bH!*a_!Eau?/a&RjY<]gj>6Vz*;:pe~DrZg,QRj1JwNZtX@wihspcJvZ&!VyX9WmOJu|!|N2WmHJvh&!]ht~Bpbcn&T(!#RmQ<s7Nu;padH#X'`+WmJ@>RmKCARhnKup=!)&Wf+:RhqNuPpf9c!#'45pd5AwghpARn(Ls@w!%,)!RmP@Wfe<E|IJva!&WmNg8vsRmLd`*.`#Y'Xa!axRn*]hrA8Rhug5s@rXg8u!RmMd8#X'X*3@rV72smdI*#UY&RmICARho~GsgxVgd)Ta'U-Y&Xa!T#RnEWnA@Wffg1uDRi0hFvK5RnBxGnG&#`%owp)@wsf+bX}Ze-*1!a*^^^Ua|!#a.aq&Ya2!a>.a6!a:aO`aJDtL[y`@Wg#>6Vz12@wzoYRoZNuPRi!NuPRhzg=ucRi,@=b`{Yg=ucRi-ACJvB!&Sh[ebSh]ebi`wUuFRm4Jw2_[y0JvB!.<Ju(!&SoG}6Shd}6<Ju(!&SoH}6She}6Kur@._g5vHRieJvx!{L2G{Kx6gd'T#?Rh82Wi5cZ#X(g1w)Rm5dW-Y(Ta#!a)!#aYa=wnfE=su2>>bU{0j9udv:<svj8uQv-7RgHdE%#^'sq9sp=>Bb_{TJv`!&g/r|snj6v(us5d,#Y(56H}[978H}]Jw5!&g1rushJvB!+j;v{u5?zDhd}6}bj;v{u5?zDhe}6}ce*#`(^^^a[aea!=!a6a*aoXb1a.!aAbL!b>,b'aL!aV@Wf|2Wlg3[y/JwNZt^@3piPw:5pgJunZou3@rsJva&!Vy_g<v~Rm#JvG'!6Vz0=<r{Ju{%!:pj@WfsiXuJu3Rm:JvZ&!WfA~Bph@c4Z&Dtwax5rubx(#:awRk1@d,#Y&RfjRfid1#,Y(@Wfp2Wlrg5s@ryKu[@!,'=]ig9wlk?Rk>g5u-rqJvy'!@9RkQcH(T#=>Ri~@<wkj(Wj(KuZB*!&<7rw@9RkRcH(T#=>Ri}@<wkj)Wj)dg(Ta2Xa9X#`-!a*CARhg@@=I}d9x;c~#X%so=<sj>2@@=aybb}XjWv0Q~EfEj3vLv;<d,#Y(56H}`978H}_dgaPaFa'a/!#a3Y0a_a;a|!1(a7-[yE3[xt;:pJNvZrrg3uJrvJwNZt=@3pIh=rt3rxPw:5pGOu!5rpJvG'!6Vys=<rz@c4Z&Dt(ax5rtJvZ!&~BpH@wsfNg-vaRlNci*U#=<wei<F}a5@Jq.!a*JQ!%@qZ23d(#Y&RjH5]jCk!u7w&u0udARjFd/prq=tyvpaEa(a:.!a1aZ(@@=I}:9wpd%=<sX55w_h}@@=I{t=ay<aU@@=I}T=ay<2@@=I})?C9:9au@9Cb]}DP~=x-fAZ(2Wl1=ay<aU@@=I}>5@d##Y+jTv|vV~EfFj]uNpn~FRfGdgaK!Z2&!a8a-Tb({E!acTbM*!a(DtY[yYd'%Y#sl[y*hHvh>Re5x2c{Z}.j4uCvcawRiMd+#X+_x&d!},<5RkX;2Hzw@x,gavfB-!{CcF&T#Roe;RodwWbBg5urRgaKvHC*_6Vz+<4opieuew&Rmq@d]&Y)X,T#X0Rh}<BqP=4qS9:ReMg/ujReNJw0!/<Jui%!bd{kawwnemRelAxUa?a3#*.&UX(Ya+a/RhvRnQ<o}9Wmtd-#Y&RgSRmw9;Rmxay=Rmyg-vaRmuxEhSrNu,v-voC!%(aR.a(a7+1Ro1>Ro5CE{A9b]{@;5x#eO{:g;urRi+KrNA!%(Ro3>Ro79;Ri_Ku@>{;&!x%gX|{KunA_+g5QRj/g3u5Rj#g>uERj%wio/xRhS&!,!#^1U}wba{8>>@=be}qC@:D5ba{7Ku+A&!}x?ba}t>>@=be}se(aA^^^Uat!b0#{pa+awUazbGa#aLb9bgaWac'a5TbS=Br!d1#`%scp_Jvl!#rT>Re0JvX&!VyN=H{Fcm#U&:pY=ReaJv2&!]h0=]nUJvG'!6Vy|=<r%JrM_=]h2@Wlud'#)U'Wf'b]{i=]h/Jvh!&~BpWg=v]RnMx+ny#'Nu;pVwjnu=]nwxJnx,T#`&Reqwjnt=]nvieu9vrRjLLuYwP(#+!th@wih5pX~Gr'g5v/Rh4KunA'!-CARnP@wwiN:Rm_9x'cvw>!|l=<saKvAA!0&3@q}>w^e1bp#&Re2Re3BDx7gH#T|f5H|eKuZ>!%(:qNAH{]Jv6!+3B2B9=b^{X<5<B92:E{ZLvhwA(a;a%!igQuyRmad+#Y}m@3Rh5d8#X'X*:AqUAHzmaxwbh<aXRnVcF}RT#Nw&cj#U(BWnug/vsRntdka)(a3+.Zb7aYYan1!bVa@Xa}[y^@b[{G=H{+hFu73Rj&Pv#5ReQcK%T#sig1v{Rj'Ku+D#'!t]~Grm~?rkKuMB!01d5#`'Vy.ta3Dtu~Hroc8#'{^45s85AwZbP&!#Rn!wghxWn#KvEA!)&2RlA2RlBx:h|#(T,=]j09Wobz>x]z/@awRoTd+#Y(az]hFhCrm4d,#Y+jTv|Q~EfMj]uNr|~FRfOdCa!Xa9_X#@<plJvf!%b`{(9;Rgwc;.!#2x7cw#T|UDb]|T5Ju={(!=@E{&Jv)&!Ab`{'awJvf!~*>>@=be{#KuY>!+&4Ezyi[ugv&RjIdea+T)#UXa&T-T&a!Rh9auRmW=]kLg5vuRn+g3u4Rn-Ow6ARn,hHus5xNk?#UX(U~)/g8v0RkD~AwkkF?Ri.OuNBwkkA?Ri/d|a2`a*^UYa.!aBTZaTa'Xa;!(!2!-a#b2[yC>6Vyq3[xr2Wi?g1rusVh%s?DtF~<5rbJs;%!DtBfswKtCj[uvuSsEu3RgVx3o:u+wN'*Zt;@3rd~Grh~?rfg8w)Lq)qE&-a%!>bI|`jWv0vV~EfCjTv|vV~Ef@j]uNpn~FRfBcK#T']gWNu7x,k7q4ai(0!hHv8<RhmkMu9vrsBuev/RhlCJvB!,g<v{wchh~@:Rhji[vrv{wchi~@:RhkdS&a5UY#Ta!RgPwwiI5BwciI~@:Rh`x'iJvj'!5]iJPu8Bwch]~@:Rhach)U#h3rp]gLh@t|Ax,hTq3ah!-(~@:Ro0Ou!5RhXj^v(pyw8unRhVd|)`,^UYas!a?/a2Z'a^Ta{Tb7Ta(a#!a,Wf&9sZ3DtAadamov=Bqt3[xig8vsRm~>waiL2b`{QJv*_Ouv2qgj<v]v2BqfdR'X*X#Y-@3qr~Gqv~?p6hHv-]glPup5Lq+q?_%*b_{qF{n9b^{rOu4ARhpKvCD!+&~Bqp:5Dbb}nwoiKl&unuTuBv]v+ueunaXRf0=Jvh!0nKufu8v1w&w7q%w&uHrz:Rgnj5w,uxDJq/(!hNw'5ReCk0s2u3w/w'5ReFd>Za&!*UaA=<wkgsRnSJv^!%Refifw3vyRgOKu_B'!,<]gkiiu:w&Rh<=C@a^<B57@2F{[<B5@aW:=3away9A5aW=<B=C@a^<B57@2F{Ie-#`(^^^bCara.b8aza6!/bZ,!adTbnTbOb+aFaS!aAT9@Wf~2Wli3Dtl2@d,#Y&RfnRfmJwJZtN~GqyJva&!VyMg<v~Rm%iXuJu3Rm9Jv[_=]ih9wlkDRkCd1#`(@Wg>2Wls3cH#T(@<Rj*=>Ri|b~'#23s9h<~El.d'#Y&Dtxi^rzvdRl#d*#U%(o|B2s`hJwSaxRmDKv4B&!1:Rmdd5#`'Vx}to~Hq{x'f1v3(!BA5ba|bJv_&!Wfug1v]ReIdO+U/Y#&G}-8wze=Rh{g1v]ReHg/uQRf/by#)ibQwERl/cH#T(@<Rj+=>Ri{cNu+vlax-!(#a0qa9<Rii2;;bU{H;x<i=&X#Rk`<4wwi=C9H~8xAI(Y#<azRi@45wXI<B9;5bb~7dL(X#Xa(+!aL6Vy{g5QqOau:5au2@ay547EzbxOcU(UX-T#Ta#:Cbb|A?wjh/b_|SOw6ARgtihr}u7Rhy<d1#T)X1@@=I|~=ay<2@@=aybb}Sj3vLv;<d,#Y(56H}A978H}@dGpvs@uAu`vcw9*!aFa+ai%(b!aXa8.a?a[ozWey=sU2@G}Nch&U#Rf_WexKu+D#'!t:~Gr`~?r^j]uNr|~FRg*j^psurwJt|RmcKv)@&!)7Rkv~Br[@wxfO:Rl3co#U'6Rezj_q#vIuavjRltwzeyh@vr5JqD0!>aY?C9:9au@9Cb]}9cl#U*5;5<H||jbuus1ucv&Rfvg1v~d/pppzqFr^a--a~!aMat1(hFv;Wiz@@=Izoj5uuv-7Rix~Cw`fk2WlVcZ#X,k)u3vWs@u2]ktg;wEx'fBq(_2Wg/jTv|vV~EfoJv]!15x'hzqG!(P~EfU~CRl_j6v(us5x4i-#T(2WmZ?C2F|d>Kq<aj1!*jTqIsBv=Wl`~Cw`fi2WlWj`v0u*~>RlR=c>Z,k#u3vWs@u2]kr<c1Z+jTqIsBv=Wla~Cw`fm2WlXdmb3!a{(arZa`bkTa%TbQTa-a9+c'!aM!/[yL=Bqug.w'RifhFvyDRj.g>vgwyk^9]k^Jv3_@WfbAARkhJw2_[x|JvB_wkoIRoKwkoJRoLd'(Y#<]gm=<9<H|yd'%_X#skDtb3awwqkgNulRkgdB#^',9:p'hJwSaxRmEBwVb8@4=H|qLu+w50&!)@3qs~?pU>Awwn;;Rn=c:Z'ARn<=<qwKvC@!/&~BqqJv6!&]eVb^z^xRge'/a%+^`#Sge}6<4Rn3=]n0Pw2>Rn8Jw0!&>Rn:>Rn6cY#a7+!a&=<wkaNw~h3z_c5Z{=wjh#=]nLKv^D!&)Vyz=bW|swYb<WetcG#T(2wxa@qVx@gD#Y&b^|V5JwG&!5bb|pg/w&RgD@x=kHs=uAvn!a%%/'+RmSRh694Ro`g-vaRmRhHv-]mlxCcS#`&ba~.5cD#Ta)P~=d,#Y(56H{>978H{Dd_#{2^Y%_+qbbb{6g3sERhsbU{?dfa.,`a(Xa<!aiX#(55RiG54RiHcI#T'WiU3RiVNvdwtfcRlKNvdd,#Y&RlHRlExQgf.1*^T'X#Sgf}6Wn4=]hfPrk>Rn7Jw0!&>Rn5>Rn9Lunw?&a2!,5<oq@@wqfdRlJj5Q~=d,#Y(~ARfcOuN]fdDKw;ay(}i!547E}j?cI#T(@5bV}iCbV}hdv(^^Tb?a40,b##Tbo!a*bR!a<b|a/!aKai!aU[yK=]o^g:v>ReGJwPZtK<7Rh+h<~El,Pv#5ReR@awwxjCg,ulRjDJv6&!]j!z?aQeeg>w=Sh<eeJw;!&axEzOg,Qosc!#*:wkeJ]eJ>x'h-u(!%Ro.w~h.zPdNZ(X,Ya![x{;9ReY;wkgxRiF:x?ap#Y&RmUg<s2Rkod]+UY0TZ'!a&A9sw<=bczLNvuw{gqzNhJwSaxRmCKuLay!#&s_Rf-55b^{uJvZa!!c%#(55Ri654wmiu5RiuawLu,vp!+}^%b_}Y9;wkgxba}o>A9:=b^}zKuh=a''!3awRk3c*'!#aHRk6c+Z&Rk5Rk4Jv)&!awRjSawd9*`#0?C2@EzMj8u<uJ5RmbjQrquJu3x,k>uq@_+=ayb^|W~ARkEOuN]k@7dhzV^X/X&a-#zRzSb`zXcJzTT#2WkVKvDBzW!%FzY9;5bbzWjQrquJu3Jw3%!b`zU=ayb^zQd:#X(T-a!6Vyywxh}=b]{Jg=u1RiAdGp~qHtzv!w(wA+a+a;<!aJaYai'anasb(=azRmV:Cbb{MLq2vb!%')RjuRjrRjtRjqx3jnqCw3!%')Rk(Rk+Rk&Rk)Lq2vb!%')Rj{RjxRjzRjwLq2vb!%')RjsRjpRjfRjex3jcqCw3!%')Rk'Rk*RjkRjl9<CbbzfOu4ARhxLq2vb!%')RjyRjvRjhRjgx=joq*uKvb!%')+-Rk.Rk%Rj~Rk-Rk#Rj}x=jdq*uKvb!%')+-Rk,Rk!Rj|RjmRjjRjidAq&qKs@uAv8Aa.'*-a@a&0!aM@a5[y73Dsy3Ds|3Dt):wxgI2sHJwJZt.~Gqxwsf0ikrzt}Rl0Jvy_[xj~HqzKv_A|D!&WfP8axRoVcf,U#k(v]v+ueunaXRf1Ju}'!g8u#Ri=jQw!sCunLprq>!,')~<5qeGzq9F{W=c##%s5au:5aU3CBE|;d4#X(D!a&6Vygx(b;#(=]ed?C2F{N<capoq2r[a&!aPa9,'Pw;5s:@@=I|,55w_h|@@=IzcP~=x'fCqB_2Wl2>aU@@=I|1OuNBc1Z+jTqIsBv=Wlc~Cw`fl2WlZ~AcTa%!Z+jTqIsBv=Wlb~Cw`fh2WlYk+uNqJsBv=WlSg,u3dca3#UXaMYa)TaB-=cM|7T#<bI}l5@B932:aV2G{BOuNBJq:|M!5Ezt=<B=C@a^<B57@2F{v>cB{/T#=ay<bI{3Jv6!a.6BKq0ah&+!5E}HP~Ef{978BaU@@=Iza<7d#.Y#978BaU@@=IzH~AJq0!(@@=IzG978BaU@@=IzFe,aU*Y&^^^bvJb,b:bFad!a,c2Ta>aL.bo6!a#CbTa'T#Re{2Wlh2@G{yg6t~Ro_NvdRfticuRQRllJv3&!x&c|zs@Jw3!%RflwpfkRlpKuL;%(!Re<@G|C2GzdhIvuBwgjAg-u0RjAKQB%!(GzZ@G|5NuuRl7d='T+Y#Vy[g<v~Rm!==G|>JvA!)@wma=]m1ifuaw&RmnLs@vT'!|/+[y,g:v>ReTJw1!#qX=x!eC{bLu+wT&)ZtZauq_~Graci&U#F|89:r_Lupvq!.)&2RlG8RfaC=x!eF{_h?rpWlmd&'!#X|&]k::xJey#`'T|+<E|&2@H|%dE#(^,g;u.RiEg6vjRiC9xCkA{O|zY#g=ucRmXKs0@!&*@G|m@awRknJuh!,3d(}gY}eJvj!%Rm):Jw3!%Rm+Rm-Ls0w(&!a(a#@b[|6cZ#X'7RkxWgAOu4ARn'dH'U#Y*Vz-Wm'CARm}d]*#a%^a*T'aK!a<9bV{PC=p*Jw4!&SgxcbB5r]idw(wBRmF7xFkt#&`(Rm/Rm8E|!JuY_9:Rl5=wrgr2:bbxd@xXfB(a*#T+!.X0X1Ta/a'T&RlDRfL>RlyARl9b[z[>RfZ:RlL:RfRwlg/ARl;9;RlxKv,A/!%7s69<74=BA5ba{-8Bde#`a<XaKYa1,a'P~=wxfB2bZ}}?C972@@=I}r8@55B9;5bb}G978B2@@=aybb}3j3vLv;<Jw3&!>Rfk=ayb^}4~Ad1#`*@@=aybb{w2@>==<bbz]dx+UY#^UaF!a9!bB'Ya1.!ajXa#%olRhD[y=3Dt#Ov5BrHKuMB%!(Rf^Wep~HrJwkiQjKr|~FRg)Ku+D#'!t5~GrF~?rDdV)UY,Z/_7RkuG{<~BrBg,rlsO:235B@bX}|d?a1!#`(6Vyn5@d##Y+jTv|vV~EfIj]uNpn~FRfH7Lq2vb1!a9-978BaU@@=Iz9978BbU}#~AJq0!(@@=Iz8978BaU@@=Iz7~AJQ|}!978BbU}!JvkaK!AdUa21-U#`a+(g/vsRn~Ou!5RPj:rmu9WhOjXuvvNr}:RhAj^v(pyw8unRn[kPr}p|u7vwv]RiSBd;pppzq@qHQa?(b.!a.a`@.|xa(hFv;Wiyj5uuv-7Riw~Cw`fg2WlU978BbU|wOuNBJqG!(P~EfD~CRlQcZ#X,k)u3vWs@u2]ksg;wEx'f@q1_2Wg.j]uNpn~FRfqJv]!15x'h{qG!(@@=IzK~CRl^j6v(us5x4i,#T(2WmY?C2F{1>Kq<aj1!*jTqIsBv=Wld~Cw`fj2Wl[j`v0u*~>RlT=c>Z,k#u3vWs@u2]kq<c1Z+jTqIsBv=Wle~Cw`fn2Wl]dn1#c(a(b^a2!b/bAT(bj!aDa7bu,a_a{c0!2T0g:v>ReD2@G{42@G{5~DpM~<5rc=Bx6i>{RT#RnI@zCx]y]z:2Jv[!zr5Awyk]9]k]dD(Y+X#6Vz.g=wKtgwhaCwgmTWj2Lu,w%_+/[y-B;b^xeg3u3Rj-2@bX{*KrJ<!+'@Wg(g?QRlC@Jv`!%b[zIwsfII}8JQ_@w|kW|=Jv(%!AqcOuNBJvEzh!bYzjLs@wP#(0!oy@>RkdJwMZtc3Dtd@BcG#T'9bWxg2@2Fznd*#Y+;2x'c}w<zizixNgwa#Z'U+!/!a'!a+w~g~z6wcn{Rn}wcnzRn|5Rh%=]nJg5vuRmvNvdRlvcprJu}w*az*a#!%.a.'Bot9qT]kj@Wg'ay2Gzv@Jv`!%b[zEwsfHI}1;ck#Ux`<Cbbx_Lu+w!a&0*!wko*wwo,So,}6Juqxf!E}PigQuyRm`d3(`#8>Rn%:A5B;bZ~%KvhCa!a2!x>k7#Uxb@b{#xaRk7Jw0!)>wwhlShl}6>wwhmShm}6CJvB!.x'hhvj{!!5Bwkhhbaz}x'hivjz~!5Bwkhibaz|xEhTrNu,v-vpD!a%&/)a3a.,%Ro2t[CE{)@3re9b]{%wjo09:rgc:Z&Ro6=<riifuaw&RmoKrNA!%(Ro4>Ro89;Ri`dSaL'UYzxZb)7Rka3xRhT&!,!#^1U}vbaz{>>@=be}yC@:D5bazzKu+A&!}{?ba}y>>@=be}wxBh[t`u~vJvr!%a!a()a,a0a4RoC=]o;Ju(!%RoGRhdwjh`=]oAg>w#Ro?g5vuRo=NvdRl|Ku]C.!&;RoEJvB!%RoORoMBx'h[v+_?w~h`}~5?w~hd~!xKh]oiptu-utv.vp!#%&a30a@a'a+(a/aOp(o~p!RoDJu(!%RoHRhewjha=]oBNvdRl}g>w#Ro@g5vuRo>c[#X']o<CauRoRAd-#Y':RkpauRoQKu]C.!&;RoFJvB!%RoNRoPBx'h]v+_?w~ha}t5?w~he}ue!/UbhYacXaW^Tc&a;b:a-c/#b&aja1(!cL+!bKbt!bmcRc9aIc?8[yW3Dtt94Rg`Jv}!&SiRMzBhEebShEMNuPRe>x7gL#TzuwjirRipc<Z&>on;>z=h-MSh.Mwqczx'a7vj&!>Re4@=ResJt__NuPRi*NuPRi)j]uNr|~FRfzKrJ>_+@Wfy@Wf]2WocKrJ<!+'@Wg%g/QRl@@Jv`!&awRl<wsfFIzgLu(w*!.*&ShBMwvhIRhI9;RhNx1hK'!#Sn]Mx1hK~0!#:2<H~7cNu+w7D*'1ZtW>Rn1~?rOc:Z&Rn2=<rQ<7wjh&=BSnLMc]#X(6Vz)w[b=a!U#9wzgMc3#&(RgMRitRis<x,gKt`ax!&+SioM=BSilMc3#&(RgKRinRimKurB,!&SiQMzBhDebShDM6BJQ!(P~Efx978B2@@=I}WLrJw!!,a*&@G}O@9wkibRid@@x'fKwC!&SlDMSfLMjUv~Q~EfKKv3@a+!(hFv-]mpx/hYZ(C5RiWz<o/MwkhY?So/M@x,gbvfB*&!SgEM:SoeeehFu3:Rgbda(,^TZa)X/7Sg[eb:2RgI~BrMC@wgkc:wwkcRerx3h(uUvK!&*,SnOM4Sh*MArRg;wHRh(x=h;rJvPwI!a4',a'0@Wg&=BSh/Mg>w=Rh=g3w*wwgGRgGcW(X#;Sg}M2Gzk@Jv`!&awRl=wsfGIz`dKZ*T'Y-:RhR7RhQg5u-p`j6v(us5d,#Y+~Awkia?RicOuNBwkibba}Ld6p~tyu_vbAa'a+!a/'a3aEa8a!>Sh,ebJv{!&Sh@ebSaReb9;SgwebNuPRi(NvdRl)NuPRi'hHu^<Rm^Jvv_@Wl(g;u1Si/ebKu'B&!*Sh?eb@Wl'z@aPeb95Si.ebcpputyvjB)!,&a+0a%ShAMWeK@G}C@WfJ9;RhMwvhH9w{ia}ix,hJvRA1(!zAn[MRhHx1hJ~*!#hFv(BSn[MBJQ!(@@=I~'978B2@@=I}2db.Ua<'X}+T#a0XaG2G}E;wkg|wuh!Rh!x,hZu,@)!&So0MVy)C5RiXACJvB!&5RiY5RiZg8w)cG}*T#2@bU}=KsA>(!a.3wkhZba~(x,h^u(A!&(SoCMRhb5Bz=h[eb?w~hb~6x,h_u(A!&(SoDMRhc5Bz=h]eb?w~hc~6e)aA1T#T,^^^c-bMb&blcPaP(a/!0!bA=b5c@a(!bfbrc#2afwmhARnjwchORnp2Wlf3DtsNvdRl-2@wpa<]m0bx(#:awRk2@Jw3!%RfhwpfgRlnKQB%!(G{V@G|'NuuRl6d='T+Y#VyUg<v~Rl~==G|<Jv+'!aYShC}6@B<5?ba~8@Jw3'!g2QRljhLrpWlOd+#Y'g.w'rIg>w*wgj@g-u0Rj@Lu+wT&)ZtUauq]~GrGci&U#F|39:rELrNvj!.%*RhCwunfw~nf~:9;Ri]>wtnhg;wHRnhx3hDs@v~!/+'@Wfr@9RkSNu&Rlo=@<5GzoKs0@_+@Wl+@awRkmJuh!-3d(}pY#qWJvj!%Rm(:Jw3!%Rm,Rm*de&!1U-U#`)Re;@G|.@9Ri82@wjfvRlq=@<5GzpLvOvr!).&2RlF8Rf`C=x!eE{.Jw3_g2QRlkhLrpWlPde(!#U{s,UXa*Ta'[y'g:v>ReS;x0PZ&RnlRnn~HrKJw1}f!=x!eB|2w]aP(#Xa&a*Ta.Ua2a7=]iOd'#Y&Ro&WnWg;u.RiDg6vjRiBNvdRlzhNvj]nYJuW_2Wm3x)kFze{9d])!a.!,Y01!#&aC!a3RndC=ox~BrC@2b^{pg,rlse7x'ksuq!%Rm.E{xidw(wBRmGx9o+)X#wwo-So-}69:Rl4@xSf@a#XZ'X)X,Ta(/ARl8b[xc>RfY:RlI:RfQwlg.ARl:9;Rlwdn'#^XafaQa1X1TaHTa)@b[{zcZ#X'7RkwWg@Ou4ARn&x)kG#{,g7u/RkGdH'U#Y*Vz'Wm&CARm|bx#(A]gUbUzJj9Q~=d,#Y(56H}l978H{U7d,0#U*2>ABb_xZ978BbU{e~AJQ{g!978BbU{hxMh?ad{oUYZ.x1h?{l!#:2<H{mx3n[t{vl!,&a%3Ro(z=iS}6ARnr=Bwsn^wvn`Rnbd`*T}B0!#^X'BG{c9b]{a>>@=be}F?JvS!&BG{d7BG}(Bde#`a1X,Ya@!a'P~=wxf@2bZ}I56B2@@=aybb}08@55B9;5bb}<j3vLv;<Jw3&!>Rfg=ayb^}&OuNBKuLA!)a!P~=x#fD{f2@>==<bbzl?C972@@=Ix^d6rSu,v7w*C(0a)a6#B+a%!sQ[y?3Dt%3[xn~<5rLOu!5p@Ku+D#'!t7~GrP~?rNKvlaya7'!h+v-5qMg=t|cd,U#5AAaa5Abb{S@52B5@a[@52B5Gx[iXueu;d<#`a(!/549C;ag>23ExY5@Dah89b^~689Jv)!~2b[~1Lv'w(%*!a#bX|aPrmawRe]keu7uhv-q6rxu,q`xTo]/a5aU!bNaDXbi!b-!ao!b<bwA!#5@B932:aV2G|:d-)Y#hJrL>RhG<7@C5<H|_=Cau:5aj5@B932:bJ|ng>vIbs)#?C2F|9jPv0w.vISh-MKvUaz(.!9ABbb|[5;5<H|Eg>unwfh;9:4E|YjQsBt|vjx'hYq3!(?C2F|J:2<BaY?C2F|GOu!5x,g|p{ah!-(?C2F|c9:4E|OjXuvvNr}:Rh&i[w*t|cd+U#jJvsu)vsSn~Mkfrmu9p}u7vwv]So!McW#Xa!ax5@A5aY:5;5<H|>kJv~vYrquJu3x4ib#T)2@SmZM?C2F|Bj:rmu9@xPhI(a*a#U#`a3-5Abb|L~@:RhK9:4E|0@52B5G|#C::aY?C2F|-:2<BaY?C2F|.5Jvk!a)javYrquJu3x4ia#T)2@SmYM?C2F|HAxPhH(!a#U#`a*-5Abb|4~@:RhJ9:4E|R@52B5G|F:2<BaY?C2F|Sc^#Xa2j=Qq5CJvB!-g<v{z;hhM?C2F|Zi[vrv{z;hiM?C2F|XKsA>!a)-g<v{z;h[eb?C2F|]i[vrv{z;h]eb?C2F|^iZu.vix,hZq3ah!.(?C2F|QOu!5ShXM:2<BaY?C2F|P",
    );
(((n = o || (o = {}))[(n.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (n[(n.FLAG13 = 8192)] = "FLAG13"),
    (n[(n.BRANCH_LENGTH = 8064)] = "BRANCH_LENGTH"),
    (n[(n.JUMP_TABLE = 127)] = "JUMP_TABLE"),
    (n[(n.VALUE_MASK = 8191)] = "VALUE_MASK"),
    ((i = h || (h = {}))[(i.AMP = 38)] = "AMP"),
    (i[(i.NUM = 35)] = "NUM"),
    (i[(i.SEMI = 59)] = "SEMI"),
    (i[(i.EQUALS = 61)] = "EQUALS"),
    (i[(i.ZERO = 48)] = "ZERO"),
    (i[(i.NINE = 57)] = "NINE"),
    (i[(i.LOWER_A = 97)] = "LOWER_A"),
    (i[(i.LOWER_X = 120)] = "LOWER_X"));
let H = 0;
function J(e) {
    return (e - h.ZERO) >>> 0 <= 9;
}
function P(e) {
    return ((32 | e) - h.LOWER_A) >>> 0 <= 25;
}
(((s = u || (u = {}))[(s.EntityStart = 0)] = "EntityStart"),
    (s[(s.NumericStart = 1)] = "NumericStart"),
    (s[(s.NumericDecimal = 2)] = "NumericDecimal"),
    (s[(s.NumericHex = 3)] = "NumericHex"),
    (s[(s.NamedEntity = 4)] = "NamedEntity"),
    ((l = c || (c = {}))[(l.Legacy = 0)] = "Legacy"),
    (l[(l.Strict = 1)] = "Strict"),
    (l[(l.Attribute = 2)] = "Attribute"));
function U(e, t, r) {
    return 1 === r
        ? String.fromCharCode(e[t] & o.VALUE_MASK)
        : 2 === r
          ? String.fromCharCode(e[t + 1])
          : String.fromCharCode(e[t + 1], e[t + 2]);
}
function $(e) {
    return (function (e, t, r) {
        let a = e.indexOf("&");
        if (a < 0) return e;
        let n = e.length,
            i = 0,
            s = "",
            l = O[0],
            u = l & o.JUMP_TABLE,
            c = (l & o.BRANCH_LENGTH) >> 7;
        do {
            var m;
            let l,
                p,
                d = a + 1,
                f = e.charCodeAt(d);
            if (f === h.NUM) {
                let r = (function (e, t, r) {
                    let a = t + 1,
                        n = 0,
                        i = a;
                    if (a < r && (32 | e.charCodeAt(a)) === h.LOWER_X)
                        for (a += 1, i = a; a < r;) {
                            let t = e.charCodeAt(a);
                            if (J(t)) n = 16 * n + (t - h.ZERO);
                            else if (((32 | t) - h.LOWER_A) >>> 0 <= 5) n = 16 * n + ((32 | t) - h.LOWER_A + 10);
                            else break;
                            a += 1;
                        }
                    else
                        for (; a < r;) {
                            let t = e.charCodeAt(a) - h.ZERO;
                            if (t >>> 0 > 9) break;
                            ((n = 10 * n + t), (a += 1));
                        }
                    if (a === i) return 0;
                    (a < r && e.charCodeAt(a) === h.SEMI && (a += 1), n > 1114111 && (n = 1114112));
                    let s = a - t;
                    return (s >= 2047 && ((H = s), (s = 2047)), (s << 21) | n);
                })(e, d, n);
                ((l = (function (e) {
                    let t = e >>> 21;
                    return 2047 === t ? H : t;
                })(r)),
                    t && l > 0 && e.charCodeAt(d + l - 1) !== h.SEMI && (l = 0),
                    (p =
                        0 === l
                            ? ""
                            : (function (e) {
                                  return (e - 1) >>> 0 < 127 || (e - 160) >>> 0 < 55136
                                      ? String.fromCharCode(e)
                                      : String.fromCodePoint(
                                            0 === e || (e >= 55296 && e <= 57343) || e > 1114111
                                                ? 65533
                                                : (e >= 128 && e <= 159 && L[e - 128]) || e,
                                        );
                              })(2097151 & r)));
            } else if (P(f)) {
                let r;
                ((l = 0), (p = ""));
                let a = f - u;
                if (a >>> 0 < c) {
                    let e = O[1 + a];
                    r = 0 === e ? -1 : (c + e) & 65535;
                } else r = -1;
                let i = 0,
                    s = 0,
                    m = r < 0 ? 0 : O[r],
                    g = d + 1;
                e: for (; g < n;) {
                    for (; (m & (o.VALUE_LENGTH | o.FLAG13)) == 0 && (m & o.JUMP_TABLE) != 0;) {
                        let t = m & o.JUMP_TABLE,
                            a = (m & o.BRANCH_LENGTH) >> 7;
                        if (0 === a) {
                            if (e.charCodeAt(g) !== t) break e;
                            r += 1;
                        } else {
                            let n = e.charCodeAt(g) - t;
                            if (n >>> 0 >= a) break e;
                            let i = O[r + 1 + n];
                            if (0 === i) break e;
                            r = (r + a + i) & 65535;
                        }
                        if (((m = O[r]), (g += 1) >= n)) break e;
                    }
                    if ((m & (o.VALUE_LENGTH | o.FLAG13)) === o.FLAG13) {
                        let t = (m & o.BRANCH_LENGTH) >> 7;
                        if (e.charCodeAt(g) !== (m & o.JUMP_TABLE)) break;
                        g += 1;
                        let a = t - 1,
                            n = r + 1,
                            i = 0;
                        for (; i + 1 < a; i += 2) {
                            let t = O[n];
                            if (e.charCodeAt(g) !== (255 & t) || ((g += 1), e.charCodeAt(g) !== ((t >> 8) & 255)))
                                break e;
                            ((g += 1), (n += 1));
                        }
                        if (i < a) {
                            if (e.charCodeAt(g) !== (255 & O[n])) break;
                            g += 1;
                        }
                        ((r += 1 + (t >> 1)), (m = O[r]));
                        continue;
                    }
                    let a = m >>> 14,
                        u = e.charCodeAt(g);
                    if (0 !== a) {
                        if (u === h.SEMI) {
                            ((l = g - d + 1), (p = 1 === a ? String.fromCharCode(m & o.VALUE_MASK) : U(O, r, a)));
                            break;
                        }
                        if ((t || (m & o.FLAG13) != 0 || ((l = g - d), (i = r), (s = a)), 1 === a)) break;
                    }
                    let c = (function (e, t, r, a) {
                        let n = (t & o.BRANCH_LENGTH) >> 7,
                            i = t & o.JUMP_TABLE;
                        if (i) {
                            if (0 === n) return a === i ? r : -1;
                            let t = a - i;
                            if (t >>> 0 >= n) return -1;
                            let s = e[r + t];
                            return 0 === s ? -1 : (r + n + s - 1) & 65535;
                        }
                        if (0 === n) return -1;
                        let s = (n + 1) >> 1,
                            l = r + s + n;
                        for (let t = 0; t < n; t++) {
                            let n = (e[r + (t >> 1)] >> ((1 & t) << 3)) & 255;
                            if (n === a) return (l + e[r + s + t]) & 65535;
                            if (n > a) break;
                        }
                        return -1;
                    })(O, m, r + (a || 1), u);
                    if (c < 0) break;
                    ((m = O[(r = c)]), (g += 1));
                }
                if ("" === p) {
                    let e = m >>> 14;
                    (0 === e || t || (m & o.FLAG13) != 0 || ((l = g - d), (i = r), (s = e)), l > 0 && (p = U(O, i, s)));
                }
            } else ((l = 0), (p = ""));
            (0 === l ||
            (r &&
                f !== h.NUM &&
                e.charCodeAt(d + l - 1) !== h.SEMI &&
                d + l < n &&
                ((m = e.charCodeAt(d + l)) === h.EQUALS || P(m) || J(m)))
                ? (a = d)
                : (i < a && (s += e.slice(i, a)), (s += p), (a = i = d + l)),
                e.charCodeAt(a) !== h.AMP && (a = e.indexOf("&", a)));
        } while (a >= 0);
        return s + e.slice(i);
    })(e, !0, !1);
}
var W = class {
        src_Any = E.source;
        src_Cc = F.source;
        src_Z = j.source;
        src_P = q.source;
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
            let a = this.escapeRE(e),
                n = this.escapeRE(t),
                i = `(?:(?!${this.src_ZCc}|${a}|${n}).)`,
                s = `${a}${i}{0,1000}${n}`;
            for (let e = 2; e <= r; e++) s = `${a}(?:${i}|${s}){0,1000}${n}`;
            return s;
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
    V = {
        validate: (e, t, r) => {
            let a = r.re.get_http_validator();
            a.lastIndex = t;
            let n = a.exec(e);
            return n ? n[0].length : 0;
        },
        normalize: (e, t) => t.normalize(e),
    },
    Z = {
        "http:": V,
        "https:": V,
        "ftp:": V,
        "//": {
            validate: function (e, t, r) {
                let a = r.re.get_relative_proto_validator();
                a.lastIndex = t;
                let n = a.exec(e);
                return n ? ((t >= 3 && ":" === e[t - 3]) || (t >= 3 && "/" === e[t - 3]) ? 0 : n[0].length) : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
        "mailto:": {
            validate: function (e, t, r) {
                let a = r.re.get_mailto_validator();
                a.lastIndex = t;
                let n = a.exec(e);
                return n ? n[0].length : 0;
            },
            normalize: (e, t) => t.normalize(e),
        },
    },
    X = {
        fuzzyLink: !1,
        fuzzyEmail: !0,
        fuzzyIP: !1,
        "---": !1,
        tlds:
            ((a = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|")),
            "a:cdefgilmnoqrstuwxz|b:abdefghijmnorstvwyz|c:acdfghiklmnoruvwxyz|d:ejkmoz|e:cegrstu|f:ijkmor|g:abdefghilmnpqrstuwy|h:kmnrtu|i:delmnoqrst|j:emop|k:eghimnprwyz|l:abcikrstuvy|m:acdeghklmnopqrstuvwxyz|n:acefgilopruz|o:m|p:aefghklmnrstwy|q:a|r:eosuw|s:abcdeghijklmnortuvxyz|t:cdfghjklmnortvwz|u:agksyz|v:aceginu|w:fs|y:et|z:amw"
                .split("|")
                .forEach((e) => {
                    let t = e.indexOf(":"),
                        r = e.slice(0, t);
                    for (let n of e.slice(t + 1)) a.push(r + n);
                }),
            a),
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
        constructor(e, t, r, a) {
            let n = e.slice(r, a);
            ((this.schema = t.toLowerCase()),
                (this.index = r),
                (this.lastIndex = a),
                (this.raw = n),
                (this.text = n),
                (this.url = n));
        }
    },
    Y = class {
        __opts__;
        __schemas__;
        re;
        constructor(e = {}) {
            let { rebuilder: t, ...r } = e;
            ((this.__opts__ = { ...X, ...r }),
                (this.__schemas__ = { ...Z }),
                (this.re = t || new W()),
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
                    a = this.re.get_mail_name_validator();
                for (r.lastIndex = 0; null !== (t = r.exec(e));) {
                    let r = e.slice(Math.max(0, t.index - 65), t.index);
                    if (a.test(r)) return !0;
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
                a,
                n,
                i,
                s,
                l = [],
                o = this.re.get_schema_search(),
                h = !1,
                u = !1,
                c = !1,
                m = 0;
            if (!e.length) return null;
            for (
                o.lastIndex = 0,
                    this.__opts__.fuzzyLink &&
                        this.__schemas__["http:"] &&
                        ((t = this.re.get_fuzzy_link_search()).lastIndex = 0),
                    this.__opts__.fuzzyEmail &&
                        this.__schemas__["mailto:"] &&
                        (((r = this.re.get_fuzzy_mail_host_search()).lastIndex = 0),
                        (a = this.re.get_mail_name_validator()));
                ;
            ) {
                let p,
                    d = Math.max(m - 1, 0);
                if (r && a && !c && (!i || i.index < m))
                    for (r.lastIndex < d && (r.lastIndex = d); ;) {
                        let t = r.exec(e);
                        if (!t) {
                            ((c = !0), (i = void 0));
                            break;
                        }
                        let n = a.exec(e.slice(Math.max(0, t.index - 65), t.index));
                        if (n) {
                            if (
                                (i = {
                                    schema: "mailto:",
                                    index: t.index - n[1].length,
                                    lastIndex: t.index + t[0].length,
                                }).index >= m
                            )
                                break;
                            r.lastIndex < d && (r.lastIndex = d);
                        }
                    }
                if (t && !u && (!n || n.index < m))
                    for (t.lastIndex < d && (t.lastIndex = d); ;) {
                        let r = t.exec(e);
                        if (!r) {
                            ((u = !0), (n = void 0));
                            break;
                        }
                        if (
                            (n = { schema: "", index: r.index + r[1].length, lastIndex: r.index + r[0].length })
                                .index >= m
                        )
                            break;
                        t.lastIndex < d && (t.lastIndex = d);
                    }
                let f = i;
                if (
                    ((!f || (n && (n.index < f.index || (n.index === f.index && n.lastIndex > f.lastIndex)))) &&
                        (f = n),
                    !h)
                )
                    for (;;) {
                        if (!s) {
                            o.lastIndex < d && (o.lastIndex = d);
                            let t = o.exec(e);
                            if (!t) {
                                h = !0;
                                break;
                            }
                            s = { schema: t[2], index: t.index + t[1].length, lastIndex: t.index + t[0].length };
                        }
                        if (s.index < m) {
                            s = void 0;
                            continue;
                        }
                        if (f && s.index > f.index) break;
                        let t = s;
                        s = void 0;
                        let r = this.testSchemaAt(e, t.schema, t.lastIndex);
                        if (r) {
                            p = { schema: t.schema, index: t.index, lastIndex: t.lastIndex + r };
                            break;
                        }
                    }
                let g = p;
                if (
                    ((!g || (i && (i.index < g.index || (i.index === g.index && i.lastIndex > g.lastIndex)))) &&
                        (g = i),
                    (!g || (n && (n.index < g.index || (n.index === g.index && n.lastIndex > g.lastIndex)))) && (g = n),
                    !g)
                )
                    break;
                g === i ? (i = void 0) : g === n && (n = void 0);
                let b = new G(e, g.schema, g.index, g.lastIndex);
                (b.schema ? this.__schemas__[b.schema].normalize(b, this) : this.normalize(b),
                    l.push(b),
                    (m = g.lastIndex));
            }
            return l.length ? l : null;
        }
        matchAtStart(e) {
            if (!e.length) return null;
            let t = this.re.get_schema_at_start().exec(e);
            if (!t) return null;
            let r = this.testSchemaAt(e, t[2], t[0].length);
            if (!r) return null;
            let a = new G(e, t[2], t.index + t[1].length, t.index + t[0].length + r);
            return (this.__schemas__[a.schema].normalize(a, this), a);
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
let K = /^xn--/,
    Q = /[^\0-\x7F]/,
    ee = /[\x2E\u3002\uFF0E\uFF61]/g,
    et = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input",
    },
    er = Math.floor,
    ea = String.fromCharCode;
function en(e) {
    throw RangeError(et[e]);
}
function ei(e, t) {
    let r = e.split("@"),
        a = "";
    return (
        r.length > 1 && ((a = r[0] + "@"), (e = r[1])),
        a +
            (function (e, t) {
                let r = [],
                    a = e.length;
                for (; a--;) r[a] = t(e[a]);
                return r;
            })((e = e.replace(ee, ".")).split("."), t).join(".")
    );
}
let es = function (e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
    },
    el = function (e, t, r) {
        let a = 0;
        for (e = r ? er(e / 700) : e >> 1, e += er(e / t); e > 455; a += 36) e = er(e / 35);
        return er(a + (36 * e) / (e + 38));
    },
    eo = function (e) {
        let t = [],
            r = e.length,
            a = 0,
            n = 128,
            i = 72,
            s = e.lastIndexOf("-");
        s < 0 && (s = 0);
        for (let r = 0; r < s; ++r) (e.charCodeAt(r) >= 128 && en("not-basic"), t.push(e.charCodeAt(r)));
        for (let o = s > 0 ? s + 1 : 0; o < r;) {
            let s = a;
            for (let t = 1, n = 36; ; n += 36) {
                var l;
                o >= r && en("invalid-input");
                let s =
                    (l = e.charCodeAt(o++)) >= 48 && l < 58
                        ? 26 + (l - 48)
                        : l >= 65 && l < 91
                          ? l - 65
                          : l >= 97 && l < 123
                            ? l - 97
                            : 36;
                (s >= 36 && en("invalid-input"), s > er((0x7fffffff - a) / t) && en("overflow"), (a += s * t));
                let h = n <= i ? 1 : n >= i + 26 ? 26 : n - i;
                if (s < h) break;
                let u = 36 - h;
                (t > er(0x7fffffff / u) && en("overflow"), (t *= u));
            }
            let h = t.length + 1;
            ((i = el(a - s, h, 0 == s)),
                er(a / h) > 0x7fffffff - n && en("overflow"),
                (n += er(a / h)),
                (a %= h),
                t.splice(a++, 0, n));
        }
        return String.fromCodePoint(...t);
    },
    eh = function (e) {
        let t = [],
            r = (e = (function (e) {
                let t = [],
                    r = 0,
                    a = e.length;
                for (; r < a;) {
                    let n = e.charCodeAt(r++);
                    if (n >= 55296 && n <= 56319 && r < a) {
                        let a = e.charCodeAt(r++);
                        (64512 & a) == 56320 ? t.push(((1023 & n) << 10) + (1023 & a) + 65536) : (t.push(n), r--);
                    } else t.push(n);
                }
                return t;
            })(e)).length,
            a = 128,
            n = 0,
            i = 72;
        for (let r of e) r < 128 && t.push(ea(r));
        let s = t.length,
            l = s;
        for (s && t.push("-"); l < r;) {
            let r = 0x7fffffff;
            for (let t of e) t >= a && t < r && (r = t);
            let o = l + 1;
            for (let h of (r - a > er((0x7fffffff - n) / o) && en("overflow"), (n += (r - a) * o), (a = r), e))
                if ((h < a && ++n > 0x7fffffff && en("overflow"), h === a)) {
                    let e = n;
                    for (let r = 36; ; r += 36) {
                        let a = r <= i ? 1 : r >= i + 26 ? 26 : r - i;
                        if (e < a) break;
                        let n = e - a,
                            s = 36 - a;
                        (t.push(ea(es(a + (n % s), 0))), (e = er(n / s)));
                    }
                    (t.push(ea(es(e, 0))), (i = el(n, o, l === s)), (n = 0), ++l);
                }
            (++n, ++a);
        }
        return t.join("");
    };
var eu = Object.defineProperty,
    ec = (e, t) => {
        let r = {};
        for (var a in e) eu(r, a, { get: e[a], enumerable: !0 });
        return (t || eu(r, Symbol.toStringTag, { value: "Module" }), r);
    },
    em = ec({
        arrayReplaceAt: () => ed,
        asciiTrim: () => eI,
        callable: () => ep,
        escapeHtml: () => e_,
        escapeRE: () => ez,
        fromCodePoint: () => eg,
        isMdAsciiPunct: () => eF,
        isPunctChar: () => eT,
        isPunctCharCode: () => eE,
        isSpace: () => eS,
        isValidEntityCode: () => ef,
        isWhiteSpace: () => eM,
        lib: () => ej,
        normalizeReference: () => eB,
        unescapeAll: () => ew,
        unescapeMd: () => ey,
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
function ef(e) {
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
function eg(e) {
    return e > 65535 ? String.fromCharCode(55296 + ((e -= 65536) >> 10), 56320 + (1023 & e)) : String.fromCharCode(e);
}
var eb = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    ev = RegExp(`${eb.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi"),
    ex = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function ey(e) {
    return 0 > e.indexOf("\\") ? e : e.replace(eb, "$1");
}
function ew(e) {
    return 0 > e.indexOf("\\") && 0 > e.indexOf("&")
        ? e
        : e.replace(ev, function (e, t, r) {
              if (t) return t;
              if (35 === r.charCodeAt(0) && ex.test(r)) {
                  let t = "x" === r[1].toLowerCase() ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
                  return ef(t) ? eg(t) : e;
              }
              let a = $(e);
              return a !== e ? a : e;
          });
}
var ek = /[&<>"]/,
    eA = /[&<>"]/g,
    eC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
function eR(e) {
    return eC[e];
}
function e_(e) {
    return ek.test(e) ? e.replace(eA, eR) : e;
}
var eD = /[.?*+^$[\]\\(){}|-]/g;
function ez(e) {
    return e.replace(eD, "\\$&");
}
function eS(e) {
    switch (e) {
        case 9:
        case 32:
            return !0;
    }
    return !1;
}
function eM(e) {
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
function eT(e) {
    return q.test(e) || I.test(e);
}
function eE(e) {
    return eT(eg(e));
}
function eF(e) {
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
function eB(e) {
    return (e = e.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
}
function eq(e) {
    return 32 === e || 9 === e || 10 === e || 13 === e;
}
function eI(e) {
    let t = 0;
    for (; t < e.length && eq(e.charCodeAt(t)); t++);
    let r = e.length - 1;
    for (; r >= t && eq(e.charCodeAt(r)); r--);
    return e.slice(t, r + 1);
}
var ej = { mdurl: m, ucmicro: p };
function eL(e, t, r) {
    let a,
        n,
        i,
        s,
        l = e.posMax,
        o = e.pos;
    for (e.pos = t + 1, a = 1; e.pos < l;) {
        if (93 === (i = e.src.charCodeAt(e.pos)) && 0 == --a) {
            n = !0;
            break;
        }
        if (((s = e.pos), e.md.inline.skipToken(e), 91 === i)) {
            if (s === e.pos - 1) a++;
            else if (r) return ((e.pos = o), -1);
        }
    }
    let h = -1;
    return (n && (h = e.pos), (e.pos = o), h);
}
function eN(e, t, r) {
    let a,
        n = t,
        i = { ok: !1, pos: 0, str: "" };
    if (60 === e.charCodeAt(n)) {
        for (n++; n < r && 10 !== (a = e.charCodeAt(n)) && 60 !== a;) {
            if (62 === a) {
                ((i.pos = n + 1), (i.str = ew(e.slice(t + 1, n))), (i.ok = !0));
                break;
            }
            if (92 === a && n + 1 < r) {
                n += 2;
                continue;
            }
            n++;
        }
        return i;
    }
    let s = 0;
    for (; n < r && 32 !== (a = e.charCodeAt(n)) && !(a < 32) && 127 !== a;) {
        if (92 === a && n + 1 < r) {
            if (32 === e.charCodeAt(n + 1)) {
                n++;
                continue;
            }
            n += 2;
            continue;
        }
        if (40 === a && ++s > 32) return i;
        if (41 === a) {
            if (0 === s) break;
            s--;
        }
        n++;
    }
    return (t === n || 0 !== s || ((i.str = ew(e.slice(t, n))), (i.pos = n), (i.ok = !0)), i);
}
function eO(e, t, r, a) {
    let n,
        i = t,
        s = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
    if (a) ((s.str = a.str), (s.marker = a.marker));
    else {
        if (i >= r) return s;
        let a = e.charCodeAt(i);
        if (34 !== a && 39 !== a && 40 !== a) return s;
        (t++, i++, 40 === a && (a = 41), (s.marker = a));
    }
    for (; i < r;) {
        if ((n = e.charCodeAt(i)) === s.marker) return ((s.pos = i + 1), (s.str += ew(e.slice(t, i))), (s.ok = !0), s);
        if (40 === n && 41 === s.marker) return s;
        (92 === n && i + 1 < r && i++, i++);
    }
    return ((s.can_continue = !0), (s.str += ew(e.slice(t, i))), s);
}
var eH = ec({ parseLinkDestination: () => eN, parseLinkLabel: () => eL, parseLinkTitle: () => eO });
function eJ(e) {
    return (eJ =
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
function eP(e, t, r) {
    var a;
    return (
        ((a = (function (e, t) {
            if ("object" != eJ(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var a = r.call(e, t || "default");
                if ("object" != eJ(a)) return a;
                throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        })(t, "string")),
        (t = "symbol" == eJ(a) ? a : a + "") in e)
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
        e
    );
}
var eU = class {
        constructor(e, t, r) {
            (eP(this, "map", null),
                eP(this, "level", 0),
                eP(this, "children", null),
                eP(this, "content", ""),
                eP(this, "markup", ""),
                eP(this, "info", ""),
                eP(this, "block", !1),
                eP(this, "hidden", !1),
                (this.type = e),
                (this.tag = t),
                (this.attrs = null),
                (this.nesting = r),
                (this.meta = null));
        }
        attrIndex(e) {
            if (!this.attrs) return -1;
            let t = this.attrs;
            for (let r = 0, a = t.length; r < a; r++) if (t[r][0] === e) return r;
            return -1;
        }
        attrPush(e) {
            this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
        }
        attrSet(e, t) {
            let r = this.attrIndex(e),
                a = [e, t];
            r < 0 ? this.attrPush(a) : (this.attrs[r] = a);
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
    e$ = class {
        constructor() {
            (eP(this, "__rules__", []), eP(this, "__cache__", null));
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
            let a = this.__find__(e);
            if (-1 === a) throw Error(`Parser rule not found: ${e}`);
            ((this.__rules__[a].fn = t), (this.__rules__[a].alt = r.alt || []), (this.__cache__ = null));
        }
        before(e, t, r, a = {}) {
            let n = this.__find__(e);
            if (-1 === n) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(n, 0, { name: t, enabled: !0, fn: r, alt: a.alt || [] }), (this.__cache__ = null));
        }
        after(e, t, r, a = {}) {
            let n = this.__find__(e);
            if (-1 === n) throw Error(`Parser rule not found: ${e}`);
            (this.__rules__.splice(n + 1, 0, { name: t, enabled: !0, fn: r, alt: a.alt || [] }),
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
                    let a = this.__find__(e);
                    if (a < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[a].enabled = !0), r.push(e));
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
                    let a = this.__find__(e);
                    if (a < 0) {
                        if (t) return;
                        throw Error(`Rules manager: invalid rule name ${e}`);
                    }
                    ((this.__rules__[a].enabled = !1), r.push(e));
                }),
                (this.__cache__ = null),
                r
            );
        }
        getRules(e) {
            return (this.__cache__ || this.__compile__(), this.__cache__[e] || []);
        }
    },
    eW = {};
((eW.code_inline = function (e, t, r, a, n) {
    let i = e[t];
    return `<code${n.renderAttrs(i)}>${e_(i.content)}</code>`;
}),
    (eW.code_block = function (e, t, r, a, n) {
        let i = e[t];
        return `<pre${n.renderAttrs(i)}><code>${e_(e[t].content)}</code></pre>
`;
    }),
    (eW.fence = function (e, t, r, a, n) {
        let i,
            s = e[t],
            l = s.info ? ew(s.info).trim() : "",
            o = "",
            h = "";
        if (l) {
            let e = l.split(/(\s+)/g);
            ((o = e[0]), (h = e.slice(2).join("")));
        }
        if (0 === (i = (r.highlight && r.highlight(s.content, o, h)) || e_(s.content)).indexOf("<pre")) return i + "\n";
        if (l) {
            let e = s.attrIndex("class"),
                t = s.attrs ? s.attrs.slice() : [];
            return (
                e < 0
                    ? t.push(["class", `${r.langPrefix}${o}`])
                    : ((t[e] = [t[e][0], t[e][1]]), (t[e][1] += ` ${r.langPrefix}${o}`)),
                `<pre><code${n.renderAttrs({ attrs: t })}>${i}</code></pre>
`
            );
        }
        return `<pre><code${n.renderAttrs(s)}>${i}</code></pre>
`;
    }),
    (eW.image = function (e, t, r, a, n) {
        let i = e[t];
        return ((i.attrs[i.attrIndex("alt")][1] = n.renderInlineAsText(i.children, r, a)), n.renderToken(e, t, r));
    }),
    (eW.hardbreak = function (e, t, r) {
        return r.xhtmlOut ? "<br />\n" : "<br>\n";
    }),
    (eW.softbreak = function (e, t, r) {
        return r.breaks ? (r.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
    }),
    (eW.text = function (e, t) {
        return e_(e[t].content);
    }),
    (eW.html_block = function (e, t) {
        return e[t].content;
    }),
    (eW.html_inline = function (e, t) {
        return e[t].content;
    }));
var eV = class {
        constructor() {
            eP(this, "rules", Object.assign({}, eW));
        }
        renderAttrs(e) {
            let t, r, a;
            if (!e.attrs) return "";
            for (t = 0, a = "", r = e.attrs.length; t < r; t++)
                a += ` ${e_(e.attrs[t][0])}="${e_(String(e.attrs[t][1]))}"`;
            return a;
        }
        renderToken(e, t, r) {
            let a = e[t],
                n = "";
            if (a.hidden) return "";
            let i = t - 1;
            for (; i >= 0 && e[i].hidden && 0 === e[i].nesting;) i--;
            (a.block && -1 !== a.nesting && i >= 0 && e[i].hidden && -1 === e[i].nesting && (n += "\n"),
                (n += (-1 === a.nesting ? "</" : "<") + a.tag),
                (n += this.renderAttrs(a)),
                0 === a.nesting && r.xhtmlOut && (n += " /"));
            let s = !1;
            if (a.block && ((s = !0), 1 === a.nesting)) {
                let r = t + 1;
                for (; r < e.length && e[r].hidden && 0 === e[r].nesting;) r++;
                if (r < e.length) {
                    let t = e[r];
                    "inline" === t.type || t.hidden ? (s = !1) : -1 === t.nesting && t.tag === a.tag && (s = !1);
                }
            }
            return n + (s ? ">\n" : ">");
        }
        renderInline(e, t, r) {
            let a = "",
                n = this.rules;
            for (let i = 0, s = e.length; i < s; i++) {
                let s = e[i].type;
                void 0 !== n[s] ? (a += n[s](e, i, t, r, this)) : (a += this.renderToken(e, i, t));
            }
            return a;
        }
        renderInlineAsText(e, t, r) {
            let a = "";
            for (let n = 0, i = e.length; n < i; n++)
                switch (e[n].type) {
                    case "text":
                    case "code_inline":
                    case "html_inline":
                    case "html_block":
                        a += e[n].content;
                        break;
                    case "image":
                        a += this.renderInlineAsText(e[n].children, t, r);
                        break;
                    case "softbreak":
                    case "hardbreak":
                        a += "\n";
                }
            return a;
        }
        render(e, t, r) {
            let a = "",
                n = this.rules;
            for (let i = 0, s = e.length; i < s; i++) {
                let s = e[i].type;
                "inline" === s
                    ? (a += this.renderInline(e[i].children, t, r))
                    : void 0 !== n[s]
                      ? (a += n[s](e, i, t, r, this))
                      : (a += this.renderToken(e, i, t));
            }
            return a;
        }
    },
    eZ = class {
        constructor(e, t, r) {
            (eP(this, "tokens", []),
                eP(this, "inlineMode", !1),
                eP(this, "Token", eU),
                (this.src = e),
                (this.env = r),
                (this.md = t));
        }
    },
    eX = /\r\n?/g,
    eG = /\0/g,
    eY = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    eK = /\((c|tm|r)\)/i,
    eQ = /\((c|tm|r)\)/gi,
    e0 = { c: "\xa9", r: "\xae", tm: "\u2122" };
function e1(e, t) {
    return e0[t.toLowerCase()];
}
var e4 = /['"]/,
    e5 = /['"]/g;
function e3(e, t, r) {
    for (; e.length > r;) {
        let r = e.pop();
        r.isSingleQuote ? (t.single = r.prevSameQuoteIdx) : (t.double = r.prevSameQuoteIdx);
    }
}
function e6(e, t, r, a) {
    (e[t] || (e[t] = []), e[t].push({ pos: r, ch: a }));
}
var e7 = [
        [
            "normalize",
            function (e) {
                let t;
                ((t = (t = e.src.replace(eX, "\n")).replace(eG, "\uFFFD")), (e.src = t));
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
                for (let r = 0, a = t.length; r < a; r++) {
                    let a = t[r];
                    "inline" === a.type && e.md.inline.parse(a.content, e.md, e.env, a.children);
                }
            },
        ],
        [
            "linkify",
            function (e) {
                let t = e.tokens;
                if (e.md.options.linkify)
                    for (let n = 0, i = t.length; n < i; n++) {
                        if ("inline" !== t[n].type || !e.md.linkify.test(t[n].content)) continue;
                        let i = t[n].children,
                            s = [],
                            l = 0;
                        for (let t = i.length - 1; t >= 0; t--) {
                            let n = i[t];
                            if ("link_close" === n.type) {
                                for (t--; i[t].level !== n.level && "link_open" !== i[t].type;) t--;
                                continue;
                            }
                            if ("html_inline" === n.type) {
                                var r, a;
                                ((r = n.content),
                                    /^<a[>\s]/i.test(r) && l > 0 && l--,
                                    (a = n.content),
                                    /^<\/a\s*>/i.test(a) && l++);
                            }
                            if (!(l > 0) && "text" === n.type && e.md.linkify.test(n.content)) {
                                let r = n.content,
                                    a = e.md.linkify.match(r),
                                    l = [],
                                    o = n.level,
                                    h = 0;
                                a.length > 0 &&
                                    0 === a[0].index &&
                                    t > 0 &&
                                    "text_special" === i[t - 1].type &&
                                    (a = a.slice(1));
                                for (let t = 0; t < a.length; t++) {
                                    let n = a[t].url,
                                        i = e.md.normalizeLink(n);
                                    if (!e.md.validateLink(i)) continue;
                                    let s = a[t].text;
                                    s = a[t].schema
                                        ? "mailto:" !== a[t].schema || /^mailto:/i.test(s)
                                            ? e.md.normalizeLinkText(s)
                                            : e.md.normalizeLinkText(`mailto:${s}`).replace(/^mailto:/, "")
                                        : e.md.normalizeLinkText(`http://${s}`).replace(/^http:\/\//, "");
                                    let u = a[t].index;
                                    if (u > h) {
                                        let t = new e.Token("text", "", 0);
                                        ((t.content = r.slice(h, u)), (t.level = o), l.push(t));
                                    }
                                    let c = new e.Token("link_open", "a", 1);
                                    ((c.attrs = [["href", i]]),
                                        (c.level = o++),
                                        (c.markup = "linkify"),
                                        (c.info = "auto"),
                                        l.push(c));
                                    let m = new e.Token("text", "", 0);
                                    ((m.content = s), (m.level = o), l.push(m));
                                    let p = new e.Token("link_close", "a", -1);
                                    ((p.level = --o),
                                        (p.markup = "linkify"),
                                        (p.info = "auto"),
                                        l.push(p),
                                        (h = a[t].lastIndex));
                                }
                                if (h < r.length) {
                                    let t = new e.Token("text", "", 0);
                                    ((t.content = r.slice(h)), (t.level = o), l.push(t));
                                }
                                s.push({ index: t, nodes: l });
                            }
                        }
                        if (s.length > 0) {
                            let e = i.length;
                            for (let t of s) e += t.nodes.length - 1;
                            let r = Array(e),
                                a = 0,
                                l = 0;
                            s.reverse();
                            for (let e = 0; e < i.length; e++) {
                                let t = s[a];
                                if ((null == t ? void 0 : t.index) === e) {
                                    for (let e of t.nodes) r[l++] = e;
                                    a++;
                                } else r[l++] = i[e];
                            }
                            t[n].children = r;
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
                            (eK.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let r = e.length - 1; r >= 0; r--) {
                                        let a = e[r];
                                        ("text" !== a.type || t || (a.content = a.content.replace(eQ, e1)),
                                            "link_open" === a.type && "auto" === a.info && t--,
                                            "link_close" === a.type && "auto" === a.info && t++);
                                    }
                                })(e.tokens[t].children),
                            eY.test(e.tokens[t].content) &&
                                (function (e) {
                                    let t = 0;
                                    for (let r = e.length - 1; r >= 0; r--) {
                                        let a = e[r];
                                        ("text" === a.type &&
                                            !t &&
                                            eY.test(a.content) &&
                                            (a.content = a.content
                                                .replace(/\+-/g, "\xb1")
                                                .replace(/\.{2,}/g, "\u2026")
                                                .replace(/([?!])\u2026/g, "$1..")
                                                .replace(/([?!]){4,}/g, "$1$1$1")
                                                .replace(/,{2,}/g, ",")
                                                .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014")
                                                .replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013")
                                                .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")),
                                            "link_open" === a.type && "auto" === a.info && t--,
                                            "link_close" === a.type && "auto" === a.info && t++);
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
                            e4.test(e.tokens[t].content) &&
                            (function (e, t) {
                                let r,
                                    a = [],
                                    n = { single: -1, double: -1 },
                                    i = {};
                                for (let s = 0; s < e.length; s++) {
                                    let l = e[s],
                                        o = e[s].level;
                                    for (r = a.length - 1; r >= 0 && !(a[r].level <= o); r--);
                                    if ((e3(a, n, r + 1), "text" !== l.type)) continue;
                                    let h = l.content,
                                        u = 0,
                                        c = h.length;
                                    for (; u < c;) {
                                        e5.lastIndex = u;
                                        let l = e5.exec(h);
                                        if (!l) break;
                                        let m = !0,
                                            p = !0;
                                        u = l.index + 1;
                                        let d = "'" === l[0],
                                            f = 32;
                                        if (l.index - 1 >= 0) f = h.charCodeAt(l.index - 1);
                                        else
                                            for (
                                                r = s - 1;
                                                r >= 0 && "softbreak" !== e[r].type && "hardbreak" !== e[r].type;
                                                r--
                                            )
                                                if (e[r].content) {
                                                    f = e[r].content.charCodeAt(e[r].content.length - 1);
                                                    break;
                                                }
                                        let g = 32;
                                        if (u < c) g = h.charCodeAt(u);
                                        else
                                            for (
                                                r = s + 1;
                                                r < e.length && "softbreak" !== e[r].type && "hardbreak" !== e[r].type;
                                                r++
                                            )
                                                if (e[r].content) {
                                                    g = e[r].content.charCodeAt(0);
                                                    break;
                                                }
                                        let b = eF(f) || eE(f),
                                            v = eF(g) || eE(g),
                                            x = eM(f),
                                            y = eM(g);
                                        if (
                                            (y ? (m = !1) : v && !(x || b) && (m = !1),
                                            x ? (p = !1) : b && !(y || v) && (p = !1),
                                            34 === g && '"' === l[0] && f >= 48 && f <= 57 && (p = m = !1),
                                            m && p && ((m = b), (p = v)),
                                            !m && !p)
                                        ) {
                                            d && e6(i, s, l.index, "\u2019");
                                            continue;
                                        }
                                        if (p && (r = d ? n.single : n.double) >= 0 && a[r].level === o) {
                                            let e,
                                                o,
                                                h = a[r];
                                            (d
                                                ? ((e = t.md.options.quotes[2]), (o = t.md.options.quotes[3]))
                                                : ((e = t.md.options.quotes[0]), (o = t.md.options.quotes[1])),
                                                e6(i, s, l.index, o),
                                                e6(i, h.tokenIdx, h.contentPos, e),
                                                e3(a, n, r));
                                            continue;
                                        }
                                        if (m) {
                                            if (a.length >= 1e3) return;
                                            (a.push({
                                                tokenIdx: s,
                                                contentPos: l.index,
                                                isSingleQuote: d,
                                                level: o,
                                                prevSameQuoteIdx: d ? n.single : n.double,
                                            }),
                                                d ? (n.single = a.length - 1) : (n.double = a.length - 1));
                                        } else p && d && e6(i, s, l.index, "\u2019");
                                    }
                                }
                                Object.keys(i).forEach(function (t) {
                                    let r = Number(t);
                                    e[r].content = (function (e, t) {
                                        let r = "",
                                            a = 0;
                                        t.sort((e, t) => e.pos - t.pos);
                                        for (let n = 0; n < t.length; n++) {
                                            let i = t[n];
                                            ((r += e.slice(a, i.pos) + i.ch), (a = i.pos + 1));
                                        }
                                        return r + e.slice(a);
                                    })(e[r].content, i[t]);
                                });
                            })(e.tokens[t].children, e);
            },
        ],
        [
            "text_join",
            function (e) {
                let t,
                    r,
                    a = e.tokens,
                    n = a.length;
                for (let e = 0; e < n; e++) {
                    if ("inline" !== a[e].type) continue;
                    let n = a[e].children,
                        i = n.length;
                    for (t = 0; t < i; t++)
                        ("text_special" === n[t].type && (n[t].type = "text"),
                            n[t].children &&
                                (function (e) {
                                    let t,
                                        r,
                                        a = e.length;
                                    for (t = 0; t < a; t++) "text_special" === e[t].type && (e[t].type = "text");
                                    for (t = r = 0; t < a; t++)
                                        "text" === e[t].type && t + 1 < a && "text" === e[t + 1].type
                                            ? (e[t + 1].content = e[t].content + e[t + 1].content)
                                            : (t !== r && (e[r] = e[t]), r++);
                                    t !== r && (e.length = r);
                                })(n[t].children));
                    for (t = r = 0; t < i; t++)
                        "text" === n[t].type && t + 1 < i && "text" === n[t + 1].type
                            ? (n[t + 1].content = n[t].content + n[t + 1].content)
                            : (t !== r && (n[r] = n[t]), r++);
                    t !== r && (n.length = r);
                }
            },
        ],
    ],
    e2 = class {
        constructor() {
            (eP(this, "ruler", new e$()), eP(this, "State", eZ));
            for (let e = 0; e < e7.length; e++) this.ruler.push(e7[e][0], e7[e][1]);
        }
        process(e) {
            let t = this.ruler.getRules("");
            for (let r = 0, a = t.length; r < a; r++) t[r](e);
        }
    },
    e8 = class {
        constructor(e, t, r, a) {
            (eP(this, "bMarks", []),
                eP(this, "eMarks", []),
                eP(this, "tShift", []),
                eP(this, "sCount", []),
                eP(this, "bsCount", []),
                eP(this, "blkIndent", 0),
                eP(this, "line", 0),
                eP(this, "lineMax", 0),
                eP(this, "tight", !1),
                eP(this, "listIndent", -1),
                eP(this, "parentType", "root"),
                eP(this, "level", 0),
                eP(this, "Token", eU),
                (this.src = e),
                (this.md = t),
                (this.env = r),
                (this.tokens = a));
            let n = this.src;
            for (let e = 0, t = 0, r = 0, a = 0, i = n.length, s = !1; t < i; t++) {
                let l = n.charCodeAt(t);
                if (!s)
                    if (eS(l)) {
                        (r++, 9 === l ? (a += 4 - (a % 4)) : a++);
                        continue;
                    } else s = !0;
                (10 === l || t === i - 1) &&
                    (10 !== l && t++,
                    this.bMarks.push(e),
                    this.eMarks.push(t),
                    this.tShift.push(r),
                    this.sCount.push(a),
                    this.bsCount.push(0),
                    (s = !1),
                    (r = 0),
                    (a = 0),
                    (e = t + 1));
            }
            (this.bMarks.push(n.length),
                this.eMarks.push(n.length),
                this.tShift.push(0),
                this.sCount.push(0),
                this.bsCount.push(0),
                (this.lineMax = this.bMarks.length - 1));
        }
        push(e, t, r) {
            let a = new eU(e, t, r);
            return (
                (a.block = !0),
                r < 0 && this.level--,
                (a.level = this.level),
                r > 0 && this.level++,
                this.tokens.push(a),
                a
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
            for (let t = this.src.length; e < t && eS(this.src.charCodeAt(e)); e++);
            return e;
        }
        skipSpacesBack(e, t) {
            if (e <= t) return e;
            for (; e > t;) if (!eS(this.src.charCodeAt(--e))) return e + 1;
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
        getLines(e, t, r, a) {
            if (e >= t) return "";
            let n = Array(t - e);
            for (let i = 0, s = e; s < t; s++, i++) {
                let e,
                    l = 0,
                    o = this.bMarks[s],
                    h = o;
                for (e = s + 1 < t || a ? this.eMarks[s] + 1 : this.eMarks[s]; h < e && l < r;) {
                    let e = this.src.charCodeAt(h);
                    if (eS(e)) 9 === e ? (l += 4 - ((l + this.bsCount[s]) % 4)) : l++;
                    else if (h - o < this.tShift[s]) l++;
                    else break;
                    h++;
                }
                l > r ? (n[i] = Array(l - r + 1).join(" ") + this.src.slice(h, e)) : (n[i] = this.src.slice(h, e));
            }
            return n.join("");
        }
    };
function e9(e, t) {
    let r = e.bMarks[t] + e.tShift[t],
        a = e.eMarks[t];
    return e.src.slice(r, a);
}
function te(e) {
    let t = [],
        r = e.length,
        a = 0,
        n = e.charCodeAt(a),
        i = !1,
        s = 0,
        l = "";
    for (; a < r;)
        (124 === n &&
            (i ? ((l += e.substring(s, a - 1)), (s = a)) : (t.push(l + e.substring(s, a)), (l = ""), (s = a + 1))),
            (i = 92 === n),
            a++,
            (n = e.charCodeAt(a)));
    return (t.push(l + e.substring(s)), t);
}
function tt(e, t) {
    let r = e.eMarks[t],
        a = e.bMarks[t] + e.tShift[t],
        n = e.src.charCodeAt(a++);
    return (42 !== n && 45 !== n && 43 !== n) || (a < r && !eS(e.src.charCodeAt(a))) ? -1 : a;
}
function tr(e, t) {
    let r = e.bMarks[t] + e.tShift[t],
        a = e.eMarks[t],
        n = r;
    if (n + 1 >= a) return -1;
    let i = e.src.charCodeAt(n++);
    if (i < 48 || i > 57) return -1;
    for (;;) {
        if (n >= a) return -1;
        if ((i = e.src.charCodeAt(n++)) >= 48 && i <= 57) {
            if (n - r >= 10) return -1;
            continue;
        }
        if (41 === i || 46 === i) break;
        return -1;
    }
    return n < a && !eS((i = e.src.charCodeAt(n))) ? -1 : n;
}
var ta =
        "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    tn = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    ti = RegExp(
        `^(?:${ta}|${tn}|\x3c!---?>|\x3c!--(?:[^-]|-[^-]|--[^>])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`,
    ),
    ts = RegExp(`^(?:${ta}|${tn})`),
    tl = [
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
        [RegExp(`${ts.source}\\s*$`), /^$/, !1],
    ],
    to = [
        [
            "table",
            function (e, t, r, a) {
                let n;
                if (t + 2 > r) return !1;
                let i = t + 1;
                if (e.sCount[i] < e.blkIndent || e.sCount[i] - e.blkIndent >= 4) return !1;
                let s = e.bMarks[i] + e.tShift[i];
                if (s >= e.eMarks[i]) return !1;
                let l = e.src.charCodeAt(s++);
                if ((124 !== l && 45 !== l && 58 !== l) || s >= e.eMarks[i]) return !1;
                let o = e.src.charCodeAt(s++);
                if ((124 !== o && 45 !== o && 58 !== o && !eS(o)) || (45 === l && eS(o))) return !1;
                for (; s < e.eMarks[i];) {
                    let t = e.src.charCodeAt(s);
                    if (124 !== t && 45 !== t && 58 !== t && !eS(t)) return !1;
                    s++;
                }
                let h = e9(e, t + 1),
                    u = h.split("|"),
                    c = [];
                for (let e = 0; e < u.length; e++) {
                    let t = u[e].trim();
                    if (!t)
                        if (0 === e || e === u.length - 1) continue;
                        else return !1;
                    if (!/^:?-+:?$/.test(t)) return !1;
                    58 === t.charCodeAt(t.length - 1)
                        ? c.push(58 === t.charCodeAt(0) ? "center" : "right")
                        : 58 === t.charCodeAt(0)
                          ? c.push("left")
                          : c.push("");
                }
                if (-1 === (h = e9(e, t).trim()).indexOf("|") || e.sCount[t] - e.blkIndent >= 4) return !1;
                ((u = te(h)).length && "" === u[0] && u.shift(), u.length && "" === u[u.length - 1] && u.pop());
                let m = u.length;
                if (0 === m || m !== c.length) return !1;
                if (a) return !0;
                let p = e.parentType;
                e.parentType = "table";
                let d = e.md.block.ruler.getRules("blockquote"),
                    f = e.push("table_open", "table", 1),
                    g = [t, 0];
                ((f.map = g),
                    (e.push("thead_open", "thead", 1).map = [t, t + 1]),
                    (e.push("tr_open", "tr", 1).map = [t, t + 1]));
                for (let t = 0; t < u.length; t++) {
                    let r = e.push("th_open", "th", 1);
                    c[t] && (r.attrs = [["style", `text-align:${c[t]}`]]);
                    let a = e.push("inline", "", 0);
                    ((a.content = u[t].trim()), (a.children = []), e.push("th_close", "th", -1));
                }
                (e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1));
                let b = 0;
                for (i = t + 2; i < r && !(e.sCount[i] < e.blkIndent); i++) {
                    let a = !1;
                    for (let t = 0, n = d.length; t < n; t++)
                        if (d[t](e, i, r, !0)) {
                            a = !0;
                            break;
                        }
                    if (
                        a ||
                        !(h = e9(e, i).trim()) ||
                        e.sCount[i] - e.blkIndent >= 4 ||
                        ((u = te(h)).length && "" === u[0] && u.shift(),
                        u.length && "" === u[u.length - 1] && u.pop(),
                        (b += m - u.length) > 65536)
                    )
                        break;
                    (i === t + 2 && (e.push("tbody_open", "tbody", 1).map = n = [t + 2, 0]),
                        (e.push("tr_open", "tr", 1).map = [i, i + 1]));
                    for (let t = 0; t < m; t++) {
                        let r = e.push("td_open", "td", 1);
                        c[t] && (r.attrs = [["style", `text-align:${c[t]}`]]);
                        let a = e.push("inline", "", 0);
                        ((a.content = u[t] ? u[t].trim() : ""), (a.children = []), e.push("td_close", "td", -1));
                    }
                    e.push("tr_close", "tr", -1);
                }
                return (
                    n && (e.push("tbody_close", "tbody", -1), (n[1] = i)),
                    e.push("table_close", "table", -1),
                    (g[1] = i),
                    (e.parentType = p),
                    (e.line = i),
                    !0
                );
            },
            ["paragraph", "reference"],
        ],
        [
            "code",
            function (e, t, r) {
                if (e.sCount[t] - e.blkIndent < 4) return !1;
                let a = t + 1,
                    n = a;
                for (; a < r;) {
                    if (e.isEmpty(a)) {
                        a++;
                        continue;
                    }
                    if (e.sCount[a] - e.blkIndent >= 4) {
                        n = ++a;
                        continue;
                    }
                    break;
                }
                e.line = n;
                let i = e.push("code_block", "code", 0);
                return ((i.content = e.getLines(t, n, 4 + e.blkIndent, !1) + "\n"), (i.map = [t, e.line]), !0);
            },
        ],
        [
            "fence",
            function (e, t, r, a) {
                let n = e.bMarks[t] + e.tShift[t],
                    i = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || n + 3 > i) return !1;
                let s = e.src.charCodeAt(n);
                if (126 !== s && 96 !== s) return !1;
                let l = n,
                    o = (n = e.skipChars(n, s)) - l;
                if (o < 3) return !1;
                let h = e.src.slice(l, n),
                    u = e.src.slice(n, i);
                if (96 === s && u.indexOf(String.fromCharCode(s)) >= 0) return !1;
                if (a) return !0;
                let c = t,
                    m = !1;
                for (
                    ;
                    !(++c >= r) &&
                    (!((n = l = e.bMarks[c] + e.tShift[c]) < (i = e.eMarks[c])) || !(e.sCount[c] < e.blkIndent));
                ) {
                    if (
                        !(
                            e.src.charCodeAt(n) !== s ||
                            e.sCount[c] - e.blkIndent >= 4 ||
                            (n = e.skipChars(n, s)) - l < o
                        ) &&
                        !((n = e.skipSpaces(n)) < i)
                    ) {
                        m = !0;
                        break;
                    }
                }
                ((o = e.sCount[t]), (e.line = c + +!!m));
                let p = e.push("fence", "code", 0);
                return (
                    (p.info = u), (p.content = e.getLines(t + 1, c, o, !0)), (p.markup = h), (p.map = [t, e.line]), !0
                );
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "blockquote",
            function (e, t, r, a) {
                let n,
                    i = e.bMarks[t] + e.tShift[t],
                    s = e.eMarks[t],
                    l = e.lineMax;
                if (e.sCount[t] - e.blkIndent >= 4 || 62 !== e.src.charCodeAt(i)) return !1;
                if (a) return !0;
                let o = [],
                    h = [],
                    u = [],
                    c = [],
                    m = e.md.block.ruler.getRules("blockquote"),
                    p = e.parentType;
                e.parentType = "blockquote";
                let d = !1;
                for (n = t; n < r; n++) {
                    let t = e.sCount[n] < e.blkIndent;
                    if ((i = e.bMarks[n] + e.tShift[n]) >= (s = e.eMarks[n])) break;
                    if (62 === e.src.charCodeAt(i++) && !t) {
                        let t,
                            r,
                            a = e.sCount[n] + 1;
                        32 === e.src.charCodeAt(i)
                            ? (i++, a++, (r = !1), (t = !0))
                            : 9 === e.src.charCodeAt(i)
                              ? ((t = !0), (e.bsCount[n] + a) % 4 == 3 ? (i++, a++, (r = !1)) : (r = !0))
                              : (t = !1);
                        let l = a;
                        for (o.push(e.bMarks[n]), e.bMarks[n] = i; i < s;) {
                            let t = e.src.charCodeAt(i);
                            if (eS(t)) 9 === t ? (l += 4 - ((l + e.bsCount[n] + +!!r) % 4)) : l++;
                            else break;
                            i++;
                        }
                        ((d = i >= s),
                            h.push(e.bsCount[n]),
                            (e.bsCount[n] = e.sCount[n] + 1 + +!!t),
                            u.push(e.sCount[n]),
                            (e.sCount[n] = l - a),
                            c.push(e.tShift[n]),
                            (e.tShift[n] = i - e.bMarks[n]));
                        continue;
                    }
                    if (d) break;
                    let a = !1;
                    for (let t = 0, i = m.length; t < i; t++)
                        if (m[t](e, n, r, !0)) {
                            a = !0;
                            break;
                        }
                    if (a) {
                        ((e.lineMax = n),
                            0 !== e.blkIndent &&
                                (o.push(e.bMarks[n]),
                                h.push(e.bsCount[n]),
                                c.push(e.tShift[n]),
                                u.push(e.sCount[n]),
                                (e.sCount[n] -= e.blkIndent)));
                        break;
                    }
                    (o.push(e.bMarks[n]),
                        h.push(e.bsCount[n]),
                        c.push(e.tShift[n]),
                        u.push(e.sCount[n]),
                        (e.sCount[n] = -1));
                }
                let f = e.blkIndent;
                e.blkIndent = 0;
                let g = e.push("blockquote_open", "blockquote", 1);
                g.markup = ">";
                let b = [t, 0];
                ((g.map = b),
                    e.md.block.tokenize(e, t, n),
                    (e.push("blockquote_close", "blockquote", -1).markup = ">"),
                    (e.lineMax = l),
                    (e.parentType = p),
                    (b[1] = e.line));
                for (let r = 0; r < c.length; r++)
                    ((e.bMarks[r + t] = o[r]),
                        (e.tShift[r + t] = c[r]),
                        (e.sCount[r + t] = u[r]),
                        (e.bsCount[r + t] = h[r]));
                return ((e.blkIndent = f), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "hr",
            function (e, t, r, a) {
                let n = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let i = e.bMarks[t] + e.tShift[t],
                    s = e.src.charCodeAt(i++);
                if (42 !== s && 45 !== s && 95 !== s) return !1;
                let l = 1;
                for (; i < n;) {
                    let t = e.src.charCodeAt(i++);
                    if (t !== s && !eS(t)) return !1;
                    t === s && l++;
                }
                if (l < 3) return !1;
                if (a) return !0;
                e.line = t + 1;
                let o = e.push("hr", "hr", 0);
                return ((o.map = [t, e.line]), (o.markup = Array(l + 1).join(String.fromCharCode(s))), !0);
            },
            ["paragraph", "reference", "blockquote", "list"],
        ],
        [
            "list",
            function (e, t, r, a) {
                let n,
                    i,
                    s,
                    l,
                    o,
                    h,
                    u,
                    c = t,
                    m = !0;
                if (
                    e.sCount[c] - e.blkIndent >= 4 ||
                    (e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
                )
                    return !1;
                let p = !1;
                if (
                    (a && "paragraph" === e.parentType && e.sCount[c] >= e.blkIndent && (p = !0), (u = tr(e, c)) >= 0)
                ) {
                    if (((o = !0), (s = e.bMarks[c] + e.tShift[c]), (h = Number(e.src.slice(s, u - 1))), p && 1 !== h))
                        return !1;
                } else {
                    if (!((u = tt(e, c)) >= 0)) return !1;
                    o = !1;
                }
                if (p && e.skipSpaces(u) >= e.eMarks[c]) return !1;
                if (a) return !0;
                let d = e.src.charCodeAt(u - 1),
                    f = e.tokens.length;
                o
                    ? ((l = e.push("ordered_list_open", "ol", 1)), 1 !== h && (l.attrs = [["start", h]]))
                    : (l = e.push("bullet_list_open", "ul", 1));
                let g = [c, 0];
                ((l.map = g), (l.markup = String.fromCharCode(d)));
                let b = !1,
                    v = e.md.block.ruler.getRules("list"),
                    x = e.parentType;
                for (e.parentType = "list"; c < r;) {
                    let t;
                    ((i = u), (n = e.eMarks[c]));
                    let a = e.sCount[c] + u - (e.bMarks[c] + e.tShift[c]),
                        h = a;
                    for (; i < n;) {
                        let t = e.src.charCodeAt(i);
                        if (9 === t) h += 4 - ((h + e.bsCount[c]) % 4);
                        else if (32 === t) h++;
                        else break;
                        i++;
                    }
                    let p = i;
                    (t = p >= n ? 1 : h - a) > 4 && (t = 1);
                    let f = a + t;
                    (l = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(d);
                    let g = [c, 0];
                    ((l.map = g), o && (l.info = e.src.slice(s, u - 1)));
                    let x = e.tight,
                        y = e.tShift[c],
                        w = e.sCount[c],
                        k = e.listIndent;
                    if (
                        ((e.listIndent = e.blkIndent),
                        (e.blkIndent = f),
                        (e.tight = !0),
                        (e.tShift[c] = p - e.bMarks[c]),
                        (e.sCount[c] = h),
                        p >= n && e.isEmpty(c + 1) ? (e.line = Math.min(e.line + 2, r)) : e.md.block.tokenize(e, c, r),
                        (!e.tight || b) && (m = !1),
                        (b = e.line - c > 1 && e.isEmpty(e.line - 1)),
                        (e.blkIndent = e.listIndent),
                        (e.listIndent = k),
                        (e.tShift[c] = y),
                        (e.sCount[c] = w),
                        (e.tight = x),
                        ((l = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(d)),
                        (c = e.line),
                        (g[1] = c),
                        c >= r || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
                    )
                        break;
                    let A = !1;
                    for (let t = 0, a = v.length; t < a; t++)
                        if (v[t](e, c, r, !0)) {
                            A = !0;
                            break;
                        }
                    if (A) break;
                    if (o) {
                        if ((u = tr(e, c)) < 0) break;
                        s = e.bMarks[c] + e.tShift[c];
                    } else if ((u = tt(e, c)) < 0) break;
                    if (d !== e.src.charCodeAt(u - 1)) break;
                }
                return (
                    ((l = o ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup =
                        String.fromCharCode(d)),
                    (g[1] = c),
                    (e.line = c),
                    (e.parentType = x),
                    m &&
                        (function (e, t) {
                            let r = e.level + 2;
                            for (let a = t + 2, n = e.tokens.length - 2; a < n; a++)
                                e.tokens[a].level === r &&
                                    "paragraph_open" === e.tokens[a].type &&
                                    ((e.tokens[a + 2].hidden = !0), (e.tokens[a].hidden = !0), (a += 2));
                        })(e, f),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "reference",
            function (e, t, r, a) {
                let n,
                    i = e.bMarks[t] + e.tShift[t],
                    s = e.eMarks[t],
                    l = t + 1;
                if (e.sCount[t] - e.blkIndent >= 4 || 91 !== e.src.charCodeAt(i)) return !1;
                function o(t) {
                    let r = e.lineMax;
                    if (t >= r || e.isEmpty(t)) return null;
                    let a = !1;
                    if ((e.sCount[t] - e.blkIndent > 3 && (a = !0), e.sCount[t] < 0 && (a = !0), !a)) {
                        let a = e.md.block.ruler.getRules("reference"),
                            n = e.parentType;
                        e.parentType = "reference";
                        let i = !1;
                        for (let n = 0, s = a.length; n < s; n++)
                            if (a[n](e, t, r, !0)) {
                                i = !0;
                                break;
                            }
                        if (((e.parentType = n), i)) return null;
                    }
                    let n = e.bMarks[t] + e.tShift[t],
                        i = e.eMarks[t];
                    return e.src.slice(n, i + 1);
                }
                let h = e.src.slice(i, s + 1);
                s = h.length;
                let u = -1;
                for (i = 1; i < s; i++) {
                    let e = h.charCodeAt(i);
                    if (91 === e) return !1;
                    if (93 === e) {
                        u = i;
                        break;
                    }
                    if (10 === e) {
                        let e = o(l);
                        null !== e && ((h += e), (s = h.length), l++);
                    } else if (92 === e && ++i < s && 10 === h.charCodeAt(i)) {
                        let e = o(l);
                        null !== e && ((h += e), (s = h.length), l++);
                    }
                }
                if (u < 0 || 58 !== h.charCodeAt(u + 1)) return !1;
                for (i = u + 2; i < s; i++) {
                    let e = h.charCodeAt(i);
                    if (10 === e) {
                        let e = o(l);
                        null !== e && ((h += e), (s = h.length), l++);
                    } else if (eS(e));
                    else break;
                }
                let c = e.md.helpers.parseLinkDestination(h, i, s);
                if (!c.ok) return !1;
                let m = e.md.normalizeLink(c.str);
                if (!e.md.validateLink(m)) return !1;
                let p = (i = c.pos),
                    d = l,
                    f = i;
                for (; i < s; i++) {
                    let e = h.charCodeAt(i);
                    if (10 === e) {
                        let e = o(l);
                        null !== e && ((h += e), (s = h.length), l++);
                    } else if (eS(e));
                    else break;
                }
                let g = e.md.helpers.parseLinkTitle(h, i, s);
                for (; g.can_continue;) {
                    let t = o(l);
                    if (null === t) break;
                    ((h += t), (i = s), (s = h.length), l++, (g = e.md.helpers.parseLinkTitle(h, i, s, g)));
                }
                for (
                    i < s && f !== i && g.ok ? ((n = g.str), (i = g.pos)) : ((n = ""), (i = p), (l = d));
                    i < s && eS(h.charCodeAt(i));
                )
                    i++;
                if (i < s && 10 !== h.charCodeAt(i) && n) for (n = "", i = p, l = d; i < s && eS(h.charCodeAt(i));) i++;
                if (i < s && 10 !== h.charCodeAt(i)) return !1;
                let b = eB(h.slice(1, u));
                if (!b) return !1;
                if (a) return !0;
                (void 0 === e.env.references && (e.env.references = {}),
                    void 0 === e.env.references[b] && (e.env.references[b] = { title: n, href: m }));
                let v = e.push("reference_definition", "", 0);
                ((v.map = [t, l]), (v.hidden = !0));
                let x = Object.create(null);
                return ((x.label = b), (v.meta = x), (e.line = l), !0);
            },
        ],
        [
            "html_block",
            function (e, t, r, a) {
                let n = e.bMarks[t] + e.tShift[t],
                    i = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || 60 !== e.src.charCodeAt(n)) return !1;
                let s = e.src.slice(n, i),
                    l = 0;
                for (; l < tl.length && !tl[l][0].test(s); l++);
                if (l === tl.length) return !1;
                if (a) return tl[l][2];
                let o = t + 1,
                    h = tl[l][1].test("");
                if (!tl[l][1].test(s)) {
                    for (; o < r && (!(e.sCount[o] < e.blkIndent) || (!h && e.isEmpty(o))); o++)
                        if (
                            ((n = e.bMarks[o] + e.tShift[o]),
                            (i = e.eMarks[o]),
                            (s = e.src.slice(n, i)),
                            tl[l][1].test(s))
                        ) {
                            0 !== s.length && o++;
                            break;
                        }
                }
                e.line = o;
                let u = e.push("html_block", "", 0);
                return ((u.map = [t, o]), (u.content = e.getLines(t, o, e.blkIndent, !0)), !0);
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "heading",
            function (e, t, r, a) {
                let n = e.bMarks[t] + e.tShift[t],
                    i = e.eMarks[t];
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let s = e.src.charCodeAt(n);
                if (35 !== s || n >= i) return !1;
                let l = 1;
                for (s = e.src.charCodeAt(++n); 35 === s && n < i && l <= 6;) (l++, (s = e.src.charCodeAt(++n)));
                if (l > 6 || (n < i && !eS(s))) return !1;
                if (a) return !0;
                i = e.skipSpacesBack(i, n);
                let o = e.skipCharsBack(i, 35, n);
                (o > n && eS(e.src.charCodeAt(o - 1)) && (i = o), (e.line = t + 1));
                let h = e.push("heading_open", `h${l}`, 1);
                ((h.markup = "########".slice(0, l)), (h.map = [t, e.line]));
                let u = e.push("inline", "", 0);
                return (
                    (u.content = eI(e.src.slice(n, i))),
                    (u.map = [t, e.line]),
                    (u.children = []),
                    (e.push("heading_close", `h${l}`, -1).markup = "########".slice(0, l)),
                    !0
                );
            },
            ["paragraph", "reference", "blockquote"],
        ],
        [
            "lheading",
            function (e, t, r) {
                let a,
                    n = e.md.block.ruler.getRules("paragraph");
                if (e.sCount[t] - e.blkIndent >= 4) return !1;
                let i = e.parentType;
                e.parentType = "paragraph";
                let s = 0,
                    l = t + 1;
                for (; l < r && !e.isEmpty(l); l++) {
                    if (e.sCount[l] - e.blkIndent > 3) continue;
                    if (e.sCount[l] >= e.blkIndent) {
                        let t = e.bMarks[l] + e.tShift[l],
                            r = e.eMarks[l];
                        if (
                            t < r &&
                            (45 === (a = e.src.charCodeAt(t)) || 61 === a) &&
                            ((t = e.skipChars(t, a)), (t = e.skipSpaces(t)) >= r)
                        ) {
                            s = 61 === a ? 1 : 2;
                            break;
                        }
                    }
                    if (e.sCount[l] < 0) continue;
                    let t = !1;
                    for (let a = 0, i = n.length; a < i; a++)
                        if (n[a](e, l, r, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                if (!s) return ((e.parentType = i), !1);
                let o = eI(e.getLines(t, l, e.blkIndent, !1));
                e.line = l + 1;
                let h = e.push("heading_open", `h${s}`, 1);
                ((h.markup = String.fromCharCode(a)), (h.map = [t, e.line]));
                let u = e.push("inline", "", 0);
                return (
                    (u.content = o),
                    (u.map = [t, e.line - 1]),
                    (u.children = []),
                    (e.push("heading_close", `h${s}`, -1).markup = String.fromCharCode(a)),
                    (e.parentType = i),
                    !0
                );
            },
        ],
        [
            "paragraph",
            function (e, t, r) {
                let a = e.md.block.ruler.getRules("paragraph"),
                    n = e.parentType,
                    i = t + 1;
                for (e.parentType = "paragraph"; i < r && !e.isEmpty(i); i++) {
                    if (e.sCount[i] - e.blkIndent > 3 || e.sCount[i] < 0) continue;
                    let t = !1;
                    for (let n = 0, s = a.length; n < s; n++)
                        if (a[n](e, i, r, !0)) {
                            t = !0;
                            break;
                        }
                    if (t) break;
                }
                let s = eI(e.getLines(t, i, e.blkIndent, !1));
                ((e.line = i), (e.push("paragraph_open", "p", 1).map = [t, e.line]));
                let l = e.push("inline", "", 0);
                return (
                    (l.content = s),
                    (l.map = [t, e.line]),
                    (l.children = []),
                    e.push("paragraph_close", "p", -1),
                    (e.parentType = n),
                    !0
                );
            },
        ],
    ],
    th = class {
        constructor() {
            (eP(this, "ruler", new e$()), eP(this, "State", e8));
            for (let e = 0; e < to.length; e++) this.ruler.push(to[e][0], to[e][1], { alt: (to[e][2] || []).slice() });
        }
        tokenize(e, t, r) {
            let a = this.ruler.getRules(""),
                n = a.length,
                i = e.md.options.maxNesting,
                s = t,
                l = !1;
            for (; s < r && ((e.line = s = e.skipEmptyLines(s)), !(s >= r) && !(e.sCount[s] < e.blkIndent));) {
                if (e.level >= i) {
                    e.line = r;
                    break;
                }
                let t = e.line,
                    o = !1;
                for (let i = 0; i < n; i++)
                    if ((o = a[i](e, s, r, !1))) {
                        if (t >= e.line) throw Error("block rule didn't increment state.line");
                        break;
                    }
                if (!o) throw Error("none of the block rules matched");
                ((e.tight = !l),
                    e.isEmpty(e.line - 1) && (l = !0),
                    (s = e.line) < r && e.isEmpty(s) && ((l = !0), (e.line = ++s)));
            }
        }
        parse(e, t, r, a) {
            if (!e) return;
            let n = new this.State(e, t, r, a);
            this.tokenize(n, n.line, n.lineMax);
        }
    },
    tu = class {
        constructor(e, t, r, a) {
            (eP(this, "pos", 0),
                eP(this, "level", 0),
                eP(this, "pending", ""),
                eP(this, "pendingLevel", 0),
                eP(this, "cache", {}),
                eP(this, "backticks", {}),
                eP(this, "backticksScanned", !1),
                eP(this, "linkLevel", 0),
                eP(this, "delimiters", []),
                eP(this, "_prev_delimiters", []),
                eP(this, "Token", eU),
                (this.src = e),
                (this.env = r),
                (this.md = t),
                (this.tokens = a),
                (this.tokens_meta = Array(a.length)),
                (this.posMax = this.src.length));
        }
        pushPending() {
            let e = new eU("text", "", 0);
            return (
                (e.content = this.pending), (e.level = this.pendingLevel), this.tokens.push(e), (this.pending = ""), e
            );
        }
        push(e, t, r) {
            let a;
            this.pending && this.pushPending();
            let n = new eU(e, t, r);
            return (
                r < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
                (n.level = this.level),
                r > 0 &&
                    (this.level++,
                    this._prev_delimiters.push(this.delimiters),
                    (this.delimiters = []),
                    (a = { delimiters: this.delimiters })),
                (this.pendingLevel = this.level),
                this.tokens.push(n),
                this.tokens_meta.push(a),
                n
            );
        }
        scanDelims(e, t) {
            let r,
                a = this.posMax,
                n = this.src.charCodeAt(e);
            if (0 === e) r = 32;
            else if (1 === e) (63488 & (r = this.src.charCodeAt(0))) == 55296 && (r = 65533);
            else if ((64512 & (r = this.src.charCodeAt(e - 1))) == 56320) {
                let t = this.src.charCodeAt(e - 2);
                r = (64512 & t) == 55296 ? 65536 + ((t - 55296) << 10) + (r - 56320) : 65533;
            } else (64512 & r) == 55296 && (r = 65533);
            let i = e;
            for (; i < a && this.src.charCodeAt(i) === n;) i++;
            let s = i - e,
                l = i < a ? this.src.charCodeAt(i) : 32;
            if ((64512 & l) == 55296) {
                let e = this.src.charCodeAt(i + 1);
                l = (64512 & e) == 56320 ? 65536 + ((l - 55296) << 10) + (e - 56320) : 65533;
            } else (64512 & l) == 56320 && (l = 65533);
            let o = eF(r) || eE(r),
                h = eF(l) || eE(l),
                u = eM(r),
                c = eM(l),
                m = !c && (!h || u || o),
                p = !u && (!o || c || h);
            return { can_open: m && (t || !p || o), can_close: p && (t || !m || h), length: s };
        }
    },
    tc = [];
for (let e = 0; e < 256; e++) tc.push(0);
function tm(e, t) {
    let r,
        a = [],
        n = t.length;
    for (let i = 0; i < n; i++) {
        let n = t[i];
        if (126 !== n.marker || -1 === n.end) continue;
        let s = t[n.end];
        (((r = e.tokens[n.token]).type = "s_open"),
            (r.tag = "s"),
            (r.nesting = 1),
            (r.markup = "~~"),
            (r.content = ""),
            ((r = e.tokens[s.token]).type = "s_close"),
            (r.tag = "s"),
            (r.nesting = -1),
            (r.markup = "~~"),
            (r.content = ""),
            "text" === e.tokens[s.token - 1].type && "~" === e.tokens[s.token - 1].content && a.push(s.token - 1));
    }
    for (; a.length;) {
        let t = a.pop(),
            n = t + 1;
        for (; n < e.tokens.length && "s_close" === e.tokens[n].type;) n++;
        t !== --n && ((r = e.tokens[n]), (e.tokens[n] = e.tokens[t]), (e.tokens[t] = r));
    }
}
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
    tc[e.charCodeAt(0)] = 1;
});
function tp(e, t) {
    let r = t.length;
    for (let a = r - 1; a >= 0; a--) {
        let r = t[a];
        if ((95 !== r.marker && 42 !== r.marker) || -1 === r.end) continue;
        let n = t[r.end],
            i =
                a > 0 &&
                t[a - 1].end === r.end + 1 &&
                t[a - 1].marker === r.marker &&
                t[a - 1].token === r.token - 1 &&
                t[r.end + 1].token === n.token + 1,
            s = String.fromCharCode(r.marker),
            l = e.tokens[r.token];
        ((l.type = i ? "strong_open" : "em_open"),
            (l.tag = i ? "strong" : "em"),
            (l.nesting = 1),
            (l.markup = i ? s + s : s),
            (l.content = ""));
        let o = e.tokens[n.token];
        ((o.type = i ? "strong_close" : "em_close"),
            (o.tag = i ? "strong" : "em"),
            (o.nesting = -1),
            (o.markup = i ? s + s : s),
            (o.content = ""),
            i && ((e.tokens[t[a - 1].token].content = ""), (e.tokens[t[r.end + 1].token].content = ""), a--));
    }
}
var td =
        /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    tf = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
    tg = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    tb = /^&([a-z][a-z0-9]{1,31});/i;
function tv(e) {
    let t = {},
        r = e.length;
    if (!r) return;
    let a = 0,
        n = -2,
        i = [];
    for (let s = 0; s < r; s++) {
        let r = e[s];
        if (
            (i.push(0),
            (e[a].marker !== r.marker || n !== r.token - 1) && (a = s),
            (n = r.token),
            (r.length = r.length || 0),
            !r.close)
        )
            continue;
        t.hasOwnProperty(r.marker) || (t[r.marker] = [-1, -1, -1, -1, -1, -1]);
        let l = t[r.marker][3 * !!r.open + (r.length % 3)],
            o = a - i[a] - 1,
            h = o;
        for (; o > l; o -= i[o] + 1) {
            let t = e[o];
            if (t.marker === r.marker && t.open && t.end < 0) {
                let a = !1;
                if (
                    ((t.close || r.open) &&
                        (t.length + r.length) % 3 == 0 &&
                        (t.length % 3 != 0 || r.length % 3 != 0) &&
                        (a = !0),
                    !a)
                ) {
                    let a = o > 0 && !e[o - 1].open ? i[o - 1] + 1 : 0;
                    ((i[s] = s - o + a), (i[o] = a), (r.open = !1), (t.end = s), (t.close = !1), (h = -1), (n = -2));
                    break;
                }
            }
        }
        -1 !== h && (t[r.marker][3 * !!r.open + ((r.length || 0) % 3)] = h);
    }
}
var tx = [
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
                var r, a;
                if (!e.md.options.linkify || e.linkLevel > 0) return !1;
                let n = e.pos;
                if (
                    n + 3 > e.posMax ||
                    58 !== e.src.charCodeAt(n) ||
                    47 !== e.src.charCodeAt(n + 1) ||
                    47 !== e.src.charCodeAt(n + 2)
                )
                    return !1;
                let i = n - Math.min(10, e.pending.length, n),
                    s = n;
                for (
                    ;
                    s > i &&
                    (((r = e.src.charCodeAt(s - 1)) >= 65 && r <= 90) ||
                        (r >= 97 && r <= 122) ||
                        (r >= 48 && r <= 57) ||
                        43 === r ||
                        45 === r ||
                        46 === r);
                )
                    s--;
                if (s === n || !(((a = e.src.charCodeAt(s)) >= 65 && a <= 90) || (a >= 97 && a <= 122))) return !1;
                let l = n - s,
                    o = e.md.linkify.matchAtStart(e.src.slice(s));
                if (!o) return !1;
                let h = o.url;
                if (h.length <= l) return !1;
                let u = h.length;
                for (; u > 0 && 42 === h.charCodeAt(u - 1);) u--;
                u !== h.length && (h = h.slice(0, u));
                let c = e.md.normalizeLink(h);
                if (!e.md.validateLink(c)) return !1;
                if (!t) {
                    e.pending = e.pending.slice(0, -l);
                    let t = e.push("link_open", "a", 1);
                    ((t.attrs = [["href", c]]),
                        (t.markup = "linkify"),
                        (t.info = "auto"),
                        (e.push("text", "", 0).content = e.md.normalizeLinkText(h)));
                    let r = e.push("link_close", "a", -1);
                    ((r.markup = "linkify"), (r.info = "auto"));
                }
                return ((e.pos += h.length - l), !0);
            },
        ],
        [
            "newline",
            function (e, t) {
                let r = e.pos;
                if (10 !== e.src.charCodeAt(r)) return !1;
                let a = e.pending.length - 1,
                    n = e.posMax;
                if (!t)
                    if (a >= 0 && 32 === e.pending.charCodeAt(a))
                        if (a >= 1 && 32 === e.pending.charCodeAt(a - 1)) {
                            let t = a - 1;
                            for (; t >= 1 && 32 === e.pending.charCodeAt(t - 1);) t--;
                            ((e.pending = e.pending.slice(0, t)), e.push("hardbreak", "br", 0));
                        } else ((e.pending = e.pending.slice(0, -1)), e.push("softbreak", "br", 0));
                    else e.push("softbreak", "br", 0);
                for (r++; r < n && eS(e.src.charCodeAt(r));) r++;
                return ((e.pos = r), !0);
            },
        ],
        [
            "escape",
            function (e, t) {
                let r = e.pos,
                    a = e.posMax;
                if (92 !== e.src.charCodeAt(r) || ++r >= a) return !1;
                let n = e.src.charCodeAt(r);
                if (10 === n) {
                    for (t || e.push("hardbreak", "br", 0), r++; r < a && eS((n = e.src.charCodeAt(r)));) r++;
                    return ((e.pos = r), !0);
                }
                if (32 === n) {
                    if (!t) {
                        let t = e.push("text_special", "", 0);
                        ((t.content = "\\"), (t.markup = "\\"), (t.info = "escape"));
                    }
                    return ((e.pos = r), !0);
                }
                let i = e.src[r];
                if (n >= 55296 && n <= 56319 && r + 1 < a) {
                    let t = e.src.charCodeAt(r + 1);
                    t >= 56320 && t <= 57343 && ((i += e.src[r + 1]), r++);
                }
                let s = "\\" + i;
                if (!t) {
                    let t = e.push("text_special", "", 0);
                    (n < 256 && 0 !== tc[n] ? (t.content = i) : (t.content = s), (t.markup = s), (t.info = "escape"));
                }
                return ((e.pos = r + 1), !0);
            },
        ],
        [
            "backticks",
            function (e, t) {
                var r;
                let a = e.pos;
                if (96 !== e.src.charCodeAt(a)) return !1;
                let n = e.posMax,
                    i = a + 1;
                for (; i < n && 96 === e.src.charCodeAt(i);) i++;
                let s = e.src.slice(a, i),
                    l = s.length;
                if (
                    (e.backticksScanned ||
                        ((e.backticks = (function (e) {
                            let t = {},
                                r = 0;
                            for (; -1 !== (r = e.indexOf("`", r));) {
                                let a = r;
                                for (; 96 === e.charCodeAt(++r););
                                t[r - a] = a;
                            }
                            return t;
                        })(e.src)),
                        (e.backticksScanned = !0)),
                    (null != (r = e.backticks[l]) ? r : -1) >= i)
                ) {
                    let r,
                        a = i;
                    for (; -1 !== (r = e.src.indexOf("`", a)) && r < n;) {
                        for (a = r + 1; 96 === e.src.charCodeAt(a);) a++;
                        if (a > n) break;
                        if (a - r === l) {
                            if (!t) {
                                let t = e.push("code_inline", "code", 0);
                                t.markup = s;
                                let a = e.src.slice(i, r).replace(/\n/g, " ");
                                (a.startsWith(" ") && a.endsWith(" ") && /[^ ]/.test(a) && (a = a.slice(1, -1)),
                                    (t.content = a));
                            }
                            return ((e.pos = a), !0);
                        }
                    }
                }
                return (t || (e.pending += s), (e.pos = i), !0);
            },
        ],
        [
            "strikethrough",
            function (e, t) {
                let r = e.pos,
                    a = e.src.charCodeAt(r);
                if (t || 126 !== a) return !1;
                let n = e.scanDelims(e.pos, !0),
                    i = n.length,
                    s = String.fromCharCode(a);
                if (i < 2) return !1;
                i % 2 && ((e.push("text", "", 0).content = s), i--);
                for (let t = 0; t < i; t += 2)
                    ((e.push("text", "", 0).content = s + s),
                        e.delimiters.push({
                            marker: a,
                            length: 0,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: n.can_open,
                            close: n.can_close,
                        }));
                return ((e.pos += n.length), !0);
            },
        ],
        [
            "emphasis",
            function (e, t) {
                let r = e.pos,
                    a = e.src.charCodeAt(r);
                if (t || (95 !== a && 42 !== a)) return !1;
                let n = e.scanDelims(e.pos, 42 === a);
                for (let t = 0; t < n.length; t++)
                    ((e.push("text", "", 0).content = String.fromCharCode(a)),
                        e.delimiters.push({
                            marker: a,
                            length: n.length,
                            token: e.tokens.length - 1,
                            end: -1,
                            open: n.can_open,
                            close: n.can_close,
                        }));
                return ((e.pos += n.length), !0);
            },
        ],
        [
            "link",
            function (e, t) {
                let r,
                    a,
                    n,
                    i,
                    s = "",
                    l = "",
                    o = e.pos,
                    h = !0;
                if (91 !== e.src.charCodeAt(e.pos)) return !1;
                let u = e.pos,
                    c = e.posMax,
                    m = e.pos + 1,
                    p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
                if (p < 0) return !1;
                let d = p + 1;
                if (d < c && 40 === e.src.charCodeAt(d)) {
                    for (h = !1, d++; d < c && (eS((r = e.src.charCodeAt(d))) || 10 === r); d++);
                    if (d >= c) return !1;
                    if (((o = d), (n = e.md.helpers.parseLinkDestination(e.src, d, e.posMax)).ok)) {
                        for (
                            s = e.md.normalizeLink(n.str), e.md.validateLink(s) ? (d = n.pos) : (s = ""), o = d;
                            d < c && (eS((r = e.src.charCodeAt(d))) || 10 === r);
                            d++
                        );
                        if (((n = e.md.helpers.parseLinkTitle(e.src, d, e.posMax)), d < c && o !== d && n.ok))
                            for (l = n.str, d = n.pos; d < c && (eS((r = e.src.charCodeAt(d))) || 10 === r); d++);
                    }
                    ((d >= c || 41 !== e.src.charCodeAt(d)) && (h = !0), d++);
                }
                if (h) {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (d < c && 91 === e.src.charCodeAt(d)
                            ? ((o = d + 1),
                              (d = e.md.helpers.parseLinkLabel(e, d)) >= 0 ? (a = e.src.slice(o, d++)) : (d = p + 1))
                            : (d = p + 1),
                        a || (a = e.src.slice(m, p)),
                        (a = eB(a)),
                        !(i = e.env.references[a]))
                    )
                        return ((e.pos = u), !1);
                    ((s = i.href), (l = i.title));
                }
                if (!t) {
                    ((e.pos = m), (e.posMax = p));
                    let t = e.push("link_open", "a", 1),
                        r = [["href", s]];
                    if (((t.attrs = r), l && r.push(["title", l]), a)) {
                        let e = Object.create(null);
                        ((e.label = a), (t.meta = e));
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
                    a,
                    n,
                    i,
                    s,
                    l,
                    o,
                    h,
                    u = "",
                    c = e.pos,
                    m = e.posMax;
                if (33 !== e.src.charCodeAt(e.pos) || 91 !== e.src.charCodeAt(e.pos + 1)) return !1;
                let p = e.pos + 2,
                    d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
                if (d < 0) return !1;
                if ((i = d + 1) < m && 40 === e.src.charCodeAt(i)) {
                    for (i++; i < m && (eS((r = e.src.charCodeAt(i))) || 10 === r); i++);
                    if (i >= m) return !1;
                    for (
                        h = i,
                            (l = e.md.helpers.parseLinkDestination(e.src, i, e.posMax)).ok &&
                                ((u = e.md.normalizeLink(l.str)), e.md.validateLink(u) ? (i = l.pos) : (u = "")),
                            h = i;
                        i < m && (eS((r = e.src.charCodeAt(i))) || 10 === r);
                        i++
                    );
                    if (((l = e.md.helpers.parseLinkTitle(e.src, i, e.posMax)), i < m && h !== i && l.ok))
                        for (o = l.str, i = l.pos; i < m && (eS((r = e.src.charCodeAt(i))) || 10 === r); i++);
                    else o = "";
                    if (i >= m || 41 !== e.src.charCodeAt(i)) return ((e.pos = c), !1);
                    i++;
                } else {
                    if (void 0 === e.env.references) return !1;
                    if (
                        (i < m && 91 === e.src.charCodeAt(i)
                            ? ((h = i + 1),
                              (i = e.md.helpers.parseLinkLabel(e, i)) >= 0 ? (n = e.src.slice(h, i++)) : (i = d + 1))
                            : (i = d + 1),
                        n || (n = e.src.slice(p, d)),
                        (n = eB(n)),
                        !(s = e.env.references[n]))
                    )
                        return ((e.pos = c), !1);
                    ((u = s.href), (o = s.title));
                }
                if (!t) {
                    a = e.src.slice(p, d);
                    let t = [];
                    e.md.inline.parse(a, e.md, e.env, t);
                    let r = e.push("image", "img", 0),
                        i = [
                            ["src", u],
                            ["alt", ""],
                        ];
                    if (((r.attrs = i), (r.children = t), (r.content = a), o && i.push(["title", o]), n)) {
                        let e = Object.create(null);
                        ((e.label = n), (r.meta = e));
                    }
                }
                return ((e.pos = i), (e.posMax = m), !0);
            },
        ],
        [
            "autolink",
            function (e, t) {
                let r = e.pos;
                if (60 !== e.src.charCodeAt(r)) return !1;
                let a = e.pos,
                    n = e.posMax;
                for (;;) {
                    if (++r >= n) return !1;
                    let t = e.src.charCodeAt(r);
                    if (60 === t) return !1;
                    if (62 === t) break;
                }
                let i = e.src.slice(a + 1, r);
                if (tf.test(i)) {
                    let r = e.md.normalizeLink(i);
                    if (!e.md.validateLink(r)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", r]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(i)));
                        let a = e.push("link_close", "a", -1);
                        ((a.markup = "autolink"), (a.info = "auto"));
                    }
                    return ((e.pos += i.length + 2), !0);
                }
                if (td.test(i)) {
                    let r = e.md.normalizeLink(`mailto:${i}`);
                    if (!e.md.validateLink(r)) return !1;
                    if (!t) {
                        let t = e.push("link_open", "a", 1);
                        ((t.attrs = [["href", r]]),
                            (t.markup = "autolink"),
                            (t.info = "auto"),
                            (e.push("text", "", 0).content = e.md.normalizeLinkText(i)));
                        let a = e.push("link_close", "a", -1);
                        ((a.markup = "autolink"), (a.info = "auto"));
                    }
                    return ((e.pos += i.length + 2), !0);
                }
                return !1;
            },
        ],
        [
            "html_inline",
            function (e, t) {
                let r;
                if (!e.md.options.html) return !1;
                let a = e.posMax,
                    n = e.pos;
                if (60 !== e.src.charCodeAt(n) || n + 2 >= a) return !1;
                let i = e.src.charCodeAt(n + 1);
                if (33 !== i && 63 !== i && 47 !== i && (!((r = 32 | i) >= 97) || !(r <= 122))) return !1;
                let s = e.src.slice(n).match(ti);
                if (!s) return !1;
                if (!t) {
                    var l, o;
                    let t = e.push("html_inline", "", 0);
                    ((t.content = s[0]),
                        (l = t.content),
                        /^<a[>\s]/i.test(l) && e.linkLevel++,
                        (o = t.content),
                        /^<\/a\s*>/i.test(o) && e.linkLevel--);
                }
                return ((e.pos += s[0].length), !0);
            },
        ],
        [
            "entity",
            function (e, t) {
                let r = e.pos,
                    a = e.posMax;
                if (38 !== e.src.charCodeAt(r) || r + 1 >= a) return !1;
                if (35 === e.src.charCodeAt(r + 1)) {
                    let a = e.src.slice(r).match(tg);
                    if (a) {
                        if (!t) {
                            let t = "x" === a[1][0].toLowerCase() ? parseInt(a[1].slice(1), 16) : parseInt(a[1], 10),
                                r = e.push("text_special", "", 0);
                            ((r.content = ef(t) ? eg(t) : eg(65533)), (r.markup = a[0]), (r.info = "entity"));
                        }
                        return ((e.pos += a[0].length), !0);
                    }
                } else {
                    let a = e.src.slice(r).match(tb);
                    if (a) {
                        let r = $(a[0]);
                        if (r !== a[0]) {
                            if (!t) {
                                let t = e.push("text_special", "", 0);
                                ((t.content = r), (t.markup = a[0]), (t.info = "entity"));
                            }
                            return ((e.pos += a[0].length), !0);
                        }
                    }
                }
                return !1;
            },
        ],
    ],
    ty = [
        [
            "balance_pairs",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tv(e.delimiters);
                for (let e = 0; e < r; e++) {
                    var a;
                    let r = null == (a = t[e]) ? void 0 : a.delimiters;
                    r && tv(r);
                }
            },
        ],
        [
            "strikethrough",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tm(e, e.delimiters);
                for (let n = 0; n < r; n++) {
                    var a;
                    let r = null == (a = t[n]) ? void 0 : a.delimiters;
                    r && tm(e, r);
                }
            },
        ],
        [
            "emphasis",
            function (e) {
                let t = e.tokens_meta,
                    r = e.tokens_meta.length;
                tp(e, e.delimiters);
                for (let n = 0; n < r; n++) {
                    var a;
                    let r = null == (a = t[n]) ? void 0 : a.delimiters;
                    r && tp(e, r);
                }
            },
        ],
        [
            "fragments_join",
            function (e) {
                let t,
                    r,
                    a = 0,
                    n = e.tokens,
                    i = e.tokens.length;
                for (t = r = 0; t < i; t++)
                    (n[t].nesting < 0 && a--,
                        (n[t].level = a),
                        n[t].nesting > 0 && a++,
                        "text" === n[t].type && t + 1 < i && "text" === n[t + 1].type
                            ? (n[t + 1].content = n[t].content + n[t + 1].content)
                            : (t !== r && (n[r] = n[t]), r++));
                t !== r && (n.length = r);
            },
        ],
    ],
    tw = class {
        constructor() {
            (eP(this, "ruler", new e$()), eP(this, "ruler2", new e$()), eP(this, "State", tu));
            for (let e = 0; e < tx.length; e++) this.ruler.push(tx[e][0], tx[e][1]);
            for (let e = 0; e < ty.length; e++) this.ruler2.push(ty[e][0], ty[e][1]);
        }
        skipToken(e) {
            let t = e.pos,
                r = this.ruler.getRules(""),
                a = r.length,
                n = e.md.options.maxNesting,
                i = e.cache;
            if (void 0 !== i[t]) {
                e.pos = i[t];
                return;
            }
            let s = !1;
            if (e.level < n) {
                for (let n = 0; n < a; n++)
                    if ((e.level++, (s = r[n](e, !0)), e.level--, s)) {
                        if (t >= e.pos) throw Error("inline rule didn't increment state.pos");
                        break;
                    }
            } else e.pos = e.posMax;
            (!s && e.pos++, (i[t] = e.pos));
        }
        tokenize(e) {
            let t = this.ruler.getRules(""),
                r = t.length,
                a = e.posMax,
                n = e.md.options.maxNesting;
            for (; e.pos < a;) {
                let i = e.pos,
                    s = !1;
                if (e.level < n) {
                    for (let a = 0; a < r; a++)
                        if ((s = t[a](e, !1))) {
                            if (i >= e.pos) throw Error("inline rule didn't increment state.pos");
                            break;
                        }
                }
                if (s) {
                    if (e.pos >= a) break;
                    continue;
                }
                e.pending += e.src[e.pos++];
            }
            e.pending && e.pushPending();
        }
        parse(e, t, r, a) {
            let n = new this.State(e, t, r, a);
            this.tokenize(n);
            let i = this.ruler2.getRules(""),
                s = i.length;
            for (let e = 0; e < s; e++) i[e](n);
        }
    },
    tk = {
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
    tA = /^(vbscript|javascript|file|data):/,
    tC = /^data:image\/(gif|png|jpeg|webp);/,
    tR = ["http:", "https:", "mailto:"],
    t_ = class {
        validateLink(e) {
            let t = e.trim().toLowerCase();
            return !tA.test(t) || tC.test(t);
        }
        normalizeLink(e) {
            let t = T(e, !0);
            if (t.hostname && (!t.protocol || tR.indexOf(t.protocol) >= 0))
                try {
                    var r;
                    ((r = t.hostname),
                        (t.hostname = ei(r, function (e) {
                            return Q.test(e) ? "xn--" + eh(e) : e;
                        })));
                } catch (e) {}
            return (
                t.auth && (t.auth = x(t.auth)),
                t.hostname && (t.hostname = x(t.hostname)),
                t.pathname && (t.pathname = x(t.pathname)),
                t.search && (t.search = x(t.search)),
                t.hash && (t.hash = x(t.hash)),
                y(t)
            );
        }
        normalizeLinkText(e) {
            let t = T(e, !0);
            if (t.hostname && (!t.protocol || tR.indexOf(t.protocol) >= 0))
                try {
                    var r;
                    ((r = t.hostname),
                        (t.hostname = ei(r, function (e) {
                            return K.test(e) ? eo(e.slice(4).toLowerCase()) : e;
                        })));
                } catch (e) {}
            return g(y(t), g.defaultChars + "%");
        }
        constructor(...e) {
            (eP(this, "inline", new tw()),
                eP(this, "block", new th()),
                eP(this, "core", new e2()),
                eP(this, "renderer", new eV()),
                eP(this, "linkify", new Y()),
                eP(this, "utils", em),
                eP(this, "helpers", Object.assign({}, eH)));
            let [t, r] = e;
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
                if (!(t = tk[e])) throw Error(`Wrong 'markdown-it' preset "${e}", check name`);
            } else t = e;
            if (!t) throw Error("Wrong `markdown-it` preset, can't be empty");
            t.options && (this.options = { ...t.options });
            let r = t.components;
            if (r) {
                var a;
                ["core", "block", "inline"].forEach((e) => {
                    var t;
                    let a = null == (t = r[e]) ? void 0 : t.rules;
                    a && this[e].ruler.enableOnly(a);
                });
                let e = null == (a = r.inline) ? void 0 : a.rules2;
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
            let a = e.filter((e) => 0 > r.indexOf(e));
            if (a.length && !t) throw Error(`MarkdownIt. Failed to enable unknown rule(s): ${a}`);
            return this;
        }
        disable(e, t = !1) {
            let r = [];
            (Array.isArray(e) || (e = [e]),
                ["core", "block", "inline"].forEach((t) => {
                    r = r.concat(this[t].ruler.disable(e, !0));
                }),
                (r = r.concat(this.inline.ruler2.disable(e, !0))));
            let a = e.filter((e) => 0 > r.indexOf(e));
            if (a.length && !t) throw Error(`MarkdownIt. Failed to disable unknown rule(s): ${a}`);
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
(eP(t_, "Token", eU),
    eP(t_, "Ruler", e$),
    eP(t_, "Renderer", eV),
    eP(t_, "ParserCore", e2),
    eP(t_, "StateCore", eZ),
    eP(t_, "ParserBlock", th),
    eP(t_, "StateBlock", e8),
    eP(t_, "ParserInline", tw),
    eP(t_, "StateInline", tu));
var tD = ep(t_);
