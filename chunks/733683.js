n.d(t, {
    Z: () => y,
    x: () => j
}),
    n(388685);
var r,
    i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(200100),
    c = n(772848),
    d = n(374470),
    u = n(477690),
    m = n(481060),
    g = n(624138),
    p = n(981631),
    h = n(680278),
    f = n(388032),
    x = n(354444);
function b(e, t, n) {
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
let j = -1,
    N = (0, g.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    _ = (0, g.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    v = {
        tension: 140,
        friction: 30
    },
    O = {
        tension: 800,
        friction: 20
    };
class C extends (r = s.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + _ / 2;
    }
    getProgressHeight(e) {
        let { tiers: t, progress: n } = this.props,
            r = t[e],
            i = t[e + 1];
        if (null == i || n === r.numRequired) return r.y;
        let s = i.y - r.y,
            l = i.numRequired - r.numRequired,
            a = n - r.numRequired;
        return r.y + (a / l) * s;
    }
    getCurrentTierIndex() {
        let { currentTier: e, tiers: t } = this.props;
        for (let n = t.length - 1; n > 0; n--) if (e >= t[n].key) return n;
        return 0;
    }
    getTierDisabled(e) {
        let { currentTier: t, progress: n } = this.props;
        return t < e.key && n >= e.numRequired;
    }
    renderForegroundTooltip() {
        let { progress: e, tiers: t } = this.props,
            { showForegroundTooltip: n, foregroundTooltipY: r } = this.state;
        if (!n || null == this.foregroundTooltipElementRef.current) return null;
        let s = t[this.getCurrentTierIndex() + 1],
            l = null != s ? s.numRequired : null,
            a = null != l ? l - e : null;
        return (0, i.jsxs)(
            m.Cys,
            {
                targetElementRef: this.foregroundTooltipElementRef,
                position: 'right',
                color: m.ua7.Colors.BLACK,
                tooltipClassName: x.foregroundTooltip,
                children: [
                    (0, i.jsx)('div', { children: f.NW.format(f.t.gDsyBw, { numSubscriptions: e }) }),
                    null != a && a > 0 && null != s
                        ? (0, i.jsx)('div', {
                              className: x.tooltipMuted,
                              children: f.NW.format(f.t['2U9MDg'], {
                                  number: a,
                                  tier: s.name
                              })
                          })
                        : null
                ]
            },
            r
        );
    }
    renderTierMarkerTooltip(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === p.Eu4.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return (0, i.jsx)('div', {
            children: this.getTierDisabled(e)
                ? (0, i.jsx)('div', { children: f.NW.formatToPlainString(h.Z['9CtPjo'], { perk: e.name }) })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('div', { children: e.name }),
                          (0, i.jsx)('div', {
                              children: f.NW.format(f.t.AkLa6u, {
                                  subscribers: n,
                                  numRequired: e.numRequired
                              })
                          })
                      ]
                  })
        });
    }
    renderTierMarker(e, t, n) {
        var r;
        let s,
            { progress: l, tiers: a } = this.props,
            c = a[n],
            d = l >= e.numRequired,
            u = null != c && e.key === c.key,
            g = e.key === a[0].key,
            p = this.getTierDisabled(e);
        s = g ? x.tierFirst : p ? x.tierInProgress : u ? x.tierCurrent : d ? x.tierAccomplished : x.tierInProgress;
        let h = e.y - (g ? 0 : _ / 2),
            f = this.state.tierMarkerActive >= t,
            j = !g && u && f;
        return (0, i.jsx)(
            m.ua7,
            {
                text: this.renderTierMarkerTooltip(e),
                position: 'right',
                'aria-label': null != (r = e.name) ? r : '',
                children: (e) =>
                    (0, i.jsx)(m.AMe, {
                        from: { scale: 1 },
                        to: { scale: j ? 1.625 : 1 },
                        config: O,
                        children: (t) => {
                            var n, r;
                            return (0, i.jsx)(
                                o.animated.div,
                                ((n = (function (e) {
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
                                                b(e, t, n[t]);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (r = r =
                                    {
                                        className: s,
                                        style: {
                                            top: h,
                                            transform: t.scale.interpolate((e) => 'scale('.concat(e, ')'))
                                        },
                                        children:
                                            j &&
                                            (0, i.jsx)(m.dz2, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: x.currentTierIcon
                                            })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                n)
                            );
                        }
                    })
            },
            e.key
        );
    }
    renderProgressMask(e) {
        let { tiers: t } = this.props;
        return (0, i.jsxs)('mask', {
            id: ''.concat(this.tierMarkerMaskId),
            children: [
                (0, i.jsx)('rect', {
                    x: '0',
                    y: '0',
                    width: N,
                    height: e,
                    fill: 'white'
                }),
                t.map((e) =>
                    (0, i.jsx)(
                        'circle',
                        {
                            cx: N / 2,
                            cy: e.y,
                            r: N / 2,
                            fill: 'black'
                        },
                        e.key
                    )
                )
            ]
        });
    }
    renderProgressBar(e, t) {
        let n = this.getProgressHeight(t),
            { finishedInitialAnimation: r, showForegroundTooltip: s } = this.state;
        return (0, i.jsxs)('g', {
            mask: 'url(#'.concat(this.tierMarkerMaskId, ')'),
            children: [
                (0, i.jsx)('rect', {
                    className: x.background,
                    height: e,
                    fill: 'currentColor'
                }),
                (0, i.jsx)(m.AMe, {
                    from: { height: 0 },
                    to: { height: n },
                    config: v,
                    delay: r ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: r ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(o.animated.rect, {
                            className: x.foreground,
                            height: e.height.interpolate((e) => Math.max(0, e)),
                            onMouseEnter: this.handleForegroundMouseEnter,
                            onMouseLeave: this.handleForegroundMouseLeave,
                            onMouseMove: s ? this.handleForegroundMouseMove : void 0,
                            fill: 'currentColor'
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, tiers: t } = this.props,
            n = this.getCurrentTierIndex(),
            r = this.getTotalHeight();
        return (0, i.jsxs)('div', {
            className: a()(e, x.progressBar),
            style: { height: r },
            children: [
                (0, i.jsxs)('svg', {
                    viewBox: '0 0 '.concat(N, ' ').concat(r),
                    width: N,
                    height: r,
                    children: [this.renderProgressMask(r), this.renderProgressBar(r, n)]
                }),
                (0, i.jsx)('div', {
                    ref: this.foregroundTooltipElementRef,
                    style: { top: this.state.foregroundTooltipY },
                    className: x.foregroundTooltipPosition
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
                this.renderForegroundTooltip()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                showForegroundTooltip: !1,
                foregroundTooltipY: 0,
                tierMarkerActive: 0,
                finishedInitialAnimation: !1
            }),
            b(this, 'foregroundTooltipElementRef', s.createRef()),
            b(this, 'tierMarkerMaskId', (0, c.Z)()),
            b(this, 'handleForegroundMouseEnter', (e) => {
                this.setState({ showForegroundTooltip: !0 }), this.handleForegroundMouseMove(e);
            }),
            b(this, 'handleForegroundMouseMove', (e) => {
                if (!(0, d.k)(e.target)) return;
                let t = e.target.getBoundingClientRect(),
                    n = e.clientY - t.top;
                n !== this.state.foregroundTooltipY && this.setState({ foregroundTooltipY: n });
            }),
            b(this, 'handleForegroundMouseLeave', () => {
                this.setState({ showForegroundTooltip: !1 });
            }),
            b(this, 'handleForegroundFrame', (e) => {
                let { height: t } = e,
                    { tiers: n, progress: r, onAnimatedTierMaker: i } = this.props,
                    { tierMarkerActive: s } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let l = n[e],
                        a = s === e;
                    if (t + 20 >= l.y && r >= l.numRequired) {
                        a || (this.setState({ tierMarkerActive: e }), null != i && i(l));
                        return;
                    }
                }
            }),
            b(this, 'handleFinishedInitialAnimation', () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
b(C, 'defaultProps', { initialAnimationDelay: 0 });
let y = C;
