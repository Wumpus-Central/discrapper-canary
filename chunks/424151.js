n.d(t, { A: () => o });
var i = n(627968),
    l = n(821609),
    a = n(92246),
    s = n(201805),
    r = n(985018);
let o = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: c,
            size: u,
        } = e,
        m = (0, s.ix)({
            quest: t,
            questContent: n,
            questContentPosition: d,
            questContentRowIndex: c,
            sourceQuestContent: o,
        }),
        _ = (0, a.r7)(t.config) ? r.intl.string(r.t.bAGFz3) : r.intl.string(r.t.vTgCWx);
    return (0, i.jsx)(l.$, { variant: "primary", fullWidth: !0, size: u, onClick: m, text: _ });
};
