n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(317770);
let s = 'CONNECTIONS_GRID_MODAL_KEY';
class o extends a.Z {
    _initialize() {
        r.Z.subscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), r.Z.subscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), r.Z.unsubscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    handleShow(e) {
        let { onComplete: t, excludedPlatformTypes: r, includedPlatformTypes: a, integrations: o, onCompleteApplication: d } = e;
        (0, l.nfh)(s) ||
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('28538').then(n.bind(n, 51299));
                return (n) =>
                    (0, i.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: r,
                        includedPlatformTypes: a,
                        integrations: o,
                        onCompleteApplication: d,
                        ...n
                    });
            });
    }
    handleHide() {
        (0, l.Mr3)(s);
    }
}
let d = new o();
