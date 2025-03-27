n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(540059),
    s = n(317632),
    c = n(602478),
    u = n(665149),
    d = n(388035),
    p = n(306680),
    m = n(594174),
    f = n(178088),
    h = n(222940),
    g = n(490897),
    _ = n(388032),
    b = n(806252);
function v(e) {
    let { onOpen: t, onClose: n, className: v, 'data-jump-section': x } = e,
        y = i.useRef(null),
        E = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        O = (0, l.Q3)('RecentsButton'),
        N = i.useRef(null),
        j = (0, o.e7)([p.ZP], () => (null == E ? void 0 : E.id) != null && p.ZP.getMentionCount(E.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: C } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        I = (0, o.e7)([s.Z], () => C && s.Z.getUnseenInviteCount() > 0),
        S = (0, a.dQu)(a.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, r.jsx)(f.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: j },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) => {
            var o, l;
            return (0, r.jsxs)('div', {
                ref: N,
                className: b.recentsIcon,
                children: [
                    C &&
                        (0, r.jsx)(h.Z, {
                            inboxIconRef: N,
                            recentsPopoutShown: t
                        }),
                    (0, r.jsx)(d.U, {
                        location: 'inbox-button',
                        targetElementRef: y,
                        children: (0, r.jsx)(
                            u.JO,
                            ((o = (function (e) {
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
                                    ref: y,
                                    className: v,
                                    onClick: e,
                                    icon: a.xx7,
                                    iconSize: O ? S : void 0,
                                    'aria-label': _.NW.string(_.t.GSmTKC),
                                    tooltip: t ? null : _.NW.string(_.t.GSmTKC),
                                    selected: t,
                                    showBadge: j || I || i,
                                    'data-jump-section': x
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            o)
                        )
                    })
                ]
            });
        }
    });
}
