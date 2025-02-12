n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(399606),
    o = n(481060),
    c = n(112724),
    d = n(430824),
    u = n(496675),
    h = n(768581),
    p = n(400251),
    m = n(75666),
    f = n(981631),
    g = n(388032),
    _ = n(817641),
    C = n(599191),
    x = n(584354),
    v = n(725060);
let E = (0, c.Z)((e) => {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: l, handleSearchKeyPress: a, width: s } = e,
        c = null != s && s <= 800;
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: C.headerImage,
                src: c ? v : x
            }),
            (0, i.jsx)('div', {
                className: C.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                    className: r()(C.headerContent, { [C.headerContentSmall]: c }),
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: C.searchTitle,
                            children: g.intl.string(g.t.IT7qoK)
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: C.searchSubtitle,
                            children: g.intl.string(g.t['5PoYtr'])
                        }),
                        (0, i.jsx)(o.Rj2, {
                            searchTerm: t,
                            className: C.searchBox,
                            inputClassName: C.searchBoxInput,
                            closeIconClassName: C.closeIcon,
                            searchIconClassName: C.searchIcon,
                            label: g.intl.string(g.t.nL2wKC),
                            placeholder: g.intl.string(g.t.nL2wKC),
                            onChange: n,
                            onClear: l,
                            onKeyPress: a,
                            cta: null != t && t.length > 0 ? g.intl.string(g.t['CU+6oK']) : null
                        })
                    ]
                })
            })
        ]
    });
});
function I(e) {
    let { guild: t, directoryEntries: n, handleCreateOrAddGuild: l, isLoading: a } = e,
        c = (0, s.e7)([u.Z], () => u.Z.can(f.Plq.ADMINISTRATOR, t)),
        d = [];
    null != n &&
        n.forEach((e) => {
            d = d.concat(e.entries);
        }),
        d.sort((e, t) => {
            var n, i;
            return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (i = e.approximateMemberCount) && void 0 !== i ? i : 0);
        });
    let m = h.ZP.getGuildSplashURL({
        id: t.id,
        splash: t.splash
    });
    return (0, i.jsx)('div', {
        className: _.pageContainer,
        children: (0, i.jsxs)(o.yWw, {
            className: _.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: C.header,
                    children: [
                        null != m
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  className: r()(C.headerImage, C.headerImageSimple),
                                  src: m
                              })
                            : null,
                        (0, i.jsx)('div', { className: C.headerImageBG }),
                        (0, i.jsx)('div', {
                            className: C.headerContentWrapper,
                            children: (0, i.jsx)('div', {
                                className: r()(C.headerContent, C.headerContentSmall),
                                children: (0, i.jsx)(o.X6q, {
                                    variant: 'heading-xl/semibold',
                                    color: 'always-white',
                                    children: g.intl.format(g.t.WphZ6e, { categoryName: 'Midjourney' })
                                })
                            })
                        })
                    ]
                }),
                a && null == n
                    ? (0, i.jsx)(o.$jN, { className: _.spinner })
                    : (0, i.jsxs)('div', {
                          className: _.cardsContainer,
                          children: [d.map((e) => (0, i.jsx)(p.Z, { entry: e }, e.guildId)), c && null != l ? (0, i.jsx)(p.m, { onClick: l }) : null]
                      })
            ]
        })
    });
}
let b = (e) => {
    let { channel: t, directoryEntries: n, handleCreateOrAddGuild: a, searchQuery: r, setSearchQuery: c, handleClearSearch: u, handleSearchKeyPress: h, currentCategoryId: x, handleSelectCategory: v, categoryCounts: b, allEntriesCount: Z, isLoading: N } = e,
        T = (0, s.e7)([d.Z], () => d.Z.getGuild(t.getGuildId()));
    return null != T && T.hasFeature(f.oNc.SHARD)
        ? (0, i.jsx)(I, {
              guild: T,
              directoryEntries: n,
              handleCreateOrAddGuild: a,
              isLoading: N
          })
        : (0, i.jsx)('div', {
              className: _.pageContainer,
              children: (0, i.jsxs)(o.yWw, {
                  className: _.scroller,
                  children: [
                      (0, i.jsx)(E, {
                          searchQuery: r,
                          setSearchQuery: c,
                          handleClearSearch: u,
                          handleSearchKeyPress: h
                      }),
                      (0, i.jsx)(o.h21, {
                          orientation: 'horizontal',
                          children: (0, i.jsxs)(o.njP, {
                              className: C.tabBar,
                              type: 'top',
                              look: 'brand',
                              selectedItem: x,
                              onItemSelect: (e) => {
                                  v(e);
                              },
                              children: [
                                  (0, i.jsx)(
                                      o.njP.Item,
                                      {
                                          className: C.tabBarItem,
                                          id: m.AR.ALL,
                                          children: ''.concat(g.intl.string(g.t.hEAa2d), ' (').concat(Z, ')')
                                      },
                                      m.AR.ALL
                                  ),
                                  (0, m.b7)(t.id).map((e) => {
                                      let { value: t, label: n } = e;
                                      return (0, i.jsx)(
                                          o.njP.Item,
                                          {
                                              className: C.tabBarItem,
                                              id: t,
                                              children: ''.concat(n, ' ').concat(null != b[t] ? '('.concat(b[t], ')') : '')
                                          },
                                          t
                                      );
                                  })
                              ]
                          })
                      }),
                      N && null == n
                          ? (0, i.jsx)(o.$jN, { className: _.spinner })
                          : null == n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, i.jsxs)(
                                      l.Fragment,
                                      {
                                          children: [
                                              void 0 !== e.header
                                                  ? (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/semibold',
                                                        className: C.sectionHeader,
                                                        children: e.header
                                                    })
                                                  : null,
                                              (0, i.jsxs)('div', {
                                                  className: _.cardsContainer,
                                                  children: [e.entries.map((e) => (0, i.jsx)(p.Z, { entry: e }, e.guildId)), e.appendEndCard && null != a ? (0, i.jsx)(p.m, { onClick: a }) : null]
                                              })
                                          ]
                                      },
                                      t
                                  )
                              )
                  ]
              })
          });
};
