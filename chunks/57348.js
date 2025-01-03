i.d(t, {
    Z: function () {
        return x;
    }
});
var n = i(200651);
i(192379);
var r = i(120356),
    a = i.n(r),
    o = i(912370),
    l = i(481060),
    c = i(626135),
    s = i(463571),
    d = i(34674),
    u = i(218864),
    h = i(950854),
    _ = i(132871),
    p = i(147890),
    m = i(57716),
    f = i(981631),
    g = i(867187);
function x(e) {
    let {
            collection: t,
            collection: { id: i, title: r, application_directory_collection_items: x }
        } = e,
        C = (0, m.Z)({ collection: t }),
        b = (0, _.useApplicationDirectoryHistory)((e) => e.guildId);
    return (0, n.jsxs)('div', {
        ref: C,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-lg/semibold',
                className: g.header,
                children: r
            }),
            (0, n.jsx)('div', {
                className: g.list,
                children: x.map((e) => {
                    let { id: t, type: r, application: _, image_hash: m, title: x, description: C, call_to_action_label: I, call_to_action_url: v } = e;
                    if (null == m) return;
                    let N = (0, d.$_)({
                        itemId: t,
                        hash: m
                    });
                    return r === o.C.APPLICATION && null != _
                        ? (0, n.jsx)(
                              s.Z,
                              {
                                  href: f.Z5c.APPLICATION_DIRECTORY_PROFILE(_.id),
                                  className: g.item,
                                  children: (0, n.jsx)(u.Z, {
                                      imageSrc: N,
                                      application: _,
                                      onClick: (e) => {
                                          let { mutualGuilds: t } = e;
                                          c.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                              collection_id: i,
                                              application_id: _.id,
                                              guild_id: b,
                                              shown_mutual_guilds_count: t.length
                                          }),
                                              (0, p.goToApplication)({ applicationId: _.id });
                                      },
                                      animatesOnHover: !0
                                  })
                              },
                              t
                          )
                        : r === o.C.LINK && null != x
                          ? (0, n.jsxs)(
                                h.Z,
                                {
                                    className: a()(g.item, g.linkCard),
                                    imageSrc: N,
                                    header: x,
                                    headerClassName: g.cardHeader,
                                    children: [
                                        (0, n.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            className: g.linkDescription,
                                            children: C
                                        }),
                                        (0, n.jsx)(l.Anchor, {
                                            onClick: () => {
                                                c.default.track(f.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: i,
                                                    link: v,
                                                    guild_id: b,
                                                    shown_mutual_guilds_count: void 0
                                                });
                                            },
                                            href: v,
                                            className: a()((0, l.getButtonStyle)(), g.linkCta),
                                            children: I
                                        })
                                    ]
                                },
                                t
                            )
                          : void 0;
                })
            })
        ]
    });
}
