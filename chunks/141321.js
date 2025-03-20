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
    b = n(806252);
function v(e) {
    let { onOpen: t, onClose: n, className: v, 'data-jump-section': y } = e,
        x = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        E = (0, l.Q3)('RecentsButton'),
        j = i.useRef(null),
        O = (0, a.e7)([p.ZP], () => (null == x ? void 0 : x.id) != null && p.ZP.getMentionCount(x.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: N } = c.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        C = (0, a.e7)([s.Z], () => N && s.Z.getUnseenInviteCount() > 0),
        I = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, r.jsx)(f.k, {
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: O },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) => {
            var a, l;
            return (0, r.jsxs)('div', {
                ref: j,
                className: b.recentsIcon,
                children: [
                    N &&
                        (0, r.jsx)(h.Z, {
                            inboxIconRef: j,
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
                                    iconSize: E ? I : void 0,
                                    'aria-label': _.NW.string(_.t.GSmTKC),
                                    tooltip: t ? null : _.NW.string(_.t.GSmTKC),
                                    selected: t,
                                    showBadge: O || C || i,
                                    'data-jump-section': y
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
