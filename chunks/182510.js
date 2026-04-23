i.d(t, { default: () => N });
var a = i(627968),
    n = i(64700),
    s = i(935462),
    l = i(761508),
    d = i(750943),
    r = i(834730),
    o = i(444927),
    c = i(915089),
    p = i(267889),
    u = i(770335),
    m = i(405810),
    h = i(808728),
    x = i(486020),
    g = i(515718),
    j = i(307731),
    C = i(985018),
    b = i(94777);
function f() {
    return [{ name: C.intl.string(C.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
async function I(e) {
    let t = (0, x._O)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
        i = await fetch(t),
        a = await i.blob();
    return await (0, g.We)(a);
}
let N = function (e) {
    let { guildId: t, onUploadIcon: i, onSelectUnicodeEmoji: x, onClose: g, transitionState: N } = e,
        y = (0, c.GV)(),
        _ = h.Ay.getDefaultChannel(t),
        [k, v] = n.useState("tab-id-role-icon-file-upload"),
        [E, w] = n.useState(!1),
        S = (0, o.A)(f);
    return (
        n.useEffect(() => {
            w(!1);
        }, [k]),
        (0, a.jsx)(s.EO, {
            transitionState: N,
            "aria-labelledby": y,
            size: s.rI.MEDIUM,
            className: b.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, a.jsxs)("div", {
                className: b.FG,
                children: [
                    (0, a.jsxs)(l.V, {
                        selectedItem: k,
                        onItemSelect: v,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: b.C$,
                        children: [
                            (0, a.jsx)(l.V.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: C.intl.string(C.t.royWSB),
                            }),
                            (0, a.jsx)(l.V.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: C.intl.string(C.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === k
                        ? (0, a.jsx)(s.$m, {
                              "data-migration-pending": !0,
                              children: (0, a.jsxs)("div", {
                                  className: b.PO,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: b.HK,
                                          children: [
                                              (0, a.jsx)("img", {
                                                  src: "/assets/4c12db677c616b52.svg",
                                                  alt: "sparkles",
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: b.sk,
                                                  children: (0, a.jsx)(d.X, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: b.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", { className: b.WG, children: C.intl.string(C.t["mz++Qq"]) }),
                                      (0, a.jsx)(m.A, {
                                          onChange: (e) => {
                                              w(!1), i(e), g();
                                          },
                                          onFileSizeError: () => {
                                              w(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: S,
                                          text: C.intl.string(C.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      E
                                          ? (0, a.jsx)(r.E, {
                                                className: b.Qw,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: C.intl.string(C.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === k
                        ? (0, a.jsx)(p.A, {
                              hasTabWrapper: !0,
                              closePopout: () => g(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: t } = e;
                                  t?.id != null
                                      ? t?.type === u.i.GUILD && i(await I(t))
                                      : t?.surrogates != null && x(t.defaultDiversityChild?.surrogates ?? t.surrogates),
                                      g();
                              },
                              pickerIntention: j.EmojiIntention.COMMUNITY_CONTENT,
                              channel: _,
                          })
                        : null,
                ],
            }),
        })
    );
};
