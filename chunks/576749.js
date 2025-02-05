n.d(t, { Z: () => o });
var i = n(481060),
    l = n(40851),
    a = n(334877),
    r = n(981631);
let s = 'guild-event-modal',
    o = () => {
        let e = (0, l.bp)() === r.IlC.POPOUT ? i.u1M : i.z1l;
        return {
            modalKey: s,
            contextKey: e,
            onCloseRequest: () => {
                a.l.getState().canCloseModal && (0, i.Mr3)(s, e);
            }
        };
    };
