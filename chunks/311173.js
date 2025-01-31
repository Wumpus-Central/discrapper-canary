n.d(t, { Z: () => _ }), n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
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
              className: s()(g.subtext),
              children: (0, i.jsx)(a.Text, {
                  className: s()(g.errorSpan),
                  variant: 'text-xs/medium',
                  color: 'text-danger',
                  children: null != r ? r : h.intl.format(h.t.jKYAPj, { helpArticle: x })
              })
          })
        : (0, i.jsx)(a.Text, {
              className: g.subtext,
              variant: 'text-xs/medium',
              color: 'text-muted',
              children: n
          });
}
function _(e) {
    var t, n;
    let { rule: l, onChangeText: a, className: o } = e,
        { patterns: m, valueError: _, errors: C, validatePatternsChanged: f, validateEditingValueChanged: v } = (0, d.Z)(l, a),
        [N] = r.useState(() => ({
            tags: m,
            value: '',
            selections: [],
            isSelecting: !1
        })),
        j = r.useMemo(
            () =>
                C.reduce((e, t) => {
                    let { pattern: n, message: i, description: r, erroringCharacterLength: l = n.length, erroringCharacterOffset: s = 0 } = t;
                    return (
                        null == m.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: null != r ? r : i,
                                erroringCharacterLength: l,
                                erroringCharacterOffset: s
                            }),
                        e
                    );
                }, {}),
            [C, m]
        ),
        I = r.useCallback(
            (e) => {
                f(e, m);
            },
            [f, m]
        ),
        E = r.useCallback(
            (e) => {
                v(e);
            },
            [v]
        );
    return (0, i.jsxs)('div', {
        className: s()(g.keywordsContainer, o),
        children: [
            (0, i.jsx)(c.Z, {
                placeholder: '^b(a|@)d$\nw(o|0)rd(s|$)',
                initialValue: N,
                onChangeTags: I,
                onChangeNewTagValue: E,
                tagErrors: j,
                maxTags: u.VW
            }),
            (0, i.jsx)(p, {
                text: h.intl.format(h.t['PGC/AA'], { helpArticle: x }),
                hasErrors: C.length > 0 || null != _,
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
                        : null == _
                          ? void 0
                          : _.message
            })
        ]
    });
}
