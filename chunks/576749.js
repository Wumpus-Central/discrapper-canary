n.d(e, { Z: () => _ });
var i = n(481060),
    l = n(40851),
    d = n(334877),
    r = n(981631);
let a = 'guild-event-modal',
    _ = () => {
        let t = (0, l.bp)() === r.IlC.POPOUT ? i.u1M : i.z1l;
        return {
            modalKey: a,
            contextKey: t,
            onCloseRequest: () => {
                d.l.getState().canCloseModal && (0, i.Mr3)(a, t);
            }
        };
    };
