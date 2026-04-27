n.d(t, { A: () => d });
var i = n(627968),
    r = n(821609),
    s = n(801365),
    l = n(201805),
    a = n(985018);
let d = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: d,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: _,
            size: u,
        } = e,
        c = (0, l.ix)({
            quest: t,
            questContent: n,
            questContentPosition: o,
            questContentRowIndex: _,
            sourceQuestContent: d,
        }),
        E = (0, s.r7)(t.config) ? a.intl.string(a.t.bAGFz3) : a.intl.string(a.t.vTgCWx);
    return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: u, onClick: c, text: E });
};
