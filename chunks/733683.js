n.d(t, {
    Z: () => E,
    x: () => _,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(666917),
    c = n(772848),
    d = n(374470),
    u = n(681715),
    g = n(477690),
    m = n(481060),
    p = n(624138),
    f = n(981631),
    h = n(130231),
    b = n(388032),
    x = n(31441);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = -1,
    v = (0, p.Mg)(g.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    O = (0, p.Mg)(g.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    C = {
        tension: 140,
        friction: 30,
    },
    y = {
        tension: 800,
        friction: 20,
    };
class N extends (r = l.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + O / 2;
    }
    getProgressHeight(e) {
        let t,
            { tiers: n, progress: r } = this.props,
            i = n[e];
        for (let e = n.length - 1; e > 0; e--) {
            if (r === n[e].numRequired) return n[e].y;
            if (r > n[e].numRequired) {
                t = n[e + 1];
                break;
            }
        }
        if (null == t) return i.y;
        let l = t.y - i.y,
            a = t.numRequired - i.numRequired,
            s = r - i.numRequired;
        return i.y + (s / a) * l;
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
        let l = t[this.getCurrentTierIndex() + 1],
            a = null != l ? l.numRequired : null,
            s = null != a ? a - e : null;
        return (0, i.jsxs)(
            m.gqK,
            {
                "data-migration-pending": !0,
                targetElementRef: this.foregroundTooltipElementRef,
                position: "right",
                color: m.aML.Colors.PRIMARY,
                tooltipClassName: x.foregroundTooltip,
                children: [
                    (0, i.jsx)("div", { children: b.intl.format(b.t.gDsyB9, { numSubscriptions: e }) }),
                    null != s && s > 0 && null != l
                        ? (0, i.jsx)("div", {
                              className: x.tooltipMuted,
                              children: b.intl.format(b.t["2U9MDp"], {
                                  number: s,
                                  tier: l.name,
                              }),
                          })
                        : null,
                ],
            },
            r,
        );
    }
    getTierMarkerTooltipText(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === f.Eu4.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? {
                  title: null,
                  body: b.intl.formatToPlainString(h.default["9CtPjt"], { perk: e.name }),
              }
            : {
                  title: e.name,
                  body: b.intl.format(b.t.AkLa6n, {
                      subscribers: n,
                      numRequired: e.numRequired,
                  }),
              };
    }
    renderTierMarker(e, t, n) {
        let r,
            { progress: l, tiers: a } = this.props,
            s = a[n],
            c = l >= e.numRequired,
            d = null != s && e.key === s.key,
            g = e.key === a[0].key,
            p = this.getTierDisabled(e);
        r = g ? x.tierFirst : p ? x.tierInProgress : d ? x.tierCurrent : c ? x.tierAccomplished : x.tierInProgress;
        let f = e.y - (g ? 0 : O / 2),
            h = this.state.tierMarkerActive >= t,
            b = !g && d && h,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            m.AMe,
            {
                from: { scale: 1 },
                to: { scale: b ? 1.625 : 1 },
                config: y,
                children: (t) => {
                    var n, l, a;
                    return (0, i.jsx)(u.i_, {
                        body: null != (n = null == j ? void 0 : j.body) ? n : "",
                        title: null != (l = null == j ? void 0 : j.title) ? l : void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": null != (a = e.name) ? a : "",
                        children: (0, i.jsx)(o.animated.div, {
                            className: r,
                            style: {
                                top: f,
                                transform: t.scale.interpolate((e) => "scale(".concat(e, ")")),
                            },
                            children:
                                b &&
                                (0, i.jsx)(m.dz2, {
                                    size: "md",
                                    color: "currentColor",
                                    className: x.currentTierIcon,
                                }),
                        }),
                    });
                },
            },
            e.key,
        );
    }
    renderProgressMask(e) {
        let { tiers: t } = this.props;
        return (0, i.jsxs)("mask", {
            id: "".concat(this.tierMarkerMaskId),
            children: [
                (0, i.jsx)("rect", {
                    x: "0",
                    y: "0",
                    width: v,
                    height: e,
                    fill: "white",
                }),
                t.map((e) =>
                    (0, i.jsx)(
                        "circle",
                        {
                            cx: v / 2,
                            cy: e.y,
                            r: v / 2,
                            fill: "black",
                        },
                        e.key,
                    ),
                ),
            ],
        });
    }
    renderProgressBar(e, t) {
        let n = this.getProgressHeight(t),
            { finishedInitialAnimation: r, showForegroundTooltip: l } = this.state;
        return (0, i.jsxs)("g", {
            mask: "url(#".concat(this.tierMarkerMaskId, ")"),
            children: [
                (0, i.jsx)("rect", {
                    className: x.background,
                    height: e,
                    fill: "currentColor",
                }),
                (0, i.jsx)(m.AMe, {
                    from: { height: 0 },
                    to: { height: n },
                    config: C,
                    delay: r ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: r ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(o.animated.rect, {
                            className: x.foreground,
                            height: e.height.interpolate((e) => Math.max(0, e)),
                            onMouseEnter: this.handleForegroundMouseEnter,
                            onMouseLeave: this.handleForegroundMouseLeave,
                            onMouseMove: l ? this.handleForegroundMouseMove : void 0,
                            fill: "currentColor",
                        }),
                }),
            ],
        });
    }
    render() {
        let { className: e, tiers: t } = this.props,
            n = this.getCurrentTierIndex(),
            r = this.getTotalHeight();
        return (0, i.jsxs)("div", {
            className: s()(e, x.progressBar),
            style: { height: r },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: "0 0 ".concat(v, " ").concat(r),
                    width: v,
                    height: r,
                    children: [this.renderProgressMask(r), this.renderProgressBar(r, n)],
                }),
                (0, i.jsx)("div", {
                    ref: this.foregroundTooltipElementRef,
                    style: { top: this.state.foregroundTooltipY },
                    className: x.foregroundTooltipPosition,
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
                this.renderForegroundTooltip(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            j(this, "state", {
                showForegroundTooltip: !1,
                foregroundTooltipY: 0,
                tierMarkerActive: 0,
                finishedInitialAnimation: !1,
            }),
            j(this, "foregroundTooltipElementRef", l.createRef()),
            j(this, "tierMarkerMaskId", (0, c.Z)()),
            j(this, "handleForegroundMouseEnter", (e) => {
                this.setState({ showForegroundTooltip: !0 }), this.handleForegroundMouseMove(e);
            }),
            j(this, "handleForegroundMouseMove", (e) => {
                if (!(0, d.kK)(e.target)) return;
                let t = e.target.getBoundingClientRect(),
                    n = e.clientY - t.top;
                n !== this.state.foregroundTooltipY && this.setState({ foregroundTooltipY: n });
            }),
            j(this, "handleForegroundMouseLeave", () => {
                this.setState({ showForegroundTooltip: !1 });
            }),
            j(this, "handleForegroundFrame", (e) => {
                let { height: t } = e,
                    { tiers: n, progress: r, onAnimatedTierMaker: i } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let a = n[e],
                        s = l === e;
                    if (t + 20 >= a.y && r >= a.numRequired) {
                        s || (this.setState({ tierMarkerActive: e }), null != i && i(a));
                        return;
                    }
                }
            }),
            j(this, "handleFinishedInitialAnimation", () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
j(N, "defaultProps", { initialAnimationDelay: 0 });
let E = N;
