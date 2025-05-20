Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = l), (t.bindFormatValues = c);
let r = n(927882),
    i = n(44372);
function o(e) {
    return '$' === e[0];
}
class a {}
t.FormatBuilder = a;
class s extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`), (this.variableName = e), (this.originalMessage = t), (this.nodeType = n);
    }
}
function l(e, t, n, a, u, d = {}, f, _) {
    var p;
    if (1 === t.length && 'string' == typeof t[0]) return void e.pushLiteralText(t[0]);
    let h = 0;
    for (let m of t) {
        if ('string' == typeof m) {
            e.pushLiteralText(m);
            continue;
        }
        let t = m[0];
        if (t === i.FormatJsNodeType.Pound) {
            if ('number' == typeof f) {
                let t = a.formatNumber(f);
                e.pushLiteralText(t);
            }
            continue;
        }
        let g = m[1];
        if (!(g in d) && !o(g)) throw new s(g, _, t);
        let E = d[g];
        switch (t) {
            case i.FormatJsNodeType.Argument:
                'object' == typeof E || 'function' == typeof E ? e.pushObject(E) : e.pushLiteralText(String(E));
                break;
            case i.FormatJsNodeType.Date: {
                let t = m[2],
                    n = t in u.date ? u.date[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(a.formatDate(E, n));
                break;
            }
            case i.FormatJsNodeType.Time: {
                let t = m[2],
                    n = t in u.time ? u.time[t] : null != t ? (0, r.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(a.formatTime(E, n));
                break;
            }
            case i.FormatJsNodeType.Number: {
                let t = m[2],
                    n = t in u.number ? u.number[t] : null != t ? (0, r.parseNumberSkeleton)((0, r.parseNumberSkeletonFromString)(t)) : void 0,
                    i = 'number' != typeof E ? E : E * (null != (p = null == n ? void 0 : n.scale) ? p : 1);
                e.pushLiteralText(a.formatNumber(i, n));
                break;
            }
            case i.FormatJsNodeType.Tag: {
                let t = m[2],
                    r = m[3],
                    i = c(e.constructor, t, n, a, u, d, f),
                    s = null != r ? c(e.constructor, r, n, a, u, d, f) : [];
                if (o(g)) e.pushRichTextTag(g, i, s);
                else {
                    if ('function' != typeof E) throw `expected a function type for a Tag formatting value, ${g}. got ${typeof E}: ${E}`;
                    let t = E(i, `${h++}`);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case i.FormatJsNodeType.Select: {
                let t = E,
                    r = m[2],
                    i = t in r ? r[t] : r.other;
                if (null == i) throw `${t} is not a known option for select value ${g}. Valid options are ${Object.keys(r).join(', ')}`;
                l(e, i, n, a, u, d);
                break;
            }
            case i.FormatJsNodeType.Plural: {
                let t = m[2],
                    r = m[3],
                    i = m[4],
                    o = (() => {
                        var e;
                        let n = `=${E}`;
                        return n in t ? t[n] : null != (e = t[a.getPluralRules({ type: i }).select(E - (null != r ? r : 0))]) ? e : t.other;
                    })();
                if (null == o) throw `${E} is not a known option for plural value ${g}. Valid options are ${Object.keys(t).join(', ')}`;
                l(e, o, n, a, u, d, E - (null != r ? r : 0));
            }
        }
    }
}
function c(e, t, n, r, i, o = {}, a) {
    let s = new e();
    return 'string' == typeof t ? s.pushLiteralText(t) : l(s, t, n, r, i, o, a), s.finish();
}
