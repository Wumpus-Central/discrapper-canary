t.d(n, { default: () => f });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(313201),
    o = t(430824),
    c = t(427679),
    d = t(939863),
    u = t(540186),
    _ = t(609776),
    h = t(289584),
    m = t(180899),
    x = t(157925),
    g = t(388032),
    v = t(456249);
function b(e) {
    let { guild: n, channel: t, stageInstance: i, headerId: r, onClose: s, loading: o, error: c, onSave: u, defaultOptions: h, isSlideReady: m } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: v.content,
                children: [
                    (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)('div', {
                            className: v.stageIconBackground,
                            children: (0, l.jsx)(a.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: v.stageIcon
                            })
                        })
                    }),
                    (0, l.jsx)(a.X6q, {
                        id: r,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: v.headerTitle,
                        children: null == i ? g.intl.string(g.t.DDF0cH) : g.intl.string(g.t.YPdQOj)
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: v.headerSubtitle,
                        children: null == i ? g.intl.string(g.t.bqQIwc) : g.intl.string(g.t['I+9bLy'])
                    })
                ]
            }),
            (0, l.jsx)(_.Z, {
                guild: n,
                channel: t,
                onSave: u,
                error: c,
                loading: o,
                onClose: s,
                defaultOptions: h,
                isSlideReady: m
            })
        ]
    });
}
function f(e) {
    let { channel: n, onClose: t, transitionState: d, ..._ } = e,
        g = (0, s.Dt)(),
        f = (0, r.e7)([o.Z], () => o.Z.getGuild(n.guild_id)),
        N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: j, error: C, onSave: I } = (0, h.Z)(n, t),
        {
            modalStep: p,
            setModalStep: E,
            readySlide: S,
            handleSlideReady: T,
            savedOptions: k,
            handleSettingsSave: Z,
            handleDelayedSave: y
        } = (0, m.Z)({
            stageInstance: N,
            defaultStep: x.lv.STAGE_CHANNEL_SETTINGS,
            error: C,
            onSave: I
        });
    return (i.useEffect(() => {
        null == f && t();
    }, [f, t]),
    null == f)
        ? null
        : (0, l.jsx)(a.Y0X, {
              transitionState: d,
              'aria-labelledby': g,
              ..._,
              size: a.CgR.SMALL,
              children: (0, l.jsxs)(a.MyZ, {
                  activeSlide: p,
                  width: 440,
                  onSlideReady: T,
                  children: [
                      (0, l.jsx)(a.Mi4, {
                          id: x.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(b, {
                                  guild: f,
                                  channel: n,
                                  stageInstance: N,
                                  headerId: g,
                                  onClose: t,
                                  loading: j,
                                  error: C,
                                  onSave: Z,
                                  defaultOptions: k,
                                  isSlideReady: S === x.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, l.jsx)(a.Mi4, {
                          id: x.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(u.Z, {
                                  headerId: g,
                                  guild: f,
                                  channel: n,
                                  stageData: k,
                                  loading: j,
                                  onNext: y,
                                  onCancel: t,
                                  onBack: () => E(x.lv.STAGE_CHANNEL_SETTINGS)
                              })
                          })
                      })
                  ]
              })
          });
}
