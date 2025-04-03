r.d(t, { default: () => g });
var n = r(200651),
    s = r(192379),
    a = r(481060),
    o = r(600164),
    i = r(63063),
    c = r(497505),
    l = r(918701),
    d = r(981631),
    m = r(388032),
    u = r(698657),
    x = r(708901);
let f = (e) => {
    switch (e) {
        case c.jn.QUEST_BAR:
        case c.jn.QUEST_BAR_V2:
            return {
                location: !0,
                age: !0,
                activity: !0
            };
        case c.jn.ACTIVITY_PANEL:
        case c.jn.QUESTS_EMBED:
        case c.jn.QUEST_LIVE_STREAM:
            return { activity: !0 };
        default:
            return;
    }
};
function g(e) {
    let { transitionState: t, onClose: r, questContent: c, quest: g } = e,
        j = f(c),
        h = s.useMemo(() => {
            var e;
            return (0, l.Fs)({
                isTargetedDisclosure: null != j,
                gamePublisher: g.config.messages.gamePublisher,
                gameTitle: g.config.messages.gameTitle,
                cosponsorName: null == (e = g.config.cosponsorMetadata) ? void 0 : e.name
            });
        }, [g, j]);
    return (0, n.jsxs)(a.Y0X, {
        transitionState: t,
        size: a.CgR.DYNAMIC,
        className: u.modalRoot,
        children: [
            (0, n.jsxs)(a.xBx, {
                direction: o.Z.Direction.VERTICAL,
                separator: !1,
                className: u.modalHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: u.modalTop,
                        children: [
                            (0, n.jsx)('div', {
                                className: u.iconFrame,
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    src: x
                                })
                            }),
                            (0, n.jsx)(a.olH, {
                                className: u.closeBtn,
                                onClick: r
                            })
                        ]
                    }),
                    (0, n.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        children: m.NW.string(m.t.GcsZKC)
                    })
                ]
            }),
            (0, n.jsxs)(a.hzk, {
                className: u.modalContent,
                children: [
                    (0, n.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: u.upperBodyText,
                        children: h
                    }),
                    (0, n.jsx)(_, { targetedTraits: j }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: m.NW.format(m.t.tzq9WV, { privacySettingsUrl: i.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS) })
                    })
                ]
            }),
            (0, n.jsx)(a.mzw, {
                className: u.footer,
                children: (0, n.jsx)(a.zxk, {
                    onClick: r,
                    children: m.NW.string(m.t.cpT0Cg)
                })
            })
        ]
    });
}
function j(e) {
    let { location: t, age: r, activity: s } = e;
    return (0, n.jsxs)('ul', {
        className: u.targetList,
        children: [
            t &&
                (0, n.jsx)(h, {
                    icon: a.enf,
                    children: m.NW.string(m.t.xQSdPj)
                }),
            r &&
                (0, n.jsx)(h, {
                    icon: a.tBG,
                    children: m.NW.string(m.t.mYt7hY)
                }),
            s &&
                (0, n.jsx)(h, {
                    icon: a.iWm,
                    children: m.NW.string(m.t.XAsWxc)
                })
        ]
    });
}
function _(e) {
    let { targetedTraits: t } = e;
    return null != t
        ? (0, n.jsx)(
              j,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })({}, t)
          )
        : null;
}
function h(e) {
    let { icon: t, children: r } = e;
    return (0, n.jsxs)(a.Text, {
        variant: 'text-sm/medium',
        tag: 'li',
        className: u.targetItem,
        children: [
            (0, n.jsx)(t, {
                size: 'xs',
                color: 'currentColor'
            }),
            r
        ]
    });
}
