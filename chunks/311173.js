n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(63063),
    c = n(256569),
    d = n(858457),
    u = n(273504),
    m = n(981631),
    h = n(388032),
    g = n(384547);
let x = o.Z.getArticleURL(m.BhN.GUILD_AUTOMOD_REGEX);
function p(e) {
    let { hasErrors: t, text: n, errorText: r } = e;
    return t
        ? (0, i.jsx)('div', {
              className: a()(g.subtext),
              children: (0, i.jsx)(s.Text, {
                  className: a()(g.errorSpan),
                  variant: 'text-xs/medium',
                  color: 'text-danger',
                  children: null != r ? r : h.intl.format(h.t.jKYAPj, { helpArticle: x })
              })
          })
        : (0, i.jsx)(s.Text, {
              className: g.subtext,
              variant: 'text-xs/medium',
              color: 'text-muted',
              children: n
          });
}
function f(e) {
    var t, n;
    let { rule: l, onChangeText: s, className: o } = e,
        { patterns: m, valueError: f, errors: C, validatePatternsChanged: v, validateEditingValueChanged: _ } = (0, d.Z)(l, s),
        [N] = r.useState(() => ({
            tags: m,
            value: '',
            selections: [],
            isSelecting: !1
        })),
        I = r.useMemo(
            () =>
                C.reduce((e, t) => {
                    let { pattern: n, message: i, description: r, erroringCharacterLength: l = n.length, erroringCharacterOffset: a = 0 } = t;
                    return null == m.find((e) => e === n)
                        ? e
                        : ((e[n] = {
                              value: n,
                              message: null != r ? r : i,
                              erroringCharacterLength: l,
                              erroringCharacterOffset: a
                          }),
                          e);
                }, {}),
            [C, m]
        ),
        T = r.useCallback(
            (e) => {
                v(e, m);
            },
            [v, m]
        ),
        j = r.useCallback(
            (e) => {
                _(e);
            },
            [_]
        );
    return (0, i.jsxs)('div', {
        className: a()(g.keywordsContainer, o),
        children: [
            (0, i.jsx)(c.Z, {
                placeholder: '^b(a|@)d$\nw(o|0)rd(s|$)',
                initialValue: N,
                onChangeTags: T,
                onChangeNewTagValue: j,
                tagErrors: I,
                maxTags: u.VW
            }),
            (0, i.jsx)(p, {
                text: h.intl.format(h.t['PGC/AA'], { helpArticle: x }),
                hasErrors: C.length > 0 || null != f,
                errorText:
                    null !==
                        (n =
                            null ===
                                (t = C.find((e) => {
                                    let { pattern: t } = e;
                                    return t === d.r;
                                })) || void 0 === t
                                ? void 0
                                : t.message) && void 0 !== n
                        ? n
                        : null == f
                          ? void 0
                          : f.message
            })
        ]
    });
}
