i.d(t, {
    Z: function () {
        return v;
    }
}),
    i(47120);
var n = i(200651),
    r = i(192379),
    a = i(120356),
    o = i.n(a),
    l = i(912370),
    c = i(477690),
    s = i(481060),
    d = i(453499),
    u = i(626135),
    h = i(463571),
    _ = i(34674),
    p = i(132871),
    m = i(147890),
    f = i(409425),
    g = i(57716),
    x = i(981631),
    C = i(388032),
    b = i(885391);
function I(e) {
    let { collectionTitle: t, title: i, description: r, handleClick: a, imageSrc: l, ctaLabel: c, ctaLink: d, applicationId: u } = e,
        _ = '936929561302675456' === u,
        p =
            null == u
                ? (0, n.jsx)(s.Button, {
                      className: b.applicationCta,
                      onClick: a,
                      children: c
                  })
                : (0, n.jsx)(h.Z, {
                      href: x.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
                      children: (0, n.jsx)(s.Button, {
                          className: b.applicationCta,
                          onClick: a,
                          children: c
                      })
                  });
    return (0, n.jsxs)('div', {
        className: b.card,
        children: [
            (0, n.jsx)('div', {
                className: b.textContainer,
                children: (0, n.jsxs)('div', {
                    className: b.verticallyCenter,
                    children: [
                        (0, n.jsx)(s.Text, {
                            className: b.collectionTitle,
                            tag: 'span',
                            color: 'header-secondary',
                            variant: 'heading-deprecated-12/semibold',
                            children: t
                        }),
                        (0, n.jsxs)(s.Heading, {
                            className: b.applicationName,
                            variant: 'heading-xxl/medium',
                            children: [i, ' ', _ && (0, n.jsx)(f.Z, {})]
                        }),
                        (0, n.jsx)(s.Text, {
                            className: b.applicationDescription,
                            variant: 'text-md/normal',
                            lineClamp: 3,
                            children: r
                        }),
                        null == d
                            ? p
                            : (0, n.jsx)(s.Anchor, {
                                  onClick: a,
                                  href: d,
                                  className: o()((0, s.getButtonStyle)({ grow: !1 }), b.applicationCta),
                                  children: c
                              })
                    ]
                })
            }),
            (0, n.jsx)('div', {
                className: b.imageContainer,
                children: (0, n.jsx)('img', {
                    alt: i,
                    className: b.image,
                    src: l
                })
            })
        ]
    });
}
function v(e) {
    let {
            collection: t,
            collection: { id: i, title: a, application_directory_collection_items: s }
        } = e,
        h = (0, g.Z)({ collection: t }),
        [f, v] = r.useState(),
        N = (0, p.useApplicationDirectoryHistory)((e) => e.guildId);
    return (
        r.useEffect(() => {
            let e = null == h ? void 0 : h.current;
            if (null == e) return;
            let t = new ResizeObserver(() => {
                let t = document.body.offsetWidth < parseFloat(c.Z.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(c.Z.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(c.Z.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
                v(e.offsetWidth / t);
            });
            return (
                t.observe(document.body),
                () => {
                    t.disconnect();
                }
            );
        }, [h]),
        (0, n.jsx)('article', {
            ref: h,
            className: o()({ [b.collectionBottomMargin]: s.length <= 1 }),
            children: (0, n.jsx)(d.Z, {
                aspectRatio: f,
                themedPagination: !0,
                paginationClassName: b.paginationControls,
                paginationArrowClassName: b.paginationArrow,
                items: s,
                onChangeItem: (e, t, n) => {
                    let { application: r } = e;
                    null != r &&
                        u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                            collection_id: i,
                            offset: n,
                            results: [r.id],
                            guild_id: N
                        });
                },
                renderItem: (e) => {
                    let { id: t, image_hash: r, application: o, type: c, description: s, title: d, call_to_action_label: h, call_to_action_url: p } = e;
                    if (null == r) return;
                    let f = (0, _.$_)({
                        itemId: t,
                        hash: r
                    });
                    if (c === l.C.APPLICATION && null != o) {
                        var g, b;
                        return (0, n.jsx)(I, {
                            collectionTitle: a,
                            title: o.name,
                            description: null !== (b = null === (g = o.directory_entry) || void 0 === g ? void 0 : g.short_description) && void 0 !== b ? b : o.description,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    application_id: o.id,
                                    guild_id: N,
                                    shown_mutual_guilds_count: void 0
                                }),
                                    (0, m.goToApplication)({ applicationId: o.id });
                            },
                            imageSrc: f,
                            ctaLabel: C.intl.string(C.t.xKUoVl),
                            applicationId: o.id
                        });
                    }
                    if (c === l.C.LINK && null != d && null != p && null != h)
                        return (0, n.jsx)(I, {
                            collectionTitle: a,
                            title: d,
                            description: s,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    link: p,
                                    guild_id: N,
                                    shown_mutual_guilds_count: void 0
                                });
                            },
                            imageSrc: f,
                            ctaLabel: h,
                            ctaLink: p
                        });
                }
            })
        })
    );
}
