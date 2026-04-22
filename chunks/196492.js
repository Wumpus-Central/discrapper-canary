n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(189213),
    s = n(231723),
    a = n(192308),
    r = n(834730),
    o = n(73153),
    d = n(272355),
    c = n(652215),
    u = n(985018);
let h = "ActivityInviteManager",
    A = () => {
        o.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
    };
class _ extends d.A {
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
            _ = d === c.BRT.POPOUT ? s.KX : s.SY;
        o
            ? (0, a.openModal)(
                  (e) =>
                      (0, i.jsx)(l.Modal, {
                          title: u.intl.formatToPlainString(u.t["2tN7ih"], { name: t.name }),
                          actions: [
                              {
                                  variant: "primary",
                                  text: u.intl.string(u.t.BddRzS),
                                  onClick: e.onClose,
                                  autoFocus: !0,
                              },
                          ],
                          ...e,
                          children: (0, i.jsx)(r.E, { variant: "text-md/normal", children: u.intl.string(u.t.MAxtks) }),
                      }),
                  { onCloseCallback: A, modalKey: h },
                  _,
              )
            : (0, a.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e("27759").then(n.bind(n, 555570));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  { onCloseCallback: A, modalKey: h, contextKey: _ },
              );
    }
    handleModalClose(e) {
        (0, a.closeModal)(h);
    }
}
let m = new _();
