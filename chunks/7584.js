"use strict";
n.d(t, { Ay: () => U, W$: () => d, zT: () => y }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(838677),
    a = n(690521),
    o = n(770335);
let l = null,
    u = new WeakMap(),
    d = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
    c = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    _ = n(132565),
    f =
        /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
    E =
        /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    {
        emojis: h,
        emojisByCategory: p,
        nameToEmoji: m,
        surrogateToEmoji: g,
        numDiversitySprites: A,
        numNonDiversitySprites: I,
    } = n(13474);
function T(e) {
    let t = m[e];
    return null == t ? null : h[t];
}
function S(e) {
    let t = g[e];
    return null == t ? null : h[t];
}
class y {
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
                const e = h[t];
                if (null != e.diversity) {
                    const t = e.diversity.join("-");
                    this.diversityChildren[t] = new y(e);
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
            var e;
            let t = ((e = l), s.A.convert.toCodePoint(e) ?? "");
            return this.diversityChildren[t];
        }
        return null;
    }
    get url() {
        let e = this.defaultDiversityChild;
        return null != e ? a.Ay.getURL(e.surrogates) : a.Ay.getURL(this.surrogates);
    }
    get name() {
        return this.hasDiversity && null != l ? `${this.uniqueName}::${S(l)?.names[0]}` : this.uniqueName;
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
function N(e) {
    let t = u.get(e);
    if (null != t) return t;
    let n = new y(e);
    return u.set(e, n), n;
}
function O(e) {
    let t = T(e);
    return null != t ? N(t) : null;
}
let R = new Map();
function v(e) {
    return f.test(e);
}
function C(e) {
    let t = S(e)?.names[0];
    return null != t ? { type: "emoji", surrogate: e, emojiName: `:${t}:` } : { type: "text", text: e };
}
let b = String.fromCodePoint(917631),
    D = String.fromCodePoint(127988),
    L = /^[\u{E0061}-\u{E007A}]$/u;
function w(e, t) {
    if (!0 !== t && !v(e)) return [{ type: "text", text: e }];
    let n = "",
        r = [],
        i = e.match(E) ?? [];
    for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (null != n && "" !== n)
            if (t === b) (t = n + t), (n = "");
            else if (L.test(t)) {
                n += t;
                continue;
            } else r.push(C(n)), (n = "");
        else if (t === D) {
            n = t;
            continue;
        }
        let s = C(t);
        if (r.length > 0) {
            let e = r[r.length - 1];
            if ("text" === s.type && "text" === e.type) {
                e.text += s.text;
                continue;
            }
        }
        r.push(s);
    }
    return null != n && "" !== n && r.push(C(n)), r;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return T(e)?.surrogates ?? t;
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = S(e)?.names[0] ?? n;
    return t ? `:${r}:` : r;
}
let U = {
    getDefaultDiversitySurrogate: function () {
        return l;
    },
    setDefaultDiversitySurrogate: function (e) {
        l = null != e && "" !== e ? e : null;
    },
    getCategories: function () {
        return Object.keys(p);
    },
    getByName: O,
    getByCategory: function (e) {
        let t = R.get(e);
        if (null == t) {
            let n = p[e];
            (t = a.Ay.filterUnsupportedEmojis(h.slice(n[0], n[1])).map(N)), R.set(e, t);
        }
        return t;
    },
    contentHasUnicodeOrEmoji: v,
    translateInlineEmojiToSurrogates: function (e) {
        return e.replace(c, (e, t) => M(t, e));
    },
    maybeTranslateSurrogatesToInlineEmoji: function (e) {
        if (!v(e)) return null;
        let t = w(e, !0)
            .map((e) => ("text" === e.type ? e.text : e.emojiName))
            .join("");
        return t === e ? null : t;
    },
    findInlineEmojisFromSurrogates: w,
    translateSurrogatesToInlineEmoji: function (e) {
        return w(e)
            .map((e) => ("text" === e.type ? e.text : e.emojiName))
            .join("");
    },
    convertNameToSurrogate: M,
    convertSurrogateToName: P,
    convertShortcutToName: function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            r = n;
        return Object.prototype.hasOwnProperty.call(_, e) && (r = _[e]), t ? `:${r}:` : r;
    },
    convertSurrogateToBase: function (e) {
        return O(
            P(
                d.reduce((e, t) => e.replace(t, ""), e),
                !1,
            ),
        );
    },
    forEach: (e) => {
        for (let t of h) t.hasDiversityParent || t.hasMultiDiversityParent || e(N(t));
    },
    numDiversitySprites: A,
    numNonDiversitySprites: I,
    EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
    EMOJI_NAME_AND_DIVERSITY_RE: c,
    EMOJI_SHORTCUT_RE:
        /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
    hasSurrogates: function (e) {
        return i()
            .toArray(e)
            .some((e) => null != g[e]);
    },
};
