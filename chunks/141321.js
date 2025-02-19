n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(540059),
    s = n(317632),
    c = n(602478),
    d = n(665149),
    u = n(388035),
    p = n(306680),
    m = n(594174),
    f = n(178088),
    h = n(222940),
    g = n(490897),
    _ = n(388032),
    b = n(575219);
function v(e) {
    let { onOpen: t, onClose: n, className: v } = e,
        y = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        x = (0, l.Q3)('RecentsButton'),
        O = i.useRef(null),
        E = (0, a.e7)([p.ZP], () => (null == y ? void 0 : y.id) != null && p.ZP.getMentionCount(y.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: j } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        N = (0, a.e7)([s.Z], () => j && s.Z.getUnseenInviteCount() > 0),
        C = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, r.jsx)(f.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: E },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) => {
            var a, l;
            return (0, r.jsxs)('div', {
                ref: O,
                className: b.recentsIcon,
                children: [
                    j &&
                        (0, r.jsx)(h.Z, {
                            inboxIconRef: O,
                            recentsPopoutShown: t
                        }),
                    (0, r.jsx)(u.U, {
                        location: 'inbox-button',
                        children: (0, r.jsx)(
                            d.JO,
                            ((a = (function (e) {
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
                            })({}, n)),
                            (l = l =
                                {
                                    className: v,
                                    onClick: e,
                                    icon: o.xx7,
                                    iconSize: x ? C : void 0,
                                    'aria-label': _.NW.string(_.t.GSmTKC),
                                    tooltip: t ? null : _.NW.string(_.t.GSmTKC),
                                    selected: t,
                                    showBadge: E || N || i
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            a)
                        )
                    })
                ]
            });
        }
    });
}
