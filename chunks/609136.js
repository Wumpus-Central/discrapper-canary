"use strict";
n.d(t, { A: () => m });
var r = n(284009),
    i = n.n(r),
    s = n(155718),
    a = n(224868),
    o = n(773669),
    l = n(522602),
    u = n(360161),
    c = n(258363),
    d = n(168186),
    _ = n(985018);
let f = {
        [s.n4.SUB_COMMAND]: () => ({ success: !1 }),
        [s.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [s.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, u.a5)(t) };
        },
        [s.n4.STRING]: (e, t, n) => {
            let r;
            switch ((i()(t.type === s.n4.STRING, "option type must match validator type"), e.type)) {
                case "emoji":
                    r = e.surrogate;
                    break;
                case "text":
                    r = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, u.$7)(t.choices, r) };
            if (t.autocomplete && null != (0, u.Xf)(n, t.name, r)) return { success: !0 };
            let a = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == a) return { success: !1 };
                let e = (function (e, t, n) {
                    if (
                        (void 0 !== t.minLength && e.length < t.minLength) ||
                        (void 0 !== t.maxLength && e.length > t.maxLength)
                    ) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                            return {
                                success: !1,
                                error: _.intl.formatToPlainString(n.exactRangeErrorMessage, { value: E(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: _.intl.formatToPlainString(n.rangeErrorMessage, {
                                    minimum: E(t.minLength),
                                    maximum: E(t.maxLength),
                                }),
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: _.intl.formatToPlainString(n.minErrorMessage, { minimum: E(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: _.intl.formatToPlainString(n.maxErrorMessage, { maximum: E(t.maxLength) }),
                            };
                    }
                    return { success: !0 };
                })(a, t, {
                    exactRangeErrorMessage: _.t["e+9/SY"],
                    rangeErrorMessage: _.t.IE1sTh,
                    minErrorMessage: _.t.rXAFQD,
                    maxErrorMessage: _.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [s.n4.INTEGER]: (e, t, n) => {
            i()(t.type === s.n4.INTEGER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, u.lM)(n, t.name, r)) return { success: !0 };
            let a = Number(c.normalizeNumericString(o.default.locale, r));
            return null == a || isNaN(a) || !Number.isInteger(a) || !Number.isSafeInteger(a)
                ? { success: !1 }
                : h(a, t, _.t["8Y5zsp"], _.t.CyRLmH, _.t["VD3Q+S"]);
        },
        [s.n4.NUMBER]: (e, t, n) => {
            i()(t.type === s.n4.NUMBER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, u.lM)(n, t.name, r)) return { success: !0 };
            let a = Number(c.normalizeNumericString(o.default.locale, r));
            return isNaN(a) || a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER
                ? { success: !1 }
                : h(a, t, _.t["8Y5zsp"], _.t.CyRLmH, _.t["VD3Q+S"]);
        },
        [s.n4.USER]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, r, n, { allowRoles: !1 });
                return { success: t?.type === "userMention" };
            }
        },
        [s.n4.CHANNEL]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "channelMention" === e.type };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, r, n);
                return { success: t?.type === "channelMention" };
            }
        },
        [s.n4.ROLE]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: p(e) };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, r, n, { allowUsers: !1 });
                return { success: t?.type === "roleMention" };
            }
        },
        [s.n4.MENTIONABLE]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "userMention" === e.type || p(e) };
            {
                if ((0, d.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, r, n);
                return { success: null != t && ("userMention" === t.type || p(t)) };
            }
        },
        [s.n4.ATTACHMENT]: (e, t, n, r, i) => {
            if ("text" !== e.type) return { success: !1 };
            let s = l.A.getUpload(n, t.name, (0, d.Qr)(i));
            return { success: null != s && s.filename === e.text };
        },
    },
    p = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
function h(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: _.intl.formatToPlainString(n, { minimum: E(t.minValue), maximum: E(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: _.intl.formatToPlainString(r, { minimum: E(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: _.intl.formatToPlainString(i, { maximum: E(t.maxValue) }) };
    }
    return { success: !0 };
}
function E(e) {
    return e.toLocaleString(_.intl.currentLocale, { useGrouping: !1 });
}
let m = f;
