n.d(t, { A: () => x });
var r = n(284009),
    i = n.n(r),
    l = n(155718),
    s = n(224868),
    u = n(773669),
    a = n(522602),
    c = n(360161),
    o = n(258363),
    m = n(168186),
    d = n(985018);
let f = {
        [l.n4.SUB_COMMAND]: () => ({ success: !1 }),
        [l.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [l.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, c.a5)(t) };
        },
        [l.n4.STRING]: (e, t, n) => {
            let r;
            switch ((i()(t.type === l.n4.STRING, "option type must match validator type"), e.type)) {
                case "emoji":
                    r = e.surrogate;
                    break;
                case "text":
                    r = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, c.$7)(t.choices, r) };
            if (t.autocomplete && null != (0, c.Xf)(n, t.name, r)) return { success: !0 };
            let s = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == s) return { success: !1 };
                let e = (function (e, t, n) {
                    if (
                        (void 0 !== t.minLength && e.length < t.minLength) ||
                        (void 0 !== t.maxLength && e.length > t.maxLength)
                    ) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                            return {
                                success: !1,
                                error: d.intl.formatToPlainString(n.exactRangeErrorMessage, { value: g(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: d.intl.formatToPlainString(n.rangeErrorMessage, {
                                    minimum: g(t.minLength),
                                    maximum: g(t.maxLength),
                                }),
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: d.intl.formatToPlainString(n.minErrorMessage, { minimum: g(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: d.intl.formatToPlainString(n.maxErrorMessage, { maximum: g(t.maxLength) }),
                            };
                    }
                    return { success: !0 };
                })(s, t, {
                    exactRangeErrorMessage: d.t["e+9/SY"],
                    rangeErrorMessage: d.t.IE1sTh,
                    minErrorMessage: d.t.rXAFQD,
                    maxErrorMessage: d.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [l.n4.INTEGER]: (e, t, n) => {
            i()(t.type === l.n4.INTEGER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r)) return { success: !0 };
            let s = Number(o.normalizeNumericString(u.default.locale, r));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s)
                ? { success: !1 }
                : p(s, t, d.t["8Y5zsp"], d.t.CyRLmH, d.t["VD3Q+S"]);
        },
        [l.n4.NUMBER]: (e, t, n) => {
            i()(t.type === l.n4.NUMBER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.Bk)(t.choices, r) };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r)) return { success: !0 };
            let s = Number(o.normalizeNumericString(u.default.locale, r));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER
                ? { success: !1 }
                : p(s, t, d.t["8Y5zsp"], d.t.CyRLmH, d.t["VD3Q+S"]);
        },
        [l.n4.USER]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
                if ((0, m.hT)(e.text)) return { success: !0 };
                let t = (0, s.f)(e.text, r, n, { allowRoles: !1 });
                return { success: t?.type === "userMention" };
            }
        },
        [l.n4.CHANNEL]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "channelMention" === e.type };
            {
                if ((0, m.hT)(e.text)) return { success: !0 };
                let t = (0, s.f)(e.text, r, n);
                return { success: t?.type === "channelMention" };
            }
        },
        [l.n4.ROLE]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: h(e) };
            {
                if ((0, m.hT)(e.text)) return { success: !0 };
                let t = (0, s.f)(e.text, r, n, { allowUsers: !1 });
                return { success: t?.type === "roleMention" };
            }
        },
        [l.n4.MENTIONABLE]: (e, t, n, r) => {
            if ("text" !== e.type) return { success: "userMention" === e.type || h(e) };
            {
                if ((0, m.hT)(e.text)) return { success: !0 };
                let t = (0, s.f)(e.text, r, n);
                return { success: null != t && ("userMention" === t.type || h(t)) };
            }
        },
        [l.n4.ATTACHMENT]: (e, t, n, r, i) => {
            if ("text" !== e.type) return { success: !1 };
            let l = a.A.getUpload(n, t.name, (0, m.Qr)(i));
            return { success: null != l && l.filename === e.text };
        },
    },
    h = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
function p(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: d.intl.formatToPlainString(n, { minimum: g(t.minValue), maximum: g(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: d.intl.formatToPlainString(r, { minimum: g(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: d.intl.formatToPlainString(i, { maximum: g(t.maxValue) }) };
    }
    return { success: !0 };
}
function g(e) {
    return e.toLocaleString(d.intl.currentLocale, { useGrouping: !1 });
}
let x = f;
