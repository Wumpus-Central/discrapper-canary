n.d(t, { U: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(686546),
    a = n(598077),
    s = n(430824),
    c = n(865112),
    u = n(121099);
let d = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: u.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, r.jsx)("img", {
                      className: u.maskIcon,
                      alt: "",
                      src: t.icon,
                  }),
              });
    },
    p = i.memo(function (e) {
        var t, n;
        let { item: i } = e,
            p = null,
            h = !1,
            f = (0, l.e7)([s.Z], () => s.Z.getGuild(i.guild_id));
        if (null != i.icon_name)
            p = (0, r.jsx)("img", {
                alt: "",
                src: c.VH[(0, c.RB)(i.icon_name)],
            });
        else if (null != i.other_user) {
            let e = i.other_user instanceof a.Z ? i.other_user : new a.Z(i.other_user),
                n = null != (t = e.globalName) ? t : e.username;
            (p = (0, r.jsx)("img", {
                alt: n,
                className: u.image,
                src: e.getAvatarURL(void 0, 40),
            })),
                (h = !0);
        } else
            p =
                null != i.icon_url
                    ? (0, r.jsx)("img", {
                          alt: null != (n = null == f ? void 0 : f.name) ? n : "",
                          className: u.image,
                          src: i.icon_url,
                      })
                    : (0, r.jsx)("img", {
                          alt: "",
                          src: c.VH[(0, c.q7)(i)],
                      });
        let g = (0, c.Vi)(i.type);
        return (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsx)(o.ZP, {
                    mask: null == g ? o.QS.AVATAR_DEFAULT : o.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: u.mask,
                    children: (0, r.jsx)("div", {
                        className: u.imageContainer,
                        style: h ? void 0 : { backgroundColor: (0, c.Vu)(i) },
                        children: p,
                    }),
                }),
                (0, r.jsx)(d, { mask: g }),
            ],
        });
    });
