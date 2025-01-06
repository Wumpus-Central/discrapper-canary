var A = n(392711),
    r = n.n(A),
    a = n(723454),
    l = n(428595),
    i = n(454585);
let o = r().omit(l.Z.RULES, ['codeBlock', 'heading']),
    s = {
        ...a.Z,
        parse: function (e, t, n) {
            var A;
            let r = a.Z.parse(e, t, n),
                l = Math.min(6, (null !== (A = n.initialHeaderLevel) && void 0 !== A ? A : 3) + r.level);
            return {
                ...r,
                level: l
            };
        }
    },
    d = i.Z.combineAndInjectMentionRule(o, [i.Z.createReactRules(i.Z.defaultReactRuleOptions), { header: s }]),
    c = i.Z.reactParserFor(d);
t.Z = c;
