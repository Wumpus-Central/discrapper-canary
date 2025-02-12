n.d(t, { Z: () => s });
var i = n(481060),
    a = n(40851),
    o = n(334877),
    l = n(981631);
let r = 'guild-event-modal',
    s = () => {
        let e = (0, a.bp)() === l.IlC.POPOUT ? i.u1M : i.z1l;
        return {
            modalKey: r,
            contextKey: e,
            onCloseRequest: () => {
                o.l.getState().canCloseModal && (0, i.Mr3)(r, e);
            }
        };
    };
