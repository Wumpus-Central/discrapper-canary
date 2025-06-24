n.d(t, { U: () => u });
var r = n(255367),
    i = n(73800),
    l = n(686546),
    o = n(598077),
    s = n(865112),
    a = n(926487);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: a.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, r.jsx)('img', {
                      className: a.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    u = i.memo(function (e) {
        let { item: t } = e,
            n = null,
            i = !1;
        if (null != t.icon_name)
            n = (0, r.jsx)('img', {
                alt: '',
                src: s.VH[(0, s.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof o.Z ? t.other_user : new o.Z(t.other_user);
            (n = (0, r.jsx)('img', {
                alt: '',
                className: a.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (i = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, r.jsx)('img', {
                          alt: '',
                          className: a.image,
                          src: t.icon_url
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: s.VH[(0, s.q7)(t)]
                      });
        let u = (0, s.Vi)(t.type);
        return (0, r.jsxs)('div', {
            className: a.container,
            children: [
                (0, r.jsx)(l.ZP, {
                    mask: null == u ? l.QS.AVATAR_DEFAULT : l.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: a.mask,
                    children: (0, r.jsx)('div', {
                        className: a.imageContainer,
                        style: i ? void 0 : { backgroundColor: (0, s.Vu)(t) },
                        children: n
                    })
                }),
                (0, r.jsx)(c, { mask: u })
            ]
        });
    });
