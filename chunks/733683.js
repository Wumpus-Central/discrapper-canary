n.d(t, {
    x: function () {
        return C;
    }
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(752877),
    c = n(772848),
    d = n(374470),
    u = n(477690),
    m = n(481060),
    h = n(624138),
    g = n(981631),
    x = n(388032),
    p = n(4122);
function f(e, t, n) {
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
    v = (0, h.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    _ = (0, h.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    I = {
        tension: 140,
        friction: 30
    },
    N = {
        tension: 800,
        friction: 20
    };
class T extends (i = l.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + _ / 2;
    }
    getProgressHeight(e) {
        let { tiers: t, progress: n } = this.props,
            i = t[e],
            r = t[e + 1];
        if (null == r || n === i.numRequired) return i.y;
        let l = r.y - i.y,
            a = r.numRequired - i.numRequired,
            s = n - i.numRequired;
        return i.y + (s / a) * l;
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
            a = null != l ? l.numRequired : null,
            s = null != a ? a - e : null;
        return (0, r.jsxs)(
            m.TooltipLayer,
            {
                targetElementRef: this.foregroundTooltipElementRef,
                position: 'right',
                color: m.Tooltip.Colors.BLACK,
                tooltipClassName: p.foregroundTooltip,
                children: [
                    (0, r.jsx)('div', { children: x.intl.format(x.t.gDsyBw, { numSubscriptions: e }) }),
                    null != s && null != l
                        ? (0, r.jsx)('div', {
                              className: p.tooltipMuted,
                              children: x.intl.format(x.t['2U9MDg'], {
                                  number: s,
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
        let { progress: a, tiers: s } = this.props,
            c = s[n],
            d = a >= e.numRequired,
            u = null != c && e.key === c.key,
            h = e.key === s[0].key;
        l = h ? p.tierFirst : u ? p.tierCurrent : d ? p.tierAccomplished : p.tierInProgress;
        let g = e.y - (h ? 0 : _ / 2),
            x = this.state.tierMarkerActive === t,
            f = !h && u && x;
        return (0, r.jsx)(
            m.Tooltip,
            {
                text: this.renderTierMarkerTooltip(e),
                position: 'right',
                'aria-label': null !== (i = e.name) && void 0 !== i ? i : '',
                children: (e) =>
                    (0, r.jsx)(m.Spring, {
                        from: { scale: 1 },
                        to: { scale: f ? 1.625 : 1 },
                        config: N,
                        children: (t) =>
                            (0, r.jsx)(o.animated.div, {
                                ...e,
                                className: l,
                                style: {
                                    top: g,
                                    transform: t.scale.interpolate((e) => 'scale('.concat(e, ')'))
                                },
                                children:
                                    f &&
                                    (0, r.jsx)(m.CheckmarkLargeIcon, {
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
                    width: v,
                    height: e,
                    fill: 'white'
                }),
                t.map((e) =>
                    (0, r.jsx)(
                        'circle',
                        {
                            cx: v / 2,
                            cy: e.y,
                            r: v / 2,
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
                (0, r.jsx)(m.Spring, {
                    from: { height: 0 },
                    to: { height: n },
                    config: I,
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
            className: s()(e, p.progressBar),
            style: { height: i },
            children: [
                (0, r.jsxs)('svg', {
                    viewBox: '0 0 '.concat(v, ' ').concat(i),
                    width: v,
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
            f(this, 'state', {
                showForegroundTooltip: !1,
                foregroundTooltipY: 0,
                tierMarkerActive: 0,
                finishedInitialAnimation: !1
            }),
            f(this, 'foregroundTooltipElementRef', l.createRef()),
            f(this, 'tierMarkerMaskId', (0, c.Z)()),
            f(this, 'handleForegroundMouseEnter', (e) => {
                this.setState({ showForegroundTooltip: !0 }), this.handleForegroundMouseMove(e);
            }),
            f(this, 'handleForegroundMouseMove', (e) => {
                if (!(0, d.k)(e.target)) return;
                let t = e.target.getBoundingClientRect(),
                    n = e.clientY - t.top;
                n !== this.state.foregroundTooltipY && this.setState({ foregroundTooltipY: n });
            }),
            f(this, 'handleForegroundMouseLeave', () => {
                this.setState({ showForegroundTooltip: !1 });
            }),
            f(this, 'handleForegroundFrame', (e) => {
                let { height: t } = e,
                    { tiers: n, progress: i, onAnimatedTierMaker: r } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let a = n[e],
                        s = l === e;
                    if (t + 20 >= a.y && i >= a.numRequired) {
                        !s && (this.setState({ tierMarkerActive: e }), null != r && r(a));
                        return;
                    }
                }
            }),
            f(this, 'handleFinishedInitialAnimation', () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
f(T, 'defaultProps', { initialAnimationDelay: 0 }), (t.Z = T);
