n.d(t, { Z: () => u });
var i = n(392711),
    l = n.n(i),
    a = n(723454),
    r = n(428595),
    s = n(454585);
let o = l().omit(r.Z.RULES, ['codeBlock', 'heading']),
    c = {
        ...a.Z,
        parse: function (e, t, n) {
            var i;
            let l = a.Z.parse(e, t, n),
                r = Math.min(6, (null !== (i = n.initialHeaderLevel) && void 0 !== i ? i : 3) + l.level);
            return {
                ...l,
                level: r
            };
        }
    },
    d = s.Z.combineAndInjectMentionRule(o, [s.Z.createReactRules(s.Z.defaultReactRuleOptions), { header: c }]),
    u = s.Z.reactParserFor(d);
