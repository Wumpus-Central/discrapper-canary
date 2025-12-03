n.d(t, { Z: () => b }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(63063),
    c = n(256569),
    d = n(858457),
    u = n(273504),
    g = n(981631),
    m = n(388032),
    p = n(140876);
let f = o.Z.getArticleURL(g.BhN.GUILD_AUTOMOD_REGEX);
function h(e) {
    let { hasErrors: t, text: n, errorText: i } = e;
    return t
        ? (0, r.jsx)("div", {
              className: p.subtext,
              children: (0, r.jsx)(s.Text, {
                  className: p.errorSpan,
                  variant: "text-xs/medium",
                  color: "text-feedback-critical",
                  children: null != i ? i : m.intl.format(m.t.jKYAPu, { helpArticle: f }),
              }),
          })
        : (0, r.jsx)(s.Text, {
              className: p.subtext,
              variant: "text-xs/medium",
              color: "text-muted",
              children: n,
          });
}
function b(e) {
    var t, n;
    let { rule: l, onChangeText: s, className: o } = e,
        {
            patterns: g,
            valueError: b,
            errors: x,
            validatePatternsChanged: j,
            validateEditingValueChanged: _,
        } = (0, d.Z)(l, s),
        [v] = i.useState(() => ({
            tags: g,
            value: "",
            selections: [],
            isSelecting: !1,
        })),
        O = i.useMemo(
            () =>
                x.reduce((e, t) => {
                    let {
                        pattern: n,
                        message: r,
                        description: i,
                        erroringCharacterLength: l = n.length,
                        erroringCharacterOffset: a = 0,
                    } = t;
                    return (
                        null == g.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: null != i ? i : r,
                                erroringCharacterLength: l,
                                erroringCharacterOffset: a,
                            }),
                        e
                    );
                }, {}),
            [x, g],
        ),
        C = i.useCallback(
            (e) => {
                j(e, g);
            },
            [j, g],
        ),
        y = i.useCallback(
            (e) => {
                _(e);
            },
            [_],
        );
    return (0, r.jsxs)("div", {
        className: a()(p.keywordsContainer, o),
        children: [
            (0, r.jsx)(c.Z, {
                placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
                initialValue: v,
                onChangeTags: C,
                onChangeNewTagValue: y,
                tagErrors: O,
                maxTags: u.VW,
            }),
            (0, r.jsx)(h, {
                text: m.intl.format(m.t["PGC/AJ"], { helpArticle: f }),
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
                          : b.message,
            }),
        ],
    });
}
