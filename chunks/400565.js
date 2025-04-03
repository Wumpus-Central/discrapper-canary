n.d(t, { U: () => u });
var r = n(200651),
    i = n(192379),
    a = n(686546),
    l = n(598077),
    o = n(865112),
    s = n(926487);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: s.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, r.jsx)('img', {
                      className: s.maskIcon,
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
                src: o.VH[(0, o.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof l.Z ? t.other_user : new l.Z(t.other_user);
            (n = (0, r.jsx)('img', {
                alt: '',
                className: s.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (i = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, r.jsx)('img', {
                          alt: '',
                          className: s.image,
                          src: t.icon_url
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: o.VH[(0, o.q7)(t)]
                      });
        let u = (0, o.Vi)(t.type);
        return (0, r.jsxs)('div', {
            className: s.container,
            children: [
                (0, r.jsx)(a.ZP, {
                    mask: null == u ? a.QS.AVATAR_DEFAULT : a.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: s.mask,
                    children: (0, r.jsx)('div', {
                        className: s.imageContainer,
                        style: i ? void 0 : { backgroundColor: (0, o.Vu)(t) },
                        children: n
                    })
                }),
                (0, r.jsx)(c, { mask: u })
            ]
        });
    });
