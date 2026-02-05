"use strict";
n.d(t, { V: () => s, k: () => a });
var r = n(64700),
    i = n(818348);
function a() {
    let e = r.useContext(s);
    if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
    return e;
}
let s = r.createContext({ dismissable: !0, onClose: i.tE, id: "modal-id", headingId: "modal-heading-id" });
