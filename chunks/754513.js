n.d(t, {
    A: () => x,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(975571),
    o = n(546457),
    d = n(897295),
    u = n(411335),
    f = n(652215),
    g = n(985018),
    b = n(256893);
let m = c.A.getArticleURL(f.MVz.GUILD_AUTOMOD_REGEX);

function p(e) {
    let { hasErrors: t, text: n, errorText: i } = e;
    return t
        ? (0, r.jsx)("div", {
              className: b.W$,
              children: (0, r.jsx)(a.Text, {
                  className: b.F,
                  variant: "text-xs/medium",
                  color: "text-feedback-critical",
                  children:
                      null != i
                          ? i
                          : g.intl.format(g.t.jKYAPu, {
                                helpArticle: m,
                            }),
              }),
          })
        : (0, r.jsx)(a.Text, {
              className: b.W$,
              variant: "text-xs/medium",
              color: "text-muted",
              children: n,
          });
}

function x(e) {
    var t, n;
    let { rule: l, onChangeText: a, className: c } = e,
        {
            patterns: f,
            valueError: x,
            errors: h,
            validatePatternsChanged: j,
            validateEditingValueChanged: O,
        } = (0, d.A)(l, a),
        [y] = i.useState(() => ({
            tags: f,
            value: "",
            selections: [],
            isSelecting: !1,
        })),
        v = i.useMemo(
            () =>
                h.reduce((e, t) => {
                    let {
                        pattern: n,
                        message: r,
                        description: i,
                        erroringCharacterLength: l = n.length,
                        erroringCharacterOffset: s = 0,
                    } = t;
                    return (
                        null == f.find((e) => e === n) ||
                            (e[n] = {
                                value: n,
                                message: null != i ? i : r,
                                erroringCharacterLength: l,
                                erroringCharacterOffset: s,
                            }),
                        e
                    );
                }, {}),
            [h, f],
        ),
        A = i.useCallback(
            (e) => {
                j(e, f);
            },
            [j, f],
        ),
        E = i.useCallback(
            (e) => {
                O(e);
            },
            [O],
        );
    return (0, r.jsxs)("div", {
        className: s()(b.Qn, c),
        children: [
            (0, r.jsx)(o.A, {
                placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
                initialValue: y,
                onChangeTags: A,
                onChangeNewTagValue: E,
                tagErrors: v,
                maxTags: u.qm,
            }),
            (0, r.jsx)(p, {
                text: g.intl.format(g.t["PGC/AJ"], {
                    helpArticle: m,
                }),
                hasErrors: h.length > 0 || null != x,
                errorText:
                    null !=
                    (t =
                        null ==
                        (n = h.find((e) => {
                            let { pattern: t } = e;
                            return t === d.B;
                        }))
                            ? void 0
                            : n.message)
                        ? t
                        : null == x
                          ? void 0
                          : x.message,
            }),
        ],
    });
}
