"use strict";
n.d(t, { A: () => _ });
var i = n(284009),
    l = n.n(i),
    s = n(155718),
    r = n(224868),
    a = n(773669),
    o = n(522602),
    c = n(360161),
    u = n(258363),
    d = n(168186),
    h = n(985018);
let m = {
        [s.n4.SUB_COMMAND]: () => ({ success: !1 }),
        [s.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [s.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, c.a5)(t) };
        },
        [s.n4.STRING]: (e, t, n) => {
            let i;
            switch ((l()(t.type === s.n4.STRING, "option type must match validator type"), e.type)) {
                case "emoji":
                    i = e.surrogate;
                    break;
                case "text":
                    i = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, c.$7)(t.choices, i) };
            if (t.autocomplete && null != (0, c.Xf)(n, t.name, i)) return { success: !0 };
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
                                error: h.intl.formatToPlainString(n.exactRangeErrorMessage, { value: g(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.rangeErrorMessage, {
                                    minimum: g(t.minLength),
                                    maximum: g(t.maxLength),
                                }),
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.minErrorMessage, { minimum: g(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.maxErrorMessage, { maximum: g(t.maxLength) }),
                            };
                    }
                    return { success: !0 };
                })(r, t, {
                    exactRangeErrorMessage: h.t["e+9/SY"],
                    rangeErrorMessage: h.t.IE1sTh,
                    minErrorMessage: h.t.rXAFQD,
                    maxErrorMessage: h.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [s.n4.INTEGER]: (e, t, n) => {
            l()(t.type === s.n4.INTEGER, "option type must match validator type");
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, i)) return { success: !0 };
            let r = Number(u.normalizeNumericString(a.default.locale, i));
            return null == r || isNaN(r) || !Number.isInteger(r) || !Number.isSafeInteger(r)
                ? { success: !1 }
                : f(r, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
        },
        [s.n4.NUMBER]: (e, t, n) => {
            l()(t.type === s.n4.NUMBER, "option type must match validator type");
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, i)) return { success: !0 };
            let r = Number(u.normalizeNumericString(a.default.locale, i));
            return isNaN(r) || r > Number.MAX_SAFE_INTEGER || r < Number.MIN_SAFE_INTEGER
                ? { success: !1 }
                : f(r, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
        },
        [s.n4.USER]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, r.f)(e.text, i, n, { allowRoles: !1 });
                return { success: t?.type === "userMention" };
            }
        },
        [s.n4.CHANNEL]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "channelMention" === e.type };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, r.f)(e.text, i, n);
                return { success: t?.type === "channelMention" };
            }
        },
        [s.n4.ROLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: p(e) };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, r.f)(e.text, i, n, { allowUsers: !1 });
                return { success: t?.type === "roleMention" };
            }
        },
        [s.n4.MENTIONABLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type || p(e) };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, r.f)(e.text, i, n);
                return { success: null != t && ("userMention" === t.type || p(t)) };
            }
        },
        [s.n4.ATTACHMENT]: (e, t, n, i, l) => {
            if ("text" !== e.type) return { success: !1 };
            let s = o.A.getUpload(n, t.name, (0, d.Qr)(l));
            return { success: null != s && s.filename === e.text };
        },
    },
    p = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
function f(e, t, n, i, l) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: h.intl.formatToPlainString(n, { minimum: g(t.minValue), maximum: g(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: h.intl.formatToPlainString(i, { minimum: g(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: h.intl.formatToPlainString(l, { maximum: g(t.maxValue) }) };
    }
    return { success: !0 };
}
function g(e) {
    return e.toLocaleString(h.intl.currentLocale, { useGrouping: !1 });
}
let _ = m;
