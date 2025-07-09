(n.d(a, { default: () => g }), n(388685));
var o = n(255367),
    t = n(73800),
    l = n(120356),
    i = n.n(l),
    d = n(755721),
    r = n(481060),
    s = n(211266),
    c = n(313201),
    u = n(907040),
    p = n(906411),
    v = n(345861),
    m = n(984933),
    x = n(768581),
    b = n(956664),
    f = n(185923),
    h = n(388032),
    j = n(853967),
    N = n(84717);
function C() {
    return [
        {
            name: h.intl.string(h.t.Sp2NFx),
            extensions: ['jpg', 'jpeg', 'png']
        }
    ];
}
async function I(e) {
    let a = (0, x.gT)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0
        }),
        n = await fetch(a),
        o = await n.blob();
    return await (0, b.fD)(o);
}
let g = function (e) {
    let { guildId: a, onUploadIcon: n, onSelectUnicodeEmoji: l, onClose: x, transitionState: b } = e,
        g = (0, c.Dt)(),
        z = m.ZP.getDefaultChannel(a),
        [_, k] = t.useState('tab-id-role-icon-file-upload'),
        [S, B] = t.useState(!1),
        E = (0, s.Z)(C);
    return (
        t.useEffect(() => {
            B(!1);
        }, [_]),
        (0, o.jsx)(r.Y0X, {
            transitionState: b,
            'aria-labelledby': g,
            size: r.CgR.MEDIUM,
            className: j.modalRoot,
            parentComponent: 'CustomRoleIconUploadModal',
            children: (0, o.jsxs)('div', {
                className: j.contentWrapper,
                children: [
                    (0, o.jsx)('nav', {
                        className: i()(j.nav, { [j.navUploadSelected]: 'tab-id-role-icon-file-upload' === _ }),
                        children: (0, o.jsxs)('div', {
                            className: j.navList,
                            role: 'tablist',
                            'aria-label': 'Expression Picker',
                            children: [
                                (0, o.jsx)('div', {
                                    className: j.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-file-upload',
                                    'aria-selected': 'tab-id-role-icon-file-upload' === _,
                                    children: (0, o.jsx)(d.zx, {
                                        onClick: () => {
                                            k('tab-id-role-icon-file-upload');
                                        },
                                        'aria-current': 'page',
                                        className: i()(j.navButton, { [j.navButtonActive]: 'tab-id-role-icon-file-upload' === _ }),
                                        look: d.zx.Looks.BLANK,
                                        size: d.zx.Sizes.NONE,
                                        children: h.intl.string(h.t.royWSE)
                                    })
                                }),
                                (0, o.jsx)('div', {
                                    className: j.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-emoji',
                                    'aria-selected': 'tab-id-role-icon-emoji' === _,
                                    children: (0, o.jsx)(d.zx, {
                                        onClick: () => {
                                            k('tab-id-role-icon-emoji');
                                        },
                                        'aria-current': 'page',
                                        className: i()(j.navButton, { [j.navButtonActive]: 'tab-id-role-icon-emoji' === _ }),
                                        look: d.zx.Looks.BLANK,
                                        size: d.zx.Sizes.NONE,
                                        children: h.intl.string(h.t['/Ny2wc'])
                                    })
                                })
                            ]
                        })
                    }),
                    'tab-id-role-icon-file-upload' === _
                        ? (0, o.jsx)(r.hzk, {
                              children: (0, o.jsxs)('div', {
                                  className: j.uploadContainer,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: j.uploadIconOuterContainer,
                                          children: [
                                              (0, o.jsx)('img', {
                                                  src: N,
                                                  alt: 'sparkles'
                                              }),
                                              (0, o.jsx)('div', {
                                                  className: j.uploadIconInnerContainer,
                                                  children: (0, o.jsx)(r.FmF, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: j.uploadIcon
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)('div', {
                                          className: j.uploadInfo,
                                          children: h.intl.string(h.t['mz++Qk'])
                                      }),
                                      (0, o.jsx)(v.Z, {
                                          size: d.zx.Sizes.SMALL,
                                          buttonCTA: h.intl.string(h.t.sdCQY2),
                                          onChange: (e) => {
                                              (B(!1), n(e), x());
                                          },
                                          onFileSizeError: () => {
                                              B(!0);
                                          },
                                          maxFileSizeBytes: 256000,
                                          filters: E
                                      }),
                                      S
                                          ? (0, o.jsx)(r.Text, {
                                                className: j.uploadError,
                                                color: 'text-danger',
                                                variant: 'text-sm/normal',
                                                children: h.intl.string(h.t.HFyKsb)
                                            })
                                          : null
                                  ]
                              })
                          })
                        : null,
                    'tab-id-role-icon-emoji' === _
                        ? (0, o.jsx)(u.Z, {
                              hasTabWrapper: !0,
                              closePopout: () => x(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: a } = e;
                                  if ((null == a ? void 0 : a.id) != null) (null == a ? void 0 : a.type) === p.B.GUILD && n(await I(a));
                                  else if ((null == a ? void 0 : a.surrogates) != null) {
                                      var o, t;
                                      l(null != (t = null == (o = a.defaultDiversityChild) ? void 0 : o.surrogates) ? t : a.surrogates);
                                  }
                                  x();
                              },
                              pickerIntention: f.Hz.COMMUNITY_CONTENT,
                              channel: z
                          })
                        : null
                ]
            })
        })
    );
};
