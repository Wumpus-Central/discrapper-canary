n.d(t, { V: () => s, k: () => a });
var i = n(582128),
    r = n(818348);
function a() {
    let e = i.useContext(s);
    if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
    return e;
}
let s = i.createContext({ dismissable: !0, onClose: r.tE, id: "modal-id", headingId: "modal-heading-id" });
