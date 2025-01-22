var o = a(481060),
    t = a(40851),
    r = a(334877),
    c = a(981631);
let i = 'guild-event-modal';
n.Z = () => {
    let e = (0, t.bp)() === c.IlC.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: i,
        contextKey: e,
        onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, o.closeModal)(i, e);
        }
    };
};
