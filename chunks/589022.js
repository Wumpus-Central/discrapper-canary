"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(268218),
    a = n(335180),
    o = n(215530);
let l = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("93103"),
                n.e("82486"),
                n.e("87306"),
                n.e("46277"),
                n.e("38114"),
                n.e("86737"),
                n.e("38254"),
                n.e("67610"),
            ]).then(n.bind(n, 697668)),
        webpackId: 697668,
        renderLoader: a.Zm,
    }),
    u = (0, s.Fe)({ createPromise: () => n.e("95033").then(n.bind(n, 634409)), webpackId: 634409, renderLoader: a.Zm }),
    c = (0, s.Fe)({ createPromise: () => n.e("14360").then(n.bind(n, 650218)), webpackId: 650218, renderLoader: a.Zm }),
    d = (0, s.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("93103"),
                n.e("53635"),
                n.e("82486"),
                n.e("87306"),
                n.e("46277"),
                n.e("38114"),
                n.e("72684"),
                n.e("14995"),
                n.e("28110"),
                n.e("45445"),
                n.e("38254"),
                n.e("92879"),
            ]).then(n.bind(n, 39407)),
        webpackId: 39407,
        renderLoader: a.Zm,
    });
function _(e) {
    let { user: t, onClickContainer: n } = e,
        s = i.useCallback(
            (e) => {
                n?.(e), e.stopPropagation();
            },
            [n],
        ),
        [a, _] = (0, o.A)(t.id);
    return a
        ? (0, r.jsx)(c, { ...e, onHide: _, onClickContainer: s })
        : t.isNonUserBot()
          ? (0, r.jsx)(u, { ...e, onClickContainer: s })
          : t.bot
            ? (0, r.jsx)(l, { ...e, onClickContainer: s })
            : (0, r.jsx)(d, { ...e, onClickContainer: s });
}
