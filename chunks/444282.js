n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(166459),
    u = n(53281),
    c = n(476326),
    d = n(703558),
    f = n(117530),
    _ = n(859235),
    p = n(898463),
    h = n(981631),
    m = n(379988),
    g = n(451328);
function E(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        E = r.useRef(null),
        [v, y] = r.useState(!1),
        I = f.Z.getUpload(t, n.name, d.d.SlashCommand),
        b = r.useRef(null),
        T = (e) => {
            if (e.which === h.yXg.ENTER) {
                var t;
                e.preventDefault(), null === (t = E.current) || void 0 === t || t.activateUploadDialogue();
            }
        },
        S = r.useCallback(() => {
            y(!0);
        }, []),
        A = r.useCallback(() => {
            y(!1);
        }, []),
        N = r.useCallback(
            (e) => {
                var i;
                y(!1);
                let r = {
                    id: n.name,
                    file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
                    platform: c.ow.WEB
                };
                l.Z.setFile({
                    channelId: t,
                    id: n.name,
                    file: r,
                    draftType: d.d.SlashCommand
                });
            },
            [t, n]
        );
    r.useEffect(() => {
        let e = b.current;
        return (
            null == I && (null == e || e.addEventListener('dragover', S, !1), null == e || e.addEventListener('dragleave', A, !1), null == e || e.addEventListener('drop', N, !1)),
            () => {
                null == e || e.removeEventListener('dragover', S, !1), null == e || e.removeEventListener('dragleave', A, !1), null == e || e.removeEventListener('drop', N, !1);
            }
        );
    }, [I, S, A, N]);
    let C = (e) => {
        var i, r;
        if (null != t && (null === (r = e.currentTarget) || void 0 === r ? void 0 : null === (i = r.files) || void 0 === i ? void 0 : i[0]) != null) {
            let i = {
                id: n.name,
                file: e.currentTarget.files[0],
                platform: c.ow.WEB
            };
            l.Z.setFile({
                channelId: t,
                id: n.name,
                file: i,
                draftType: d.d.SlashCommand
            }),
                (e.currentTarget.value = '');
        }
    };
    return null != I
        ? (0, i.jsx)(p.Z, {
              channelId: t,
              upload: I,
              keyboardModeEnabled: a,
              draftType: d.d.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          children: [n.name, ': ']
                      }),
                      (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'text-brand',
                          children: I.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, i.jsxs)(_.Z, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: T,
              className: s()(m.emptyOption, { [m.emptyOptionActive]: v }),
              draftType: d.d.SlashCommand,
              ref: b,
              children: [
                  (0, i.jsx)('span', {
                      className: s()(m.optionName, { [m.optionNameActive]: v }),
                      children: n.name
                  }),
                  (0, i.jsx)(o.P3F, {
                      className: m.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = E.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, i.jsxs)('div', {
                          className: m.commandOptionContainer,
                          children: [
                              (0, i.jsx)('img', {
                                  src: g,
                                  className: m.optionIcon,
                                  alt: ''
                              }),
                              (0, i.jsx)(o.Text, {
                                  className: m.optionHelp,
                                  variant: 'text-sm/normal',
                                  children: 'Drag and drop or click to upload file'
                              }),
                              (0, i.jsx)(u.Z, {
                                  ref: E,
                                  onChange: C,
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
