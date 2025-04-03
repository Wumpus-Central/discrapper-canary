n.d(t, { m: () => o });
var r = n(806966),
    i = n(585483),
    a = n(981631),
    l = n(957825);
function o(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    i.S.dispatchToLastSubscribed(a.CkL.OPEN_EXPRESSION_PICKER, { activeView: l.X1.STICKER });
    let o = n.findIndex((e) => e.id === t.id);
    -1 !== o && r.ZN.setActiveCategoryIndex(o);
}
