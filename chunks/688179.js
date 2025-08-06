n.d(t, { m: () => s });
var r = n(806966),
    i = n(585483),
    o = n(981631),
    a = n(957825);
function s(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    i.S.dispatchToLastSubscribed(o.CkL.OPEN_EXPRESSION_PICKER, { activeView: a.X1.STICKER });
    let s = n.findIndex((e) => e.id === t.id);
    -1 !== s && r.ZN.setActiveCategoryIndex(s);
}
