"use strict";
n.d(t, { Ay: () => w, W$: () => c, zT: () => N }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(833272),
    s = n(690521),
    l = n(770335);
let o = null,
    d = new WeakMap(),
    c = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
    u = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    _ = n(132565),
    E =
        /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    A =
        /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    {
        emojis: h,
        emojisByCategory: I,
        nameToEmoji: f,
        surrogateToEmoji: p,
        numDiversitySprites: T,
        numNonDiversitySprites: m,
    } = n(13474);
function g(e) {
    let t = f[e];
    return null == t ? null : h[t];
}
function S(e) {
    let t = p[e];
    return null == t ? null : h[t];
}
class N {
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
            (this.type = l.i.UNICODE),
            (this.uniqueName = e.names[0]),
            (this.surrogates = e.surrogates),
            (this.useSpriteSheet = null != e.spriteIndex),
            (this.index = e.spriteIndex),
            (this.diversityChildren = {}),
            null != e.diversityChildren)
        )
            for (const t of e.diversityChildren) {
                const e = h[t];
                if (null != e.diversity) {
                    const t = e.diversity.join("-");
                    this.diversityChildren[t] = new N(e);
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
        if (this.hasDiversity && null != o) {
            var e;
            let t = ((e = o), a.A.convert.toCodePoint(e) ?? "");
            return this.diversityChildren[t];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? s.Ay.getURL(e.surrogates) : s.Ay.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != o ? `${this.uniqueName}::${S(o)?.names[0]}` : this.uniqueName;
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
}
function C(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = new N(e);
    return d.set(e, n), n;
}
function R(e) {
    let t = g(e);
    return null != t ? C(t) : null;
}
let O = new Map();
function L(e) {
    return E.test(e);
}
function y(e) {
    let t = S(e)?.names[0];
    return null != t ? { type: "emoji", surrogate: e, emojiName: `:${t}:` } : { type: "text", text: e };
}
let D = String.fromCodePoint(917631),
    v = String.fromCodePoint(127988),
    b = /^[\u{E0061}-\u{E007A}]$/u;
function M(e, t) {
    if (!0 !== t && !L(e)) return [{ type: "text", text: e }];
    let n = "",
        i = [],
        r = e.match(A) ?? [];
    for (let e = 0; e < r.length; e++) {
        let t = r[e];
        if (null != n && "" !== n)
            if (t === D) (t = n + t), (n = "");
            else if (b.test(t)) {
                n += t;
                continue;
            } else i.push(y(n)), (n = "");
        else if (t === v) {
            n = t;
            continue;
        }
        let a = y(t);
        if (i.length > 0) {
            let e = i[i.length - 1];
            if ("text" === a.type && "text" === e.type) {
                e.text += a.text;
                continue;
            }
        }
        i.push(a);
    }
    return null != n && "" !== n && i.push(y(n)), i;
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return g(e)?.surrogates ?? t;
}
function U(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        i = S(e)?.names[0] ?? n;
    return t ? `:${i}:` : i;
}
let w = {
    getDefaultDiversitySurrogate: function () {
        return o;
    },
    setDefaultDiversitySurrogate: function (e) {
        o = null != e && "" !== e ? e : null;
    },
    getCategories: function () {
        return Object.keys(I);
    },
    getByName: R,
    getByCategory: function (e) {
        let t = O.get(e);
        if (null == t) {
            let n = I[e];
            (t = s.Ay.filterUnsupportedEmojis(h.slice(n[0], n[1])).map(C)), O.set(e, t);
        }
        return t;
    },
    contentHasUnicodeOrEmoji: L,
    translateInlineEmojiToSurrogates: function (e) {
        return e.replace(u, (e, t) => P(t, e));
    },
    maybeTranslateSurrogatesToInlineEmoji: function (e) {
        if (!L(e)) return null;
        let t = M(e, !0)
            .map((e) => ("text" === e.type ? e.text : e.emojiName))
            .join("");
        return t === e ? null : t;
    },
    findInlineEmojisFromSurrogates: M,
    translateSurrogatesToInlineEmoji: function (e) {
        return M(e)
            .map((e) => ("text" === e.type ? e.text : e.emojiName))
            .join("");
    },
    convertNameToSurrogate: P,
    convertSurrogateToName: U,
    convertShortcutToName: function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            i = n;
        return Object.prototype.hasOwnProperty.call(_, e) && (i = _[e]), t ? `:${i}:` : i;
    },
    convertSurrogateToBase: function (e) {
        return R(
            U(
                c.reduce((e, t) => e.replace(t, ""), e),
                !1,
            ),
        );
    },
    forEach: (e) => {
        for (let t of h) t.hasDiversityParent || t.hasMultiDiversityParent || e(C(t));
    },
    numDiversitySprites: T,
    numNonDiversitySprites: m,
    EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    EMOJI_NAME_AND_DIVERSITY_RE: u,
    EMOJI_SHORTCUT_RE:
        /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|\u2661|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    hasSurrogates: function (e) {
        return r()
            .toArray(e)
            .some((e) => null != p[e]);
    },
};
