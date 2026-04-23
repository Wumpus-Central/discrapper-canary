"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(892491),
    s = n(192308),
    a = n(80556),
    o = n(207560);
let l = (0, n(945810).mj)({
        kind: "user",
        name: "2025-11-age-verification-expressive-everywhere",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (e) => l.getConfig({ location: e }).enabled;
var _ = n(36149),
    u = n(40449);
function c(e) {
    if (null != e) return (0, _.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
let E = {
    showAgeVerification: (e) => {
        let { onClose: t, entryPoint: r, shouldShowExpressiveModal: o = !1, webviewUrl: l, ..._ } = e;
        if (null == l) return;
        let E = { modalKey: u.SW, onCloseCallback: t, backdropStyle: c(r), Layer: a.Ay };
        o || d(r)
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, i.jsx)(e, { webviewUrl: l, ..._, ...t });
              }, E)
            : (0, s.openModalLazy)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, i.jsx)(e, { webviewUrl: l, ..._, ...t });
              }, E);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: r } = e;
        (0, _.Q9)() && (0, o.u0)()
            ? (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e("40848").then(n.bind(n, 297102));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: u.NC, backdropStyle: c(r), Layer: a.Ay, onCloseCallback: t },
              )
            : d(r)
              ? (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("99487").then(n.bind(n, 595746));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: u.NC, backdropStyle: c(r), Layer: a.Ay, onCloseCallback: t },
                )
              : (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: u.NC, backdropStyle: c(r), Layer: a.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
