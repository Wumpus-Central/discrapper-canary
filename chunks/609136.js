n.d(t, { A: () => f });
var i = n(284009),
    r = n.n(i),
    l = n(155718),
    a = n(224868),
    s = n(773669),
    o = n(522602),
    d = n(360161),
    u = n(258363),
    c = n(168186),
    h = n(985018);
let E = {
        [l.n4.SUB_COMMAND]: () => ({ success: !1 }),
        [l.n4.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [l.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, d.a5)(t) };
        },
        [l.n4.STRING]: (e, t, n) => {
            let i;
            switch ((r()(t.type === l.n4.STRING, "option type must match validator type"), e.type)) {
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
            let a = i;
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
                                error: h.intl.formatToPlainString(n.exactRangeErrorMessage, { value: A(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.rangeErrorMessage, {
                                    minimum: A(t.minLength),
                                    maximum: A(t.maxLength),
                                }),
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.minErrorMessage, { minimum: A(t.minLength) }),
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: h.intl.formatToPlainString(n.maxErrorMessage, { maximum: A(t.maxLength) }),
                            };
                    }
                    return { success: !0 };
                })(a, t, {
                    exactRangeErrorMessage: h.t["e+9/SY"],
                    rangeErrorMessage: h.t.IE1sTh,
                    minErrorMessage: h.t.rXAFQD,
                    maxErrorMessage: h.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [l.n4.INTEGER]: (e, t, n) => {
            r()(t.type === l.n4.INTEGER, "option type must match validator type");
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, i)) return { success: !0 };
            let a = Number(u.normalizeNumericString(s.default.locale, i));
            return null == a || isNaN(a) || !Number.isInteger(a) || !Number.isSafeInteger(a)
                ? { success: !1 }
                : p(a, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
        },
        [l.n4.NUMBER]: (e, t, n) => {
            r()(t.type === l.n4.NUMBER, "option type must match validator type");
            let i = "text" === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, d.Bk)(t.choices, i) };
            if (t.autocomplete && null != (0, d.lM)(n, t.name, i)) return { success: !0 };
            let a = Number(u.normalizeNumericString(s.default.locale, i));
            return isNaN(a) || a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER
                ? { success: !1 }
                : p(a, t, h.t["8Y5zsp"], h.t.CyRLmH, h.t["VD3Q+S"]);
        },
        [l.n4.USER]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type };
            {
                if ((0, c.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, i, n, { allowRoles: !1 });
                return { success: t?.type === "userMention" };
            }
        },
        [l.n4.CHANNEL]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "channelMention" === e.type };
            {
                if ((0, c.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, i, n);
                return { success: t?.type === "channelMention" };
            }
        },
        [l.n4.ROLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: _(e) };
            {
                if ((0, c.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, i, n, { allowUsers: !1 });
                return { success: t?.type === "roleMention" };
            }
        },
        [l.n4.MENTIONABLE]: (e, t, n, i) => {
            if ("text" !== e.type) return { success: "userMention" === e.type || _(e) };
            {
                if ((0, c.hT)(e.text)) return { success: !0 };
                let t = (0, a.f)(e.text, i, n);
                return { success: null != t && ("userMention" === t.type || _(t)) };
            }
        },
        [l.n4.ATTACHMENT]: (e, t, n, i, r) => {
            if ("text" !== e.type) return { success: !1 };
            let l = o.A.getUpload(n, t.name, (0, c.Qr)(r));
            return { success: null != l && l.filename === e.text };
        },
    },
    _ = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);
function p(e, t, n, i, r) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: h.intl.formatToPlainString(n, { minimum: A(t.minValue), maximum: A(t.maxValue) }),
            };
        else if (null != t.minValue)
            return { success: !1, error: h.intl.formatToPlainString(i, { minimum: A(t.minValue) }) };
        else if (null != t.maxValue)
            return { success: !1, error: h.intl.formatToPlainString(r, { maximum: A(t.maxValue) }) };
    }
    return { success: !0 };
}
function A(e) {
    return e.toLocaleString(h.intl.currentLocale, { useGrouping: !1 });
}
let f = E;
