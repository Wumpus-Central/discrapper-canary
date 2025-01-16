r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(166459),
    d = r(53281),
    f = r(476326),
    _ = r(703558),
    h = r(117530),
    p = r(859235),
    m = r(898463),
    g = r(981631),
    E = r(379988),
    v = r(451328);
function I(e) {
    let { channelId: n, option: r, keyboardModeEnabled: i } = e,
        o = s.useRef(null),
        [I, T] = s.useState(!1),
        b = h.Z.getUpload(n, r.name, _.d.SlashCommand),
        y = s.useRef(null),
        S = (e) => {
            if (e.which === g.yXg.ENTER) {
                var n;
                e.preventDefault(), null === (n = o.current) || void 0 === n || n.activateUploadDialogue();
            }
        },
        A = s.useCallback(() => {
            T(!0);
        }, []),
        N = s.useCallback(() => {
            T(!1);
        }, []),
        C = s.useCallback(
            (e) => {
                var i;
                T(!1);
                let a = {
                    id: r.name,
                    file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
                    platform: f.ow.WEB
                };
                c.Z.setFile({
                    channelId: n,
                    id: r.name,
                    file: a,
                    draftType: _.d.SlashCommand
                });
            },
            [n, r]
        );
    s.useEffect(() => {
        let e = y.current;
        return (
            null == b && (null == e || e.addEventListener('dragover', A, !1), null == e || e.addEventListener('dragleave', N, !1), null == e || e.addEventListener('drop', C, !1)),
            () => {
                null == e || e.removeEventListener('dragover', A, !1), null == e || e.removeEventListener('dragleave', N, !1), null == e || e.removeEventListener('drop', C, !1);
            }
        );
    }, [b, A, N, C]);
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
                draftType: _.d.SlashCommand
            }),
                (e.currentTarget.value = '');
        }
    };
    return null != b
        ? (0, a.jsx)(m.Z, {
              channelId: n,
              upload: b,
              keyboardModeEnabled: i,
              draftType: _.d.SlashCommand,
              label: (0, a.jsxs)(s.Fragment, {
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
                          children: b.filename
                      })
                  ]
              }),
              canEdit: !1
          })
        : (0, a.jsxs)(p.Z, {
              id: r.name,
              channelId: n,
              keyboardModeEnabled: i,
              onKeyDown: S,
              className: l()(E.emptyOption, { [E.emptyOptionActive]: I }),
              draftType: _.d.SlashCommand,
              ref: y,
              children: [
                  (0, a.jsx)('span', {
                      className: l()(E.optionName, { [E.optionNameActive]: I }),
                      children: r.name
                  }),
                  (0, a.jsx)(u.Clickable, {
                      className: E.clickContainer,
                      onClick: () => {
                          var e;
                          return null === (e = o.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
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
                                  ref: o,
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
