"use strict";
n.d(t, { A: () => f });
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
    u = (e) => l.getConfig({ location: e }).enabled;
var c = n(36149),
    d = n(40449);
function _(e) {
    if (null != e) return (0, c.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
let f = {
    showAgeVerification: (e) => {
        let { onClose: t, entryPoint: r, shouldShowExpressiveModal: o = !1, webviewUrl: l, ...c } = e;
        if (null == l) return;
        let f = { modalKey: d.SW, onCloseCallback: t, backdropStyle: _(r), Layer: a.Ay };
        o || u(r)
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("43156"), n.e("18024"), n.e("24947")]).then(
                      n.bind(n, 662558),
                  );
                  return (t) => (0, i.jsx)(e, { webviewUrl: l, ...c, ...t });
              }, f)
            : (0, s.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e("95840"), n.e("43156"), n.e("88941"), n.e("23425")]).then(
                      n.bind(n, 745336),
                  );
                  return (t) => (0, i.jsx)(e, { webviewUrl: l, ...c, ...t });
              }, f);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: r } = e;
        (0, c.Q9)() && (0, o.u0)()
            ? (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("95840"),
                          n.e("54398"),
                          n.e("607"),
                          n.e("84794"),
                          n.e("34260"),
                          n.e("18467"),
                      ]).then(n.bind(n, 297102));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: d.NC, backdropStyle: _(r), Layer: a.Ay, onCloseCallback: t },
              )
            : u(r)
              ? (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("95840"),
                            n.e("88941"),
                            n.e("607"),
                            n.e("84794"),
                            n.e("99487"),
                        ]).then(n.bind(n, 595746));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: d.NC, backdropStyle: _(r), Layer: a.Ay, onCloseCallback: t },
                )
              : (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("95840"),
                            n.e("34763"),
                            n.e("61268"),
                            n.e("607"),
                            n.e("18792"),
                            n.e("34260"),
                            n.e("42978"),
                        ]).then(n.bind(n, 654041));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: d.NC, backdropStyle: _(r), Layer: a.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
