n.d(t, {
    ZP: () => Y,
    dy: () => A,
    gw: () => E
}),
    n(411104),
    n(47120),
    n(757143),
    n(653041),
    n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(336317),
    s = n(176354),
    o = n(906411);
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
let u = null,
    c = {},
    d = {},
    f = {},
    _ = {},
    p = [],
    h = 0,
    m = 0,
    g = {
        '1f3fb': 0,
        '1f3fc': 1,
        '1f3fd': 2,
        '1f3fe': 3,
        '1f3ff': 4
    },
    E = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF'],
    v = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    y = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    I = n(523558),
    T = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    b = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    S = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < E.length; e++) {
    let t = E[e];
    (f['skin-tone-'.concat(e + 1)] = t), (_[t] = 'skin-tone-'.concat(e + 1));
}
class A {
    get names() {
        return this.emojiObject.names;
    }
    get allNamesString() {
        return this.names.length > 1 ? ':'.concat(this.names.join(': :'), ':') : ':'.concat(this.uniqueName, ':');
    }
    get unicodeVersion() {
        var e;
        return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0;
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
        if (this.hasDiversity && null != u) {
            let e = C(u);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? s.ZP.getURL(e.surrogates) : s.ZP.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != u ? ''.concat(this.uniqueName, '::').concat(_[u]) : this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && r().each(this.diversityChildren, e);
    }
    forEachName(e) {
        r().each(this.names, e);
    }
    setSpriteSheetIndex(e) {
        (this.index = e), (this.useSpriteSheet = !0);
    }
    constructor(e) {
        if ((l(this, 'emojiObject', void 0), l(this, 'type', void 0), l(this, 'uniqueName', void 0), l(this, 'surrogates', void 0), l(this, 'diversityChildren', void 0), l(this, 'originalName', void 0), l(this, 'id', void 0), l(this, 'guildId', void 0), l(this, 'index', void 0), l(this, 'useSpriteSheet', void 0), (this.emojiObject = e), (this.type = o.B.UNICODE), (this.uniqueName = e.names[0]), (this.surrogates = e.surrogates), (this.diversityChildren = {}), null != e.diversityChildren)) {
            for (let t of e.diversityChildren)
                if (null != t.diversity) {
                    let e = t.diversity.join('-');
                    this.diversityChildren[e] = new A(t);
                }
        }
    }
}
let N = n(5420);
for (let e in N) {
    let t = N[e].map((e) => {
        let t = new A(e),
            n = t.surrogates,
            i = t.uniqueName;
        if ((t.setSpriteSheetIndex(t.hasDiversity ? h++ : m++), (_[n] = i), 0 > n.indexOf('‍'))) {
            let e = n.replace('️', '');
            e !== n && (_[e] = i);
        }
        for (let e of t.names) (d[e] = t), (f[e] = n);
        let r = t.diversityChildren;
        for (let t in r) {
            let n = r[t],
                i = n.surrogates;
            for (let e of n.names) (d[e] = n), (f[e] = i);
            if (!e.hasMultiDiversity) {
                let t = g[n.emojiObject.diversity[0]];
                for (let r of e.names) {
                    let e = ''.concat(r, '::skin-tone-').concat(t + 1);
                    (f[e] = i), (d[e] = n);
                }
            }
            _[i] = n.uniqueName;
        }
        return p.push(t), t;
    });
    c[e] = s.ZP.filterUnsupportedEmojis(t);
}
function C(e) {
    let t = a.Z.convert.toCodePoint(e);
    return null != t ? t : '';
}
function R(e) {
    u = null != e && '' !== e ? e : null;
}
function O() {
    return u;
}
function D() {
    return Object.keys(c);
}
function L(e) {
    return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null;
}
function x(e) {
    return c[e];
}
function P(e) {
    return b.test(e);
}
function w(e) {
    return e.replace(y, (e, t) => V(t, e));
}
function M(e) {
    let t = _[e];
    return null != t
        ? {
              type: 'emoji',
              surrogate: e,
              emojiName: ':'.concat(t, ':')
          }
        : {
              type: 'text',
              text: e
          };
}
let k = String.fromCodePoint(917631),
    U = String.fromCodePoint(127988),
    G = /^[\u{E0061}-\u{E007A}]$/u;
function B(e, t) {
    var n;
    if (!0 !== t && !P(e))
        return [
            {
                type: 'text',
                text: e
            }
        ];
    let i = '',
        r = [],
        a = null !== (n = e.match(S)) && void 0 !== n ? n : [];
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if (null != i && '' !== i) {
            if (t === k) (t = i + t), (i = '');
            else if (G.test(t)) {
                i += t;
                continue;
            } else r.push(M(i)), (i = '');
        } else if (t === U) {
            i = t;
            continue;
        }
        let n = M(t);
        if (r.length > 0) {
            let e = r[r.length - 1];
            if ('text' === n.type && 'text' === e.type) {
                e.text += n.text;
                continue;
            }
        }
        r.push(n);
    }
    return null != i && '' !== i && r.push(M(i)), r;
}
function Z(e) {
    return B(e)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
}
function F(e) {
    if (!P(e)) return null;
    let t = B(e, !0)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
    return t === e ? null : t;
}
function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return Object.prototype.hasOwnProperty.call(f, e) ? f[e] : t;
}
function j(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        i = n;
    return Object.prototype.hasOwnProperty.call(_, e) && (i = _[e]), t ? ':'.concat(i, ':') : i;
}
function H(e) {
    return L(
        j(
            E.reduce((e, t) => e.replace(t, ''), e),
            !1
        )
    );
}
let Y = {
    getDefaultDiversitySurrogate: O,
    setDefaultDiversitySurrogate: R,
    getCategories: D,
    getByName: L,
    getByCategory: x,
    contentHasUnicodeOrEmoji: P,
    translateInlineEmojiToSurrogates: w,
    maybeTranslateSurrogatesToInlineEmoji: F,
    findInlineEmojisFromSurrogates: B,
    translateSurrogatesToInlineEmoji: Z,
    convertNameToSurrogate: V,
    convertSurrogateToName: j,
    convertShortcutToName: function e(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            i = n;
        return Object.prototype.hasOwnProperty.call(I, e) && (i = I[e]), t ? ':'.concat(i, ':') : i;
    },
    convertSurrogateToBase: H,
    forEach: (e) => r().each(p, e),
    all: () => p,
    numDiversitySprites: h,
    numNonDiversitySprites: m,
    EMOJI_NAME_RE: v,
    EMOJI_NAME_AND_DIVERSITY_RE: y,
    EMOJI_SHORTCUT_RE: T,
    hasSurrogates: function e(e) {
        return r()
            .toArray(e)
            .some((e) => null != _[e]);
    }
};
