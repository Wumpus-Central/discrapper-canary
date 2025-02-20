n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(166459),
    c = n(53281),
    u = n(476326),
    d = n(703558),
    f = n(117530),
    p = n(859235),
    _ = n(898463),
    h = n(981631),
    m = n(293788),
    g = n(451328);
function E(e) {
    let { channelId: t, option: n, keyboardModeEnabled: o } = e,
        E = i.useRef(null),
        [v, b] = i.useState(!1),
        y = f.Z.getUpload(t, n.name, d.d.SlashCommand),
        O = i.useRef(null),
        S = (e) => {
            if (e.which === h.yXg.ENTER) {
                var t;
                e.preventDefault(), null === (t = E.current) || void 0 === t || t.activateUploadDialogue();
            }
        },
        I = i.useCallback(() => {
            b(!0);
        }, []),
        T = i.useCallback(() => {
            b(!1);
        }, []),
        N = i.useCallback(
            (e) => {
                var r;
                b(!1);
                let i = {
                    id: n.name,
                    file: null === (r = e.dataTransfer) || void 0 === r ? void 0 : r.files[0],
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
        let e = O.current;
        return (
            null == y && (null == e || e.addEventListener('dragover', I, !1), null == e || e.addEventListener('dragleave', T, !1), null == e || e.addEventListener('drop', N, !1)),
            () => {
                null == e || e.removeEventListener('dragover', I, !1), null == e || e.removeEventListener('dragleave', T, !1), null == e || e.removeEventListener('drop', N, !1);
            }
        );
    }, [y, I, T, N]);
    let A = (e) => {
        var r, i;
        if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (r = i.files) || void 0 === r ? void 0 : r[0]) != null) {
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
    return null != y
        ? (0, r.jsx)(_.Z, {
              channelId: t,
              upload: y,
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
                          children: y.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, r.jsxs)(p.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: o,
              onKeyDown: S,
              className: a()(m.emptyOption, { [m.emptyOptionActive]: v }),
              draftType: d.d.SlashCommand,
              ref: O,
              children: [
                  (0, r.jsx)('span', {
                      className: a()(m.optionName, { [m.optionNameActive]: v }),
                      children: n.name
                  }),
                  (0, r.jsx)(s.P3F, {
                      className: m.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = E.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
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
                                  onChange: A,
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
