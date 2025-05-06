n.d(t, { Z: () => h });
var i = n(255367),
    r = n(197723),
    s = n(704215),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(765585),
    d = n(429467),
    u = n(921944),
    m = n(388032),
    g = n(385255);
function p(e) {
    let { markAsDismissed: t } = e,
        { analyticsLocations: p } = (0, o.ZP)(a.Z.CUSTOM_STATUS_TAGS_COACHMARK);
    return (0, i.jsx)(c.Z, {
        inlineArt: !0,
        hideDismissButton: !0,
        dismissibleContent: s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        tryItText: (0, i.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: m.intl.string(m.t.RzWDqa)
        }),
        tryItButtonColor: l.Ttl.BRAND,
        onTryFeature: () => {
            t(u.L.TAKE_ACTION),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613)),
                        t = (0, d.Z)();
                    return (n) => {
                        var r, s;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (s = s =
                                {
                                    showLabelSelectorNewTooltip: !0,
                                    location: 'CustomStatusTagsCoachmark',
                                    sourceAnalyticsLocations: p,
                                    prompt: t
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            r)
                        );
                    };
                });
        },
        header: (0, i.jsx)(l.X6q, {
            variant: 'heading-sm/bold',
            color: 'text-primary',
            className: g.header,
            children: m.intl.string(m.t.jrzHRk)
        }),
        body: (0, i.jsx)(l.Text, {
            variant: 'text-xs/normal',
            color: 'text-secondary',
            className: g.body,
            children: m.intl.string(m.t.hA60Ul)
        }),
        position: 'top',
        align: 'center',
        artClassName: g.art,
        className: g.container,
        contentClassName: g.content,
        pointerClassName: g.pointer,
        dismissIcon: (0, i.jsx)(r.D, {}),
        dismissIconClassName: g.dismissIcon,
        onDismissIconClick: () => t(u.L.USER_DISMISS)
    });
}
function h(e) {
    let { children: t, markAsDismissed: n } = e;
    return (0, i.jsx)(l.yRy, {
        onRequestClose: () => n(u.L.INDIRECT_ACTION),
        position: 'top',
        align: 'center',
        shouldShow: !0,
        animation: l.yRy.Animation.TRANSLATE,
        renderPopout: () => (0, i.jsx)(p, { markAsDismissed: n }),
        children: t
    });
}
