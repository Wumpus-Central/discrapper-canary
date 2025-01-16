var i = r(512722),
    a = r.n(i),
    s = r(911969),
    o = r(465343),
    l = r(706454),
    u = r(117530),
    c = r(160062),
    d = r(456007),
    f = r(581364),
    _ = r(388032);
let h = {
        [s.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [s.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [s.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let n = e.text.trim();
            return { success: null != (0, c.Kl)(n) };
        },
        [s.jw.STRING]: (e, n, r) => {
            let i;
            switch ((a()(n.type === s.jw.STRING, 'option type must match validator type'), e.type)) {
                case 'emoji':
                    i = e.surrogate;
                    break;
                case 'text':
                    i = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != n.choices) return { success: null != (0, c.cT)(n.choices, i) };
            if (n.autocomplete && null != (0, c.Wv)(r, n.name, i)) return { success: !0 };
            let o = i;
            if (void 0 !== n.minLength || void 0 !== n.maxLength) {
                if (null == o) return { success: !1 };
                let e = g(o, n, {
                    exactRangeErrorMessage: _.t['e+9/SU'],
                    rangeErrorMessage: _.t.IE1sTk,
                    minErrorMessage: _.t.rXAFQE,
                    maxErrorMessage: _.t.ycEPx8
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [s.jw.INTEGER]: (e, n, r) => {
            a()(n.type === s.jw.INTEGER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != n.choices) return { success: null != (0, c.l1)(n.choices, i) };
            if (n.autocomplete && null != (0, c.xg)(r, n.name, i)) return { success: !0 };
            let o = Number(d.AS(l.default.locale, i));
            return null == o || isNaN(o) || !Number.isInteger(o) || !Number.isSafeInteger(o) ? { success: !1 } : m(o, n, _.t['8Y5zsr'], _.t.CyRLmJ, _.t['VD3Q+f']);
        },
        [s.jw.NUMBER]: (e, n, r) => {
            a()(n.type === s.jw.NUMBER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != n.choices) return { success: null != (0, c.l1)(n.choices, i) };
            if (n.autocomplete && null != (0, c.xg)(r, n.name, i)) return { success: !0 };
            let o = Number(d.AS(l.default.locale, i));
            return isNaN(o) || o > Number.MAX_SAFE_INTEGER || o < Number.MIN_SAFE_INTEGER ? { success: !1 } : m(o, n, _.t['8Y5zsr'], _.t.CyRLmJ, _.t['VD3Q+f']);
        },
        [s.jw.USER]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, o.K)(e.text, i, r, { allowRoles: !1 });
                return { success: (null == n ? void 0 : n.type) === 'userMention' };
            }
        },
        [s.jw.CHANNEL]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, o.K)(e.text, i, r);
                return { success: (null == n ? void 0 : n.type) === 'channelMention' };
            }
        },
        [s.jw.ROLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: p(e) };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, o.K)(e.text, i, r, { allowUsers: !1 });
                return { success: (null == n ? void 0 : n.type) === 'roleMention' };
            }
        },
        [s.jw.MENTIONABLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || p(e) };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, o.K)(e.text, i, r);
                return { success: null != n && ('userMention' === n.type || p(n)) };
            }
        },
        [s.jw.ATTACHMENT]: (e, n, r, i, a) => {
            if ('text' !== e.type) return { success: !1 };
            let s = u.Z.getUpload(r, n.name, (0, f.D7)(a));
            return { success: null != s && s.filename === e.text };
        }
    },
    p = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function m(e, n, r, i, a) {
    if ((null != n.minValue && e < n.minValue) || (null != n.maxValue && e > n.maxValue)) {
        if (null != n.maxValue && null != n.minValue)
            return {
                success: !1,
                error: _.intl.formatToPlainString(r, {
                    minimum: E(n.minValue),
                    maximum: E(n.maxValue)
                })
            };
        if (null != n.minValue)
            return {
                success: !1,
                error: _.intl.formatToPlainString(i, { minimum: E(n.minValue) })
            };
        else if (null != n.maxValue)
            return {
                success: !1,
                error: _.intl.formatToPlainString(a, { maximum: E(n.maxValue) })
            };
    }
    return { success: !0 };
}
function g(e, n, r) {
    if ((void 0 !== n.minLength && e.length < n.minLength) || (void 0 !== n.maxLength && e.length > n.maxLength)) {
        if (void 0 !== n.maxLength && void 0 !== n.minLength && n.minLength === n.maxLength)
            return {
                success: !1,
                error: _.intl.formatToPlainString(r.exactRangeErrorMessage, { value: E(n.minLength) })
            };
        if (void 0 !== n.maxLength && void 0 !== n.minLength)
            return {
                success: !1,
                error: _.intl.formatToPlainString(r.rangeErrorMessage, {
                    minimum: E(n.minLength),
                    maximum: E(n.maxLength)
                })
            };
        else if (void 0 !== n.minLength)
            return {
                success: !1,
                error: _.intl.formatToPlainString(r.minErrorMessage, { minimum: E(n.minLength) })
            };
        else if (void 0 !== n.maxLength)
            return {
                success: !1,
                error: _.intl.formatToPlainString(r.maxErrorMessage, { maximum: E(n.maxLength) })
            };
    }
    return { success: !0 };
}
function E(e) {
    return e.toLocaleString(_.intl.currentLocale, { useGrouping: !1 });
}
n.Z = h;
