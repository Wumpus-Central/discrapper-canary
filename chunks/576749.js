var i = e(481060),
    r = e(40851),
    l = e(334877),
    a = e(981631);
let d = 'guild-event-modal';
t.Z = () => {
    let n = (0, r.bp)() === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: d,
        contextKey: n,
        onCloseRequest: () => {
            l.l.getState().canCloseModal && (0, i.closeModal)(d, n);
        }
    };
};
