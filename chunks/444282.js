r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(166459),
    d = r(53281),
    f = r(476326),
    p = r(703558),
    h = r(117530),
    _ = r(859235),
    m = r(898463),
    g = r(981631),
    E = r(379988),
    v = r(451328);
function y(e) {
    let { channelId: n, option: r, keyboardModeEnabled: i } = e,
        s = o.useRef(null),
        [y, b] = o.useState(!1),
        I = h.Z.getUpload(n, r.name, p.d.SlashCommand),
        T = o.useRef(null),
        S = (e) => {
            if (e.which === g.yXg.ENTER) {
                var n;
                e.preventDefault(), null === (n = s.current) || void 0 === n || n.activateUploadDialogue();
            }
        },
        A = o.useCallback(() => {
            b(!0);
        }, []),
        C = o.useCallback(() => {
            b(!1);
        }, []),
        N = o.useCallback(
            (e) => {
                var i;
                b(!1);
                let a = {
                    id: r.name,
                    file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
                    platform: f.ow.WEB
                };
                c.Z.setFile({
                    channelId: n,
                    id: r.name,
                    file: a,
                    draftType: p.d.SlashCommand
                });
            },
            [n, r]
        );
    o.useEffect(() => {
        let e = T.current;
        return (
            null == I && (null == e || e.addEventListener('dragover', A, !1), null == e || e.addEventListener('dragleave', C, !1), null == e || e.addEventListener('drop', N, !1)),
            () => {
                null == e || e.removeEventListener('dragover', A, !1), null == e || e.removeEventListener('dragleave', C, !1), null == e || e.removeEventListener('drop', N, !1);
            }
        );
    }, [I, A, C, N]);
    let R = (e) => {
        var i, a;
        if (null != n && (null === (a = e.currentTarget) || void 0 === a ? void 0 : null === (i = a.files) || void 0 === i ? void 0 : i[0]) != null) {
            let i = {
                id: r.name,
                file: e.currentTarget.files[0],
                platform: f.ow.WEB
            };
            c.Z.setFile({
                channelId: n,
                id: r.name,
                file: i,
                draftType: p.d.SlashCommand
            }),
                (e.currentTarget.value = '');
        }
    };
    return null != I
        ? (0, a.jsx)(m.Z, {
              channelId: n,
              upload: I,
              keyboardModeEnabled: i,
              draftType: p.d.SlashCommand,
              label: (0, a.jsxs)(o.Fragment, {
                  children: [
                      (0, a.jsxs)(u.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          children: [r.name, ': ']
                      }),
                      (0, a.jsx)(u.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'text-brand',
                          children: I.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, a.jsxs)(_.Z, {
              id: r.name,
              channelId: n,
              keyboardModeEnabled: i,
              onKeyDown: S,
              className: l()(E.emptyOption, { [E.emptyOptionActive]: y }),
              draftType: p.d.SlashCommand,
              ref: T,
              children: [
                  (0, a.jsx)('span', {
                      className: l()(E.optionName, { [E.optionNameActive]: y }),
                      children: r.name
                  }),
                  (0, a.jsx)(u.Clickable, {
                      className: E.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = s.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      },
                      children: (0, a.jsxs)('div', {
                          className: E.commandOptionContainer,
                          children: [
                              (0, a.jsx)('img', {
                                  src: v,
                                  className: E.optionIcon,
                                  alt: ''
                              }),
                              (0, a.jsx)(u.Text, {
                                  className: E.optionHelp,
                                  variant: 'text-sm/normal',
                                  children: 'Drag and drop or click to upload file'
                              }),
                              (0, a.jsx)(d.Z, {
                                  ref: s,
                                  onChange: R,
                                  multiple: !1,
                                  tabIndex: -1,
                                  'aria-hidden': !0,
                                  className: E.fileInput
                              })
                          ]
                      })
                  })
              ]
          });
}
