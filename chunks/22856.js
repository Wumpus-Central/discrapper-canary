var i = n(582128),
    r = n(664354);
let a = i.createContext({ dismissable: !0, onClose: r.tE, id: "modal-id", headingId: "modal-heading-id" });
n.d(
    t,
    {},
    {
        V: a,
        k: function () {
            let e = i.useContext(a);
            if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
            return e;
        },
    },
);
