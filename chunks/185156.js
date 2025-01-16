i.d(t, {
    Z: function () {
        return v;
    }
}),
    i(47120);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(912370),
    c = i(477690),
    s = i(481060),
    d = i(453499),
    u = i(626135),
    _ = i(463571),
    p = i(34674),
    h = i(132871),
    m = i(147890),
    f = i(409425),
    g = i(57716),
    x = i(981631),
    C = i(388032),
    b = i(885391);
function I(e) {
    let { collectionTitle: t, title: i, description: a, handleClick: r, imageSrc: l, ctaLabel: c, ctaLink: d, applicationId: u } = e,
        p = '936929561302675456' === u,
        h =
            null == u
                ? (0, n.jsx)(s.Button, {
                      className: b.applicationCta,
                      onClick: r,
                      children: c
                  })
                : (0, n.jsx)(_.Z, {
                      href: x.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
                      children: (0, n.jsx)(s.Button, {
                          className: b.applicationCta,
                          onClick: r,
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
                            children: [i, ' ', p && (0, n.jsx)(f.Z, {})]
                        }),
                        (0, n.jsx)(s.Text, {
                            className: b.applicationDescription,
                            variant: 'text-md/normal',
                            lineClamp: 3,
                            children: a
                        }),
                        null == d
                            ? h
                            : (0, n.jsx)(s.Anchor, {
                                  onClick: r,
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
            collection: { id: i, title: r, application_directory_collection_items: s }
        } = e,
        _ = (0, g.Z)({ collection: t }),
        [f, v] = a.useState(),
        A = (0, h.useApplicationDirectoryHistory)((e) => e.guildId);
    return (
        a.useEffect(() => {
            let e = null == _ ? void 0 : _.current;
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
        }, [_]),
        (0, n.jsx)('article', {
            ref: _,
            className: o()({ [b.collectionBottomMargin]: s.length <= 1 }),
            children: (0, n.jsx)(d.Z, {
                aspectRatio: f,
                themedPagination: !0,
                paginationClassName: b.paginationControls,
                paginationArrowClassName: b.paginationArrow,
                items: s,
                onChangeItem: (e, t, n) => {
                    if (e.type === l.C.APPLICATION && null != e.application)
                        u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                            collection_id: i,
                            offset: n,
                            results: [e.application.id],
                            guild_id: A
                        });
                },
                renderItem: (e) => {
                    if (null == e.image_hash) return;
                    let t = (0, p.$_)({
                        itemId: e.id,
                        hash: e.image_hash
                    });
                    if (e.type === l.C.APPLICATION && null != e.application) {
                        var a, o;
                        return (0, n.jsx)(I, {
                            collectionTitle: r,
                            title: e.application.name,
                            description: null !== (o = null === (a = e.application.directory_entry) || void 0 === a ? void 0 : a.short_description) && void 0 !== o ? o : e.application.description,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    application_id: e.application.id,
                                    guild_id: A,
                                    shown_mutual_guilds_count: void 0
                                }),
                                    (0, m.goToApplication)({ applicationId: e.application.id });
                            },
                            imageSrc: t,
                            ctaLabel: C.intl.string(C.t.xKUoVl),
                            applicationId: e.application.id
                        });
                    }
                    if (e.type === l.C.LINK && null != e.title && null != e.call_to_action_url && null != e.call_to_action_label)
                        return (0, n.jsx)(I, {
                            collectionTitle: r,
                            title: e.title,
                            description: e.description,
                            handleClick: () => {
                                u.default.track(x.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                    collection_id: i,
                                    link: e.call_to_action_url,
                                    guild_id: A,
                                    shown_mutual_guilds_count: void 0
                                });
                            },
                            imageSrc: t,
                            ctaLabel: e.call_to_action_label,
                            ctaLink: e.call_to_action_url
                        });
                }
            })
        })
    );
}
