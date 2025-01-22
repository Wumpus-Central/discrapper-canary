var i = r(512722),
    a = r.n(i),
    o = r(911969),
    s = r(465343),
    l = r(706454),
    u = r(117530),
    c = r(160062),
    d = r(456007),
    f = r(581364),
    p = r(388032);
let h = {
        [o.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [o.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [o.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let n = e.text.trim();
            return { success: null != (0, c.Kl)(n) };
        },
        [o.jw.STRING]: (e, n, r) => {
            let i;
            switch ((a()(n.type === o.jw.STRING, 'option type must match validator type'), e.type)) {
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
            let s = i;
            if (void 0 !== n.minLength || void 0 !== n.maxLength) {
                if (null == s) return { success: !1 };
                let e = g(s, n, {
                    exactRangeErrorMessage: p.t['e+9/SU'],
                    rangeErrorMessage: p.t.IE1sTk,
                    minErrorMessage: p.t.rXAFQE,
                    maxErrorMessage: p.t.ycEPx8
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [o.jw.INTEGER]: (e, n, r) => {
            a()(n.type === o.jw.INTEGER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != n.choices) return { success: null != (0, c.l1)(n.choices, i) };
            if (n.autocomplete && null != (0, c.xg)(r, n.name, i)) return { success: !0 };
            let s = Number(d.AS(l.default.locale, i));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s) ? { success: !1 } : m(s, n, p.t['8Y5zsr'], p.t.CyRLmJ, p.t['VD3Q+f']);
        },
        [o.jw.NUMBER]: (e, n, r) => {
            a()(n.type === o.jw.NUMBER, 'option type must match validator type');
            let i = 'text' === e.type ? e.text.trim() : null;
            if (null == i || 0 === i.length) return { success: !1 };
            if (null != n.choices) return { success: null != (0, c.l1)(n.choices, i) };
            if (n.autocomplete && null != (0, c.xg)(r, n.name, i)) return { success: !0 };
            let s = Number(d.AS(l.default.locale, i));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER ? { success: !1 } : m(s, n, p.t['8Y5zsr'], p.t.CyRLmJ, p.t['VD3Q+f']);
        },
        [o.jw.USER]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, s.K)(e.text, i, r, { allowRoles: !1 });
                return { success: (null == n ? void 0 : n.type) === 'userMention' };
            }
        },
        [o.jw.CHANNEL]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, s.K)(e.text, i, r);
                return { success: (null == n ? void 0 : n.type) === 'channelMention' };
            }
        },
        [o.jw.ROLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: _(e) };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, s.K)(e.text, i, r, { allowUsers: !1 });
                return { success: (null == n ? void 0 : n.type) === 'roleMention' };
            }
        },
        [o.jw.MENTIONABLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || _(e) };
            {
                if ((0, f.BH)(e.text)) return { success: !0 };
                let n = (0, s.K)(e.text, i, r);
                return { success: null != n && ('userMention' === n.type || _(n)) };
            }
        },
        [o.jw.ATTACHMENT]: (e, n, r, i, a) => {
            if ('text' !== e.type) return { success: !1 };
            let o = u.Z.getUpload(r, n.name, (0, f.D7)(a));
            return { success: null != o && o.filename === e.text };
        }
    },
    _ = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function m(e, n, r, i, a) {
    if ((null != n.minValue && e < n.minValue) || (null != n.maxValue && e > n.maxValue)) {
        if (null != n.maxValue && null != n.minValue)
            return {
                success: !1,
                error: p.intl.formatToPlainString(r, {
                    minimum: E(n.minValue),
                    maximum: E(n.maxValue)
                })
            };
        if (null != n.minValue)
            return {
                success: !1,
                error: p.intl.formatToPlainString(i, { minimum: E(n.minValue) })
            };
        else if (null != n.maxValue)
            return {
                success: !1,
                error: p.intl.formatToPlainString(a, { maximum: E(n.maxValue) })
            };
    }
    return { success: !0 };
}
function g(e, n, r) {
    if ((void 0 !== n.minLength && e.length < n.minLength) || (void 0 !== n.maxLength && e.length > n.maxLength)) {
        if (void 0 !== n.maxLength && void 0 !== n.minLength && n.minLength === n.maxLength)
            return {
                success: !1,
                error: p.intl.formatToPlainString(r.exactRangeErrorMessage, { value: E(n.minLength) })
            };
        if (void 0 !== n.maxLength && void 0 !== n.minLength)
            return {
                success: !1,
                error: p.intl.formatToPlainString(r.rangeErrorMessage, {
                    minimum: E(n.minLength),
                    maximum: E(n.maxLength)
                })
            };
        else if (void 0 !== n.minLength)
            return {
                success: !1,
                error: p.intl.formatToPlainString(r.minErrorMessage, { minimum: E(n.minLength) })
            };
        else if (void 0 !== n.maxLength)
            return {
                success: !1,
                error: p.intl.formatToPlainString(r.maxErrorMessage, { maximum: E(n.maxLength) })
            };
    }
    return { success: !0 };
}
function E(e) {
    return e.toLocaleString(p.intl.currentLocale, { useGrouping: !1 });
}
n.Z = h;
