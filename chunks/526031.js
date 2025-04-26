n.d(t, { Z: () => g });
var i = n(200651),
    r = n(704215),
    s = n(481060),
    l = n(100527),
    a = n(906732),
    o = n(765585),
    c = n(429467),
    d = n(921944),
    u = n(388032),
    m = n(385255);
function p(e) {
    let { markAsDismissed: t } = e,
        { analyticsLocations: p } = (0, a.ZP)(l.Z.CUSTOM_STATUS_TAGS_COACHMARK);
    return (0, i.jsx)(o.Z, {
        dismissibleContent: r.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        tryItText: (0, i.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'text-brand',
            children: u.intl.string(u.t.RzWDqa)
        }),
        dismissText: (0, i.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'always-white',
            children: u.intl.string(u.t.TulDPj)
        }),
        onTryFeature: () => {
            t(d.L.TAKE_ACTION),
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613)),
                        t = (0, c.Z)();
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
        header: (0, i.jsx)(s.X6q, {
            variant: 'heading-sm/bold',
            color: 'always-white',
            className: m.header,
            children: u.intl.string(u.t.jrzHRk)
        }),
        body: (0, i.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'always-white',
            className: m.body,
            children: u.intl.string(u.t.hA60Ul)
        }),
        position: 'top',
        align: 'center',
        artClassName: m.art,
        className: m.container
    });
}
function g(e) {
    let { children: t, markAsDismissed: n } = e;
    return (0, i.jsx)(s.yRy, {
        onRequestClose: () => n(d.L.INDIRECT_ACTION),
        position: 'top',
        align: 'center',
        shouldShow: !0,
        animation: s.yRy.Animation.TRANSLATE,
        renderPopout: () => (0, i.jsx)(p, { markAsDismissed: n }),
        children: t
    });
}
