n.d(t, { Z: () => b });
var r = n(255367),
    i = n(197723),
    a = n(704215),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(765585),
    u = n(429467),
    d = n(921944),
    f = n(388032),
    _ = n(385255);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { markAsDismissed: t, onTryFeature: p } = e,
        { analyticsLocations: m } = (0, l.ZP)(s.Z.CUSTOM_STATUS_TAGS_COACHMARK),
        E = () => {
            (null == p || p(),
                t(d.L.TAKE_ACTION),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613)),
                        t = (0, u.Z)();
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            g(h({}, n), {
                                showLabelSelectorNewTooltip: !0,
                                location: 'CustomStatusTagsCoachmark',
                                sourceAnalyticsLocations: m,
                                prompt: t
                            })
                        );
                }));
        };
    return (0, r.jsx)(c.Z, {
        hideDismissButton: !0,
        dismissibleContent: a.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        tryItText: (0, r.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: f.intl.string(f.t.RzWDqa)
        }),
        tryItButtonColor: o.Ttl.BRAND,
        onTryFeature: E,
        header: (0, r.jsx)(o.X6q, {
            variant: 'heading-sm/bold',
            color: 'text-primary',
            children: f.intl.string(f.t.jrzHRk)
        }),
        body: (0, r.jsx)(o.Text, {
            variant: 'text-xs/normal',
            color: 'text-secondary',
            className: _.body,
            children: f.intl.string(f.t.hA60Ul)
        }),
        position: 'top',
        align: 'center',
        className: _.container,
        contentClassName: _.content,
        pointerClassName: _.pointer,
        dismissIcon: (0, r.jsx)(i.D, { size: 'xs' }),
        dismissIconClassName: _.dismissIcon,
        onDismissIconClick: () => t(d.L.USER_DISMISS)
    });
}
function b(e) {
    let { children: t, markAsDismissed: n, targetElementRef: i, onTryFeature: a, positionKey: s } = e;
    return (0, r.jsx)(o.yRy, {
        targetElementRef: i,
        onRequestClose: () => n(d.L.INDIRECT_ACTION),
        position: 'top',
        align: 'center',
        shouldShow: !0,
        animation: o.yRy.Animation.TRANSLATE,
        positionKey: s,
        renderPopout: () =>
            (0, r.jsx)(E, {
                markAsDismissed: n,
                onTryFeature: a
            }),
        children: t
    });
}
