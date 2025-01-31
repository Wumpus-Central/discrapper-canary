n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(468026),
    o = n(317770),
    a = n(981631),
    c = n(388032);
let d = 'ActivityInviteManager',
    u = () => {
        r.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class _ extends o.Z {
    _initialize() {
        r.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: r, context: o } = e,
            _ = o === a.IlC.POPOUT ? l.u1M : l.z1l;
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
                      onCloseCallback: u,
                      modalKey: d
                  },
                  _
              )
            : (0, l.ZDy)(
                  async () => {
                      let { default: e } = await n.e('79921').then(n.bind(n, 699099));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  {
                      onCloseCallback: u,
                      modalKey: d,
                      contextKey: _
                  }
              );
    }
    handleModalClose(e) {
        (0, l.Mr3)(d);
    }
}
let E = new _();
