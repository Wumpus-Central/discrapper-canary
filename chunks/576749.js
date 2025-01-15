var i = n(481060),
    l = n(40851),
    r = n(334877),
    a = n(981631);
let s = 'guild-event-modal';
t.Z = () => {
    let e = (0, l.bp)() === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: s,
        contextKey: e,
        onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, i.closeModal)(s, e);
        }
    };
};
