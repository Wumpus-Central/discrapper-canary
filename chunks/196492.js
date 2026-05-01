"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(189213),
    s = n(231723),
    a = n(192308),
    o = n(834730),
    l = n(228366),
    u = n(272355),
    c = n(652215),
    d = n(375708);
let _ = "ActivityInviteManager",
    f = () => {
        l.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
    };
class h extends u.A {
    _initialize() {
        l.h.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            l.h.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    _terminate() {
        l.h.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            l.h.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: l, context: u } = e,
            h = u === c.BRT.POPOUT ? s.KX : s.SY;
        l
            ? (0, a.openModal)(
                  (e) =>
                      (0, i.jsx)(r.Modal, {
                          title: d.intl.formatToPlainString(d.t["2tN7ih"], { name: t.name }),
                          actions: [
                              {
                                  variant: "primary",
                                  text: d.intl.string(d.t.BddRzS),
                                  onClick: e.onClose,
                                  autoFocus: !0,
                              },
                          ],
                          ...e,
                          children: (0, i.jsx)(o.E, { variant: "text-md/normal", children: d.intl.string(d.t.MAxtks) }),
                      }),
                  { onCloseCallback: f, modalKey: _ },
                  h,
              )
            : (0, a.openModalLazy)(
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
                  { onCloseCallback: f, modalKey: _, contextKey: h },
              );
    }
    handleModalClose(e) {
        (0, a.closeModal)(_);
    }
}
let p = new h();
