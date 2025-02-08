t.d(n, { Z: () => c });
var i = t(481060),
    o = t(40851),
    a = t(334877),
    l = t(981631);
let r = 'guild-event-modal',
    c = () => {
        let e = (0, o.bp)() === l.IlC.POPOUT ? i.u1M : i.z1l;
        return {
            modalKey: r,
            contextKey: e,
            onCloseRequest: () => {
                a.l.getState().canCloseModal && (0, i.Mr3)(r, e);
            }
        };
    };
