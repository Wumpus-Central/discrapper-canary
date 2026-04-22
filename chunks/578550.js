n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(189213),
    s = n(477782),
    a = n(192308),
    r = n(331322),
    o = n(928658),
    d = n(632738),
    c = n(627363),
    u = n(587895),
    h = n(985018);
let A = "useReportAppItemModal";
function _(e) {
    let { applicationId: t, ...n } = e;
    return null == t
        ? null
        : (0, i.jsx)(s.Dr, {
              id: "report-app",
              color: n.color,
              label: h.intl.string(h.t.NgA5vp),
              action: () => {
                  var e, s;
                  let _;
                  return (
                      (e = t),
                      (s = n),
                      (_ = () => {
                          (0, a.closeModal)(A), s.onSubmit?.();
                      }),
                      void (0, a.openModalLazy)(
                          async () => {
                              await c.Ay.fetchApplication(e);
                              let t = u.A.getApplication(e);
                              return (e) =>
                                  (0, i.jsx)(l.Modal, {
                                      title: h.intl.string(h.t.Bd10bR),
                                      actions: [],
                                      ...e,
                                      children: (0, i.jsxs)(r.B, {
                                          children: [
                                              (0, i.jsx)(d.PQ, {
                                                  variant: "clickable",
                                                  title: h.intl.string(h.t.eyEkG1),
                                                  description: h.intl.string(h.t.ptItsj),
                                                  onButtonPress: () => (0, o.NW)(s.user, s.guildId, _, s.appContext),
                                              }),
                                              (0, i.jsx)(d.PQ, {
                                                  variant: "clickable",
                                                  title: h.intl.string(h.t.atP0yX),
                                                  description: h.intl.string(h.t.UGg603),
                                                  onButtonPress: () => {
                                                      (0, o.r3)({
                                                          application: t,
                                                          entrypoint: s.entrypoint ?? "user_profile",
                                                          contextualGuildId: s.guildId,
                                                          contextualChannelId: s.channelId,
                                                          onSubmit: _,
                                                          appContext: s.appContext,
                                                      });
                                                  },
                                              }),
                                          ],
                                      }),
                                  });
                          },
                          { modalKey: A },
                      )
                  );
              },
          });
}
