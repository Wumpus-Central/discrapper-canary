n.d(t, { Z: () => o });
var r = n(481060),
    i = n(40851),
    l = n(334877),
    a = n(981631);
let s = "guild-event-modal",
    o = () => {
        let e = (0, i.bp)() === a.IlC.POPOUT ? r.u1M : r.z1l;
        return {
            modalKey: s,
            contextKey: e,
            onCloseRequest: () => {
                l.l.getState().canCloseModal && (0, r.Mr3)(s, e);
            },
        };
    };
