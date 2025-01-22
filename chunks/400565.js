n.d(t, {
    U: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(686546),
    a = n(598077),
    o = n(865112),
    s = n(944133);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: s.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)('img', {
                      className: s.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    u = r.memo(function (e) {
        let { item: t } = e,
            n = null,
            r = !1;
        if (null != t.icon_name)
            n = (0, i.jsx)('img', {
                alt: '',
                src: o.VH[(0, o.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof a.Z ? t.other_user : new a.Z(t.other_user);
            (n = (0, i.jsx)('img', {
                alt: '',
                className: s.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (r = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: s.image,
                          src: t.icon_url
                      })
                    : (0, i.jsx)('img', {
                          alt: '',
                          src: o.VH[(0, o.q7)(t)]
                      });
        let u = (0, o.Vi)(t.type);
        return (0, i.jsxs)('div', {
            className: s.container,
            children: [
                (0, i.jsx)(l.ZP, {
                    mask: null == u ? l.QS.AVATAR_DEFAULT : l.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: s.mask,
                    children: (0, i.jsx)('div', {
                        className: s.imageContainer,
                        style: r ? void 0 : { backgroundColor: (0, o.Vu)(t) },
                        children: n
                    })
                }),
                (0, i.jsx)(c, { mask: u })
            ]
        });
    });
