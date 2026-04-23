"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(268218),
    a = n(335180),
    o = n(215530);
let l = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("93103"),
                n.e("82486"),
                n.e("27752"),
                n.e("46277"),
                n.e("80388"),
                n.e("75041"),
                n.e("74811"),
                n.e("67610"),
            ]).then(n.bind(n, 851588)),
        webpackId: 851588,
        renderLoader: a.Zm,
    }),
    d = (0, s.Fe)({ createPromise: () => n.e("95033").then(n.bind(n, 634409)), webpackId: 634409, renderLoader: a.Zm }),
    _ = (0, s.Fe)({ createPromise: () => n.e("14360").then(n.bind(n, 818550)), webpackId: 818550, renderLoader: a.Zm }),
    u = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("93103"),
                n.e("53635"),
                n.e("82486"),
                n.e("27752"),
                n.e("46277"),
                n.e("80388"),
                n.e("66512"),
                n.e("15307"),
                n.e("29919"),
                n.e("5536"),
                n.e("74811"),
                n.e("92879"),
            ]).then(n.bind(n, 440210)),
        webpackId: 440210,
        renderLoader: a.Zm,
    });
function c(e) {
    let { user: t, onClickContainer: n } = e,
        s = r.useCallback(
            (e) => {
                n?.(e), e.stopPropagation();
            },
            [n],
        ),
        [a, c] = (0, o.A)(t.id);
    return a
        ? (0, i.jsx)(_, { ...e, onHide: c, onClickContainer: s })
        : t.isNonUserBot()
          ? (0, i.jsx)(d, { ...e, onClickContainer: s })
          : t.bot
            ? (0, i.jsx)(l, { ...e, onClickContainer: s })
            : (0, i.jsx)(u, { ...e, onClickContainer: s });
}
