t.d(i, { default: () => C });
var a = t(627968),
    s = t(64700),
    n = t(935462),
    l = t(761508),
    r = t(750943),
    o = t(834730),
    c = t(444927),
    d = t(915089),
    m = t(267889),
    u = t(770335),
    p = t(405810),
    h = t(808728),
    g = t(486020),
    j = t(515718),
    x = t(307731),
    b = t(375708),
    f = t(94777);
function N() {
    return [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
async function y(e) {
    let i = (0, g._O)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
        t = await fetch(i),
        a = await t.blob();
    return await (0, j.We)(a);
}
let C = function (e) {
    let { guildId: i, onUploadIcon: t, onSelectUnicodeEmoji: g, onClose: j, transitionState: C } = e,
        I = (0, d.GV)(),
        k = h.Ay.getDefaultChannel(i),
        [v, E] = s.useState("tab-id-role-icon-file-upload"),
        [S, w] = s.useState(!1),
        z = (0, c.A)(N);
    return (
        s.useEffect(() => {
            w(!1);
        }, [v]),
        (0, a.jsx)(n.EO, {
            transitionState: C,
            "aria-labelledby": I,
            size: n.rI.MEDIUM,
            className: f.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, a.jsxs)("div", {
                className: f.FG,
                children: [
                    (0, a.jsxs)(l.V, {
                        selectedItem: v,
                        onItemSelect: E,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: f.C$,
                        children: [
                            (0, a.jsx)(l.V.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: b.intl.string(b.t.royWSB),
                            }),
                            (0, a.jsx)(l.V.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: b.intl.string(b.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === v
                        ? (0, a.jsx)(n.$m, {
                              "data-migration-pending": !0,
                              children: (0, a.jsxs)("div", {
                                  className: f.PO,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: f.HK,
                                          children: [
                                              (0, a.jsx)("img", {
                                                  src: "/assets/4c12db677c616b52.svg",
                                                  alt: "sparkles",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: f.sk,
                                                  children: (0, a.jsx)(r.X, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: f.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", { className: f.WG, children: b.intl.string(b.t["mz++Qq"]) }),
                                      (0, a.jsx)(p.A, {
                                          onChange: (e) => {
                                              w(!1), t(e), j();
                                          },
                                          onFileSizeError: () => {
                                              w(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: z,
                                          text: b.intl.string(b.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      S
                                          ? (0, a.jsx)(o.E, {
                                                className: f.Qw,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: b.intl.string(b.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === v
                        ? (0, a.jsx)(m.A, {
                              hasTabWrapper: !0,
                              closePopout: () => j(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: i } = e;
                                  i?.id != null
                                      ? i?.type === u.i.GUILD && t(await y(i))
                                      : i?.surrogates != null && g(i.defaultDiversityChild?.surrogates ?? i.surrogates),
                                      j();
                              },
                              pickerIntention: x.EmojiIntention.COMMUNITY_CONTENT,
                              channel: k,
                          })
                        : null,
                ],
            }),
        })
    );
};
