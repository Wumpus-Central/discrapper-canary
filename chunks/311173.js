n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(63063),
    c = n(256569),
    u = n(858457),
    d = n(273504),
    m = n(981631),
    g = n(388032),
    p = n(409866);
let h = o.Z.getArticleURL(m.BhN.GUILD_AUTOMOD_REGEX);
function f(e) {
    let { hasErrors: t, text: n, errorText: i } = e;
    return t
        ? (0, r.jsx)('div', {
              className: p.subtext,
              children: (0, r.jsx)(a.Text, {
                  className: p.errorSpan,
                  variant: 'text-xs/medium',
                  color: 'text-danger',
                  children: null != i ? i : g.intl.format(g.t.jKYAPj, { helpArticle: h })
              })
          })
        : (0, r.jsx)(a.Text, {
              className: p.subtext,
              variant: 'text-xs/medium',
              color: 'text-muted',
              children: n
          });
}
function x(e) {
    var t, n;
    let { rule: l, onChangeText: a, className: o } = e,
        { patterns: m, valueError: x, errors: b, validatePatternsChanged: j, validateEditingValueChanged: _ } = (0, u.Z)(l, a),
        [v] = i.useState(() => ({
            tags: m,
            value: '',
            selections: [],
            isSelecting: !1
        })),
        O = i.useMemo(
            () =>
                b.reduce((e, t) => {
                    let { pattern: n, message: r, description: i, erroringCharacterLength: l = n.length, erroringCharacterOffset: s = 0 } = t;
                    return (
                        null == m.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: null != i ? i : r,
                                erroringCharacterLength: l,
                                erroringCharacterOffset: s
                            }),
                        e
                    );
                }, {}),
            [b, m]
        ),
        C = i.useCallback(
            (e) => {
                j(e, m);
            },
            [j, m]
        ),
        y = i.useCallback(
            (e) => {
                _(e);
            },
            [_]
        );
    return (0, r.jsxs)('div', {
        className: s()(p.keywordsContainer, o),
        children: [
            (0, r.jsx)(c.Z, {
                placeholder: '^b(a|@)d$\nw(o|0)rd(s|$)',
                initialValue: v,
                onChangeTags: C,
                onChangeNewTagValue: y,
                tagErrors: O,
                maxTags: d.VW
            }),
            (0, r.jsx)(f, {
                text: g.intl.format(g.t['PGC/AA'], { helpArticle: h }),
                hasErrors: b.length > 0 || null != x,
                errorText:
                    null !=
                    (n =
                        null ==
                        (t = b.find((e) => {
                            let { pattern: t } = e;
                            return t === u.r;
                        }))
                            ? void 0
                            : t.message)
                        ? n
                        : null == x
                          ? void 0
                          : x.message
            })
        ]
    });
}
