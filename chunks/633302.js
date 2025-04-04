n.d(t, {
    ZP: () => K,
    dy: () => N,
    gw: () => d
}),
    n(47120),
    n(411104),
    n(26686),
    n(301563),
    n(757143),
    n(474991),
    n(398202),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(336317),
    a = n(176354),
    s = n(906411);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = null,
    u = new WeakMap(),
    d = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF'],
    f = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    _ = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    p = n(523558),
    h = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    m = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    g = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    { emojis: E, emojisByCategory: b, nameToEmoji: y, surrogateToEmoji: v, numDiversitySprites: O, numNonDiversitySprites: I } = n(382342);
function S(e) {
    let t = y[e];
    return null == t ? null : E[t];
}
function T(e) {
    let t = v[e];
    return null == t ? null : E[t];
}
class N {
    get names() {
        return this.emojiObject.names;
    }
    get allNamesString() {
        return this.names.length > 1 ? ':'.concat(this.names.join(': :'), ':') : ':'.concat(this.uniqueName, ':');
    }
    get unicodeVersion() {
        var e;
        return null != (e = this.emojiObject.unicodeVersion) ? e : 0;
    }
    get hasDiversity() {
        return this.emojiObject.hasDiversity;
    }
    get hasMultiDiversity() {
        return this.emojiObject.hasMultiDiversity;
    }
    get hasDiversityParent() {
        return this.emojiObject.hasDiversityParent;
    }
    get hasMultiDiversityParent() {
        return this.emojiObject.hasMultiDiversityParent;
    }
    get managed() {
        return !0;
    }
    get animated() {
        return !1;
    }
    get defaultDiversityChild() {
        if (this.hasDiversity && null != c) {
            let e = C(c);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? a.ZP.getURL(e.surrogates) : a.ZP.getURL(this.surrogates);
    }
    get name() {
        if (this.hasDiversity && null != c) {
            var e;
            return ''.concat(this.uniqueName, '::').concat(null == (e = T(c)) ? void 0 : e.names[0]);
        }
        return this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && i().each(this.diversityChildren, e);
    }
    forEachName(e) {
        i().each(this.names, e);
    }
    constructor(e) {
        if ((l(this, 'emojiObject', void 0), l(this, 'type', void 0), l(this, 'uniqueName', void 0), l(this, 'surrogates', void 0), l(this, 'diversityChildren', void 0), l(this, 'originalName', void 0), l(this, 'id', void 0), l(this, 'guildId', void 0), l(this, 'index', void 0), l(this, 'useSpriteSheet', void 0), (this.emojiObject = e), (this.type = s.B.UNICODE), (this.uniqueName = e.names[0]), (this.surrogates = e.surrogates), (this.useSpriteSheet = null != e.spriteIndex), (this.index = e.spriteIndex), (this.diversityChildren = {}), null != e.diversityChildren))
            for (let t of e.diversityChildren) {
                let e = E[t];
                if (null != e.diversity) {
                    let t = e.diversity.join('-');
                    this.diversityChildren[t] = new N(e);
                }
            }
    }
}
function A(e) {
    let t = u.get(e);
    if (null != t) return t;
    let n = new N(e);
    return u.set(e, n), n;
}
function C(e) {
    let t = o.Z.convert.toCodePoint(e);
    return null != t ? t : '';
}
function R(e) {
    c = null != e && '' !== e ? e : null;
}
function P() {
    return c;
}
function w() {
    return Object.keys(b);
}
function D(e) {
    let t = S(e);
    return null != t ? A(t) : null;
}
let L = new Map();
function x(e) {
    let t = L.get(e);
    if (null == t) {
        let n = b[e];
        (t = a.ZP.filterUnsupportedEmojis(E.slice(n[0], n[1])).map(A)), L.set(e, t);
    }
    return t;
}
function M(e) {
    return m.test(e);
}
function k(e) {
    return e.replace(_, (e, t) => H(t, e));
}
function j(e) {
    var t;
    let n = null == (t = T(e)) ? void 0 : t.names[0];
    return null != n
        ? {
              type: 'emoji',
              surrogate: e,
              emojiName: ':'.concat(n, ':')
          }
        : {
              type: 'text',
              text: e
          };
}
let U = String.fromCodePoint(917631),
    G = String.fromCodePoint(127988),
    B = RegExp('^[\\u{E0061}-\\u{E007A}]$', 'u');
function F(e, t) {
    var n;
    if (!0 !== t && !M(e))
        return [
            {
                type: 'text',
                text: e
            }
        ];
    let r = '',
        i = [],
        o = null != (n = e.match(g)) ? n : [];
    for (let e = 0; e < o.length; e++) {
        let t = o[e];
        if (null != r && '' !== r)
            if (t === U) (t = r + t), (r = '');
            else if (B.test(t)) {
                r += t;
                continue;
            } else i.push(j(r)), (r = '');
        else if (t === G) {
            r = t;
            continue;
        }
        let n = j(t);
        if (i.length > 0) {
            let e = i[i.length - 1];
            if ('text' === n.type && 'text' === e.type) {
                e.text += n.text;
                continue;
            }
        }
        i.push(n);
    }
    return null != r && '' !== r && i.push(j(r)), i;
}
function V(e) {
    return F(e)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
}
function Z(e) {
    if (!M(e)) return null;
    let t = F(e, !0)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
    return t === e ? null : t;
}
function H(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return null != (n = null == (t = S(e)) ? void 0 : t.surrogates) ? n : r;
}
function W(e) {
    var t, n;
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        o = null != (n = null == (t = T(e)) ? void 0 : t.names[0]) ? n : i;
    return r ? ':'.concat(o, ':') : o;
}
function Y(e) {
    return D(
        W(
            d.reduce((e, t) => e.replace(t, ''), e),
            !1
        )
    );
}
let K = {
    getDefaultDiversitySurrogate: P,
    setDefaultDiversitySurrogate: R,
    getCategories: w,
    getByName: D,
    getByCategory: x,
    contentHasUnicodeOrEmoji: M,
    translateInlineEmojiToSurrogates: k,
    maybeTranslateSurrogatesToInlineEmoji: Z,
    findInlineEmojisFromSurrogates: F,
    translateSurrogatesToInlineEmoji: V,
    convertNameToSurrogate: H,
    convertSurrogateToName: W,
    convertShortcutToName: function e(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            r = n;
        return Object.prototype.hasOwnProperty.call(p, e) && (r = p[e]), t ? ':'.concat(r, ':') : r;
    },
    convertSurrogateToBase: Y,
    forEach: (e) => {
        for (let t of E) t.hasDiversityParent || t.hasMultiDiversityParent || e(A(t));
    },
    numDiversitySprites: O,
    numNonDiversitySprites: I,
    EMOJI_NAME_RE: f,
    EMOJI_NAME_AND_DIVERSITY_RE: _,
    EMOJI_SHORTCUT_RE: h,
    hasSurrogates: function e(e) {
        return i()
            .toArray(e)
            .some((e) => null != v[e]);
    }
};
