Object.defineProperty(n, '__esModule', { value: !0 }), (n.FormatBuilder = void 0), (n.bindFormatValuesWithBuilder = u), (n.bindFormatValues = c);
let i = r(927882),
    a = r(485340),
    o = r(950119);
function s(e) {
    return '$' === e[0];
}
class l {}
function u(e, n, r, l, d, f = {}, p, h) {
    var _;
    if (1 === n.length && 'string' == typeof n[0]) {
        e.pushLiteralText(n[0]);
        return;
    }
    for (let m of n) {
        if ('string' == typeof m) {
            e.pushLiteralText(m);
            continue;
        }
        let n = m[0];
        if (n === a.FormatJsNodeType.Pound) {
            if ('number' == typeof p) {
                let n = l.getNumberFormat(r).format(p);
                e.pushLiteralText(n);
            }
            continue;
        }
        let g = m[1];
        if (!(g in f) && !s(g)) throw new o.MissingValueError(g, h);
        let E = f[g];
        switch (n) {
            case a.FormatJsNodeType.Argument:
                'object' == typeof E || 'function' == typeof E ? e.pushObject(E) : e.pushLiteralText(String(E));
                break;
            case a.FormatJsNodeType.Date: {
                let n = m[2],
                    a = n in d.date ? d.date[n] : null != n ? (0, i.parseDateTimeSkeleton)(n) : d.time.medium;
                e.pushLiteralText(l.getDateTimeFormat(r, a).format(E));
                break;
            }
            case a.FormatJsNodeType.Time: {
                let n = m[2],
                    a = n in d.time ? d.time[n] : null != n ? (0, i.parseDateTimeSkeleton)(n) : void 0;
                e.pushLiteralText(l.getDateTimeFormat(r, a).format(E));
                break;
            }
            case a.FormatJsNodeType.Number: {
                let n = m[2],
                    a = n in d.number ? d.number[n] : null != n ? (0, i.parseNumberSkeleton)((0, i.parseNumberSkeletonFromString)(n)) : void 0,
                    o = 'number' != typeof E ? E : E * (null !== (_ = null == a ? void 0 : a.scale) && void 0 !== _ ? _ : 1);
                e.pushLiteralText(l.getNumberFormat(r, a).format(o));
                break;
            }
            case a.FormatJsNodeType.Tag: {
                let n = m[2],
                    i = m[3],
                    a = c(e.constructor, n, r, l, d, f, p),
                    o = null != i ? c(e.constructor, i, r, l, d, f, p) : [];
                if (s(g)) e.pushRichTextTag(g, a, o);
                else {
                    if ('function' != typeof E) throw `expected a function type for a Tag formatting value, ${g}. got ${typeof E}: ${E}`;
                    let n = E(a);
                    for (let r of (n = Array.isArray(n) ? n : [n])) 'string' == typeof r ? e.pushLiteralText(r) : e.pushObject(r);
                }
                break;
            }
            case a.FormatJsNodeType.Select: {
                let n = E,
                    i = m[2],
                    a = n in i ? i[n] : i.other;
                if (null == a) throw `${n} is not a known option for select value ${g}. Valid options are ${Object.keys(i).join(', ')}`;
                u(e, a, r, l, d, f);
                break;
            }
            case a.FormatJsNodeType.Plural: {
                let n = m[2],
                    i = m[3],
                    a = m[4],
                    o = (() => {
                        var e;
                        let o = `=${E}`;
                        return o in n ? n[o] : null !== (e = n[l.getPluralRules(r, { type: a }).select(E - (null != i ? i : 0))]) && void 0 !== e ? e : n.other;
                    })();
                if (null == o) throw `${E} is not a known option for plural value ${g}. Valid options are ${Object.keys(n).join(', ')}`;
                u(e, o, r, l, d, f, E - (null != i ? i : 0));
            }
        }
    }
}
function c(e, n, r, i, a, o = {}, s) {
    let l = new e();
    return 'string' == typeof n ? (l.pushLiteralText(n), l.finish()) : (u(l, n, r, i, a, o, s), l.finish());
}
n.FormatBuilder = l;
