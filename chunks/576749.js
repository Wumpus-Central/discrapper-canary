t.d(n, { Z: () => s });
var i = t(481060),
    a = t(40851),
    o = t(334877),
    l = t(981631);
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
