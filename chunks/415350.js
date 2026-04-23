n.d(t, { A: () => u });
var i = n(735438),
    l = n.n(i),
    a = n(223637),
    s = n(542664),
    r = n(46054);
let o = l().omit(s.A.RULES, ["codeBlock", "heading"]),
    d = {
        ...a.A,
        parse: function (e, t, n) {
            let i = a.A.parse(e, t, n),
                l = Math.min(6, (n.initialHeaderLevel ?? 3) + i.level);
            return { ...i, level: l };
        },
    },
    c = r.A.combineAndInjectMentionRule(o, [r.A.createReactRules(r.A.defaultReactRuleOptions), { header: d }]),
    u = r.A.reactParserFor(c);
