Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = l), (t.bindFormatValues = u);
let i = n(927882),
    r = n(772660);
function a(e) {
    return '$' === e[0];
}
class s {}
t.FormatBuilder = s;
class o extends Error {
    constructor(e, t, n) {
        super(`No value for variable '${e}' was provided for the localized message '${t}'`), (this.variableName = e), (this.originalMessage = t), (this.nodeType = n);
    }
}
function l(e, t, n, s, c, d = {}, f, _) {
    var p;
    if (1 === t.length && 'string' == typeof t[0]) {
        e.pushLiteralText(t[0]);
        return;
    }
    let h = 0;
    for (let m of t) {
        if ('string' == typeof m) {
            e.pushLiteralText(m);
            continue;
        }
        let t = m[0];
        if (t === r.FormatJsNodeType.Pound) {
            if ('number' == typeof f) {
                let t = s.formatNumber(f);
                e.pushLiteralText(t);
            }
            continue;
        }
        let g = m[1];
        if (!(g in d) && !a(g)) throw new o(g, _, t);
        let E = d[g];
        switch (t) {
            case r.FormatJsNodeType.Argument:
                'object' == typeof E || 'function' == typeof E ? e.pushObject(E) : e.pushLiteralText(String(E));
                break;
            case r.FormatJsNodeType.Date: {
                let t = m[2],
                    n = t in c.date ? c.date[t] : null != t ? (0, i.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(s.formatDate(E, n));
                break;
            }
            case r.FormatJsNodeType.Time: {
                let t = m[2],
                    n = t in c.time ? c.time[t] : null != t ? (0, i.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(s.formatTime(E, n));
                break;
            }
            case r.FormatJsNodeType.Number: {
                let t = m[2],
                    n = t in c.number ? c.number[t] : null != t ? (0, i.parseNumberSkeleton)((0, i.parseNumberSkeletonFromString)(t)) : void 0,
                    r = 'number' != typeof E ? E : E * (null !== (p = null == n ? void 0 : n.scale) && void 0 !== p ? p : 1);
                e.pushLiteralText(s.formatNumber(r, n));
                break;
            }
            case r.FormatJsNodeType.Tag: {
                let t = m[2],
                    i = m[3],
                    r = u(e.constructor, t, n, s, c, d, f),
                    o = null != i ? u(e.constructor, i, n, s, c, d, f) : [];
                if (a(g)) e.pushRichTextTag(g, r, o);
                else {
                    if ('function' != typeof E) throw `expected a function type for a Tag formatting value, ${g}. got ${typeof E}: ${E}`;
                    let t = E(r, `${h++}`);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case r.FormatJsNodeType.Select: {
                let t = E,
                    i = m[2],
                    r = t in i ? i[t] : i.other;
                if (null == r) throw `${t} is not a known option for select value ${g}. Valid options are ${Object.keys(i).join(', ')}`;
                l(e, r, n, s, c, d);
                break;
            }
            case r.FormatJsNodeType.Plural: {
                let t = m[2],
                    i = m[3],
                    r = m[4],
                    a = (() => {
                        var e;
                        let n = `=${E}`;
                        return n in t ? t[n] : null !== (e = t[s.getPluralRules({ type: r }).select(E - (null != i ? i : 0))]) && void 0 !== e ? e : t.other;
                    })();
                if (null == a) throw `${E} is not a known option for plural value ${g}. Valid options are ${Object.keys(t).join(', ')}`;
                l(e, a, n, s, c, d, E - (null != i ? i : 0));
            }
        }
    }
}
function u(e, t, n, i, r, a = {}, s) {
    let o = new e();
    return 'string' == typeof t ? o.pushLiteralText(t) : l(o, t, n, i, r, a, s), o.finish();
}
