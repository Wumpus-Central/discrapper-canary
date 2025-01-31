n.d(t, { m: () => s });
var i = n(806966),
    l = n(585483),
    a = n(981631),
    r = n(957825);
function s(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    l.S.dispatchToLastSubscribed(a.CkL.OPEN_EXPRESSION_PICKER, { activeView: r.X1.STICKER });
    let s = n.findIndex((e) => e.id === t.id);
    -1 !== s && i.ZN.setActiveCategoryIndex(s);
}
