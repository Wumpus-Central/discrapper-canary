n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(653041),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(780384),
    s = n(481060),
    c = n(794295),
    d = n(410030),
    u = n(726542),
    p = n(626135),
    m = n(463571),
    _ = n(887706),
    f = n(214912),
    g = n(290247),
    h = n(981631),
    I = n(388032),
    b = n(755257);
let v = (0, I.getAvailableLocales)();
function x(e) {
    var t, n, a;
    let { onClick: r, url: o, children: c } = e,
        p = (0, d.ZP)(),
        m = u.Z.getByUrl(o),
        _ = (0, l.wj)(p) ? (null == m ? void 0 : null === (t = m.icon) || void 0 === t ? void 0 : t.darkSVG) : null == m ? void 0 : null === (n = m.icon) || void 0 === n ? void 0 : n.lightSVG;
    return (0, i.jsx)(C, {
        icon: void 0 === _ ? s.LinkIcon : void 0,
        imageSrc: _,
        onClick: r,
        url: o,
        type: null !== (a = null == m ? void 0 : m.name) && void 0 !== a ? a : 'website',
        children: c
    });
}
function C(e) {
    let { icon: t, imageSrc: n, iconColor: a, url: r, type: l, children: d, onClick: u } = e,
        p = (0, _.Z)(),
        m = null;
    null != t
        ? (m = (0, i.jsx)(t, {
              className: b.listIcon,
              color: null != a ? a : 'currentColor',
              width: 20,
              height: 20,
              size: 'custom'
          }))
        : null != n &&
          (m = (0, i.jsx)('img', {
              className: b.listImage,
              src: n,
              alt: ''
          }));
    let f = (0, i.jsxs)(i.Fragment, {
        children: [
            m,
            (0, i.jsx)(s.Text, {
                className: b.listText,
                variant: 'text-md/normal',
                selectable: !0,
                children: d
            })
        ]
    });
    return (0, i.jsx)(c.Z, {
        href: r,
        className: o()(b.listItem, b.linkItem),
        onClick: () => (u(r, l), !1),
        trusted: !p,
        useDefaultUnderlineStyles: !1,
        children: f
    });
}
function S(e) {
    var t, n, r;
    let { application: l, guildId: c, className: d, onViewCategory: u, onClickGuildWidget: _ } = e,
        [S, N] = a.useState(null),
        T = [],
        y = null !== (n = null == l ? void 0 : null === (t = l.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== n ? n : [];
    a.useEffect(() => {
        var e;
        if ((null === (e = l.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
            let e = new Set(l.directory_entry.supported_locales);
            N(v.filter((t) => e.has(t.value)).map((e) => I.intl.string(e.localizedName)));
        }
    }, [l.directory_entry]);
    let j = (e, t) => {
        p.default.track(h.rMx.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
            application_id: l.id,
            guild_id: c,
            type: t,
            url: e
        });
    };
    return (
        null != l.categories &&
            l.categories.length > 0 &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: b.sectionHeader,
                            variant: 'eyebrow',
                            children: I.intl.string(I.t.s7ialZ)
                        }),
                        (0, i.jsx)('div', {
                            className: b.categories,
                            children: (null !== (r = l.categories) && void 0 !== r ? r : []).map((e) => {
                                let t = new URLSearchParams();
                                return (
                                    t.set('category_id', e.id.toString()),
                                    (0, i.jsx)(
                                        m.Z,
                                        {
                                            href: ''.concat(h.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(t),
                                            children: (0, i.jsx)(s.Clickable, {
                                                className: b.category,
                                                onClick: () => u(e),
                                                children: (0, i.jsx)(s.Text, {
                                                    variant: 'text-sm/normal',
                                                    color: 'header-primary',
                                                    children: e.name
                                                })
                                            })
                                        },
                                        e.id
                                    )
                                );
                            })
                        })
                    ]
                })
            ),
        null != S &&
            S.length > 0 &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: b.sectionHeader,
                            variant: 'eyebrow',
                            children: I.intl.string(I.t.Fbjlu7)
                        }),
                        (0, i.jsx)(g.Z, { supportedLanguages: S })
                    ]
                })
            ),
        (null != l.terms_of_service_url || null != l.privacy_policy_url || y.length > 0) &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: b.sectionHeader,
                            variant: 'eyebrow',
                            children: I.intl.string(I.t.l6DP2t)
                        }),
                        y.map((e, t) =>
                            (0, i.jsx)(
                                x,
                                {
                                    url: e.url,
                                    onClick: j,
                                    children: e.name
                                },
                                t
                            )
                        ),
                        null != l.terms_of_service_url
                            ? (0, i.jsx)(C, {
                                  icon: s.FileIcon,
                                  onClick: j,
                                  url: l.terms_of_service_url,
                                  type: 'tos',
                                  children: I.intl.string(I.t.s7STcX)
                              })
                            : null,
                        null != l.privacy_policy_url
                            ? (0, i.jsx)(C, {
                                  icon: s.LockIcon,
                                  onClick: j,
                                  url: l.privacy_policy_url,
                                  type: 'policy',
                                  children: I.intl.string(I.t.kH3JR0)
                              })
                            : null
                    ]
                })
            ),
        null != l.guild &&
            l.guild.features.includes(h.oNc.DISCOVERABLE) &&
            T.push(
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: b.sectionHeader,
                            variant: 'eyebrow',
                            children: I.intl.string(I.t.KJEO29)
                        }),
                        (0, i.jsx)(f.Z, {
                            guild: l.guild,
                            onClick: _
                        })
                    ]
                })
            ),
        (0, i.jsx)('div', {
            className: o()(b.sidebar, d),
            children:
                T.length > 0
                    ? (0, i.jsx)(i.Fragment, {
                          children: T.map((e, t) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: b.section,
                                      children: e
                                  },
                                  t
                              )
                          )
                      })
                    : null
        })
    );
}
