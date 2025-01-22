r.d(n, {
    MO: function () {
        return h;
    },
    yx: function () {
        return l;
    },
    zq: function () {
        return d;
    }
});
var i = r(757143);
let a = /\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu,
    o = ['͏', '឴', '឵', 'ᅠ', 'ㅤ', 'ﾠ'],
    s = RegExp(''.concat(a.source, '|').concat(o.join('|')), 'gu');
function l(e) {
    return e.replace(s, '');
}
let u = [
    {
        character: 'h',
        matcher: c(['H', 'һ', 'հ', 'Ꮒ', 'ℎ', '\uD835\uDC21', '\uD835\uDC89', '\uD835\uDCBD', '\uD835\uDCF1', '\uD835\uDD25', '\uD835\uDD59', '\uD835\uDD8D', '\uD835\uDDC1', '\uD835\uDDF5', '\uD835\uDE29', '\uD835\uDE5D', '\uD835\uDE91', 'ｈ'])
    },
    {
        character: 't',
        matcher: c(['T', '\uD835\uDC2D', '\uD835\uDC61', '\uD835\uDC95', '\uD835\uDCC9', '\uD835\uDCFD', '\uD835\uDD31', '\uD835\uDD65', '\uD835\uDD99', '\uD835\uDDCD', '\uD835\uDE01', '\uD835\uDE35', '\uD835\uDE69', '\uD835\uDE9D'])
    },
    {
        character: 'p',
        matcher: c(['P', 'ρ', 'ϱ', 'р', '\u2374', 'ⲣ', '\uD835\uDC29', '\uD835\uDC5D', '\uD835\uDC91', '\uD835\uDCC5', '\uD835\uDCF9', '\uD835\uDD2D', '\uD835\uDD61', '\uD835\uDD95', '\uD835\uDDC9', '\uD835\uDDFD', '\uD835\uDE31', '\uD835\uDE65', '\uD835\uDE99', '\uD835\uDED2', '\uD835\uDEE0', '\uD835\uDF0C', '\uD835\uDF1A', '\uD835\uDF46', '\uD835\uDF54', '\uD835\uDF80', '\uD835\uDF8E', '\uD835\uDFBA', '\uD835\uDFC8', 'ｐ', 'ҏ'])
    },
    {
        character: 's',
        matcher: c(['S', 'ƽ', 'ѕ', 'ꜱ', 'ꮪ', '\uD801\uDC48', '\uD806\uDCC1', '\uD835\uDC2C', '\uD835\uDC60', '\uD835\uDC94', '\uD835\uDCC8', '\uD835\uDCFC', '\uD835\uDD30', '\uD835\uDD64', '\uD835\uDD98', '\uD835\uDDCC', '\uD835\uDE00', '\uD835\uDE34', '\uD835\uDE68', '\uD835\uDE9C', 'ｓ'])
    },
    {
        character: ':',
        matcher: c(['ː', '\u02F8', '\u0589', '\u05C3', '\u0703', '\u0704', 'ः', 'ઃ', '\u16EC', '\u1803', '\u1809', '\u205A', '\u2236', 'ꓽ', '\uA789', '\uFE30', '\uFF1A', ';', '\u037E'])
    },
    {
        character: '/',
        matcher: c(['\u1735', '\u2041', '\u2044', '\u2215', '\u2571', '\u27CB', '\u29F8', 'Ⳇ', '\u2F03', '〳', 'ノ', '\u31D3', '丿', '\uD834\uDE3A'])
    }
];
function c(e) {
    return RegExp(e.join('|'), 'gu');
}
function d(e) {
    let n = e;
    return (
        u.forEach((e) => {
            n = n.replace(e.matcher, e.character);
        }),
        n
    );
}
let f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];
function p(e) {
    return e >= 0 && e < 128 ? 1 === f[e] : !(8206 === e || 8207 === e || 8234 === e || 8235 === e || 8236 === e || 8237 === e || 8238 === e || 1564 === e || 8294 === e || 8295 === e || 8296 === e || 8297 === e || 128271 === e || 128272 === e || 128274 === e || 128275 === e || 133 === e || 160 === e || 5760 === e || 8192 === e || 8193 === e || 8194 === e || 8195 === e || 8196 === e || 8197 === e || 8198 === e || 8199 === e || 8200 === e || 8201 === e || 8202 === e || 8232 === e || 8233 === e || 8239 === e || 8287 === e || 12288 === e || 10240 === e || 173 === e || 847 === e || (e >= 1536 && e <= 1541) || 1757 === e || 1807 === e || 2274 === e || 4447 === e || 4448 === e || 6068 === e || 6069 === e || 6155 === e || 6156 === e || 6157 === e || 6158 === e || 8203 === e || 8204 === e || 8205 === e || 8288 === e || 8289 === e || 8290 === e || 8291 === e || 8292 === e || 8293 === e || (e >= 8298 && e <= 8303) || 12644 === e || (e >= 65520 && e <= 65528) || (e >= 65024 && e <= 65039) || 65279 === e || 65440 === e || 65529 === e || 65530 === e || 65531 === e || 69821 === e || 69837 === e || (e >= 78896 && e <= 78904) || (e >= 113824 && e <= 113827) || (e >= 119155 && e <= 119162) || (e >= 917504 && e <= 921599));
}
function h(e) {
    let n = m(e);
    return (n += _(e.pathname) + _(e.search) + _(e.hash));
}
function _(e) {
    let n;
    try {
        n = decodeURIComponent(e);
    } catch {
        return e;
    }
    let r = '',
        i = e,
        a = n;
    for (; i.length > 0; ) {
        let e = i.codePointAt(0),
            n = a.codePointAt(0);
        if (e === n) {
            let n = String.fromCodePoint(e);
            (r += n), (i = i.substring(n.length)), (a = a.substring(n.length));
            continue;
        }
        let o = String.fromCodePoint(n),
            s = encodeURIComponent(o),
            l = s === o ? 3 : s.length;
        (r += p(n) ? o : s), (i = i.substring(l)), (a = a.substring(o.length));
    }
    return r;
}
function m(e) {
    if ('null' === e.origin && e.pathname.startsWith('//')) return e.protocol;
    let n = '';
    return '' !== e.username && (n += e.username), '' !== e.password && (n += ':' + e.password), '' !== n && (n += '@'), ''.concat(e.protocol, '//').concat(n).concat(e.host);
}
