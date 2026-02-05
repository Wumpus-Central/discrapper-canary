"use strict";
n.d(t, { Ay: () => K, W$: () => c, zT: () => C }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(838677),
    s = n(690521),
    o = n(770335);
let l = null,
    u = new WeakMap(),
    c = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
    d = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    _ = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    f = n(132565),
    p =
        /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    h =
        /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    m =
        /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    {
        emojis: g,
        emojisByCategory: E,
        nameToEmoji: A,
        surrogateToEmoji: I,
        numDiversitySprites: T,
        numNonDiversitySprites: y,
    } = n(13474);
function S(e) {
    let t = A[e];
    return null == t ? null : g[t];
}
function v(e) {
    let t = I[e];
    return null == t ? null : g[t];
}
class C {
    emojiObject;
    type;
    uniqueName;
    surrogates;
    diversityChildren;
    originalName;
    id;
    guildId;
    index;
    useSpriteSheet;
    constructor(e) {
        if (
            ((this.emojiObject = e),
            (this.type = o.i.UNICODE),
            (this.uniqueName = e.names[0]),
            (this.surrogates = e.surrogates),
            (this.useSpriteSheet = null != e.spriteIndex),
            (this.index = e.spriteIndex),
            (this.diversityChildren = {}),
            null != e.diversityChildren)
        )
            for (const t of e.diversityChildren) {
                const e = g[t];
                if (null != e.diversity) {
                    const t = e.diversity.join("-");
                    this.diversityChildren[t] = new C(e);
                }
            }
    }
    get names() {
        return this.emojiObject.names;
    }
    get allNamesString() {
        return this.names.length > 1 ? `:${this.names.join(": :")}:` : `:${this.uniqueName}:`;
    }
    get unicodeVersion() {
        return this.emojiObject.unicodeVersion ?? 0;
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
        if (this.hasDiversity && null != l) {
            let e = N(l);
            return this.diversityChildren[e];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? s.Ay.getURL(e.surrogates) : s.Ay.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != l ? `${this.uniqueName}::${v(l)?.names[0]}` : this.uniqueName;
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
}
function b(e) {
    let t = u.get(e);
    if (null != t) return t;
    let n = new C(e);
    return u.set(e, n), n;
}
function N(e) {
    return a.A.convert.toCodePoint(e) ?? "";
}
function R(e) {
    l = null != e && "" !== e ? e : null;
}
function O() {
    return l;
}
function D() {
    return Object.keys(E);
}
function L(e) {
    let t = S(e);
    return null != t ? b(t) : null;
}
let w = new Map();
function x(e) {
    let t = w.get(e);
    if (null == t) {
        let n = E[e];
        (t = s.Ay.filterUnsupportedEmojis(g.slice(n[0], n[1])).map(b)), w.set(e, t);
    }
    return t;
}
function P(e) {
    return h.test(e);
}
function M(e) {
    return e.replace(_, (e, t) => H(t, e));
}
function k(e) {
    let t = v(e)?.names[0];
    return null != t ? { type: "emoji", surrogate: e, emojiName: `:${t}:` } : { type: "text", text: e };
}
let U = String.fromCodePoint(917631),
    G = String.fromCodePoint(127988),
    V = /^[\u{E0061}-\u{E007A}]$/u;
function F(e, t) {
    if (!0 !== t && !P(e)) return [{ type: "text", text: e }];
    let n = "",
        r = [],
        i = e.match(m) ?? [];
    for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (null != n && "" !== n)
            if (t === U) (t = n + t), (n = "");
            else if (V.test(t)) {
                n += t;
                continue;
            } else r.push(k(n)), (n = "");
        else if (t === G) {
            n = t;
            continue;
        }
        let a = k(t);
        if (r.length > 0) {
            let e = r[r.length - 1];
            if ("text" === a.type && "text" === e.type) {
                e.text += a.text;
                continue;
            }
        }
        r.push(a);
    }
    return null != n && "" !== n && r.push(k(n)), r;
}
function B(e) {
    return F(e)
        .map((e) => ("text" === e.type ? e.text : e.emojiName))
        .join("");
}
function j(e) {
    if (!P(e)) return null;
    let t = F(e, !0)
        .map((e) => ("text" === e.type ? e.text : e.emojiName))
        .join("");
    return t === e ? null : t;
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return S(e)?.surrogates ?? t;
}
function Y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = v(e)?.names[0] ?? n;
    return t ? `:${r}:` : r;
}
function W(e) {
    return L(
        Y(
            c.reduce((e, t) => e.replace(t, ""), e),
            !1,
        ),
    );
}
let K = {
    getDefaultDiversitySurrogate: O,
    setDefaultDiversitySurrogate: R,
    getCategories: D,
    getByName: L,
    getByCategory: x,
    contentHasUnicodeOrEmoji: P,
    translateInlineEmojiToSurrogates: M,
    maybeTranslateSurrogatesToInlineEmoji: j,
    findInlineEmojisFromSurrogates: F,
    translateSurrogatesToInlineEmoji: B,
    convertNameToSurrogate: H,
    convertSurrogateToName: Y,
    convertShortcutToName: function e(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            r = n;
        return Object.prototype.hasOwnProperty.call(f, e) && (r = f[e]), t ? `:${r}:` : r;
    },
    convertSurrogateToBase: W,
    forEach: (e) => {
        for (let t of g) t.hasDiversityParent || t.hasMultiDiversityParent || e(b(t));
    },
    numDiversitySprites: T,
    numNonDiversitySprites: y,
    EMOJI_NAME_RE: d,
    EMOJI_NAME_AND_DIVERSITY_RE: _,
    EMOJI_SHORTCUT_RE: p,
    hasSurrogates: function e(e) {
        return i()
            .toArray(e)
            .some((e) => null != I[e]);
    },
};
