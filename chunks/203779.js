"use strict";
n.d(t, { J: () => A });
var i = n(459016),
    r = n(392054),
    s = n(284009),
    a = n.n(s),
    o = n(155718),
    l = n(224868),
    u = n(773669),
    c = n(522602),
    d = n(360161),
    _ = n(168186),
    f = n(375708);
let h = {
        [o.n4.SUB_COMMAND]: () => ({ success: !1 }),
        [o.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [o.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, d.a5)(t) };
        },
        [o.n4.STRING]: (e, t, n) => {
            let i;
            switch ((a()(t.type === o.n4.STRING, "option type must match validator type"), e.type)) {
                case "emoji":
                    i = e.surrogate;
                    break;
                case "text":
                    i = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, d.$7)(t.choices, i) };
            if (t.autocomplete && null != (0, d.Xf)(n, t.name, i)) return { success: !0 };
            let r = i;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == r) return { success: !1 };
                let e = (function (e, t, n) {
                    if (
                        (void 0 !== t.minLength && e.length < t.minLength) ||
                        (void 0 !== t.maxLength && e.length > t.maxLength)
                    ) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                            return {
                                success: !1,
                                error: f.intl.formatToPlainString(n.exactRangeErrorMessage, { value: m(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: f.intl.formatToPlainString(n.rangeErrorMessage, {
                                    minimum: m(t.minLength),
                                    maximum: m(t.maxLength),
                                }),
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: f.intl.formatToPlainString(n.minErrorMessage, { minimum: m(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: f.intl.formatToPlainString(n.maxErrorMessage, { maximum: m(t.maxLength) }),
                            };
                    }
                    return { success: !0 };
                })(r, t, {
                    exactRangeErrorMessage: f.t["e+9/SY"],
                    rangeErrorMessage: f.t.IE1sTh,
                    minErrorMessage: f.t.rXAFQD,
                    maxErrorMessage: f.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [o.n4.INTEGER]: (e, t, n) => {
            a()(t.type === o.n4.INTEGER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, r)) return { success: !0 };
            let s = Number(i.normalizeNumericString(u.default.locale, r));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s)
                ? { success: !1 }
                : E(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"]);
        },
        [o.n4.NUMBER]: (e, t, n) => {
            a()(t.type === o.n4.NUMBER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, r)) return { success: !0 };
            let s = Number(i.normalizeNumericString(u.default.locale, r));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER
                ? { success: !1 }
                : E(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"]);
        },
        [o.n4.USER]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
                if ((0, _.hT)(e.text)) return { success: !0 };
                let t = (0, l.f)(e.text, i, n, { allowRoles: !1 });
                return { success: t?.type === "userMention" };
            }
        },
        [o.n4.CHANNEL]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "channelMention" === e.type };
            {
                if ((0, _.hT)(e.text)) return { success: !0 };
                let t = (0, l.f)(e.text, i, n);
                return { success: t?.type === "channelMention" };
            }
        },
        [o.n4.ROLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: p(e) };
            {
                if ((0, _.hT)(e.text)) return { success: !0 };
                let t = (0, l.f)(e.text, i, n, { allowUsers: !1 });
                return { success: t?.type === "roleMention" };
            }
        },
        [o.n4.MENTIONABLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type || p(e) };
            {
                if ((0, _.hT)(e.text)) return { success: !0 };
                let t = (0, l.f)(e.text, i, n);
                return { success: null != t && ("userMention" === t.type || p(t)) };
            }
        },
        [o.n4.ATTACHMENT]: (e, t, n, i, r) => {
            if ("text" !== e.type) return { success: !1 };
            let s = c.A.getUpload(n, t.name, (0, _.Qr)(r));
            return { success: null != s && s.filename === e.text };
        },
    },
    p = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
function E(e, t, n, i, r) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n, { minimum: m(t.minValue), maximum: m(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: f.intl.formatToPlainString(i, { minimum: m(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: f.intl.formatToPlainString(r, { maximum: m(t.maxValue) }) };
    }
    return { success: !0 };
}
function m(e) {
    return e.toLocaleString(f.intl.currentLocale, { useGrouping: !1 });
}
var g = n(73510);
function A(e) {
    let { option: t, content: n, guildId: s, channelId: a, allowEmptyValues: o, commandOrigin: l = r.iw.CHAT } = e,
        u = null != n ? (0, i.getString)({ content: n }, "content").trim() : "",
        c = t.required;
    if (null == n) return c ? { success: !1, error: f.intl.string(f.t.JZJQL2) } : { success: !0 };
    if ("" === u)
        return o
            ? { success: !0 }
            : c
              ? { success: !1, error: f.intl.string(f.t.JZJQL2) }
              : { success: !1, error: (0, g.tE)(t) };
    let d = n.length > 1 ? { type: "text", text: u } : n[0],
        _ = h[t.type](d, t, a, s, l);
    return _.success || null != _.error || (_.error = (0, g.tE)(t)), _;
}
