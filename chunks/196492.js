"use strict";
n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var r = n(189213),
    a = n(231723),
    s = n(192308),
    l = n(834730),
    o = n(228366),
    d = n(272355),
    c = n(652215),
    u = n(375708);
let _ = "ActivityInviteManager";
function E() {
    o.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
}
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
            A = d === c.BRT.POPOUT ? a.KX : a.SY;
        o
            ? (0, s.openModal)(
                  (e) =>
                      (0, i.jsx)(r.Modal, {
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
                          children: (0, i.jsx)(l.E, { variant: "text-md/normal", children: u.intl.string(u.t.MAxtks) }),
                      }),
                  { onCloseCallback: E, modalKey: _ },
                  A,
              )
            : (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("721642"),
                          n.e("31331"),
                          n.e("692639"),
                          n.e("890480"),
                          n.e("27759"),
                      ]).then(n.bind(n, 333189));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  { onCloseCallback: E, modalKey: _, contextKey: A },
              );
    }
    handleModalClose(e) {
        (0, s.closeModal)(_);
    }
}
let h = new A();
