n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    s = n(468026),
    a = n(317770),
    o = n(981631),
    c = n(388032);
let d = 'ActivityInviteManager',
    u = () => {
        l.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class _ extends a.Z {
    _initialize() {
        l.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), l.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        l.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), l.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: l, context: a } = e,
            _ = a === o.IlC.POPOUT ? r.u1M : r.z1l;
        l
            ? (0, r.h7j)(
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
            : (0, r.ZDy)(
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
        (0, r.Mr3)(d);
    }
}
let E = new _();
