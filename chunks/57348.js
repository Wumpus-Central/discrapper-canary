i.d(t, {
    Z: function () {
        return x;
    }
});
var n = i(200651);
i(192379);
var a = i(120356),
    r = i.n(a),
    o = i(912370),
    l = i(481060),
    c = i(626135),
    s = i(463571),
    d = i(34674),
    u = i(218864),
    _ = i(950854),
    p = i(132871),
    h = i(147890),
    m = i(57716),
    f = i(981631),
    g = i(867187);
function x(e) {
    let {
            collection: t,
            collection: { id: i, title: a, application_directory_collection_items: x }
        } = e,
        C = (0, m.Z)({ collection: t }),
        b = (0, p.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        ref: C,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                className: g.header,
                children: a
            }),
            (0, n.jsx)('div', {
                className: g.list,
                children: x.map((e) => {
                    if (null == e.image_hash) return;
                    let t = (0, d.$_)({
                        itemId: e.id,
                        hash: e.image_hash
                    });
                    return e.type === o.C.APPLICATION && null != e.application
                        ? (0, n.jsx)(
                              s.Z,
                              {
                                  href: f.Z5c.APPLICATION_DIRECTORY_PROFILE(e.application.id),
                                  className: g.item,
                                  children: (0, n.jsx)(u.Z, {
                                      imageSrc: t,
                                      application: e.application,
                                      onClick: (t) => {
                                          let { mutualGuilds: n } = t;
                                          c.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                              collection_id: i,
                                              application_id: e.application.id,
                                              guild_id: b,
                                              shown_mutual_guilds_count: n.length
                                          }),
                                              (0, h.goToApplication)({ applicationId: e.application.id });
                                      },
                                      animatesOnHover: !0
                                  })
                              },
                              e.id
                          )
                        : e.type === o.C.LINK && null != a
                          ? (0, n.jsxs)(
                                _.Z,
                                {
                                    className: r()(g.item, g.linkCard),
                                    imageSrc: t,
                                    header: a,
                                    headerClassName: g.cardHeader,
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: g.linkDescription,
                                            children: e.description
                                        }),
                                        (0, n.jsx)(l.Anchor, {
                                            onClick: () => {
                                                c.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: i,
                                                    link: e.call_to_action_url,
                                                    guild_id: b,
                                                    shown_mutual_guilds_count: void 0
                                                });
                                            },
                                            href: e.call_to_action_url,
                                            className: r()((0, l.getButtonStyle)(), g.linkCta),
                                            children: e.call_to_action_label
                                        })
                                    ]
                                },
                                e.id
                            )
                          : void 0;
                })
            })
        ]
    });
}
