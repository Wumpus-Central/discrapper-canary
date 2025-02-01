t.d(e, { Z: () => c });
var n = t(392711),
    a = t.n(n),
    l = t(723454),
    r = t(428595),
    i = t(454585);
let o = a().omit(r.Z.RULES, ['codeBlock', 'heading']),
    s = {
        ...l.Z,
        parse: function (A, e, t) {
            var n;
            let a = l.Z.parse(A, e, t),
                r = Math.min(6, (null !== (n = t.initialHeaderLevel) && void 0 !== n ? n : 3) + a.level);
            return {
                ...a,
                level: r
            };
        }
    },
    d = i.Z.combineAndInjectMentionRule(o, [i.Z.createReactRules(i.Z.defaultReactRuleOptions), { header: s }]),
    c = i.Z.reactParserFor(d);
