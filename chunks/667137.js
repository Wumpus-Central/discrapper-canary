n.d(t, {
    t: () => l,
    v: () => s
}),
    n(415506);
var i = n(73800),
    r = n(981631);
function s() {
    let e = i.useContext(l);
    if (null == e) throw Error('useModalContext must be used within a ModalContext.Provider');
    return e;
}
let l = i.createContext({
    onClose: r.dG4,
    id: 'modal-id',
    headingId: 'modal-heading-id'
});
