t.d(i, { default: () => y });
var s = t(477900),
    a = t(582128),
    l = t(935462),
    n = t(761508),
    r = t(750943),
    o = t(834730),
    c = t(444927),
    d = t(915089),
    m = t(920134),
    u = t(770335),
    p = t(405810),
    g = t(808728),
    h = t(486020),
    j = t(515718),
    x = t(652215),
    b = t(307731),
    f = t(792996),
    N = t(347570);
function C() {
    return [{ name: f.intl.string(f.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
let y = function (e) {
    let { guildId: i, onUploadIcon: t, onSelectUnicodeEmoji: y, onClose: I, transitionState: v } = e,
        w = (0, d.GV)(),
        k = g.A.getDefaultChannel(i),
        [S, E] = a.useState("tab-id-role-icon-file-upload"),
        [z, O] = a.useState(!1),
        P = (0, c.A)(C);
    return (
        a.useEffect(() => {
            O(!1);
        }, [S]),
        (0, s.jsx)(l.EO, {
            transitionState: v,
            "aria-labelledby": w,
            size: l.rI.MEDIUM,
            className: N.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, s.jsxs)("div", {
                className: N.FG,
                children: [
                    (0, s.jsxs)(n.V, {
                        selectedItem: S,
                        onItemSelect: E,
                        type: "top",
                        look: "grey",
                        "aria-label": f.intl.string(f.t.Utlwvi),
                        className: N.C$,
                        children: [
                            (0, s.jsx)(n.V.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: f.intl.string(f.t.royWSB),
                            }),
                            (0, s.jsx)(n.V.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: f.intl.string(f.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === S
                        ? (0, s.jsx)(l.$m, {
                              "data-migration-pending": !0,
                              children: (0, s.jsxs)("div", {
                                  className: N.PO,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: N.HK,
                                          children: [
                                              (0, s.jsx)("img", {
                                                  src: "/assets/4c12db677c616b52.svg",
                                                  alt: "sparkles",
                                              }),
                                              (0, s.jsx)("div", {
                                                  className: N.sk,
                                                  children: (0, s.jsx)(r.ImagePlusIcon, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: N.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)("div", { className: N.WG, children: f.intl.string(f.t["mz++Qq"]) }),
                                      (0, s.jsx)(p.A, {
                                          onChange: (e) => {
                                              (O(!1), t(e), I());
                                          },
                                          onFileSizeError: () => {
                                              O(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: P,
                                          text: f.intl.string(f.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      z
                                          ? (0, s.jsx)(o.E, {
                                                className: N.Qw,
                                                color: "text-feedback-critical",
                                                variant: "body-sm/normal",
                                                children: f.intl.string(f.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === S
                        ? (0, s.jsx)(m.A, {
                              hasTabWrapper: !0,
                              closePopout: () => I(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: i } = e;
                                  if (i?.id != null)
                                      switch (i.type) {
                                          case u.i.GUILD:
                                              t(
                                                  await (async function (e) {
                                                      let i = await fetch(
                                                              (0, h._O)({
                                                                  id: e,
                                                                  animated: !1,
                                                                  size: 48,
                                                                  forcePNG: !0,
                                                              }),
                                                          ),
                                                          t = await (0, j.We)(await i.blob());
                                                      return x.Pt0 + t.slice(t.indexOf(",") + 1);
                                                  })(i.id),
                                              );
                                          case u.i.PACK:
                                      }
                                  else i?.surrogates != null && y(i.defaultDiversityChild?.surrogates ?? i.surrogates);
                                  I();
                              },
                              pickerIntention: b.EmojiIntention.COMMUNITY_CONTENT,
                              channel: k,
                          })
                        : null,
                ],
            }),
        })
    );
};
