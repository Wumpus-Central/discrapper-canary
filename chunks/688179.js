n.d(t, { m: () => a });
var r = n(806966),
    i = n(585483),
    l = n(981631),
    o = n(957825);
function a(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    i.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, { activeView: o.X1.STICKER });
    let a = n.findIndex((e) => e.id === t.id);
    -1 !== a && r.ZN.setActiveCategoryIndex(a);
}
