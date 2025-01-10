r.d(n, {
    dy: function () {
        return L;
    },
    gw: function () {
        return S;
    }
});
var i = r(411104);
var a = r(47120);
var s = r(757143);
var o = r(653041);
var l = r(724458);
var u = r(392711),
    c = r.n(u),
    d = r(336317),
    f = r(176354),
    _ = r(906411);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = null,
    m = {},
    g = {},
    E = {},
    v = {},
    I = [],
    T = 0,
    b = 0,
    y = {
        '1f3fb': 0,
        '1f3fc': 1,
        '1f3fd': 2,
        '1f3fe': 3,
        '1f3ff': 4
    },
    S = ['\uD83C\uDFFB', '\uD83C\uDFFC', '\uD83C\uDFFD', '\uD83C\uDFFE', '\uD83C\uDFFF'],
    A = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    N = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    C = r(523558),
    R = /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    O = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    D = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
for (let e = 0; e < S.length; e++) {
    let n = S[e];
    (E['skin-tone-'.concat(e + 1)] = n), (v[n] = 'skin-tone-'.concat(e + 1));
}
class L {
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
        if (this.hasDiversity && null != p) {
            let e = w(p);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? f.ZP.getURL(e.surrogates) : f.ZP.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != p ? ''.concat(this.uniqueName, '::').concat(v[p]) : this.uniqueName;
    }
    get optionallyDiverseSequence() {
        let e = this.defaultDiversityChild;
        return null != e ? e.surrogates : this.surrogates;
    }
    forEachDiversity(e) {
        null != this.diversityChildren && c().each(this.diversityChildren, e);
    }
    forEachName(e) {
        c().each(this.names, e);
    }
    setSpriteSheetIndex(e) {
        (this.index = e), (this.useSpriteSheet = !0);
    }
    constructor(e) {
        h(this, 'emojiObject', void 0), h(this, 'type', void 0), h(this, 'uniqueName', void 0), h(this, 'surrogates', void 0), h(this, 'diversityChildren', void 0), h(this, 'originalName', void 0), h(this, 'id', void 0), h(this, 'guildId', void 0), h(this, 'index', void 0), h(this, 'useSpriteSheet', void 0), (this.emojiObject = e), (this.type = _.B.UNICODE), (this.uniqueName = e.names[0]);
        if (((this.surrogates = e.surrogates), (this.diversityChildren = {}), null != e.diversityChildren)) {
            for (let n of e.diversityChildren)
                if (null != n.diversity) {
                    let e = n.diversity.join('-');
                    this.diversityChildren[e] = new L(n);
                }
        }
    }
}
let x = r(5420);
for (let e in x) {
    let n = x[e].map((e) => {
        let n = new L(e),
            r = n.surrogates,
            i = n.uniqueName;
        if ((n.setSpriteSheetIndex(n.hasDiversity ? T++ : b++), (v[r] = i), 0 > r.indexOf('‍'))) {
            let e = r.replace('️', '');
            e !== r && (v[e] = i);
        }
        for (let e of n.names) (g[e] = n), (E[e] = r);
        let a = n.diversityChildren;
        for (let n in a) {
            let r = a[n],
                i = r.surrogates;
            for (let e of r.names) (g[e] = r), (E[e] = i);
            if (!e.hasMultiDiversity) {
                let n = y[r.emojiObject.diversity[0]];
                for (let a of e.names) {
                    let e = ''.concat(a, '::skin-tone-').concat(n + 1);
                    (E[e] = i), (g[e] = r);
                }
            }
            v[i] = r.uniqueName;
        }
        return I.push(n), n;
    });
    m[e] = f.ZP.filterUnsupportedEmojis(n);
}
function w(e) {
    let n = d.Z.convert.toCodePoint(e);
    return null != n ? n : '';
}
function P(e) {
    p = null != e && '' !== e ? e : null;
}
function M() {
    return p;
}
function k() {
    return Object.keys(m);
}
function U(e) {
    return Object.prototype.hasOwnProperty.call(g, e) ? g[e] : null;
}
function B(e) {
    return m[e];
}
function G(e) {
    return e.replace(N, (e, n) => q(n, e));
}
function F(e) {
    let n = v[e];
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
let Z = String.fromCodePoint(917631),
    V = String.fromCodePoint(127988),
    j = /^[\u{E0061}-\u{E007A}]$/u;
function H(e, n) {
    var r;
    if (!0 !== n && !O.test(e))
        return [
            {
                type: 'text',
                text: e
            }
        ];
    let i = '',
        a = [],
        s = null !== (r = e.match(D)) && void 0 !== r ? r : [];
    for (let e = 0; e < s.length; e++) {
        let n = s[e];
        if (null != i && '' !== i) {
            if (n === Z) (n = i + n), (i = '');
            else if (j.test(n)) {
                i += n;
                continue;
            } else a.push(F(i)), (i = '');
        } else if (n === V) {
            i = n;
            continue;
        }
        let r = F(n);
        if (a.length > 0) {
            let e = a[a.length - 1];
            if ('text' === r.type && 'text' === e.type) {
                e.text += r.text;
                continue;
            }
        }
        a.push(r);
    }
    return null != i && '' !== i && a.push(F(i)), a;
}
function Y(e) {
    return H(e)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
}
function W(e) {
    if (!O.test(e)) return null;
    let n = H(e, !0)
        .map((e) => ('text' === e.type ? e.text : e.emojiName))
        .join('');
    return n === e ? null : n;
}
function K(e) {
    return c()
        .toArray(e)
        .some((e) => null != v[e]);
}
function z(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        i = r;
    return Object.prototype.hasOwnProperty.call(C, e) && (i = C[e]), n ? ':'.concat(i, ':') : i;
}
function q(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    return Object.prototype.hasOwnProperty.call(E, e) ? E[e] : n;
}
function Q(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        i = r;
    return Object.prototype.hasOwnProperty.call(v, e) && (i = v[e]), n ? ':'.concat(i, ':') : i;
}
function X(e) {
    return U(
        Q(
            S.reduce((e, n) => e.replace(n, ''), e),
            !1
        )
    );
}
n.ZP = {
    getDefaultDiversitySurrogate: M,
    setDefaultDiversitySurrogate: P,
    getCategories: k,
    getByName: U,
    getByCategory: B,
    translateInlineEmojiToSurrogates: G,
    maybeTranslateSurrogatesToInlineEmoji: W,
    findInlineEmojisFromSurrogates: H,
    translateSurrogatesToInlineEmoji: Y,
    convertNameToSurrogate: q,
    convertSurrogateToName: Q,
    convertShortcutToName: z,
    convertSurrogateToBase: X,
    forEach: (e) => c().each(I, e),
    all: () => I,
    numDiversitySprites: T,
    numNonDiversitySprites: b,
    EMOJI_NAME_RE: A,
    EMOJI_NAME_AND_DIVERSITY_RE: N,
    EMOJI_SHORTCUT_RE: R,
    hasSurrogates: K
};
