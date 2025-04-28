n.d(e, { Z: () => a });
var l = n(481060),
    r = n(40851),
    i = n(334877),
    o = n(981631);
let c = 'guild-event-modal',
    a = () => {
        let t = (0, r.bp)() === o.IlC.POPOUT ? l.u1M : l.z1l;
        return {
            modalKey: c,
            contextKey: t,
            onCloseRequest: () => {
                i.l.getState().canCloseModal && (0, l.Mr3)(c, t);
            }
        };
    };
