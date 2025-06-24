n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(317632),
    s = n(602478),
    c = n(665149),
    u = n(388035),
    d = n(306680),
    p = n(594174),
    h = n(178088),
    f = n(222940),
    g = n(490897),
    m = n(388032),
    b = n(264634);
function _(e) {
    let { onOpen: t, onClose: n, className: _, 'data-jump-section': O } = e,
        E = i.useRef(null),
        y = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        I = i.useRef(null),
        v = (0, l.e7)([d.ZP], () => (null == y ? void 0 : y.id) != null && d.ZP.getMentionCount(y.id, g.W.NOTIFICATION_CENTER) > 0),
        { enabled: C } = s.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
        S = (0, l.e7)([o.Z], () => C && o.Z.getUnseenInviteCount() > 0),
        N = (0, a.dQu)(a.TVs.modules.chat.INPUT_ICON_SIZE);
    return (0, r.jsx)(h.k, {
        targetElementRef: I,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: v },
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, i) => {
            var l, o;
            return (0, r.jsxs)('div', {
                ref: I,
                className: b.recentsIcon,
                children: [
                    C &&
                        (0, r.jsx)(f.Z, {
                            inboxIconRef: I,
                            recentsPopoutShown: t
                        }),
                    (0, r.jsx)(u.U, {
                        location: 'inbox-button',
                        targetElementRef: E,
                        children: (0, r.jsx)(
                            c.JO,
                            ((l = (function (e) {
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
                            (o = o =
                                {
                                    ref: E,
                                    className: _,
                                    onClick: e,
                                    icon: a.xx7,
                                    iconSize: N,
                                    'aria-label': m.intl.string(m.t.GSmTKC),
                                    tooltip: t ? null : m.intl.string(m.t.GSmTKC),
                                    selected: t,
                                    showBadge: v || S || i,
                                    'data-jump-section': O
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            l)
                        )
                    })
                ]
            });
        }
    });
}
