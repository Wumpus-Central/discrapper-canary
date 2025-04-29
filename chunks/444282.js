n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(166459),
    c = n(53281),
    u = n(476326),
    d = n(703558),
    f = n(117530),
    _ = n(859235),
    p = n(898463),
    h = n(981631),
    m = n(98030),
    g = n(451328);
function E(e) {
    let { channelId: t, option: n, keyboardModeEnabled: o } = e,
        E = i.useRef(null),
        [b, y] = i.useState(!1),
        O = f.Z.getUpload(t, n.name, d.d.SlashCommand),
        v = i.useRef(null),
        I = (e) => {
            if (e.which === h.yXg.ENTER) {
                var t;
                e.preventDefault(), null == (t = E.current) || t.activateUploadDialogue();
            }
        },
        S = i.useCallback(() => {
            y(!0);
        }, []),
        T = i.useCallback(() => {
            y(!1);
        }, []),
        A = i.useCallback(
            (e) => {
                var r;
                y(!1);
                let i = {
                    id: n.name,
                    file: null == (r = e.dataTransfer) ? void 0 : r.files[0],
                    platform: u.ow.WEB
                };
                l.Z.setFile({
                    channelId: t,
                    id: n.name,
                    file: i,
                    draftType: d.d.SlashCommand
                });
            },
            [t, n]
        );
    i.useEffect(() => {
        let e = v.current;
        return (
            null == O && (null == e || e.addEventListener('dragover', S, !1), null == e || e.addEventListener('dragleave', T, !1), null == e || e.addEventListener('drop', A, !1)),
            () => {
                null == e || e.removeEventListener('dragover', S, !1), null == e || e.removeEventListener('dragleave', T, !1), null == e || e.removeEventListener('drop', A, !1);
            }
        );
    }, [O, S, T, A]);
    let N = (e) => {
        var r, i;
        if (null != t && (null == (i = e.currentTarget) || null == (r = i.files) ? void 0 : r[0]) != null) {
            let r = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: u.ow.WEB
            };
            l.Z.setFile({
                channelId: t,
                id: n.name,
                file: r,
                draftType: d.d.SlashCommand
            }),
                (e.currentTarget.value = '');
        }
    };
    return null != O
        ? (0, r.jsx)(p.Z, {
              channelId: t,
              upload: O,
              keyboardModeEnabled: o,
              draftType: d.d.SlashCommand,
              label: (0, r.jsxs)(i.Fragment, {
                  children: [
                      (0, r.jsxs)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          children: [n.name, ': ']
                      }),
                      (0, r.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'text-brand',
                          children: O.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, r.jsxs)(_.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: o,
              onKeyDown: I,
              className: a()(m.emptyOption, { [m.emptyOptionActive]: b }),
              draftType: d.d.SlashCommand,
              ref: v,
              children: [
                  (0, r.jsx)('span', {
                      className: a()(m.optionName, { [m.optionNameActive]: b }),
                      children: n.name
                  }),
                  (0, r.jsx)(s.P3F, {
                      className: m.clickContainer,
                      onClick: () => {
                          var e;
                          return null == (e = E.current) ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, r.jsxs)('div', {
                          className: m.commandOptionContainer,
                          children: [
                              (0, r.jsx)('img', {
                                  src: g,
                                  className: m.optionIcon,
                                  alt: ''
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: m.optionHelp,
                                  variant: 'text-sm/normal',
                                  children: 'Drag and drop or click to upload file'
                              }),
                              (0, r.jsx)(c.Z, {
                                  ref: E,
                                  onChange: N,
                                  multiple: !1,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  className: m.fileInput
                              })
                          ]
                      })
                  })
              ]
          });
}
