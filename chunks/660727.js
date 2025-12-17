a.d(n, { default: () => C }), a(388685);
var t = a(54381),
    o = a(473749),
    i = a(481060),
    l = a(211266),
    d = a(313201),
    r = a(907040),
    s = a(906411),
    c = a(345861),
    u = a(984933),
    p = a(768581),
    m = a(956664),
    f = a(185923),
    x = a(388032),
    I = a(292215),
    g = a(84717);
function h() {
    return [
        {
            name: x.intl.string(x.t["Sp2NF+"]),
            extensions: ["jpg", "jpeg", "png"],
        },
    ];
}
async function j(e) {
    let n = (0, p.gT)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0,
        }),
        a = await fetch(n),
        t = await a.blob();
    return await (0, m.fD)(t);
}
let C = function (e) {
    let { guildId: n, onUploadIcon: a, onSelectUnicodeEmoji: p, onClose: m, transitionState: C } = e,
        v = (0, d.Dt)(),
        b = u.ZP.getDefaultChannel(n),
        [N, y] = o.useState("tab-id-role-icon-file-upload"),
        [k, z] = o.useState(!1),
        E = (0, l.Z)(h);
    return (
        o.useEffect(() => {
            z(!1);
        }, [N]),
        (0, t.jsx)(i.Y0X, {
            transitionState: C,
            "aria-labelledby": v,
            size: i.CgR.MEDIUM,
            className: I.modalRoot,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, t.jsxs)("div", {
                className: I.contentWrapper,
                children: [
                    (0, t.jsxs)(i.njP, {
                        selectedItem: N,
                        onItemSelect: y,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: I.nav,
                        children: [
                            (0, t.jsx)(i.njP.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: x.intl.string(x.t.royWSB),
                            }),
                            (0, t.jsx)(i.njP.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: x.intl.string(x.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === N
                        ? (0, t.jsx)(i.hzk, {
                              "data-migration-pending": !0,
                              children: (0, t.jsxs)("div", {
                                  className: I.uploadContainer,
                                  children: [
                                      (0, t.jsxs)("div", {
                                          className: I.uploadIconOuterContainer,
                                          children: [
                                              (0, t.jsx)("img", {
                                                  src: g,
                                                  alt: "sparkles",
                                              }),
                                              (0, t.jsx)("div", {
                                                  className: I.uploadIconInnerContainer,
                                                  children: (0, t.jsx)(i.FmF, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: I.uploadIcon,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, t.jsx)("div", {
                                          className: I.uploadInfo,
                                          children: x.intl.string(x.t["mz++Qq"]),
                                      }),
                                      (0, t.jsx)(c.Z, {
                                          onChange: (e) => {
                                              z(!1), a(e), m();
                                          },
                                          onFileSizeError: () => {
                                              z(!0);
                                          },
                                          maxFileSizeBytes: 256000,
                                          filters: E,
                                          text: x.intl.string(x.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      k
                                          ? (0, t.jsx)(i.Text, {
                                                className: I.uploadError,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: x.intl.string(x.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === N
                        ? (0, t.jsx)(r.Z, {
                              hasTabWrapper: !0,
                              closePopout: () => m(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: n } = e;
                                  if ((null == n ? void 0 : n.id) != null)
                                      (null == n ? void 0 : n.type) === s.B.GUILD && a(await j(n));
                                  else if ((null == n ? void 0 : n.surrogates) != null) {
                                      var t, o;
                                      p(
                                          null != (o = null == (t = n.defaultDiversityChild) ? void 0 : t.surrogates)
                                              ? o
                                              : n.surrogates,
                                      );
                                  }
                                  m();
                              },
                              pickerIntention: f.Hz.COMMUNITY_CONTENT,
                              channel: b,
                          })
                        : null,
                ],
            }),
        })
    );
};
