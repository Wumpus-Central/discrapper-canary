(n.d(t, {
    t: () => a,
    v: () => o
}),
    n(415506));
var r = n(73800),
    i = n(981631);
function o() {
    let e = r.useContext(a);
    if (null == e) throw Error('useModalContext must be used within a ModalContext.Provider');
    return e;
}
let a = r.createContext({
    onClose: i.dG4,
    id: 'modal-id',
    headingId: 'modal-heading-id'
});
