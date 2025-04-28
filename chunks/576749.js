n.d(t, { Z: () => s });
var r = n(481060),
    i = n(40851),
    l = n(334877),
    o = n(981631);
let a = 'guild-event-modal',
    s = () => {
        let e = (0, i.bp)() === o.IlC.POPOUT ? r.u1M : r.z1l;
        return {
            modalKey: a,
            contextKey: e,
            onCloseRequest: () => {
                l.l.getState().canCloseModal && (0, r.Mr3)(a, e);
            }
        };
    };
