t.d(n, { default: () => j });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(313201),
    s = t(430824),
    c = t(427679),
    d = t(939863),
    u = t(540186),
    m = t(609776),
    _ = t(289584),
    h = t(180899),
    x = t(157925),
    g = t(388032),
    v = t(270824);
function b(e) {
    let { guild: n, channel: t, stageInstance: i, headerId: a, onClose: o, loading: s, error: c, onSave: u, defaultOptions: _, isSlideReady: h } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: v.content,
                children: [
                    (0, l.jsx)(d.Z, {
                        children: (0, l.jsx)('div', {
                            className: v.stageIconBackground,
                            children: (0, l.jsx)(r.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 32,
                                height: 32,
                                className: v.stageIcon
                            })
                        })
                    }),
                    (0, l.jsx)(r.X6q, {
                        id: a,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: v.headerTitle,
                        children: null == i ? g.intl.string(g.t.DDF0cH) : g.intl.string(g.t.YPdQOj)
                    }),
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: v.headerSubtitle,
                        children: null == i ? g.intl.string(g.t.bqQIwc) : g.intl.string(g.t['I+9bLy'])
                    })
                ]
            }),
            (0, l.jsx)(m.Z, {
                guild: n,
                channel: t,
                onSave: u,
                error: c,
                loading: s,
                onClose: o,
                defaultOptions: _,
                isSlideReady: h
            })
        ]
    });
}
function j(e) {
    let { channel: n, onClose: t, transitionState: d, ...m } = e,
        g = (0, o.Dt)(),
        j = (0, a.e7)([s.Z], () => s.Z.getGuild(n.guild_id)),
        N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
        { loading: I, error: f, onSave: p } = (0, _.Z)(n, t),
        {
            modalStep: C,
            setModalStep: E,
            readySlide: T,
            handleSlideReady: S,
            savedOptions: k,
            handleSettingsSave: Z,
            handleDelayedSave: y
        } = (0, h.Z)({
            stageInstance: N,
            defaultStep: x.lv.STAGE_CHANNEL_SETTINGS,
            error: f,
            onSave: p
        });
    return (i.useEffect(() => {
        null == j && t();
    }, [j, t]),
    null == j)
        ? null
        : (0, l.jsx)(r.Y0X, {
              transitionState: d,
              'aria-labelledby': g,
              ...m,
              size: r.CgR.SMALL,
              children: (0, l.jsxs)(r.MyZ, {
                  activeSlide: C,
                  width: 440,
                  onSlideReady: S,
                  children: [
                      (0, l.jsx)(r.Mi4, {
                          id: x.lv.STAGE_CHANNEL_SETTINGS,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(b, {
                                  guild: j,
                                  channel: n,
                                  stageInstance: N,
                                  headerId: g,
                                  onClose: t,
                                  loading: I,
                                  error: f,
                                  onSave: Z,
                                  defaultOptions: k,
                                  isSlideReady: T === x.lv.STAGE_CHANNEL_SETTINGS
                              })
                          })
                      }),
                      (0, l.jsx)(r.Mi4, {
                          id: x.lv.PUBLIC_STAGE_PREVIEW,
                          children: (0, l.jsx)('div', {
                              className: v.slideContainer,
                              children: (0, l.jsx)(u.Z, {
                                  headerId: g,
                                  guild: j,
                                  channel: n,
                                  stageData: k,
                                  loading: I,
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
