n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(73153),
    l = n(272355);
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends l.A {
    _initialize() {
        a.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            a.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            a.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: a,
            includedPlatformTypes: l,
            integrations: o,
            onCompleteApplication: d,
            includeApplicationConnections: u,
        } = e;
        (0, r.hasModalOpen)(s) ||
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("95198").then(n.bind(n, 58829));
                return (n) =>
                    (0, i.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: a,
                        includedPlatformTypes: l,
                        integrations: o,
                        onCompleteApplication: d,
                        includeApplicationConnections: u,
                        ...n,
                    });
            });
    }
    handleHide() {
        (0, r.closeModal)(s);
    }
}
let d = new o();
