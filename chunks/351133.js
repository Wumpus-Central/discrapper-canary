n.d(t, { Z: () => E }), n(566702);
var r = n(512722),
    i = n.n(r),
    o = n(911969),
    a = n(465343),
    s = n(706454),
    l = n(117530),
    c = n(160062),
    u = n(456007),
    d = n(581364),
    f = n(388032);
let _ = {
        [o.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [o.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [o.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, c.Kl)(t) };
        },
        [o.jw.STRING]: (e, t, n) => {
            let r;
            switch ((i()(t.type === o.jw.STRING, 'option type must match validator type'), e.type)) {
                case 'emoji':
                    r = e.surrogate;
                    break;
                case 'text':
                    r = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, c.cT)(t.choices, r) };
            if (t.autocomplete && null != (0, c.Wv)(n, t.name, r)) return { success: !0 };
            let a = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == a) return { success: !1 };
                let e = m(a, t, {
                    exactRangeErrorMessage: f.t['e+9/SU'],
                    rangeErrorMessage: f.t.IE1sTk,
                    minErrorMessage: f.t.rXAFQE,
                    maxErrorMessage: f.t.ycEPx8
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [o.jw.INTEGER]: (e, t, n) => {
            i()(t.type === o.jw.INTEGER, 'option type must match validator type');
            let r = 'text' === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.l1)(t.choices, r) };
            if (t.autocomplete && null != (0, c.xg)(n, t.name, r)) return { success: !0 };
            let a = Number(u.AS(s.default.locale, r));
            return null == a || isNaN(a) || !Number.isInteger(a) || !Number.isSafeInteger(a) ? { success: !1 } : h(a, t, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']);
        },
        [o.jw.NUMBER]: (e, t, n) => {
            i()(t.type === o.jw.NUMBER, 'option type must match validator type');
            let r = 'text' === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, c.l1)(t.choices, r) };
            if (t.autocomplete && null != (0, c.xg)(n, t.name, r)) return { success: !0 };
            let a = Number(u.AS(s.default.locale, r));
            return isNaN(a) || a > Number.MAX_SAFE_INTEGER || a < Number.MIN_SAFE_INTEGER ? { success: !1 } : h(a, t, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']);
        },
        [o.jw.USER]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, a.K)(e.text, r, n, { allowRoles: !1 });
                return { success: (null == t ? void 0 : t.type) === 'userMention' };
            }
        },
        [o.jw.CHANNEL]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, a.K)(e.text, r, n);
                return { success: (null == t ? void 0 : t.type) === 'channelMention' };
            }
        },
        [o.jw.ROLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: p(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, a.K)(e.text, r, n, { allowUsers: !1 });
                return { success: (null == t ? void 0 : t.type) === 'roleMention' };
            }
        },
        [o.jw.MENTIONABLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || p(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, a.K)(e.text, r, n);
                return { success: null != t && ('userMention' === t.type || p(t)) };
            }
        },
        [o.jw.ATTACHMENT]: (e, t, n, r, i) => {
            if ('text' !== e.type) return { success: !1 };
            let o = l.Z.getUpload(n, t.name, (0, d.D7)(i));
            return { success: null != o && o.filename === e.text };
        }
    },
    p = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function h(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: f.NW.formatToPlainString(n, {
                    minimum: g(t.minValue),
                    maximum: g(t.maxValue)
                })
            };
        else if (null != t.minValue)
            return {
                success: !1,
                error: f.NW.formatToPlainString(r, { minimum: g(t.minValue) })
            };
        else if (null != t.maxValue)
            return {
                success: !1,
                error: f.NW.formatToPlainString(i, { maximum: g(t.maxValue) })
            };
    }
    return { success: !0 };
}
function m(e, t, n) {
    if ((void 0 !== t.minLength && e.length < t.minLength) || (void 0 !== t.maxLength && e.length > t.maxLength)) {
        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
            return {
                success: !1,
                error: f.NW.formatToPlainString(n.exactRangeErrorMessage, { value: g(t.minLength) })
            };
        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
            return {
                success: !1,
                error: f.NW.formatToPlainString(n.rangeErrorMessage, {
                    minimum: g(t.minLength),
                    maximum: g(t.maxLength)
                })
            };
        else if (void 0 !== t.minLength)
            return {
                success: !1,
                error: f.NW.formatToPlainString(n.minErrorMessage, { minimum: g(t.minLength) })
            };
        else if (void 0 !== t.maxLength)
            return {
                success: !1,
                error: f.NW.formatToPlainString(n.maxErrorMessage, { maximum: g(t.maxLength) })
            };
    }
    return { success: !0 };
}
function g(e) {
    return e.toLocaleString(f.NW.currentLocale, { useGrouping: !1 });
}
let E = _;
