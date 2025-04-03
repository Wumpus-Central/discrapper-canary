n.d(a, { default: () => k }), n(47120);
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
    N = n(185923),
    b = n(388032),
    f = n(853967),
    h = n(84717);
function j() {
    return [
        {
            name: b.NW.string(b.t.Sp2NFx),
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
        B = (0, r.Z)(j);
    return (
        t.useEffect(() => {
            S(!1);
        }, [g]),
        (0, o.jsx)(d.Y0X, {
            transitionState: x,
            'aria-labelledby': k,
            size: d.CgR.MEDIUM,
            className: f.modalRoot,
            children: (0, o.jsxs)('div', {
                className: f.contentWrapper,
                children: [
                    (0, o.jsx)('nav', {
                        className: l()(f.nav, { [f.navUploadSelected]: 'tab-id-role-icon-file-upload' === g }),
                        children: (0, o.jsxs)('div', {
                            className: f.navList,
                            role: 'tablist',
                            'aria-label': 'Expression Picker',
                            children: [
                                (0, o.jsx)('div', {
                                    className: f.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-file-upload',
                                    'aria-selected': 'tab-id-role-icon-file-upload' === g,
                                    children: (0, o.jsx)(d.zxk, {
                                        onClick: () => {
                                            z('tab-id-role-icon-file-upload');
                                        },
                                        'aria-current': 'page',
                                        className: l()(f.navButton, { [f.navButtonActive]: 'tab-id-role-icon-file-upload' === g }),
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.NONE,
                                        children: b.NW.string(b.t.royWSE)
                                    })
                                }),
                                (0, o.jsx)('div', {
                                    className: f.navItem,
                                    role: 'tab',
                                    'aria-controls': 'tab-id-role-icon-emoji',
                                    'aria-selected': 'tab-id-role-icon-emoji' === g,
                                    children: (0, o.jsx)(d.zxk, {
                                        onClick: () => {
                                            z('tab-id-role-icon-emoji');
                                        },
                                        'aria-current': 'page',
                                        className: l()(f.navButton, { [f.navButtonActive]: 'tab-id-role-icon-emoji' === g }),
                                        look: d.zxk.Looks.BLANK,
                                        size: d.zxk.Sizes.NONE,
                                        children: b.NW.string(b.t['/Ny2wc'])
                                    })
                                })
                            ]
                        })
                    }),
                    'tab-id-role-icon-file-upload' === g
                        ? (0, o.jsx)(d.hzk, {
                              children: (0, o.jsxs)('div', {
                                  className: f.uploadContainer,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: f.uploadIconOuterContainer,
                                          children: [
                                              (0, o.jsx)('img', {
                                                  src: h,
                                                  alt: 'sparkles'
                                              }),
                                              (0, o.jsx)('div', {
                                                  className: f.uploadIconInnerContainer,
                                                  children: (0, o.jsx)(d.FmF, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: f.uploadIcon
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)('div', {
                                          className: f.uploadInfo,
                                          children: b.NW.string(b.t['mz++Qk'])
                                      }),
                                      (0, o.jsx)(p.Z, {
                                          size: d.zxk.Sizes.SMALL,
                                          buttonCTA: b.NW.string(b.t.sdCQY2),
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
                                                className: f.uploadError,
                                                color: 'text-danger',
                                                variant: 'text-sm/normal',
                                                children: b.NW.string(b.t.HFyKsb)
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
                              pickerIntention: N.Hz.COMMUNITY_CONTENT,
                              channel: C
                          })
                        : null
                ]
            })
        })
    );
};
