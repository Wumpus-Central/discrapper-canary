n.d(t, { default: () => p });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(313201),
    c = n(430824),
    s = n(427679),
    d = n(939863),
    u = n(540186),
    h = n(609776),
    g = n(289584),
    _ = n(180899),
    m = n(157925),
    b = n(388032),
    x = n(879656);
function f(e) {
    let { guild: t, channel: n, stageInstance: i, headerId: l, onClose: o, loading: c, error: s, onSave: u, defaultOptions: g, isSlideReady: _ } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: x.content,
                children: [
                    (0, r.jsx)(d.Z, {
                        children: (0, r.jsx)('div', {
                            className: x.stageIconBackground,
                            children: (0, r.jsx)(a.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: x.stageIcon
                            })
                        })
                    }),
                    (0, r.jsx)(a.X6q, {
                        id: l,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: x.headerTitle,
                        children: null == i ? b.NW.string(b.t.DDF0cH) : b.NW.string(b.t.YPdQOj)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: x.headerSubtitle,
                        children: null == i ? b.NW.string(b.t.bqQIwc) : b.NW.string(b.t['I+9bLy'])
                    })
                ]
            }),
            (0, r.jsx)(h.Z, {
                guild: t,
                channel: n,
                onSave: u,
                error: s,
                loading: c,
                onClose: o,
                defaultOptions: g,
                isSlideReady: _
            })
        ]
    });
}
function p(e) {
    var t,
        n,
        { channel: d, onClose: h, transitionState: b } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'onClose', 'transitionState']);
    let N = (0, o.Dt)(),
        v = (0, l.e7)([c.Z], () => c.Z.getGuild(d.guild_id)),
        j = i.useMemo(() => s.Z.getStageInstanceByChannel(d.id), [d.id]),
        { loading: I, error: O, onSave: y } = (0, g.Z)(d, h),
        {
            modalStep: C,
            setModalStep: E,
            readySlide: S,
            handleSlideReady: T,
            savedOptions: w,
            handleSettingsSave: P,
            handleDelayedSave: k
        } = (0, _.Z)({
            stageInstance: j,
            defaultStep: m.lv.STAGE_CHANNEL_SETTINGS,
            error: O,
            onSave: y
        });
    return (i.useEffect(() => {
        null == v && h();
    }, [v, h]),
    null == v)
        ? null
        : (0, r.jsx)(
              a.Y0X,
              ((t = (function (e) {
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
              })(
                  {
                      transitionState: b,
                      'aria-labelledby': N
                  },
                  p
              )),
              (n = n =
                  {
                      size: a.CgR.SMALL,
                      children: (0, r.jsxs)(a.MyZ, {
                          activeSlide: C,
                          width: 440,
                          onSlideReady: T,
                          children: [
                              (0, r.jsx)(a.Mi4, {
                                  id: m.lv.STAGE_CHANNEL_SETTINGS,
                                  children: (0, r.jsx)('div', {
                                      className: x.slideContainer,
                                      children: (0, r.jsx)(f, {
                                          guild: v,
                                          channel: d,
                                          stageInstance: j,
                                          headerId: N,
                                          onClose: h,
                                          loading: I,
                                          error: O,
                                          onSave: P,
                                          defaultOptions: w,
                                          isSlideReady: S === m.lv.STAGE_CHANNEL_SETTINGS
                                      })
                                  })
                              }),
                              (0, r.jsx)(a.Mi4, {
                                  id: m.lv.PUBLIC_STAGE_PREVIEW,
                                  children: (0, r.jsx)('div', {
                                      className: x.slideContainer,
                                      children: (0, r.jsx)(u.Z, {
                                          headerId: N,
                                          guild: v,
                                          channel: d,
                                          stageData: w,
                                          loading: I,
                                          onNext: k,
                                          onCancel: h,
                                          onBack: () => E(m.lv.STAGE_CHANNEL_SETTINGS)
                                      })
                                  })
                              })
                          ]
                      })
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t)
          );
}
