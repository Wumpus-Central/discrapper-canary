n.d(a, { default: () => k }), n(388685);
var o = n(200651),
    t = n(192379),
    i = n(120356),
    l = n.n(i),
    d = n(481060),
    r = n(211266),
    s = n(313201),
    c = n(907040),
    u = n(906411),
    p = n(345861),
    v = n(984933),
    m = n(768581),
    x = n(956664),
    b = n(185923),
    f = n(388032),
    h = n(853967),
    j = n(84717);
function N() {
    return [
        {
            name: f.intl.string(f.t.Sp2NFx),
            extensions: ['jpg', 'jpeg', 'png']
        }
    ];
}
async function I(e) {
    let a = (0, m.gT)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0
        }),
        n = await fetch(a),
        o = await n.blob();
    return await (0, x.fD)(o);
}
let k = function (e) {
    let { guildId: a, onUploadIcon: n, onSelectUnicodeEmoji: i, onClose: m, transitionState: x } = e,
        k = (0, s.Dt)(),
        C = v.ZP.getDefaultChannel(a),
        [g, z] = t.useState('tab-id-role-icon-file-upload'),
        [_, S] = t.useState(!1),
        B = (0, r.Z)(N);
    return (
        t.useEffect(() => {
            S(!1);
        }, [g]),
        (0, o.jsx)(d.Y0X, {
            transitionState: x,
            'aria-labelledby': k,
            size: d.CgR.MEDIUM,
            className: h.modalRoot,
            children: (0, o.jsxs)('div', {
                className: h.contentWrapper,
                children: [
                    (0, o.jsx)('nav', {
                        className: l()(h.nav, { [h.navUploadSelected]: 'tab-id-role-icon-file-upload' === g }),
                        children: (0, o.jsxs)('div', {
                            className: h.navList,
                            role: 'tablist',
                            'aria-label': 'Expression Picker',
                            children: [
                                (0, o.jsx)('div', {
                                    className: h.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-file-upload',
                                    'aria-selected': 'tab-id-role-icon-file-upload' === g,
                                    children: (0, o.jsx)(d.zxk, {
                                        onClick: () => {
                                            z('tab-id-role-icon-file-upload');
                                        },
                                        'aria-current': 'page',
                                        className: l()(h.navButton, { [h.navButtonActive]: 'tab-id-role-icon-file-upload' === g }),
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.NONE,
                                        children: f.intl.string(f.t.royWSE)
                                    })
                                }),
                                (0, o.jsx)('div', {
                                    className: h.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-emoji',
                                    'aria-selected': 'tab-id-role-icon-emoji' === g,
                                    children: (0, o.jsx)(d.zxk, {
                                        onClick: () => {
                                            z('tab-id-role-icon-emoji');
                                        },
                                        'aria-current': 'page',
                                        className: l()(h.navButton, { [h.navButtonActive]: 'tab-id-role-icon-emoji' === g }),
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.NONE,
                                        children: f.intl.string(f.t['/Ny2wc'])
                                    })
                                })
                            ]
                        })
                    }),
                    'tab-id-role-icon-file-upload' === g
                        ? (0, o.jsx)(d.hzk, {
                              children: (0, o.jsxs)('div', {
                                  className: h.uploadContainer,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: h.uploadIconOuterContainer,
                                          children: [
                                              (0, o.jsx)('img', {
                                                  src: j,
                                                  alt: 'sparkles'
                                              }),
                                              (0, o.jsx)('div', {
                                                  className: h.uploadIconInnerContainer,
                                                  children: (0, o.jsx)(d.FmF, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: h.uploadIcon
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)('div', {
                                          className: h.uploadInfo,
                                          children: f.intl.string(f.t['mz++Qk'])
                                      }),
                                      (0, o.jsx)(p.Z, {
                                          size: d.zxk.Sizes.SMALL,
                                          buttonCTA: f.intl.string(f.t.sdCQY2),
                                          onChange: (e) => {
                                              S(!1), n(e), m();
                                          },
                                          onFileSizeError: () => {
                                              S(!0);
                                          },
                                          maxFileSizeBytes: 256000,
                                          filters: B
                                      }),
                                      _
                                          ? (0, o.jsx)(d.Text, {
                                                className: h.uploadError,
                                                color: 'text-danger',
                                                variant: 'text-sm/normal',
                                                children: f.intl.string(f.t.HFyKsb)
                                            })
                                          : null
                                  ]
                              })
                          })
                        : null,
                    'tab-id-role-icon-emoji' === g
                        ? (0, o.jsx)(c.Z, {
                              hasTabWrapper: !0,
                              closePopout: () => m(),
                              onSelectEmoji: async (e) => {
                                  if ((null == e ? void 0 : e.id) != null) (null == e ? void 0 : e.type) === u.B.GUILD && n(await I(e));
                                  else if ((null == e ? void 0 : e.surrogates) != null) {
                                      var a, o;
                                      i(null != (o = null == (a = e.defaultDiversityChild) ? void 0 : a.surrogates) ? o : e.surrogates);
                                  }
                                  m();
                              },
                              pickerIntention: b.Hz.COMMUNITY_CONTENT,
                              channel: C
                          })
                        : null
                ]
            })
        })
    );
};
