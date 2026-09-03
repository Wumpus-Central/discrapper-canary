n.d(t, { A: () => l });
var i = n(478676),
    r = n.n(i);
let a = /\n$/,
    s = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/,
    l = {
        order: r().defaultRules.heading.order,
        requiredFirstCharacters: ["-"],
        match: (e, t, n) =>
            !1 === t.allowSubtext
                ? null
                : null == n || "" === n || null != n.match(a)
                  ? (0, i.anyScopeRegex)(s)(e, t, n)
                  : null,
        parse: function (e, t, n) {
            return { content: (0, i.parseInline)(t, e[1].trim(), { ...n, allowSubtext: !1 }) };
        },
    };
