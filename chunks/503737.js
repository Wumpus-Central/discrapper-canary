var n = s(200651);
s(192379);
var i = s(481060),
    r = s(570140),
    o = s(468026),
    l = s(317770),
    a = s(981631),
    c = s(388032);
let d = 'ActivityInviteManager',
    u = () => {
        r.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class h extends l.Z {
    _initialize() {
        r.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: r, context: l } = e,
            h = l === a.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
        r
            ? (0, i.openModal)(
                  (e) =>
                      (0, n.jsx)(o.default, {
                          title: c.intl.formatToPlainString(c.t['2tN7io'], { name: t.name }),
                          body: c.intl.string(c.t.MAxtkp),
                          confirmText: c.intl.string(c.t.BddRzc),
                          ...e
                      }),
                  {
                      onCloseCallback: u,
                      modalKey: d
                  },
                  h
              )
            : (0, i.openModalLazy)(
                  async () => {
                      let { default: e } = await s.e('79921').then(s.bind(s, 699099));
                      return (t) => (0, n.jsx)(e, { ...t });
                  },
                  {
                      onCloseCallback: u,
                      modalKey: d,
                      contextKey: h
                  }
              );
    }
    handleModalClose(e) {
        (0, i.closeModal)(d);
    }
}
t.Z = new h();
