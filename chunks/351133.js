n.d(t, { Z: () => E });
var i = n(512722),
    r = n.n(i),
    a = n(911969),
    s = n(465343),
    o = n(706454),
    l = n(117530),
    u = n(160062),
    c = n(456007),
    d = n(581364),
    f = n(388032);
let _ = {
        [a.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [a.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [a.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, u.Kl)(t) };
        },
        [a.jw.STRING]: (e, t, n) => {
            let i;
            switch ((r()(t.type === a.jw.STRING, 'option type must match validator type'), e.type)) {
                case 'emoji':
                    i = e.surrogate;
                    break;
                case 'text':
                    i = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, u.cT)(t.choices, i) };
            if (t.autocomplete && null != (0, u.Wv)(n, t.name, i)) return { success: !0 };
            let s = i;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == s) return { success: !1 };
                let e = m(s, t, {
                    exactRangeErrorMessage: f.t['e+9/SU'],
                    rangeErrorMessage: f.t.IE1sTk,
                    minErrorMessage: f.t.rXAFQE,
                    maxErrorMessage: f.t.ycEPx8
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [a.jw.INTEGER]: (e, t, n) => {
            r()(t.type === a.jw.INTEGER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.l1)(t.choices, i) };
            if (t.autocomplete && null != (0, u.xg)(n, t.name, i)) return { success: !0 };
            let s = Number(c.AS(o.default.locale, i));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s) ? { success: !1 } : h(s, t, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']);
        },
        [a.jw.NUMBER]: (e, t, n) => {
            r()(t.type === a.jw.NUMBER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.l1)(t.choices, i) };
            if (t.autocomplete && null != (0, u.xg)(n, t.name, i)) return { success: !0 };
            let s = Number(c.AS(o.default.locale, i));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER ? { success: !1 } : h(s, t, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']);
        },
        [a.jw.USER]: (e, t, n, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, i, n, { allowRoles: !1 });
                return { success: (null == t ? void 0 : t.type) === 'userMention' };
            }
        },
        [a.jw.CHANNEL]: (e, t, n, i) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, i, n);
                return { success: (null == t ? void 0 : t.type) === 'channelMention' };
            }
        },
        [a.jw.ROLE]: (e, t, n, i) => {
            if ('text' !== e.type) return { success: p(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, i, n, { allowUsers: !1 });
                return { success: (null == t ? void 0 : t.type) === 'roleMention' };
            }
        },
        [a.jw.MENTIONABLE]: (e, t, n, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || p(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, i, n);
                return { success: null != t && ('userMention' === t.type || p(t)) };
            }
        },
        [a.jw.ATTACHMENT]: (e, t, n, i, r) => {
            if ('text' !== e.type) return { success: !1 };
            let a = l.Z.getUpload(n, t.name, (0, d.D7)(r));
            return { success: null != a && a.filename === e.text };
        }
    },
    p = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function h(e, t, n, i, r) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n, {
                    minimum: g(t.minValue),
                    maximum: g(t.maxValue)
                })
            };
        if (null != t.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(i, { minimum: g(t.minValue) })
            };
        if (null != t.maxValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r, { maximum: g(t.maxValue) })
            };
    }
    return { success: !0 };
}
function m(e, t, n) {
    if ((void 0 !== t.minLength && e.length < t.minLength) || (void 0 !== t.maxLength && e.length > t.maxLength)) {
        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.exactRangeErrorMessage, { value: g(t.minLength) })
            };
        if (void 0 !== t.maxLength && void 0 !== t.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.rangeErrorMessage, {
                    minimum: g(t.minLength),
                    maximum: g(t.maxLength)
                })
            };
        if (void 0 !== t.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.minErrorMessage, { minimum: g(t.minLength) })
            };
        else if (void 0 !== t.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.maxErrorMessage, { maximum: g(t.maxLength) })
            };
    }
    return { success: !0 };
}
function g(e) {
    return e.toLocaleString(f.intl.currentLocale, { useGrouping: !1 });
}
let E = _;
