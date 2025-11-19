n.d(t, {
    t: () => o,
    v: () => a,
}),
    n(415506);
var r = n(473749),
    i = n(231338);
function a() {
    let e = r.useContext(o);
    if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
    return e;
}
let o = r.createContext({
    dismissable: !0,
    onClose: i.dG,
    id: "modal-id",
    headingId: "modal-heading-id",
});
