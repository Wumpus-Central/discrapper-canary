n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var i = n(189213),
    s = n(231723),
    r = n(192308),
    a = n(834730),
    o = n(228366),
    u = n(272355),
    d = n(652215),
    c = n(985018);
let h = "ActivityInviteManager",
    A = () => {
        o.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
    };
class m extends u.A {
    _initialize() {
        o.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    _terminate() {
        o.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: o, context: u } = e,
            m = u === d.BRT.POPOUT ? s.KX : s.SY;
        o
            ? (0, r.openModal)(
                  (e) =>
                      (0, l.jsx)(i.Modal, {
                          title: c.intl.formatToPlainString(c.t["2tN7ih"], { name: t.name }),
                          actions: [
                              {
                                  variant: "primary",
                                  text: c.intl.string(c.t.BddRzS),
                                  onClick: e.onClose,
                                  autoFocus: !0,
                              },
                          ],
                          ...e,
                          children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: c.intl.string(c.t.MAxtks) }),
                      }),
                  { onCloseCallback: A, modalKey: h },
                  m,
              )
            : (0, r.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("24092"),
                          n.e("78464"),
                          n.e("92639"),
                          n.e("90480"),
                          n.e("27759"),
                      ]).then(n.bind(n, 555570));
                      return (t) => (0, l.jsx)(e, { ...t });
                  },
                  { onCloseCallback: A, modalKey: h, contextKey: m },
              );
    }
    handleModalClose(e) {
        (0, r.closeModal)(h);
    }
}
let g = new m();
