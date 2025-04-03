n.d(t, { Z: () => b }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(63063),
    c = n(256569),
    d = n(858457),
    u = n(273504),
    m = n(981631),
    g = n(388032),
    p = n(409866);
let h = o.Z.getArticleURL(m.BhN.GUILD_AUTOMOD_REGEX);
function f(e) {
    let { hasErrors: t, text: n, errorText: i } = e;
    return t
        ? (0, r.jsx)('div', {
              className: p.subtext,
              children: (0, r.jsx)(l.Text, {
                  className: p.errorSpan,
                  variant: 'text-xs/medium',
                  color: 'text-danger',
                  children: null != i ? i : g.NW.format(g.t.jKYAPj, { helpArticle: h })
              })
          })
        : (0, r.jsx)(l.Text, {
              className: p.subtext,
              variant: 'text-xs/medium',
              color: 'text-muted',
              children: n
          });
}
function b(e) {
    var t, n;
    let { rule: s, onChangeText: l, className: o } = e,
        { patterns: m, valueError: b, errors: x, validatePatternsChanged: j, validateEditingValueChanged: N } = (0, d.Z)(s, l),
        [_] = i.useState(() => ({
            tags: m,
            value: '',
            selections: [],
            isSelecting: !1
        })),
        v = i.useMemo(
            () =>
                x.reduce((e, t) => {
                    let { pattern: n, message: r, description: i, erroringCharacterLength: s = n.length, erroringCharacterOffset: a = 0 } = t;
                    return (
                        null == m.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: null != i ? i : r,
                                erroringCharacterLength: s,
                                erroringCharacterOffset: a
                            }),
                        e
                    );
                }, {}),
            [x, m]
        ),
        C = i.useCallback(
            (e) => {
                j(e, m);
            },
            [j, m]
        ),
        O = i.useCallback(
            (e) => {
                N(e);
            },
            [N]
        );
    return (0, r.jsxs)('div', {
        className: a()(p.keywordsContainer, o),
        children: [
            (0, r.jsx)(c.Z, {
                placeholder: '^b(a|@)d$\nw(o|0)rd(s|$)',
                initialValue: _,
                onChangeTags: C,
                onChangeNewTagValue: O,
                tagErrors: v,
                maxTags: u.VW
            }),
            (0, r.jsx)(f, {
                text: g.NW.format(g.t['PGC/AA'], { helpArticle: h }),
                hasErrors: x.length > 0 || null != b,
                errorText:
                    null !=
                    (n =
                        null ==
                        (t = x.find((e) => {
                            let { pattern: t } = e;
                            return t === d.r;
                        }))
                            ? void 0
                            : t.message)
                        ? n
                        : null == b
                          ? void 0
                          : b.message
            })
        ]
    });
}
