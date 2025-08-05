n.d(t, { m: () => s });
var r = n(806966),
    i = n(585483),
    a = n(981631),
    o = n(957825);
function s(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    i.S.dispatchToLastSubscribed(a.CkL.OPEN_EXPRESSION_PICKER, { activeView: o.X1.STICKER });
    let s = n.findIndex((e) => e.id === t.id);
    -1 !== s && r.ZN.setActiveCategoryIndex(s);
}
