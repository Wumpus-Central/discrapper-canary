n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651),
    a = n(192379),
    r = n(873546),
    s = n(442837),
    l = n(481060),
    c = n(830064),
    d = n(388905),
    o = n(625128),
    E = n(362762),
    p = n(703656),
    m = n(617136),
    _ = n(981631),
    u = n(186901),
    b = n(388032),
    N = n(574714),
    x = n(821744);
s.ZP.initialize();
let g = r.tq || r.Em;
function h(e) {
    let { match: t } = e,
        n = (0, s.e7)([E.Z], () => E.Z.getState('quests')),
        r = t.params.questId,
        h = (0, m._F)();
    if (
        (a.useEffect(() => {
            if (!g)
                null == n
                    ? (h({
                          questId: r,
                          event: _.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT
                      }),
                      o.Z.openNativeAppModal('quests', _.Etm.DEEP_LINK, {
                          type: u.jE.QUEST_HOME,
                          params: { questId: r }
                      }))
                    : n === _.kEZ.OPEN_FAIL &&
                      (0, p.dL)({
                          pathname: _.Z5c.QUEST_HOME,
                          hash: r
                      });
        }, [n, r, h]),
        g)
    )
        return (0, i.jsxs)('div', {
            className: N.mobileWebContainer,
            children: [
                (0, i.jsx)('img', {
                    src: x,
                    alt: '',
                    className: N.mobileWebImage
                }),
                (0, i.jsx)(l.Heading, {
                    variant: 'display-lg',
                    color: 'text-brand',
                    children: b.intl.string(b.t.xmotYm)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: N.mobileWebCopy,
                    children: b.intl.string(b.t.gtZK09)
                })
            ]
        });
    let P = null == n || n === _.kEZ.OPENING || n === _.kEZ.OPEN_FAIL;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                className: N.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsx)(d.ZP, {
                    children: P
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(d.Dx, { children: b.intl.string(b.t['Z+hCVV']) }), (0, i.jsx)(d.Hh, {})]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Dx, {
                                      className: N.appOpenedTitle,
                                      children: b.intl.string(b.t.csrAMD)
                                  }),
                                  (0, i.jsx)(d.DK, { children: b.intl.string(b.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
