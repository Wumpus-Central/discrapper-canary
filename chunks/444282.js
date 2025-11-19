n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(166459),
    c = n(53281),
    u = n(476326),
    d = n(703558),
    f = n(117530),
    _ = n(859235),
    p = n(898463),
    h = n(981631),
    m = n(388032),
    g = n(163514),
    E = n(451328);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        b = i.useRef(null),
        [y, O] = i.useState(!1),
        v = f.Z.getUpload(t, n.name, d.d.SlashCommand),
        I = i.useRef(null),
        T = (e) => {
            if (e.which === h.yXg.ENTER) {
                var t;
                e.preventDefault(), null == (t = b.current) || t.activateUploadDialogue();
            }
        },
        S = i.useCallback(() => {
            O(!0);
        }, []),
        A = i.useCallback(() => {
            O(!1);
        }, []),
        C = i.useCallback(
            (e) => {
                var r;
                O(!1);
                let i = {
                    id: n.name,
                    file: null == (r = e.dataTransfer) ? void 0 : r.files[0],
                    platform: u.ow.WEB,
                    origin: "drag_drop",
                };
                l.Z.setFile({
                    channelId: t,
                    id: n.name,
                    file: i,
                    draftType: d.d.SlashCommand,
                    allowOptimization: !1,
                });
            },
            [t, n],
        );
    i.useEffect(() => {
        let e = I.current;
        return (
            null == v &&
                (null == e || e.addEventListener("dragover", S, !1),
                null == e || e.addEventListener("dragleave", A, !1),
                null == e || e.addEventListener("drop", C, !1)),
            () => {
                null == e || e.removeEventListener("dragover", S, !1),
                    null == e || e.removeEventListener("dragleave", A, !1),
                    null == e || e.removeEventListener("drop", C, !1);
            }
        );
    }, [v, S, A, C]);
    let N = (e) => {
        var r, i;
        if (null != t && (null == (i = e.currentTarget) || null == (r = i.files) ? void 0 : r[0]) != null) {
            let r = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: u.ow.WEB,
                origin: "file_picker",
            };
            l.Z.setFile({
                channelId: t,
                id: n.name,
                file: r,
                draftType: d.d.SlashCommand,
                allowOptimization: !1,
            }),
                (e.currentTarget.value = "");
        }
    };
    return null != v
        ? (0, r.jsx)(p.Z, {
              channelId: t,
              upload: v,
              keyboardModeEnabled: a,
              draftType: d.d.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(s.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          children: [n.displayName, ": "],
                      }),
                      (0, r.jsx)(s.Text, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: v.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, r.jsxs)(_.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: T,
              className: o()(g.emptyOption, { [g.emptyOptionActive]: y }),
              draftType: d.d.SlashCommand,
              ref: I,
              children: [
                  (0, r.jsx)("span", {
                      className: o()(g.optionName, { [g.optionNameActive]: y }),
                      children: n.displayName,
                  }),
                  (0, r.jsx)(s.P3F, {
                      className: g.clickContainer,
                      onClick: () => {
                          var e;
                          return null == (e = b.current) ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, r.jsxs)("div", {
                          className: g.commandOptionContainer,
                          children: [
                              (0, r.jsx)("img", {
                                  src: E,
                                  className: g.optionIcon,
                                  alt: "",
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: g.optionHelp,
                                  variant: "text-sm/normal",
                                  children: m.intl.string(m.t.IJyOUf),
                              }),
                              (0, r.jsx)(c.Z, {
                                  ref: b,
                                  onChange: N,
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: g.fileInput,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
