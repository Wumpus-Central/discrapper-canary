"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(975571),
    d = n(546457),
    c = n(897295),
    u = n(411335),
    m = n(652215),
    g = n(985018),
    x = n(256893);
let h = o.A.getArticleURL(m.MVz.GUILD_AUTOMOD_REGEX);
function _(e) {
    let { hasErrors: t, text: n, errorText: s } = e;
    return t
        ? (0, i.jsx)("div", {
              className: x.W$,
              children: (0, i.jsx)(a.Text, {
                  className: x.F,
                  variant: "text-xs/medium",
                  color: "text-feedback-critical",
                  children: s ?? g.intl.format(g.t.jKYAPu, { helpArticle: h }),
              }),
          })
        : (0, i.jsx)(a.Text, { className: x.W$, variant: "text-xs/medium", color: "text-muted", children: n });
}
function A(e) {
    let { rule: t, onChangeText: n, className: l } = e,
        {
            patterns: a,
            valueError: o,
            errors: m,
            validatePatternsChanged: A,
            validateEditingValueChanged: p,
        } = (0, c.A)(t, n),
        [f] = s.useState(() => ({ tags: a, value: "", selections: [], isSelecting: !1 })),
        j = s.useMemo(
            () =>
                m.reduce((e, t) => {
                    let {
                        pattern: n,
                        message: i,
                        description: s,
                        erroringCharacterLength: l = n.length,
                        erroringCharacterOffset: r = 0,
                    } = t;
                    return (
                        null == a.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: s ?? i,
                                erroringCharacterLength: l,
                                erroringCharacterOffset: r,
                            }),
                        e
                    );
                }, {}),
            [m, a],
        ),
        N = s.useCallback(
            (e) => {
                A(e, a);
            },
            [A, a],
        ),
        E = s.useCallback(
            (e) => {
                p(e);
            },
            [p],
        );
    return (0, i.jsxs)("div", {
        className: r()(x.Qn, l),
        children: [
            (0, i.jsx)(d.A, {
                placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
                initialValue: f,
                onChangeTags: N,
                onChangeNewTagValue: E,
                tagErrors: j,
                maxTags: u.qm,
            }),
            (0, i.jsx)(_, {
                text: g.intl.format(g.t["PGC/AJ"], { helpArticle: h }),
                hasErrors: m.length > 0 || null != o,
                errorText:
                    m.find((e) => {
                        let { pattern: t } = e;
                        return t === c.B;
                    })?.message ?? o?.message,
            }),
        ],
    });
}
