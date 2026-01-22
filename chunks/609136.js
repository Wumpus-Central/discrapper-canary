n.d(t, {
    A: () => E,
}),
    n(733351);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(224868),
    o = n(773669),
    l = n(522602),
    c = n(360161),
    u = n(258363),
    d = n(168186),
    f = n(985018);
let p = {
        [a.n4.SUB_COMMAND]: () => ({
            success: !1,
        }),
        [a.n4.SUB_COMMAND_GROUP]: () => ({
            success: !1,
        }),
        [a.n4.BOOLEAN]: (e) => {
            if ("text" !== e.type)
                return {
                    success: !1,
                };
            let t = e.text.trim();
            return {
                success: null != (0, c.a5)(t),
            };
        },
        [a.n4.STRING]: (e, t, n) => {
            let r;
            switch ((i()(t.type === a.n4.STRING, "option type must match validator type"), e.type)) {
                case "emoji":
                    r = e.surrogate;
                    break;
                case "text":
                    r = e.text.trim();
                    break;
                default:
                    return {
                        success: !1,
                    };
            }
            if (null != t.choices)
                return {
                    success: null != (0, c.$7)(t.choices, r),
                };
            if (t.autocomplete && null != (0, c.Xf)(n, t.name, r))
                return {
                    success: !0,
                };
            let s = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == s)
                    return {
                        success: !1,
                    };
                let e = m(s, t, {
                    exactRangeErrorMessage: f.t["e+9/SY"],
                    rangeErrorMessage: f.t.IE1sTh,
                    minErrorMessage: f.t.rXAFQD,
                    maxErrorMessage: f.t["ycEPx/"],
                });
                if (!e.success) return e;
            }
            return {
                success: !0,
            };
        },
        [a.n4.INTEGER]: (e, t, n) => {
            i()(t.type === a.n4.INTEGER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length)
                return {
                    success: !1,
                };
            if (null != t.choices)
                return {
                    success: null != (0, c.Bk)(t.choices, r),
                };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r))
                return {
                    success: !0,
                };
            let s = Number(u.ib(o.default.locale, r));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s)
                ? {
                      success: !1,
                  }
                : h(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"]);
        },
        [a.n4.NUMBER]: (e, t, n) => {
            i()(t.type === a.n4.NUMBER, "option type must match validator type");
            let r = "text" === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length)
                return {
                    success: !1,
                };
            if (null != t.choices)
                return {
                    success: null != (0, c.Bk)(t.choices, r),
                };
            if (t.autocomplete && null != (0, c.lM)(n, t.name, r))
                return {
                    success: !0,
                };
            let s = Number(u.ib(o.default.locale, r));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER
                ? {
                      success: !1,
                  }
                : h(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"]);
        },
        [a.n4.USER]: (e, t, n, r) => {
            if ("text" !== e.type)
                return {
                    success: "userMention" === e.type,
                };
            {
                if ((0, d.hT)(e.text))
                    return {
                        success: !0,
                    };
                let t = (0, s.f)(e.text, r, n, {
                    allowRoles: !1,
                });
                return {
                    success: (null == t ? void 0 : t.type) === "userMention",
                };
            }
        },
        [a.n4.CHANNEL]: (e, t, n, r) => {
            if ("text" !== e.type)
                return {
                    success: "channelMention" === e.type,
                };
            {
                if ((0, d.hT)(e.text))
                    return {
                        success: !0,
                    };
                let t = (0, s.f)(e.text, r, n);
                return {
                    success: (null == t ? void 0 : t.type) === "channelMention",
                };
            }
        },
        [a.n4.ROLE]: (e, t, n, r) => {
            if ("text" !== e.type)
                return {
                    success: _(e),
                };
            {
                if ((0, d.hT)(e.text))
                    return {
                        success: !0,
                    };
                let t = (0, s.f)(e.text, r, n, {
                    allowUsers: !1,
                });
                return {
                    success: (null == t ? void 0 : t.type) === "roleMention",
                };
            }
        },
        [a.n4.MENTIONABLE]: (e, t, n, r) => {
            if ("text" !== e.type)
                return {
                    success: "userMention" === e.type || _(e),
                };
            {
                if ((0, d.hT)(e.text))
                    return {
                        success: !0,
                    };
                let t = (0, s.f)(e.text, r, n);
                return {
                    success: null != t && ("userMention" === t.type || _(t)),
                };
            }
        },
        [a.n4.ATTACHMENT]: (e, t, n, r, i) => {
            if ("text" !== e.type)
                return {
                    success: !1,
                };
            let a = l.A.getUpload(n, t.name, (0, d.Qr)(i));
            return {
                success: null != a && a.filename === e.text,
            };
        },
    },
    _ = (e) => "roleMention" === e.type || ("textMention" === e.type && "@everyone" === e.text);

function h(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n, {
                    minimum: g(t.minValue),
                    maximum: g(t.maxValue),
                }),
            };
        else if (null != t.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r, {
                    minimum: g(t.minValue),
                }),
            };
        else if (null != t.maxValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(i, {
                    maximum: g(t.maxValue),
                }),
            };
    }
    return {
        success: !0,
    };
}

function m(e, t, n) {
    if ((void 0 !== t.minLength && e.length < t.minLength) || (void 0 !== t.maxLength && e.length > t.maxLength)) {
        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.exactRangeErrorMessage, {
                    value: g(t.minLength),
                }),
            };
        else if (void 0 !== t.maxLength && void 0 !== t.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.rangeErrorMessage, {
                    minimum: g(t.minLength),
                    maximum: g(t.maxLength),
                }),
            };
        else if (void 0 !== t.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.minErrorMessage, {
                    minimum: g(t.minLength),
                }),
            };
        else if (void 0 !== t.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(n.maxErrorMessage, {
                    maximum: g(t.maxLength),
                }),
            };
    }
    return {
        success: !0,
    };
}

function g(e) {
    return e.toLocaleString(f.intl.currentLocale, {
        useGrouping: !1,
    });
}
let E = p;
