n.d(t, { Z: () => y }), n(266796);
var r = n(200651),
    s = n(192379),
    o = n(392711),
    i = n.n(o),
    a = n(442837),
    c = n(668826),
    l = n(359013),
    u = n(120421),
    d = n(562858),
    f = n(3072),
    p = n(477839);
let m = n(797474);
function g(e) {
    let { PurchasableComponent: t, item: n, itemId: o, currentPoints: i, onPurchase: a } = e,
        u = (0, l.Tw)(o),
        d = (0, s.useCallback)(() => {
            (0, c.xD)(o), a();
        }, [a, o]);
    return (0, r.jsx)(t, {
        itemId: o,
        name: n.name,
        description: n.description,
        pointsDescription: n.pointsDescription,
        points: u,
        cost: n.cost,
        iconSrc: n.purchaseIconSrc,
        currentPoints: i,
        onPurchase: d
    });
}
function b(e) {
    let { PurchasableComponent: t, upgrade: n, upgradeId: o, currentPoints: i, numAlreadyPurchased: a, onPurchase: u } = e,
        d = (0, l.p9)(o),
        f = (0, s.useCallback)(() => {
            (0, c.Z_)(o), u();
        }, [u, o]);
    return (0, r.jsx)(t, {
        itemId: n.itemId,
        upgradeId: o,
        name: n.name,
        description: n.description,
        pointsDescription: n.pointsDescription,
        points: d,
        cost: n.cost({ numAlreadyPurchased: a }),
        iconSrc: n.purchaseIconSrc,
        currentPoints: i,
        onPurchase: f
    });
}
function y(e) {
    let { className: t, purchasePriority: n, itemsShown: o, PurchasableComponent: c } = e,
        l = (0, a.e7)([u.Z], () => u.Z.currentPoints),
        y = (0, a.e7)([u.Z], () => u.Z.purchasedItems),
        h = (0, a.e7)([u.Z], () => u.Z.lifetimePoints),
        v = (0, p.w2)(),
        x = (0, p.r7)(),
        N = (0, f.eR)(m),
        O = (0, s.useMemo)(
            () =>
                i()(n)
                    .filter((e) => {
                        switch (e.type) {
                            case d.h.ITEM:
                                return null == y[e.id];
                            case d.h.ITEM_UPGRADE:
                                var t, n;
                                let r = x[e.id],
                                    s = r.itemId,
                                    o = null != y[s],
                                    i = null !== (n = null === (t = y[s]) || void 0 === t ? void 0 : t.upgrades[e.id]) && void 0 !== n ? n : 0;
                                return (
                                    o &&
                                    (null == r.predicate ||
                                        r.predicate({
                                            numAlreadyPurchased: i,
                                            lifetimePoints: h
                                        }))
                                );
                        }
                    })
                    .take(null != o ? o : n.length)
                    .value(),
            [o, h, n, y, x]
        );
    return 0 === O.length
        ? null
        : (0, r.jsx)('div', {
              className: t,
              children: O.map((e) => {
                  switch (e.type) {
                      case d.h.ITEM:
                          return (0, r.jsx)(
                              g,
                              {
                                  itemId: e.id,
                                  item: v[e.id],
                                  currentPoints: l,
                                  PurchasableComponent: c,
                                  onPurchase: N
                              },
                              'item-'.concat(e.id)
                          );
                      case d.h.ITEM_UPGRADE:
                          var t, n;
                          let s = null !== (n = null === (t = y[x[e.id].itemId]) || void 0 === t ? void 0 : t.upgrades[e.id]) && void 0 !== n ? n : 0;
                          return (0, r.jsx)(
                              b,
                              {
                                  upgradeId: e.id,
                                  upgrade: x[e.id],
                                  currentPoints: l,
                                  numAlreadyPurchased: s,
                                  PurchasableComponent: c,
                                  onPurchase: N
                              },
                              'item-upgrade-'.concat(e.id)
                          );
                  }
              })
          });
}
