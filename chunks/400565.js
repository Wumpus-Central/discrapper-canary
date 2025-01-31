n.d(t, { U: () => d });
var i = n(200651),
    l = n(192379),
    a = n(686546),
    r = n(598077),
    s = n(865112),
    o = n(944133);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: o.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)('img', {
                      className: o.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    d = l.memo(function (e) {
        let { item: t } = e,
            n = null,
            l = !1;
        if (null != t.icon_name)
            n = (0, i.jsx)('img', {
                alt: '',
                src: s.VH[(0, s.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof r.Z ? t.other_user : new r.Z(t.other_user);
            (n = (0, i.jsx)('img', {
                alt: '',
                className: o.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (l = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: o.image,
                          src: t.icon_url
                      })
                    : (0, i.jsx)('img', {
                          alt: '',
                          src: s.VH[(0, s.q7)(t)]
                      });
        let d = (0, s.Vi)(t.type);
        return (0, i.jsxs)('div', {
            className: o.container,
            children: [
                (0, i.jsx)(a.ZP, {
                    mask: null == d ? a.QS.AVATAR_DEFAULT : a.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: o.mask,
                    children: (0, i.jsx)('div', {
                        className: o.imageContainer,
                        style: l ? void 0 : { backgroundColor: (0, s.Vu)(t) },
                        children: n
                    })
                }),
                (0, i.jsx)(c, { mask: d })
            ]
        });
    });
