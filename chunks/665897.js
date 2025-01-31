Object.defineProperty(t, '__esModule', { value: !0 }), (t.FormatBuilder = void 0), (t.bindFormatValuesWithBuilder = l), (t.bindFormatValues = u);
let i = n(927882),
    r = n(246206),
    a = n(950119);
function s(e) {
    return '$' === e[0];
}
class o {}
function l(e, t, n, o, c, d = {}, f, _) {
    var p;
    if (1 === t.length && 'string' == typeof t[0]) {
        e.pushLiteralText(t[0]);
        return;
    }
    for (let h of t) {
        if ('string' == typeof h) {
            e.pushLiteralText(h);
            continue;
        }
        let t = h[0];
        if (t === r.FormatJsNodeType.Pound) {
            if ('number' == typeof f) {
                let t = o.getNumberFormat(n).format(f);
                e.pushLiteralText(t);
            }
            continue;
        }
        let m = h[1];
        if (!(m in d) && !s(m)) throw new a.MissingValueError(m, _);
        let g = d[m];
        switch (t) {
            case r.FormatJsNodeType.Argument:
                'object' == typeof g || 'function' == typeof g ? e.pushObject(g) : e.pushLiteralText(String(g));
                break;
            case r.FormatJsNodeType.Date: {
                let t = h[2],
                    r = t in c.date ? c.date[t] : null != t ? (0, i.parseDateTimeSkeleton)(t) : c.time.medium;
                e.pushLiteralText(o.getDateTimeFormat(n, r).format(g));
                break;
            }
            case r.FormatJsNodeType.Time: {
                let t = h[2],
                    r = t in c.time ? c.time[t] : null != t ? (0, i.parseDateTimeSkeleton)(t) : void 0;
                e.pushLiteralText(o.getDateTimeFormat(n, r).format(g));
                break;
            }
            case r.FormatJsNodeType.Number: {
                let t = h[2],
                    r = t in c.number ? c.number[t] : null != t ? (0, i.parseNumberSkeleton)((0, i.parseNumberSkeletonFromString)(t)) : void 0,
                    a = 'number' != typeof g ? g : g * (null !== (p = null == r ? void 0 : r.scale) && void 0 !== p ? p : 1);
                e.pushLiteralText(o.getNumberFormat(n, r).format(a));
                break;
            }
            case r.FormatJsNodeType.Tag: {
                let t = h[2],
                    i = h[3],
                    r = u(e.constructor, t, n, o, c, d, f),
                    a = null != i ? u(e.constructor, i, n, o, c, d, f) : [];
                if (s(m)) e.pushRichTextTag(m, r, a);
                else {
                    if ('function' != typeof g) throw `expected a function type for a Tag formatting value, ${m}. got ${typeof g}: ${g}`;
                    let t = g(r);
                    for (let n of (t = Array.isArray(t) ? t : [t])) 'string' == typeof n ? e.pushLiteralText(n) : e.pushObject(n);
                }
                break;
            }
            case r.FormatJsNodeType.Select: {
                let t = g,
                    i = h[2],
                    r = t in i ? i[t] : i.other;
                if (null == r) throw `${t} is not a known option for select value ${m}. Valid options are ${Object.keys(i).join(', ')}`;
                l(e, r, n, o, c, d);
                break;
            }
            case r.FormatJsNodeType.Plural: {
                let t = h[2],
                    i = h[3],
                    r = h[4],
                    a = (() => {
                        var e;
                        let a = `=${g}`;
                        return a in t ? t[a] : null !== (e = t[o.getPluralRules(n, { type: r }).select(g - (null != i ? i : 0))]) && void 0 !== e ? e : t.other;
                    })();
                if (null == a) throw `${g} is not a known option for plural value ${m}. Valid options are ${Object.keys(t).join(', ')}`;
                l(e, a, n, o, c, d, g - (null != i ? i : 0));
            }
        }
    }
}
function u(e, t, n, i, r, a = {}, s) {
    let o = new e();
    return 'string' == typeof t ? o.pushLiteralText(t) : l(o, t, n, i, r, a, s), o.finish();
}
t.FormatBuilder = o;
