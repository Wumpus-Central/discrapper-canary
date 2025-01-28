var n = A(392711),
    r = A.n(n),
    a = A(723454),
    i = A(428595),
    l = A(454585);
let o = r().omit(i.Z.RULES, ['codeBlock', 'heading']),
    s = {
        ...a.Z,
        parse: function (e, t, A) {
            var n;
            let r = a.Z.parse(e, t, A),
                i = Math.min(6, (null !== (n = A.initialHeaderLevel) && void 0 !== n ? n : 3) + r.level);
            return {
                ...r,
                level: i
            };
        }
    },
    d = l.Z.combineAndInjectMentionRule(o, [l.Z.createReactRules(l.Z.defaultReactRuleOptions), { header: s }]),
    c = l.Z.reactParserFor(d);
t.Z = c;
