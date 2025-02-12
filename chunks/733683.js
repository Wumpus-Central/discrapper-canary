n.d(t, {
    Z: () => E,
    x: () => C
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(642128),
    c = n(772848),
    d = n(374470),
    u = n(477690),
    m = n(481060),
    h = n(624138),
    g = n(981631),
    x = n(388032),
    p = n(661260);
function _(e, t, n) {
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
let C = -1,
    f = (0, h.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    v = (0, h.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    N = {
        tension: 140,
        friction: 30
    },
    j = {
        tension: 800,
        friction: 20
    };
class I extends (i = l.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + v / 2;
    }
    getProgressHeight(e) {
        let { tiers: t, progress: n } = this.props,
            i = t[e],
            r = t[e + 1];
        if (null == r || n === i.numRequired) return i.y;
        let l = r.y - i.y,
            s = r.numRequired - i.numRequired,
            a = n - i.numRequired;
        return i.y + (a / s) * l;
    }
    getCurrentTierIndex() {
        let { tiers: e, progress: t } = this.props;
        for (let n = e.length - 1; n > 0; n--) if (t >= e[n].numRequired) return n;
        return 0;
    }
    renderForegroundTooltip() {
        let { progress: e, tiers: t } = this.props,
            { showForegroundTooltip: n, foregroundTooltipY: i } = this.state;
        if (!n || null == this.foregroundTooltipElementRef.current) return null;
        let l = t[this.getCurrentTierIndex() + 1],
            s = null != l ? l.numRequired : null,
            a = null != s ? s - e : null;
        return (0, r.jsxs)(
            m.Cys,
            {
                targetElementRef: this.foregroundTooltipElementRef,
                position: 'right',
                color: m.ua7.Colors.BLACK,
                tooltipClassName: p.foregroundTooltip,
                children: [
                    (0, r.jsx)('div', { children: x.intl.format(x.t.gDsyBw, { numSubscriptions: e }) }),
                    null != a && null != l
                        ? (0, r.jsx)('div', {
                              className: p.tooltipMuted,
                              children: x.intl.format(x.t['2U9MDg'], {
                                  number: a,
                                  tier: l.name
                              })
                          })
                        : null
                ]
            },
            i
        );
    }
    renderTierMarkerTooltip(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === g.Eu4.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return (0, r.jsxs)('div', {
            className: p.__invalid_tierTooltip,
            children: [
                (0, r.jsx)('div', { children: e.name }),
                (0, r.jsx)('div', {
                    children: x.intl.format(x.t.AkLa6u, {
                        subscribers: n,
                        numRequired: e.numRequired
                    })
                })
            ]
        });
    }
    renderTierMarker(e, t, n) {
        var i;
        let l;
        let { progress: s, tiers: a } = this.props,
            c = a[n],
            d = s >= e.numRequired,
            u = null != c && e.key === c.key,
            h = e.key === a[0].key;
        l = h ? p.tierFirst : u ? p.tierCurrent : d ? p.tierAccomplished : p.tierInProgress;
        let g = e.y - (h ? 0 : v / 2),
            x = this.state.tierMarkerActive === t,
            _ = !h && u && x;
        return (0, r.jsx)(
            m.ua7,
            {
                text: this.renderTierMarkerTooltip(e),
                position: 'right',
                'aria-label': null !== (i = e.name) && void 0 !== i ? i : '',
                children: (e) =>
                    (0, r.jsx)(m.AMe, {
                        from: { scale: 1 },
                        to: { scale: _ ? 1.625 : 1 },
                        config: j,
                        children: (t) =>
                            (0, r.jsx)(o.animated.div, {
                                ...e,
                                className: l,
                                style: {
                                    top: g,
                                    transform: t.scale.interpolate((e) => 'scale('.concat(e, ')'))
                                },
                                children:
                                    _ &&
                                    (0, r.jsx)(m.dz2, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: p.currentTierIcon
                                    })
                            })
                    })
            },
            e.key
        );
    }
    renderProgressMask(e) {
        let { tiers: t } = this.props;
        return (0, r.jsxs)('mask', {
            id: ''.concat(this.tierMarkerMaskId),
            children: [
                (0, r.jsx)('rect', {
                    x: '0',
                    y: '0',
                    width: f,
                    height: e,
                    fill: 'white'
                }),
                t.map((e) =>
                    (0, r.jsx)(
                        'circle',
                        {
                            cx: f / 2,
                            cy: e.y,
                            r: f / 2,
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
            { finishedInitialAnimation: i, showForegroundTooltip: l } = this.state;
        return (0, r.jsxs)('g', {
            mask: 'url(#'.concat(this.tierMarkerMaskId, ')'),
            children: [
                (0, r.jsx)('rect', {
                    className: p.background,
                    height: e,
                    fill: 'currentColor'
                }),
                (0, r.jsx)(m.AMe, {
                    from: { height: 0 },
                    to: { height: n },
                    config: N,
                    delay: i ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: i ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, r.jsx)(o.animated.rect, {
                            className: p.foreground,
                            height: e.height.interpolate((e) => Math.max(0, e)),
                            onMouseEnter: this.handleForegroundMouseEnter,
                            onMouseLeave: this.handleForegroundMouseLeave,
                            onMouseMove: l ? this.handleForegroundMouseMove : void 0,
                            fill: 'currentColor'
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, tiers: t } = this.props,
            n = this.getCurrentTierIndex(),
            i = this.getTotalHeight();
        return (0, r.jsxs)('div', {
            className: a()(e, p.progressBar),
            style: { height: i },
            children: [
                (0, r.jsxs)('svg', {
                    viewBox: '0 0 '.concat(f, ' ').concat(i),
                    width: f,
                    height: i,
                    children: [this.renderProgressMask(i), this.renderProgressBar(i, n)]
                }),
                (0, r.jsx)('div', {
                    ref: this.foregroundTooltipElementRef,
                    style: { top: this.state.foregroundTooltipY },
                    className: p.foregroundTooltipPosition
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
                this.renderForegroundTooltip()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                showForegroundTooltip: !1,
                foregroundTooltipY: 0,
                tierMarkerActive: 0,
                finishedInitialAnimation: !1
            }),
            _(this, 'foregroundTooltipElementRef', l.createRef()),
            _(this, 'tierMarkerMaskId', (0, c.Z)()),
            _(this, 'handleForegroundMouseEnter', (e) => {
                this.setState({ showForegroundTooltip: !0 }), this.handleForegroundMouseMove(e);
            }),
            _(this, 'handleForegroundMouseMove', (e) => {
                if (!(0, d.k)(e.target)) return;
                let t = e.target.getBoundingClientRect(),
                    n = e.clientY - t.top;
                n !== this.state.foregroundTooltipY && this.setState({ foregroundTooltipY: n });
            }),
            _(this, 'handleForegroundMouseLeave', () => {
                this.setState({ showForegroundTooltip: !1 });
            }),
            _(this, 'handleForegroundFrame', (e) => {
                let { height: t } = e,
                    { tiers: n, progress: i, onAnimatedTierMaker: r } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let s = n[e],
                        a = l === e;
                    if (t + 20 >= s.y && i >= s.numRequired) {
                        a || (this.setState({ tierMarkerActive: e }), null != r && r(s));
                        return;
                    }
                }
            }),
            _(this, 'handleFinishedInitialAnimation', () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
_(I, 'defaultProps', { initialAnimationDelay: 0 });
let E = I;
