a.d(e, { default: () => C }), a(388685);
var t = a(951288),
    o = a(647438),
    l = a(481060),
    i = a(211266),
    d = a(313201),
    r = a(907040),
    s = a(906411),
    c = a(345861),
    u = a(984933),
    p = a(768581),
    m = a(956664),
    x = a(185923),
    g = a(388032),
    I = a(647898),
    f = a(84717);
function h() {
    return [
        {
            name: g.intl.string(g.t.Sp2NFx),
            extensions: ["jpg", "jpeg", "png"],
        },
    ];
}
async function j(n) {
    let e = (0, p.gT)({
            id: n.id,
            animated: !1,
            size: 48,
            forcePNG: !0,
        }),
        a = await fetch(e),
        t = await a.blob();
    return await (0, m.fD)(t);
}
let C = function (n) {
    let { guildId: e, onUploadIcon: a, onSelectUnicodeEmoji: p, onClose: m, transitionState: C } = n,
        v = (0, d.Dt)(),
        b = u.ZP.getDefaultChannel(e),
        [N, y] = o.useState("tab-id-role-icon-file-upload"),
        [_, k] = o.useState(!1),
        E = (0, i.Z)(h);
    return (
        o.useEffect(() => {
            k(!1);
        }, [N]),
        (0, t.jsx)(l.Y0X, {
            transitionState: C,
            "aria-labelledby": v,
            size: l.CgR.MEDIUM,
            className: I.modalRoot,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, t.jsxs)("div", {
                className: I.contentWrapper,
                children: [
                    (0, t.jsxs)(l.njP, {
                        selectedItem: N,
                        onItemSelect: y,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: I.nav,
                        children: [
                            (0, t.jsx)(l.njP.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: g.intl.string(g.t.royWSE),
                            }),
                            (0, t.jsx)(l.njP.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: g.intl.string(g.t["/Ny2wc"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === N
                        ? (0, t.jsx)(l.hzk, {
                              "data-migration-pending": !0,
                              children: (0, t.jsxs)("div", {
                                  className: I.uploadContainer,
                                  children: [
                                      (0, t.jsxs)("div", {
                                          className: I.uploadIconOuterContainer,
                                          children: [
                                              (0, t.jsx)("img", {
                                                  src: f,
                                                  alt: "sparkles",
                                              }),
                                              (0, t.jsx)("div", {
                                                  className: I.uploadIconInnerContainer,
                                                  children: (0, t.jsx)(l.FmF, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: I.uploadIcon,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, t.jsx)("div", {
                                          className: I.uploadInfo,
                                          children: g.intl.string(g.t["mz++Qk"]),
                                      }),
                                      (0, t.jsx)(c.Z, {
                                          onChange: (n) => {
                                              k(!1), a(n), m();
                                          },
                                          onFileSizeError: () => {
                                              k(!0);
                                          },
                                          maxFileSizeBytes: 256000,
                                          filters: E,
                                          text: g.intl.string(g.t.sdCQY2),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      _
                                          ? (0, t.jsx)(l.Text, {
                                                className: I.uploadError,
                                                color: "text-danger",
                                                variant: "text-sm/normal",
                                                children: g.intl.string(g.t.HFyKsb),
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
                              onSelectEmoji: async (n) => {
                                  let { emoji: e } = n;
                                  if ((null == e ? void 0 : e.id) != null)
                                      (null == e ? void 0 : e.type) === s.B.GUILD && a(await j(e));
                                  else if ((null == e ? void 0 : e.surrogates) != null) {
                                      var t, o;
                                      p(
                                          null != (o = null == (t = e.defaultDiversityChild) ? void 0 : t.surrogates)
                                              ? o
                                              : e.surrogates,
                                      );
                                  }
                                  m();
                              },
                              pickerIntention: x.Hz.COMMUNITY_CONTENT,
                              channel: b,
                          })
                        : null,
                ],
            }),
        })
    );
};
