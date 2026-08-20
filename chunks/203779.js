"use strict";
n.d(t, { J: () => C });
var l = n(459016),
    i = n(392054),
    s = n(284009),
    r = n.n(s),
    a = n(155718),
    o = n(224868),
    u = n(773669),
    c = n(522602),
    d = n(360161),
    h = n(168186),
    m = n(375708);
let f = {
    [a.n4.SUB_COMMAND]: () => ({ success: !1 }),
    [a.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
    [a.n4.BOOLEAN]: (e) => {
        if ("text" !== e.type) return { success: !1 };
        let t = e.text.trim();
        return { success: null != (0, d.a5)(t) };
    },
    [a.n4.STRING]: (e, t, n) => {
        let l;
        switch ((r()(t.type === a.n4.STRING, "option type must match validator type"), e.type)) {
            case "emoji":
                l = e.surrogate;
                break;
            case "text":
                l = e.text.trim();
                break;
            default:
                return { success: !1 };
        }
        if (null != t.choices) return { success: null != (0, d.$7)(t.choices, l) };
        if (t.autocomplete && null != (0, d.Xf)(n, t.name, l)) return { success: !0 };
        let i = l;
        if (void 0 !== t.minLength || void 0 !== t.maxLength) {
            if (null == i) return { success: !1 };
            let e = (function (e, t, n) {
                if (
                    (void 0 !== t.minLength && e.length < t.minLength) ||
                    (void 0 !== t.maxLength && e.length > t.maxLength)
                ) {
                    if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                        return {
                            success: !1,
                            error: m.intl.formatToPlainString(n.exactRangeErrorMessage, { value: x(t.minLength) }),
                        };
                    else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                        return {
                            success: !1,
                            error: m.intl.formatToPlainString(n.rangeErrorMessage, {
                                minimum: x(t.minLength),
                                maximum: x(t.maxLength),
                            }),
                        };
                    else if (void 0 !== t.minLength)
                        return {
                            success: !1,
                            error: m.intl.formatToPlainString(n.minErrorMessage, { minimum: x(t.minLength) }),
                        };
                    else if (void 0 !== t.maxLength)
                        return {
                            success: !1,
                            error: m.intl.formatToPlainString(n.maxErrorMessage, { maximum: x(t.maxLength) }),
                        };
                }
                return { success: !0 };
            })(i, t, {
                exactRangeErrorMessage: m.t["e+9/SY"],
                rangeErrorMessage: m.t.IE1sTh,
                minErrorMessage: m.t.rXAFQD,
                maxErrorMessage: m.t["ycEPx/"],
            });
            if (!e.success) return e;
        }
        return { success: !0 };
    },
    [a.n4.INTEGER]: (e, t, n) => {
        r()(t.type === a.n4.INTEGER, "option type must match validator type");
        let i = "text" === e.type ? e.text.trim() : null;
        if (null == i || 0 === i.length) return { success: !1 };
        if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, i) };
        if (t.autocomplete && null != (0, d.lM)(n, t.name, i)) return { success: !0 };
        let s = Number(l.normalizeNumericString(u.default.locale, i));
        return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s)
            ? { success: !1 }
            : g(s, t, m.t["8Y5zsp"], m.t.CyRLmH, m.t["VD3Q+S"]);
    },
    [a.n4.NUMBER]: (e, t, n) => {
        r()(t.type === a.n4.NUMBER, "option type must match validator type");
        let i = "text" === e.type ? e.text.trim() : null;
        if (null == i || 0 === i.length) return { success: !1 };
        if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, i) };
        if (t.autocomplete && null != (0, d.lM)(n, t.name, i)) return { success: !0 };
        let s = Number(l.normalizeNumericString(u.default.locale, i));
        return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER
            ? { success: !1 }
            : g(s, t, m.t["8Y5zsp"], m.t.CyRLmH, m.t["VD3Q+S"]);
    },
    [a.n4.USER]: (e, t, n, l) => {
        if ("text" !== e.type) return { success: "userMention" === e.type };
        {
            if ((0, h.hT)(e.text)) return { success: !0 };
            let t = (0, o.f)(e.text, l, n, { allowRoles: !1 });
            return { success: t?.type === "userMention" };
        }
    },
    [a.n4.CHANNEL]: (e, t, n, l) => {
        if ("text" !== e.type) return { success: "channelMention" === e.type };
        {
            if ((0, h.hT)(e.text)) return { success: !0 };
            let t = (0, o.f)(e.text, l, n);
            return { success: t?.type === "channelMention" };
        }
    },
    [a.n4.ROLE]: (e, t, n, l) => {
        if ("text" !== e.type) return { success: p(e) };
        {
            if ((0, h.hT)(e.text)) return { success: !0 };
            let t = (0, o.f)(e.text, l, n, { allowUsers: !1 });
            return { success: t?.type === "roleMention" };
        }
    },
    [a.n4.MENTIONABLE]: (e, t, n, l) => {
        if ("text" !== e.type) return { success: "userMention" === e.type || p(e) };
        {
            if ((0, h.hT)(e.text)) return { success: !0 };
            let t = (0, o.f)(e.text, l, n);
            return { success: null != t && ("userMention" === t.type || p(t)) };
        }
    },
    [a.n4.ATTACHMENT]: (e, t, n, l, i) => {
        if ("text" !== e.type) return { success: !1 };
        let s = c.A.getUpload(n, t.name, (0, h.Qr)(i));
        return { success: null != s && s.filename === e.text };
    },
};
function p(e) {
    return "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
}
function g(e, t, n, l, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: m.intl.formatToPlainString(n, { minimum: x(t.minValue), maximum: x(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: m.intl.formatToPlainString(l, { minimum: x(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: m.intl.formatToPlainString(i, { maximum: x(t.maxValue) }) };
    }
    return { success: !0 };
}
function x(e) {
    return e.toLocaleString(m.intl.currentLocale, { useGrouping: !1 });
}
var A = n(73510);
function C(e) {
    let { option: t, content: n, guildId: s, channelId: r, allowEmptyValues: a, commandOrigin: o = i.iw.CHAT } = e,
        u = null != n ? (0, l.getString)({ content: n }, "content").trim() : "",
        c = t.required;
    if (null == n) return c ? { success: !1, error: m.intl.string(m.t.JZJQL2) } : { success: !0 };
    if ("" === u)
        return a
            ? { success: !0 }
            : c
              ? { success: !1, error: m.intl.string(m.t.JZJQL2) }
              : { success: !1, error: (0, A.tE)(t) };
    let d = n.length > 1 ? { type: "text", text: u } : n[0],
        h = f[t.type](d, t, r, s, o);
    return h.success || null != h.error || (h.error = (0, A.tE)(t)), h;
}
