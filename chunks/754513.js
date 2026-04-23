n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(975571),
    d = n(546457),
    c = n(897295),
    u = n(411335),
    m = n(652215),
    g = n(985018),
    h = n(674130);
let x = o.A.getArticleURL(m.MVz.GUILD_AUTOMOD_REGEX);
function _(e) {
    let { hasErrors: t, text: n, errorText: l } = e;
    return t
        ? (0, i.jsx)("div", {
              className: h.W$,
              children: (0, i.jsx)(a.E, {
                  className: h.F,
                  variant: "text-xs/medium",
                  color: "text-feedback-critical",
                  children: l ?? g.intl.format(g.t.jKYAPu, { helpArticle: x }),
              }),
          })
        : (0, i.jsx)(a.E, { className: h.W$, variant: "text-xs/medium", color: "text-muted", children: n });
}
function p(e) {
    let { rule: t, onChangeText: n, className: s } = e,
        {
            patterns: a,
            valueError: o,
            errors: m,
            validatePatternsChanged: p,
            validateEditingValueChanged: A,
        } = (0, c.A)(t, n),
        [E] = l.useState(() => ({ tags: a, value: "", selections: [], isSelecting: !1 })),
        f = l.useMemo(
            () =>
                m.reduce((e, t) => {
                    let {
                        pattern: n,
                        message: i,
                        description: l,
                        erroringCharacterLength: s = n.length,
                        erroringCharacterOffset: r = 0,
                    } = t;
                    return (
                        null == a.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: l ?? i,
                                erroringCharacterLength: s,
                                erroringCharacterOffset: r,
                            }),
                        e
                    );
                }, {}),
            [m, a],
        ),
        j = l.useCallback(
            (e) => {
                p(e, a);
            },
            [p, a],
        ),
        N = l.useCallback(
            (e) => {
                A(e);
            },
            [A],
        );
    return (0, i.jsxs)("div", {
        className: r()(h.Qn, s),
        children: [
            (0, i.jsx)(d.A, {
                placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
                initialValue: E,
                onChangeTags: j,
                onChangeNewTagValue: N,
                tagErrors: f,
                maxTags: u.qm,
            }),
            (0, i.jsx)(_, {
                text: g.intl.format(g.t["PGC/AJ"], { helpArticle: x }),
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
