n.d(t, { Z: () => h }), n(388685), n(953529);
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
    f = n(388032),
    m = n(363605);
let b = o.Z.getArticleURL(g.BhN.GUILD_AUTOMOD_REGEX);
function p(e) {
    let { hasErrors: t, text: n, errorText: i } = e;
    return t
        ? (0, r.jsx)("div", {
              className: m.subtext,
              children: (0, r.jsx)(s.Text, {
                  className: m.errorSpan,
                  variant: "text-xs/medium",
                  color: "text-feedback-critical",
                  children: null != i ? i : f.intl.format(f.t.jKYAPu, { helpArticle: b }),
              }),
          })
        : (0, r.jsx)(s.Text, {
              className: m.subtext,
              variant: "text-xs/medium",
              color: "text-muted",
              children: n,
          });
}
function h(e) {
    var t, n;
    let { rule: l, onChangeText: s, className: o } = e,
        {
            patterns: g,
            valueError: h,
            errors: x,
            validatePatternsChanged: j,
            validateEditingValueChanged: v,
        } = (0, d.Z)(l, s),
        [O] = i.useState(() => ({
            tags: g,
            value: "",
            selections: [],
            isSelecting: !1,
        })),
        C = i.useMemo(
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
        y = i.useCallback(
            (e) => {
                j(e, g);
            },
            [j, g],
        ),
        N = i.useCallback(
            (e) => {
                v(e);
            },
            [v],
        );
    return (0, r.jsxs)("div", {
        className: a()(m.keywordsContainer, o),
        children: [
            (0, r.jsx)(c.Z, {
                placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
                initialValue: O,
                onChangeTags: y,
                onChangeNewTagValue: N,
                tagErrors: C,
                maxTags: u.VW,
            }),
            (0, r.jsx)(p, {
                text: f.intl.format(f.t["PGC/AJ"], { helpArticle: b }),
                hasErrors: x.length > 0 || null != h,
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
                        : null == h
                          ? void 0
                          : h.message,
            }),
        ],
    });
}
