n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(468026),
    a = n(317770),
    o = n(981631),
    c = n(388032);
let u = 'ActivityInviteManager',
    d = () => {
        r.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class E extends a.Z {
    _initialize() {
        r.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: r, context: a } = e,
            E = a === o.IlC.POPOUT ? l.u1M : l.z1l;
        r
            ? (0, l.h7j)(
                  (e) =>
                      (0, i.jsx)(s.default, {
                          title: c.intl.formatToPlainString(c.t['2tN7io'], { name: t.name }),
                          body: c.intl.string(c.t.MAxtkp),
                          confirmText: c.intl.string(c.t.BddRzc),
                          ...e
                      }),
                  {
                      onCloseCallback: d,
                      modalKey: u
                  },
                  E
              )
            : (0, l.ZDy)(
                  async () => {
                      let { default: e } = await n.e('79921').then(n.bind(n, 699099));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  {
                      onCloseCallback: d,
                      modalKey: u,
                      contextKey: E
                  }
              );
    }
    handleModalClose(e) {
        (0, l.Mr3)(u);
    }
}
let _ = new E();
