n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var a = n(189213),
    r = n(231723),
    s = n(192308),
    l = n(834730),
    o = n(228366),
    d = n(272355),
    c = n(652215),
    _ = n(985018);
let E = "ActivityInviteManager",
    u = () => {
        o.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
    };
class A extends d.A {
    _initialize() {
        o.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    _terminate() {
        o.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: o, context: d } = e,
            A = d === c.BRT.POPOUT ? r.KX : r.SY;
        o
            ? (0, s.openModal)(
                  (e) =>
                      (0, i.jsx)(a.Modal, {
                          title: _.intl.formatToPlainString(_.t["2tN7ih"], { name: t.name }),
                          actions: [
                              {
                                  variant: "primary",
                                  text: _.intl.string(_.t.BddRzS),
                                  onClick: e.onClose,
                                  autoFocus: !0,
                              },
                          ],
                          ...e,
                          children: (0, i.jsx)(l.E, { variant: "text-md/normal", children: _.intl.string(_.t.MAxtks) }),
                      }),
                  { onCloseCallback: u, modalKey: E },
                  A,
              )
            : (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("24092"),
                          n.e("78464"),
                          n.e("92639"),
                          n.e("90480"),
                          n.e("27759"),
                      ]).then(n.bind(n, 555570));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  { onCloseCallback: u, modalKey: E, contextKey: A },
              );
    }
    handleModalClose(e) {
        (0, s.closeModal)(E);
    }
}
let I = new A();
