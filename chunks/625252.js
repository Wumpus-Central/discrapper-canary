n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(37234),
    d = n(410030),
    u = n(626135),
    m = n(617136),
    g = n(497505),
    p = n(865719),
    h = n(341907),
    f = n(46140),
    b = n(981631),
    N = n(388032),
    x = n(788090),
    _ = n(66094);
function E() {
    let e = (0, l.wj)((0, d.ZP)()),
        t = (0, p.y)({ location: f.dr.USER_SETTINGS_GIFT_INVENTORY }),
        n = i.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []),
        s = i.useCallback(() => {
            (0, c.xf)(),
                (0, h.navigateToQuestHome)({ fromContent: g.jn.QUEST_HOME_MOVE_CALLOUT }),
                u.default.track(
                    b.rMx.QUEST_CONTENT_CLICKED,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ cta_name: m.jZ.VIEW_QUESTS }, (0, m.mH)(g.jn.QUEST_HOME_MOVE_CALLOUT))
                );
        }, []);
    return t === p.$.NEVER_SHOW
        ? null
        : (0, r.jsx)('div', {
              className: a()(x.container),
              style: n,
              children: (0, r.jsxs)('div', {
                  className: x.textContainer,
                  children: [
                      (0, r.jsxs)('div', {
                          className: x.headerContainer,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: _,
                                  className: x.icon
                              }),
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-lg/bold',
                                  color: 'always-white',
                                  children: N.NW.string(N.t.z8YP2N)
                              })
                          ]
                      }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: N.NW.string(N.t.IqmRZ2)
                      }),
                      (0, r.jsx)(o.zxk, {
                          size: 'large',
                          color: e ? o.Ttl.BRAND : o.Ttl.WHITE,
                          className: x.button,
                          onClick: s,
                          innerClassName: x.innerButton,
                          children: (0, r.jsx)(o.Text, {
                              variant: 'text-md/medium',
                              color: e ? 'always-white' : 'text-normal',
                              children: N.NW.string(N.t.GURBQk)
                          })
                      })
                  ]
              })
          });
}
