t.d(i, { default: () => I });
var s = t(477900),
    a = t(582128),
    l = t(935462),
    n = t(761508),
    r = t(750943),
    o = t(834730),
    c = t(444927),
    d = t(915089),
    m = t(969602),
    u = t(770335),
    p = t(405810),
    h = t(808728),
    g = t(486020),
    j = t(515718),
    x = t(652215),
    f = t(307731);
async function b(e) {
    let i = await fetch((0, g._O)({ id: e, animated: !1, size: f.EMOJI_URL_BASE_SIZE, forcePNG: !0 })),
        t = await (0, j.We)(await i.blob());
    return x.Pt0 + t.slice(t.indexOf(",") + 1);
}
var N = t(105292),
    C = t(347570);
function y() {
    return [{ name: N.intl.string(N.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
let I = function (e) {
    let { guildId: i, onUploadIcon: t, onSelectUnicodeEmoji: g, onClose: j, transitionState: x } = e,
        I = (0, d.GV)(),
        v = h.Ay.getDefaultChannel(i),
        [E, S] = a.useState("tab-id-role-icon-file-upload"),
        [w, k] = a.useState(!1),
        z = (0, c.A)(y);
    return (
        a.useEffect(() => {
            k(!1);
        }, [E]),
        (0, s.jsx)(l.EO, {
            transitionState: x,
            "aria-labelledby": I,
            size: l.rI.MEDIUM,
            className: C.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, s.jsxs)("div", {
                className: C.FG,
                children: [
                    (0, s.jsxs)(n.V, {
                        selectedItem: E,
                        onItemSelect: S,
                        type: "top",
                        look: "grey",
                        "aria-label": N.intl.string(N.t.Utlwvi),
                        className: C.C$,
                        children: [
                            (0, s.jsx)(n.V.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: N.intl.string(N.t.royWSB),
                            }),
                            (0, s.jsx)(n.V.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: N.intl.string(N.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === E
                        ? (0, s.jsx)(l.$m, {
                              "data-migration-pending": !0,
                              children: (0, s.jsxs)("div", {
                                  className: C.PO,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: C.HK,
                                          children: [
                                              (0, s.jsx)("img", {
                                                  src: "/assets/4c12db677c616b52.svg",
                                                  alt: "sparkles",
                                              }),
                                              (0, s.jsx)("div", {
                                                  className: C.sk,
                                                  children: (0, s.jsx)(r.X, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: C.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, s.jsx)("div", { className: C.WG, children: N.intl.string(N.t["mz++Qq"]) }),
                                      (0, s.jsx)(p.A, {
                                          onChange: (e) => {
                                              (k(!1), t(e), j());
                                          },
                                          onFileSizeError: () => {
                                              k(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: z,
                                          text: N.intl.string(N.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      w
                                          ? (0, s.jsx)(o.E, {
                                                className: C.Qw,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: N.intl.string(N.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === E
                        ? (0, s.jsx)(m.A, {
                              hasTabWrapper: !0,
                              closePopout: () => j(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: i } = e;
                                  if (i?.id != null)
                                      switch (i.type) {
                                          case u.i.GUILD:
                                              t(await b(i.id));
                                          case u.i.PACK:
                                      }
                                  else i?.surrogates != null && g(i.defaultDiversityChild?.surrogates ?? i.surrogates);
                                  j();
                              },
                              pickerIntention: f.EmojiIntention.COMMUNITY_CONTENT,
                              channel: v,
                          })
                        : null,
                ],
            }),
        })
    );
};
