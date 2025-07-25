n.d(t, { Z: () => y });
var r = n(255367),
    i = n(197723),
    a = n(704215),
    o = n(755721),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(765585),
    d = n(429467),
    f = n(921944),
    _ = n(388032),
    p = n(385255);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { markAsDismissed: t, onTryFeature: h } = e,
        { analyticsLocations: g } = (0, c.ZP)(l.Z.CUSTOM_STATUS_TAGS_COACHMARK),
        b = () => {
            (null == h || h(),
                t(f.L.TAKE_ACTION),
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('31649').then(n.bind(n, 475613)),
                        t = (0, d.Z)();
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            E(m({}, n), {
                                showLabelSelectorNewTooltip: !0,
                                location: 'CustomStatusTagsCoachmark',
                                sourceAnalyticsLocations: g,
                                prompt: t
                            })
                        );
                }));
        };
    return (0, r.jsx)(u.Z, {
        hideDismissButton: !0,
        dismissibleContent: a.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        tryItText: (0, r.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: _.intl.string(_.t.RzWDqa)
        }),
        tryItButtonColor: o.Tt.BRAND,
        onTryFeature: b,
        header: (0, r.jsx)(s.X6q, {
            variant: 'heading-sm/bold',
            color: 'text-primary',
            children: _.intl.string(_.t.jrzHRk)
        }),
        body: (0, r.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'text-secondary',
            className: p.body,
            children: _.intl.string(_.t.hA60Ul)
        }),
        position: 'top',
        align: 'center',
        className: p.container,
        contentClassName: p.content,
        pointerClassName: p.pointer,
        dismissIcon: (0, r.jsx)(i.D, { size: 'xs' }),
        dismissIconClassName: p.dismissIcon,
        onDismissIconClick: () => t(f.L.USER_DISMISS)
    });
}
function y(e) {
    let { children: t, markAsDismissed: n, targetElementRef: i, onTryFeature: a, positionKey: o } = e;
    return (0, r.jsx)(s.yRy, {
        targetElementRef: i,
        onRequestClose: () => n(f.L.INDIRECT_ACTION),
        position: 'top',
        align: 'center',
        shouldShow: !0,
        animation: s.yRy.Animation.TRANSLATE,
        positionKey: o,
        renderPopout: () =>
            (0, r.jsx)(b, {
                markAsDismissed: n,
                onTryFeature: a
            }),
        children: t
    });
}
