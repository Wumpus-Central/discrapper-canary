t.d(n, { default: () => N });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    s = t(313201),
    o = t(430824),
    c = t(427679),
    d = t(939863),
    u = t(540186),
    _ = t(609776),
    h = t(289584),
    x = t(180899),
    m = t(157925),
    g = t(388032),
    b = t(456249);
function v(e) {
    let { guild: n, channel: t, stageInstance: i, headerId: a, onClose: s, loading: o, error: c, onSave: u, defaultOptions: h, isSlideReady: x } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: b.content,
                children: [
                    (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)('div', {
                            className: b.stageIconBackground,
                            children: (0, l.jsx)(r.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: b.stageIcon
                            })
                        })
                    }),
                    (0, l.jsx)(r.X6q, {
                        id: a,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: b.headerTitle,
                        children: null == i ? g.intl.string(g.t.DDF0cH) : g.intl.string(g.t.YPdQOj)
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: b.headerSubtitle,
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
                isSlideReady: x
            })
        ]
    });
}
function N(e) {
    let { channel: n, onClose: t, transitionState: d, ..._ } = e,
        g = (0, s.Dt)(),
        N = (0, a.e7)([o.Z], () => o.Z.getGuild(n.guild_id)),
        j = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: I, error: p, onSave: C } = (0, h.Z)(n, t),
        {
            modalStep: f,
            setModalStep: E,
            readySlide: S,
            handleSlideReady: T,
            savedOptions: k,
            handleSettingsSave: A,
            handleDelayedSave: Z
        } = (0, x.Z)({
            stageInstance: j,
            defaultStep: m.lv.STAGE_CHANNEL_SETTINGS,
            error: p,
            onSave: C
        });
    return (i.useEffect(() => {
        null == N && t();
    }, [N, t]),
    null == N)
        ? null
        : (0, l.jsx)(r.Y0X, {
              transitionState: d,
              'aria-labelledby': g,
              ..._,
              size: r.CgR.SMALL,
              children: (0, l.jsxs)(r.MyZ, {
                  activeSlide: f,
                  width: 440,
                  onSlideReady: T,
                  children: [
                      (0, l.jsx)(r.Mi4, {
                          id: m.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, l.jsx)('div', {
                              className: b.slideContainer,
                              children: (0, l.jsx)(v, {
                                  guild: N,
                                  channel: n,
                                  stageInstance: j,
                                  headerId: g,
                                  onClose: t,
                                  loading: I,
                                  error: p,
                                  onSave: A,
                                  defaultOptions: k,
                                  isSlideReady: S === m.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, l.jsx)(r.Mi4, {
                          id: m.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, l.jsx)('div', {
                              className: b.slideContainer,
                              children: (0, l.jsx)(u.Z, {
                                  headerId: g,
                                  guild: N,
                                  channel: n,
                                  stageData: k,
                                  loading: I,
                                  onNext: Z,
                                  onCancel: t,
                                  onBack: () => E(m.lv.STAGE_CHANNEL_SETTINGS)
                              })
                          })
                      })
                  ]
              })
          });
}
