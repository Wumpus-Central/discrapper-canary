n.d(t, { Z: () => j }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    c = n(393238),
    u = n(430824),
    d = n(496675),
    p = n(768581),
    h = n(400251),
    f = n(75666),
    m = n(981631),
    g = n(388032),
    b = n(400816),
    _ = n(104402),
    C = n(584354),
    y = n(725060);
let x = (e) => {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: i, handleSearchKeyPress: l } = e,
        { ref: a, width: u } = (0, c.Z)(),
        d = null != u && u <= 800;
    return (0, r.jsxs)('div', {
        ref: a,
        className: _.header,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: _.headerImage,
                src: d ? y : C
            }),
            (0, r.jsx)('div', {
                className: _.headerContentWrapper,
                children: (0, r.jsxs)('div', {
                    className: o()(_.headerContent, { [_.headerContentSmall]: d }),
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            className: _.searchTitle,
                            children: g.NW.string(g.t.IT7qoK)
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: _.searchSubtitle,
                            children: g.NW.string(g.t['5PoYtr'])
                        }),
                        (0, r.jsx)(s.Rj2, {
                            searchTerm: t,
                            className: _.searchBox,
                            inputClassName: _.searchBoxInput,
                            closeIconClassName: _.closeIcon,
                            searchIconClassName: _.searchIcon,
                            label: g.NW.string(g.t.nL2wKC),
                            placeholder: g.NW.string(g.t.nL2wKC),
                            onChange: n,
                            onClear: i,
                            onKeyPress: l,
                            cta: null != t && t.length > 0 ? g.NW.string(g.t['CU+6oK']) : null
                        })
                    ]
                })
            })
        ]
    });
};
function v(e) {
    let { guild: t, directoryEntries: n, handleCreateOrAddGuild: i, isLoading: l } = e,
        c = (0, a.e7)([d.Z], () => d.Z.can(m.Plq.ADMINISTRATOR, t)),
        u = [];
    null != n &&
        n.forEach((e) => {
            u = u.concat(e.entries);
        }),
        u.sort((e, t) => {
            var n, r;
            return (null != (n = t.approximateMemberCount) ? n : 0) - (null != (r = e.approximateMemberCount) ? r : 0);
        });
    let f = p.ZP.getGuildSplashURL({
        id: t.id,
        splash: t.splash
    });
    return (0, r.jsx)('div', {
        className: b.pageContainer,
        children: (0, r.jsxs)(s.yWw, {
            className: b.scroller,
            children: [
                (0, r.jsxs)('div', {
                    className: _.header,
                    children: [
                        null != f
                            ? (0, r.jsx)('img', {
                                  alt: '',
                                  className: o()(_.headerImage, _.headerImageSimple),
                                  src: f
                              })
                            : null,
                        (0, r.jsx)('div', { className: _.headerImageBG }),
                        (0, r.jsx)('div', {
                            className: _.headerContentWrapper,
                            children: (0, r.jsx)('div', {
                                className: o()(_.headerContent, _.headerContentSmall),
                                children: (0, r.jsx)(s.X6q, {
                                    variant: 'heading-xl/semibold',
                                    color: 'always-white',
                                    children: g.NW.format(g.t.WphZ6e, { categoryName: 'Midjourney' })
                                })
                            })
                        })
                    ]
                }),
                l && null == n
                    ? (0, r.jsx)(s.$jN, { className: b.spinner })
                    : (0, r.jsxs)('div', {
                          className: b.cardsContainer,
                          children: [u.map((e) => (0, r.jsx)(h.Z, { entry: e }, e.guildId)), c && null != i ? (0, r.jsx)(h.m, { onClick: i }) : null]
                      })
            ]
        })
    });
}
let j = (e) => {
    let { channel: t, directoryEntries: n, handleCreateOrAddGuild: l, searchQuery: o, setSearchQuery: c, handleClearSearch: d, handleSearchKeyPress: p, currentCategoryId: C, handleSelectCategory: y, categoryCounts: j, allEntriesCount: O, isLoading: E } = e,
        N = (0, a.e7)([u.Z], () => u.Z.getGuild(t.getGuildId()));
    return null != N && N.hasFeature(m.oNc.SHARD)
        ? (0, r.jsx)(v, {
              guild: N,
              directoryEntries: n,
              handleCreateOrAddGuild: l,
              isLoading: E
          })
        : (0, r.jsx)('div', {
              className: b.pageContainer,
              children: (0, r.jsxs)(s.yWw, {
                  className: b.scroller,
                  children: [
                      (0, r.jsx)(x, {
                          searchQuery: o,
                          setSearchQuery: c,
                          handleClearSearch: d,
                          handleSearchKeyPress: p
                      }),
                      (0, r.jsx)(s.h21, {
                          orientation: 'horizontal',
                          children: (0, r.jsxs)(s.njP, {
                              className: _.tabBar,
                              type: 'top',
                              look: 'brand',
                              selectedItem: C,
                              onItemSelect: (e) => {
                                  y(e);
                              },
                              children: [
                                  (0, r.jsx)(
                                      s.njP.Item,
                                      {
                                          className: _.tabBarItem,
                                          id: f.AR.ALL,
                                          children: ''.concat(g.NW.string(g.t.hEAa2d), ' (').concat(O, ')')
                                      },
                                      f.AR.ALL
                                  ),
                                  (0, f.b7)(t.id).map((e) => {
                                      let { value: t, label: n } = e;
                                      return (0, r.jsx)(
                                          s.njP.Item,
                                          {
                                              className: _.tabBarItem,
                                              id: t,
                                              children: ''.concat(n, ' ').concat(null != j[t] ? '('.concat(j[t], ')') : '')
                                          },
                                          t
                                      );
                                  })
                              ]
                          })
                      }),
                      E && null == n
                          ? (0, r.jsx)(s.$jN, { className: b.spinner })
                          : null == n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, r.jsxs)(
                                      i.Fragment,
                                      {
                                          children: [
                                              void 0 !== e.header
                                                  ? (0, r.jsx)(s.Text, {
                                                        variant: 'text-md/semibold',
                                                        className: _.sectionHeader,
                                                        children: e.header
                                                    })
                                                  : null,
                                              (0, r.jsxs)('div', {
                                                  className: b.cardsContainer,
                                                  children: [e.entries.map((e) => (0, r.jsx)(h.Z, { entry: e }, e.guildId)), e.appendEndCard && null != l ? (0, r.jsx)(h.m, { onClick: l }) : null]
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
