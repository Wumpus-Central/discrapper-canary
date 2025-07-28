(o.d(e, { default: () => C }), o(388685));
var t = o(255367),
    a = o(73800),
    l = o(481060),
    i = o(211266),
    d = o(313201),
    r = o(907040),
    s = o(906411),
    c = o(345861),
    u = o(984933),
    p = o(768581),
    m = o(956664),
    g = o(185923),
    x = o(388032),
    I = o(853967),
    f = o(84717);
function h() {
    return [
        {
            name: x.intl.string(x.t.Sp2NFx),
            extensions: ['jpg', 'jpeg', 'png']
        }
    ];
}
async function j(n) {
    let e = (0, p.gT)({
            id: n.id,
            animated: !1,
            size: 48,
            forcePNG: !0
        }),
        o = await fetch(e),
        t = await o.blob();
    return await (0, m.fD)(t);
}
let C = function (n) {
    let { guildId: e, onUploadIcon: o, onSelectUnicodeEmoji: p, onClose: m, transitionState: C } = n,
        b = (0, d.Dt)(),
        v = u.ZP.getDefaultChannel(e),
        [N, _] = a.useState('tab-id-role-icon-file-upload'),
        [y, k] = a.useState(!1),
        E = (0, i.Z)(h);
    return (
        a.useEffect(() => {
            k(!1);
        }, [N]),
        (0, t.jsx)(l.Y0X, {
            transitionState: C,
            'aria-labelledby': b,
            size: l.CgR.MEDIUM,
            className: I.modalRoot,
            parentComponent: 'CustomRoleIconUploadModal',
            'data-migration-pending': !0,
            children: (0, t.jsxs)('div', {
                className: I.contentWrapper,
                children: [
                    (0, t.jsxs)(l.njP, {
                        selectedItem: N,
                        onItemSelect: _,
                        type: 'top',
                        look: 'grey',
                        'aria-label': 'Expression Picker',
                        className: I.nav,
                        children: [
                            (0, t.jsx)(l.njP.Item, {
                                id: 'tab-id-role-icon-file-upload',
                                children: x.intl.string(x.t.royWSE)
                            }),
                            (0, t.jsx)(l.njP.Item, {
                                id: 'tab-id-role-icon-emoji',
                                children: x.intl.string(x.t['/Ny2wc'])
                            })
                        ]
                    }),
                    'tab-id-role-icon-file-upload' === N
                        ? (0, t.jsx)(l.hzk, {
                              'data-migration-pending': !0,
                              children: (0, t.jsxs)('div', {
                                  className: I.uploadContainer,
                                  children: [
                                      (0, t.jsxs)('div', {
                                          className: I.uploadIconOuterContainer,
                                          children: [
                                              (0, t.jsx)('img', {
                                                  src: f,
                                                  alt: 'sparkles'
                                              }),
                                              (0, t.jsx)('div', {
                                                  className: I.uploadIconInnerContainer,
                                                  children: (0, t.jsx)(l.FmF, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: I.uploadIcon
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, t.jsx)('div', {
                                          className: I.uploadInfo,
                                          children: x.intl.string(x.t['mz++Qk'])
                                      }),
                                      (0, t.jsx)(c.Z, {
                                          buttonCTA: x.intl.string(x.t.sdCQY2),
                                          onChange: (n) => {
                                              (k(!1), o(n), m());
                                          },
                                          onFileSizeError: () => {
                                              k(!0);
                                          },
                                          maxFileSizeBytes: 256000,
                                          filters: E
                                      }),
                                      y
                                          ? (0, t.jsx)(l.Text, {
                                                className: I.uploadError,
                                                color: 'text-danger',
                                                variant: 'text-sm/normal',
                                                children: x.intl.string(x.t.HFyKsb)
                                            })
                                          : null
                                  ]
                              })
                          })
                        : null,
                    'tab-id-role-icon-emoji' === N
                        ? (0, t.jsx)(r.Z, {
                              hasTabWrapper: !0,
                              closePopout: () => m(),
                              onSelectEmoji: async (n) => {
                                  let { emoji: e } = n;
                                  if ((null == e ? void 0 : e.id) != null) (null == e ? void 0 : e.type) === s.B.GUILD && o(await j(e));
                                  else if ((null == e ? void 0 : e.surrogates) != null) {
                                      var t, a;
                                      p(null != (a = null == (t = e.defaultDiversityChild) ? void 0 : t.surrogates) ? a : e.surrogates);
                                  }
                                  m();
                              },
                              pickerIntention: g.Hz.COMMUNITY_CONTENT,
                              channel: v
                          })
                        : null
                ]
            })
        })
    );
};
